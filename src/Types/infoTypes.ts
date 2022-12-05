export interface Repo{
    repoName: string;
    type: "private" | "public";
}

export interface UserType{
    userName: string;
    email: string;
    avatarUrl: string;
    followers: number;
    following: number;
    repos: Repo[];
}