Ext.define('AM.model.UserModel', {
	extend : 'Ext.data.Model',
	idProperty : 'id',

	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'name',
		sortType : 'asUCText'
	}, {
		name : 'emailId',
		sortType : 'asUCText'
	}, {
		name : 'gender',
		sortType : 'asUCText'
	}, {
		name : 'dateOfBirth',
		type : 'date',
		dateFormat : 'Y-m-d'
	}, {
		name : 'qualification'
	}, {
		name : 'skills',
		type : 'auto'
	} ]
});