# Use an official Node.js runtime as a parent image
FROM node

# Set the working directory to /app
WORKDIR /ui

# Copy the application code to the working directory
COPY . /ui

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

CMD ["npm", "start"]