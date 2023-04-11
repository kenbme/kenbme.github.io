import React from 'react';
import RepoInterface from "./RepoInterface";
import "./style.css";

export default function Repos({ repos }: Props) {
    function getLanguageLogo(language: string | undefined) {
        if (language === undefined || language === null) {
            language = "vscode";
        }
        language = language.toLowerCase();
        if (language === "css") {
            language = "css3";
        }
        else if (language === "html") {
            language = "html5";
        }
        return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" + language + "/" + language + "-original.svg";
    }
    const _repos = (
        <ul>
            {repos.map(repo =>
                <a className="repo-link" href={repo.svn_url}>
                    <li className="repo" key={repo.id}>
                        <div className="repo-header">
                            <img src={getLanguageLogo(repo.language)} title={repo.language} alt={repo.language + " Logo"} />
                            <h3>{repo.name}</h3>
                        </div>
                        <div className="repo-body">
                            <p>{repo.description}</p>
                        </div>
                    </li>
                </a>
            )}
        </ul>
    );
    return (
        <section className="repos">
            <>{_repos}</>
        </section>
    )
}

interface Props {
    repos: RepoInterface[];
}
