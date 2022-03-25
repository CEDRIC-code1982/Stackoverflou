import { GET_ONE_TOPIC, GET_ONE_TOPIC_SUCCESS } from "../actions/onetopic";

export const initialState = {

    oneTopic: {},

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
        default:
            return state;
    }
};

export default reducer;