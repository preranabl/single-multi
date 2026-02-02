# Single-stage Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app/src/index.js

# Copy package files
COPY package*.json ./

# Install all dependencies (prod + dev)
RUN npm install

# Copy application source
COPY . .

# App runs on port 3000
ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
