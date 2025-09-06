const menuItems = [
    {
        id: 1,
        name: "Combo 2 Perros",
        description: "2 perros normales + refresco pequeño",
        price: 5.55,
        price_tienda: 1.57,
        downPayment: 2.25,
        weeklyPayment: 1.30,
        image: "perr.jpg"
    },
    {
        id: 2,
        name: "Combo 4 Perros Normales",
        description: "4 perros normales + refresco 1 litro",
        price: 9.90,
        price_tienda: 6.6,
        downPayment: 2.97,
        weeklyPayment: 2.31,
        image: "4pp.jpg"
    },
    {
        id: 3,
        name: "Pizza Margarita",
        description: "Pizza con salsa, muzzarella y Oregano",
        price: 5.25,
        price_tienda: 3.5,
        downPayment: 1.57,
        weeklyPayment: 1.22,
        image: "margarita.jpg"
    },
    {
        id: 4,
        name: "Pizza Mechada",
        description: "Pizza con carne mechada, Oregano y muzzarella",
        price: 9.75,
        price_tienda: 6,
        downPayment: 2.92,
        weeklyPayment: 2.27,
        image: "mechada.jpg"
    },
    {
        id: 5,
        name: "Pizza Pepperoni",
        description: "Pizza con pepperoni, oregano y muzzarella ",
        price: 6.75,
        price_tienda: 4.5,
        downPayment: 2.02,
        weeklyPayment: 1.57,
        image: "pepperini.png"
    },
    {
        id: 6,
        name: "Pizza Especial",
        description: "Pizza con jamón, maiz, oregano y muzzarella",
        price: 8.25,
        price_tienda: 5.5,
        downPayment: 2.48,
        weeklyPayment: 1.93,
        image: "margarita.webp"
    },
    {
        id: 7,
        name: "Pizza 3 Quesos",
        description: "Pizza con muzzarella,salsa,  queso amarilo y borde de queso",
        price: 8.25,
        price_tienda: 5.5,
        downPayment: 2.48,
        weeklyPayment: 1.93,
        image: "3_quesos.jpg"
    },
    {
        id: 8,
        name: "Hamburguesa Mac",
        description: "Hamburguesa especial Mac con carne, queso amarillo y salsa",
        price: 5.40,
        price_tienda: 0,
        downPayment: 1.62,
        weeklyPayment: 1.26,
        image: "h2.jpg"
    },
    {
        id: 9,
        name: "Hamburguesa Especial",
        description: "Pan, carne o pollo, queso o chuleta ahumada, queso amarillo, huevo, tocineta, pepinillo, maiz, vegetales, papas fritas y salsas",
        price: 10.80,
        price_tienda: 0,
        downPayment: 3.24,
        weeklyPayment: 2.52,
        image: "ha.jpg"
    },
    {
        id: 10,
        name: "Minipepito",
        description: "Pan, carne, pollo, chorizo, vegetales, maiz, papas fritas y salsas ",
        price: 8.98,
        price_tienda: 0,
        downPayment: 2.70,
        weeklyPayment: 2.10,
        image: "pepito.jpeg"
    },
    {
        id: 11,
        name: "3 Perros Normales",
        description: "Pan salchicha, cebolla, repollo, papitas, trio de salsa y salsas especiales",
        price: 6.00,
        price_tienda: 0,
        downPayment: 1.80,
        weeklyPayment: 1.40,
        image: "perro.webp"
    },
    {
        id: 12,
        name: "3 Perros Queso Fundido",
        description: "Pan salchicha, queso blanco, cebolla, repollo, papitas, trio de salsa y salsas especiales",
        price: 8.25,
        price_tienda: 0,
        downPayment: 2.48,
        weeklyPayment: 1.93,
        image: "queso_f.png"
    },
    {
        id: 13,
        name: "Pasticho",
        description: "Capas de pasta con carne molida, salsa bechamel y queso gratinado",
        price: 5.25,
        price_tienda: 0,
        downPayment: 1.57,
        weeklyPayment: 1.22,
        image: "pasticho.jpg"
    },
    {
        id: 14,
        name: "Ensalada Cesar Mediana",
        description: "Ensalada fresca con lechuga y aderezo especial",
        price: 7.49,
        price_tienda: 0,
        downPayment: 2.25,
        weeklyPayment: 1.75,
        image: "cesar.jpg"
    }
];
344
function createMenuItem(item) {
    return `
        <div class="menu-item-card" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">$${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="payment-info">
                    <div class="payment-title">💳 Crédito Disponible</div>
                    <div class="payment-details">
                        <div class="payment-detail">
                            <strong>Pago inicial:</strong> $${item.downPayment} (30%)
                        </div>
                        <div class="payment-detail">
                            <strong>3 cuotas:</strong> $${item.weeklyPayment} c/u
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = menuItems.map(item => createMenuItem(item)).join('');
}

// Add smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function () {
    renderMenu();

    // Add fade-in animation to menu items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe menu items
    setTimeout(() => {
        document.querySelectorAll('.menu-item-card').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    }, 100);
});