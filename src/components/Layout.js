import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
// import * as _ from 'lodash';
// import { menu } from '../data/solar-system/menu';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Layout extends React.Component {
  componentDidMount() {
    const { category, // object, //detail
    } = this.props.params;

    const { loadMenu } = this.props.actions;

    loadMenu(category);
  }

  render() {
    const { category, item, detail } = this.props.params;
    const { menu, language } = this.props;
    const menuStyle = item ? 'standard-menu' : 'switch-board';
    const submenuStyle = detail? 'standard-submenu' : 'switch-board';

    return (
      <div>
        <div className={`${category} ${menuStyle} main-menu`}>
          <IndexLink to="/">Home</IndexLink>
          {
            menu.main.map((menuitem, index) =>{
              return (
                <Link
                key={index}
                to={`/${category}/${menuitem.EN}`}
                className={`${menuitem.EN} ${menuitem.EN === item ? 'active' : ''}`}
                >
                  { menuitem[language.active] }
                  </Link>
              );
            })
          }
        </div>
        <div className={`${category} ${item} ${submenuStyle} details-menu`}>
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
  children: PropTypes.element,
  params: PropTypes.object,
  actions: PropTypes.object,
  menu: PropTypes.object,
  language: PropTypes.object,
};

export default Layout;
