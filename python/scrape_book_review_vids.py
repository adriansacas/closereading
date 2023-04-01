import requests
from bs4 import BeautifulSoup
import json

# Define a function to search for videos related to a given book on YouTube
def find_book_review(book_title, author):
    # Create the search query for the book review
    query = book_title + " " + author + " review"
    query = query.replace(" ", "+")

    # Use requests library to get the HTML content of the YouTube search page
    url = "https://www.youtube.com/results?search_query=" + query
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    # with open('./video_soup.json', 'w') as openfile:
	#     json.dump(soup, openfile)
    # print(type(soup))
    # Find the first video in the search results
    video_id_1 = soup.find("div", {"class": "yt-lockup-content"})
    # print(type(video_id_1))
    video_id_2 = video_id_1.find("a")["href"]

    # Return the URL of the video
    return "https://www.youtube.com" + video_id

# Now, let's test the function with an example book
book_title = "The Hitchhiker's Guide to the Galaxy"
author = "Douglas Adams"
review_url = find_book_review(book_title, author)
print(review_url)



# import os
# # import google_auth_oauthlib.flow
# import googleapiclient.discovery
# import googleapiclient.errors

# # First, let's set up our YouTube API credentials. You will need to have your own API key to use this script.
# api_key = "AIzaSyDLxEugDWqBvkLqiNYuG4L4WWNiVlFzuUY"

# # Set up the YouTube Data API client
# youtube = googleapiclient.discovery.build("youtube", "v3", developerKey=api_key)

# # Define a function to search for videos related to a given book
# def find_book_review(book_title, author):
#     # Create the search query for the book review
#     query = book_title + " " + author + " review"
    
#     # Use the YouTube Data API to search for videos related to the book review query
#     search_response = youtube.search().list(
#         q=query,
#         type="video",
#         part="id,snippet",
#         maxResults=1
#     ).execute()

#     # Get the ID of the first video in the search results
#     video_id = search_response["items"][0]["id"]["videoId"]

#     # Return the URL of the video
#     return "https://www.youtube.com/watch?v=" + video_id

# # Now, let's test the function with an example book
# book_title = "The Hitchhiker's Guide to the Galaxy"
# author = "Douglas Adams"
# review_url = find_book_review(book_title, author)
# print(review_url)


# for cluster in books:
#     # skip clusters with no books in them
#     if 'items' not in cluster:
#         continue

#     for book_data in cluster['items']:
#         book = book_data['volumeInfo']
#         # Skip books without picture, description, or published date
#         if 'imageLinks' not in book or 'description' not in book or 'publishedDate' not in book:
#             continue

#         # Only add the first author
#         author = Author.query.filter_by(name=book['authors'][0]).first()
#         # Only add the book if its author is in the database
#         if author:
#             # Parse published year if date is string
#             title=book['title']
#             review_url = find_book_review(title, author)


# # with open('./author_twitters.json', 'w') as openfile:
# # 	json.dump(response_list, openfile)
