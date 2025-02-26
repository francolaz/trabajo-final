// Validación del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
});

// Validación del formulario para trabajar con nosotros
document.getElementById('work-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu interés en trabajar con nosotros. Revisaremos tu solicitud y nos pondremos en contacto contigo.');
});

// Carrito de compras (simulación)
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    // Limpiar el carrito
    cartItems.innerHTML = '';

    // Agregar productos al carrito
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Actualizar el total
    cartTotal.textContent = `Total: $${total}`;
}

// Ejemplo de uso en el catálogo
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        addToCart(productName, productPrice);
    });
});

// Animación de desplazamiento suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});






