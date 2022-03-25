import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import Loading from '../Loading';

import './styles.scss';

const OneTopic = ({ oneTopic, loadOneTopic }) => {
  const [loading, setLoader] = useState(true);
  const params = useParams();
  const { id } = params

  //console.log("id dans OneTopic", id);
  //console.log(`oneTopic dans le composant OneTopic`, oneTopic);
  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 300);
    loadOneTopic(id);
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
    <>
      <div className='topic'>
        <p>{oneTopic.title}</p>
        <p>{oneTopic.description}</p>
        <p>{oneTopic.creationDate}</p>
      </div>
      <Link to={`/alltopics`}  >Retour</Link>
    </>
  )
};

export default OneTopic;