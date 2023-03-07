# Running Backend Development Server

## Docker Compose (Recommended)

This method will run both the backend and the frontend.

### Run the containers (backend, frontend)

Run this command from the project root directory.

`docker-compose up -d`

### Stop the containers

`docker-compose down`

Access through http://localhost:4000 in your browser, postman, etc.

### Build image

When running docker-compose for the first time, it will build an image. However, docker-compose does not know when it needs to rebuild the image. All it does is check that the images with the correct name is there.

Run this command if rebuilding the image is needed. For example when dependencies change, or the dockerfile has been modified.

`docker-compose up -d --build`

### Bash interactive mode

`docker exec -it <container_name> bash`


# Database

## Populate

Run the following command in the backend terminal

`python populate.py`

