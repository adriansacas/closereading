from flask import Flask, jsonify, request
from models import app, db, Book, Author, Library
from schema import book_schema, author_schema, library_schema
from sqlalchemy import or_, and_


@app.route("/")
def hello_world():
    return "<p>This is our API route!</p>"


@app.route("/books")
def get_books():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    search_terms = request.args.get("search_term")
    genre_filter_term = request.args.get("genre_filter_term")
    numpages_filter_term = request.args.get("numpages_filter_term")
    alpha_filter_term = request.args.get("alpha_filter_term")
    sort_terms = request.args.get("sortBy")
    ascending = request.args.get("asc")

    query = db.session.query(Book)

    if sort_terms:
        if ascending == 'true':
            query = query.order_by(getattr(Book, sort_terms))
        else:
            query = query.order_by(getattr(Book, sort_terms).desc())    

    if page is not None:
        if search_terms:
            search_terms = search_terms.split()
            query = search_books(query, search_terms)
        query = get_filtered_books(query, genre_filter_term, numpages_filter_term, alpha_filter_term)
        query = query.paginate(page=page, per_page=per_page, error_out=False)
        pagination_data = get_pagination_data(query, page, per_page)
        result = book_schema.dump(query, many=True)
        result['pagination'] = pagination_data
        return jsonify(result)
    else:
        result = book_schema.dump(query.all(), many=True)
        return jsonify(result)


@app.route("/authors")
def get_authors():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    search_terms = request.args.get("search_term")
    initial_filter_term = request.args.get("initial_filter_term")
    country_filter_term = request.args.get("country_filter_term")
    gender_filter_term = request.args.get("gender_filter_term")
    sort_terms = request.args.get("sortBy")
    ascending = request.args.get("asc")

    query = db.session.query(Author)

    if sort_terms:
        if ascending == 'true':
            query = query.order_by(getattr(Author, sort_terms))
        else:
            query = query.order_by(getattr(Author, sort_terms).desc())

    if page is not None:
        if search_terms:
            search_terms = search_terms.split()
            query = search_authors(query, search_terms)
        query = get_filtered_authors(query, initial_filter_term, country_filter_term, gender_filter_term)
        query = query.paginate(page=page, per_page=per_page, error_out=False)
        pagination_data = get_pagination_data(query, page, per_page)
        result = author_schema.dump(query, many=True)
        result['pagination'] = pagination_data
        return jsonify(result)
    else:
        result = author_schema.dump(query.all(), many=True)
        return jsonify(result)


@app.route("/libraries")
def get_libraries():
    page = request.args.get("page", type=int)
    per_page = request.args.get("perPage", 20, type=int)
    search_terms = request.args.get("search_term")
    city_filter_term = request.args.get("city_filter_term")
    alpha_filter_term = request.args.get("alpha_filter_term")
    rating_filter_term = request.args.get("rating_filter_term")
    sort_terms = request.args.get("sortBy")
    ascending = request.args.get("asc")

    query = db.session.query(Library)

    if sort_terms:
        if ascending == 'true':
            query = query.order_by(getattr(Library, sort_terms))
        else:
            query = query.order_by(getattr(Library, sort_terms).desc())        

    if page is not None:
        if search_terms:
            search_terms = search_terms.split()
            query = search_libraries(query, search_terms)
        query = get_filtered_libraries(query, city_filter_term, alpha_filter_term, rating_filter_term)
        query = query.paginate(page=page, per_page=per_page, error_out=False)
        pagination_data = get_pagination_data(query, page, per_page)
        result = library_schema.dump(query, many=True)
        result['pagination'] = pagination_data
        return jsonify(result)
    else:
        result = library_schema.dump(query.all(), many=True)
        return jsonify(result)


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

    books_query = db.session.query(Book)
    books_query = search_books(books_query, search_terms)
    books_query = books_query.paginate(page=page, per_page=per_page, error_out=False)
    books_pagination = get_pagination_data(books_query, page, per_page)

    authors_query = db.session.query(Author)
    authors_query = search_authors(authors_query, search_terms)
    authors_query = authors_query.paginate(page=page, per_page=per_page, error_out=False)
    authors_pagination = get_pagination_data(authors_query, page, per_page)

    libraries_query = db.session.query(Library)
    libraries_query = search_libraries(libraries_query, search_terms)
    libraries_query = libraries_query.paginate(page=page, per_page=per_page, error_out=False)
    libraries_pagination = get_pagination_data(libraries_query, page, per_page)

    result = {
        "books_data": {"pagination": books_pagination},
        "authors_data": {"pagination": authors_pagination},
        "libraries_data": {"pagination": libraries_pagination}
    }
    result['books_data'].update(book_schema.dump(books_query, many=True))
    result['authors_data'].update(author_schema.dump(authors_query, many=True))
    result['libraries_data'].update(library_schema.dump(libraries_query, many=True))

    return jsonify(result)


