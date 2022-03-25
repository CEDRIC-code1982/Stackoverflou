export const GET_ONE_TOPIC = "GET_ONE_TOPIC";
export const GET_ONE_TOPIC_SUCCESS = "GET_ONE_TOPIC_SUCCESS";

export const getOneTopic = (id) => ({
    type: GET_ONE_TOPIC,
    id,
});

export const getOneTopicSucess = (apiData) => ({
    type: GET_ONE_TOPIC_SUCCESS,
    apiData,
});