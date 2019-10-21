import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', ()=>
{   
    const emptyArray=[];
    const total = getExpensesTotal(emptyArray);
    expect(total).toEqual(0);
});

test('should sum expense array with just one item correctly', ()=>
{   
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toEqual(195);
});

test('should sum expense array with multiple expenses correctly', ()=>
{   
    const total = getExpensesTotal(expenses);
    expect(total).toEqual(114195);
});