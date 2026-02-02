# Docker deployment instructions

## Build the Docker image

```bash
docker build -t ekowatt-landing .
```

## Run locally

```bash
docker run -d -p 8080:80 -e BMP_URL=http://localhost:5173 --name ekowatt ekowatt-landing
```

Visit http://localhost:8080

## Run with custom BMP URL

```bash
docker run -d -p 8080:80 -e BMP_URL=https://bmp.innovacityconsulting.com --name ekowatt ekowatt-landing
```

## Deploy to Dokploy

1. Push your code to GitHub
2. In Dokploy, create a new application
3. Select "Docker" as deployment type
4. Connect your GitHub repository
5. Set environment variable:
   - Key: `BMP_URL`
   - Value: `https://your-production-bmp-url.com`
6. Deploy

Dokploy will automatically build and run the Docker container with the environment variable injected.

## Stop and remove container

```bash
docker stop ekowatt
docker rm ekowatt
```
