import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

export default async function sendMail({ from, message }) {
  try {
    let info = await transporter.sendMail({ from, to: 'akrishnamoorthy007@gmail.com', subject: 'Message from Portfolio', html: message });
    return info.messageId;
  } catch (err) {
    return err;
  }
}
