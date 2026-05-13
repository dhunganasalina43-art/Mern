// ! register
import express ,{NextFunction, Request , Response}from "express";
export const register = async( req:Request,res:Response, next:NextFunction,
)  => 
	try{
		const {full_name,email,password,phone} = req.body;
		if (! full_name)
			{
const error: any = new Error("full_name is required");
error.statusCode= 404;
error.status = "fail";
throw error;
}
if (! email){
	const error: any = new Error("email is required");
error.statusCode= 404;
error.status = "fail";
throw error;
}
if(!password){
	const error: any = new Error("password is required");
error.statusCode= 404;
error.status = "fail";
throw error;
}
const user = new user ({ full_name,email,password,phone});

await user.save();

res.status(200).json({
			message:"Account created",
			success: true,
			data:user,
			status:"success",
	})
	}catch (error:any) {
		next ({
			message:error?.message || "Something went wrong",
			status:"error",
			success: false,
			data:null,
			statusCode:error?.statusCode ||500,
		});
	};
// !login

// ! change password