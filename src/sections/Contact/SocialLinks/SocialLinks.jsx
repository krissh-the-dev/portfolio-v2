import React from 'react';
import classes from './social.module.scss';

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a href='mailto: akrishnamoorthy007@gmail.com' className='icon'>
        &#xe910;
      </a>
      <a href='https://github.com/KrishnaMoorthy12' className='icon'>
        &#xe908;
      </a>
      <a href='https://twitter.com/krish_the_dev' className='icon'>
        &#xe912;
      </a>
      <a href='https://linkedin.com/in/akrishnamoorthy007' className='icon'>
        &#xe90a;
      </a>
      <a href='https://fb.com/akrishnamoorthy007' className='icon'>
        &#xe905;
      </a>
      <a href='https://instagram.com/cat_man_krish' className='icon'>
        &#xe90e;
      </a>
    </div>
  );
}
