# HubScrape
This project is used to surface any credentials or secrets accidentally committed to a GitHub repository. It also allows for scraping the entirety of the public Github repos for this as well.

The program was initially based on https://github.com/Amit-Katz/github-credentials-scraper which just allowed for using a list of words to search in all public repositories.

Github happens to have endless amounts of publically disclosed personal information, especially when it comes to novice developers that aren't aware of the dangers of committing secrets to a public repository. This program is designed to help surface that information so it can be removed. 

In ten minutes of querying terms like .env I've found multiple instances of MongoDB connection strings, AWS credentials, and other sensitive information that do appear to be active. 

## Timeline

**August 4**
Have a basic funtionality working that allows for scraping a users public commit history using the Github Rest API. This unfortunately comes with hard limits on the number of requests, which looks like 30 per minute. Unfortunately the current construction of the code uses a lot of requests, so this needs to be improved.