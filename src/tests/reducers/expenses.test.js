import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found', ()=>{
    const action ={
        type:'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', ()=>{
    const expense = {
        id: '109',
        description:'Laptop',
        note:'',
        amount:20000,
        createdAt:295
    }
    const action ={
        type:'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,expense]); // You're 'adding' the new expense object to the end of the expenses array
});

test('should edit an expense', ()=>{
    const description='Bubble Gum';
    const action ={
        type:'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {description}
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test('should not edit an expense if id not found', ()=>{
    const action ={
        type:'EDIT_EXPENSE',
        id: '-1',
        updates: {description: 'Bubble Gum'}
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () =>{
    const action ={
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    // our reducer will just return the one expense we chose above in the action object
    expect(state).toEqual([expenses[1]]);
});