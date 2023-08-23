// src/components/UserList.js
import React from 'react';
import User from './User';
import '../css/UserList.css';

// Liste de tous les Utilisateurs
const UserList = ({ users, setEditingUser }) => {
    return (
    <div className="user-list row">
        {users.map((user) => (
        <User key={user.id} user={user} setEditingUser={setEditingUser}/>
        ))}
    </div>
    );
};

export default UserList;
