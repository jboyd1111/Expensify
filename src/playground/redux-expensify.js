import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// console.log("what's up Jeff?");

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {} // if no object passed in,
    // then use an empty object '
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),// UUID
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE  // From Section 10, Lesson 93: Spread Operator in Reducers RE-STUDY!!!
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// Expenses Reducer

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE': // From Section 10, Lesson 93: Spread Operator in Reducers RE-STUDY!!!
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                };
            })
        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
};

// timestamps (milliseconds)
// January 1st 1970 (UNIX epoch: start date of time)
// 33400: would be 33,400 milliseconds AFTER January 1st, 1970 (or 33.4 seconds after)
// -203 would be 203 milliseconds BEFORE January 1st, 1970 ( or .00203 seconds before)
// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;


        // look at:
        // includes method
        // convert both strings to lower case

        const lowerDescription = expense.description.toLowerCase();
        const lowerText = text.toLowerCase();
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // console.log(lowerText);
        // console.log(textMatch);
        // console.log(expense.description);

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // console.log("I am in sortBy date if " + a.amount + " " + b.amount);
            return a.createdAt < b.createdAt ? 1 : -1;
        } else 
        { if (sortBy === 'amount'){
            console.log("I am in sortBy amount if " + a.amount + " " + b.amount);
            return a.amount < b.amount ? 1 : -1;
        }}
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // console.log(store.getState());
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('coffee'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));

const demoState = {
    expenses: [{
        id: 'lajsflajsfljsa',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// playing around with babel spread operator below

// const user={
//     name: 'Jen',
//     age:24
// };
// console.log({
//     ...user,
//     location:'Philadelphia'
// })