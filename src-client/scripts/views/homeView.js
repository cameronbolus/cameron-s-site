import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {NavComponent} from '../components/navComp.js'
import {FooterComponent} from '../components/footerComp.js'
import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'
// import {FooterComponent} from '../components/footerComp.js'

// import {SimpleSlider} from '../components/home-carousel.js'

export const HomePageView = React.createClass({

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
					 <div className="pic-and-bio">
					 	<img className="my-pic" src="../images/cameron-headshot.jpg" alt=""/>
						<div className="all-bio">
							<p className="intro">Hi, I'm Cameron.</p>
							<p className="bio">I am a Front-End Engineer and UI/UX Designer.</p>
							<p className="bio">Before starting my career in Front-End Engineering, I studied Photography at College of Charleston. With an eye for photography and a growing inspiration from Charleston's budding tech scene, I then set out to study Web Design. This gave me my first introduction to coding, and I just wanted to learn more. After completing The Iron Yard in March 2017, I am inspired even more to learn and to spread the excitement of coding to others. When I'm not coding, I love to travel, do yoga, and tend to my succulents.</p>
						</div>
					</div>
				<FooterComponent/>
      </div>
		)
	}
})
