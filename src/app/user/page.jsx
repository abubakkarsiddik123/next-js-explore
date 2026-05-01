import Link from "next/link";
import React, { use } from "react";


import {Poppins } from 'next/font/google'
 

const poppins = Poppins({
  weight:'600',
  subsets:["latin"]
})

export const metadata = {
  title: 'All Users',
  description: '...',
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className={`${poppins.className} container mx-auto`}>
      <h2>User are comming...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="card bg-primary text-primary-content"
          >
            <div className="card-body">
              <h2 className="card-title">{user.name}!</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <Link href={`/user/${user.id}`}>
                <button className="btn">Show me Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
