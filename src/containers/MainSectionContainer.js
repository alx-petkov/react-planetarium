import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/layoutActions';
import MainSection from '../components/Page/MainSection';

export const LayoutContainer = (props) => {
  return (
    <MainSection {...props}  />
  );
};

LayoutContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language,
    basics: state.layout.basics,
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
)(LayoutContainer);
