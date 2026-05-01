import React from 'react';

const UserDetailPage = async ({params}) => {
    const {userId}=await params

    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json();


    console.log(userId);
    return (
        <div className='container mx-auto'>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
        </div>
    );
};

export default UserDetailPage;