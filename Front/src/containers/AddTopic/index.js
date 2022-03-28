import { connect } from "react-redux";

import AddTopic from '../../AddTopic';

import {
    changeTitleInput,
    changeDescriptionInput,
    submitTopic,
} from '../../actions/addTopic'; 

const mapStateToProps = (state) => ({
    title: state.add.title,
    description: state.add.description
});

const mapDispatchToProps = (dispatch) => ({
    tiltleInputChange: (event) => {
        dispatch(changeTitleInput(event.target.value));
    },
    descriptionInputChange: (event) => {
        dispatch(changeDescriptionInput(event.target.value));
    },
    onSubmitForm: (event) => {
        event.preventDefault();
        dispatch(submitTopic());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTopic);