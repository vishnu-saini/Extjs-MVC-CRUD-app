var currentOrder = 108;

Ext.define('AM.store.OrderStore', {
    extend: 'Ext.data.Store',
    model: 'AM.model.OrderModel',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/orders.json',
        },
        reader: {
            type: 'json',
            root: 'orders',
            successProperty: 'success'
        }
    }
});