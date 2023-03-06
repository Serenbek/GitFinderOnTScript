import { GithubUser } from "../types";

const isGithubUser = (user: any): user is GithubUser => "id" in user

export default isGithubUser