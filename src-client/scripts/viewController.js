import React from 'react';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';
import {AppRouter} from './route.js'
import {HomePageView} from './views/homeView.js'
import {ResumePageView} from './views/resumeView.js'
import {PorfolioPageView} from './views/portfolioView.js'



export const ViewController = React.createClass({

	getInitialState: function(){
		// ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
		let storeObject = STORE.getStoreData()
		return storeObject
	},

  componentWillMount: function(){
    let component = this;
    // console.log('initializing store listener???')
    STORE.onStoreChange(function(){
      let newStoreObj = STORE.getStoreData()
      // console.log("STATE CHANGED!", newStoreObj )

      component.setState(newStoreObj)
    })

    new AppRouter()

    // ACTIONS.fetchCurrentUser()

  },


	render: function(){
		let componentToRender
    // console.log('ViewController.state.currentView: ', this.state.currentView)
		switch(this.state.currentView){
			case "HOME":
        console.log('hey')
				componentToRender = <HomePageView/>
				break;
			case "RESUME":
				componentToRender = <ResumePageView {...this.state}/>
				break;
			case "PORTFOLIO":
				console.log('viewcontroller single event working', this.state.routeParams)
				componentToRender = <PorfolioPageView {...this.state}/>
				break;

 			default:
		}

		// console.log('APP STATE', this.state)
		return (
			<div>
				{componentToRender}
			</div>
		)
	}
})
