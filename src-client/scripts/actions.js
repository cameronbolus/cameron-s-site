import Backbone from 'backbone';
import {STORE} from './store.js'

export const ACTIONS = {
  setView: function(viewName, routeParams){
    // console.log('ACTION updating view:', viewName)
    if(typeof routeParams === 'object'){
      STORE.setStore('routeParams', routeParams)
    } else {
      STORE.setStore('routeParams', {})
    }

    STORE.setStore('currentView', viewName)
	},


  routeTo: function(path){
    window.location.hash = path
  }
}
