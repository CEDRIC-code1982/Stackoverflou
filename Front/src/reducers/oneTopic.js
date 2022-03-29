import { GET_ONE_TOPIC, GET_ONE_TOPIC_SUCCESS, DELETE_ONE_TOPIC } from "../actions/onetopic";

export const initialState = {

    oneTopic: {},
    deleteOneTopic: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ONE_TOPIC:
            return {
                ...state,
            };
        case GET_ONE_TOPIC_SUCCESS:
            return {
                ...state,
                oneTopic: action.apiData,
            };
        case DELETE_ONE_TOPIC:
            return {
                ...state,
                deleteOneTopic: true,
            }
        default:
            return state;
    }
};

export default reducer;