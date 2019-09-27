import uuid from 'uuid';
// ADD_EXPENSE
export const addExpense = (
    { description = '', 
    note = '',
     amount = 0, 
     createdAt = 0 
    } = {} // if no object passed in,
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