import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {


    // Store creation

    const store = createStore(
        combineReducers({ // Jeff, go over reducers again
            expenses: expensesReducer,
            filters: filtersReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};