import React from 'react';
import classes from './about.module.scss';
import Fade from 'react-reveal/Fade';

import { KrishSmall, KrishMedium, KrishLarge } from 'images/Krish';
import { Link } from 'components';
import Skills from './Skills';
import SocialLinks from '../Contact/SocialLinks';

export default function About() {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h3 className={classes.heading}>About me</h3>
        <Fade bottom distance={'4rem'}>
          <div className={classes.about__content}>
            <div className={classes.about__text}>
              <p className={classes.description}>
                <span role='img' aria-label='wave emoji'>
                  👋
                </span>{' '}
                Hello, world! I am Krish, a Professional Sofware Engineer from Chennai, India.
              </p>
              <p className={classes.description}>
                I love to code and design{' '}
                <span role='img' aria-label='code emoji'>
                  👨🏼‍💻
                </span>
                . I build high-quality applications for the web. I concentrate on writing clean, maintainable and
                testable code.
              </p>
              <p className={classes.description}>
                Currently, I'm working as a Software Developer at{' '}
                <Link to='https://zoho.com'>Zoho Corporation Pvt. Ltd.</Link> I pursued my undergrads{' '}
                <span role='img' aria-label='code graduate'>
                  👨‍🎓
                </span>{' '}
                in Computer Science Engineering at the{' '}
                <Link to='http://aubit.edu.in'>University College of Engineering, Trichy</Link>. I love working in and
                as a team. I'm always looking for new opportunities to learn and grow.
              </p>
              <p className={classes.description}>
                Other than coding, I'm passionate about Astronomy{' '}
                <span role='img' aria-label='galaxy emoji'>
                  🌌
                </span>{' '}
                and cooking{' '}
                <span role='img' aria-label='cook emoji'>
                  🧑🏼‍🍳
                </span>
                . I love cats{' '}
                <span role='img' aria-label='cat face emoji'>
                  😺
                </span>{' '}
                and adore all pet animals{' '}
                <span role='img' aria-label='pet dog emoji'>
                  🐕
                </span>
                .
              </p>
            </div>

            <figure className={classes.profile}>
              <img
                className={classes.image}
                alt='Krish'
                src={KrishMedium}
                srcSet={`${KrishSmall} 300w, ${KrishMedium} 700w, ${KrishLarge} 1100w`}
              />
            </figure>
          </div>

          <Skills />
        </Fade>

        <Fade bottom>
          <div className={classes.socialLinks}>
            <SocialLinks />
          </div>
        </Fade>
      </div>
    </section>
  );
}
