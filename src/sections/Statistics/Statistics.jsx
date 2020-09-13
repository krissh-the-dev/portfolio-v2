import React, { useEffect, useState } from 'react';
import classes from './stats.module.scss';
import dotenv from 'dotenv';
import Fade from 'react-reveal/Fade';

import { getAllStats } from './data';
import { StatCard as Card } from '../../Components';
import Graph from './Graph';

dotenv.config();

export default function Statistics() {
  const [stats, setStats] = useState({
    followers: { totalCount: 0 },
    following: { totalCount: 0 },
    totalRepositoriesWithContributedCommits: 0,
    totalContributions: 0,
    contributionByWeek: new Array(53).fill(0),
  });

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      getAllStats().then(res => setStats(res));
    } else {
      setStats({
        followers: { totalCount: 35 },
        following: { totalCount: 40 },
        totalContributions: 2400,
        totalRepositoriesWithContributedCommits: 45,
        contributionByWeek: new Array(53).fill(Math.round(Math.abs(Math.random() * 10)))
      });
    }
  }, []);

  return (
    <section id='statistics' className={classes.statistics}>
      <div className={classes.container}>
        <div className={classes.sub_heading}>My GitHub profile</div>
        <h3 className={classes.heading}>Statistics</h3>
        <div className={classes.statistics__container}>
          <div className={classes.visualization}>
            <Graph data={stats.contributionByWeek.map(value => ({ contributions: value }))} />
          </div>
          <Fade bottom cascade>
            <div className={classes.data}>
              <div className={classes.contributions}>
                <Card data={stats.totalContributions} caption={'contributions this year'} />
                <Card data={stats.contributionByWeek[stats.contributionByWeek.length - 1]} caption={'contributions this week'} />
              </div>
              <div className={classes.stats}>
                <Card data={stats.totalRepositoriesWithContributedCommits} caption={'contributed repositories'} />
                <Card data={stats.followers.totalCount} caption={'followers'} />
                <Card data={stats.following.totalCount} caption={'following'} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
