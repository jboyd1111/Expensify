import React from 'react';
import { connect } from 'react-redux'; // connects your component to the Redux store
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
     {
         props.expenses.length===0?(
             <p>No expenses</p>
              ): (
               props.expenses.map((expense)=> {
                   return <ExpenseListItem key= {expense.id} {...expense} />;
               })   
              )
     }
        {props.expenses.map((expense)=> {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}        
    </div>
);

// Original way
// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses:state.expenses
//     };
// })(ExpenseList); 


// export default ConnectedExpenseList;

// preferred way:
// from "Original way" up to this point is one way to export your Redux store
// other way is:

// As the store changes the following function will be automatically rerun
const mapStateToProps = (state) => {
    console.log({state});
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect (mapStateToProps)(ExpenseList); // This gives access
// to the Redux store to the ExpenseList component
// The parameter used with connect is the function that lets us determin what information from the 
// store that we want to be able to access data from the store we
// i.e. we don't want the entire store passed around.
// so in the case above, we just want the 'expenses' portion
// Then, that 'expenses' is what will be passed on to ExpenseList in it's props
// i.e. you can see: {props.expenses}
// So, in short, here's what happens:
// 1. connect is called with a function, in this case: mapStateToProps
// 2. what's returned from that function (expenses), is passed in as
// props to the ExpenseList function