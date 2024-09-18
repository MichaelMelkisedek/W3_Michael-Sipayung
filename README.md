# W3 Docker Application

This project is a web application built with Vue.js and served using Nginx in a Docker container. The application is built using a multi-stage Dockerfile to optimize the build size and improve performance.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Docker Commands](#docker-commands)
- [Configuration](#configuration)
- [License](#license)

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- Basic knowledge of Docker and Vue.js.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/w3-docker.git
   cd w3-docker
   npm install
   docker build -t w3-docker .
   docker run -p 8080:80 w3-docker
   # Copy package.json and package-lock.json
   COPY package*.json ./

   # Clean npm cache
   RUN npm cache clean --force

   # Install dependencies
   RUN npm install --legacy-peer-deps

   # Copy the rest of the application code
   COPY . .

   # Build the application
   RUN npm run build

   # Stage 2: Serve the application
   FROM nginx:alpine

   # Copy the build files from the previous stage
   COPY --from=build /app/dist /usr/share/nginx/html

   # Copy nginx configuration file
   COPY nginx.conf /etc/nginx/conf.d/default.conf

   # Expose the port on which the app will run
   EXPOSE 80

   # Start nginx
   docker run -p 8080:80 my-vue-app

   
### Instructions
- Make sure to replace `https://github.com/MichaelMelkisedek/w3-docker.git` with the actual URL of your repository.
- You can add more sections or details as necessary based on your project's specifics!

This Create on MichaelSipayung_00000106613 

