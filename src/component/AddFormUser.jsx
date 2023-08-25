import React, { useState } from "react";
import hommeImage from '../assets/homme.png';
import femmeImage from '../assets/femme.png';

const AddFormUser = ({ addUser, setIsAdding }) => {
    const initialUser = {
        nom: "",
        prenom: "",
        age: "",
        image: "",
        genre: "Homme",
    };

    const [user, setUser] = useState(initialUser);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Renvoie un message d'alerte si tous les éléments du formulaire d'ajout ne sont pas remplis
        if (user.nom === "" || user.prenom === "" || user.age === "") {
            alert("Veuillez remplir tous les champs du formulaire d'ajout");
            return;
        }

        const image = user.genre === "Homme" ? hommeImage : femmeImage;
        console.log(image);
        addUser(user, image);
        setUser(initialUser);
        setIsAdding(false); // Fermer le formulaire
    };

    return (
        <div className="add-form">
            <h2>Ajouter un utilisateur</h2>
            <form onSubmit={handleSubmit}>
            <label>Nom :</label>
            <input
                type="text"
                name="nom"
                value={user.nom}
                onChange={handleInputChange}
            />
            <label>Prénom :</label>
            <input
                type="text"
                name="prenom"
                value={user.prenom}
                onChange={handleInputChange}
            />
            <label>Age :</label>
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInputChange}
            />
            <label>Genre :</label>
            <select name="genre" value={user.genre} onChange={handleInputChange}>
                <option value="Homme">Homme</option>
                <option value="Femme">Femme</option>
            </select>

            <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddFormUser;
