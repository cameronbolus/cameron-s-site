import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {ACTIONS} from '../actions.js'


export const FooterComponent = React.createClass({

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
			<footer className="footer spaced-out">
				<div className="email">
					{/* <img src="../images/email.png"/> */}
        	<a href="mailto:cameron.bolus@gmail.com">cameron.bolus@gmail.com</a>
				</div>
				<div className="github">
					<a href="https://github.com/cameronbolus" target="_blank">github.com/cameronbolus</a>
				</div>
				<div className="phone">
					<p>+1 843 991 8364</p>
				</div>
			</footer>
		)
	}
})
