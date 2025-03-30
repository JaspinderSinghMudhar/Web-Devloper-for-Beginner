# import requests
from requests import get
from bs4 import BeautifulSoup

urls = ['https://example.com',
        'https://example.com/page-2',
        'https://example.com/page-3']


for url in urls:
  reqs = requests.get(url)
  soup = BeautifulSoup(reqs.text, 'lxml')
  for heading in soup.find_all(["h2"]):
      print(heading.name + ' ' + heading.text)  
      
      
      
      
      
      
      
