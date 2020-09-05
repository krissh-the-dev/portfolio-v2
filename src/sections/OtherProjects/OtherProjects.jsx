import React from 'react';
import classes from './otherProjects.module.scss';
import { OtherProject } from '../../Components';
import otherProjects from './data';

export default function OtherProjects() {
  return (
    <section className={classes.OtherProjects}>
      <div className={classes.container}>
        <h3 className={classes.heading}>Other Projects</h3>
        <ul className={classes.OtherProjects__list}>
          {
            otherProjects.map((project, index) => {
              const { title, type, technology, description, link, repo } = project;
              return (
                <OtherProject title={title} type={type} key={index} technology={technology} link={link} repo={repo} >{description}</OtherProject>);
            })
          }
        </ul>
      </div>
    </section>
  );
}
