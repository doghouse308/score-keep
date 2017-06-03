import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar.js';
import AddPlayer from './/AddPlayer.js';
import PlayerList from './PlayerList.js';
export default class App extends React.Component {
    render(){
        return (
            <div>
                <TitleBar title={this.props.title} subTitle="Created by Paul Peterson"/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    {/* The defualt score is set this way only to illistrate binding  */}
                    <AddPlayer score ={0}/>
                </div>
            </div>
        )
    }
}

App.propTypes ={
    title: PropTypes.PropTypes.string.isRequired,
    players: PropTypes.PropTypes.array.isRequired
};