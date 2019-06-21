const mongoose = require('mongoose');

const DurationSchema = new mongoose.Schema({

    emp_ID : {
        type: Number,
        required: true
    },

    in_time:{
        type: [Date]
    },

    out_time:{
        type: [Date]
    }
});


module.exports = Duration = mongoose.model('duration',DurationSchema);