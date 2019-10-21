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
    },0);