import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
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

    const { category, object } = this.props.params;
    const { menu, language } = this.props;

    return (
      menu ?
      <div>
        <div className="main-menu">
          <IndexLink to="/">Home</IndexLink>
          {
            menu.main.map((planet, index) =>{
              return (
                <Link
                key={index}
                to={`/${category}/${planet.EN}`}
                className={planet.en === object ? 'active' : ''}
                >
                  { planet[language.active] }
                  </Link>
              );
            })
          }
        </div>
        <div className="details-menu">
          {
            menu.submenu.map((subitem, index) =>{
              return (
                <Link
                key={index}
                to={`/${category}/${object}/${subitem.EN}`}
                activeClassName="active"
                >
                  { subitem[language.active] }
                </Link>
              );
            })
          }
        </div>
        {this.props.children}
      </div>
      : ''
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
