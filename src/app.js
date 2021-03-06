import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'; // Lets us set up the Redux store that we'll be passing to all 
// of our components
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises'; // uncomment this line to play around with promises.js

const myStore = configureStore();

// Add Expenses and Filters to state
// myStore.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// myStore.dispatch(addExpense({ description: 'Gas bill',  amount: 500, createdAt: 1000 }));
// myStore.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt:2000 }));

// store.subscribe(() => {
    const jvbMadeUpStoreName = myStore.getState();
    const visibleExpenses = getVisibleExpenses(jvbMadeUpStoreName.expenses, jvbMadeUpStoreName.filters);
    // console.log(state.expenses);
    // console.log(visibleExpenses);
    console.log("I am in subscribe function");
// });


// console.log(store.getState());
// Can use the jsx parameter like next line or type it out as in
// following line
// ReactDOM.render(jsx, document.getElementById('app'));
// Below, looks like the name 'store' is required both for the variable name as well as the props value
// Also NOTE below: Provider is a Redux component. It allows us to access the store throughout our
// application without explicitly having to pass it to each lower-level component.
// It basically uses HOC (higher-level components, which you can play with in playground/hoc.js)
const jsx = (
    <Provider store={myStore}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

myStore.dispatch(startSetExpenses()).then(()=>
{
    ReactDOM.render(jsx, document.getElementById('app'));
})
