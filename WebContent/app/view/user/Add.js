Ext.define('AM.view.user.Add', {
	extend : 'Ext.window.Window',
	alias : 'widget.useradd',

	title : 'Add User',
	layout : 'fit',
	autoShow : true,

	initComponent : function() {

		checkboxArray = [];

		var store = Ext.data.StoreManager.lookup('SkillStore');

		store.each(function(record) {
			fieldValue = record.get('name');
			console.log(fieldValue);
			checkboxArray.push({
				boxLabel : record.get('name'),
				name : 'skills',
				inputValue : record.get('id'),
			});
		}, this);

		this.items = [ {
			xtype : 'form',
			items : [ {
				xtype : 'textfield',
				name : 'name',
				fieldLabel : 'Name'
			}, {
				xtype : 'textfield',
				name : 'emailId',
				fieldLabel : 'Email'
			}, {
				xtype : 'radiogroup',
				fieldLabel : 'Gender',
				columns : 1,
				vertical : true,
				items : [ {
					boxLabel : 'Male',
					name : 'gender',
					inputValue : 'Male',
					checked : true
				}, {
					boxLabel : 'Female',
					inputValue : 'Female',
					name : 'gender',
				} ]
			}, {
				xtype : 'datefield',
				fieldLabel : 'DOB',
				submitFormat: 'Y-m-d',
				name : 'dateOfBirth'
			// limited to the current date or prior
			},

			{
				xtype : 'textfield',
				name : 'qualification',
				fieldLabel : 'Qualification'
			}, {
				xtype : 'checkboxgroup',
				fieldLabel : 'Skills',
				columns : 1,
				vertical : true,
				items : checkboxArray
			} ]

		} ];

		this.buttons = [ {
			text : 'Save',
			action : 'save'
		}, {
			text : 'Cancel',
			scope : this,
			handler : this.close
		} ];

		this.callParent(arguments);
	}
});