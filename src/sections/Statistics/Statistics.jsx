import React, { useEffect, useState } from 'react';
import classes from './stats.module.scss';

import { getAllStats } from './data';
import { StatCard as Card } from '../../Components';

export default function Statistics() {
  const [stats, setStats] = useState({
    followers: { totalCount: 0 },
    following: { totalCount: 0 },
    totalRepositoriesWithContributedCommits: 0,
    totalContributions: 0,
    contributionByWeek: new Array(53),
  });
  useEffect(() => {
    // getAllStats().then(res => setStats(res));
  }, []);
  useEffect(() => console.log(stats), [stats]);
  return (
    <section className={classes.statistics}>
      <div className={classes.container}>
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
