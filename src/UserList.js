import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ handleUserClick }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <button onClick={() => handleUserClick(user)}>{user.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
