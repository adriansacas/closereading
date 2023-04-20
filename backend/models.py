from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS #comment this on deployment
from config import SQLALCHEMY_DATABASE_URI


app = Flask(__name__)
CORS(app)  # Comment this on deployment
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMCY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
# Declare a many-to-many relationship between libraries and books
# library_book = db.Table(
#     'library_book',
#     db.Column('book_id', db.Integer, db.ForeignKey('library.id'), primary_key=True),
#     db.Column('library_id', db.Integer, db.ForeignKey('book.id'), primary_key=True)
# )

# Declare a many-to-many relationship between libraries and authors
# library_author = db.Table(
#     'library_author',
#     db.Column('author_id', db.Integer, db.ForeignKey('author.id'), primary_key=True),
#     db.Column('library_id', db.Integer, db.ForeignKey('book.id'), primary_key=True)
# )


class Book(db.Model):
    """
    Sorting Fields (ascending, descending):
        - title
        - pub_year
        - page_count
    Filtering Fields:
        - genre
        - page_count (range)
        - title (first initial)
    """
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(30), nullable=True)
    pub_year = db.Column(db.Integer, nullable=False)
    page_count = db.Column(db.Integer, nullable=True)
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'))
    image_url = db.Column(db.String(500), nullable=False)
    # pub_location = db.Column(db.String(20), nullable=False)
    description = db.Column(db.Text, nullable=False)
    yt_review = db.Column(db.String(500), nullable=False)

    @classmethod
    def get_unique_genres(cls):
        return cls.query.distinct(cls.genre).order_by(cls.genre).all()

    @classmethod
    def get_unique_title_initials(cls):
        return db.session.query(db.func.substr(cls.title, 1, 1)).distinct().order_by(
            db.func.substr(cls.title, 1, 1)).all()


class Author(db.Model):
    """
    Sorting Fields (ascending, descending):
        - name
        - birth_year
    Filtering Fields:
        - name (first initial)
        - country
        - gender
        - TODO: deceased
    """
    id = db.Column(db.Integer, primary_key=True)
    # TODO: Do a data exploration to see if all our authors have a unique name, if so make name indexable and unique
    name = db.Column(db.String(100), nullable=False)
    bio = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=True)
    image_url = db.Column(db.String(500), nullable=True)
    books = db.relationship('Book', backref='author')
    twitter = db.Column(db.String(300), nullable=False)
    gender = db.Column(db.String(6), nullable=False)
    birth_year = db.Column(db.Integer, nullable=True)
    death_year = db.Column(db.Integer, nullable=True)
    country = db.Column(db.String(20), nullable=False)
    deceased = db.Column(db.Boolean, default=False)

    @classmethod
    def get_unique_countries(cls):
        return cls.query.distinct(cls.country).order_by(cls.country).all()

    @classmethod
    def get_unique_genders(cls):
        return cls.query.distinct(cls.gender).order_by(cls.gender).all()

    @classmethod
    def get_unique_name_initials(cls):
        return db.session.query(db.func.substr(cls.name, 1, 1)).distinct().order_by(
            db.func.substr(cls.name, 1, 1)).all()


class Library(db.Model):
    """
    Sorting Fields (ascending, descending):
        - rating
        - city
        - name
    Filtering Fields:
        - city
        - name (first initial)
        - rating (range)
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Float, nullable=False)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(20), nullable=False)
    zip_code = db.Column(db.String(5), nullable=False)
    country = db.Column(db.String(10), nullable=False)
    state = db.Column(db.String(10), nullable=False)
    reviews = db.relationship('Review', backref='library')
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    gmap = db.Column(db.String(500), nullable=False)
    # TODO: books, authors
    # books = db.relationship('Book', secondary=library_book, backref='libraries')
    # authors = db.relationship('Author', secondary=library_author, backref='libraries')

    @classmethod
    def get_unique_cities(cls):
        return cls.query.distinct(cls.city).order_by(cls.city).all()

    @classmethod
    def get_unique_name_initials(cls):
        return db.session.query(db.func.substr(cls.name, 1, 1)).distinct().order_by(
            db.func.substr(cls.name, 1, 1)).all()


class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    username = db.Column(db.String(100), nullable=False)
    time_created = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(500), nullable=False)
    library_id = db.Column(db.Integer, db.ForeignKey('library.id'))
