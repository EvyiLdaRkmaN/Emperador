
const viewProducts = document.getElementById('containerProducts');


const register = () => window.location.href = 'newProduct.html';




const designProduct = (name, price, desc, quality, image) => {
    const divPrincipal = document.createElement('div');
    divPrincipal.className = 'col-lg-4 col-md-6 mb-4';

    const divCard = document.createElement('div');
    divCard.className = 'card h-100';
    divPrincipal.appendChild(divCard);

    const img = document.createElement('img');

    img.src = '../images/700x400/' + image;;
    divCard.appendChild(img);

    const divBody = document.createElement('div');
    divBody.className = 'card-body';
    divCard.appendChild(divBody);

    const h4 = document.createElement('h4');
    h4.className = 'card-title';
    divBody.appendChild(h4);

    const nameProd = document.createElement('a');
    nameProd.textContent = name;
    nameProd.href = '#';
    h4.appendChild(nameProd);

    const h5 = document.createElement('h5');
    h5.textContent = '$' + price;
    divBody.appendChild(h5);

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = desc;
    divBody.appendChild(description);

    const divStarts = document.createElement('div');
    divStarts.className = 'card-footer';


    const small = document.createElement('small');
    small.className = 'text-muted';
    var starts = '';
    for (let index = 0; index < 5; index++) {
        if (index < quality) {
            starts += '★';
        } else {
            starts += '☆';
        }
    }
    small.textContent = starts;
    divStarts.appendChild(small);

    divCard.appendChild(divStarts);
    return divPrincipal;
};

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBL_DZ4m0MIpRhteyJj97HuIzilwVL5BWs",
    authDomain: "emperador-d35dd.firebaseapp.com",
    projectId: "emperador-d35dd"
});

var db = firebase.firestore();


db.collection("products").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const card = designProduct(data.name,data.price, data.desc, data.quality, data.image);;
        viewProducts.appendChild(card);
    });
});
