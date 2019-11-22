import { createStore, combineReducers, applyMiddleware,compose } from 'redux'; // applyMiddleware allows React to add middle
// ware to your Redux store.
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {


    // Store creation

    const store = createStore(
        combineReducers({ // Jeff, go over reducers again
            // They basically reduce a collection, like an array
            // down to a single value 
            expenses: expensesReducer,
            filters: filtersReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};