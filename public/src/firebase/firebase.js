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

database.ref().set({
  name: "Teddy",
  age: 22,
  isSingle: false,
  location: {
    city: 'Wilno',
    country: 'Litva'
  }
});

database.ref('age').set(420);

database.ref('location/city').set('Kawnas');

database.ref('attributes').set({
  height: 180,
  weight: 70
});