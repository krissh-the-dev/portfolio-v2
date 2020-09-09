import React from 'react';
import classes from './Project.module.scss';
import Fade from 'react-reveal/Fade';

function Tech({ value }) {
  return (
    <span className={classes.techItem}>
      {value}
    </span>
  );
}

function Features({ list }) {
  return (
    <ul className={classes.features}>
      {list.map((feature, key) => <li className={classes.feature}>{feature}</li>)}
    </ul>
  );
}

export default function Project(props) {
  const { images, logo, type, title, children, features, stack, link, repo } = props;
  /*
   * images: image -> type: object<Object<images>> dark: {small, large}, light: {small, large}
   * type -> type: string [eg. featured]
   * tech -> type: array<string>
   * link -> landing page url
   * repo -> source code repository url
   * children : description -> type: string
   * features -> Array<string>
   * logo: logo of the project -> type: string<image>
   */
  return (
    <div className={classes.project}>
      <figure className={classes.project__picture}>
        <img className={classes.project__image} alt={title} src={images.dark.small} srcSet={`${images.dark.small} 200w, ${images.dark.large} 600w`} />

        <figcaption className={classes.caption}>
          {repo && <a href={repo} target='_blank' rel="noopener noreferrer" className='icon'>&#xe910; <span className={classes.link}>Repo</span></a>}
          {link && <a href={link} target='_blank' rel="noopener noreferrer" className='icon'>&#xe906; <span className={classes.link}>Link</span></a>}
        </figcaption>

        <div className={classes.project__logo}>
          <img src={logo} alt={title} />
        </div>
      </figure>

      <div className={classes.project__details}>
        <Fade bottom>
          <h6 className={classes.project__type}>{type}</h6>
          <h4 className={classes.project__title}>{title}</h4>
          <p className={classes.project__description}>{children}</p>
          <Features list={features} />
          <div className={classes.project__techStack}>
            {stack.map((value, index) => <Tech value={value} key={index} />)}
          </div>
        </Fade>
      </div>
    </div>
  );
}
