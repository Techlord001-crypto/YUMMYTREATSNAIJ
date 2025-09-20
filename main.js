let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({item, price});
    total += price;
    document.getElementById('cart-count').innerText = cart.length;
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = `${item} added to cart!`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

if(document.getElementById('cart-items')) {
    let container = document.getElementById('cart-items');
    if(cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(c => {
            let div = document.createElement('div');
            div.innerHTML = `<p>${c.item} - ₦${c.price}</p>`;
            container.appendChild(div);
        });
    }
    document.getElementById('total-price').innerText = total;
}

// Search functionality for menu page
if(document.getElementById('search')) {
    document.getElementById('search').addEventListener('input', function() {
        let query = this.value.toLowerCase();
        document.querySelectorAll('.menu-card').forEach(card => {
            let name = card.querySelector('h3').innerText.toLowerCase();
            card.style.display = name.includes(query) ? 'block' : 'none';
        });
    });
}