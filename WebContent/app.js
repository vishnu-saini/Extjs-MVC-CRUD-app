Ext
		.application({
			requires : [ 'Ext.container.Viewport' ],
			name : 'AM',

			appFolder : 'app',

			controllers : [ 'user.UserController','order.OrderController' ],

			launch : function() {
				Ext
						.create(
								'Ext.container.Viewport',
								{
									layout : {
										type : 'border',
										padding : 5
									},
									defaults : {
										split : true
									},
									items : [
											{
												region : 'north',
												split : true,
												height : 70,
												xtype : 'container',
												loader : {
													url : 'static/html/header.html',
													autoLoad : true
												}
											},
											{
												region : 'west',
												collapsible : true,
												width : '20%',
												minWidth : 100,
												minHeight : 140,
												items : [ {
													xtype : 'sampletree'
												} ]
											},
											{
												region : 'center',
												minHeight : 380,
												layout : 'fit',
												items : [ {
													xtype : 'tabpanel',
													items : [
															{
																title : 'All Users',
																xtype : 'userlist'
															},
															{
																title : 'Absolute Layout',
																xtype : 'absolutelayout'
															},
															{
																title : 'Accordion Layout',
																xtype : 'accordionlayout'
															},
															{
																title : 'Anchor Layout',
																xtype : 'anchorlayout'
															},{
																title : 'Order Entry',
																xtype : 'orderEntry'
															} ]
												} ]
											},
											{
												region : 'south',
												minHeight : 100,
												layout : {
													type : 'vbox',
													align : 'center'
												},
												items : [
														{
															xtype : 'container',
															layout : {
																type : 'hbox',
															},
															items : [
																	{
																		xtype : 'container',
																		flex : 1,
																		html : '<h5 class="white-text">Footer Content</h5><p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>'
																	},
																	{
																		xtype : 'container',
																		flex : 2,
																		html : '<h5 class="white-text">Links</h5><ul><li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>'
																	} ]
														},
														{
															xtype : 'container',
															align : 'center',
															flex : 2,
															html : '<span class="container">© 2014 Copyright Text <a class="grey-text text-lighten-4 right" href="#!">More Links</a></span>'
														} ]
											} ]
								});
			}
		});