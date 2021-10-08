import { ReactNode } from 'react';
import classes from './link.module.scss';

export default function Link({ to, lone, children }: LinkProps) {
  const loneStyle = { color: 'inherit' };
  return (
    <a href={to} target='_blank' rel='noopener noreferrer' style={lone ? loneStyle : {}} className={classes.link}>
      {children}
    </a>
  );
}

interface LinkProps {
  to: string;
  lone?: boolean;
  children: ReactNode;
}
