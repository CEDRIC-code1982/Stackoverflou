import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Home() {
    return (
        <div className='home'>
            Home
        <Link to="/alltopics" className='alltopics'>Go to Topics</Link>
        </div>
    )
};
