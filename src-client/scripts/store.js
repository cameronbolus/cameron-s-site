export const STORE = {
	_data: {
		currentView: 'HOME',
	},

	getStoreData: function(){
		return this._data
	},

	setStore: function(storeProp, payload){

		this._data[storeProp] = payload
		if(typeof this._storeTheData === 'function'){
			this._storeTheData()
		}

	},

	onStoreChange: function(cb){
		this._storeTheData = cb
	}


}
