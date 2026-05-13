import express from "express";

const app =express();

//! body parser
app.use(express.json({limit:"10mb"}));

// ? using middleware

// ? using route

// ?error handler

export default app;