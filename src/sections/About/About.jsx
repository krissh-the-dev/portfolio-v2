import React from 'react';
import classes from './styles.module.scss';

import Krish from '../../images/krish.png';

export default function About() {
  return (
    <section className={classes.about}>
      <div className={classes.container}>
        <h3 className={classes.heading}>About me</h3>
        <div className={classes.about__content}>
          <div className={classes.about__text}>
            <p className={classes.description}>
              <span role='img' aria-label='wave emoji'>👋</span> Hello, world! I am Krish, a software engineer from Chennai, India.
            </p>
            <p className={classes.description}>
              I build high-quality applications for the web. I concentrate on writing clean and understandable code. Currently, I'm pursuing my undergrads in Computer Science Engineering at University College of Engineering, Trichy. I love to work in a team.
            </p>
            <p className={classes.description}>
              I love to design and code <span role='img' aria-label='code emoji'>👩‍💻</span>. Other than coding, I'm passionate about Astronomy <span role='img' aria-label='galaxy emoji'>🌌</span> and bicycling <span role='img' aria-label='cycling emoji'>🚴‍♂️</span>. I like to cook in my leisure time. I love cats <span role='img' aria-label='cat face emoji'>😺</span> and adore all pet animals <span role='img' aria-label='pet dog emoji'>🐕</span>.
            </p>
          </div>
          <div className={classes.profile}>
            <img className={classes.image} alt='Krish' src={Krish} />
          </div>
        </div>

        <div className={classes.skills}>
          <h4 className={classes.subheading}>Skills</h4>
        </div>

        <div className={classes.social}>

        </div>
      </div>
    </section>
  );
}
