const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    emp_ID : {
        type: Number,
        // required: true
    },
    emp_Name : {
        type : String,
        // required : true
    },
    Ph_no : {
        type :  Number
    }

});


module.exports = User = mongoose.model('user', UserSchema);