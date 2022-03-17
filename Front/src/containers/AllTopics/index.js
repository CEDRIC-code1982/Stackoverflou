import { connect } from "react-redux";

import AllTopics from "../../components/AllTopics";
import { getAllTopics } from "../../actions/alltopics";

const mapStateToprops = (state) => ({
    allTopics: state.topics.allTopics,
});

const mapDispatchToProps = (dispatch) => ({
    loadAllTopics: () => {
        dispatch(getAllTopics());
    }
});

export default connect(mapStateToprops, mapDispatchToProps)(AllTopics);