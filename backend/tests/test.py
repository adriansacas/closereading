import app
import unittest


class Tests(unittest.TestCase):
    def setUp(self):
        app.app.config["TESTING"] = True
        self.client = app.app.test_client()

    def testGetAllBooks(self):
        with self.client:
            response = self.client.get("/books")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            # TODO change this when the database is populated with books            
            self.assertEqual(len(data), 50)
    
    def testGetAllAuthors(self):
        with self.client:
            response = self.client.get("/authors")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            # TODO change this when the database is populated with authors            
            self.assertEqual(len(data), 500)
        
    def testGetAllLibraries(self):
        with self.client:
            response = self.client.get("/libraries")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            # TODO change this when the database is populated with libraries
            self.assertEqual(len(data), 0)
    
    def testGetCitiesPagination(self):
        with self.client:
            #  TODO change this with our own page
            # response = self.client.get("/cities?page=1&perPage=25")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 25)
        
    def testGetCityInstance(self):
        with self.client:
            #  TODO change this with our own page
            # response = self.client.get("/cities/10773037")
            self.assertEqual(response.status_code, 200)
            resp = response.json
            data = resp["data"]
            tags = resp["tags"]
            # TODO change this with the corresponding data and tags 
            # self.assertEqual(data["name"], "Seattle")
            # self.assertEqual(data["state"], "Washington")
            self.assertEqual(len(tags), 8)

if __name__ == "__main__":
    unittest.main()
