import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/layoutActions';
import ItemPage from '../components/Page/ItemPage';

export const ItemDetails = (props) => {
  return (
    <ItemPage {...props}  />
  );
};

ItemDetails.propTypes = {
  actions: PropTypes.object.isRequired,
  language: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language,
    itemData: state.layout.item,
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
)(ItemDetails);
