import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {NavComponent} from '../components/navComp.js'
import {FooterComponent} from '../components/footerComp.js'
import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'
// import {FooterComponent} from '../components/footerComp.js'

// import {SimpleSlider} from '../components/home-carousel.js'

export const ResumePageView = React.createClass({

	getInitialState: function(){
		return STORE.getStoreData()
	},

	// componentDidMount: function(){
	// 	let component = this;
	// 	console.log('ACTIONS.fetch()...')
	// 	ACTIONS.fetchAllEvents()
	//
	// },

	render: function(){
		return (
      <div>
        <NavComponent/>
					 <div className="resume">
					 	<img src="../images/resume.png" alt=""/>
					</div>
				<FooterComponent/>
      </div>
		)
	}
})
