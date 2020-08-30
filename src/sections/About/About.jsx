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

        <div className={classes.skills}>
          <h4 className={classes.subheading}>Skills</h4>
          <div className={classes.skill_rack}>
            <span class="logo logo-html"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>

            <span class="logo logo-css"><span class="path1"></span><span class="path2"></span></span>

            <span class="logo logo-sass"></span>

            <span class="logo logo-javascript"><span class="path1"></span><span class="path2"></span></span>

            <span class="logo logo-typescript"><span class="path1"></span><span class="path2"></span></span>

            <span class="logo logo-java"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>

            <span class="logo logo-git"></span>

            <span class="logo logo-nodejs"></span>

            <span class="logo logo-gradle"></span>

            <span class="logo logo-express"></span>

            <span class="logo logo-react"></span>

            <span class="logo logo-mongodb"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span></span>

            <span class="logo logo-firebase"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>

            <span class="logo logo-mysql"></span>

            <span class="logo logo-postgresql"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>

            <span class="logo logo-figma"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>

            <span class="logo logo-c"></span>

            <span class="logo logo-c++"></span>

            <span class="logo logo-php"></span>
          </div>
        </div>

        <div className={classes.social}>

        </div>
      </div>
    </section>
  );
}
