#!/bin/sh
set -e

echo "=== Docker Entrypoint Starting ==="
echo "BMP_URL environment variable: '$BMP_URL'"

# Check if BMP_URL is set and not empty
if [ -n "$BMP_URL" ]; then
    echo "✓ BMP_URL is set: $BMP_URL"
    
    # Update config.json with the environment variable
    cat > /usr/share/nginx/html/config.json << EOF
{"BMP_URL": "$BMP_URL"}
EOF
    
    echo "✓ config.json updated with BMP_URL"
    echo "Content of config.json:"
    cat /usr/share/nginx/html/config.json
    echo ""
    
else
    echo "✗ WARNING: BMP_URL environment variable is NOT set!"
    echo "✗ The application will not work correctly."
    echo "✗ Please set BMP_URL in your Dokploy environment variables."
    echo ""
    echo "Current config.json:"
    cat /usr/share/nginx/html/config.json
    echo ""
fi

echo "=== Starting nginx ==="
exec "$@"
