import React from "react";

// Informations et Descriptif des Utilisateurs 
const User = ({ user, setEditingUser }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="user-card" onClick={() => setEditingUser(user)}>
                <img src={user.image} alt= 'utilisateur' />
                <h4> {user.prenom} {user.nom} </h4>
                <p>Age : {user.age} ans</p>
                <p>Genre : {user.genre}</p>
            </div>
        </div>

    );
};

export default User;