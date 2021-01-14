

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL_DZ4m0MIpRhteyJj97HuIzilwVL5BWs",
    authDomain: "emperador-d35dd.firebaseapp.com",
    projectId: "emperador-d35dd",
    storageBucket: "emperador-d35dd.appspot.com",
    messagingSenderId: "603545058654",
    appId: "1:603545058654:web:f4c6207a34284efa59a3cf",
    measurementId: "G-X33ZXYJ6E8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = (event) => {
    event.preventDefault();
    const email = document.getElementById('email');
    console.log(email.value);
    const password = document.getElementById('password');
    console.log(password.value);
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            // Signed in
            // ...
            console.log(`then-->${user}`);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(`error-->${erro}`);
        });
}
