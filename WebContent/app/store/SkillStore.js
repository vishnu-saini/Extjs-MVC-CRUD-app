Ext.define('AM.store.SkillStore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.SkillModel',

	autoLoad : true,


	proxy : {
		type : 'rest',
		url : 'http://localhost:8080/accountapp/api/skill',
		reader : {
			type : 'json',
			root : 'data',
			successProperty : 'success'
		},
	}
});