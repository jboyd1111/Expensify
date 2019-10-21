import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state={
        calendarFocused: null
    };
    onDatesChange=({startDate, endDate}) =>
    {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused }));
    };
    onTextChange=(e) =>{
            this.props.setTextFilter(e.target.value); // you have access to the 'dispatch' function from your props
        };
    onSortChange= (e) =>
            {
                var selection=e.target.value;
                switch(selection){
                    case "date":
                    {
                        this.props.sortByDate(sortByDate(selection)); // you have access to the 'dispatch' function from your props
                        break;
                    }
                    case "amount":
                    {
                        this.props.sortByAmount(sortByAmount(selection)); // you have access to the 'dispatch' function from your props
                        break;
                    }
                }          
            };
render(){
    return        (
        <div>
            <input 
            type="text" 
            value={this.props.filters.text}
            onChange={this.onTextChange}
            />
            <select 
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
            startDate={this.props.filters.startDate}
            startDateId={"222"}
            endDate={this.props.filters.endDate}
            endDateId={"333"}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            showClearDates={true}
            />
        </div>
    );
}
};

const mapStateToProps = (state) => ({   
        filters:state.filters
});

const mapDispatchToProps=(dispatch)=> ({
    setTextFilter:(text) => dispatch(setTextFilter(text)),
    sortByDate:()=>dispatch(sortByDate()),
    sortByAmount:()=> dispatch(sortByAmount()),
    setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=>dispatch(setStartDate(endDate)),
});

export default  connect (mapStateToProps,mapDispatchToProps) (ExpenseListFilters); // This gives access
// to the Redux store to  ExpenseListFilters