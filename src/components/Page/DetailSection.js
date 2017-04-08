import React, { PropTypes } from 'react';
// import FundamentalsView from '../FundamentalsView';

class DetailSection extends React.Component {

  componentDidMount() {
    const { params, actions } = this.props;
    // console.log('hi there', params.category, params.item, params.detail, actions);
    if (params.detail) { //ToDo update fundamentals on location change
     actions.loadDetail(params.category, params.item, params.detail);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { params, actions } = this.props;
    //    console.log('willRecieve TEST');
    // console.log('hi there', params.category, params.item);
    if (/*params.item != nextProps.params.item ||*/ params.detail != nextProps.params.detail) {

      actions.loadDetail(params.category, nextProps.params.item, nextProps.params.detail);
    }
  }

  render(){
    const { detail } = this.props;
    //console.log(this.props);
    return (
      <div>
        <h1>DETAIL SECTION</h1>

        <h2>Get Started</h2>
        { detail }
      </div>


    );
  }
}

DetailSection.propTypes = {
  params: PropTypes.object,
  actions: PropTypes.object,
  detail: PropTypes.string, // toDo make it an Object
};

export default DetailSection;
