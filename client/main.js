import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import PropTypes from 'prop-types'

import { Players, calculatePlayerPositions } from './../imports/api/players.js';
import App from './../imports/ui/App.js';

Tracker.autorun(function () {
  console.log('Players List', Players.find().fetch());
});

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({},{sort: {score: -1} }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score Keep'; 
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });
});
