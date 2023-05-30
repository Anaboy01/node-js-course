const mongoose = require("mongoose")
const Schema = mongoose.Schema

const employeesSchema = new Schema({
      firstname: {
            type: String,
            require:true,
      },
      lasttname: {
            type: String,
            require:true,
      },

});

module.exports = mongoose.model("Employee", employeesSchema)