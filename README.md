## Weekend Project title
Use Node-Express with mySQL.

## Goal
Using Node-Express, interact with a mySQL database.

##Post Weekend Project Comment
- Goal complete. Created Node Express server that will interact with a mySQL database.
- Created SQL Stored procedures(SProcs) that the server can use, but I'm not sure if its better to use SProcs or to type out the full SQL command.
-- Both methods are in the notes.js file for reference.
- I am happy with how the file structor is organized.
-- I might not need to mysql object in the db-config.js file with the config options.
- I'm not closing any connections to the DB after getting used. Not sure if this needs to be done, or if its complaining where the variable is getting created vs were its getting closed

## Motivation
I have already used MongoDB in many past projects, but never tried making something that used a mySQL server.

## Features
Going to try organizing my node server folders/files on how Express created the architecture.

## Code Example
TBD

## Installation
'npm run install-project' to install all Javascript dependencies.

## How to use?
'npm start' to start the Node server. Use RESTful api calls to localhost to interact with the mySQL server

## Contribute


## Credits
Piero Borrelli, The perfect architecture flow for your next Node.js project ( https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/ )
Mark Drake, How To Install MySQL on Ubuntu 20.04 ( https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04 )
www.mysqltutorial.org, Calling MySQL Stored Procedures from Node.js ( https://www.mysqltutorial.org/mysql-nodejs/call-stored-procedures/ )

#### Anything else that seems useful

## License
MIT (I still dont understand this License thing)

MIT © Mitchell()