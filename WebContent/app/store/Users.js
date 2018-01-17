Ext.define('AM.store.Users', {
	extend : 'Ext.data.Store',
	model : 'AM.model.User',

	autoLoad : true,

	proxy : {
		type : 'ajax',
		api: {
	        read: 'http://localhost:8080/OnlineLibraryRest/rest/employee',
	        update: 'http://localhost:8080/OnlineLibraryRest/rest/employee',
	        create: 'http://localhost:8080/OnlineLibraryRest/rest/employee'
	    },
		reader : {
			type : 'json'
		},
		actionMethods: {
	        create : 'POST',
	        read   : 'GET',
	        update : 'PUT',
	        destroy: 'DELETE'
	    }
	    
	}
});