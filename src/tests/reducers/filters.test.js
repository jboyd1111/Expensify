import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect (state).toEqual({
        text: '',
        sortBy: 'date',
        startDate:moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount',()=>
{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date',()=>
{   
    const currentState={
        text:'',
        startDate:undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action ={type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState,action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter',()=>
{
    const action ={text: 'Here is some text',type:'SET_TEXT_FILTER'};
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe('Here is some text');
});

test('should set startDate filter',()=>
{
    const action ={startDate: moment().startOf('month'),type:'SET_START_DATE'}; 
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set endDate filter',()=>
{
    const endDate=  moment().endOf('month');
    const action ={endDate,type:'SET_START_DATE'};
    const state = filtersReducer(undefined,action); 
    expect(state.endDate).toEqual(endDate);
});