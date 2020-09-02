import React from 'react';
import classes from './Project.module.scss';

function Tech({ value }) {
  return (
    <span className={classes.techItem}>
      {value}
    </span>
  );
}

export default function Project({ images, logo, type, title, stack, link, repo, children }) {
  /*
   * images: image images -> type: object<images> {small, large}
   * type -> type: string [eg. featured]
   * tech -> type: array<string>
   * link -> landing page url
   * repo -> source code repository url
   * children : description -> type: string
   * logo: logo of the project -> type: string<image>
   */
  return (
    <div className={classes.project}>
      <figure className={classes.project__picture}>
        <img className={classes.project__image} alt={title} src={images.small} srcSet={`${images.small} 200w ${images.large} 600w`} />
        <caption></caption>
      </figure>
      <div className={classes.project__details}>
        <h6 className={classes.project__type}>{`${type} project`}</h6>
        <h4 className={classes.project__title}>{title}</h4>
        <p className={classes.project__description}>{children}</p>
        <div className={classes.project__techStack}>
          {stack.map((value, index) => <Tech value={value} key={index} />)}
        </div>
      </div>
    </div>
  )
}
