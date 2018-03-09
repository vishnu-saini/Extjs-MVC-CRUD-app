Ext.define('AM.store.UserStore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.UserModel',

	autoLoad : true,
	//autoSync : true,
	pageSize : 10,
	remoteSort : true,
	remoteFilter : true,
	proxy : {

		type : 'rest',
		url : 'http://localhost:8080/accountapp/api/user',
		idParam : 'id',
		appendId : true,
		reader : {
			type : 'json',
			root : 'data.content',
			totalProperty : 'data.totalElements',
			successProperty : 'success'
		},
		actionMethods : {
			create : 'POST',
			read : 'GET',
			update : 'PUT',
			destroy : 'DELETE'
		}
	}
});