import React, { useState, useEffect, useRef } from 'react';
import classes from './opr.module.scss';
import Button from '../Button';

export default function OtherProjectRow({ title, type, technology, children, link, repo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const additionalDetails = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      additionalDetails.current.style.maxHeight = '18rem';
      setTimeout(() => {
        additionalDetails.current.style.overflow = 'visible';
      }, 50);
    } else {
      additionalDetails.current.style.maxHeight = 0;
      additionalDetails.current.style.overflow = 'hidden';
    }
  }, [isExpanded]);

  return (
    <div
      className={classes.row}
      style={!isExpanded ? { borderColor: 'transparent' } : {}}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={classes.main}>
        <span className={classes.title}>{title}</span>
        <span className={classes.type}>{type}</span>
        <span className={classes.tech}>{technology}</span>
      </div>
      <div className={classes.additional} ref={additionalDetails}>
        <p className={classes.description}>{children}</p>
        <div className={classes.actions}>
          {repo && (
            <Button link={repo}>
              <span className='icon icon-code' />
              Repo
            </Button>
          )}
          {link && (
            <Button link={link}>
              <span className='icon icon-external-link' />
              Link
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
