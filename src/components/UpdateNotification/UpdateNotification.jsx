import React, { useEffect, useState, useRef } from 'react';
import classes from './update-notif.module.scss';
import Button from 'components/Button';

export default function UpdateNotification({ onUpdate }) {
  const [isVisible, setIsVisible] = useState(false);

  const [timer, setTimer] = useState();
  const popup = useRef(null);

  useEffect(() => {
    const tim = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    setTimer(tim);
  }, []);

  const mouseOver = () => {
    popup.current.style.backgroundColor = 'rgba(255,255,255,.9)';
    clearTimeout(timer);
  };

  const mouseOut = () => {
    popup.current.style.backgroundColor = 'rgba(255,255,255,.5)';
    const tim = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    setTimer(tim);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  }, []);

  return (
    <div
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      style={isVisible ? {} : { opacity: 0, transform: 'translate(-50%, 5rem)', visibility: 'hidden' }}
      ref={popup}
      className={classes.updateNotification}
    >
      <p className={classes.updateNotification__text}>
        A newer version is available. Update now to load the new version.
      </p>
      <div className={classes.updateNotification__actions}>
        <Button onClick={onUpdate}>Update</Button>
        <Button onClick={() => setIsVisible(false)}>Dismiss</Button>
      </div>
    </div>
  );
}
