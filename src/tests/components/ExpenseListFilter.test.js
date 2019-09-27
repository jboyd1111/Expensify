import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate,setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper=shallow(<ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    />)
})

test('should render ExpenseListFilter correctly', ()=>
{   
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data correctly', ()=>
{   
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change correctly', ()=>
{   
    const value ='R';
    wrapper.find('input').simulate('change',{ 
    target: {value }});
    expect(setTextFilter).toHaveBeenLastCalledWith(
        {"text": "R", "type": "SET_TEXT_FILTER"}
    );
});

test('should handle sortByDate correctly', ()=>
{   
    const value ='date';
    wrapper.find('select').simulate('change',{ 
    target: {value }});
    expect(sortByDate).toHaveBeenLastCalledWith(
        {"sortBy": "date", "type": "SORT_BY_DATE"}
    );
});

test('should handle sortByAmount correctly', ()=>
{   
    const value ='amount';
    wrapper.find('select').simulate('change',{ 
    target: {value }});
    expect(sortByAmount).toHaveBeenLastCalledWith(
        {"sortBy": value, "type": "SORT_BY_AMOUNT"}
    );
});

test('should handle date changes correctly', ()=>
{   
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    // wrapper below will find the property in the DOM
    // then call the function associated with it, in the case below it will be the onDatesChange function.
    // then pass in the required parameter(s) (in this case an object containing startDate and endDate)
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus correctly', ()=>
{   
    const calendarFocused='endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});