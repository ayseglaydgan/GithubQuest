import { UserType } from "../Types/infoTypes";

export const exampleUser: UserType = {
    name: "John Doe",
    email: "johnDoe.com",
    avatar_url: "https://avatars.githubusercontent.com/u/54666425?v=4",
    followers: 100,
    following: 100,
    public_repos: 100,
    repos: [{
        repoName: "repo1", type: "private", owner: "John Doe", description: "This is a repo", stars: 100, forks: 100
    },
    { repoName: "repo2", type: "public", owner: "John Doeq", description: "This is a repoq", stars: 1003, forks: 103 },
    { repoName: "repo3", type: "private", owner: "John Doew", description: "This is a repow", stars: 1002, forks: 102 },
    { repoName: "repo4", type: "public", owner: "John Doee", description: "This is a repoe", stars: 1001, forks: 101 },
    { repoName: "repo5", type: "private", owner: "John Doer", description: "This is a repor", stars: 1000, forks: 100 },]
}
