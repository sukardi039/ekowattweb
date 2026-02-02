#!/bin/sh
set -e

echo "========================================="
echo "EKOWATT Docker Entrypoint"
echo "========================================="
echo "Script: $0"
echo "All ENV vars:"
env | grep -i bmp || echo "No BMP variables found in environment"
echo ""
echo "BMP_URL value: '${BMP_URL}'"
echo "BMP_URL length: ${#BMP_URL}"
echo ""

# Check if BMP_URL is set and not empty
if [ -n "${BMP_URL}" ] && [ "${BMP_URL}" != "" ]; then
    echo "✓ BMP_URL is set: ${BMP_URL}"
    
    # Update config.json with the environment variable
    cat > /usr/share/nginx/html/config.json << EOF
{"BMP_URL": "${BMP_URL}"}
EOF
    
    echo "✓ config.json has been updated"
    echo "✓ Content of config.json:"
    cat /usr/share/nginx/html/config.json
    echo ""
    
else
    echo "✗✗✗ ERROR: BMP_URL environment variable is NOT set or empty!"
    echo "✗✗✗ Current value: '${BMP_URL}'"
    echo "✗✗✗ The application will use placeholder value."
    echo "✗✗✗ Check Dokploy environment variable configuration."
    echo ""
    echo "Current config.json:"
    cat /usr/share/nginx/html/config.json
    echo ""
fi

echo "========================================="
echo "Starting nginx..."
echo "========================================="
exec "$@"
