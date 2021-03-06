Ext.define('AM.view.layout.AbsoluteLayout', {
	extend : 'Ext.container.Container',
	alias : 'widget.absolutelayout',
	layout : 'absolute',

	items : [ {
		title : 'Panel 1',
		x : 50,
		y : 50,
		html : 'Positioned at x:50, y:50',
		width : 500,
		height : 100
	}, {
		title : 'Panel 2',
		x : 100,
		y : 95,
		html : 'Positioned at x:100, y:95',
		width : 500,
		height : 100
	} ]

});