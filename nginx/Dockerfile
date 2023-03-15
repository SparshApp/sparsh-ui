FROM nginx

# Set working directory
WORKDIR /app

# Copy over static assets
COPY . /app

# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
COPY default.conf /etc/nginx/conf.d/default.conf

# Copy SSL certificate
# COPY my_ssl_cert.crt /etc/nginx/ssl/my_ssl_cert.crt

# Expose the listening port
EXPOSE 80
# EXPOSE 443

# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]
