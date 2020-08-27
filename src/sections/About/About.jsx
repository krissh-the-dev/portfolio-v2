import React from 'react';
import classes from './styles.module.scss';

export default function About() {
  return (
    <section className={classes.about}>
      <h3 className={classes.heading}>About me</h3>
      <div className={classes.about__content}>
        <p className={classes.desciption}>
          Hello, world! I am Krish, a software engineer from Chennai, India. I build high-quality applications for the web. I concentrate on writing clean and understandable code. Currently, I'm pursuing my undergrads in Computer Science Engineering at University College of Engineering, Trichy. I love to work in a team.
             <br />
            Other than coding, I'm passionate about Astronomy and bicycling. I like to cook in my leisure time. I love cats and adore all pet animals.
          </p>
        <img src='./images/krish.png' />
      </div>

      <div className={classes.skills}>

      </div>

      <div className={classes.social}>

      </div>
    </section>
  );
}
