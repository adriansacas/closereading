from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify, request
from models import app, db, Book, Author, Library
from flask_cors import CORS
from schema import book_schema, author_schema, library_schema
CORS(app)

@app.route("/")
def hello_world():
    return "<p>This is our API route!</p>"

@app.route("/books")
def get_books():
    page = request.args.get("page", type=int)
    perPage = request.args.get("perPage", type=int)
    title = request.args.get("title")
    genre = request.args.get("genre")
    pub_year = request.args.get("pub_year")
    page_count = request.args.get("page_count")
    author_id = request.args.get("author_id")
    image_url = request.args.get("author_id")
    pub_location = request.args.get("pub_location")
    description = request.args.get("description")

    query = db.session.query(Book)
    count = query.count()
    result = book_schema.dump(query, many=True)
    return jsonify({"data": result, "meta": {"count": count}})

@app.route("/authors")
def get_authors():
    page = request.args.get("page", type=int)
    perPage = request.args.get("perPage", type=int)
    name = request.args.get("name")
    bio = request.args.get("bio")
    description = request.args.get("description")
    image_url = request.args.get("image_url")
    books = request.args.get("books")

    query = db.session.query(Author)
    count = query.count()
    result = author_schema.dump(query, many=True)
    return jsonify({"data": result, "meta": {"count": count}})

@app.route("/libraries")
def get_libraries():
    page = request.args.get("page", type=int)
    perPage = request.args.get("perPage", type=int)
    name = request.args.get("name")
    image_url = request.args.get("image_url")
    rating = request.args.get("rating")
    address = request.args.get("address")
    city = request.args.get("city")
    zip_code = request.args.get("zip_code")
    country = request.args.get("country")
    state = request.args.get("state")
    reviews = request.args.get("reviews")
    latitude = request.args.get("latitude")
    longitude = request.args.get("longitude")
    phone = request.args.get("phone")

    query = db.session.query(Library)
    count = query.count()
    result = library_schema.dump(query, many=True)
    return jsonify({"data": result, "meta": {"count": count}})

@app.route("/books/<id>")
def get_books_by_id(id):
    query = db.session.query(Book).filter_by(id=id)
    result = book_schema.dump(query, many=True)
    return jsonify({"data": result})

@app.route("/authors/<id>")
def get_authors_by_id(id):
    query = db.session.query(Author).filter_by(id=id)
    result = author_schema.dump(query, many=True)
    return jsonify({"data": result})

@app.route("/libraries/<id>")
def get_libraries_by_id(id):
    query = db.session.query(Library).filter_by(id=id)
    result = library_schema.dump(query, many=True)
    return jsonify({"data": result})
