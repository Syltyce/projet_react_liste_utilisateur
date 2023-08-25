import React, { useState } from "react";
import AddFormUser from "./AddFormUser";

const AddUserButton = ({ addUser }) => {
    const [isAdding, setIsAdding] = useState(false);

    return (
    <div className="add-user-button">
        {!isAdding ? (
        <button onClick={() => setIsAdding(true)}> Ajouter un utilisateur </button>
        ) : (
        <AddFormUser addUser={addUser} setIsAdding={setIsAdding} />
        )}
    </div>
    );
};

export default AddUserButton;
