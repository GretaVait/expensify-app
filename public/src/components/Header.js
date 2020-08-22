import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="link-active" exact={true}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/create" activeClassName="link-active">Create</NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="link-active">Help</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;