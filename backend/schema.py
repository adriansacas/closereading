from models import Book, Author, Library
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields


class AuthorSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Author
        include_relationships = True

    # Fetches the data from the one-to-many relationship and nests it within
    books = fields.List(fields.Nested('BookSchema', exclude=('author',)))

class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book
        # Will include the foreign key of the relationship
        include_relationships = True

    # Fetches the data from the relationship and nests it within
    author = fields.Nested('AuthorSchema', only=('id', 'name'))

class LibrarySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Library

book_schema = BookSchema()
author_schema = AuthorSchema()
library_schema = LibrarySchema()
