import React, { PropTypes } from 'react';
// import {Link} from 'react-router';

class FundamentalsView extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props.params, nextProps.params);
    if (this.props.params.item !== nextProps.params.item) {
      console.log('NOW WE GET NEW FUNDAMENTALS');
    }
  }

  render(){
    const { fundamentals, language } = this.props;
    // console.log('FundamentalsView is mounted');
    // console.log('fundView', fundamentals, language);
    return (
      fundamentals ?
      <div>
        {
          fundamentals.map((item, index) =>{
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
      </div>
      :
      ''
    );
  }
}

FundamentalsView.propTypes = {
  params: PropTypes.object,
  fundamentals: PropTypes.array,
  language: PropTypes.object,
};

export default FundamentalsView;
