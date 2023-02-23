google_books_key = "AIzaSyDLxEugDWqBvkLqiNYuG4L4WWNiVlFzuUY"

import sys
import requests
import json
import logging
import time

logging.captureWarnings(True)

api_url = "https://www.googleapis.com/books/v1/volumes?q=fiction&download=epub&filter=ebooks&key=" + google_books_key

##
##    function to obtain a new OAuth 2.0 token from the authentication server
##
def get_new_token():

	auth_server_url = "https://api.petfinder.com/v2/oauth2/token"
	client_id = 'lfVAazTc1L0d5uq25dYmL9FvOuOcAdphW3yjZKkbtjVHdZY6rp'
	client_secret = 'qJLN2kJPGonaPH8MoZAMT4quOgWLQY6sAvAQ2Jjp'

	token_req_payload = {'grant_type': 'client_credentials'}

	token_response = requests.post(auth_server_url,
	data=token_req_payload, verify=False, allow_redirects=False,
	auth=(client_id, client_secret))
				
	if token_response.status_code !=200:
		print("Failed to obtain token from the OAuth 2.0 server", file=sys.stderr)
		sys.exit(1)

	print("Successfuly obtained a new token")
	tokens = json.loads(token_response.text)
	return tokens['access_token']

## 	obtain a token before calling the API for the first time
# token = get_new_token()

##   call the API with the token
# api_call_headers = {'Authorization': 'Bearer ' + token}
# pets_list = []
# for i in range(1, 5):
# 	api_call_response = requests.get(api_url+"&page="+str(i), headers=api_call_headers)
# 	api_call_response_dict = api_call_response.json()
# 	pets_list.append(api_call_response_dict)


response = requests.get(api_url)
response_dict = response.json()
	
with open('./books.json', 'w') as openfile:
	json.dump(response_dict, openfile)
		