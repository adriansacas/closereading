# cs373-idb-13



# CloseReading


## Group Members

Peyton Ausburn, Adrian Sanchez Castaneda, Niyati Prabhu, Peter Hwang, Sumaya Al-Bedaiwi


## APIs

- [ ] [Overdrive](https://developer.overdrive.com/apis)
- [ ] [NYT Books](https://developer.nytimes.com/docs/books-product/1/overview)
- [ ] [Google Books](https://developers.google.com/books)
- [ ] [Wikipedia](https://en.wikipedia.org/api/rest_v1/#/)

## Project Proposal

Our website will aim to connect people of all ages and interests with their local libraries to find books. Under the books tab, users can discover new books, read reviews, buy books, and locate the book at a particular library. The author tab will allow users to read a short background on the author and explore any of the books they’ve written. Lastly, the library tab will connect users with their information on their local libraries and search for book availability. 


## 3 Models

- [ ] Books
    - Instances: 25,000
    - Attributes: name, author, number of pages, publisher, NYT best-seller status, award winner
    - Media: Cover page, book reviews, purchase link, similar books
    - Connection to other models: have an author; located in libraries
- [ ] Authors
    - Instances: 5,000
    - Attributes: Name, age, gender, ethnicity, number of publications
    - Media: Profile photo, authors in the same genre, author bio, average rating for the author
    - Connection to other models: have written books; have their books located in libraries
- [ ] Libraries
    - Instances: 1,000
    - Attributes: Location, name, size of collection, rating, university library
    - Media: map, image of library, nearby libraries
    - Connection to other models: have books; have authors who house multiple books


# Organizational Techqnique
- [ ] Traditional organization: one page per model

## Questions our Site will Answer
1. Which library collections near me contain the book I’m interested in?
2. What are the reviews for a book I am interested in?
3. What are all of the other books this author has written?
4. What books and authors are similar to what I’m reading?

