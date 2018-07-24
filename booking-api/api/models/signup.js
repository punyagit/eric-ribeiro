const mongoose = require('mongoose');

const signupSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phonenumber: {
        type: String,
        required: false
    },
});

const Signup = mongoose.model('Signup', signupSchema);
module.export = Signup