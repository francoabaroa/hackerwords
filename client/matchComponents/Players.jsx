/**
 * @file Manages the players component.
 */

import React from 'react';
import { Link, withRouter } from 'react-router';
import $ from 'jquery';
import Util from './../util.js';

/**
 * Creates a new Players list component.
 * @class
 */

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.makeChallenge = this.makeChallenge.bind(this);
  }

  /**This function is used to challenge another player.
 */
  makeChallenge() {
    const username = ($('#player').val());

    /** Check to make sure username has been selected */
    if (!username) {
      return;
    }

    /** Complete game challenge creation */
    $.post({
      url: '/api/makeChallengeGame',
      headers: { 'x-access-token': Util.getToken() },
      dataType: 'json',
      data: { username },
      success: (data) => {
        this.props.router.push('/game/' + data.id);
      },
      error: (data) => {
        console.log('Error!');
        console.log(data);
      },
    });
  }

  render() {
    return (
      <div className="players">
        <h2> Challenge Players </h2>
        <input id="player" list="players" /> &nbsp;
        <datalist id="players">
          {
            this.props.entries.map(user => (<option key={user}> {user} </option>))
          }
        </datalist>
        <input type="button" value="Challenge" onClick={this.makeChallenge} />
      </div>
    );
  }
}

export default withRouter(Players, { withRef: true });
