import { UserType } from "../Types/infoTypes";

export const exampleUser: UserType = {
    userName: "John Doe",
    email: "johnDoe.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/54666425?v=4",
    followers: 100,
    following: 100,
    repos: [{repoName: "repo1", type: "private"}, {repoName: "repo2", type: "public"}]
}
