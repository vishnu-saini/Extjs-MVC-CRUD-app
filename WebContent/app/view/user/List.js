Ext.define('AM.view.user.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',
	requires: ['Ext.ux.grid.FiltersFeature'],
	title : 'All Users',
	store : 'UserStore',
	features: [{
        ftype: 'filters',
        encode: false, // json encode the filter query
        local: false   // defaults to false (remote filtering)
    }],
	initComponent : function() {
		this.columns = [
				{
					header : 'Name',
					dataIndex : 'name',
					sortable : true,
					flex : 1,
					filterable: true,
					filter: {
			            type: 'string',
			            // optional configs
			            value: 'star',  // setting a value makes the filter active.
			            itemDefaults: {
			                // any Ext.form.field.Text configs accepted
			            }
			        }
				},
				{
					header : 'Email',
					dataIndex : 'emailId',
					sortable : true,
					flex : 1
				},
				{
					header : 'Gender',
					dataIndex : 'gender',
					sortable : true,
					flex : 1
				},
				{
					header : 'DOB',
					dataIndex : 'dateOfBirth',
					renderer : Ext.util.Format.dateRenderer('d/m/Y'),
					sortable : true,
					flex : 1
				},
				{
					header : 'Qualification',
					dataIndex : 'qualification',
					sortable : false,
					flex : 1
				},
				{
					header : 'Skill',
					dataIndex : 'skills',
					sortable : false,
					flex : 1,
					renderer : function(value, record) {
						return AM.app.getController('UserController')
								.renderSkills(value, record);
					}
				}

		];

		this.bbar = Ext.create('Ext.PagingToolbar', {
			store : this.store,
			displayInfo : true,
			displayMsg : 'Displaying topics {0} - {1} of {2}',
			emptyMsg : "No topics to display",
			pageSize : 10
		});

		this.callParent(arguments);
	},

	buttons : [ {
		text : 'Add Employee',
		action : 'add'
	} ],

});