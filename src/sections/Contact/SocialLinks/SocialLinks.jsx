import React from 'react';
import classes from './social.module.scss';

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a href='mailto: akrishnamoorthy007@gmail.com' className='icon'>
        &#xe90c;
      </a>
      <a href='https://github.com/KrishnaMoorthy12' className='icon'>
        &#xe908;
      </a>
      <a href='https://twitter.com/krish_the_dev' className='icon'>
        &#xe90e;
      </a>
      <a href='https://linkedin.com/in/akrishnamoorthy007' className='icon'>
        &#xe907;
      </a>
      <a href='https://fb.com/akrishnamoorthy007' className='icon'>
        &#xe90d;
      </a>
      <a
        href='https://join.slack.com/t/akrishnamoorthy007/shared_invite/zt-h38nw07o-iwbECk2CYVTv0pNokG884g'
        className='icon'
      >
        &#xe902;
      </a>
    </div>
  );
}
