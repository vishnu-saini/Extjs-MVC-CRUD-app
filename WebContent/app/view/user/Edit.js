Ext.define('AM.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email'
                    },
                    {
                        xtype: 'textfield',
                        name : 'gender',
                        fieldLabel: 'Gender'
                    },
                    {
                        xtype: 'textfield',
                        name : 'dob',
                        fieldLabel: 'DOB'
                    },
                    {
                        xtype: 'textfield',
                        name : 'qualification',
                        fieldLabel: 'Qualification'
                    },
                    {
                        xtype: 'textfield',
                        name : 'skill',
                        fieldLabel: 'Skill'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});