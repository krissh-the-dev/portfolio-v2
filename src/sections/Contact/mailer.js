import emailjs from 'emailjs-com';
import dotenv from 'dotenv';

dotenv.config();

const mail = ({ name, email, message }) => {
  return emailjs.send(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    { name, email, message },
    process.env.REACT_APP_USER_ID
  );
};

export default mail;
