import json
from app import app, db
from models import Book, Author, Library, Review


def populate_db():
    populate_authors()
    populate_books()
    populate_libraries()
    # populate_authors_dummy()
    # populate_books_dummy()


def populate_books_dummy():
    author = Author.query.filter_by(name='author').first()
    b1 = Book(
        title='title2',
        genre='genre',
        pub_year=2000,
        author=author,
        image_url='url',
        pub_location='location'
    )
    b2 = Book(
        title='title2',
        genre='genre',
        pub_year=2001,
        author=author,
        image_url='url',
        pub_location='location'
    )
    db.session.add_all([b1, b2])
    db.session.commit()


def populate_authors_dummy():
    a1 = Author(name='author', bio='bio', image_url='url')
    db.session.add(a1)
    db.session.commit()


def populate_authors():
    # This dataset contains 100 unique authors
    with open('data/new_authors.json') as data:
        authors = json.load(data)
        for author_data in authors:
            author = author_data['query']['pages'][0]
            # Skip authors without a bio
            if 'extract' not in author or not author['extract']:
                continue
            # Check that data has image url
            if 'original' in author:
                image_url = author['original']['source']
            else:
                image_url = None
            # Check that data has description
            if 'terms' in author or author['terms'] == 'Wikimedia disambiguation page':
                description = author['terms']['description'][0]
            else:
                description = None
            # Add author to database
            db.session.add(Author(
                name=author['title'],
                bio=author['extract'],
                description=description,
                image_url=image_url
            ))
        db.session.commit()


def populate_books():
    # books in this dataset have a total of 45 unique authors
    with open('data/new_books.json') as data:
        books = json.load(data)
        for cluster in books:
            # skip clusters with no books in them
            if 'items' not in cluster:
                continue

            for book_data in cluster['items']:
                book = book_data['volumeInfo']
                # Skip books without picture, description, or published date
                if 'imageLinks' not in book or 'description' not in book or 'publishedDate' not in book:
                    continue

                # Only add the first author
                author = Author.query.filter_by(name=book['authors'][0]).first()
                # Only add the book if its author is in the database
                if author:
                    # Parse published year if date is string
                    if isinstance(book['publishedDate'], str):
                        pub_year = int(book['publishedDate'][:4])
                    else:
                        pub_year = book['publishedDate']
                    # Check book has a genre
                    if 'categories' in book:
                        genre = book['categories'][0]
                    else:
                        genre = None
                    # Check page count
                    if 'pageCount' in book:
                        page_count = book['pageCount']
                    else:
                        page_count = None
                    db.session.add(Book(
                        title= book['title'] ,
                        author_id = author.id, # author.id value is correct, but author_id doesnt work
                        genre=genre,
                        pub_year=pub_year,
                        page_count=page_count,
                        image_url=book['imageLinks']['thumbnail'].replace('zoom=1', 'zoom=0'),
                        # pub_location=,
                        description=book['description']
                    ))
        db.session.commit()


def populate_libraries():
    with open('data/libraries.json') as lib_data, open('data/library_reviews.json') as rev_data:
        # libraries come in clusters
        libraries = json.load(lib_data)
        reviews = json.load(rev_data)
        i = 0
        for cluster in libraries:
            for library_data in cluster['businesses']:
                library = Library(
                    name=library_data['name'],
                    image_url=library_data['image_url'],
                    rating=library_data['rating'],
                    address=library_data['location']['address1'],
                    city=library_data['location']['city'],
                    zip_code=library_data['location']['zip_code'],
                    country=library_data['location']['country'],
                    state=library_data['location']['state'],
                    phone=library_data['display_phone'],
                    latitude=library_data['coordinates']['latitude'],
                    longitude=library_data['coordinates']['longitude']
                )
                db.session.add(library)
                # Add reviews
                for review in reviews[i]['reviews']:
                    db.session.add(Review(
                        text=review['text'],
                        rating=review['rating'],
                        username=review['user']['name'],
                        time_created=review['time_created'],
                        url=review['url'],
                        library=library
                    ))
                i += 1
        db.session.commit()


if __name__ == "__main__":
    with app.app_context():
        db.drop_all()
        db.create_all()
        populate_db()
