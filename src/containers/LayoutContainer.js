import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/layoutActions';
import Layout from '../components/Layout';

export const LayoutContainer = (props) => {
  return (
    <Layout {...props}  />
  );
};

LayoutContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language,
    menu: state.layout.menu,
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
