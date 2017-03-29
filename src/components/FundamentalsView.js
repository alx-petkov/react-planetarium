import React, { PropTypes } from 'react';
// import {Link} from 'react-router';

class FundamentalsView extends React.Component {
  componentWillReceiveProps(nextProps) {
    // console.log(this.props.params, nextProps.params);
    if (this.props.params.item !== nextProps.params.item) {
      //console.log('NOW WE GET NEW FUNDAMENTALS');
    }
  }

  render(){
    const { basics, language } = this.props;
    // console.log('FundamentalsView is mounted');
    // console.log('fundView', basics);
    return (
      basics ?
      <div>
        {
          basics.map((item, index) =>{
            return (
              <div
              key={index}
              className="factBox"
              >
                { item.title[language.active] }
              </div>
            );
          })
        }
        FUNDAMENTALS VIEW
      </div>
      :
      <div>NO BASICS TO SHOW</div>
    );
  }
}

FundamentalsView.propTypes = {
  params: PropTypes.object,
  basics: PropTypes.array,
  language: PropTypes.object,
};

export default FundamentalsView;
