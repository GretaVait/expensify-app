import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/dashboard" activeClassName="link-active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/create" activeClassName="link-active">Create</NavLink>
        </li>
      </ul>
    </nav>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);