<div id="main">

# Source: server/board/BoardTools.js

<section>

<article>

    /**
     * @file This file holds all the tools needed for the board (board creation, create challenges, etc)
     */

    /** @module Board Tools Functions */

    'use strict';

    const Game = require('./GameModel.js');
    const util = require('./../util.js');
    const jwt = require('jwt-simple');
    const wordSet = require('./wordSet.js');
    const Promise = require('bluebird');

    module.exports = {

      /**
      * This function is used to get the board from database.
      * @method getBoard
      * @access private
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      * @returns {object} game board string
      */

      getBoard(req, res, next) {
        const gameID = req.body.id;
        Game.findOne({ _id: gameID }).then((game) => {
          res.json({ boardString: game.boardString });
        });
      },

      /**
      * This function is used to make a challenge game for a fellow player.
      * @method makeChallengeGame
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      */

      makeChallengeGame(req, res, next) {
        util.getUserFromReq(req, next).then((user) => {

          /** Make sure its a valid opponent */
          const opponentName = req.body.username;
          if (opponentName ===  user.username) {
            res.status(500).send({ error: 'Cannot challenge same user' });
            return;
          }

          util.checkIsRealUser(opponentName, (error, isUser) => {
            if (!isUser) {
              res.status(500).send({ error: 'Invalid user' });
              return;
            }
            module.exports.initializeChallengeGame(res, user, opponentName);
          });
        });
      },

       /**
      * This function is used to get a user's game history.
      * @method getGameHistory
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      */

      getGameHistory(req, res, next) {
        const username = req.body.username;
        util.getUserIDFromUsername(username, (userID) => {
          Game.find({ user_id: userID, pending: false }).then((games) => {
            const getOppGame = (gameObj) => {
              return new Promise((resolve, reject) => {
                if (gameObj.opponent === null) {
                  resolve([gameObj]);
                } else {
                  Game.findOne({ _id: gameObj.opponent }).then((oppGame) => {
                    resolve([gameObj, oppGame]);
                  });
                }
              });
            };

            const promises = games.map((completedGame) => {
              return getOppGame(completedGame).then((gamePair) => {
                return gamePair;
              });
            });

            Promise.all(promises).then((results) => {
              console.log('RESULTS', results);
              res.json({ games: results });
            });
          });
        });
      },

      /**
      * This function is used to generate a random board string.
      * @method generateRandomBoard
      * @returns {string} random game board string
      */

      generateRandomBoard() {
        const letters = 'aabcdeeefghiijklmnoopqrstuuvwxyz';
        let boardStr = '';
        for (let i = 0; i < 16; i += 1) {
          const randIndex = Math.floor(Math.random() * letters.length);
          boardStr += letters[randIndex];
        }
        return boardStr;
      },

      /**
      * This function is used to start a challenge game.
      * @method initializeChallengeGame
      * @param {object} req request object
      * @param {object} user user object
      * @param {string} opponentName name of opponent
      */

      initializeChallengeGame(res, user, opponentName) {
        const boardStr = module.exports.generateRandomBoard();
        Game.create({ boardString: boardStr, user_id: user._id, opponentName: opponentName }).then((myGame) => {
          util.getUserIDFromUsername(opponentName, (user_id) => {
            Game.create({ boardString: boardStr, user_id: user_id, opponentName: user.username }).then((opponentGame) => {
              myGame.opponent = opponentGame._id;
              myGame.save();
              opponentGame.opponent = myGame._id;
              opponentGame.save();
              res.json({ id: myGame._id, opponentName: opponentName });
            });
          });
        });
      },

      /**
      * This function is used to finalize the current game and save game results.
      * @method finalizeGame
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      */

      finalizeGame(req, res, next) {
        const score = Number(req.body.score);
        const wordsUsed = req.body.wordsPlayed;
        const gameID = req.body.gameID;
        const query = { _id: gameID };

        Game.findOne(query).then((game) => {
          game.points = score;
          game.wordsPlayed = wordsUsed;
          game.pending = false;
          game.save();
          res.json(game);
        });

        // const toUpdate = { $set: { points: score, wordsPlayed: wordsUsed, pending: false } };
        // Game.update(query, toUpdate, (err) => {
        //   if (err) {
        //     next(new Error(err));
        //   }
        //   Game.findOne(query, (error, result) => {
        //     res.json({ result });
        //   });
        // });
      },

      /**
      * This function is used to make the board.
      * @method makeBoard
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      */

      makeBoard(req, res, next) {
        const result = module.exports.generateRandomBoard();
        util.getUserFromReq(req, next).then((user) => {
          Game.create({ boardString: result, user_id: user._id }).then((game) => {
            // const token = jwt.encode(game._id, 'secret');
            // res.json({ token, boardString: result });
            res.json({ id: game._id, boardString: result });
          });
        });
      },

      /**
      * This function is used to assign points based on letters used in word played.
      * @method scoreWord
      * @param {string} word word string
      * @returns {number} word score
      */

      scoreWord(word) {
        const letterScores = {
          a: 1,
          b: 3,
          c: 3,
          d: 2,
          e: 1,
          f: 4,
          g: 2,
          h: 4,
          i: 1,
          j: 8,
          k: 5,
          l: 1,
          m: 3,
          n: 1,
          o: 1,
          p: 3,
          q: 10,
          r: 1,
          s: 1,
          t: 1,
          u: 1,
          v: 4,
          w: 4,
          x: 8,
          y: 4,
          z: 10,
        };

        const lengthScores = {
          1: 0,
          2: 0,
          3: 1,
          4: 1,
          5: 2,
          6: 3,
          7: 5,
          8: 11,
          9: 11,
          10: 11,
          11: 11,
          12: 11,
          13: 11,
          14: 11,
          15: 11,
          16: 11,
        };

        let score = lengthScores[word.length];
        for (let i = 0; i < word.length; i += 1) {
          score += letterScores[word[i]];
        }
        return score;
      },

      /**
      * This function is used to check to see if it is a real word.
      * @method checkWord
      * @param {object} req request object
      * @param {object} res response object
      * @param {object} next callback function to execute
      */

      checkWord(req, res, next) {
        const word = req.body.word;
        if (wordSet.has(word)) {
          const wordScore = module.exports.scoreWord(word);
          res.json({ isWord: true, score: wordScore });
        } else {
          res.json({ isWord: false });
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