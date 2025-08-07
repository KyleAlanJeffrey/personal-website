const username = "Kylealanjeffrey";
const accessToken = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

const myGithubUsernames = [
  "kylealanjeffrey",
  "alphabeard",
  "kjeffery",
  "business kyle",
  "kylejeffrey",
];
// https://api.github.com/repos/python/mypy/compare/4eff613a6c96579d11dad72e63200b74afc39433…2b58c5f5c142588b7b944f3b79a0371378da3db6

export async function getCommitDiffToMain(
  repoPath: string,
  parentSha: string,
  sha: string
) {
  if (!accessToken) {
    console.error("No GitHub access token found.");
    return;
  }
  try {
    const response = await fetch(
      `https://api.github.com/repos/${repoPath}/compare/${parentSha}...${sha}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching repos: ${error}`);
    return;
  }
}

export async function getAllRepos() {
  if (!accessToken) {
    console.error("No GitHub access token found.");
    return;
  }
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=200`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching repos: ${error}`);
    return;
  }
}
export async function getAllCommits() {
  let all_commits = [];
  const repos = await getAllRepos();

  console.log(`found ${repos.length} repos`);
  // Get all commits for each repo
  await Promise.all(
    repos.map(async (repo) => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        all_commits.push(...data);
      } catch (error) {
        console.error(`Error fetching commits for ${repo.name}: ${error}`);
        return;
      }
    })
  );

  //   sort by time
  all_commits.sort((a, b) => {
    return new Date(b.commit.author.date) - new Date(a.commit.author.date);
  });
  // filter out commits that arent me
  all_commits = all_commits.filter(
    (commit) =>
      (commit.author?.login &&
        myGithubUsernames.includes(commit.author.login.toLowerCase())) ||
      myGithubUsernames.includes(commit.commit.author.name.toLowerCase())
  );
  console.log(`found ${all_commits.length} commits in total`);
  return Promise.resolve(all_commits);
}

export async function getWatchedYoutubeVideos() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJbPGzawDH1njbqV-D5HqKw&maxResults=50&order=date&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await response.json();
  return data.items;
}

export async function getDailyThoughts() {
  // Fetch metadata list from github
  // https://github.com/KyleAlanJeffrey/daily-haiku/blob/main/daily-response/metadata.txt
  const url =
    "https://raw.githubusercontent.com/KyleAlanJeffrey/daily-haiku/main/daily-response/metadata.txt";
  const response = await fetch(url);
  // Next line separated list of files
  let entries = await response.text();
  entries = entries.split("\n").filter((entry) => entry.length > 0);
  // For each entry, fetch the file
  const responses = await Promise.all(
    entries.map(async (entry) => {
      try {
        const url = `https://raw.githubusercontent.com/KyleAlanJeffrey/daily-haiku/main/daily-response/${entry}`;
        const response = await fetch(url);
        const data = await response.json();
        return data["entries"];
      } catch (e) {
        console.error(`Error fetching daily thought ${entry}: ${e}`);
        return [];
      }
    })
  );
  // Flatten the list of lists sorrted by date
  const flattened = responses.flat().sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return flattened;
}
