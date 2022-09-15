const express=require("express")
const User=require("./user")
const regvalidation=require("./validator")
const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.post("/add",(req,res)=>{
	const { error,value }=regvalidation.validate(req.body)
	if(error){
		console.log("an errro has accured")
		res.send("invalid request")
	}else{
		var item=
			{
		'name':req.body.name,
		'birth_year':req.body.birth_year,
		'email':req.body.email,
		'password':req.body.password,
		'words':req.body.words
		
	
		}
		res.send(item)
		new User(item).save().then(()=>console.log("successfully saved"))
	}
	
	
})
app.get("/get",(req,res)=>{
	User.find({},(err,docs)=>{
		res.send(docs);
		console.log(err)
	})

})
app.listen(8080)