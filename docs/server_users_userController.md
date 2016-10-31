<div id="main">

# Source: server/users/userController.js

<section>

<article>

    /**
     * @file This is the server-side controller for the Users
     */

    /** @module User Controller */

    const Q = require('q');
    const jwt = require('jwt-simple');
    const User = require('./userModel.js');
    const Game = require('./../board/GameModel.js');
    const util = require('./../util.js');

    /** Promisify a few mongoose methods with the `q` promise library */
    const findUser = Q.nbind(User.findOne, User);
    const createUser = Q.nbind(User.create, User);

    module.exports = {

      /**
      * This function is used to get all users from database.
      * @method getAllUsers
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      * @returns {object} all users
      */
      getAllUsers(req, res, next) {
        User.find({}, (err, result) => {
          const allUsers = result.map(userEntry => (userEntry.username));
          res.json({ allUsers });
        });
      },

      /**
      * This function is used to get highest score of currently signed in user.
      * @method getUserHighScore
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      * @returns {object} highest score
      */
      getUserHighScore(req, res, next) {
        const username = req.url.split('=')[1];
         util.getUserIDFromUsername(username, (userID) => {
          Game.find({user_id: userID}, (err, result) => {
            let highestScore = 0;
            result.forEach(function(game) {
              if (game.points > highestScore) {
                highestScore = game.points;
                console.log(highestScore);
              }
            });
            res.json({ highestScore });
          });
         });
      },

      /**
      * This function is used to get all pending game challenges.
      * @method getPendingGames
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      * @returns {object} pending games
      */
      getPendingGames(req, res, next) {
        const username = req.body.username;
        console.log('PENDING USERNAME', username);
        util.getUserIDFromUsername(username, (userID) => {
          console.log('PENDING USER ID', userID);
          const query = { user_id: userID, pending: true };
          Game.find(query, (err, result) => {
            console.log('PENDING RESULT', result);
            res.json({ result });
          });
        });

        /*
        const username = req.body.username;
        const query = { username: username, pending: true };
        Game.find(query, (result) => {
          res.json({ result });
        });
        */
      },

      /**
      * This function is used to signin a user if user exists in database and passwords match.
      * @method signin
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      * @returns {object} if user is found, returns the user token
      */
      signin(req, res, next) {
        console.log('signin in');
        const username = req.body.username;
        const password = req.body.password;

        findUser({ username })
          .then((user) => {
            if (!user) {
              return next(new Error('User does not exist'));
            }
            return user.comparePasswords(password)
              .then((foundUser) => {
                if (foundUser) {
                  const token = jwt.encode(user, 'secret');
                  return res.json({ token });
                }
                return next(new Error('Wrong password'));
              });
          })
          .fail((error) => {
            next(error);
          });
      },

      /**
      * This function is used to signup a user if username doesn't exist in database .
      * @method signup
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      * @returns {object} if user is created successfully, returns the user token
      */
      signup(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;

        /** Check to see if username exists already */
        findUser({ username })
          .then((user) => {
            if (user) {
              return next(new Error('User already exist!'));
            }

            /** Make a new user entry in database if username doesn't exist */
            return createUser({
              username,
              password,
            });
          })
          .then((user) => {

            /** Create a session token and send back for authorization */
            const token = jwt.encode(user, 'secret');
            res.json({ token });
          })
          .fail((error) => {
            next(error);
          });
      },

      /**
      * This function is used to signup a user if the user is authenticated.
      * @method checkAuth
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      * @returns {number} status code
      */
      checkAuth(req, res, next) {

        /** Grab the token in the header, if any */
        console.log('HEADERS =', req.headers);
        const token = req.headers['x-access-token'];
        if (!token) {
          next(new Error('No token'));
        } else {

          /** Decode the token */
          const user = jwt.decode(token, 'secret');

          /** Check to see if that user exists in the database and respond with right status code */
          findUser({ username: user.username })
            .then((foundUser) => {
              if (foundUser) {
                res.send(200);
              } else {
                res.send(401);
              }
            })
            .fail((error) => {
              next(error);
            });
        }
      },
    };

</article>

</section>

</div>

<nav>

## [Home](index.html)

### Modules

*   [Authentication Utility Client-Side Functions](module-Authentication%2520Utility%2520Client-Side%2520Functions.html)
*   [Authentication Utility Server-Side Functions](module-Authentication%2520Utility%2520Server-Side%2520Functions.html)
*   [Board](module-Board.html)
*   [Board Tools Functions](module-Board%2520Tools%2520Functions.html)
*   [Game Model](module-Game%2520Model.html)
*   [Middleware](module-Middleware.html)
*   [Played Words](module-Played%2520Words.html)
*   [Router](module-Router.html)
*   [Score](module-Score.html)
*   [Server](module-Server.html)
*   [User Controller](module-User%2520Controller.html)
*   [User Model](module-User%2520Model.html)

### Classes

*   [App](App.html)
*   [Challenges](Challenges.html)
*   [GameHistory](GameHistory.html)
*   [Lobby](Lobby.html)
*   [Players](Players.html)
*   [Signin](Signin.html)
*   [Signup](Signup.html)

</nav>

<footer>Documentation generated by [JSDoc 3.4.2](https://github.com/jsdoc3/jsdoc) on Sun Oct 30 2016 18:04:20 GMT-0700 (PDT)</footer>

<script>prettyPrint();</script>