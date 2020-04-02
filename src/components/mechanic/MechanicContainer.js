import React from 'react';
import MechanicNavbar from './MechanicNavbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Free from './Free';
import Busy from './Busy';
import Inactive from './Inactive';

const MechanicContainer = () => {
    return (  
        <div>
            <BrowserRouter>
                <MechanicNavbar />
                <Switch>
                    <Route path="/free" component={Free} exact />
                    <Route path="/busy" component={Busy} exact />
                    <Route path="/inactive" component={Inactive} exact />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
 
export default MechanicContainer;