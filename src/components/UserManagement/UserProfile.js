import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetail from './UserDetail';
import UserForm from './UserForm';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchUser();
    }, [userId]);

    const handleUpdateUser = async (updatedUser) => {
        try {
            await axios.put(`http://localhost:4000/users/${userId}`, updatedUser);
            setUser(updatedUser);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">
            {isEditing ? (
                <UserForm user={user} onSubmit={handleUpdateUser} />
            ) : (
                <>
                    <UserDetail user={user} />
                    <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                </>
            )}
        </div>
    );
};

export default UserProfile;
