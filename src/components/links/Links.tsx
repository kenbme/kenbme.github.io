import React from 'react';
import "./style.css";

export default function Links() {
    return (
        <section className="links">
            <ul>
                <li>
                    <a href="https://github.com/kenbme" title="GitHub">
                        <img src={require("./img/github.png")} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kenned-barbosa-1b148a244/" title="LinkedIn">
                        <img src={require("./img/linkedin.png")} alt="LinkedIn" />
                    </a>
                </li>
            </ul>
        </section>
    )
}
