import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LanguageSwitch from './shared/LanguageSwitch';
// import * as _ from 'lodash';
// import { menu } from '../data/solar-system/menu';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Layout extends React.Component {
  componentDidMount() {
    const { category } = this.props.params;
    const { loadMenu } = this.props.actions;
    console.log('loading', category);
    loadMenu(category);
  }

  // shouldComponentUpdate(nextProps /*, nextState*/){
  //   const { category } = this.props.params;
  //   const newCategory = nextProps.params.category;
  //   console.log('SHUOLD BE UPDATING?', newCategory, category );
  //   return newCategory !== category;
  // }


  componentWillUpdate(nextProps /*, nextState*/){
    const { category } = this.props.params;
    const newCategory = nextProps.params.category;
    if (newCategory !== category){
      const { loadMenu } = this.props.actions;
      console.log('loading new', category);
      loadMenu(newCategory);
    }

  }

  render() {
    const { category, item } = this.props.params;
    const { menu, language } = this.props;
    // const { changeLanguage } = this.props.actions;

    // const menuStyle = item ? 'standard-menu' : 'switch-board';
    // const submenuStyle = detail? 'standard-submenu' : 'switch-board';


    return (
      <div>
        <div className={`${category} switch-board main-menu`}>
          {
            !item ?
            menu.main.map((menuitem, index) =>{
              return (
                <Link
                key={index}
                to={`/${category}/${menuitem.EN}/index`}
                className={`${menuitem.EN} ${menuitem.EN === item ? 'active' : ''}`}
                >
                  { menuitem[language.active] }
                  </Link>
              );
            })
              : item
          }
        </div>
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
