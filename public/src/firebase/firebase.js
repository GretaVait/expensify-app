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
// database.ref()
//   .remove()
//   .then(() => {
//     console.log('successful');
//   })
//   .catch((e) => {
//     console.log('This failed:', e);
//   })


database.ref().set({
  name: "Teddy",
  age: 22,
  stressLevel: 999,
  job: {
    title: "Indų plovėjas",
    company: "McDonalds"
  },
  location: {
    city: 'Wilno',
    country: 'Litva'
  }
}).then(() => {
  console.log('data is saved');
}).catch((e) => {
  console.log('This is failed', e);
})

database.ref().update({
  stressLevel: 9999999,
  'job/company': 'Tagre',
  'location/city': "Kawnas"
}).then(() => {
  console.log('Successful');
}).catch((e) => {
  console.log('Failed:', e)
})

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