import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div>
            <nav className="navbar navbar-expand-lg navbar-light blue-colour">
                <div className="container">
                    <div className="row text-white navbar-header">
                        Task
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                      <li className="nav-item d-inline-block">
                        <i className="fa fa-search"/>
                      </li>
                    </ul>
                </div>
            </nav>
            <div className="row bg-light lowerborder">
                <NavLink to="/unassigned" className="text-grey col-4">
                    <h6><b>5 unassigned</b></h6>
                </NavLink>
                <NavLink to="/assigned" className="text-grey col-4">
                    <h6><b>8 assigned</b></h6>
                </NavLink>
                <NavLink to="/completed" className="text-grey col-4">
                    <h6><b>17 completed</b></h6>
                </NavLink>
            </div>
        </div>
    );
}
 
export default Navbar;