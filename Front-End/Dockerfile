# Base image
FROM node:20.9.0

# Set the working directory
WORKDIR /app

# Copy package.json to /app
COPY package.json .

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port 3001
EXPOSE 3000

# Run the application
CMD [ "npm", "start" ]
