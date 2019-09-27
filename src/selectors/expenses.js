import moment from 'moment';

// timestamps (milliseconds)
// January 1st 1970 (UNIX epoch: start date of time)
// 33400: would be 33,400 milliseconds AFTER January 1st, 1970 (or 33.4 seconds after)
// -203 would be 203 milliseconds BEFORE January 1st, 1970 ( or .00203 seconds before)

// Get Visible Expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {  
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true ;


        // look at:
        // includes method
        // convert both strings to lower case

        // const lowerDescription = expense.description.toLowerCase();
        // const lowerText = text.toLowerCase();
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // console.log("I am in sortBy date if " + a.amount + " " + b.amount);
            return a.createdAt < b.createdAt ? 1 : -1;
        } else 
        { if (sortBy === 'amount'){
            // console.log("I am in sortBy amount if " + a.amount + " " + b.amount);
            return a.amount < b.amount ? 1 : -1; // Could also be written as: b.amount - a.amount (no ternary operator)
        }}
    });
};