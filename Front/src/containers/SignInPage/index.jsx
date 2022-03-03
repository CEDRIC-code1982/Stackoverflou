import { connect } from 'react-redux';

import SignIn from '../../components/SignInPage';

import {
    logout,
} from '../../actions/signIn';

import {
    submitSettings,
} from '../../actions/settingsField';

const mapStateToProps = (state) => ({
    email: state.user.email,
    password: state.user.password,
    isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
    // envoi du formulaire
    handleFormSubmit: (event) => {
        // on ne veut pas que la page se recharge
        event.preventDefault();
        console.log('Je lance une action SUBMIT_SETTINGS');
        dispatch(submitSettings());
    },
    handleLogout: () => {
        dispatch(logout());
    },

});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);