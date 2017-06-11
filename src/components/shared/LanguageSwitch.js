import React, {PropTypes} from 'react';

class LanguageSwitch extends React.Component {

  reverseLanguage(event) {
    event.preventDefault();
    this.props.changeLanguage();
  }

  render(){
    return (
      <div
        className={`${this.props.language} languageBtn`}
        onClick={(e)=> this.reverseLanguage(e)}>
        { this.props.language }
      </div>
    );
  }
}

LanguageSwitch.propTypes = {
  language: PropTypes.string,
  changeLanguage: PropTypes.func,
};

export default LanguageSwitch;
