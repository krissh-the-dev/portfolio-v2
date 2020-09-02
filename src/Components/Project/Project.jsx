import React from 'react';
import classes from './Project.module.scss';

function Tech({ value }) {
  return (
    <span className={classes.techItem}>
      {value}
    </span>
  );
}

function Features({ list }) {
  return (
    <ul class={classes.features}>
      {list.map((feature, key) => <li className={classes.feature} key={key}>{feature}</li>)}
    </ul>
  );
}

export default function Project(props) {
  const { images, logo, type, title, children, features, stack, link, repo } = props;
  /*
   * images: image images -> type: object<images> {small, large}
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
        <img className={classes.project__image} alt={title} src={images.small} srcSet={`${images.small} 200w ${images.large} 600w`} />

        <figcaption className={classes.caption}>
          {repo && <a href={repo} target='_blank' rel="noopener noreferrer" className='icon'>&#xe910;</a>}
          {link && <a href={link} target='_blank' rel="noopener noreferrer" className='icon'>&#xe906;</a>}
        </figcaption>

        <div className={classes.project__logo}>
          <img src={logo} alt={title} />
        </div>
      </figure>

      <div className={classes.project__details}>
        <h6 className={classes.project__type}>{`${type} project`}</h6>
        <h4 className={classes.project__title}>{title}</h4>
        <p className={classes.project__description}>{children}</p>
        <Features list={features} />
        <div className={classes.project__techStack}>
          {stack.map((value, index) => <Tech value={value} key={index} />)}
        </div>
      </div>
    </div>
  );
}
