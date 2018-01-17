Ext.define('AM.view.user.Add', {
	extend : 'Ext.window.Window',
	alias : 'widget.useradd',

	title : 'Add User',
	layout : 'fit',
	autoShow : true,

	initComponent : function() {
		this.items = [ {
			xtype : 'form',
			items : [ {
				xtype : 'textfield',
				name : 'name',
				fieldLabel : 'Name'
			}, {
				xtype : 'textfield',
				name : 'email',
				fieldLabel : 'Email'
			}, {

				xtype : 'radiogroup',
				fieldLabel : 'Gender',
				cls : 'x-check-group-alt',
				 
				items : [ {
					boxLabel : 'Male',
					name : 'rb-auto',
					inputValue : 'Male',
					name: 'gender',
					checked : true
				}, {
					boxLabel : 'Female',
					name : 'rb-auto',
					inputValue : 'Female',
					name: 'gender',
					
				} ]

			},

			{
				xtype : 'textfield',
				name : 'dob',
				fieldLabel : 'DOB'
			}, {
				xtype : 'textfield',
				name : 'qualification',
				fieldLabel : 'Qualification'
			},
			{
			xtype: 'checkboxgroup',
            fieldLabel: 'Skill',
            cls: 'x-check-group-alt',
            items: [
                {
                	boxLabel: 'Java',
                	name: 'cb-auto-1',
                	inputValue : 'Java',
					name: 'skill',
                		
                },
                {
                	boxLabel: 'Spring',
                	name: 'cb-auto-2',
                	inputValue : 'Spring',
					name: 'skill',
                		
                },
                {
                	boxLabel: 'Hibernate',
                	name: 'cb-auto-3',
                	inputValue : 'Hibernate',
					name: 'skill',
                		
                }]
			}]     
			 
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