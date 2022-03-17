import axios from 'axios';

import {
    GET_ALL_TOPICS,
    getAllTopicsSucess,
} from '../actions/alltopics';


const allTopicsMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_ALL_TOPICS:

            axios.get(`${process.env.REACT_APP_API_URL}/api/topic/all`)

                .then((response) => {
                    console.log('response de GET_ALL_TOPICS', response.data.topics);
                    store.dispatch(getAllTopicsSucess(response.data.topics));
                })
                .catch((error) => console.log(error))
            break
        default:
            next(action);
            break;
    }
};

export default allTopicsMiddleware;