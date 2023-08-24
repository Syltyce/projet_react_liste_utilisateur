import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import EditForm from './EditForm';
import hommeImage from '../assets/homme.png';
import femmeImage from '../assets/femme.png';

const Container = () => {
    const [users, setUsers] = useState([]); // Utilisation du hook useState
    const [editingUser, setEditedUser] = useState(null);

  // Objets des Utilisateurs
    useEffect(() => {
        setUsers([
            {
            id: 1,
            nom: 'DUPONT',
            prenom: 'Thomas',
            age: 25,
            genre: 'Homme',
            image: hommeImage,
            selected: false
            },
            {
            id: 2,
            nom: 'LAWRENCE',
            prenom: 'Jennifer',
            age: 30,
            genre: 'Femme',
            image: femmeImage,
            selected: false
            },
            {
            id: 3,
            nom: 'VEGA',
            prenom: 'Georges',
            age: 44,
            genre: 'Homme',
            image: hommeImage,
            selected: false
            },
            {
            id: 4,
            nom: 'WHALEY',
            prenom: 'Ronald',
            age: 52,
            genre: 'Homme',
            image: hommeImage,
            selected: false
            },
            {
            id: 5,
            nom: 'LENZ',
            prenom: 'Laura',
            age: 27,
            genre: 'Femme',
            image: femmeImage,
            selected: false
            },
            {
            id: 6,
            nom: 'OHARA',
            prenom: 'Richard',
            age: 85,
            genre: 'Homme',
            image: hommeImage,
            selected: false
            },
            {
            id: 7,
            nom: 'McCabe',
            prenom: 'Barbara',
            age: 54,
            genre: 'Femme',
            image: femmeImage,
            selected: false
            },
            {
            id: 8,
            nom: 'McLean',
            prenom: 'Raymond',
            age: 29,
            genre: 'Homme',
            image: hommeImage,
            selected: false
            },
        ]);
    }, []);

    // Fonction qui permet la modification des informations de l'utilisateur cliqué
    const updateUser = (updatedUser) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id ? { ...user, ...updatedUser } : user));
    };

    const deleteUser = (userId) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
        setEditedUser(null);
    }

    return (
    // Contenu de la page
    <div className="container">
        <h1>Liste des utilisateurs</h1>
        <UserList users={users} setEditingUser={setEditedUser} />
        {editingUser && (
        <EditForm user={editingUser} setEditingUser={setEditedUser} updateUser={updateUser} deleteUser={deleteUser}/>
        )}
    </div>
    );
    
};

export default Container;
