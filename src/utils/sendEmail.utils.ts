import { MailOptions } from "nodemailer/lib/json-transport";
import ENV_CONFIG from "../config/env.config";
import transporter from "../config/nodemailer.config";
import Mail from "nodemailer/lib/mailer";

type IEmailOption = {
	to: string;
	subject:string;
	html:string;
	cc?:string | string[];
	bcc?:string | string[];
	attachments?: any[];
};

export const sendEmail = async({to,html,cc,bcc,subject,attachments}:IEmailOption) => {
	try{
		const mailOptions:Mail.Options={
			to:to,
			from:`Project Rcommerce <${ENV_CONFIG.smtp_user}>`,
			subject:subject,
			html:html,
		};

		if (cc) {
			mailOptions["cc"] = cc;
		}
		if (bcc) {
			mailOptions["bcc"] = bcc;
		}
		if(attachments){
			mailOptions["attachments"] = attachments;
		}

		await transporter.sendMail(mailOptions)
			return true;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
			// to:"salinadd40@gmail.com",
			// from: `Project Ecommerce <${ENV_CONFIG.smtp_user}>`,
			// subject:"Welcome to ecom",
			// text:"Login Successfull. Welcome to ecom",
		