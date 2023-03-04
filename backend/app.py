from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_pyfile('config.py')

db = SQLAlchemy(app)

@app.route("/")
def hello_world():
    return "<p>This is our API route! {}</p>".format(app.config['SQLALCHEMY_DATABASE_URI'])


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(100), nullable=False)
    lastname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    age = db.Column(db.Integer)
#     created_at = db.Column(db.DateTime(timezone=True),
#                            server_default=func.now())
    bio = db.Column(db.Text)

    def __repr__(self):
        return f'<Student {self.firstname}>'