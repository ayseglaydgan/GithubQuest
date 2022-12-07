export interface RepoType {
    repoName: string;
    type: "private" | "public";
    owner: string;
    description: string;
    stars: number;
    forks: number;
}

export interface UserType {
    userName: string;
    email: string;
    avatarUrl: string;
    followers: number;
    following: number;
    repos: RepoType[];
}