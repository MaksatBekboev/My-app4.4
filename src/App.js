import React, { useState } from 'react';
import UserList from './UserList';
import UserDetails from './UserDetails';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <UserList handleUserClick={handleUserClick} />
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
};

export default App;
