export const CHANGE_UPDATE_TITLE_INPUT = 'CHANGE_UPDATE_TITLE_INPUT';
export const CHANGE_UPDATE_DESCRIPTION_INPUT = 'CHANGE_UPDATE_DESCRIPTION_INPUT';
export const SUBMIT_UPDATE_TOPIC = 'SUBMIT_UPDATE_TOPIC';
export const TOPIC_UPDATE_SUCCESS = 'TOPIC_UPDATE_SUCCESS';

export const changeUpdateTitleInput = (title) => ({
    type: CHANGE_UPDATE_TITLE_INPUT,
    title,
});

export const changeUpdateDescriptionInput = (description) => ({
    type: CHANGE_UPDATE_DESCRIPTION_INPUT,
    description,
});

export const submitUpdateTopic = (topicId) => ({
    type: SUBMIT_UPDATE_TOPIC,
    topicId,
});

export const topicUpdateSucess = (apiData) => ({
    type: TOPIC_UPDATE_SUCCESS,
    apiData,
})