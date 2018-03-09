Ext.define('AM.view.order.steps.Panel3' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.panel3',
    title: 'Step 3: Order Entry - Header > Detail > Payment',
    items: [
 {
     xtype: 'panel',
     layout: {
         type: 'column'
     },
     items: [
         {
             xtype: 'fieldset',
             title: 'Order Header Information',
             columnWidth: 0.5,
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
             xtype: 'fieldset',
             title: 'Order Summary Information',
             columnWidth: 0.5,
             defaults: {
                 bodyPadding: 4,
                 width: 400
             },
              items: [
                {
                    xtype: 'displayfield',
                    itemId: 'itemCount',
                    fieldLabel: 'No of Lines'
                },
                {
                    xtype: 'displayfield',
                    itemId: 'qtyCount',
                    fieldLabel: 'Quantity Total'
                },
                {
                    xtype: 'displayfield',
                    itemId: 'orderTotal',
                    fieldLabel: 'Order Total',
                }]
         }
     ]
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
                 id: 'continue3',
                 text: 'Continue',
                 iconCls: 'icon-go'
             }, 
             {
              xtype: 'button',
                 id: 'back3',
                 text: 'Back',
                 iconCls: 'icon-back'
             }
          ]
 },    
    {
     xtype: 'paymentEntry'
    }],
    layout: 'auto'
    
   
});
