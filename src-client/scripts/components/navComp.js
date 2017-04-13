import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {ACTIONS} from '../actions.js'


export const NavComponent = React.createClass({

	_handleNavigationClick: function(evt){
		let clickedNav = evt.target.dataset.route
		let routingObj = {
			"HOME" : '',
			"RESUME" : 'resume',
      "PORTFOLIO" : 'portfolio',
		}

		ACTIONS.routeTo(routingObj[clickedNav])
	},

	render: function(){
		return (
			<nav className="reg-navigation">
        <img className="logo" src="../images/cameron-name-red.png" alt=""></img>
        <div className="nav-options">
					<div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="HOME">Home</div>
          <div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="RESUME">Resume</div>
          <div className="hover-color spaced-out" onClick={this._handleNavigationClick} data-route="PORTFOLIO">Portfolio</div>
        </div>
			</nav>
		)
	}
})
