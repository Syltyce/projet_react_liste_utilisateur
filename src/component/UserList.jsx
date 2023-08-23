// src/components/UserList.js
import React from 'react';
import User from './User';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
