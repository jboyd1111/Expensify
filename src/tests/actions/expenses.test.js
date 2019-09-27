import {addExpense, removeExpense, editExpense } from '../../actions/expenses';

// use toEqual to compare 2 objects or arrays
test('should set up removeExpense action object', ()=>{
    const action = removeExpense({       
    id : '123abc'} );
    expect(action ).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up editExpense action object', ()=>{
    const action = editExpense( '123abc',{note: 'New note value',goat:'my goat'});
    expect(action ).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note:'New note value',
            goat: 'my goat'
        }
    });
});

test('should set up addExpense action object with provided values', ()=>{
    const expenseData={
        description:'Rent',
        amount: 109599,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense( expenseData);
    expect(action ).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
    });

test('should set up addExpense action object with default values', ()=>{
    const action = addExpense( );
    expect(action ).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
    });