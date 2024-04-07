const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        //profession
        type: String,
        //enum is used to restrict the value of a field to a fixed set of values
        enum:['chef', 'waiter', 'manager', 'delivery', "other"],
        required: true 
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        
    },
    salary: {
        type: Number,
        required: true
    }

});

//create a model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;