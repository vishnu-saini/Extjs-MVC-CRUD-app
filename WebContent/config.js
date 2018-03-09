Ext.Loader.setConfig({
	enabled : true
});
Ext.Loader
		.setPath('Ext.ux', 'http://cdn.sencha.com/ext/gpl/4.2.0/examples/ux/');

Ext.apply(Ext.form.field.VTypes, {
	alphanumwithdot : function(val) {
		return /^[a-zA-Z0-9.]+$/.test(val);
	},
	alphanumwithdotText : 'Not a valid qualification you can use alphanumeric with special char dot(.)',
});


