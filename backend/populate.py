from app import app, db
from models import Book, Author, Library


# def populate_db():
#     populate_books()
#     populate_authors()
#     populate_libraries()
#
#
# def populate_books():
#     pass
#
#
# def populate_authors():
#     pass
#
#
# def populate_libraries():
#     pass


if __name__ == "__main__":
    with app.app_context():
        # db.drop_all()
        db.create_all()
        # populate_db()
