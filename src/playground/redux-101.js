import { createStore } from 'redux'; // needed for redux

// Action generators - functions that return action objects

const add = ({a,b},c) => {
    return a + b + c;
};

// console.log(add({a:1, b:12},100));
const incrementCount = ({incrementBy=1} ={}) => ({
    type: 'INCREMENT',
     incrementBy  // This is the same as: incrementBy: incrementBy
});

const decrementCount = ({decrementBy=1} ={}) => ({
    type: 'DECREMENT',
     decrementBy  // This is the same as: decrementBy: decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions - only use scope of items passed in or within the
// function. So, next is NOT a pure funciton because 'a' is outside the scope of the
// function:
// let a=10;
// const myFunct = (b)=>
// {
//     return a+b;
// };

// This next one is a pure function. Uses only what was passed in:
// const myFunct = (a,b)=>
// {
//     return a+b;
// };
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => { // must pass in a function to createStore
    // where 'state' is the default state object
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            // console.log(`incrementBy =${action.incrementBy}`);
            return {                
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            // const decrementBy = typeof action.decrementBy==='number'?action.decrementBy:1;
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};
const store = createStore(countReducer);

// unsubscribe below will receive the return value from the subscribe() function call. 
// just call unsubscribe each time you want to unsubscribe
const unsubscribe = store.subscribe(() => // function gets called everytime state changes
{
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch(incrementCount({INCREMENTbY: 5}));

store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// });

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// });



// store.dispatch({
//     type: 'SET',
//     count: 101
// });
store.dispatch(setCount({count:135}));
store.dispatch(resetCount());





unsubscribe();