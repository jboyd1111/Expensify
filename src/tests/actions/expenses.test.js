import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddExpense, 
    startEditExpense,
    addExpense,
     removeExpense,
      editExpense,
       setExpenses,
        startSetExpenses,
        startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData ={};
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id] ={description, note, amount, createdAt};
    });
    database.ref('expenses').set(expensesData).then(()=>done());
});

// use toEqual to compare 2 objects or arrays
test('should set up removeExpense action object', ()=>{
    const action = removeExpense({       
    id : '123abc'} );
    expect(action ).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

// Jeff, completed on 12/19/19 from lesson 159
test('should remove expense from firebase', (done)=>{
    const store = createMockStore({});
    const id=expenses[2].id; // grab last expese from fixture
    store.dispatch(startRemoveExpense({ id })).then(()=>{
        const actions = store.getActions();
        expect (actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`espenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should edit expense from firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates={ amount:195 };
     store.dispatch(startEditExpense(id,updates)).then(()=>{
         const actions = store.getActions();
         expect(actions[0]).toEqual({
             type: 'EDIT_EXPENSE',
             id,
             updates
            });
            return database.ref(`expenses/${id}`).once('value');            
        }).then ((snapshot)=>{
            expect(snapshot.val().amount).toBe(updates.amount);
            done();
        });
});

test('should set up addExpense action object with provided values', ()=>{
    const action = addExpense( expenses[2]);
    expect(action ).toEqual({
        type: 'ADD_EXPENSE',
        expense:expenses[2]
    })
    });

test('should add expense to database and store', (done)=>{
       const store = createMockStore({});
       const expenseData ={
           description: 'Mouse',
           amount: 3000,
           note: 'This one is better',
           createdAt: 1000
       };
       store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });

        // promise chain
        return database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();// This forces jest to wait, until 'done' moment in time
        });;
        
    });
});

test('Passing empty object should add expense with default to database and store', (done)=>{
        const store = createMockStore({});
        const expenseDefaults ={
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
       
        store.dispatch(startAddExpense({})).then(()=>{
         const actions = store.getActions();
         expect(actions[0]).toEqual({
             type: 'ADD_EXPENSE',
             expense:{
                id: expect.any(String),
             ...expenseDefaults
            }
         });
 
         // promise chain
         return database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
             expect(snapshot.val()).toEqual(expenseDefaults);
             done();// This forces jest to wait, until 'done' moment in time
         });
         
     });
            });

test('should set up set expense action object with data', ()=>{
    const action = setExpenses(expenses); // from our fixtures data (for now?)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
    });

test('should fetch the expenses from firebase', (done)=>{
        const store = createMockStore({});
        store.dispatch(startSetExpenses()).then(()=>{
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type:'SET_EXPENSES',
                expenses
            });
            done();
        });
    });