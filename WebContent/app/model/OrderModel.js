Ext.define('AM.model.OrderModel', {
 extend: 'Ext.data.Model',
 fields: [
          'orderNo',
          'customerId',
          {
           name: 'myDate', 
           mapping: 'inputDate', 
           type: 'date', 
           dateFormat: 'm/d/Y'},
          ]
});
