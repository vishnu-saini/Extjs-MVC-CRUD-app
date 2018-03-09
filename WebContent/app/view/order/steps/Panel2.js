Ext.define('AM.view.order.steps.Panel2' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.panel2',
    title: 'Step 2: Order Entry - Header > Detail',
    items: [
 {
    xtype: 'fieldset',
    title: 'Header Information',
    defaults: {
        bodyPadding: 4,
        width: 400
    },
    items: [
   {
       xtype: 'displayfield',
       itemId: 'orderNo',
       fieldLabel: 'Order No'
   },
   {
       xtype: 'displayfield',
       itemId: 'customerId',
       fieldLabel: 'Customer No',
   },
   {
       xtype: 'displayfield',
       itemId: 'myDate',
       fieldLabel: 'Order Date',
   }]
 },
 {
  xtype: 'container',
  margin: '10 0 5 0',
  layout: {
         type: 'hbox'
     },
     width: 450,
  defaults: {
         flex: 1,
     },
  items: [
       {
              xtype: 'button',
                 id: 'add2',
                 text: 'New Detail',
                 iconCls: 'icon-add'
       },
             {
              xtype: 'button',
                 id: 'continue2',
                 text: 'Continue',
                 iconCls: 'icon-go'
             }, 
             {
              xtype: 'button',
                 id: 'back2',
                 text: 'Back',
                 iconCls: 'icon-back'
             }
          ]
 },    
    {
     xtype: 'detailEntry'
    }],
    layout: 'auto'
    
   
});