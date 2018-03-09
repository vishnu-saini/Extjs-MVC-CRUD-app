Ext.define('AM.view.layout.Tree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.sampletree',
	title : 'Simple Tree',
	layout : 'fit',
	root : {
		text : 'Root',
		expanded : true,
		children : [ {
			text : 'Child 1',
			leaf : true
		}, {
			text : 'Child 2',
			leaf : true
		}, {
			text : 'Child 3',
			expanded : true,
			children : [ {
				text : 'Grandchild',
				leaf : true
			} ]
		} ]
	}
});