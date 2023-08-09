import React from 'react'
import { useContext } from 'react'
import GitContext from '../../context/github/GitContext'
import UserItem from './UserItem'


function UserResults() {

    const {users, load} = useContext(GitContext)

    console.log(users)

if (!load && Array.isArray(users)) {
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
            <UserItem key={user.id} user={user}/>
        ))}
    </div>
  );
  } else {
    return <h3>Loading</h3>
  }
}

export default UserResults