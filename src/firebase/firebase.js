import * as firebase from 'firebase'; // takes all of the named exports from firebase and installs them
// on a variable called firebase. This is recommended by firebase

// These key values will be passed down from webpack.config.js
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:1014970371927:web:b2f9726c69e98e4b44f812"
  };


  // Initialize Firebase
  firebase.initializeApp(config);

  // // to test the connection
  const database = firebase.database();

  export {firebase, database as default };

  // //child_removed
  // database.ref('expenses').on('child_removed',(snapshot)=>{ // this fires when something gets removed
  //   console.log(snapshot.key,snapshot.val()); // we'll log which item got removed
  // });

  // // child_changed
  // database.ref('expenses').on('child_changed',(snapshot)=>{ // this fires when something  changes
  //   console.log(snapshot.key,snapshot.val()); // we'll log which item got removed
  // });


  //   // child_added
  //   database.ref('expenses').on('child_added',(snapshot)=>{ // this fires when something gets added
  //     console.log(snapshot.key,snapshot.val()); // we'll log which item got removed
  //   });

  // since firebase can't work with arrays we would use .push()
  // which makes firebase create a randomly-generated id for a new node
  // so next statement will add to the notes node. It will create an object
  // with some randomly-generated name, then list title and body as properties
  // database.ref('expenses').push({
  //   description: 'Food',
  //   note: '',
  //   amount: 556600,
  //   createdAt:109955
  // });

  // get data from DB one time
  // database.ref('expenses')
  // .once('value')
  // .then((snapshot)=>{
  //   const expenses=[];

  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({ // pushing items onto this new array NOT a push to the firebase DB
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses)
  // });

  // watch for changes in data
  // database.ref('expenses')
  // .on('value',(snapshot)=>{
  //   const expenses=[];

  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({ // pushing items onto this new array NOT a push to the firebase DB
  //       id:childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses)
  // });