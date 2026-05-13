import express ,{NextFunction, Request , Response}from "express";
import User from "../models/user.model";

// crud user
//! get all users
export const getAll = async (
	req:Request,
	res:Response,
	next:NextFunction,
) => { 
	try{
		const filter = {};
		const users = await User.find(filter);

		res.status(200).json({
			message:"All users fetched",
			success: true,
			data:"null",
			status:"success",

		});
	}
	catch (error:any) {
		next ({
			message:error?.message || "Something went wrong",
			status:"error",
			success: false,
			data:null,
			statusCode:error?.statusCode ||500,
		});
	}
};

export const getById = async (
	req:Request,
	res:Response,
	next:NextFunction,
) => { 
	try{
		const {id} = req.params;
	
		const user = await User.findOne({_id: id});

		if (!user){
const error: any = new Error("User not found");
error.statusCode= 404;
throw error;
		}	
		res.status(200).json({
			message:"User $(id) fetched",
			success: true,
			data:user,
			status:"success",
	})
} catch (error:any) {
		next ({
			message:error?.message || "Something went wrong",
			status:error?.status ||"error",
			success: false,
			data:null,
			statusCode:error?.statusCode ||500,
		});
	}
};