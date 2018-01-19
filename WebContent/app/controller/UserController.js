Ext
		.define(
				'AM.controller.UserController',
				{
					extend : 'Ext.app.Controller',

					views : [ 'user.List', 'user.Edit', 'user.Add' ],

					stores : [ 'UserStore', 'SkillStore' ],

					models : [ 'UserModel', 'SkillModel' ],

					init : function() {
						console
								.log('Initialized Users! This happens before the Application launch function is called');
						this.control({

							'userlist' : {
								itemdblclick : this.showUserEditForm
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

					showUserEditForm : function(grid, record) {
						console.log('Double clicked on ' + record.get('name'));
						
						var skillObjectArray= record.data.skills;
						record.data.skills=[];
						
						skillObjectArray.forEach(function(e) {
								record.data.skills.push(e.id);
						});
						
						var view = Ext.widget('useredit');
						
						
						
						
						
						view.down('form').loadRecord(record);
						console.log(record.data);
					},

					updateUser : function(button) {
						
						var userStore = this.getStore('UserStore');
						var skillStore = this.getStore('SkillStore');
						
						
						var win = button.up('window'), form = win.down('form'), record = form
								.getRecord(), values = form.getValues();

						
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
						
						
						record.set(values);
						win.close();
						this.userStore.sync();
					},

					addUser : function() {
						console.log("add user inside");
						var view = Ext.widget('useradd');
						console.log(view);
					},

					addUserToServer : function(button) {
						var userStore = this.getStore('UserStore');
						var skillStore = this.getStore('SkillStore');
						console.log(skillStore.data.items);

						var win = button.up('window'), form = win.down('form'), record = form
								.getRecord(), values = form.getValues();

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
						userStore.insert(0, values);
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
					}

				});