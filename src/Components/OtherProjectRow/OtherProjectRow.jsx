import React, { useState } from 'react';
import classes from './opr.module.scss';
import Button from '../Button';

export default function OtherProjectRow({ title, type, technology, children, link, repo }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <li className={classes.row} style={!isExpanded ? { borderColor: 'transparent' } : {}} onClick={() => setIsExpanded(!isExpanded)}>
      <div className={classes.main}>
        <span className={classes.title}>{title}</span>
        <span className={classes.type}>{type}</span>
        <span className={classes.tech}>{technology}</span>
      </div>
      <div className={classes.additional} style={!isExpanded ? { maxHeight: 0 } : {}}>
        <p className={classes.description}>
          {children}
        </p>
        <div className={classes.actions}>
          {link && <Button link={repo}><span className='icon icon-code' />Repo</Button>}
          {link && <Button link={link}><span className='icon icon-external-link' />Link</Button>}
        </div>
      </div>
    </li>
  );
}
