import { connect } from "react-redux";

import OneTopic from "../../components/OneTopic";
import { getOneTopic } from "../../actions/onetopic";

const mapStateToprops = (state) => ({
    oneTopic: state.topic.oneTopic,
});

const mapDispatchToProps = (dispatch) => ({
    loadOneTopic: (id) => {
        dispatch(getOneTopic(id));
    }
});

export default connect(mapStateToprops, mapDispatchToProps)(OneTopic);