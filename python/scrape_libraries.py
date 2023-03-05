yelp_api_key = "J93kp6L5V7SZUa73JSdY8oj5xS6YkHeLsZXEFu5Q2s0f70r4HjxI4dr7TuNx2dt9R_S1J-UxlUloFFSjxIgQGCvwwVIkd7FadF4mDoU3_okwOJQ9G-W0UmbL354EZHYx"
import sys
import requests
import json


# logging.captureWarnings(True)


url = "https://api.yelp.com/v3/businesses/search?categories=famous&term=libraries&sort_by=best_match&limit=10"

headers = {
        "accept": "application/json",
        "Authorization": "Bearer " + yelp_api_key
    }

locations = ["Austin", "Dallas", "Atlanta", "NYC", "Chicago", "Boston", "Seattle", "Los%20Angeles"]

response_list = []

for loc in locations:
    response = requests.get(url + "&location=" + loc, headers=headers)
    response_dict = response.json()
    response_list.append(response_dict)

with open('./libraries.json', 'w') as openfile:
	json.dump(response_list, openfile)    
