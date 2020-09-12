import emailjs from 'emailjs-com';
import dotenv from 'dotenv';

dotenv.config();

console.log({ serID: process.env.REACT_APP_SERVICE_ID, tempID: process.env.REACT_APP_TEMPLATE_ID, userID: process.env.REACT_APP_USER_ID })

const mail = ({ name, email, message }) => {
  return emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, { name, email, message }, process.env.REACT_APP_USER_ID);
}

export default mail;
