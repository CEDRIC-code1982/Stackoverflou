import {
    CHANGE_TITLE_INPUT,
    CHANGE_DESCRIPTION_INPUT,
    TOPIC_SEND_SUCCESS,
} from '../actions/addTopic';

const initialState = {
    title: "",
    description: "",
    msg: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TITLE_INPUT:
            return {
                ...state,
                title: action.title,
            };
        case CHANGE_DESCRIPTION_INPUT:
            return {
                ...state,
                description: action.description,
            };
        case TOPIC_SEND_SUCCESS:
            return {
                ...state,
                title: "",
                description: "",
                msg: action.msg,
            }    
        default:
            return state;
    }
};

export default reducer;