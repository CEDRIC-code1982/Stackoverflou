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
    // comme vu dans notre enquête
    // changeField prend 2 parametres
    // la nouvelel valeur de l'input
    // la "case" a modifier (email ou password)
    // enquete_changefield.png et enquete_changeField.md
    changeField: (value, name) => {
        dispatch(changeField(value, name));
    },
    handleSignUp: () => {
        dispatch(submitSignUp());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);