import type { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer");

const EMAIL = process.env.gmail_username;
const PASS = process.env.gmail_password;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: EMAIL!, // your email address
    pass: PASS!, // your email password
  },
});

export async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  console.log(EMAIL, PASS, req.body);

  let responseSent = false;

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "dottonangela@gmail.com", // sender address
      to: "tyrique1.daniel@gmail.com", // list of receivers
      subject: "New Project Lead", // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    });

    if (!responseSent) {
      res.status(200).json({ message: "Email sent successfully" });
      responseSent = true;
    }
  } catch (error) {
    console.log(error);
    if (!responseSent) {
      res.status(500).json({ message: "Error sending email" });
      responseSent = true;
    }
  }
}

export default async  function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get data submitted in request's body.
  const body = req.body;

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.email) {
    // Sends a HTTP bad request error code
    console.log('body: ', body);
    return res.status(400).json({ data: 'Name or Email Not Found' });
  }

  try {
    // Call sendEmail function inside the try block
    await sendEmail(req, res);

    // Send response after email has been sent
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending email" });
  }
}
