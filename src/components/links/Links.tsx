import React from 'react';
import "./style.css";

export default function Links({ github_username, linkedin_username }: Props) {
    const github_url = `https://github.com/${github_username}`;
    const linkedin_url = `https://www.linkedin.com/in/${linkedin_username}/`;
    return (
        <section className="links">
            <ul>
                <li>
                    <a href={github_url} title="GitHub">
                        <img src={require("./img/github.png")} alt="GitHub" id="github"/>
                    </a>
                </li>
                <li>
                    <a href={linkedin_url} title="LinkedIn">
                        <img src={require("./img/linkedin.png")} alt="LinkedIn" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

interface Props {
    github_username: String,
    linkedin_username: String
}
