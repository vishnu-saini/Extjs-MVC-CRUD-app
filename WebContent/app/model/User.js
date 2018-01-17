Ext.define('AM.model.User', {
	extend : 'Ext.data.Model',
	idProperty : 'id',
	
	fields : [ {
		name : 'id',
		type : 'int'
	}, 'name', 'emailId', 'gender', 'dateOfBirth', 'qualification' ],
	
	hasMany : {
		model : 'Skill',
		name : 'skills'
	}
});