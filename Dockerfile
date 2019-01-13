# Use an official node runtime as a parent image
FROM node:10

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install

# Make port 80 available to the world outside this container


# Define environment variable


# Run app.py when the container launches
CMD ["node", "sort.js"]