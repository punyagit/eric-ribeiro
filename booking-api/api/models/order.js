const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name:{type: String},
    phoneNumber:{type: String},
    productName:{type: String},
    price:{type: String},
    date:{type: String},
    time:{type: String},
    duration:{type: String},
	
});

module.exports = mongoose.model('Order', orderSchema);