import React from 'react';
import { useEffect, useState } from 'react';
import Repo from './components/repos/RepoInterface';
import User from './components/profile/UserInterface';
import Profile from './components/profile/Profile';
import Repos from './components/repos/Repos';
import Links from './components/links/Links';

export default function App({ github_username, linkedin_username }: Props) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [repos, setRepos] = useState<Repo[] | undefined>(undefined);
  useEffect(() => {
    fetch(`https://api.github.com/users/${github_username}`)
      .then(response => response.json())
      .then(json => setUser(json))
    fetch(`https://api.github.com/users/${github_username}/repos`)
      .then(response => response.json())
      .then(json => setRepos(json));
  }, []);
  if (user === undefined || repos === undefined) {
    return (
      <></>
    );
  }
  return (
    <>
      <Profile user={user} />
      <Repos repos={repos} />
      <Links github_username={github_username} linkedin_username={linkedin_username} />
    </>
  );
}

interface Props {
  github_username: String,
  linkedin_username: String
}
