import React from 'react';
import UserInterface from "./UserInterface";
import "./style.css";

export default function Profile({ user }: Props) {
    const username = user.name !== null ? user.name.toUpperCase() : "";
    return (
        <section className="profile">
            <img src={user.avatar_url} alt="Foto de perfil" />
            <h2>{username}</h2>
            <p>{user.bio}</p>
        </section>
    )
}

interface Props {
    user: UserInterface;
}
