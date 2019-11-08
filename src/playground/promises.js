const promise = new Promise((resolve, reject)=>
{
    setTimeout(()=>{
        // resolve('This is my resolved data');
        resolve({ // can resolve by passing an object
            name:'Jeff',
            age:55
        });
        // reject('Something went wrong');
    },5000); // 5 seconds
  });

  console.log('before');

promise.then((data)=>{ // then lets us register a callback when our promise resolves (i.e. returns without error)
    console.log('1',data); // the 'data' that 'then' receives comes from the 'resolve' call above, i.e. a string in this case
    // return 'some data';
    // Can return a promise: promise chaining
  return  new Promise((resolve, reject)=>
{
    setTimeout(()=>{
        // resolve('This is my resolved data');
        resolve('This is my other promise');
        // reject('Something went wrong');
    },5000); // 5 seconds
  });
}).then((str)=>{
    console.log('does this run?',str);
}).catch((error)=>
{
    console.log('error: ',error)
});

console.log('after');
