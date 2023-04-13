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

    @staticmethod
    def calculate_age(author):
        if author.death_year:
            age = author.death_year - author.birth_year
        else:
            age = datetime.date.today().year - author.birth_year
        return age

    @post_dump(pass_many=True)
    def wrap(self, data, many, **kwargs):
        if many:
            return {'authors': data}
        return data


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book

    # Fetches the data from the relationship and nests it within
    author = fields.Nested('AuthorSchema', only=('id', 'name'))

    @post_dump(pass_many=True)
    def wrap(self, data, many, **kwargs):
        if many:
            return {'books': data}
        return data


class LibrarySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Library

    @post_dump(pass_many=True)
    def wrap(self, data, many, **kwargs):
        if many:
            return {'libraries': data}
        return data


book_schema = BookSchema()
author_schema = AuthorSchema()
library_schema = LibrarySchema()
