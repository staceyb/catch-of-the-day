import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6Vzr1SiEFbcyAK_0tQ_d7Z50fcelfBgc",
    authDomain: "catch-of-the-day-anastas-fb063.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-anastas-fb063.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

//this is a default export
export default base;