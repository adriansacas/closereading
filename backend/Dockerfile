FROM python:3

# update Linux package manager
RUN apt-get update

# install postgresql
RUN apt-get install -y postgresql

# update Python package manager
RUN pip install --upgrade pip

# set working directory
WORKDIR /backend

# install dependencies
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# add backend
COPY . .

# expose port
EXPOSE 5000

# start the backend dev server
CMD ["flask", "run", "--host=0.0.0.0", "--debug"]

# init the database
CMD ["python", "populate.py"]
