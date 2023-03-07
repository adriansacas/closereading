from app import db


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
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(30), nullable=False)
    pub_year = db.Column(db.Integer, nullable=False)
    page_count = db.Column(db.Integer, nullable=False)
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'))
    image_url = db.Column(db.String(500), nullable=False)
    # pub_location = db.Column(db.String(20), nullable=False)
    description = db.Column(db.Text, nullable=False)


class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # TODO: Do a data exploration to see if all our authors have a unique name, if so make name indexable and unique
    name = db.Column(db.String(100), nullable=False)
    bio = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=True)
    image_url = db.Column(db.String(500), nullable=True)
    books = db.relationship('Book', backref='author')


class Library(db.Model):
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
    # TODO: books, authors
    # books = db.relationship('Book', secondary=library_book, backref='libraries')
    # authors = db.relationship('Author', secondary=library_author, backref='libraries')


class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    username = db.Column(db.String(100), nullable=False)
    time_created = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(500), nullable=False)
    url = db.Column(db.String(500), nullable=False)
    library_id = db.Column(db.Integer, db.ForeignKey('library.id'))