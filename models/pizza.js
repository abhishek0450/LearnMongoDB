const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pizzaSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        
    },
    size:{
        type: String,
        enum:['small', 'medium', 'large', 'xl'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    toppings:{
        type: [String],
        enum:['cheese', 'pepperoni', 'sausage', 'onion', 'mushroom', 'olive', 'green pepper', 'other'],
        default: []
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    orderNo:{
        type: Number,
        required: true,
        Unique: true
    }

});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;