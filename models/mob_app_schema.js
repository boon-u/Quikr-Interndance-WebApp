const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    emp_ID : {
        type : Number
    },
    date : {
        type: String
        // required: true
    },
    in_time : {
        type : String
    },
    out_time : {
        type : String
    }
}, { versionKey: false });


module.exports = mongoose.model('Week', Schema);