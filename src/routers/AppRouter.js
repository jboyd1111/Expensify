import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage'; 
import EditExpensePage from '../components/EditExpensePage'; 
import HelpPage from '../components/HelpPage'; 
import NotFoundpPage from '../components/NotFoundpPage'; 
import Header from '../components/Header'; 

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={AddExpensePage}></Route>
                <Route path="/edit/:id" component={EditExpensePage}></Route>
                <Route path="/help" component={HelpPage}></Route>
                <Route component={NotFoundpPage}></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;