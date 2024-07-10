import React from 'react';
import UserDetail from './UserDetail';

const UserList = ({ users }) => {
    return (
        <div className="user-list">
            {users.map(user => (
                <UserDetail key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
