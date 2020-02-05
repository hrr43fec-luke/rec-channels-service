# Recommended Channels Service
The Recommended Channels is a Twitch.tv module clone

## Motivation
This was a required project for Hack Reactor's Front End Capstone

## Getting Started
#### After cloning repo,
1. Run `npm install`
2. Initiate your Mongo database with `sudo service mongodb start`
3. Create a `.env` file in the root directory and configure it with the following:
    * `PORT=`myPortNumber
    * `DATABASE_URL='mongodb://localhost/channels'`
    * `DB_NAME=channels`
    * `DB_USER=`myUsername
    * `DB_PASSWORD=`myPassword
4. Populate database using `npm run seed`
5. Compile with webpack in a new terminal using `npm run build`
6. Initiate server in a new terminal using `npm run start`
7. Finally, view the rendered app in your browser using the port number you chose in the `.env` file

##
