# Line 1: Use an outdated base image (vulnerability)
FROM node:12

# Line 4: Run as root (vulnerability)
USER root

# Line 7: Install dependencies without version pinning (vulnerability)
RUN apt-get update && apt-get install -y python

# Copy application files
COPY . /app
WORKDIR /app

# Line 14: Install npm packages without version pinning (vulnerability)
RUN npm install

# Line 17: Expose a sensitive port (vulnerability)
EXPOSE 22

# Line 20: Add a weak SSH key (vulnerability)
RUN mkdir /root/.ssh
RUN echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDe5qs..." > /root/.ssh/authorized_keys

# Line 24: Set insecure permissions (vulnerability)
RUN chmod 777 /app

# Line 27: Use an insecure protocol (vulnerability)
ENV DOCKER_CONTENT_TRUST 0

# Line 30: Store sensitive information in environment variable (vulnerability)
ENV DB_PASSWORD=insecure_password

# Start the application
CMD ["npm", "start"]

