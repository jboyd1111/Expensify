import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate } from '../../actions/filters';


test('should generate sortByDate action object', ()=>{
      expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('should generate sortByAmount action object', ()=>{
    const action = sortByAmount('AMOUNT');
    expect(action ).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'AMOUNT'
    });
});

test('should generate setStartDate action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action ).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate setEndDate action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action ).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should set up default setTextFilter action object', ()=>{
    const action = setTextFilter();
    expect(action ).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set up setTextFilter action object by passing in some text', ()=>{
    const action = setTextFilter('hello');
    expect(action ).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'hello'
    });
});