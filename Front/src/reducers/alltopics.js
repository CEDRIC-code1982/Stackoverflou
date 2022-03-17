import { GET_ALL_TOPICS, GET_ALL_TOPICS_SUCCESS } from "../actions/alltopics";

export const initialState = {

    allTopics: {},

};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_TOPICS:
            return {
                ...state,
            };
        case GET_ALL_TOPICS_SUCCESS:
            return {
                ...state,
                allTopics: action.apiData,
            };
        default:
            return state;
    }
};

export default reducer;