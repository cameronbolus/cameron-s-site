import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

  routes: {
    "" : "showHomePage",
    "resume" : "showResumePage",
		"portfolio": "showPortfolioPage",
  },

  showHomePage: function(){
		console.log('changing view!')
		ACTIONS.setView("HOME")
	 },
	showResumePage: function(){
    ACTIONS.setView("RESUME") },
	showPortfolioPage: function(){
		ACTIONS.setView("PORTFOLIO")
	},
})
