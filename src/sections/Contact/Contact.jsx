import React from 'react';
import classes from './contact.module.scss';

import { Input } from '../../Components';

export default function Contact() {
  return (
    <section className={classes.contact}>
      <div className={classes.container}>
        <h6 className={classes.subheading}>Contact me</h6>
        <h3 className={classes.heading}>Get in touch</h3>
        <form className={classes.contact__form}>
          <Input name={'Name'} type={'text'} />
          <Input name={'Email'} type={'email'} />
          <Input name={'Message'} component={'textarea'} />
        </form>
      </div>
    </section>
  );
}
