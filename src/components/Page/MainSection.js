import React, { PropTypes } from 'react';
import FundamentalsView from '../FundamentalsView';

class MainSection extends React.Component {

  componentDidMount() {
    // console.log('didMount test');
    const { params, actions } = this.props;
    actions.loadBasics(params.category, params.item);
  }

  componentWillReceiveProps(nextProps) {
    const { params, actions } = this.props;
    //    console.log('willRecieve TEST');
    // console.log('hi there', params.category, params.item);
    if (params.item != nextProps.params.item) { //ToDo update fundamentals on location change

      actions.loadBasics(params.category, nextProps.params.item);
    }
  }

  render(){

    return (

      <FundamentalsView {...this.props} />

    );
  }
}

MainSection.propTypes = {
  params: PropTypes.object,
  actions: PropTypes.object,
};

export default MainSection;
