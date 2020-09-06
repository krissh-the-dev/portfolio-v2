import React from 'react';
import classes from './input.module.scss';

export default function Input({ component, type, name, value, onChange }) {
  function InputElement() {
    switch (component) {
      case 'textarea':
        return <textarea placeholder={name} className={classes.input__field} id={name} name={name} style={{ height: 'auto', minHeight: '16rem' }} />;
      default:
        return <input placeholder={name} id={name} name={name} type={type} className={classes.input__field} value={value} onChange={onChange} />
    }
  }
  return (
    <div className={classes.input}>
      <InputElement />
      <label htmlFor={name} className={classes.input__label}>{name}</label>
    </div>
  );
}
