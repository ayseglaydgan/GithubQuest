export interface RepoType {
    repoName: string;
    type: "private" | "public";
    owner: string;
    description: string;
    stars: number;
    forks: number;
}

export interface UserType {
    name: string;
    email: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    repos: RepoType[];
}