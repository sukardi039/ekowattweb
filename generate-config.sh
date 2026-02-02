#!/bin/bash
# This script generates config.js from .env file
# Use this during deployment to inject environment variables

if [ -f .env ]; then
    # Read .env file and create config.js
    echo "// Generated from .env file - DO NOT EDIT MANUALLY" > config.js
    echo "const config = {" >> config.js
    
    while IFS='=' read -r key value; do
        # Skip comments and empty lines
        [[ "$key" =~ ^#.*$ ]] && continue
        [[ -z "$key" ]] && continue
        # Convert key to camelCase and add to config
        echo "  $key: '$value'," >> config.js
    done < .env
    
    echo "};" >> config.js
    echo "config.js generated successfully"
else
    echo ".env file not found. Please create .env file with BMP_URL"
fi
