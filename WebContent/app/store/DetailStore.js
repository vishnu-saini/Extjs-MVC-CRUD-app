var currentLine = 4;

Ext.define('AM.store.DetailStore', {
    extend: 'Ext.data.Store',
    model: 'AM.model.DetailModel',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/details.json',
        },
        reader: {
            type: 'json',
            root: 'details',
            successProperty: 'success'
        }
    }
});