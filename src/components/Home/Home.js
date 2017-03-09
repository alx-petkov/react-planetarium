import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
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

    </main>
  );
};

export default HomePage;
