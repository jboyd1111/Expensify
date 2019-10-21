import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () =>
    (
        <div>
             <ExpensesSummary />
            <ExpenseListFilters />
            <ExpenseList />
    </div>
    );
    export default ExpenseDashboardPage;