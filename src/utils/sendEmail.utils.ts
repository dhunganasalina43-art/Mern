import ENV_CONFIG from "../config/env.config";
import transporter from "../config/nodemailer.config";

export const sendEmail = async() => {
	try{
		await transporter.sendMail({
			to:"salinadd40@gmail.com",
			from: `Project Ecommerce <${ENV_CONFIG}>`,
			subject:"Welcome to ecom",
			text:"Login Successfull. Welcome to ecom",
		});
		return true;
	} catch (error) {
		console.log(error);
		throw error;
	}
};