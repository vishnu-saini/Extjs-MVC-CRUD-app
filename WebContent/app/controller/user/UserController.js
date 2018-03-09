Ext
		.define(
				'AM.controller.user.UserController',
				{
					extend : 'Ext.app.Controller',

					views : [ 'user.List', 'user.Form',
							'layout.AbsoluteLayout', 'layout.AccordionLayout',
							'layout.AnchorLayout', 'layout.Tree'],

					stores : [ 'UserStore', 'SkillStore' ],

					models : [ 'UserModel', 'SkillModel' ],

					init : function() {
						console
								.log('Initialized Users! This happens before the Application launch function is called');
						this.control({

							'userlist' : {
								itemdblclick : this.showUserForm
							},
							'userlist button[action=add]' : {
								click : this.showUserForm
							},
							'userform button[action=add]' : {
								click : this.addOrUpdateUser
							},
							'userform button[action=edit]' : {
								click : this.addOrUpdateUser
							},
							'userlist' : {
								edit : this.UpdateUserFromGrid
							}
						});
					},

					UpdateUserFromGrid : function(editor, e) {
						console.log(editor);
						console.log(e);
						this.getStore('UserStore').sync();
					},

					showUserForm : function(grid, record) {

						var view = Ext.widget('userform');

						if (typeof record.data != 'undefined') {
							view.down('button[action=add]').hide();
							var skillObjectArray = record.data.skills;
							record.data.skills = [];
							skillObjectArray.forEach(function(e) {
								record.data.skills.push(e.id);
							});
							view.down('form').loadRecord(record);
							console.log(record.data);
						} else {
							view.down('button[action=edit]').hide();
						}
					},

					addOrUpdateUser : function(button) {

						console.log(button);
						var userStore = this.getStore('UserStore');
						var skillStore = this.getStore('SkillStore');

						var win = button.up('window');
						var record = win.down('form').getRecord();
						var values = win.down('form').getValues();

						var skills = [];
						var skillIds = values.skills;
						if (skillIds.constructor === Array) {
							for (var i = 0; i < skillIds.length; i++) {
								skillStore.data.items.forEach(function(e) {
									if (e.data.id == skillIds[i]) {
										skills.push({
											"id" : skillIds[i],
											"name" : e.data.name
										});
									}
								});

							}
						} else {
							skillStore.data.items.forEach(function(e) {
								if (e.data.id == skillIds) {
									skills.push({
										"id" : skillIds,
										"name" : e.data.name
									});
								}
							});
						}
						values.skills = skills;

						console.log(values);

						if (button.action == "add") {
							userStore.add(values);
						} else if (button.action == "edit") {
							record.set(values);
						}

						win.close();
						userStore.sync();

					},

					renderSkills : function(value, record) {
						var skills = "";
						for (var i = 0; i < value.length; i++) {
							skills += value[i].name + ",";
						}
						skills = skills.slice(0, -1);
						return skills;
					},

				});