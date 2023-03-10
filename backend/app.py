from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify, request
from models import app, db, Book, Author, Library
from schema import book_schema, author_schema, library_schema


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
    image_url = request.args.get("image_url")
    pub_location = request.args.get("pub_location")
    description = request.args.get("description")

    query = db.session.query(Book)
    if page != None:
        query = query.paginate(page=page, per_page=perPage, error_out=False).items #Should be based off of routing paramets for how much per page
    else:
        query = query.all()
    result = book_schema.dump(query, many = True)
    mapping = {"books": result}

    return jsonify(mapping)

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
    if page != None:
        query = query.paginate(page=page, per_page=perPage, error_out=False).items #Should be based off of routing paramets for how much per page
    else:
        query = query.all()
    result = author_schema.dump(query, many = True)
    mapping = {"authors": result}

    return jsonify(mapping)

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
    if page != None:
        query = query.paginate(page=page, per_page=perPage, error_out=False).items #Should be based off of routing paramets for how much per page
    else:
        query = query.all()
    result = library_schema.dump(query, many = True)
    mapping = {"libraries": result}

    return jsonify(mapping)

@app.route("/books/<id>")
def get_books_by_id(id):
    query = db.session.query(Book).filter_by(id=id)
    # result = book_schema.dump(query, many=True)
    return jsonify(data = book_schema.dump(query, many=True))

@app.route("/authors/<id>")
def get_authors_by_id(id):
    query = db.session.query(Author).filter_by(id=id)
    # result = author_schema.dump(query, many=True)
    return jsonify(author_schema.dump(query, many=True))

@app.route("/libraries/<id>")
def get_libraries_by_id(id):
    query = db.session.query(Library).filter_by(id=id)
    # result = library_schema.dump(query, many=True)
    return jsonify(library_schema.dump(query, many=True))


if __name__ == '__main__':
    app.run()
