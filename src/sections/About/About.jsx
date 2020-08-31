import React from 'react';
import classes from './about.module.scss';

import Krish from '../../images/krish.png';
import Skills from './Skills';

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
              I love to design and code <span role='img' aria-label='code emoji'>👩‍💻</span>. I build high-quality applications for the web. I concentrate on writing clean and understandable code. Currently, I'm pursuing my undergrads <span role='img' aria-label='code graduate'>👨‍🎓</span> in Computer Science Engineering at University College of Engineering, Trichy. I love to work in a team.
            </p>
            <p className={classes.description}>
              Other than coding, I'm passionate about Astronomy <span role='img' aria-label='galaxy emoji'>🌌</span> and bicycling <span role='img' aria-label='cycling emoji'>🚴‍♂️</span>. I like to cook in my leisure time. I love cats <span role='img' aria-label='cat face emoji'>😺</span> and adore all pet animals <span role='img' aria-label='pet dog emoji'>🐕</span>.
            </p>
          </div>
          <div className={classes.profile}>
            <img className={classes.image} alt='Krish' src={Krish} />
          </div>
        </div>

        <Skills />

        <div className={classes.social}>
          <a href='mailto: akrishnamoorthy007@gmail.com' className="icon icon-mail">&nbsp;</a>
          <a href='https://github.com/KrishnaMoorthy12' className="icon icon-github">&nbsp;</a>
          <a href='https://twitter.com/krish_the_dev' className="icon icon-twitter">&nbsp;</a>
          <a href='https://linkedin.com/in/akrishnamoorthy007' className="icon icon-linkedin">&nbsp;</a>
          <a href='https://fb.com/akrishnamoorthy007' className="icon icon-facebook">&nbsp;</a>
          <a href='https://join.slack.com/t/akrishnamoorthy007/shared_invite/zt-h38nw07o-iwbECk2CYVTv0pNokG884g' className="icon icon-slack">&nbsp;</a>
        </div>
      </div>

    </section>
  );
}
