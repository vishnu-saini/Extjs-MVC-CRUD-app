Ext
		.define(
				'AM.controller.Users',
				{
					extend : 'Ext.app.Controller',

					views : [ 'user.List', 'user.Edit','user.Add' ],

					stores : [ 'Users' ],

					models : [ 'User' ],

					init : function() {
						console
								.log('Initialized Users! This happens before the Application launch function is called');
						this.control({
							'viewport > panel' : {
								render : this.onPanelRendered
							},
							'userlist' : {
								itemdblclick : this.editUser
							},
							'useredit button[action=save]' : {
								click : this.updateUser
							},
							'userlist button[action=add]' : {
								click : this.addUser
							},
							'useradd button[action=save]' : {
								click : this.addUserToServer
							},
						});
					},

					onPanelRendered : function() {
						console.log('The panel was rendered');
					},

					editUser : function(grid, record) {
						console.log('Double clicked on ' + record.get('name'));
						var view = Ext.widget('useredit');
						view.down('form').loadRecord(record);
					},

					updateUser : function(button) {
						var win = button.up('window'), form = win.down('form'), record = form
								.getRecord(), values = form.getValues();

						record.set(values);
						win.close();
						this.getUsersStore().sync();
					},

					addUser : function() {
						console.log("add user inside");
						var view = Ext.widget('useradd');
					},
					
					
					addUserToServer : function(button) {
						var userStore=this.getUsersStore();
						
						var win = button.up('window'), form = win.down('form'), record = form
								.getRecord(), values = form.getValues();

						userStore.insert(0,values);
						win.close();
						userStore.sync();
					}
					
				});