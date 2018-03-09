Ext.define('AM.view.order.PaymentEntry', {
    extend: 'Ext.form.Panel',
    alias : 'widget.paymentEntry',
    height: 250,
    width: 600,
    bodyPadding: 10,
    
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
        
         defaults: {
          labelWidth: 200,
         },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Card Holder Name',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Payment Type',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Card Number',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Expiration Date',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Security Code',
                    anchor: '100%'
                }
            ]
        });

        me.callParent(arguments);
    }
});