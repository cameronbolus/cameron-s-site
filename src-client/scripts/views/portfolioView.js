import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {NavComponent} from '../components/navComp.js'
import {FooterComponent} from '../components/footerComp.js'
import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'

export const PorfolioPageView = React.createClass({

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
					 <div className="portfolio">
             <p className="first-title spaced-out">Projects</p>
						 <div className="project">
               <div className="project-description-left">
                 <p className="title">Current Working On: Palmetto Paw Prints</p>
                 <p>Currently designing and building the website for Palmetto Paw Prints, a non-profit company that donates earnings from clothing sales to animal shelters in South Carolina. This site will allow general users to find out more information about the company, shop their retail, and contact the company by email.</p>
                 <p className="title">Created With</p>
                 <p>Javascript, HTML, React.js, SASS, Backbone.js</p>
               </div>
							 <img src="../images/paw-prints.png" alt=""/>
             </div>
           <hr/>
					 	<div className="project">
              <img src="../images/charleston-planner.png" alt=""/>
              <div className="project-description">
                <p className="title">The Charleston Planner</p>
                <p>The Charleston Planner is a web application that allows users to search local events in the greater Charleston area. General users can search events and view descriptions, while authorized users can create new events and save events to their 'Favorites'. This project was a collaboration with one other Front-End Engineer and one Back-End Engineer.</p>
                <p className="title">Created With</p>
                <p>Javascript, HTML, React.js, SASS, Backbone.js</p>
              </div>
            </div>
          <hr/>
            <div className="project">
              <div className="project-description-left">
                <p className="title">GitHub Clone</p>
                <p>This was a fun project using the GitHub API to recreate the GitHub site, and allows the user to search other GitHub users and links to their respositories.</p>
                <p className="title">Created With</p>
                <p>Javascript, HTML, SASS, Backbone.js</p>
              </div>
              <img src="../images/github.png" alt=""/>
            </div>
          <hr/>
            <div className="project">
              <img src="../images/momofuku.png" alt=""/>
              <div className="project-description">
                <p className="title">Momofuku Replication</p>
                <p>This site is a reproduction of the Momofuku site. It is fully responsive.</p>
                <p className="title">Created With</p>
                <p>HTML, SASS/CSS</p>
              </div>
            </div>
					</div>
          <hr/>
          <div className="portfolio designs">
            <p className="first-title spaced-out">Designs</p>
            <img src="../images/butterflywebsite-mac.jpg" alt=""/>
            <img src="../images/coastaltraining2new-mac.jpg" alt=""/>
            <img src="../images/HAPPYFEET-MAC.jpg" alt=""/>
            <img src="../images/potteryshed-mac.jpg" alt=""/>
            <img src="../images/vintagewoodworks.jpg" alt=""/>
            <img src="../images/Johnwebsite-mac.jpg" alt=""/>
          </div>
				<FooterComponent/>
      </div>
		)
	}
})
