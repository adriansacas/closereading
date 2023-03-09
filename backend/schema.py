from flask_marshmallow import Marshmallow
from models import Book, Author, Library
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book

class AuthorSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Author

class LibrarySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Library

book_schema = BookSchema()
author_schema = AuthorSchema()
library_schema = LibrarySchema()
