Ext.define('AM.store.UserStore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.UserModel',

	autoLoad : true,

	proxy : {	
		type : 'rest',
		url: 'http://localhost:8080/accountapp/api/user',
		reader : {
			type : 'json',
			root : 'data',
			successProperty : 'success'
		},
	}
});