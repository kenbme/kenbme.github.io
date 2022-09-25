import React from 'react';
import User from "./UserInterface";
import "./style.css";

export default function Profile({ user }: Props) {
    return (
        <section className="profile">
            <img src={user.avatar_url} alt="Foto de perfil" />
            <h2>{user.name.toUpperCase()}</h2>
            <p>{user.bio}</p>
        </section>
    )
}

interface Props {
    user: User;
}
