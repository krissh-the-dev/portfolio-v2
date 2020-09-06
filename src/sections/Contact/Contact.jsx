import React, { useState } from 'react';
import classes from './contact.module.scss';

import { Button } from '../../Components';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData(prevVal => ({ ...prevVal, [name]: value }));
  }
  return (
    <section className={classes.contact}>
      <div className={classes.container}>
        <h6 className={classes.subheading}>Contact me</h6>
        <h3 className={classes.heading}>Get in touch</h3>
        <form className={classes.contact__form}>
          <div className={classes.input}>
            <input placeholder='name' id='name' name='name' type='text' className={classes.input__field} value={formData.name} onChange={handleChange} />
            <label htmlFor='name' className={classes.input__label}>Name</label>
          </div>

          <div className={classes.input}>
            <input placeholder='email' id='email' name='email' type='email' className={classes.input__field} value={formData.email} onChange={handleChange} />
            <label htmlFor='email' className={classes.input__label}>Message</label>
          </div>

          <div className={classes.input}>
            <textarea placeholder='message' className={classes.input__field} id='message' name='message' style={{ height: 'auto', minHeight: '16rem' }} value={formData.message} onChange={handleChange} />
            <label htmlFor='message' className={classes.input__label}>Message</label>
          </div>

          <Button onClick={() => console.log(formData)}>Send {'->'}</Button>
        </form>
      </div>
    </section>
  );
}
