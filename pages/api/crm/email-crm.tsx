import { NextApiRequest, NextApiResponse } from "next";
import multiparty from 'multiparty';

const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail');

//! SendGrid API Key
const sendGridApiKey = process.env.sendgrid_key;
sgMail.setApiKey(sendGridApiKey);

async function sendEmail(data: { name: string; email: string; message: string }) {
  console.log("data",data)
  const { name, email, message } = data;

  // Log the values
  console.log('Name:', data.name);
  console.log('Email:', data.email);
  console.log('Message:', data.message);
  const welcomeText = 'Thank you for reaching out to us. We have received your message and someone from our team will be in contact with you shortly.'
  // create reusable transporter object using the default SMTP transport
  const toMsg = {
    to: email, // Change to your recipient
    from: 'support@cybershoptech.com', // Change to your verified sender
    subject: 'Thank you for contacting us!',
    text: welcomeText,
    html: `<html>
  <head>
    <title></title>
    <style>
      .container {
        width: 100%;
        height: 100vh; /* Adjust the height as needed */
      }
      .image {
        width: 100%;
       
        object-fit: cover;
      }
    </style>
  </head>
  <body>
  <p>${welcomeText}</p>
    <div >
      <img class="image" src="https://res.cloudinary.com/djao481zq/image/upload/v1684528783/CyberOni/Assets/email_marketing/email-signirutes/uv7dpqhgweiwgpseuzym.png" />
    </div>
  </body>
</html>
`,
  }

  sgMail
    .send(toMsg)
    .then((response: any) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error: Error) => {
      console.error(error)
    })
}
//
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body)
  const { name, email, message } = req.body;
  console.log("Test Test",name)

  // const form = new multiparty.Form();
  if (req.method === 'POST') {
    try {
      // Get data submitted in the request's body
      const { name, email } = req.body;
      const message = req.body.message;
      console.log("Name", req.body.name)
   
      // Call sendEmail function inside the try block
      await sendEmail(req.body);

      // Send response after email has been sent
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  }

}