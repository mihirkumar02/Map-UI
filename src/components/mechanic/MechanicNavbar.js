import React from 'react';
import { NavLink } from 'react-router-dom';

const MechanicNavbar = () => {
    return (  
        <div>
            <nav className="navbar navbar-expand-lg navbar-light blue-colour">
                <div className="container">
                    <div className="row text-white navbar-header">
                        Mechanic
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                      <li className="nav-item d-inline-block">
                        <i className="fa fa-search"/>
                      </li>
                    </ul>
                </div>
            </nav>
            <div className="row bg-light lowerborder">
                <NavLink to="/free" className="text-grey col-4">
                    <h6><b>1 free</b></h6>
                </NavLink>
                <NavLink to="/busy" className="text-grey col-4">
                    <h6><b>5 busy</b></h6>
                </NavLink>
                <NavLink to="/inactive" className="text-grey col-4">
                    <h6><b>208 inactive</b></h6>
                </NavLink>
            </div>
        </div>
    );
}
 
export default MechanicNavbar;