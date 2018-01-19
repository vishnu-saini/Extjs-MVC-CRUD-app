Ext.define('AM.view.user.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',

	title : 'All Users',
	store : 'UserStore',
	initComponent : function() {
		this.columns = [
				{
					header : 'Name',
					dataIndex : 'name',
					flex : 1
				},
				{
					header : 'Email',
					dataIndex : 'emailId',
					flex : 1
				},
				{
					header : 'Gender',
					dataIndex : 'gender',
					flex : 1
				},
				{
					header : 'DOB',
					dataIndex : 'dateOfBirth',
					flex : 1
				},
				{
					header : 'Qualification',
					dataIndex : 'qualification',
					flex : 1
				},
				{
					header : 'Skill',
					dataIndex : 'skills',
					flex : 1,
					renderer : function(value, record) {
						return AM.app.getController('UserController')
								.renderSkills(value, record);
					}
				}

		];

		this.callParent(arguments);
	},

	buttons : [ {
		text : 'Add Employee',
		action : 'add'
	} ],

});