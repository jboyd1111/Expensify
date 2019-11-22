 // reduce: basically reduce a collection, like an array
// down to a single value 
//  reduce() method executes a provided function for each value of the array (from left-to-right).


// Jeff, 2 ways to write this test:

// 0 + 109500 + 195 + 4500
// export default (expenses)=>{
//     const sumTotal=
//     expenses.reduce((total,b)=> {
//         return total+ b.amount;
//     },0);
//     console.log("sum total = "+sumTotal);
//     return sumTotal;
// }

// 0 + 109500 + 195 + 4500
export default (expenses)=>
    expenses.reduce((total,b)=> {
        return total+ b.amount;
    },0); // The 0 sets the initial value for 'total' to 0, so if there are no expense values, it will return 0 by default