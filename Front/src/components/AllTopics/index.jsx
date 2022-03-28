import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

import './styles.scss';

const AllTopics = ({ allTopics, loadAllTopics }) => {
    const [loading, setLoader] = useState(true);
    //console.log(`allTopics dans le composant AllTopics`, allTopics);
    useEffect(() => {
        setTimeout(() => { setLoader(!loading) }, 300);
        loadAllTopics();
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <h2>Tous les topics</h2>
            <Link to="/addtopic" className='addtopic'>Ajouter un topic</Link>
            <ul className='topics'>
                {allTopics.map((topic) => {
                    return (
                        <li className='card' key={topic._id} >
                            <Link to={`/topic/${topic._id}`}>
                                {topic.title}
                            </Link>
                            <p>{topic.description}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default AllTopics;