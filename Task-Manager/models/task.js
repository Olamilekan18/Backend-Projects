const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'must provide name'],
        trim : true,
        maxlength : [20, 'name can not be more than 20 characters'],
        minlength : [1, 'name can not be less than 1 character']       
    },
    completed :{
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Task', TaskSchema)