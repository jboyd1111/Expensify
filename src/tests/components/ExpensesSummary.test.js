import React from 'react';
import { shallow} from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with no expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenses={[]} />);
    // expect(total).toEqual(114195);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 1 expense', ()=>{
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />);
    // expect(total).toEqual(114195);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 3 expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    // expect(total).toEqual(114195);
    expect(wrapper).toMatchSnapshot();
});
