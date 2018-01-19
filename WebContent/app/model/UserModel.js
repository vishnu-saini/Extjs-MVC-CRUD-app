Ext.define('AM.model.UserModel', {
	extend : 'Ext.data.Model',
	idProperty : 'id',

	fields : [ {
		name : 'id',
		type : 'int'
	}, 'name', 'emailId', 'gender', {
		name : 'dateOfBirth'
	}, 'qualification', {
		name : 'skills',
		type : 'auto'
	} ]
});