from flask import Flask, jsonify, request
from models import app, db, Book, Author, Library
from schema import book_schema, author_schema, library_schema
from sqlalchemy import or_


@app.route("/")
def hello_world():
    return "<p>This is our API route!</p>"


@app.route("/books")
def get_books():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    search_terms = request.args.get("search_term").split()
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
        if search_terms:
            result, pagination_data = search_books(search_terms, book_schema, page, per_page)
        else:
            result, pagination_data = get_pagination_data(query, book_schema, page, per_page)
        return jsonify({'books': result, 'pagination': pagination_data})
    else:
        result = book_schema.dump(query.all(), many=True)
        return jsonify({'books': result})


@app.route("/authors")
def get_authors():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    search_terms = request.args.get("search_term").split()
    name = request.args.get("name")
    bio = request.args.get("bio")
    description = request.args.get("description")
    image_url = request.args.get("image_url")
    books = request.args.get("books")

    query = db.session.query(Author)

    if page is not None:
        if search_terms:
            result, pagination_data = search_authors(search_terms, author_schema, page, per_page)
        else:
            result, pagination_data = get_pagination_data(query, author_schema, page, per_page)
        return jsonify({'authors': result, 'pagination': pagination_data})
    else:
        result = author_schema.dump(query.all(), many=True)
        return jsonify({'authors': result})


@app.route("/libraries")
def get_libraries():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    search_terms = request.args.get("search_term").split()
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
        if search_terms:
            result, pagination_data = search_libraries(search_terms, library_schema, page, per_page)
        else:
            result, pagination_data = get_pagination_data(query, library_schema, page, per_page)
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
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    search_terms = request.args.get("search_term").split()

    books, books_pagination = search_books(search_terms, book_schema, page, per_page)
    authors, authors_pagination = search_authors(search_terms, author_schema, page, per_page)
    libraries, libraries_pagination = search_libraries(search_terms, library_schema, page, per_page)
    result = {
        "books_data": {"books": books, "pagination": books_pagination},
        "authors_data": {"authors": authors, "pagination": authors_pagination},
        "libraries_data": {"libraries": libraries, "pagination": libraries_pagination}
    }
    return jsonify(result)


def get_pagination_data(query, schema, page, per_page):
    query = query.paginate(page=page, per_page=per_page, error_out=False)
    result = schema.dump(query, many=True)
    pagination_data = {
        'page': page,
        'per_page': per_page,
        'total_pages': query.pages,
        'total_items': query.total
    }
    return result, pagination_data


def search_books(search_terms, schema, page, per_page):
    query = db.session.query(Book).filter(
        or_(
            *[Book.title.ilike(f'%{term}%') for term in search_terms],
            # *[Book.description.ilike(f'%{term}%') for term in search_terms],
            # *[Book.genre.ilike(f'%{term}%') for term in search_terms],
            *[Book.author.has(Author.name.ilike(f'%{term}%')) for term in search_terms]
        )
    )
    result, pagination_data = get_pagination_data(query, schema, page, per_page)
    return result, pagination_data


def search_authors(search_terms, schema, page, per_page):
    query = db.session.query(Author).filter(
        or_(
            *[Author.name.ilike(f'%{term}%') for term in search_terms],
            *[Author.books.any(Book.title.ilike(f'%{term}%')) for term in search_terms]
        )
    )
    result, pagination_data = get_pagination_data(query, schema, page, per_page)
    return result, pagination_data


def search_libraries(search_terms, schema, page, per_page):
    query = db.session.query(Library).filter(
        or_(
            *[Library.name.ilike(f'%{term}%') for term in search_terms],
            *[Library.address.ilike(f'%{term}%') for term in search_terms],
            *[Library.city.ilike(f'%{term}%') for term in search_terms],
            *[Library.zip_code.ilike(f'%{term}%') for term in search_terms],
            *[Library.country.ilike(f'%{term}%') for term in search_terms],
            *[Library.state.ilike(f'%{term}%') for term in search_terms],
        )
    )
    result, pagination_data = get_pagination_data(query, schema, page, per_page)
    return result, pagination_data


if __name__ == '__main__':
    app.run()
