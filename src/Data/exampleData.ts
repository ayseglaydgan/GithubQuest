import { UserType } from "../Types/infoTypes";

export const exampleUser: UserType = {
    userName: "John Doe",
    email: "johnDoe.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/54666425?v=4",
    followers: 100,
    following: 100,
    repos: [{
        repoName: "repo1", type: "private", owner: "John Doe", description: "This is a repo", stars: 100, forks: 100
    },
    { repoName: "repo2", type: "public", owner: "John Doeq", description: "This is a repoq", stars: 1003, forks: 103 }]
}
