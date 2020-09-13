import React from 'react';
import classes from './otherProjects.module.scss';
import Fade from 'react-reveal/Fade';
import { OtherProject } from '../../Components';
import otherProjects from './data';

export default function OtherProjects() {
  return (
    <section className={classes.OtherProjects}>
      <div className={classes.container}>
        <h3 className={classes.heading}>Other Projects</h3>
        <div className={classes.OtherProjects__list}>
          <Fade bottom>
            {
              otherProjects.map((project, index) => {
                const { title, type, technology, description, link, repo } = project;
                return (
                  <OtherProject title={title} type={type} key={index} technology={technology} link={link} repo={repo} >{description}</OtherProject>);
              })
            }
          </Fade>
        </div>
      </div>
    </section>
  );
}
