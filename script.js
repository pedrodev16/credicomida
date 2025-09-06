const menuItems = [
    {
        id: 1,
        name: "Combo 2 Perros Calientes",
        description: "2 perros calientes + refresco pequeño",
        price: 85,
        downPayment: 25,
        weeklyPayment: 20,
        image: "combo-clasico.png"
    },
    {
        id: 2,
        name: "Combo 4 Perros Normales",
        description: "4 perros normales + refresco 1 litro",
        price: 150,
        downPayment: 45,
        weeklyPayment: 35,
        image: "combo-familiar.png"
    },
    {
        id: 3,
        name: "Pizza Margarita",
        description: "Pizza con salsa de tomate, muzzarella y albahaca",
        price: 95,
        downPayment: 28,
        weeklyPayment: 22,
        image: "combo-vegetariano.png"
    },
    {
        id: 4,
        name: "Pizza Mechada",
        description: "Pizza con carne mechada, cebolla y muzzarella",
        price: 110,
        downPayment: 33,
        weeklyPayment: 26,
        image: "combo-clasico.png"
    },
    {
        id: 5,
        name: "Pizza Pepperoni",
        description: "Pizza con pepperoni y muzzarella",
        price: 100,
        downPayment: 30,
        weeklyPayment: 23,
        image: "combo-clasico.png"
    },
    {
        id: 6,
        name: "Pizza Especial",
        description: "Pizza con jamón, champiñones, pimiento y muzzarella",
        price: 120,
        downPayment: 36,
        weeklyPayment: 28,
        image: "combo-clasico.png"
    },
    {
        id: 7,
        name: "Pizza 3 Quesos",
        description: "Pizza con muzzarella, parmesano y queso azul",
        price: 105,
        downPayment: 31,
        weeklyPayment: 25,
        image: "combo-vegetariano.png"
    },
    {
        id: 8,
        name: "Hamburguesa Mac",
        description: "Hamburguesa especial Mac con carne, lechuga, tomate y salsa especial",
        price: 130,
        downPayment: 39,
        weeklyPayment: 30,
        image: "combo-clasico.png"
    },
    {
        id: 9,
        name: "Hamburguesa Especial",
        description: "Hamburguesa doble carne, queso, tocineta, lechuga y tomate",
        price: 140,
        downPayment: 42,
        weeklyPayment: 33,
        image: "combo-clasico.png"
    },
    {
        id: 10,
        name: "Minipepito",
        description: "Mini sandwich de carne con papas fritas",
        price: 65,
        downPayment: 19,
        weeklyPayment: 15,
        image: "combo-ninos.png"
    },
    {
        id: 11,
        name: "Perro Normal",
        description: "Perro caliente con salchicha, pan, salsa de tomate y mostaza",
        price: 35,
        downPayment: 10,
        weeklyPayment: 8,
        image: "combo-clasico.png"
    },
    {
        id: 12,
        name: "Perro Queso Fundido",
        description: "Perro caliente con queso fundido y salchicha",
        price: 45,
        downPayment: 13,
        weeklyPayment: 11,
        image: "combo-clasico.png"
    },
    {
        id: 13,
        name: "Pasticho",
        description: "Capas de pasta con carne molida, salsa bechamel y queso gratinado",
        price: 85,
        downPayment: 25,
        weeklyPayment: 20,
        image: "combo-clasico.png"
    },
    {
        id: 14,
        name: "Ensalada Sesal",
        description: "Ensalada fresca con lechuga, tomate, zanahoria y aderezo especial",
        price: 45,
        downPayment: 13,
        weeklyPayment: 11,
        image: "combo-vegetariano.png"
    }
];

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
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
    
    // Add fade-in animation to menu items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
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