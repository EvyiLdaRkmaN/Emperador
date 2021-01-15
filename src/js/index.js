

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

let visibleError = false;
const auth = (event) => {
    event.preventDefault();
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    console.log('email--',email.value);
    const password = document.getElementById('password');

    const p = document.createElement('p');
    p.className = 'text-danger';
    p.id = 'messageError';

    if (email.value == '' || password.value == '') {

        if (!visibleError) {
            p.textContent = 'Llene todos los campos';
            form.append(p);
            visibleError = true;
        } else {
            var error = document.getElementById('messageError');
            error.textContent = 'Llene todos los campos';
        }
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            // Signed in
            // ...
            console.log('then--->',user);
            window.location.href = 'src/pages/home.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            // ..
            if (!visibleError) {
                form.append(p);
                visibleError = true;
            }
            console.log(`error-->`, error);
            var error = document.getElementById('messageError');
            error.textContent = errorMessage(errorCode);
            
        });
}



const errorMessage = (code) => {
    switch (code) {
        case 'auth/wrong-password':
            return 'Contraseña o email no valido'
        case 'auth/invalid-email':
            return 'Email no valido'
        default:
            return `Error, codigo: ${code}`;
    }
}