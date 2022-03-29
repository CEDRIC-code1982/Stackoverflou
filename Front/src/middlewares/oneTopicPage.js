import axios from 'axios';

import {
    GET_ONE_TOPIC,
    getOneTopicSucess,
    DELETE_ONE_TOPIC,
    deleteOneTopicSucess,
} from '../actions/onetopic';


const oneTopicMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_ONE_TOPIC: {
            //console.log('action.id dans le middleware', action.id);
            axios.get(`${process.env.REACT_APP_API_URL}/api/topic/${action.id}`)
                .then((response) => {
                    //console.log('response de GET_ONE_TOPIC', response.data.topic);
                    store.dispatch(getOneTopicSucess(response.data.topic));
                })
                .catch((error) => console.log(error))
            break;
        }
        case DELETE_ONE_TOPIC: {
            const state = store.getState();
            axios.delete(`${process.env.REACT_APP_API_URL}/api/topic/delete/${action.topicId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": state.user.token
                    }
            })
            .then((response) => {
                console.log('response de DELETE_ONE_TOPIC', response.data);
                store.dispatch(deleteOneTopicSucess(response.data));
            })
            .catch((error) => console.log(error))
        break;
        }
        default:
            next(action);
            break;
    }
};

export default oneTopicMiddleware;