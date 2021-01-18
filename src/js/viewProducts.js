const firebase = require("firebase");

const viewProducts = document.getElementById('containerProducts');


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBL_DZ4m0MIpRhteyJj97HuIzilwVL5BWs",
    authDomain: "emperador-d35dd.firebaseapp.com",
    projectId: "emperador-d35dd"
});

var db = firebase.firestore();


// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });