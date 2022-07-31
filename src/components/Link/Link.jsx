import React from 'react';
import classes from './link.module.scss';

export default function Link({ to, lone, style, children, ...rest }) {
  const loneStyle = { color: 'inherit' };
  return (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      style={lone ? loneStyle : style ? style : {}}
      {...rest}
      className={classes.link}
    >
      {children}
    </a>
  );
}
