import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REACT_APP_EMAIL_ID,
    pass: process.env.REACT_APP_EMAIL_PASSWORD
  }
});

export default async function sendMail({ name, email, message }) {
  try {
    console.log({
      user: process.env.REACT_APP_EMAIL_ID,
      pass: process.env.REACT_APP_EMAIL_PASSWORD
    });
    let info = await transporter.sendMail({ from: `"${name}" <${email}>`, to: 'akrishnamoorthy007@gmail.com', subject: 'Message from Portfolio', html: message });
    return info.messageId;
  } catch (err) {
    return err;
  }
}
