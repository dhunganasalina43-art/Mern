import express ,{NextFunction, Request , Response}from "express";


import userRoutes from "./route/user.routes";
import userRoutes from "./route/auth.routes";


const app =express();

//! body parser
app.use(express.json({limit:"10mb"}));

// ? using middleware


//! helth route
app.use('/',(req:Request , res:Response) =>{
	res.status(200).json({
		message: "Server is up and running ",
		success:true,
		status:"success",
	});
});

// ? using route
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/user",authRoutes);


// ?error handler

export default app;