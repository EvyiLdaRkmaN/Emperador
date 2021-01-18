// Initialize Cloud Firestore through Firebase

firebase.initializeApp({
    apiKey: "AIzaSyBL_DZ4m0MIpRhteyJj97HuIzilwVL5BWs",
    authDomain: "emperador-d35dd.firebaseapp.com",
    projectId: "emperador-d35dd"
});

var db = firebase.firestore();



const addProduct = (event) => {
    event.preventDefault();
    console.log('AddProduct')
    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const desc = document.getElementById('description').value;
    const quality = document.getElementById('productQuality').options.selectedIndex;
    const selectImage = document.getElementById('image').options.selectedIndex;

    
    if (name == '' || price == '' || desc == '' || quality == -1 || selectImage == -1) {
        const msError = document.getElementById('errorMessage');
        msError.textContent = 'Todos los campos son requeridos.'
        return;
    }
    
    let image = 'mueble_'+(selectImage+1)+'.jpeg';
    db.collection("products").add({
        name,
        price,
        desc,
        quality,
        image
    })
        .then(function (docRef) {
            window.location.replace('./home.html');        
        })
        .catch(function (error) {
            const msError = document.getElementById('errorMessage');
            msError.textContent = 'Error al guardar: ',error;
        });


    //remplazar por pantalla home
};