def get_pagination_data(query, page, per_page):
    pagination_data = {
        'page': page,
        'per_page': per_page,
        'total_pages': query.pages,
        'total_items': query.total
    }
    return pagination_data


def search_books(query, search_terms):
    query = query.filter(
        or_(
            *[Book.title.ilike(f'%{term}%') for term in search_terms],
            # *[Book.description.ilike(f'%{term}%') for term in search_terms],
            # *[Book.genre.ilike(f'%{term}%') for term in search_terms],
            *[Book.author.has(Author.name.ilike(f'%{term}%')) for term in search_terms]
        )
    )
    return query


def search_authors(query, search_terms):
    query = query.filter(
        or_(
            *[Author.name.ilike(f'%{term}%') for term in search_terms],
            *[Author.books.any(Book.title.ilike(f'%{term}%')) for term in search_terms]
        )
    )
    return query


def search_libraries(query, search_terms):
    query = query.filter(
        or_(
            *[Library.name.ilike(f'%{term}%') for term in search_terms],
            *[Library.address.ilike(f'%{term}%') for term in search_terms],
            *[Library.city.ilike(f'%{term}%') for term in search_terms],
            *[Library.zip_code.ilike(f'%{term}%') for term in search_terms],
            *[Library.country.ilike(f'%{term}%') for term in search_terms],
            *[Library.state.ilike(f'%{term}%') for term in search_terms],
        )
    )
    return query


def get_filtered_books(query, genre_filter_term, numpages_filter_term, alpha_filter_term):
    if genre_filter_term:
        query = query.filter_by(genre=genre_filter_term)

    if numpages_filter_term:
        if numpages_filter_term == "< 100 pg":
            query = query.filter(Book.page_count < 100)
        elif numpages_filter_term == "100 - 199 pg":
            query = query.filter(and_(Book.page_count >= 100, Book.page_count < 200))
        elif numpages_filter_term == "200 - 299 pg":
            query = query.filter(and_(Book.page_count >= 200, Book.page_count < 300))
        elif numpages_filter_term == "300 - 399 pg":
            query = query.filter(and_(Book.page_count >= 300, Book.page_count < 400))
        else: #400 + pages
            query = query.filter(Book.page_count >= 400)

    if alpha_filter_term:
        query = query.filter(Book.title.startswith(alpha_filter_term))

    return query


def get_filtered_authors(query, initial_filter_term, country_filter_term, gender_filter_term):
    if initial_filter_term:
        query = query.filter(Author.name.startswith(initial_filter_term))
    if country_filter_term:
        query = query.filter_by(country=country_filter_term)
    if gender_filter_term:
        query = query.filter_by(gender=gender_filter_term)
    return query


def get_filtered_libraries(query, city_filter_term, alpha_filter_term, rating_filter_term):
    if city_filter_term:
        query = query.filter_by(city=city_filter_term)
    
    if alpha_filter_term:
        query = query.filter(Library.name.startswith(alpha_filter_term))

    if rating_filter_term:
        if rating_filter_term == "< 1 star":
            query = query.filter(Library.rating < 1)
        elif rating_filter_term == "1 - 2 stars":
            query = query.filter(and_(Library.rating >= 1, Library.rating < 2))
        elif rating_filter_term == "2 - 3 stars":
            query = query.filter(and_(Library.rating >= 2, Library.rating < 3))
        elif rating_filter_term == "3 - 4 stars":
            query = query.filter(and_(Library.rating >= 3, Library.rating < 4))
        else: # 4 - 5 star 
            query = query.filter(Library.rating >= 4)
    return query


if __name__ == '__main__':
    app.run(port=4000)
