# Node.js Project
We will learn how to initiate a direcotry as node directory.
How to start the node server.


## Start running NPM in your project folder

- Go to empty dir and run ```npm init```
- This will create package.json in that directory
  - The most common use of package.json files is to save a record of all of the packages we download and save into our project.
- Install express by running ```npm i -s express``` inside the same directory
- Create index.html file
- Create index.js file
  - Inside this file write the following:
  - Import the express dependency
  - Mention the port where the server listens to (We will use this port number in web browser)
  - Instantiate the express app ```const app = express()```
    -  The app object contains several functions for routing requests, based on HTTP methods, the most common of these functions are:
        - app.get() 
        - app.post()
        - app.put()
        - app.delete()
        - app.use()
        - app.all()
  - We will use app.get(), which is for GET requests.
    - We will send the index.html file   
  - We want to set up the code for the server to know to listen for incoming requests.
- Start the node server ```node index.js```
- Visite the website by going to browser and typing ```localhost:<port number>```