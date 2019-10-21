import React from 'react';
import { connect } from 'react-redux'; // connects your component to the Redux store
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const renderSwitch =(param)=> {
    switch(param.expenses.length) {       
        case 1:
         return (<h1>Viewing 1 expense totalling: &nbsp;
                        {numeral(
                      param.expenses.reduce((total,b)=> {
                          return total+ b.amount;
                      },0) / 100).format('$0,0.00')}</h1>
                  )
        default:
          return (<h1>Viewing {param.expenses.length} expenses totalling: &nbsp;
                        {numeral(
                      param.expenses.reduce((total,b)=> {
                          return total+ b.amount;
                      },0) / 100).format('$0,0.00')}</h1>
                  );
      }
}
export const ExpensesSummary = (props) => ( // no need for export keyword on this line that I can tell!
    <div>
     {
         renderSwitch(props)
     }
    </div>
);

// As the store changes the following function will be automatically rerun
const mapStateToProps = (state) => {
    console.log({state});
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    };
};

export default connect (mapStateToProps)(ExpensesSummary); // This gives access
// to the Redux store to the ExpenseList component
// The parameter used with connect is the function that lets us determine what information from the 
// store that we want to be able to access
// i.e. we don't want the entire store passed around.
// so in the case above, we just want the 'expenses' portion
// Then, that 'expenses' is what will be passed on to ExpenseList in it's props
// i.e. you can see: {props.expenses}
// So, in short, here's what happens:
// 1. connect is called with a function, in this case: mapStateToProps
// 2. what's returned from that function (expenses), is passed in as
// props to the ExpenseList function