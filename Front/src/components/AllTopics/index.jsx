import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../Loading';

import './styles.scss';

const AllTopics = ({ allTopics, loadAllTopics }) => {
    const [loading, setLoader] = useState(true);
    console.log(`allTopics dans le composant AllTopics`, allTopics);
    useEffect(() => {
        setTimeout(() => { setLoader(!loading) }, 1000);
        loadAllTopics();
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <div className='topics'>
            {allTopics.map((obj) => {
                return (
                    <Link to={`/topic/${obj._id}`}className='card' key={obj._id}>
                        <p>{obj.title}</p>
                        <p>{obj.description}</p>
                        <p>{obj.creationDate}</p>
                    </Link>
                )
            })}
        </div>
    );
}

export default AllTopics;