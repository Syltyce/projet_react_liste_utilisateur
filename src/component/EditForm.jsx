import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EditForm = ({ user, setEditingUser, updateUser, deleteUser }) => {

    // Variable qui va permettre de modifier les informations de l'utilisateur à partir de celles déjà inscrites
    const [editedUser, setEditedUser] = useState(user);

    // Fonction qui permet la modification du formulaire
    const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
    };

    // Fonction qui permet la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(editedUser);
        setEditingUser(null);
    };

    return (
        // Formulaire de modifications
        <div className="edit-form">

            <h2> Modifier l'utilisateur </h2>
            <form onSubmit={handleSubmit}>
                <label>Nom : </label>
                <input
                type="text"
                name="nom"
                value={editedUser.nom}
                onChange={handleInputChange}
                />

                <label>Prénom : </label>
                <input
                type="text"
                name="prenom"
                value={editedUser.prenom}
                onChange={handleInputChange}
                />

                <label>Age : </label>
                <input
                type="number"
                name="age"
                value={editedUser.age}
                onChange={handleInputChange}
                />

                <button onClick={() => deleteUser(editedUser.id)} className="btn btn-danger"> Supprimer l'Utilisateur </button>
                <button type="submit" className="btn btn-primary"> Sauvegarder Modifications </button>
                <button onClick={() => setEditingUser(null)} className="btn btn-secondary"> Annuler </button>
            </form>
        </div>
    );
};

export default EditForm;
