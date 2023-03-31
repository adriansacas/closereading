import unittest
from models import db, Book, Author, Library
from app import app
import json
class Tests(unittest.TestCase):
    def setUp(self):
        app.config["TESTING"] = True
        app.config['LIVESERVER_PORT'] = 4000
        self.client = app.test_client()

    def testGetAllBooks(self):
        with self.client:
            response = self.client.get("/books")
            self.assertEqual(response.status_code, 200)
            data = response.json
            count = db.session.query(Book).count()            
            self.assertEqual(len(data["books"]), count)
    
    def testGetAllAuthors(self):
        with self.client:
            response = self.client.get("/authors")
            self.assertEqual(response.status_code, 200)
            data = response.json
            count = db.session.query(Author).count()                  
            self.assertEqual(len(data["authors"]), count)
        
    def testGetAllLibraries(self):
        with self.client:
            response = self.client.get("/libraries")
            self.assertEqual(response.status_code, 200)
            data = response.json
            count = db.session.query(Library).count()                   
            self.assertEqual(len(data["libraries"]), count)
    
    def testGetABook(self):
        with self.client:
            response = self.client.get("/books/16")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data[0]["title"], "Steinbeck")
            self.assertEqual(data[0]["page_count"], 932)
        
    def testGetAnAuthor(self):
        with self.client:
            response = self.client.get("/authors/12")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data[0]["description"], "American poet (1830-1886)")
            self.assertEqual(data[0]["name"], "Emily Dickinson")

    def testGetALibrary(self):
        with self.client:
            response = self.client.get("/libraries/8")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data[0]["rating"], 4.0)
            self.assertEqual(data[0]["zip_code"], "78723")

    def testAllSearch(self):
        with self.client:
            response = self.client.get("/search/aaaa")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            books = resp["books"]
            authors = resp["authors"]
            libraries = resp["libraries"]
            self.assertEqual(len(books), 0)
            self.assertEqual(len(authors), 0)
            self.assertEqual(len(libraries), 0)
    
    def testModelSearch(self):
        with self.client:
            response = self.client.get("/search/book/aaaa")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            data = resp["data"]
            self.assertEqual(len(data), 1)
            self.assertEqual(data[0]["name"], "aaaa")

    def testAllSort(self):
        with self.client:
            response = self.client.get("/sort/aaaa")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            books = resp["books"]
            authors = resp["authors"]
            libraries = resp["libraries"]
            self.assertEqual(len(books), 0)
            self.assertEqual(len(authors), 0)
            self.assertEqual(len(libraries), 0)
    
    def testModelSort(self):
        with self.client:
            response = self.client.get("/sort/book/aaaa")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            data = resp["data"]
            self.assertEqual(len(data), 1)
            self.assertEqual(data[0]["name"], "aaaa")

    def testAllFilter(self):
        with self.client:
            response = self.client.get("/filter/aaaa")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            resp = response.json
            books = resp["books"]
            authors = resp["authors"]
            libraries = resp["libraries"]
            self.assertEqual(len(books), 0)
            self.assertEqual(len(authors), 0)
            self.assertEqual(len(libraries), 0)
    
    def testModelFilter(self):
        with self.client:
            response = self.client.get("/filter/book/aaaa")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            data = resp["data"]
            self.assertEqual(len(data), 1)
            self.assertEqual(data[0]["name"], "aaaa")


if __name__ == "__main__":
    unittest.main()
