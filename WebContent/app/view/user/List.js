Ext.define('AM.view.user.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.userlist',
	requires : [ 'Ext.ux.grid.FiltersFeature' ],

	store : 'UserStore',
	features : [ {
		ftype : 'filters',
		encode : false, // json encode the filter query
		local : false
	// defaults to false (remote filtering)
	} ],
	selType: 'rowmodel',
    rowEditor: Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToEdit: 1
    }),
	initComponent : function() {

		checkboxArray = [];

		var store = Ext.data.StoreManager.lookup('SkillStore');
		console.log(store);
		store.each(function(record) {
			fieldValue = record.get('name');
			console.log(fieldValue);
			checkboxArray.push({
				boxLabel : record.get('name'),
				name : 'skills',
				inputValue : record.get('id'),
			});
		}, this);
		console.log(checkboxArray);

		this.columns = [
				{
					header : 'Name',
					dataIndex : 'name',
					sortable : true,
					flex : 1,
					filterable : true,
					filter : {
						type : 'string',
						// optional configs
						value : 'star', // setting a value makes the filter
										// active.
						itemDefaults : {
						// any Ext.form.field.Text configs accepted
						}
					},
					editor : {
						xtype : 'textfield',
						allowBlank : false
					}
				},
				{
					header : 'Email',
					dataIndex : 'emailId',
					sortable : true,
					flex : 1,
					editor : {
						xtype : 'textfield',
						allowBlank : false
					}
				},
				{
					header : 'Gender',
					dataIndex : 'gender',
					sortable : true,
					flex : 1,
					editor : {
						xtype : 'radiogroup',
						items : [ {
							boxLabel : 'Male',
							inputValue : 'Male',
						}, {
							boxLabel : 'Female',
							inputValue : 'Female',
						} ]
					}

				},
				{
					header : 'DOB',
					dataIndex : 'dateOfBirth',
					renderer : Ext.util.Format.dateRenderer('d/m/Y'),
					sortable : true,
					flex : 1,
					editor : {
						xtype : 'datefield',
						submitFormat : 'Y-m-d'
					}
				},
				{
					header : 'Qualification',
					dataIndex : 'qualification',
					sortable : false,
					flex : 1,
					editor : {
						xtype : 'textfield',
						allowBlank : false
					}
				},
				{
					header : 'Skill',
					dataIndex : 'skills',
					sortable : false,
					flex : 1,
					renderer : function(value, record) {
						return AM.app.getController('UserController')
								.renderSkills(value, record);
					},
					editor : {
						xtype : 'checkboxgroup',
						items : checkboxArray
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

		this.plugins = [ this.rowEditor ];
		this.callParent(arguments);
	},

	buttons : [ {
		text : 'Add Employee',
		action : 'add'
	} ],

});