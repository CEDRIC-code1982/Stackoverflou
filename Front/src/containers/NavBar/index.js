import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';

import {
    logout,
} from '../../actions/signIn';

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
    loggedMessage: `Bienvenue ${state.user.name}`,
});

const mapDispatchToProps = (dispatch) => ({
    handleLogout: () => {
        dispatch(logout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);