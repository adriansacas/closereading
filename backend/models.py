from app import db


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    # genre = db.Column(db.String(30), nullable=False)
    pub_year = db.Column(db.Integer, nullable=False)
    # TODO: cover, author, pub_location


class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    # TODO: portrait


class Library(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # TODO: picture, map, location, books, authors
