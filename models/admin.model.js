
const mongoose =require("mongoose")

const adminSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
     role: { type: String,required: true},
})
/*this is schema*/

const AdminModel =mongoose.model('admin',adminSchema)

module.exports ={AdminModel}
