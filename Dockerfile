# Select the image to use
FROM node

## Install dependencies in the root of the Container
COPY package.json
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm

# Add project files to /app route in Container
ADD . /app

# Set working dir to /app
WORKDIR /app

# expose port 3000
EXPOSE 3000

CMD docker run -p 3000:3000 frontend
