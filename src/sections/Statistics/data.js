import dotenv from 'dotenv';
dotenv.config();

const token = process.env.REACT_APP_TOKEN;
const query = `query {
                user(login: "KrishnaMoorthy12") {
                  followers {
                    totalCount
                  }
                  following {
                    totalCount
                  }
                  contributionsCollection {
                    totalRepositoriesWithContributedCommits
                    totalCommitContributions
                    totalIssueContributions
                    totalPullRequestContributions
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                            contributionCount
                        }
                      }
                    }
                  }
                }
              }`;

async function fetchGitHubStats() {
  const headers = { Authorization: `bearer ${token}` };
  const body = { query: query };
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
  });
  const data = await response.json();
  return data;
}

async function getStatsData() {
  try {
    const response = await fetchGitHubStats();
    return response.data.user;
  } catch (error) {
    console.error(error);
  }
}

function getWeeklyContributionCount(weeks) {
  let contributionByWeek = [];
  weeks.forEach(week => {
    const weekContribution = week.contributionDays.reduce((total, day) => {
      return { contributionCount: total.contributionCount + day.contributionCount };
    });
    contributionByWeek.push(weekContribution.contributionCount);
  });
  return contributionByWeek;
}

async function getAllStats() {
  const { followers, following, contributionsCollection } = await getStatsData();

  const {
    totalRepositoriesWithContributedCommits,
    totalCommitContributions,
    totalIssueContributions,
    totalPullRequestContributions,
    contributionCalendar
  } = contributionsCollection;

  const { totalContributions, weeks } = contributionCalendar;

  const contributionByWeek = getWeeklyContributionCount(weeks);
  return {
    followers,
    following,
    totalRepositoriesWithContributedCommits,
    totalCommitContributions,
    totalIssueContributions,
    totalPullRequestContributions,
    totalContributions,
    contributionByWeek
  };
}

export { getAllStats };
