import requests
from bs4 import BeautifulSoup

urls = ['https://example.com',
        'https://example.com/page-2',
        'https://example.com/page-3']


for url in urls:
  reqs = requests.get(url)
  soup = BeautifulSoup(reqs.text)
  for heading in soup.find_all(["img"]):
      print(f"'{url}', '{heading['src']}'")
#
# open file in write mode
# with open(r'img.txt', 'w') as fp:
#     for url in urls:
#         reqs = requests.get(url)
#         soup = BeautifulSoup(reqs.text)
#         for heading in soup.find_all(["img"]):
#             fp.write(f"'{url}', '{heading['src']}'")
            # print(f"'{url}', '{heading['src']}'")
        # fp.write("%s\n")
      
      
      
      
      
