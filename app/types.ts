export type GitHubCompareResponse = {
  url: string;
  html_url: string;
  permalink_url: string;
  diff_url: string;
  patch_url: string;
  base_commit: GitHubCommit;
  merge_base_commit: GitHubCommit;
  status: "identical" | "behind" | "ahead" | "diverged";
  ahead_by: number;
  behind_by: number;
  total_commits: number;
  commits: GitHubCommitSummary[];
  files: GitHubFile[];
};

type GitHubCommit = {
  sha: string;
  node_id: string;
  commit: {
    author: GitHubUserTimestamp;
    committer: GitHubUserTimestamp;
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: string | null;
      payload: string | null;
      verified_at: string | null;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: any; // Can refine with a user type if needed
  committer: any; // Can refine with a user type if needed
  parents: {
    sha: string;
    url: string;
    html_url: string;
  }[];
};

type GitHubCommitSummary = GitHubCommit;

type GitHubUserTimestamp = {
  name: string;
  email: string;
  date: string;
};

type GitHubFile = {
  sha: string;
  filename: string;
  status: "added" | "removed" | "modified" | "renamed";
  additions: number;
  deletions: number;
  changes: number;
  blob_url: string;
  raw_url: string;
  contents_url: string;
  patch?: string;
};
