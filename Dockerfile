FROM nginx:alpine

# Copy all files
COPY . /usr/share/nginx/html

# Expose port 80 (simple)
EXPOSE 80
