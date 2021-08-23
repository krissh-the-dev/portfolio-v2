import React from 'react';
import classes from './Project.module.scss';
import { Fade } from 'react-reveal';

function Tech({ value }) {
  return <span className={classes.techItem}>{value}</span>;
}

function Features({ list }) {
  return (
    <Fade bottom distance={'2rem'}>
      <ul className={classes.features}>
        {list.map((feature, key) => (
          <li className={classes.feature} key={key}>
            {feature}
          </li>
        ))}
      </ul>
    </Fade>
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
    <Fade bottom distance={'4rem'}>
      <div className={classes.project}>
        <figure className={classes.project__picture}>
          <img
            className={classes.project__image}
            alt={title}
            src={images.dark.small}
            srcSet={`${images.dark.small} 200w, ${images.dark.large} 600w`}
          />

          <figcaption className={classes.caption}>
            {repo && (
              <a href={repo} target='_blank' rel='noopener noreferrer' className='icon'>
                &#xe910; <span className={classes.link}>Repo</span>
              </a>
            )}
            {link && (
              <a href={link} target='_blank' rel='noopener noreferrer' className='icon'>
                &#xe906; <span className={classes.link}>View</span>
              </a>
            )}
          </figcaption>

          <div className={classes.project__logo}>
            <img src={logo} alt={title} />
          </div>
        </figure>

        <div className={classes.project__details}>
          <div className={classes.sub_heading}>{type}</div>

          <h4 className={classes.project__title}>
            <a href={link}>{title}</a>
          </h4>

          <p className={classes.project__description}>{children}</p>
          <Features list={features} />
          <div className={classes.project__techStack}>
            {stack.map((value, index) => (
              <Tech value={value} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
