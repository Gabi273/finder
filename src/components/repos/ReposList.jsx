import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem';

function ReposList({repos}) {
    if (!Array.isArray(repos)) {
    console.error('repos is not an array:', repos);
    return null;
  }

  
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className="text-3xl my-4 font-cold card-title">Repository</h2>
            {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}/>
        ))}
        </div>
        
    </div>
  )
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default ReposList