Ext.define('AM.view.user.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',

	title : 'All Users',
	store : 'Users',
	initComponent : function() {
		this.columns = [ {
			header : 'Name',
			dataIndex : 'name',
			flex : 1
		}, {
			header : 'Email',
			dataIndex : 'email',
			flex : 1
		}, {
			header : 'Gender',
			dataIndex : 'gender',
			flex : 1
		}, {
			header : 'DOB',
			dataIndex : 'dob',
			flex : 1
		}, {
			header : 'Qualification',
			dataIndex : 'qualification',
			flex : 1
		}, {
			header : 'Skill',
			dataIndex : 'skill',
			flex : 1
		},

		];

		this.callParent(arguments);
	},

	buttons: [{
        text: 'Add Employee',
        action: 'add'
    }]
});