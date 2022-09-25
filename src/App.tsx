import React from 'react';
import { useEffect, useState } from 'react';
import Repo from './components/repos/RepoInterface';
import User from './components/profile/UserInterface';
import Profile from './components/profile/Profile';
import Repos from './components/repos/Repos';
import Links from './components/links/Links';

export default function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [repos, setRepos] = useState<Repo[] | undefined>(undefined);
  useEffect(() => {
    if (user === undefined) {
      fetch("https://api.github.com/users/kenbme")
        .then(response => response.json())
        .then(json => setUser(json))
    }
    if (repos === undefined) {
      fetch("https://api.github.com/users/kenbme/repos")
        .then(response => response.json())
        .then(json => setRepos(json));
    }
  });
  if (user === undefined || repos === undefined) {
    return (
      <></>
    );
  }
  return (
    <>
      <Profile user={user} />
      <Repos repos={repos} />
      <Links />
    </>
  );
}
