import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import hommeImage from '../assets/homme.png';
import femmeImage from '../assets/femme.png';

const Container = () => {
  const [users, setUsers] = useState([]); // Utilisation du hook useState

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
      }
    ]);
  }, []);

  return (
    <div className="container">
      <h1>Liste des utilisateurs</h1>
      <UserList users={users} />
    </div>
  );
};

export default Container;
