from models import Book, Author, Library, db
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields, post_dump
import datetime


class AuthorSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Author

    # Fetches the data from the one-to-many relationship and nests it within
    books = fields.List(fields.Nested('BookSchema', exclude=('author',)))

    # Custom field to calculate author's age
    age = fields.Method('calculate_age')

    def calculate_age(self, author):
        if author.death_year:
            age = author.death_year - author.birth_year
        else:
            age = datetime.date.today().year - author.birth_year
        return age


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book

    # Fetches the data from the relationship and nests it within
    author = fields.Nested('AuthorSchema', only=('id', 'name'))

    @staticmethod
    def get_genres():
        genres = db.session.query(Book.genre.distinct()).order_by(Book.genre).all()
        return [genre[0] for genre in genres]

    @staticmethod
    def add_genres_to_result(result):
        result['genres'] = BookSchema.get_genres()
        return result

    @post_dump(pass_many=True)
    def filters(self, data, many, **kwargs):
        if many:
            result = {'books': data}
            return BookSchema.add_genres_to_result(result)
        return data


class LibrarySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Library


book_schema = BookSchema()
author_schema = AuthorSchema()
library_schema = LibrarySchema()
