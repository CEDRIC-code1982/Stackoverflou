import React, { useEffect, useState } from 'react';

import Loading from '../Loading';

import './styles.scss';

const AllTopics = ({ allTopics, loadAllTopics }) => {
    const [loading, setLoader] = useState(true);
    console.log(`allTopics dans le composant`, allTopics);
    useEffect(() => {
        setTimeout(() => { setLoader(!loading) }, 1000);
        loadAllTopics();
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <div className='topics'>
            {allTopics.data.map((obj) => {
                return (
                    <>
                        <p>{obj.key} </p>
                        <p>{obj.title}</p>
                        <p>{obj.description}</p>
                        <p>{obj.user_id}</p>
                        <p>{obj.creationDate}</p>
                    </>
                )
            })}
        </div>
    );
}

export default AllTopics;