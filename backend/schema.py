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

    @staticmethod
    def get_countries():
        countries = db.session.query(Author.country.distinct()).order_by(Author.country).all()
        return [country[0] for country in countries]

    @staticmethod
    def add_countries_to_result(result):
        result['countries'] = AuthorSchema.get_countries()
        return result

    @staticmethod
    def get_genders():
        genders = db.session.query(Author.gender.distinct()).order_by(Author.gender).all()
        return [gender[0] for gender in genders]

    @staticmethod
    def add_genders_to_result(result):
        result['genders'] = AuthorSchema.get_genders()
        return result

    @post_dump(pass_many=True)
    def filters(self, data, many, **kwargs):
        if many:
            result = {'authors': data}
            result = AuthorSchema.add_genders_to_result(result)
            result = AuthorSchema.add_countries_to_result(result)
            return result
        return data


class BookSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Book

    # Fetches the data from the relationship and nests it within
    author = fields.Nested('AuthorSchema', only=('id', 'name'))

    @post_dump(pass_many=True)
    def filters(self, data, many, **kwargs):
        if many:
            return {'books': data}
        return data


class LibrarySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Library

    @staticmethod
    def get_cities():
        cities = db.session.query(Library.city.distinct()).order_by(Library.city).all()
        return [city[0] for city in cities]

    @staticmethod
    def add_cities_to_result(result):
        result['cities'] = LibrarySchema.get_cities()
        return result

    @post_dump(pass_many=True)
    def filters(self, data, many, **kwargs):
        if many:
            result = {'libraries': data}
            return LibrarySchema.add_cities_to_result(result)
        return data


book_schema = BookSchema()
author_schema = AuthorSchema()
library_schema = LibrarySchema()
