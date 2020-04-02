import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Unassigned from './Unassigned';
import Assigned from './Assigned';
import Completed from './Completed';

const TaskContainer = () => {
    return (  
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/unassigned" component={Unassigned} exact />
                    <Route path="/assigned" component={Assigned} exact />
                    <Route path="/completed" component={Completed} exact />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
 
export default TaskContainer;