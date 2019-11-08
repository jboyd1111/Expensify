import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({  // This object is what gets returned: type, expense{}
    type: 'ADD_EXPENSE',
    expense
});

// next function will dispatch addExpense in order to get things going. 
// that's what's going to keep changing the store
// so, next function we'll save to firebase, then use dispatch
// to ensure our changes are reflected in the Redux store
export const startAddExpense = (expenseData={})=>{
    return (dispatch) =>{
        const { // This sets a new object to the values of the expenseData object (destructures)
            description = '', 
            note = '',
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense ={ description, note, amount, createdAt };
      return  database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE  // From Section 10, Lesson 93: Spread Operator in Reducers RE-STUDY!!!
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});