import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // ==================== PRODUCTS DATABASE ====================
        const products = [
            // Camisetas
            { id: 1, name: 'Camiseta Urban Classic', price: 39.95, originalPrice: null, category: 'camisetas', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=533&fit=crop', badge: 'Nuevo', rating: 4.8, reviews: 45, description: 'Camiseta de algodón 100% orgánico con corte oversize. Perfecta para el día a día con un toque urbano.', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Negro', 'Blanco', 'Gris'] },
            { id: 2, name: 'Camiseta Oversize Premium', price: 44.95, originalPrice: null, category: 'camisetas', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=533&fit=crop', badge: null, rating: 4.9, reviews: 128, description: 'Nuestra camiseta más vendida. Corte oversize premium con acabado suave al tacto.', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Negro', 'Blanco', 'Beige', 'Verde'] },
            { id: 3, name: 'Camiseta Graphic Street', price: 49.95, originalPrice: null, category: 'camisetas', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=533&fit=crop', badge: null, rating: 4.7, reviews: 67, description: 'Diseño exclusivo con gráfico serigrafiado. Edición limitada de nuestra colección urbana.', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Negro', 'Blanco'] },
            { id: 4, name: 'Camiseta Minimal Logo', price: 34.95, originalPrice: null, category: 'camisetas', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=533&fit=crop', badge: null, rating: 4.6, reviews: 89, description: 'Diseño minimalista con logo bordado. Perfecta para combinar con cualquier outfit.', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], colors: ['Negro', 'Blanco', 'Gris', 'Azul'] },
            // Pantalones
            { id: 5, name: 'Cargo Pants Tactical', price: 71.96, originalPrice: 89.95, category: 'pantalones', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=533&fit=crop', badge: '-20%', rating: 4.8, reviews: 56, description: 'Pantalón cargo con múltiples bolsillos. Tejido resistente con acabado tactical.', sizes: ['28', '30', '32', '34', '36'], colors: ['Negro', 'Verde Militar', 'Beige'] },
            { id: 6, name: 'Jeans Wide Leg', price: 69.95, originalPrice: null, category: 'pantalones', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=533&fit=crop', badge: null, rating: 4.8, reviews: 95, description: 'Vaqueros de corte ancho con lavado vintage. El fit perfecto para el street style.', sizes: ['28', '30', '32', '34', '36', '38'], colors: ['Azul Claro', 'Azul Oscuro', 'Negro'] },
            { id: 7, name: 'Jogger Premium', price: 59.95, originalPrice: null, category: 'pantalones', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=533&fit=crop', badge: null, rating: 4.7, reviews: 78, description: 'Jogger de algodón premium con puños elásticos. Comodidad y estilo en uno.', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Negro', 'Gris', 'Beige'] },
            { id: 8, name: 'Pantalón Chino Relaxed', price: 64.95, originalPrice: null, category: 'pantalones', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=533&fit=crop', badge: 'Nuevo', rating: 4.5, reviews: 34, description: 'Chino de corte relajado en algodón. Versatilidad para cualquier ocasión.', sizes: ['28', '30', '32', '34', '36'], colors: ['Beige', 'Negro', 'Azul Marino'] },
            // Accesorios
            { id: 9, name: 'Gorra Snapback Logo', price: 29.95, originalPrice: null, category: 'accesorios', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=533&fit=crop', badge: null, rating: 4.9, reviews: 112, description: 'Gorra snapback con logo bordado. Ajuste perfecto con cierre trasero.', sizes: ['Única'], colors: ['Negro', 'Blanco', 'Gris'] },
            { id: 10, name: 'Hoodie Essential Black', price: 79.95, originalPrice: null, category: 'accesorios', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&h=533&fit=crop', badge: null, rating: 4.9, reviews: 156, description: 'Sudadera con capucha de algodón premium. El básico imprescindible.', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], colors: ['Negro', 'Gris', 'Blanco'] },
            { id: 11, name: 'Hoodie Street Edition', price: 89.95, originalPrice: null, category: 'accesorios', image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=400&h=533&fit=crop', badge: null, rating: 4.9, reviews: 87, description: 'Edición especial de nuestra hoodie más popular. Diseño exclusivo.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Negro', 'Beige'] },
            { id: 12, name: 'Riñonera Urban', price: 34.95, originalPrice: null, category: 'accesorios', image: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=533&fit=crop', badge: null, rating: 4.6, reviews: 43, description: 'Riñonera compacta con múltiples compartimentos. Ideal para el día a día.', sizes: ['Única'], colors: ['Negro', 'Gris'] },
        ];

        // ==================== STATE ====================
        let cart = [];
        let currentUser = null;
        let wishlist = [];
        let currentCategory = 'todos';
        let currentProduct = null;

        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', function() {
            renderFeaturedProducts();
            renderBestsellers();
            updateCartUI();
            initCountdown();
            
            // Check for saved user
            const savedUser = localStorage.getItem('segarroUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
            }
            
            // Check for saved cart
            const savedCart = localStorage.getItem('segarroCart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                updateCartUI();
            }
            
            // Check for saved wishlist
            const savedWishlist = localStorage.getItem('segarroWishlist');
            if (savedWishlist) {
                wishlist = JSON.parse(savedWishlist);
            }
        });

        // ==================== NAVIGATION ====================
        function navigateTo(section) {
            closeMobileMenu();
            closeAllModals();
            
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function closeAllModals() {
            document.getElementById('cart-sidebar').classList.add('hidden');
            document.getElementById('account-modal').classList.add('hidden');
            document.getElementById('product-modal').classList.add('hidden');
            document.getElementById('category-modal').classList.add('hidden');
            document.getElementById('checkout-modal').classList.add('hidden');
            document.getElementById('info-modal').classList.add('hidden');
        }

        // ==================== MOBILE MENU ====================
        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        function closeMobileMenu() {
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // ==================== CART ====================
        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            sidebar.classList.toggle('hidden');
        }

        function addToCart(productId, selectedSize = null, selectedColor = null) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const size = selectedSize || (product.sizes ? product.sizes[0] : 'Única');
            const color = selectedColor || (product.colors ? product.colors[0] : 'Negro');
            
            const existingItem = cart.find(item => 
                item.id === productId && item.size === size && item.color === color
            );
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: productId,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    size: size,
                    color: color,
                    quantity: 1
                });
            }
            
            saveCart();
            updateCartUI();
            showToast(`${product.name} añadido al carrito`, 'success');
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            saveCart();
            updateCartUI();
        }

        function updateQuantity(index, change) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                saveCart();
                updateCartUI();
            }
        }

        function saveCart() {
            localStorage.setItem('segarroCart', JSON.stringify(cart));
        }

        function updateCartUI() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cart-count').textContent = count;
            
            const modalCount = document.getElementById('cart-count-modal');
            if (modalCount) modalCount.textContent = count;
            
            const cartItems = document.getElementById('cart-items');
            const cartSubtotal = document.getElementById('cart-subtotal');
            const cartTotal = document.getElementById('cart-total');
            const cartShipping = document.getElementById('cart-shipping');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-sm text-neutral-500 text-center py-8">Tu carrito está vacío</p>';
                cartSubtotal.textContent = '0,00 €';
                cartTotal.textContent = '0,00 €';
                cartShipping.textContent = 'Calculado en checkout';
            } else {
                let html = '';
                let total = 0;
                
                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    html += `
                        <div class="flex gap-4 py-4 border-b border-neutral-100">
                            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                            <div class="flex-1">
                                <h4 class="text-sm font-medium text-neutral-900">${item.name}</h4>
                                <p class="text-xs text-neutral-500 mt-1">${item.size} · ${item.color}</p>
                                <div class="flex items-center justify-between mt-2">
                                    <div class="flex items-center gap-2">
                                        <button onclick="updateQuantity(${index}, -1)" class="w-6 h-6 flex items-center justify-center bg-neutral-100 rounded text-neutral-600 hover:bg-neutral-200">
                                            <span class="iconify w-3 h-3" data-icon="lucide:minus" data-width="12"></span>
                                        </button>
                                        <span class="text-sm font-medium w-6 text-center">${item.quantity}</span>
                                        <button onclick="updateQuantity(${index}, 1)" class="w-6 h-6 flex items-center justify-center bg-neutral-100 rounded text-neutral-600 hover:bg-neutral-200">
                                            <span class="iconify w-3 h-3" data-icon="lucide:plus" data-width="12"></span>
                                        </button>
                                    </div>
                                    <span class="text-sm font-semibold text-neutral-900">${itemTotal.toFixed(2).replace('.', ',')} €</span>
                                </div>
                            </div>
                            <button onclick="removeFromCart(${index})" class="p-1 text-neutral-400 hover:text-red-500 self-start">
                                <span class="iconify w-4 h-4" data-icon="lucide:x" data-width="16"></span>
                            </button>
                        </div>
                    `;
                });
                
                cartItems.innerHTML = html;
                cartSubtotal.textContent = total.toFixed(2).replace('.', ',') + ' €';
                
                const shipping = total >= 50 ? 0 : 4.95;
                cartShipping.textContent = shipping === 0 ? 'Gratis' : shipping.toFixed(2).replace('.', ',') + ' €';
                cartTotal.textContent = (total + shipping).toFixed(2).replace('.', ',') + ' €';
            }
        }

        function proceedToCheckout() {
            if (cart.length === 0) {
                showToast('Tu carrito está vacío', 'error');
                return;
            }
            
            toggleCart();
            openCheckoutModal();
        }

        // ==================== CHECKOUT ====================
        function openCheckoutModal() {
            renderCheckoutItems();
            document.getElementById('checkout-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeCheckoutModal() {
            document.getElementById('checkout-modal').classList.add('hidden');
            document.body.style.overflow = '';
        }

        function renderCheckoutItems() {
            const container = document.getElementById('checkout-items');
            let total = 0;
            let html = '';
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                html += `
                    <div class="flex gap-4">
                        <div class="relative">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                            <span class="absolute -top-2 -right-2 w-5 h-5 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center">${item.quantity}</span>
                        </div>
                        <div class="flex-1">
                            <p class="text-sm font-medium text-neutral-900">${item.name}</p>
                            <p class="text-xs text-neutral-500">${item.size} · ${item.color}</p>
                        </div>
                        <p class="text-sm font-medium text-neutral-900">${itemTotal.toFixed(2).replace('.', ',')} €</p>
                    </div>
                `;
            });
            
            container.innerHTML = html;
            
            const shipping = total >= 50 ? 0 : 4.95;
            document.getElementById('checkout-subtotal').textContent = total.toFixed(2).replace('.', ',') + ' €';
            document.getElementById('checkout-shipping').textContent = shipping === 0 ? 'Gratis' : shipping.toFixed(2).replace('.', ',') + ' €';
            document.getElementById('checkout-total').textContent = (total + shipping).toFixed(2).replace('.', ',') + ' €';
        }

        function handleCheckout(e) {
            e.preventDefault();
            
            // Simulate payment processing
            showToast('Procesando pago...', 'info');
            
            setTimeout(() => {
                cart = [];
                saveCart();
                updateCartUI();
                closeCheckoutModal();
                showToast('¡Pedido realizado con éxito!', 'success');
                
                // Show order confirmation
                setTimeout(() => {
                    showToast('Recibirás un email de confirmación', 'info');
                }, 2000);
            }, 2000);
        }

        // ==================== PRODUCTS ====================
        function renderFeaturedProducts() {
            const container = document.getElementById('featured-products');
            const featured = products.slice(0, 4);
            
            container.innerHTML = featured.map(product => createProductCard(product)).join('');
        }

        function renderBestsellers() {
            const container = document.getElementById('bestsellers');
            const bestsellers = products.filter(p => p.reviews > 80).slice(0, 3);
            
            container.innerHTML = bestsellers.map((product, index) => `
                <div class="flex gap-4 p-4 bg-neutral-50 rounded-2xl hover:bg-neutral-100 transition-colors group cursor-pointer" onclick="openProductModal(${product.id})">
                    <div class="w-24 h-24 md:w-32 md:h-32 bg-neutral-200 rounded-xl overflow-hidden flex-shrink-0">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col justify-between py-1 flex-1">
                        <div>
                            <span class="text-xs text-amber-600 font-medium">#${index + 1} Más vendido</span>
                            <h3 class="text-base font-semibold text-neutral-900 mt-1">${product.name}</h3>
                            <div class="flex items-center gap-1 mt-1">
                                <span class="iconify w-3.5 h-3.5 text-amber-400" data-icon="lucide:star" data-width="14" style="stroke-width: 1.5; fill: currentColor;"></span>
                                <span class="text-xs text-neutral-600">${product.rating} (${product.reviews} reseñas)</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-lg font-bold text-neutral-900">${product.price.toFixed(2).replace('.', ',')} €</p>
                            <button onclick="event.stopPropagation(); addToCart(${product.id})" class="p-2 bg-neutral-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-800">
                                <span class="iconify w-4 h-4" data-icon="lucide:plus" data-width="16" style="stroke-width: 1.5;"></span>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function createProductCard(product) {
            const badgeHtml = product.badge ? 
                `<span class="absolute top-3 left-3 px-2 py-1 ${product.badge.includes('%') ? 'bg-amber-500' : 'bg-neutral-900'} text-white text-xs font-medium rounded">${product.badge}</span>` : '';
            
            const priceHtml = product.originalPrice ? 
                `<div class="flex items-center gap-2">
                    <p class="text-sm font-semibold text-neutral-900">${product.price.toFixed(2).replace('.', ',')} €</p>
                    <p class="text-sm text-neutral-400 line-through">${product.originalPrice.toFixed(2).replace('.', ',')} €</p>
                </div>` :
                `<p class="text-sm font-semibold text-neutral-900">${product.price.toFixed(2).replace('.', ',')} €</p>`;
            
            return `
                <div class="group">
                    <div class="relative aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-4 cursor-pointer" onclick="openProductModal(${product.id})">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        ${badgeHtml}
                        <button onclick="event.stopPropagation(); addToCart(${product.id})" class="absolute bottom-3 left-3 right-3 py-3 bg-white/95 backdrop-blur-sm text-neutral-900 text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-neutral-900 hover:text-white">
                            Añadir al carrito
                        </button>
                    </div>
                    <h3 class="text-sm font-medium text-neutral-900 mb-1 cursor-pointer hover:underline" onclick="openProductModal(${product.id})">${product.name}</h3>
                    ${priceHtml}
                </div>
            `;
        }

        // ==================== CATEGORY VIEW ====================
        function showCategory(category, isOffer = false) {
            currentCategory = category;
            closeMobileMenu();
            
            // Update title
            const titles = {
                'todos': isOffer ? 'Ofertas - 25% descuento' : 'Todos los productos',
                'camisetas': 'Camisetas',
                'pantalones': 'Pantalones',
                'accesorios': 'Accesorios'
            };
            document.getElementById('category-title').textContent = titles[category] || 'Productos';
            
            // Update filter buttons
            document.quer
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="bg-neutral-900 text-white py-2.5 text-center">
<p className="text-xs md:text-sm font-medium">Envío gratis a partir de 50€ · Usa el código <span className="font-semibold text-amber-400 cursor-pointer" onclick="copyCode('STREET15')">STREET15</span> y obtén un 15% de descuento</p>
</div>

<header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 md:h-20">

<a className="text-xl md:text-2xl font-bold tracking-tighter text-neutral-900" href="#" onclick="navigateTo('inicio'); return false;">SEGARRO</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#" onclick="navigateTo('inicio'); return false;">Inicio</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#" onclick="navigateTo('tienda'); return false;">Tienda</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#" onclick="showCategory('camisetas'); return false;">Camisetas</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#" onclick="showCategory('pantalones'); return false;">Pantalones</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#" onclick="showCategory('accesorios'); return false;">Accesorios</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#" onclick="navigateTo('contacto'); return false;">Contacto</a>
</nav>

<div className="flex items-center gap-4">
<button className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors" onclick="openAccountModal()">
<span className="iconify w-5 h-5" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors" onclick="toggleCart()">
<span className="iconify w-5 h-5" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center font-medium" id="cart-count">0</span>
</button>
<button className="lg:hidden p-2 text-neutral-600" onclick="toggleMobileMenu()">
<span className="iconify w-6 h-6" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden bg-white border-t border-neutral-100" id="mobile-menu">
<nav className="flex flex-col py-4 px-4">
<a className="py-3 text-base font-medium text-neutral-600 hover:text-neutral-900 border-b border-neutral-50" href="#" onclick="navigateTo('inicio'); closeMobileMenu(); return false;">Inicio</a>
<a className="py-3 text-base font-medium text-neutral-600 hover:text-neutral-900 border-b border-neutral-50" href="#" onclick="navigateTo('tienda'); closeMobileMenu(); return false;">Tienda</a>
<a className="py-3 text-base font-medium text-neutral-600 hover:text-neutral-900 border-b border-neutral-50" href="#" onclick="showCategory('camisetas'); closeMobileMenu(); return false;">Camisetas</a>
<a className="py-3 text-base font-medium text-neutral-600 hover:text-neutral-900 border-b border-neutral-50" href="#" onclick="showCategory('pantalones'); closeMobileMenu(); return false;">Pantalones</a>
<a className="py-3 text-base font-medium text-neutral-600 hover:text-neutral-900 border-b border-neutral-50" href="#" onclick="showCategory('accesorios'); closeMobileMenu(); return false;">Accesorios</a>
<a className="py-3 text-base font-medium text-neutral-600 hover:text-neutral-900 border-b border-neutral-50" href="#" onclick="navigateTo('contacto'); closeMobileMenu(); return false;">Contacto</a>
<a className="py-3 text-base font-medium text-neutral-600 hover:text-neutral-900" href="#" onclick="openAccountModal(); closeMobileMenu(); return false;">Mi cuenta</a>
</nav>
</div>
</header>

<main id="main-content">

<section className="relative bg-neutral-50 overflow-hidden" id="inicio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left">
<span className="inline-block px-3 py-1 bg-neutral-900 text-white text-xs font-medium rounded-full mb-6">Nueva colección 2024</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
                        Define tu estilo.<br/>
<span className="text-neutral-500">Domina la calle.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0">
                        Streetwear premium diseñado para quienes no siguen tendencias, las crean. Calidad sin compromisos.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-all duration-200 shadow-lg shadow-neutral-900/20" onclick="navigateTo('tienda')">
                            Comprar ahora
                            <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-sm font-semibold rounded-lg border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200" onclick="navigateTo('sobre')">
                            Conocer la marca
                        </button>
</div>
</div>
<div className="relative">
<div className="aspect-square bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-3xl overflow-hidden">
<img alt="Streetwear Model" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&amp;h=800&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
<span className="iconify w-6 h-6 text-green-600" data-icon="lucide:check-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">+2.500 pedidos</p>
<p className="text-xs text-neutral-500">este mes</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify w-6 h-6 text-neutral-700" data-icon="lucide:users" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">15K+</p>
<p className="text-sm text-neutral-500 mt-1">Clientes satisfechos</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify w-6 h-6 text-neutral-700" data-icon="lucide:star" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">4.9/5</p>
<p className="text-sm text-neutral-500 mt-1">Calidad premium</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify w-6 h-6 text-neutral-700" data-icon="lucide:truck" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">24-48h</p>
<p className="text-sm text-neutral-500 mt-1">Envío rápido</p>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
<span className="iconify w-6 h-6 text-neutral-700" data-icon="lucide:refresh-cw" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">30 días</p>
<p className="text-sm text-neutral-500 mt-1">Devolución gratis</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-16 md:py-24" id="tienda">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">Explora las categorías</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">Encuentra tu próximo look entre nuestra selección de streetwear premium.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<button className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 text-left" onclick="showCategory('camisetas')">
<img alt="Camisetas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
<h3 className="text-2xl font-bold text-white mb-2">Camisetas</h3>
<p className="text-neutral-300 text-sm mb-4">12 productos</p>
<span className="inline-flex items-center text-white text-sm font-medium group-hover:underline">
                            Ver productos
                            <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</button>

<button className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 text-left" onclick="showCategory('pantalones')">
<img alt="Pantalones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
<h3 className="text-2xl font-bold text-white mb-2">Pantalones</h3>
<p className="text-neutral-300 text-sm mb-4">8 productos</p>
<span className="inline-flex items-center text-white text-sm font-medium group-hover:underline">
                            Ver productos
                            <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</button>

<button className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 text-left" onclick="showCategory('accesorios')">
<img alt="Accesorios" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
<h3 className="text-2xl font-bold text-white mb-2">Accesorios</h3>
<p className="text-neutral-300 text-sm mb-4">10 productos</p>
<span className="inline-flex items-center text-white text-sm font-medium group-hover:underline">
                            Ver productos
                            <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
</div>
</button>
</div>
</div>
</section>

<section className="bg-neutral-50 py-16 md:py-24" id="productos-destacados">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">Productos destacados</h2>
<p className="text-lg text-neutral-600">Las piezas favoritas de nuestra comunidad.</p>
</div>
<button className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors" onclick="showCategory('todos')">
                    Ver todos
                    <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" id="featured-products">

</div>
</div>
</section>

<section className="bg-white py-16 md:py-24" id="mas-vendido">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 md:mb-16">
<span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-4">TOP VENTAS</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">Lo más vendido</h2>
<p className="text-lg text-neutral-600">Las piezas que están arrasando esta temporada.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="bestsellers">

</div>
</div>
</section>

<section className="bg-neutral-900 py-16 md:py-24 relative overflow-hidden" id="oferta">
<div className="absolute inset-0 opacity-10">
<div className="absolute inset-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left">
<span className="inline-block px-4 py-2 bg-amber-500 text-white text-sm font-bold rounded-full mb-6">OFERTA LIMITADA</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        25% de descuento<br/>en toda la colección
                    </h2>
<p className="text-lg text-neutral-300 mb-8 max-w-lg">
                        Solo durante este fin de semana. No dejes escapar la oportunidad de renovar tu armario con las mejores piezas de streetwear.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
<button className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 text-sm font-semibold rounded-lg hover:bg-neutral-100 transition-all duration-200" onclick="showCategory('todos', true)">
                            Aprovechar oferta
                            <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="flex items-center justify-center lg:justify-start gap-4">
<div className="text-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
<span className="text-2xl font-bold text-white" id="countdown-days">02</span>
</div>
<span className="text-xs text-neutral-400">Días</span>
</div>
<span className="text-2xl text-white/30">:</span>
<div className="text-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
<span className="text-2xl font-bold text-white" id="countdown-hours">14</span>
</div>
<span className="text-xs text-neutral-400">Horas</span>
</div>
<span className="text-2xl text-white/30">:</span>
<div className="text-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
<span className="text-2xl font-bold text-white" id="countdown-minutes">37</span>
</div>
<span className="text-xs text-neutral-400">Min</span>
</div>
<span className="text-2xl text-white/30">:</span>
<div className="text-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2">
<span className="text-2xl font-bold text-white" id="countdown-seconds">52</span>
</div>
<span className="text-xs text-neutral-400">Seg</span>
</div>
</div>
</div>
<div className="hidden lg:block">
<div className="relative">
<div className="aspect-square bg-neutral-800 rounded-3xl overflow-hidden">
<img alt="Oferta especial" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&amp;h=600&amp;fit=crop"/>
</div>
<div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform" onclick="showCategory('todos', true)">
<span className="text-2xl font-bold text-white">-25%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-16 md:py-24" id="sobre">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1">
<span className="text-sm font-semibold text-neutral-400 tracking-wider uppercase mb-4 block">Nuestra historia</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-6">Nacidos en la calle, diseñados para destacar</h2>
<p className="text-lg text-neutral-600 mb-6">
                        Segarro nació en 2019 con una misión clara: crear ropa que represente la autenticidad del streetwear sin comprometer la calidad. Cada pieza está diseñada pensando en quienes viven la cultura urbana de verdad.
                    </p>
<p className="text-lg text-neutral-600 mb-8">
                        No seguimos tendencias, las creamos. Usamos materiales premium, producción ética y diseños que cuentan una historia. Porque vestir bien no es solo apariencia, es actitud.
                    </p>
<div className="flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="Team" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&amp;h=48&amp;fit=crop"/>
<img alt="Team" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&amp;h=48&amp;fit=crop"/>
<img alt="Team" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&amp;h=48&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Equipo apasionado</p>
<p className="text-sm text-neutral-500">Barcelona, España</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<div className="aspect-[4/5] bg-neutral-100 rounded-2xl overflow-hidden">
<img alt="Segarro Shop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&amp;h=750&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-neutral-900 text-white p-6 rounded-2xl hidden md:block">
<p className="text-3xl font-bold tracking-tight">5+</p>
<p className="text-sm text-neutral-400">años de experiencia</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-16 md:py-24" id="beneficios">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">¿Por qué elegirnos?</h2>
<p className="text-lg text-neutral-600">Todo lo que necesitas para comprar con total confianza.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
<div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 cursor-pointer" onclick="navigateTo('sobre')">
<div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify w-7 h-7 text-neutral-700" data-icon="lucide:award" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Calidad Premium</h3>
<p className="text-sm text-neutral-600">Materiales de primera calidad y acabados perfectos en cada prenda.</p>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 cursor-pointer" onclick="openFaqModal('envio')">
<div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify w-7 h-7 text-neutral-700" data-icon="lucide:truck" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Envío Express</h3>
<p className="text-sm text-neutral-600">Entrega en 24-48h. Gratis a partir de 50€ en toda España.</p>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 cursor-pointer" onclick="openFaqModal('pago')">
<div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify w-7 h-7 text-neutral-700" data-icon="lucide:shield-check" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Pago 100% Seguro</h3>
<p className="text-sm text-neutral-600">Transacciones cifradas con los métodos de pago más seguros.</p>
</div>
<div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 cursor-pointer" onclick="openFaqModal('devolucion')">
<div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6">
<span className="iconify w-7 h-7 text-neutral-700" data-icon="lucide:rotate-ccw" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Devolución Fácil</h3>
<p className="text-sm text-neutral-600">30 días para devolver. Sin preguntas, sin complicaciones.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-16 md:py-24" id="opiniones">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-4">Lo que dicen nuestros clientes</h2>
<p className="text-lg text-neutral-600">Miles de personas ya confían en Segarro.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-neutral-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-neutral-700 mb-6">"La calidad es increíble. Llevo comprando aquí más de un año y nunca me ha decepcionado. Las camisetas son súper cómodas y el fit es perfecto."</p>
<div className="flex items-center gap-3">
<img alt="Marc González" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&amp;h=48&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold text-neutral-900">Marc González</p>
<p className="text-xs text-neutral-500">Cliente verificado</p>
</div>
</div>
</div>

<div className="bg-neutral-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-neutral-700 mb-6">"El envío fue rapidísimo, llegó en menos de 24 horas. La sudadera que pedí era exactamente como en las fotos. 100% recomendado."</p>
<div className="flex items-center gap-3">
<img alt="Laura Martín" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&amp;h=48&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold text-neutral-900">Laura Martín</p>
<p className="text-xs text-neutral-500">Cliente verificado</p>
</div>
</div>
</div>

<div className="bg-neutral-50 p-6 md:p-8 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-amber-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-neutral-700 mb-6">"Por fin una marca de streetwear que entiende lo que buscamos. Diseños únicos, precios justos y atención al cliente brutal."</p>
<div className="flex items-center gap-3">
<img alt="David Ruiz" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&amp;h=48&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold text-neutral-900">David Ruiz</p>
<p className="text-xs text-neutral-500">Cliente verificado</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900 py-16 md:py-24" id="newsletter">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="iconify w-12 h-12 text-amber-500 mx-auto mb-6" data-icon="lucide:mail" data-width="48" style={{strokeWidth: '1.5'}}></span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Únete a la comunidad</h2>
<p className="text-lg text-neutral-400 mb-8">Suscríbete y recibe un 10% de descuento en tu primera compra, además de acceso anticipado a nuevos lanzamientos y ofertas exclusivas.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" id="newsletter-form" onsubmit="subscribeNewsletter(event)">
<input className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-neutral-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm" id="newsletter-email" placeholder="Tu email" required="" type="email"/>
<button className="px-8 py-4 bg-white text-neutral-900 text-sm font-semibold rounded-xl hover:bg-neutral-100 transition-colors" type="submit">
                    Suscribirme
                </button>
</form>
<p className="text-xs text-red-400 mt-2 hidden" id="newsletter-error">Por favor, introduce un email válido.</p>
<p className="text-xs text-green-400 mt-2 hidden" id="newsletter-success">¡Gracias por suscribirte! Revisa tu email.</p>
<p className="text-xs text-neutral-500 mt-4">Sin spam. Puedes darte de baja cuando quieras.</p>
</div>
</section>

<section className="bg-white py-16 md:py-24" id="contacto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-6">¿Tienes alguna pregunta?</h2>
<p className="text-lg text-neutral-600 mb-8">Estamos aquí para ayudarte. Contáctanos por cualquier duda sobre pedidos, tallas, envíos o cualquier otra cosa.</p>
<div className="space-y-6">
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors" href="mailto:hola@segarroshop.com">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
<span className="iconify w-5 h-5 text-neutral-700" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Email</p>
<p className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">hola@segarroshop.com</p>
</div>
</a>
<a className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors" href="tel:+34912345678">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
<span className="iconify w-5 h-5 text-neutral-700" data-icon="lucide:phone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Teléfono</p>
<p className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">+34 912 345 678</p>
</div>
</a>
<div className="flex items-start gap-4 p-4">
<div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center flex-shrink-0">
<span className="iconify w-5 h-5 text-neutral-700" data-icon="lucide:clock" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Horario de atención</p>
<p className="text-sm text-neutral-600">Lunes a Viernes: 9:00 - 18:00</p>
<p className="text-sm text-neutral-600">Sábados: 10:00 - 14:00</p>
</div>
</div>
</div>
</div>
<div>
<form className="bg-neutral-50 p-6 md:p-8 rounded-2xl" id="contact-form" onsubmit="submitContact(event)">
<div className="grid sm:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Nombre *</label>
<input className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="contact-name" placeholder="Tu nombre" required="" type="text"/>
<p className="text-xs text-red-500 mt-1 hidden" id="name-error">El nombre es obligatorio.</p>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Email *</label>
<input className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="contact-email" placeholder="tu@email.com" required="" type="email"/>
<p className="text-xs text-red-500 mt-1 hidden" id="email-error">Introduce un email válido.</p>
</div>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-neutral-700 mb-2">Asunto *</label>
<input className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="contact-subject" placeholder="¿En qué podemos ayudarte?" required="" type="text"/>
<p className="text-xs text-red-500 mt-1 hidden" id="subject-error">El asunto es obligatorio.</p>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-neutral-700 mb-2">Mensaje *</label>
<textarea className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none" id="contact-message" placeholder="Escribe tu mensaje aquí..." required="" rows="4"></textarea>
<p className="text-xs text-red-500 mt-1 hidden" id="message-error">El mensaje es obligatorio.</p>
</div>
<button className="w-full py-4 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2" id="contact-submit" type="submit">
<span>Enviar mensaje</span>
<span className="iconify w-4 h-4" data-icon="lucide:send" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<p className="text-sm text-green-600 mt-4 text-center hidden" id="contact-success">¡Mensaje enviado! Te responderemos pronto.</p>
</form>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-16 md:py-24" id="cta">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">¿Listo para destacar?</h2>
<p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">Únete a miles de personas que ya visten Segarro y descubre por qué somos la marca de streetwear más valorada.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-10 py-5 bg-neutral-900 text-white text-base font-semibold rounded-xl hover:bg-neutral-800 transition-all duration-200 shadow-lg shadow-neutral-900/20" onclick="showCategory('todos')">
                    Explorar tienda
                    <span className="iconify ml-2 w-5 h-5" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="inline-flex items-center justify-center px-10 py-5 bg-white text-neutral-900 text-base font-semibold rounded-xl border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all duration-200" onclick="navigateTo('sobre')">
                    Saber más
                </button>
</div>
</div>
</section>
</main>


<footer className="bg-neutral-900 text-white pt-16 md:pt-20 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 md:mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-bold tracking-tighter text-white mb-4 block" href="#" onclick="navigateTo('inicio'); return false;">SEGARRO</a>
<p className="text-sm text-neutral-400 mb-6 max-w-xs">Streetwear premium diseñado para quienes no siguen tendencias, las crean.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" href="https://instagram.com" rel="noopener" target="_blank">
<span className="iconify w-5 h-5" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" href="https://twitter.com" rel="noopener" target="_blank">
<span className="iconify w-5 h-5" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" href="https://youtube.com" rel="noopener" target="_blank">
<span className="iconify w-5 h-5" data-icon="lucide:youtube" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Tienda</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="showCategory('camisetas'); return false;">Camisetas</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="showCategory('pantalones'); return false;">Pantalones</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="showCategory('accesorios'); return false;">Accesorios</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="showCategory('todos'); return false;">Nueva colección</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="showCategory('todos', true); return false;">Ofertas</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Información</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="navigateTo('sobre'); return false;">Sobre nosotros</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="navigateTo('contacto'); return false;">Contacto</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="openSizeGuide(); return false;">Guía de tallas</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="openFaqModal('general'); return false;">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="openLegalModal('terminos'); return false;">Términos y condiciones</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="openLegalModal('privacidad'); return false;">Política de privacidad</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="openLegalModal('cookies'); return false;">Política de cookies</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#" onclick="openFaqModal('devolucion'); return false;">Devoluciones</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 mb-8">
<div className="flex flex-wrap items-center justify-center gap-4">
<span className="text-xs text-neutral-500 mr-4">Métodos de pago:</span>
<div className="flex items-center gap-3">
<div className="px-3 py-2 bg-white/10 rounded-lg">
<span className="text-xs font-medium text-white">VISA</span>
</div>
<div className="px-3 py-2 bg-white/10 rounded-lg">
<span className="text-xs font-medium text-white">Mastercard</span>
</div>
<div className="px-3 py-2 bg-white/10 rounded-lg">
<span className="text-xs font-medium text-white">PayPal</span>
</div>
<div className="px-3 py-2 bg-white/10 rounded-lg">
<span className="text-xs font-medium text-white">Apple Pay</span>
</div>
<div className="px-3 py-2 bg-white/10 rounded-lg">
<span className="text-xs font-medium text-white">Google Pay</span>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© 2024 Segarro Shop. Todos los derechos reservados.</p>
<p className="text-xs text-neutral-500">Hecho con pasión en Barcelona, España</p>
</div>
</div>
</footer>


<div className="fixed inset-0 z-50 hidden" id="cart-sidebar">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="toggleCart()"></div>
<div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between p-6 border-b border-neutral-100">
<h3 className="text-lg font-semibold text-neutral-900">Tu carrito</h3>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors" onclick="toggleCart()">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6" id="cart-items">
<p className="text-sm text-neutral-500 text-center py-8">Tu carrito está vacío</p>
</div>
<div className="border-t border-neutral-100 p-6" id="cart-footer">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-600">Subtotal</span>
<span className="text-base font-medium text-neutral-900" id="cart-subtotal">0,00 €</span>
</div>
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-neutral-600">Envío</span>
<span className="text-sm text-neutral-600" id="cart-shipping">Calculado en checkout</span>
</div>
<div className="flex items-center justify-between mb-6 pt-4 border-t border-neutral-100">
<span className="text-base font-semibold text-neutral-900">Total</span>
<span className="text-lg font-bold text-neutral-900" id="cart-total">0,00 €</span>
</div>
<button className="w-full py-4 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors mb-3" onclick="proceedToCheckout()">
                        Finalizar compra
                    </button>
<button className="w-full py-3 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-xl hover:bg-neutral-200 transition-colors" onclick="toggleCart(); showCategory('todos');">
                        Continuar comprando
                    </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="account-modal">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeAccountModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
<div className="flex items-center justify-between p-6 border-b border-neutral-100">
<h3 className="text-lg font-semibold text-neutral-900" id="account-title">Iniciar sesión</h3>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors" onclick="closeAccountModal()">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="p-6" id="account-content">

<div id="login-form-container">
<form id="login-form" onsubmit="handleLogin(event)">
<div className="mb-4">
<label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="login-email" placeholder="tu@email.com" required="" type="email"/>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-neutral-700 mb-2">Contraseña</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="login-password" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full py-4 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors mb-4" type="submit">
                                Iniciar sesión
                            </button>
<p className="text-sm text-center text-neutral-600">
                                ¿No tienes cuenta? <button className="font-semibold text-neutral-900 hover:underline" onclick="showRegisterForm()" type="button">Regístrate</button>
</p>
<button className="w-full text-sm text-neutral-500 hover:text-neutral-900 mt-4 text-center" onclick="showForgotPassword()" type="button">
                                ¿Olvidaste tu contraseña?
                            </button>
</form>
</div>

<div className="hidden" id="register-form-container">
<form id="register-form" onsubmit="handleRegister(event)">
<div className="mb-4">
<label className="block text-sm font-medium text-neutral-700 mb-2">Nombre completo</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="register-name" placeholder="Tu nombre" required="" type="text"/>
</div>
<div className="mb-4">
<label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="register-email" placeholder="tu@email.com" required="" type="email"/>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-neutral-700 mb-2">Contraseña</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="register-password" minlength="6" placeholder="Mínimo 6 caracteres" required="" type="password"/>
</div>
<button className="w-full py-4 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors mb-4" type="submit">
                                Crear cuenta
                            </button>
<p className="text-sm text-center text-neutral-600">
                                ¿Ya tienes cuenta? <button className="font-semibold text-neutral-900 hover:underline" onclick="showLoginForm()" type="button">Inicia sesión</button>
</p>
</form>
</div>

<div className="hidden" id="forgot-form-container">
<form id="forgot-form" onsubmit="handleForgotPassword(event)">
<p className="text-sm text-neutral-600 mb-6">Introduce tu email y te enviaremos instrucciones para restablecer tu contraseña.</p>
<div className="mb-6">
<label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="forgot-email" placeholder="tu@email.com" required="" type="email"/>
</div>
<button className="w-full py-4 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors mb-4" type="submit">
                                Enviar instrucciones
                            </button>
<button className="w-full text-sm text-neutral-500 hover:text-neutral-900 text-center" onclick="showLoginForm()" type="button">
                                Volver a iniciar sesión
                            </button>
</form>
</div>

<div className="hidden" id="logged-in-container">
<div className="text-center mb-6">
<div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="iconify w-10 h-10 text-neutral-400" data-icon="lucide:user" data-width="40" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-lg font-semibold text-neutral-900" id="user-name">Usuario</p>
<p className="text-sm text-neutral-500" id="user-email">email@ejemplo.com</p>
</div>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors" onclick="showMyOrders()">
<span className="flex items-center gap-3">
<span className="iconify w-5 h-5 text-neutral-600" data-icon="lucide:package" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium text-neutral-900">Mis pedidos</span>
</span>
<span className="iconify w-4 h-4 text-neutral-400" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors" onclick="showWishlist()">
<span className="flex items-center gap-3">
<span className="iconify w-5 h-5 text-neutral-600" data-icon="lucide:heart" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium text-neutral-900">Lista de deseos</span>
</span>
<span className="iconify w-4 h-4 text-neutral-400" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors" onclick="showAccountSettings()">
<span className="flex items-center gap-3">
<span className="iconify w-5 h-5 text-neutral-600" data-icon="lucide:settings" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium text-neutral-900">Configuración</span>
</span>
<span className="iconify w-4 h-4 text-neutral-400" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<button className="w-full mt-6 py-4 bg-red-50 text-red-600 text-sm font-semibold rounded-xl hover:bg-red-100 transition-colors" onclick="handleLogout()">
                            Cerrar sesión
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="product-modal">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeProductModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
<div className="flex items-center justify-between p-4 md:p-6 border-b border-neutral-100 sticky top-0 bg-white z-10">
<button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors" onclick="closeProductModal()">
<span className="iconify w-4 h-4" data-icon="lucide:arrow-left" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Volver
                    </button>
<button className="p-2 text-neutral-400 hover:text-red-500 transition-colors" id="wishlist-btn" onclick="toggleWishlistProduct()">
<span className="iconify w-5 h-5" data-icon="lucide:heart" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="p-4 md:p-8" id="product-modal-content">

</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="category-modal">
<div className="absolute inset-0 bg-white">
<div className="flex flex-col h-full">
<div className="flex items-center justify-between p-4 md:p-6 border-b border-neutral-100 sticky top-0 bg-white z-10">
<button className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors" onclick="closeCategoryModal()">
<span className="iconify w-4 h-4" data-icon="lucide:arrow-left" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Volver al inicio
                    </button>
<h2 className="text-lg font-semibold text-neutral-900" id="category-title">Categoría</h2>
<button className="relative p-2 text-neutral-600 hover:text-neutral-900 transition-colors" onclick="toggleCart()">
<span className="iconify w-5 h-5" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-neutral-900 text-white text-xs rounded-full flex items-center justify-center font-medium" id="cart-count-modal">0</span>
</button>
</div>
<div className="flex-1 overflow-y-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="flex flex-wrap gap-3 mb-8">
<button className="category-filter px-4 py-2 rounded-full text-sm font-medium transition-colors bg-neutral-900 text-white" data-category="todos" onclick="filterCategory('todos')">Todos</button>
<button className="category-filter px-4 py-2 rounded-full text-sm font-medium transition-colors bg-neutral-100 text-neutral-700 hover:bg-neutral-200" data-category="camisetas" onclick="filterCategory('camisetas')">Camisetas</button>
<button className="category-filter px-4 py-2 rounded-full text-sm font-medium transition-colors bg-neutral-100 text-neutral-700 hover:bg-neutral-200" data-category="pantalones" onclick="filterCategory('pantalones')">Pantalones</button>
<button className="category-filter px-4 py-2 rounded-full text-sm font-medium transition-colors bg-neutral-100 text-neutral-700 hover:bg-neutral-200" data-category="accesorios" onclick="filterCategory('accesorios')">Accesorios</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" id="category-products">

</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="checkout-modal">
<div className="absolute inset-0 bg-white overflow-y-auto">
<div className="max-w-4xl mx-auto px-4 py-8">
<div className="flex items-center justify-between mb-8">
<a className="text-xl font-bold tracking-tighter text-neutral-900" href="#" onclick="closeCheckoutModal(); return false;">SEGARRO</a>
<button className="text-sm text-neutral-600 hover:text-neutral-900" onclick="closeCheckoutModal()">
                        Volver a la tienda
                    </button>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div>
<h2 className="text-2xl font-bold tracking-tight text-neutral-900 mb-6">Finalizar compra</h2>
<form id="checkout-form" onsubmit="handleCheckout(event)">

<div className="mb-8">
<h3 className="text-sm font-semibold text-neutral-900 mb-4">Información de contacto</h3>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent mb-3" id="checkout-email" placeholder="Email" required="" type="email"/>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-phone" placeholder="Teléfono" required="" type="tel"/>
</div>

<div className="mb-8">
<h3 className="text-sm font-semibold text-neutral-900 mb-4">Dirección de envío</h3>
<div className="grid grid-cols-2 gap-3 mb-3">
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-firstname" placeholder="Nombre" required="" type="text"/>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-lastname" placeholder="Apellidos" required="" type="text"/>
</div>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent mb-3" id="checkout-address" placeholder="Dirección" required="" type="text"/>
<div className="grid grid-cols-3 gap-3">
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-city" placeholder="Ciudad" required="" type="text"/>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-province" placeholder="Provincia" required="" type="text"/>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-zip" placeholder="CP" required="" type="text"/>
</div>
</div>

<div className="mb-8">
<h3 className="text-sm font-semibold text-neutral-900 mb-4">Método de pago</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl cursor-pointer border-2 border-neutral-900">
<input checked="" className="w-4 h-4 text-neutral-900" name="payment" type="radio" value="card"/>
<span className="text-sm font-medium text-neutral-900">Tarjeta de crédito</span>
</label>
<label className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl cursor-pointer border border-neutral-200 hover:border-neutral-300">
<input className="w-4 h-4 text-neutral-900" name="payment" type="radio" value="paypal"/>
<span className="text-sm font-medium text-neutral-700">PayPal</span>
</label>
</div>
</div>

<div className="mb-8" id="card-details">
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent mb-3" id="checkout-card" maxlength="19" placeholder="Número de tarjeta" required="" type="text"/>
<div className="grid grid-cols-2 gap-3">
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-expiry" maxlength="5" placeholder="MM/AA" required="" type="text"/>
<input className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="checkout-cvv" maxlength="4" placeholder="CVV" required="" type="text"/>
</div>
</div>
<button className="w-full py-4 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition-colors" type="submit">
                                Pagar ahora
                            </button>
</form>
</div>

<div className="bg-neutral-50 rounded-2xl p-6">
<h3 className="text-sm font-semibold text-neutral-900 mb-6">Resumen del pedido</h3>
<div className="space-y-4 mb-6" id="checkout-items">

</div>
<div className="border-t border-neutral-200 pt-4 space-y-3">
<div className="flex justify-between">
<span className="text-sm text-neutral-600">Subtotal</span>
<span className="text-sm font-medium text-neutral-900" id="checkout-subtotal">0,00 €</span>
</div>
<div className="flex justify-between">
<span className="text-sm text-neutral-600">Envío</span>
<span className="text-sm font-medium text-neutral-900" id="checkout-shipping">Gratis</span>
</div>
<div className="flex justify-between pt-3 border-t border-neutral-200">
<span className="text-base font-semibold text-neutral-900">Total</span>
<span className="text-lg font-bold text-neutral-900" id="checkout-total">0,00 €</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="info-modal">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onclick="closeInfoModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
<div className="flex items-center justify-between p-6 border-b border-neutral-100 sticky top-0 bg-white">
<h3 className="text-lg font-semibold text-neutral-900" id="info-modal-title">Información</h3>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors" onclick="closeInfoModal()">
<span className="iconify w-5 h-5" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="p-6" id="info-modal-content">

</div>
</div>
</div>
</div>

<div className="fixed bottom-4 right-4 z-50 hidden transform transition-all duration-300 translate-y-4 opacity-0" id="toast">
<div className="bg-neutral-900 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
<span className="iconify w-5 h-5 text-green-400" data-icon="lucide:check-circle" data-width="20" id="toast-icon" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-medium" id="toast-message">Producto añadido</span>
</div>
</div>

    </>
  );
}
