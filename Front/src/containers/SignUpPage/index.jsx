import { connect } from 'react-redux';

import SignUpPage from '../../components/SignUpPage';

import {
    submitSettings
} from '../../actions/settingsField';

const mapStateToProps = (state) => ({
    signUp: state.settings.signUp,
});

const mapDispatchToProps = (dispatch) => ({
    // envoi du formulaire
    handleFormSubmit: (event) => {
        // on ne veut pas que la page se recharge
        event.preventDefault();
        console.log('Je lance une action SUBMIT_SETTINGS');
        dispatch(submitSettings());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);