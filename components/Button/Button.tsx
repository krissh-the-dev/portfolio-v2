import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.scss';

export default function Button({ link, onClick, children, ...rest }: ButtonProps) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      onClick={onClick}
      className={!rest?.disable ? styles.button : styles.disabledButton}
      {...rest}
    >
      {children}
    </a>
  );
}

interface ButtonProps {
  link: string;
  onClick: MouseEventHandler;
  children: ReactNode;
  disable?: boolean;
}
