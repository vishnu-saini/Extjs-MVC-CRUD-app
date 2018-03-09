Ext.define('AM.view.layout.AnchorLayout', {
	extend : 'Ext.container.Container',
	alias : 'widget.anchorlayout',
	width: 500,
    height: 400,
    title: "AnchorLayout Panel",
    layout: 'anchor',
    items: [
        {
            xtype: 'panel',
            title: '75% Width and 20% Height',
            anchor: '75% 20%'
        },
        {
            xtype: 'panel',
            title: 'Offset -300 Width & -200 Height',
            anchor: '-300 -200'     
        },
        {
            xtype: 'panel',
            title: 'Mixed Offset and Percent',
            anchor: '-250 20%'
        }
    ]
});