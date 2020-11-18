import React, { useState } from 'react';
import classes from './contact.module.scss';
import Fade from 'react-reveal/Fade';

import { Button, SnackBar } from '../../Components';
import mail from './mailer';

export default function Contact() {
  const initialState = { name: '', email: '', message: '' };
  const [formData, setFormData] = useState(initialState);
  const [mailerResponse, setMailerResponse] = useState('not initiated');

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setFormData(prevVal => ({ ...prevVal, [id]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, message } = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim()
    };

    if (name === '' || email === '' || message === '') {
      console.log('Not sent');
      return setMailerResponse('error');
    }
    mail({ name, email, message })
      .then(res => {
        if (res.status === 200) {
          setMailerResponse('success');
          setFormData(initialState);
        } else setMailerResponse('error');
      })
      .catch(err => {
        setMailerResponse('error');
        console.log(err);
      });
  };

  return (
    <section id='contact' className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.sub_heading}>Contact me</div>
        <h3 className={classes.heading}>Get in touch</h3>
        <form className={classes.contact__form}>
          <Fade bottom distance={'4rem'}>
            <div className={classes.input}>
              <input
                placeholder='name'
                id='name'
                required
                type='text'
                className={classes.input__field}
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor='name' className={classes.input__label}>
                Name
              </label>
            </div>

            <div className={classes.input}>
              <input
                placeholder='email'
                id='email'
                required
                type='email'
                className={classes.input__field}
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor='email' className={classes.input__label}>
                Email
              </label>
            </div>

            <div className={classes.input}>
              <textarea
                placeholder='message'
                id='message'
                required
                className={classes.input__field}
                style={{
                  height: 'auto',
                  width: '100%',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '16rem',
                  maxHeight: '20rem'
                }}
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor='message' className={classes.input__label}>
                Message
              </label>
            </div>

            <Button onClick={handleSubmit}>{'Send ->'}</Button>
          </Fade>
        </form>

        {mailerResponse !== 'not initiated' && (
          <SnackBar variant={mailerResponse} icon='mail'>
            {mailerResponse === 'success' ? 'Message sent successfully' : 'There was an error sending your message.'}
          </SnackBar>
        )}
      </div>
    </section>
  );
}
