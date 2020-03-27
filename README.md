# Recommended Channels
This is the Recommended Channels API for Game Tagger. Watch your favorite streamers or stream yourself!
<img src="https://i.imgur.com/FARLtV1.gif" alt="Tag along with your favorite streamers or stream yourself!"/>

## Related Projects
1. **Philip Nguyen** [@nguyephi](https://github.com/nguyephi)
* [Video Player](https://github.com/hrr43fec-luke/video-player-service)

2. **Kraig Hanson** [@kraig5](https://github.com/kraig5)
* [Chats](https://github.com/hrr43fec-luke/chat-service)

3. **Priscila Gonzalez** [@priscilagonzalez](https://github.com/priscilagonzalez)
* [Video Carousel](https://github.com/hrr43fec-luke/video-carousel-service)

4. **Andrew Doolittle** [@azdoolittle](https://github.com/azdoolittle)
* [Recommended Channels](https://github.com/hrr43fec-luke/rec-channels-service)

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
