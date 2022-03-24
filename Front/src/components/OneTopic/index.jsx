import React from 'react';

import { Link } from 'react-router-dom';

import './styles.scss';

const OneTopic = () => {
  return (
    <>
      <div className='topic'>
        <p>title</p>
        <p>description</p>
        <p>creationDate</p>
      </div>
      <Link to={`/alltopics`}  >Retour</Link>
    </>
  )
}

export default OneTopic;