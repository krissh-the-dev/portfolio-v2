import React, { useEffect, useState } from 'react';
import classes from './stats.module.scss';
import dotenv from 'dotenv';

import { getAllStats } from './data';
import { StatCard as Card } from '../../Components';

dotenv.config();

export default function Statistics() {
  const [stats, setStats] = useState({
    followers: { totalCount: 0 },
    following: { totalCount: 0 },
    totalRepositoriesWithContributedCommits: 0,
    totalContributions: 0,
    contributionByWeek: new Array(53),
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
        contributionByWeek: (new Array(53)).fill(Math.round(Math.random() * 10))
      });
    }
  }, []);
  useEffect(() => console.table({
    followers: stats.followers.totalCount,
    following: stats.following.totalCount,
    contributions: stats.totalContributions,
    repos: stats.totalRepositoriesWithContributedCommits
  }), [stats]);
  return (
    <section className={classes.statistics}>
      <div className={classes.container}>
        <h6 className={classes.subheading}>My GitHub profile</h6>
        <h3 className={classes.heading}>Statistics</h3>
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
    </section>
  );
}
