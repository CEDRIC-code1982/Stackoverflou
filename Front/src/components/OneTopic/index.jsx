import React, { useEffect, useState } from 'react';

import { Link, useParams, useNavigate } from 'react-router-dom';

import Loading from '../Loading';

import './styles.scss';

const OneTopic = ({ oneTopic, loadOneTopic, handleDelete, topicId }) => {
  const [loading, setLoader] = useState(true);
  const params = useParams();
  const { id } = params;

  //console.log("topicId dans le composant", topicId);
  //console.log("id dans OneTopic", id);
  //console.log(`oneTopic dans le composant OneTopic`, oneTopic);
  useEffect(() => {
    setTimeout(() => { setLoader(!loading) }, 300);
    loadOneTopic(id);
  }, []);

  if (loading) {
    return <Loading />
  }

  const deleteTopic = (evt) => {
    evt.preventDefault();
    handleDelete(topicId);
  };

  return (
    <>
      <div className='topic'>
        <p>{oneTopic.title}</p>
        <p>{oneTopic.description}</p>
      </div>
      <Link to={`/alltopics`}  >Retour</Link>
      <button onClick={deleteTopic}>Supprimer</button>
      <Link to={`/updatetopic/${topicId}`}  ><button>Modifier</button></Link>

    </>
  )
};

export default OneTopic;