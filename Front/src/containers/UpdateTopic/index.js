import { connect } from "react-redux";

import UpdateTopic from '../../components/UpdateTopic';

import {
    changeUpdateTitleInput,
    changeUpdateDescriptionInput,
    submitUpdateTopic,
} from '../../actions/updateTopic'; 

const mapStateToProps = (state) => ({
    topicTitle: state.topic.oneTopic.title,
    topicDescription: state.topic.oneTopic.description,
    topicId: state.topic.oneTopic._id,
    
});

const mapDispatchToProps = (dispatch) => ({
    tiltleInputChange: (event) => {
        dispatch(changeUpdateTitleInput(event.target.value));
    },
    descriptionInputChange: (event) => {
        dispatch(changeUpdateDescriptionInput(event.target.value));
    },
    onSubmitForm: (event) => {
        event.preventDefault();
        dispatch(submitUpdateTopic());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTopic);