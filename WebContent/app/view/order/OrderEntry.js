Ext.define('AM.view.order.OrderEntry' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.orderEntry',
    height: 500,
    activeItem: 0,
    layout: {
        type: 'card',
        deferredRender: true,
    },
    
    // the panels (or "cards") within the layout
    items: [{
        id: 'card-0',
        xtype: 'panel1' 
    },{
        id: 'card-1',
        xtype: 'panel2'
    },{
        id: 'card-2',
        xtype: 'panel3'
    }],
});