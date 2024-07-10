import React from 'react';

const UserDetail = ({ user }) => {
    return (
        <div className="user-detail">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetail;
