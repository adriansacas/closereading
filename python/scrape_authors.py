
import sys
import requests
import json
import logging
import time
# import pandas as pd

logging.captureWarnings(True)

url = 'https://en.wikipedia.org/w/api.php'

best_fiction_authors_url="https://en.wikipedia.org/wiki/List_of_best-selling_fiction_authors"
# df = pd.read_html(best_fiction_authors_url, match="Author")
# df = pd.DataFrame(df[0])
# authors_list = df.loc[:,"Author"] # we know it works!!
authors_list = ["Harper_Lee", "F._Scott_Fitzgerald", "Mark_Twain", "John_Steinbeck", "Nathaniel_Hawthorne", "Margaret_Mitchell", "Edgar_Allen_Poe", "Louisa_May_Alcott", "Alice_Walker", "Kurt_Vonnegut_Jr.", "Joseph_Heller", "Arthur_Miller", "Robert_Frost", "Emily_Dickinson", "Stephen_King", "Walt_Whitman", "L._Frank_Baum", "E.B_White", "S.E._Hinton", "Ken_Kesey", "Toni_Morrison", "Maya_Angelou", "Sylvia_Plath", "John_Kennedy_Toole", "Tennessee_Williams", "Jack_Kerouac", "John_Irving", "Jack_London", "Larry_McMurtry", "Kathryn_Stockett", "Ayn_Rand", "Cormac_McCarthy", "Dave_Cullen", "Tim_O%27Brien", "Raymond_Chandler", "William_Faulkner", "John_Updike", "James_Fenimore_Cooper", "Suzanne_Collins", "J.D._Salinger", "T.S._Elliot", "Henry_James", "Carson_McCullers", "Henry_David_Thoreau", "Willa_Cather", "Ernest_Hemingway", "Flannery_O%27Connor", "Perl_S._Buck", "Herman_Melville", "Sherwood_Anderson", "Truman_Capote", "Robert_Penn_Warren", "Eugene_O%27Neill", "John_Berendt", "Ralph_Ellison", "Theodore_Dreiser", "Edith_Wharton", "Charles_Frazier", "Dan_Brown", "Sinclair_Lewis", "Zora_Neale_Hurston", "John_Green", "Alice_Sebold", "Thomas_Pynchon", "Vladimir_Nabokov", "Cormac_McCarthy", "David_Foster_Wallace", "Dashiell_Hammett", "James_Baldwin", "Alex_Haley", "Bret_Easton_Ellis", "Phillip_Roth", "Diana_Gabaldon", "Thomas_Pynchon", "Hunter_S._Thompson", "Michael_Shaara", "Kate_Chopin", "Saul_Bellow", "Ray_Bradbury"]

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
        'formatversion' : '2',
        'titles': author,
        'prop': 'extracts|pageimages|pageterms',
        'piprop': 'original',
        'exintro': True,
        'explaintext': True,
    }

response_list = []
for a in authors_list:
    params['titles'] = a
    response = requests.get(url, params=params)
    response_json = response.json()
    response_list.append(response_json)
 


with open('./new_authors.json', 'w') as openfile:
	json.dump(response_list, openfile)
