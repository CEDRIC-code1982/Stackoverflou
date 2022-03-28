export const CHANGE_TITLE_INPUT = 'CHANGE_TITLE_INPUT';
export const CHANGE_DESCRIPTION_INPUT = 'CHANGE_DESCRIPTION_INPUT';
export const SUBMIT_TOPIC = 'SUBMIT_TOPIC';
export const TOPIC_SEND_SUCCESS = 'TOPIC_SEND_SUCCESS';

export const changeTitleInput = (title) => ({
    type: CHANGE_TITLE_INPUT,
    title,
});

export const changeDescriptionInput = (description) => ({
    type: CHANGE_DESCRIPTION_INPUT,
    description,
});

export const submitTopic = () => ({
    type: SUBMIT_TOPIC,
});

export const topicSendSucess= (apiData) => ({
    type: TOPIC_SEND_SUCCESS,
    apiData,
})