
import sys
import requests
import json
import logging
import time
import pandas as pd

logging.captureWarnings(True)

url = 'https://en.wikipedia.org/w/api.php'

best_fiction_authors_url="https://en.wikipedia.org/wiki/List_of_best-selling_fiction_authors"
df = pd.read_html(best_fiction_authors_url, match="Author")
df = pd.DataFrame(df[0])
authors_list = df.loc[:,"Author"] # we know it works!!

# PARAMS = {
#     "action": "query",
#     "titles": "List of best-selling fiction authors"
#     "format": "json"
# }
'''
data = requests.get(url=url, params=PARAMS).json()

authors = data["query"]["categorymembers"]
authors_list = []
for author in authors:
    authors_list.append(author["title"])

print(authors_list)

 
# subject = 'Python (programming language)'
'''
author = ""
params = {
        'action': 'query',
        'format': 'json',
        'titles': author,
        'prop': 'extracts',
        'exintro': True,
        'explaintext': True,
    }

response_list = []
for a in authors_list:
    params['titles'] = a
    response = requests.get(url, params=params)
    response_json = response.json()
    response_list.append(response_json)
 


with open('./small_authors.json', 'w') as openfile:
	json.dump(response_list, openfile)
