export const GET_ALL_TOPICS = "GET_ALL_TOPICS";
export const GET_ALL_TOPICS_SUCCESS = "GET_ALL_TOPICS_SUCCESS";

export const getAllTopics = () => ({
    type: GET_ALL_TOPICS
});

export const getAllTopicsSucess = (apiData) => ({
    type: GET_ALL_TOPICS_SUCCESS,
    apiData,
});