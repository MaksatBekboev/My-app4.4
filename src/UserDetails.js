import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>Данные пользователя</h2>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Адрес:</strong> {user.address && user.address.city}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Имя пользователя:</strong> {user.username}</p>
    </div>
  );
};

export default UserDetails;
