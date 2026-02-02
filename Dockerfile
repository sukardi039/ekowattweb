FROM nginx:alpine

# Copy website files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY config.json /usr/share/nginx/html/
COPY debug.html /usr/share/nginx/html/

# Copy and prepare startup script
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Fix line endings and make executable
RUN chmod +x /docker-entrypoint.sh \
    && dos2unix /docker-entrypoint.sh 2>/dev/null || sed -i 's/\r$//' /docker-entrypoint.sh \
    && ls -la /docker-entrypoint.sh \
    && head -1 /docker-entrypoint.sh | od -c

# Expose port 80
EXPOSE 80

# Use custom entrypoint to inject environment variables
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
