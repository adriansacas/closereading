import requests
from bs4 import BeautifulSoup
import scrape_authors
import copy
import json

# Enter the author's name
# authors_list = ["J.K. Rowling"]
authors_list = copy.deepcopy(scrape_authors.authors_list)

response_list = {}

# Create a Google search query to find the author's Twitter page
for author_name in authors_list:
    query = "{} Twitter".format(author_name)
    url = "https://www.google.com/search?q={}".format(query)

    # Send a GET request to the Google search page
    response = requests.get(url)

    # Parse the HTML response with Beautiful Soup
    soup = BeautifulSoup(response.text, "html.parser")

    # Find the first search result that is a Twitter page

    results = soup.find_all("a")
    for result in results:
        link = result.get("href")
        if "twitter.com/" in link:
            # Extract the Twitter handle from the link
            handle = link.split("twitter.com/")[1].split("&")[0].split("/")[0].split("%")[0]
            response_list[author_name] = handle
            # print("The Twitter handle for {} is @{}".format(author_name, handle))
            break
    # else:
        # print("Could not find a Twitter handle for {}".format(author_name))



with open('./author_twitters.json', 'w') as openfile:
	json.dump(response_list, openfile)