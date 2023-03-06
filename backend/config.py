import os

user = os.environ['DATABASE_USERNAME']
password = os.environ['DATABASE_PASSWORD']
host = os.environ['DATABASE_HOSTNAME']
database = os.environ['DATABASE_NAME']
port = os.environ['DATABASE_PORT']

SQLALCHEMY_DATABASE_URI = f'postgresql://{user}:{password}@{host}:{port}/{database}'
