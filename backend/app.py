from flask import Flask, jsonify, request
from models import app, db, Book, Author, Library
from schema import book_schema, author_schema, library_schema


@app.route("/")
def hello_world():
    return "<p>This is our API route!</p>"


@app.route("/books")
def get_books():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    title = request.args.get("title")
    genre = request.args.get("genre")
    pub_year = request.args.get("pub_year")
    page_count = request.args.get("page_count")
    author_id = request.args.get("author_id")
    image_url = request.args.get("image_url")
    pub_location = request.args.get("pub_location")
    description = request.args.get("description")

    query = db.session.query(Book)

    if page is not None:
        query = query.paginate(page=page, per_page=per_page,
                               error_out=False)  # Should be based off of routing parameters for how much per page
        result = book_schema.dump(query.items, many=True)
        pagination_data = {
            'page': page,
            'per_page': per_page,
            'total_pages': query.pages,
            'total_items': query.total
        }
        return jsonify({'books': result, 'pagination': pagination_data})
    else:
        result = book_schema.dump(query.all(), many=True)
        return jsonify({'books': result})


@app.route("/authors")
def get_authors():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    name = request.args.get("name")
    bio = request.args.get("bio")
    description = request.args.get("description")
    image_url = request.args.get("image_url")
    books = request.args.get("books")

    query = db.session.query(Author)

    if page is not None:
        query = query.paginate(page=page, per_page=per_page,
                               error_out=False)  # Should be based off of routing parameters for how much per page
        result = author_schema.dump(query.items, many=True)
        pagination_data = {
            'page': page,
            'per_page': per_page,
            'total_pages': query.pages,
            'total_items': query.total
        }
        return jsonify({'authors': result, 'pagination': pagination_data})
    else:
        result = author_schema.dump(query.all(), many=True)
        return jsonify({'authors': result})


@app.route("/libraries")
def get_libraries():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
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

    if page is not None:
        query = query.paginate(page=page, per_page=per_page,
                               error_out=False)  # Should be based off of routing parameters for how much per page
        result = library_schema.dump(query.items, many=True)
        pagination_data = {
            'page': page,
            'per_page': per_page,
            'total_pages': query.pages,
            'total_items': query.total
        }
        return jsonify({'libraries': result, 'pagination': pagination_data})
    else:
        result = library_schema.dump(query.all(), many=True)
        return jsonify({'libraries': result})


@app.route("/books/<id>")
def get_books_by_id(id):
    query = db.session.query(Book).filter_by(id=id).first()
    result = book_schema.dump(query, many=False)
    return jsonify({"data": result})


@app.route("/authors/<id>")
def get_authors_by_id(id):
    query = db.session.query(Author).filter_by(id=id).first()
    result = author_schema.dump(query, many=False)
    return jsonify({"data": result})


@app.route("/libraries/<id>")
def get_libraries_by_id(id):
    query = db.session.query(Library).filter_by(id=id).first()
    result = library_schema.dump(query, many=False)
    return jsonify({"data": result})


@app.route("/search")
def get_search_results():
    search_term = request.args.get("search_term")
    return jsonify({"data": search_term, "books": [], "authors": [], "libraries": []})


if __name__ == '__main__':
    app.run()
