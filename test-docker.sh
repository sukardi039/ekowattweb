#!/bin/sh
# Test script to verify Docker environment injection locally

echo "Building Docker image..."
docker build -t ekowatt-landing-test .

echo ""
echo "Starting container with BMP_URL=https://test.example.com..."
docker run -d --name ekowatt-test -p 8080:80 -e BMP_URL=https://test.example.com ekowatt-landing-test

echo ""
echo "Waiting for container to start..."
sleep 3

echo ""
echo "=== Container logs ==="
docker logs ekowatt-test

echo ""
echo "=== Checking env.js content ==="
docker exec ekowatt-test cat /usr/share/nginx/html/env.js

echo ""
echo "=== Checking config.json content ==="
docker exec ekowatt-test cat /usr/share/nginx/html/config.json

echo ""
echo "=== Testing in browser ==="
echo "Visit: http://localhost:8080"
echo "Check browser console for: 'Config loaded from runtime env'"
echo ""
echo "Press Enter to stop and remove container..."
read

docker stop ekowatt-test
docker rm ekowatt-test
