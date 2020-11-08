import firebase from "firebase";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxrpjE3GizVfRcve8fREkASEsFo3BagI4",
  authDomain: "expensify-673f9.firebaseapp.com",
  databaseURL: "https://expensify-673f9.firebaseio.com",
  projectId: "expensify-673f9",
  storageBucket: "expensify-673f9.appspot.com",
  messagingSenderId: "642990906427",
  appId: "1:642990906427:web:b5767d91f45df6c65c501e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export  { firebase, database as default };

// //child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val()
//       })
//     })

//     console.log(expenses);
//   })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val()
//       })
//     })

//     console.log(expenses);
//   });

// database.ref('expenses').push(
//   {
//     description: 'I paid for my rent',
//     note: 'My rent',
//     amount: 4500,
//     createdAt: 95000
//   }
// )

// database.ref('notes/-MLcXSOFQZJiePMMM8Ts').update({
//   body: 'Buy ice-cream!'
// });

// database.ref('notes/-MLcXSOFQZJiePMMM8Ts').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Vue, Angular'
// })

// const firebaseNotes = {
//   notes: {
//     miau: {
//       title: 'au',
//       body: 'wof'
//     },
//     miau2: {
//       title: 'auau',
//       body: 'wofwof'
//     }
//   }
// }
// const notes = [
//   {
//     id: 12,
//     title: 'My note',
//     body: 'Note Nr. 1'
//   },
//   {
//     id: 15,
//     title: 'My note',
//     body: 'Note Nr. 2'
//   }
// ]

// database.ref('notes').set(notes);

// database.ref()
//   .on('value', (snapshot) => {
//     const value = snapshot.val();
//     const { name, job: { title, company } } = value;
//     console.log(`${name} yra ${title} ir dirba ${company} kompanijoje.`)
//   })

// setTimeout(() => {
//   database.ref('job/title').set('Indų plovėjas');
// }, 2000);

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val())
//   }, (e) => {
//     console.log("Error fetching data:", e)
//   })

// setTimeout(() => {
//   database.ref('age').set(100);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(89);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.log("Error fetching data:", e)
//   })


// database.ref()
//   .remove()
//   .then(() => {
//     console.log('successful');
//   })
//   .catch((e) => {
//     console.log('This failed:', e);
//   })


// database.ref().set({
//   name: "Teddy",
//   age: 22,
//   stressLevel: 999,
//   job: {
//     title: "Indų plovėjas",
//     company: "McDonalds"
//   },
//   location: {
//     city: 'Wilno',
//     country: 'Litva'
//   }
// }).then(() => {
//   console.log('data is saved');
// }).catch((e) => {
//   console.log('This is failed', e);
// })

// database.ref().update({
//   stressLevel: 9999999,
//   'job/company': 'Tagre',
//   'location/city': "Kawnas"
// }).then(() => {
//   console.log('Successful');
// }).catch((e) => {
//   console.log('Failed:', e)
// })

// database.ref('isSingle').remove();

// database.ref('age').set(420);
// database.ref('location/city').set('Kawnas');

// database.ref('attributes').set({
//   height: 180,
//   weight: 70
// }).then(() => {
//   console.log('Successful');
// }).catch((e) => {
//   console.log('This failed:', e);
// })