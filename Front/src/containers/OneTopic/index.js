import { connect } from "react-redux";

import OneTopic from "../../components/OneTopic";
import { getOneTopic, deleteOneTopic } from "../../actions/onetopic";

const mapStateToprops = (state) => ({
    oneTopic: state.topic.oneTopic,
    topicId: state.topic.oneTopic._id,
    deleteOneTopic: state.topic.deleteOneTopic
});

const mapDispatchToProps = (dispatch) => ({
    loadOneTopic: (id) => {
        dispatch(getOneTopic(id));
    },
    handleDelete: (topicId) => {
        //console.log("topicId dans le container", topicId);
        dispatch(deleteOneTopic(topicId));
    },
    
});
export default connect(mapStateToprops, mapDispatchToProps)(OneTopic);