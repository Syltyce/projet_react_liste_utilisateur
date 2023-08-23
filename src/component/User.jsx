import React from "react";

const User = ({ user }) => {
    return (
      <div className="user">
        <img src={user.image} alt= 'utilisateur' />
        <h2> Nom et Prénom : {user.prenom} {user.nom} </h2>
        <p>Age : {user.age} ans</p>
        <p>Genre : {user.genre}</p>
      </div>
    );
  };
  
  export default User;