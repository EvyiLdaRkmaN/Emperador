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
const register = (event) => {
    event.preventDefault();
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const repitPassword = document.getElementById('repitPassword');

    const p = document.createElement('p');
    p.textContent = 'Las contraseñas no coinciden';
    p.className = 'text-danger';
    p.id = 'messageError';
    if (password.value != repitPassword.value) {

        if (!visibleError) {
            form.append(p);
            visibleError = true;
        }else{
            var error = document.getElementById('messageError');
            error.textContent = 'Las contraseñas no coinciden';
        }
        return;
    }

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
            if (!visibleError) {
                form.append(p);
                visibleError = true;
            }
            var error = document.getElementById('messageError');
            error.textContent = `${errorMessage}`;
            console.log(`error-->${errorMessage}`);
        });
}


