Ext.define('AM.view.layout.AccordionLayout', {
	extend : 'Ext.container.Container',
	alias : 'widget.accordionlayout',
	width: 300,
    height: 300,
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px'
    },
    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
    items: [{
        title: 'Panel 1',
        html: 'Panel content!'
    },{
        title: 'Panel 2',
        html: 'Panel content!'
    },{
        title: 'Panel 3',
        html: 'Panel content!'
    }]

});