import React from 'react'
import { useState, useContext } from 'react'
import GitContext from '../../context/github/GitContext'

function UsersSearch() {

    const [text, setText] = useState('')
    const {users, searchU, clearU} = useContext(GitContext)
    console.log("Users in component:", users);

    const handleChange = (e) => {
       setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            alert('coaie')
        }else {
            searchU(text)


            setText('')
        }
    }

   

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 '>
        <div>
            <form action="" className='' onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black"  placeholder='search' value={text} onChange={handleChange}/>
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type='submit'>Go</button>
                    </div>
                </div>
            </form>
        </div>
        {users && users.length > 0 && (
            <div>
                <button className='btn btn-ghost btn-large' onClick={clearU}>Clear</button>
            </div>
            )}
    </div>
  )
}

export default UsersSearch