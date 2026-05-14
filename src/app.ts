import express ,{NextFunction, Request , Response}from "express";


import userRoutes from "./route/user.routes";
import authRoutes from "./route/auth.routes";
import { errorHandler } from "./controllers/middleware/errorHandler.middleware";


const app =express();

//! body parser
app.use(express.json({limit:"10mb"}));

// ? using middleware


//! helth route
app.get('/',(req:Request , res:Response) =>{
	res.status(200).json({
		message: "Server is up and running ",
		success:true,
		status:"success",
	});
});

// ? using route
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/auth",authRoutes);




// ?error handler
app.use(errorHandler);
export default app;