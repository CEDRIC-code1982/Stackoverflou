export const GET_ONE_TOPIC = "GET_ONE_TOPIC";
export const GET_ONE_TOPIC_SUCCESS = "GET_ONE_TOPIC_SUCCESS";
export const DELETE_ONE_TOPIC = "DELETE_ONE_TOPIC";
export const DELETE_ONE_TOPIC_SUCESS = "DELETE_ONE_TOPIC_SUCESS";

export const getOneTopic = (id) => ({
    type: GET_ONE_TOPIC,
    id,
});

export const getOneTopicSucess = (apiData) => ({
    type: GET_ONE_TOPIC_SUCCESS,
    apiData,
});

export const deleteOneTopic = (topicId) => ({
    type: DELETE_ONE_TOPIC,
    topicId,
})

export const deleteOneTopicSucess = (apiData) => ({
    type: DELETE_ONE_TOPIC_SUCESS,
    apiData,
})
