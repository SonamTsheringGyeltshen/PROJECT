function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Lubricants',
        image:'lubricants.jpg',
        card:"Nu",
        price: 1800
    },
    {
        id: 2,
        name: 'Grease',
        image: 'grease.webp',
        card:"Nu",
        price: 888
    },
    {
        id: 3,
        name: 'Suspension oil',
        image: 'suspension oil.webp',
        card:"Nu",
        price: 3376
    },
    {
        id: 4,
        name: 'Brake oil',
        image: 'brake oil.webp',
        card:"Nu",
        price: 2800
    },
    {
        id: 5,
        name: 'Bike cleaning',
        image: 'cleaning.jpg',
        card:"Nu",
        price: 3343
    },
    
    {
        id: 6,
        name: 'cleaners',
        image: 'spray oil.webp',
        card:"Nu",
        price: 2000
    },
    {
        id: 7,
        name: 'Brushes and Sponges',
        image: 'brushes.webp',
        card:"Nu",
        price: 2500
    },
    {
        id: 8,
        name: 'Other Accessories',
        image: 'accessories.webp',
        card:"Nu",
        price: 5000
    },
    {
        id: 9,
        name: 'Bike tire maintenance',
        image: 'bike tire.webp',
        card:"Nu",
        price: 2600
    },
    {
        id: 10,
        name: 'Tubeless kit and liquid',
        image: 'tubeless kit.webp',
        card:"Nu",
        price: 1800
    },
    {
        id: 11,
        name: 'Tubeless Repair kit',
        image: 'tubeless repair.webp',
        card:"Nu",
        price: 1500
    },
    
    {
        id: 12,
        name: 'Patches',
        image: 'patches.webp',
        card:"Nu",
        price: 800
    },
    {
        id: 13,
        name: 'Valves and extension',
        image: 'valves.webp',
        card:"Nu",
        price: 600
    },
    
    {
        id: 14,
        name: 'Tire Levers',
        image: 'tire levers.webp',
        card:"Nu",
        price: 1200
    },
    {
        id: 15,
        name: 'Two sided tape and rim',
        image: 'sided tap.webp',
        card:"Nu",
        price: 2700
    },
    {
        id: 16,
        name: 'Pumps',
        image: 'pumps.jpg',
        card:"Nu",
        price: 3200
    },
    {
        id: 17,
        name: 'Floor pumps',
        image: 'floor pumps.webp',
        card:"Nu",
        price: 3100
    },
    {
        id: 18,
        name: 'Mini pumps',
        image: 'mini pumps.webp',
        card:"Nu",
        price: 1900
    },
    {
        id: 19,
        name: 'Multi-Function Tools',
        image: 'multi tools.webp',
        card:"Nu",
        price: 1800
    },
    {
        id: 20,
        name: 'Clothing Care',
        image: 'clothing tools.jpg',
        card:"Nu",
        price: 900
    },
    {
        id: 21,
        name: 'Torque Wrench',
        image: 'torque.webp',
        card:"Nu",
        price: 500
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="title">${value.card}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.card}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}