#!/bin/sh

# Inject BMP_URL environment variable into HTML
if [ -n "$BMP_URL" ]; then
    echo "Injecting BMP_URL: $BMP_URL"
    sed -i "s|<!-- <meta name=\"bmp-url\" content=\"REPLACE_WITH_ENV_VAR\"> -->|<meta name=\"bmp-url\" content=\"$BMP_URL\">|g" /usr/share/nginx/html/index.html

    # Write runtime env.js for the frontend to read
    echo "window.BMP_URL=\"$BMP_URL\";" > /usr/share/nginx/html/env.js

    # Also update config.json as fallback
    echo "{\"BMP_URL\": \"$BMP_URL\"}" > /usr/share/nginx/html/config.json
else
    echo "BMP_URL is not set. Using existing config.json/env.js."
fi

# Execute the CMD
exec "$@"
