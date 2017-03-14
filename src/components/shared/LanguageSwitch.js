import React, {PropTypes} from 'react';

class LanguageSwitch extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.catch = this.catch.bind(this);
  }

  catch(event) {
    event.preventDefault();
    this.props.changeLanguage();
  }

  render(){
    return (
      <div
        className={this.props.language}
        onClick={this.catch}>
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
