import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import LanguageSwitch from '../shared/LanguageSwitch';

class Home extends React.Component {
  /*componentWillMount() {
    const test = 'hello world!';
    console.log(test);
  }*/

  render(){

    const { changeLanguage } = this.props.actions;
    const { language } = this.props;

    return (
      <main>
        <nav className="left_column">
          <Link className="home_link" to="solar-system">SOLAR SYSTEM</Link>
          <Link className="home_link" to="stars">STARS</Link>
          <Link className="home_link" to="universe">UNIVERSE</Link>
        </nav>

        <div className="central_column"> {/* ToDo symbolic model of the solar system */}
          <h1>HOME</h1>
        </div>

        <nav className="right_column">
          <Link className="home_link" to="sciense">SCIENCE</Link>
          <Link className="home_link" to="exploration">EXPLORATION</Link>
          <Link className="home_link" to="fun">FUN</Link>
        </nav>
        <LanguageSwitch
          language={language.active}
          changeLanguage={changeLanguage}
        />

      </main>
    );
  }
}

Home.propTypes = {
  language: PropTypes.object,
  changeLanguage: PropTypes.func,
  saveFuelSavings: PropTypes.func,
  calculateFuelSavings: PropTypes.func,
  actions: PropTypes.object,
};

export default Home;
