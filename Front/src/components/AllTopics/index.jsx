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
        <div className='topics'>
            {allTopics.map((topic) => {
                return (
                    <Link to={`/topic/${topic._id}`} className='card' key={topic._id}>
                        <p>{topic.title}</p>
                        <p>{topic.description}</p>
                        <p>{topic.creationDate}</p>
                    </Link>
                )
            })}
        </div>
    );
}

export default AllTopics;