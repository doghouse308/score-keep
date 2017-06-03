import React from 'react';
import PropTypes from 'prop-types'

import { Players } from './../api/players.js';

export default class AddPlayer extends React.Component {
  handleSubmit(event) {
    let playerName = event.target.playerName.value;

    event.preventDefault();

    if (playerName) {
      event.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: this.props.score
      })
    } 
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    )
  }
}