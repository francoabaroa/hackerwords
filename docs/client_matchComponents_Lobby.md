<div id="main">

# Source: client/matchComponents/Lobby.jsx

<section>

<article>

    /**
     * @file Manages the lobby component.
     */

    import React from 'react';
    import { Link, withRouter } from 'react-router';
    import $ from 'jquery';
    import jwt from 'jwt-simple';
    import Challenges from './Challenges.jsx';
    import Players from './Players.jsx';
    import Util from './../util.js';
    import GameHistory from './GameHistory.jsx';

    /**
     * Creates a new Lobby component.
     * @class
     */

    class Lobby extends React.Component {
      constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
          players: [],
          challenges: [],
          highScore: 0,
          gameHistory: [],
        };
      }

      /** componentWillMount() is invoked immediately before mounting occurs. This one checks for a valid session token and if the token is valid and the user plays a single player game, it makes a random game board for the user. If player is playing challenge mode, it will retrieve the appropriate board */
      componentWillMount() {
        const token = Util.getToken();
        if (token) {
          console.log('APPTOKEN', token);
        }

        if (!token) {
          this.props.router.push('/signin');
        } else {
          // try {
          //   const username = jwt.decode(token, 'secret').username;
          // } catch (e) {
          //   console.error('Invalid Token!');
          // }

          /** Get current signed in username */
          const username = jwt.decode(token, 'secret').username;

          /** Get all users */
          $.get({
            url: '/api/getAllUsers',
            headers: { 'x-access-token': Util.getToken() },
            dataType: 'json',
            success: (data) => {
              console.log('Player data:', data);
              this.setState({
                players: data.allUsers.filter((user) => {
                  return user !== username;
                }),
              });
            },
            error: (data) => {
              console.log('Error!');
              console.log(data);
            },
          });

          /** Get highest score of currently signed in user */
          $.get({
            url: '/api/getHighScore',
            headers: { 'x-access-token': token },
            dataType: 'json',
            data: { username },
            success: (data) => {
              console.log('Player high score:', data);
              this.setState({
                highScore: data.highestScore,
              });
            },
            error: (data) => {
              console.log('Error!');
              console.log(data);
            },
          });

          /** Get all pending game challenges */
          $.post({
            url: '/api/getPendingGames',
            headers: { 'x-access-token': token },
            dataType: 'json',
            data: { username },
            success: (data) => {
              console.log('Pending game data:', data);
              this.setState({
                challenges: data.result,
              });
            },
            error: (data) => {
              console.log('Error!');
              console.log(data);
            },
          });

          /** Get all game history */
          $.post({
            url: '/api/getGameHistory',
            headers: { 'x-access-token': token },
            dataType: 'json',
            data: { username },
            success: (data) => {
              console.log('Completed Games Data', data);
              this.setState({
                gameHistory: data.games,
              });
            },
            error: (data) => {
              console.log('Error!');
              console.log(data);
            },
          });
        }
      }

      /** This function logs out the current user and destroys the session token.
     */
      logOut() {
        window.localStorage.removeItem('com.hackerwords');
        this.props.router.push('/signin');
      }

      render() {
        return (
          <div className="lobby">
            <h1>Lobby</h1>
            <Link to="/solo"> Single Player </Link>
            <Challenges entries={this.state.challenges} />
            <Players entries={this.state.players} />
            <div> <h2> Your High Score: {this.state.highScore} </h2> </div>
            <button className="signoutButton" onClick={this.logOut}> Sign Out </button>
            <GameHistory entries={this.state.gameHistory} />
          </div>
        );
      }
    }

    export default withRouter(Lobby, { withRef: true });

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