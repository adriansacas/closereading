from app import app, db
from models import Book, Author, Library


if __name__ == "__main__":
    with app.app_context():
        db.drop_all()
        db.create_all()
        # populate_db()
        print("DONE")
