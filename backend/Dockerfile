# Dockerfile for backend

# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /ecomm-med-bcknd

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
