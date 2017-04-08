import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/layoutActions';
import DetailSection from '../components/Page/DetailSection';

export const LayoutContainer = (props) => {
  return (
    <DetailSection {...props}  />
  );
};

LayoutContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language,
    detail: state.layout.detail,
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
