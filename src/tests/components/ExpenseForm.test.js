import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', ()=> {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render for invalid form submission', ()=> {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    }); // gives you access to the 'form' element in the ExpenseForm component
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', ()=> {
    const value ='New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{ // need 'at(0) because there are 2 input fields, we want the first
        target: {value }
    }); // gives you access to the 'input' element in the ExpenseForm component
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', ()=> {
    const value ='New note value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target: {value }
    }); // gives you access to the 'input' element in the ExpenseForm component
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set amount change on valid value', ()=> {
    const value ='23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value }
    }); // gives you access to the 'input' element in the ExpenseForm component
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should not set amount change on invalid value', ()=> {
    const value ='23.500'; // won't change because there are 3 numbers after decimal
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target: {value }
    }); // gives you access to the 'input' element in the ExpenseForm component
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('should call onsubmit prop for valid form submission', ()=>{
 const onSubmitSpy = jest.fn();const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
 wrapper.find('form').simulate('submit',{
    preventDefault:()=>{}
}); // gives you access to the 'form' element in the ExpenseForm component
expect(wrapper.state('error')).toBe('');
expect(onSubmitSpy).toHaveBeenCalledWith({
    description:expenses[0].description,
    createdAt: expenses[0].createdAt,
    amount: expenses[0].amount,
    note: expenses[0].note
});
});

test('should set new date on date change', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar on focus change', ()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(true);
});