// Object destructuring
// console.log('destructuring');
// const person ={
//     name: 'Jeff',
//     age: 54,
//     location: {
//        city: 'Eagan',
//         temp: 39
//     }
// };

// const {name='Anonymous', age} = person; // This syntax does the same thing as the 2 lines below:
// // const name = person.name;
// // const age = person.age;
// const {city, temp:temperature} = person.location;

// // console.log(`${name} is ${age}`)
// // console.log(`It's ${temperature} in ${city}`)

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin',
//     }
// };

// const {name:publisherName='Self-Published'} = book.publisher; // This will use the name 'Unknown'
// // if there is no 'name' field/value. You can test by toggling the 'name' line above
// // That line above will also rename the field 'name' to 'publisherName'
// console.log(publisherName);

// Array destructuring

// const address = ['1299 S. Juniper Street','Philadelphia','Pennsylvania','19147'];
// const [,city,state='New York'] = address; // will skip 'street' and 'zip' since we leave a blank for first item and don't
// // list the last item of the array.
// // 'New York' would be a default value
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50','$3.75'];
const [itemName,,mediumPrice]=item;
// console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${itemName} costs ${mediumPrice}`);