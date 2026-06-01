import { Request } from "express";
import User from "../models/user.model";
import mongoose from "mongoose";

export const generateLoginSuccessEmailHtml = (
  req: Request,
  user: {
    full_name: string;
    email: string;
    _id: mongoose.Types.ObjectId;
  }
) => {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Login Successful</title>
  </head>
  <body style="margin:0; padding:0; background-color:#e0f7ff; font-family:Arial, sans-serif;">

    <div style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">

      <div style="background:linear-gradient(135deg, #38bdf8, #0ea5e9); padding:30px; text-align:center;">
        <h1 style="color:white; margin:0;">Login Successful</h1>
      </div>

      <div style="padding:30px; color:#333;">
        <h2 style="color:#0ea5e9;">Hello, ${user.full_name} 👋</h2>

        <p style="font-size:16px; line-height:1.6;">
          You have successfully logged into your account.
        </p>

        <div style="background:#f0f9ff; padding:20px; border-radius:10px; margin-top:20px;">
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>User ID:</strong> ${user._id}</p>
        </div>

        <p style="margin-top:25px; font-size:15px; color:#555;">
          If this login was not performed by you, please secure your account immediately.
        </p>

        <div style="text-align:center; margin-top:30px;">
          <a 
            href="${req.protocol}://${req.get("host")}" 
            style="
              background:#0ea5e9;
              color:white;
              text-decoration:none;
              padding:12px 24px;
              border-radius:8px;
              display:inline-block;
              font-weight:bold;
            "
          >
            Visit Website
          </a>
        </div>
      </div>

      <div style="background:#f0f9ff; padding:15px; text-align:center; color:#666; font-size:14px;">
        © 2026 Your App. All rights reserved.
      </div>

    </div>

  </body>
  </html>
  `;

  return html;
};