const Joi=require("joi")
const registerSchema=Joi.object({
	name:Joi.string().required(),
	birth_year:Joi.number().min(1900).max(2004).required(),
	email:Joi.string().email().required(),
	password:Joi.string().min(8).max(16).required(),
	words:Joi.string(),
})
module.exports=registerSchema