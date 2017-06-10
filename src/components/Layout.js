import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LanguageSwitch from './shared/LanguageSwitch';
import { LANGUAGES } from './../constants/languages';
// import * as _ from 'lodash';
// import { menu } from '../data/solar-system/menu';


class Layout extends React.Component {
  // componentDidMount() {
  //   const { category } = this.props.params;
  //   const { loadMenu } = this.props.actions;
  //   loadMenu(category);
  // }

  shouldComponentUpdate(nextProps /*, nextState*/){
    // return a boolean value

    const { category } = this.props.params;
    const { active } = this.props.language;
    const newCategory = nextProps.params.category;
    const newLanguage = nextProps.language.active;
    // console.log('SHUOLD BE UPDATING?', newCategory, category );
    return (newCategory !== category || active !== newLanguage);
  }


  // componentWillUpdate(nextProps /*, nextState*/){
  //   const { category } = nextProps.params;
  //   const { loadMenu } = this.props.actions;
  //   loadMenu(category);
  // }


  render() {
    const { category, item, detail } = this.props.params;
    const { menu, language } = this.props;
    const { changeLanguage } = this.props.actions;
    const isEnglish = language.active === LANGUAGES.en;
    console.log(language);

    // const menuStyle = item ? 'standard-menu' : 'switch-board';
    // const submenuStyle = detail? 'standard-submenu' : 'switch-board';

    return (
      <div>
        <nav className="main-menu">
          <IndexLink to="/">Home</IndexLink>
          <Link className="home_link" activeClassName="active" to="/solar_system">{ isEnglish? 'SOLAR SYSTEM' : 'СЛЪНЧЕВАТА СИСТЕМА'}</Link>
          <Link className="home_link" activeClassName="active" to="/stars">{ isEnglish? 'STARS' : 'ЗВЕЗДИТЕ' }</Link>
          <Link className="home_link" activeClassName="active" to="/universe">{ isEnglish? 'UNIVERSE' : 'ВСЕЛЕНАТА'}</Link>
          <Link className="home_link" activeClassName="active" to="/discoverers">{ isEnglish? 'DISCOVERERS' : 'ОТКРИВАТЕЛИ' }</Link>
          <Link className="home_link" activeClassName="active" to="/exploration">{ isEnglish? 'EXPLORATION' : 'КОСМОНАВТИКА'}</Link>
          <Link className="home_link" activeClassName="active" to="/fun">{ isEnglish? 'FUN': 'ЗАБАВНО' }</Link>
          <LanguageSwitch
            language={language.other}
            changeLanguage={changeLanguage}
          />
        </nav>
        {/*<div className={`${category} switch-board main-menu`}>*/}
          {
            // !item ?
            // menu.main.map((menuitem, index) =>{
            //   return (
            //     <Link
            //     key={index}
            //     to={`/${category}/${menuitem.EN}`}
            //     className={`${menuitem.EN} ${menuitem.EN === item ? 'active' : ''}`}
            //     >
            //       { menuitem[language.active] }
            //       </Link>
            //   );
            // })
            //   : item
          }
        {/*</div>*/}
        <div className={`${category} ${item} standard-submenu details-menu`}>
          {
            item?
            menu.submenu.map((subitem, index) =>{
              return (
                <Link
                key={index}
                to={`/${category}/${item}/${subitem.EN}`}
                activeClassName="active"
                >
                  { subitem[language.active] }
                </Link>
              );
            })
              : ''
          }
        </div>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  language: PropTypes.object,
  changeLanguage: PropTypes.func,
  children: PropTypes.element,
  params: PropTypes.object,
  actions: PropTypes.object,
  menu: PropTypes.object,
};

export default Layout;
