import { connect } from 'react-redux';

import SignUpPage from '../../components/SignUpPage';

import {
    changeField,
    submitSignUp,
} from '../../actions/signUp';

const mapStateToProps = (state) => ({
    firstName: state.signUp.firstName,
    lastName: state.signUp.lastName,
    nickName: state.signUp.nickName,
    email: state.signUp.email,
    password: state.signUp.password,
    signUp: state.signUp.signUp,
});

const mapDispatchToProps = (dispatch) => ({
    changeField: (value, name) => {
        dispatch(changeField(value, name));
    },
    handleSignUp: () => {
        dispatch(submitSignUp());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);