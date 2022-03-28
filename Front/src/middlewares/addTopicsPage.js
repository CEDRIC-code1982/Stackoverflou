import axios from 'axios';

import { SUBMIT_TOPIC, topicSendSucess } from '../actions/addTopic';

const addTopicMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SUBMIT_TOPIC: {
            const state = store.getState();
            axios.post(`${process.env.REACT_APP_API_URL}/api/topic/save`, {
                "title": state.add.title,
                "description": state.add.description,
                "user_id": state.user.user_id,
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": state.user.token
                    }
                })
                .then((response) => {
                    console.log('je suis la réponse du middleware de addTopic', response.data.data.msg);
                    store.dispatch(topicSendSucess(response.data.data.msg))
                })
                .catch((error) => console.log(error))
            break;
        }
        default:
            next(action)
    }
}

export default addTopicMiddleware;