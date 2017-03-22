import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { menu } from '../data/solar-system/menu';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Layout extends React.Component {
  render() {

    const { category, object, //detail
    } = this.props.params;
    // Todo connect to language props


    const lang = 'bg';

    return (
      <div>
        <div className="main-menu">
          <IndexLink to="/">Home</IndexLink>
          {
            menu.main.map((planet, index) =>{
              return (
                <Link
                key={index}
                to={`/${category}/${planet.en}`}
                className={planet.en === object ? 'active' : ''}
                >
                  { planet[lang] }
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
                to={`/${category}/${object}/${subitem.en}`}
                activeClassName="active"
                >
                  { subitem[lang] }
                </Link>
              );
            })
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
};

export default Layout;
