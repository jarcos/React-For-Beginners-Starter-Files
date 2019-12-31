import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD0VQAPuIo6Qo9P4k80nEjlPI7s3gaVdxs',
  authDomain: 'catch-of-the-day-af5a0.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-af5a0.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
