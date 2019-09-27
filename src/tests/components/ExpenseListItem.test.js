import React from 'react';
import { shallow} from 'enzyme';
import  ExpenseListItem  from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render Rent ExpenseListItem with expenses', ()=>{
    const expense = expenses[1];
    console.log(expense);

    const wrapper = shallow(<ExpenseListItem {...expense} />); // the spread operator (...) will spread
    // out all of the properties from the expense object, adding them as props to ExpenseListItem

    // could have also written above as:
    // const wrapper = shallow(<ExpenseListItem id={expense.id} description={expense.description}
    //     amount={expense.amount} createdAt={expense.createdAt} />);
    // expect(wrapper).toMatchSnapshot();
});

// test('should render Rent ExpenseListItem with an empty message', ()=>{

//     const wrapper = shallow(<ExpenseListItem {...expense} />); // the spread operator (...) will spread
//     // out all of the properties from the expense object, adding them as props to ExpenseListItem
//     expect(wrapper).toMatchSnapshot();
// });