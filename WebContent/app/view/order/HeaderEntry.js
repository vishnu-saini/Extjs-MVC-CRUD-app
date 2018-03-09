Ext.define('AM.view.order.HeaderEntry' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.headerEntry',
    store : 'OrderStore',
    selType: 'rowmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ],
    
    initComponent: function() {
        
     this.columns = [
            {header: 'Order No',  dataIndex: 'orderNo',  flex: 1},
            {
             header: 'Customer Id',  
             dataIndex: 'customerId',  
             flex: 1,
             editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }},
            {
                header: 'Order Date', 
                dataIndex: 'myDate', 
                flex: 1, 
                renderer: this.formatDate,
             editor: {
                    xtype: 'datefield',
                    format: 'm/d/y',
                    minValue: '01/01/12',
                    disabledDays: [0, 6],
                    disabledDaysText: 'No weekends'
                }}
        ];

        this.callParent(arguments);
    },
    
    formatDate: function(value){
        return value ? Ext.Date.dateFormat(value, 'M d, Y') : '';
    }
});