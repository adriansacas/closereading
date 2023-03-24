gmap_api_key = "AIzaSyCInKMoQMYYVQv1TEj84bOpEZfxt9LDE0I"
import sys
import requests
import json

import scrape_libraries
# response_list = copy.deepcopy(scrape_libraries.response_list)
# logging.captureWarnings(True)


url = "https://www.google.com/maps/embed/v1/place?key=" + gmap_api_key

f = open('libraries.json')
data = json.load(f)
# libraries_list = data[0]['businesses']

library_names = []
for i in range(len(data)):
    libraries_list = data[i]['businesses']
    for library in libraries_list:
        lib = {}
        lib['name'] = library['name']
        lib['city'] = library['location']['city']
        lib['state'] = library['location']['state']
        library_names.append(lib)

# print(library_names)
# print(len(library_names))

# headers = {
#         "accept": "application/json",
#         "Authorization": "Bearer " + yelp_api_key
#     }


response_list = []

for library in library_names:
    lib = library['name'].replace(" ", "+") + "," + library['city'].replace(" ", "+") + "+" + library['state'].replace(" ", "+")
    full_url = url + "&q=" + lib
    response_list.append(full_url)
    # response = requests.get(url + "&q=" + lib)
    # response_dict = response.json()
    # response_list.append(response_dict)
# print(response_list)
# print(len(response_list))
# with open('./libraries_gmap.json', 'w') as openfile:
# 	json.dump(response_list, openfile)    

'''
<iframe
  width="450"
  height="250"
  frameborder="0" style="border:0"
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&PARAMETERS"
  allowfullscreen>
</iframe>
'''

f.close()