import React from 'react';
import User from './User';
import '../css/UserList.css';
import hommeImage from '../assets/homme.png';
import femmeImage from '../assets/femme.png';

// Liste de tous les Utilisateurs
const UserList = ({ users, setEditingUser }) => {
    return (
    <div className="user-list row">
        {users.map((user) => (
        <User key={user.id} user={user} setEditingUser={setEditingUser} genreImage={user.genre === 'Homme' ? hommeImage : femmeImage}/>
        ))}
    </div>
    );
};

export default UserList;
