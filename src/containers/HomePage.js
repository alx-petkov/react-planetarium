import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/languageActions';
import Home from '../components/Home/Home';

export const HomePage = (props) => {
  return (
    <Home {...props}  />
  );
};

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
