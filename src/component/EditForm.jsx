import React, { useState } from "react";

const EditForm = ({ user, setEditingUser, updateUser }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(editedUser);
    setEditingUser(null); // Fermer le formulaire d'édition
  };

  return (
    <div className="edit-form">
      <h2> Modifier l'utilisateur </h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
          type="text"
          name="nom"
          value={editedUser.nom}
          onChange={handleInputChange}
        />
        <label>Prénom :</label>
        <input
          type="text"
          name="prenom"
          value={editedUser.prenom}
          onChange={handleInputChange}
        />
        <label>Age :</label>
        <input
          type="number"
          name="age"
          value={editedUser.age}
          onChange={handleInputChange}
        />
        <button type="submit"> Sauvegarder Modifications </button>
        <button onClick={() => setEditingUser(null)}> Annuler </button>
      </form>
    </div>
  );
};

export default EditForm;
