
const mongoose =require("mongoose")
main().catch(err => console.log(err))
//here we define our schema
const userSchema=new mongoose.Schema({
	name:String,
	birth_year:Number,
	email:String,
	password:String,
	words:String
})
//connecting to a local mongodb database with no authentication
async function main(){
await mongoose.connect('mongodb://localhost:27017/test')}
module.exports=mongoose.model("user",userSchema)
