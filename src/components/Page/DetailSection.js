import React, { PropTypes } from 'react';
// import FundamentalsView from '../FundamentalsView';

class DetailSection extends React.Component {

  /*componentDidMount() {
    const { params, actions } = this.props;
    // console.log('hi there', params.category, params.item);
    //if (!params.detail) { //ToDo update fundamentals on location change

    //  actions.loadFundamentals(params.category, params.item);
    //}
  }*/

  render(){
    // const { params } = this.props;

    // console.log(this.props);
    return (
      <div>
        <h1>DETAIL SECTION</h1>

        <h2>Get Started</h2>

      </div>


    );
  }
}

DetailSection.propTypes = {
  params: PropTypes.object,
  actions: PropTypes.object,
};

export default DetailSection;
