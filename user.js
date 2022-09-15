
const mongoose =require("mongoose")
main().catch(err => console.log(err))
//here we define our database schema
const userSchema=new mongoose.Schema({
	name:String,
	birth_year:Number,
	email:String,
	password:String,
	words:String
})
async function main(){
await mongoose.connect('mongodb://localhost:27017/test')}
module.exports=mongoose.model("user",userSchema)
