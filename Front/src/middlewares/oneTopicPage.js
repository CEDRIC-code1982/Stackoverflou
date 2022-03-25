import axios from 'axios';

import {
    GET_ONE_TOPIC,
    getOneTopicSucess,
} from '../actions/onetopic';


const oneTopicMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_ONE_TOPIC:
            //console.log('action.id dans le middleware', action.id);
            axios.get(`${process.env.REACT_APP_API_URL}/api/topic/${action.id}`)
                .then((response) => {
                    //console.log('response de GET_ONE_TOPIC', response.data.topic);
                    store.dispatch(getOneTopicSucess(response.data.topic));
                })
                .catch((error) => console.log(error))
            break
        default:
            next(action);
            break;
    }
};

export default oneTopicMiddleware;