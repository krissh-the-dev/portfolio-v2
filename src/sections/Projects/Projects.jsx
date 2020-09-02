import React from 'react';
import classes from './projects.module.scss';
import { Project } from '../../Components';
import small from '../../images/clgmate-dark.png';

export default function MyWork() {
  return (
    <section className={classes.projects}>
      <div className={classes.container}>
        <h3 className={classes.heading}>My Projects</h3>
        <Project title='Collegemate' type='featured' stack={['React', 'Express', 'MongoDB', 'PWA']} images={{ small, large: small }}>
          A MERN stack Progressive Web App (PWA) built for students and teaching faculties to easily share materials, homework, assignments, and notes.
        </Project>
      </div>
    </section>
  );
}
