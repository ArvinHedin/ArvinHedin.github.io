const services = [
    {
        name: 'Klippning',
        description: 'En professionell klippning för både dam och herr.',
        image: 'klippning.jpeg',
        price: 350
    },
    {
        name: 'Färgning',
        description: 'Färgning av håret för ett fräscht resultat.',
        image: 'styling.png',
        price: 550
    },
    {
        name: 'Styling',
        description: 'Hårstyling för olika tillfällen.',
        image: 'styling.png',
        price: 400
    }
];

const serviceList = document.getElementById('service-list');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

services.forEach(service => {
    const card = document.createElement('div');
    card.classList.add('col-md-4');

    card.innerHTML = `
        <div class="service-card">
            <img src="${service.image}" alt="${service.name}">
            <div class="service-card-body">
                <h5>${service.name}</h5>
                <p>${service.description}</p>
                <p><strong>${service.price} kr</strong></p>
                <button onclick="addToCart('${service.name}', ${service.price})">Lägg till i kundvagn</button>
            </div>
        </div>
    `;

    serviceList.appendChild(card);
});

function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('cart-item');
        listItem.textContent = `${item.name} - ${item.price} kr`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = `Totalt: ${total} kr`;
}
