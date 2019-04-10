import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB-f13ZNFRo5RnbIgnRZBcQTAF9d3FFVlY",
    authDomain: "expense-manager-6c67b.firebaseapp.com",
    databaseURL: "https://expense-manager-6c67b.firebaseio.com",
    projectId: "expense-manager-6c67b",
    storageBucket: "expense-manager-6c67b.appspot.com",
    messagingSenderId: "944742516266"
};
  
firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: ''    
});
