import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import Search from "./components/Search/Search";
import TheHeader from "./components/TheHeader/TheHeader";
import UserCard from "./components/UserCard/UserCard";
import { defaultUser } from "./mock";
import { GithubError, GithubUser, LocalGithubUser } from "./types";
import extractLocalUser from "./utils/extract-local-user";
import isGithubUser from "./utils/typeguards";

const BASE_URL = "https://api.github.com/users/"

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username
    const res = await fetch(url)
    const user = await res.json() as GithubUser | GithubError
    if (isGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }
  console.log(user);
  
  return (
    <Container>
      <TheHeader />
      <Search hasError={!user} onSubmit={fetchUser} />
      {
        user && (
          <UserCard {...user}/>
        )
      }
    </Container>
  );
}

export default App;
