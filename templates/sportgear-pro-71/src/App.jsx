import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let cart = [];
        let cartVisible = false;

        function addToCart(button) {
            const card = button.closest('[data-product]');
            const productData = JSON.parse(card.dataset.product);
            
            const existingItem = cart.find(item => item.name === productData.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...productData, quantity: 1 });
            }
            
            updateCartCount();
            showNotification(productData.name);
        }

        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const countElement = document.getElementById('cartCount');
            countElement.textContent = totalItems;
            
            // Pop animation
            countElement.classList.add('scale-150');
            setTimeout(() => countElement.classList.remove('scale-150'), 200);
            countElement.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }

        function showNotification(productName) {
            const notification = document.createElement('div');
            notification.className = 'fixed top-24 right-6 bg-white border border-gray-100 shadow-xl text-gray-800 px-5 py-4 rounded-2xl text-sm font-medium z-[2000] flex items-center gap-3';
            notification.style.animation = 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            
            notification.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                    <iconify-icon icon="solar:check-circle-bold" class="text-lg"></iconify-icon>
                </div>
                <div class="flex flex-col">
                    <span class="text-gray-900 tracking-tight">Added to cart</span>
                    <span class="text-xs text-gray-500 font-normal">${productName}</span>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
                setTimeout(() => notification.remove(), 400);
            }, 3000);
        }

        function toggleCart() {
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
            const itemsList = cart.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('\n');
            
            alert(`Shopping Cart (${totalItems} items)\n\n${itemsList}\n\nTotal: $${totalPrice}`);
        }

        // Scroll animations using Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-element').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-950 to-blue-900 text-white border-b border-white/10 backdrop-blur-sm">
<nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="text-xl font-semibold tracking-tight">ANANDSPORT. com</div>
<ul className="hidden md:flex gap-8 text-sm font-medium text-white/80">
<li><a className="hover:text-yellow-400 transition-colors duration-300" href="#home">Home</a></li>
<li><a className="hover:text-yellow-400 transition-colors duration-300" href="#products">Products</a></li>
<li><a className="hover:text-yellow-400 transition-colors duration-300" href="#features">Why Us</a></li>
</ul>
<div className="relative cursor-pointer text-2xl text-white/90 hover:text-yellow-400 transition-colors" onclick="toggleCart()">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1.5 -right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-semibold shadow-sm" id="cartCount">0</span>
</div>
</nav>
</header>
<section className="relative min-h-screen flex items-center justify-center text-center pt-20 px-6" id="home" style={{backgroundImage: 'url(\'data:image/svg+xml,&lt', svg xmlns=%22http: '//www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22&gt', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="backdrop-blur-[2px] bg-blue-950/80 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 animate-fade-in-up max-w-3xl mr-auto ml-auto relative">
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-semibold text-white tracking-tight mb-6">Premium Sports Equipment</h1>
<p className="md:text-lg text-base font-normal text-blue-100/80 max-w-2xl mr-auto mb-10 ml-auto">Equip yourself for victory with our top-quality gear. From soccer to basketball, we've got you covered with industry-leading precision.</p>
<a className="inline-block bg-yellow-400 text-blue-950 px-8 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-400/20" href="#products">Shop Collection</a>
</div>
</section>
<div className="max-w-7xl mx-auto px-6">
<section className="py-24" id="products">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-16">Featured Products</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group scroll-element animate-fade-in-up" data-product='{"name":"Pro Soccer Ball", "price":59.99}'>
<div className="h-64 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">⚽</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Pro Soccer Ball</h3>
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold text-gray-900">$59.99</span>
<div className="text-yellow-400 text-sm flex gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<button className="w-full bg-white hover:bg-green-600 text-gray-800 hover:text-white border border-gray-200 hover:border-green-600 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex justify-center items-center gap-2" onclick="addToCart(this)">
                            Add to Cart
                        </button>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group scroll-element delay-100 animate-fade-in-up" data-product='{"name":"Premium Basketball", "price":49.99}'>
<div className="h-64 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">🏀</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Premium Basketball</h3>
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold text-gray-900">$49.99</span>
<div className="text-yellow-400 text-sm flex gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-white hover:bg-green-600 text-gray-800 hover:text-white border border-gray-200 hover:border-green-600 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex justify-center items-center gap-2" onclick="addToCart(this)">
                            Add to Cart
                        </button>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group scroll-element delay-200 animate-fade-in-up" data-product='{"name":"Carbon Fiber Tennis Racket", "price":89.99}'>
<div className="h-64 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">🎾</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Carbon Fiber Tennis Racket</h3>
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold text-gray-900">$89.99</span>
<div className="text-yellow-400 text-sm flex gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<button className="w-full bg-white hover:bg-green-600 text-gray-800 hover:text-white border border-gray-200 hover:border-green-600 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex justify-center items-center gap-2" onclick="addToCart(this)">
                            Add to Cart
                        </button>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group scroll-element animate-fade-in-up" data-product='{"name":"Elite Running Shoes", "price":129.99}'>
<div className="h-64 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">👟</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Elite Running Shoes</h3>
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold text-gray-900">$129.99</span>
<div className="text-yellow-400 text-sm flex gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<button className="w-full bg-white hover:bg-green-600 text-gray-800 hover:text-white border border-gray-200 hover:border-green-600 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex justify-center items-center gap-2" onclick="addToCart(this)">
                            Add to Cart
                        </button>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group scroll-element delay-100 animate-fade-in-up" data-product='{"name":"Adjustable Dumbbells", "price":79.99}'>
<div className="h-64 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">💪</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Adjustable Dumbbells</h3>
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold text-gray-900">$79.99</span>
<div className="text-yellow-400 text-sm flex gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-white hover:bg-green-600 text-gray-800 hover:text-white border border-gray-200 hover:border-green-600 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex justify-center items-center gap-2" onclick="addToCart(this)">
                            Add to Cart
                        </button>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group scroll-element delay-200 animate-fade-in-up" data-product='{"name":"Premium Yoga Mat", "price":39.99}'>
<div className="h-64 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-500">🧘</div>
<div className="p-6">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Premium Yoga Mat</h3>
<div className="flex justify-between items-center mb-6">
<span className="text-lg font-semibold text-gray-900">$39.99</span>
<div className="text-yellow-400 text-sm flex gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<button className="w-full bg-white hover:bg-green-600 text-gray-800 hover:text-white border border-gray-200 hover:border-green-600 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex justify-center items-center gap-2" onclick="addToCart(this)">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</section>
</div>
<section className="bg-white border-y border-gray-100 py-24" id="features">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-16">Why Choose Us?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
<div className="scroll-element flex flex-col items-center animate-fade-in-up">
<div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-500 text-2xl mb-6">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Free Shipping</h3>
<p className="text-sm text-gray-500 leading-relaxed">Free shipping on orders over $50. Fast delivery nationwide.</p>
</div>
<div className="scroll-element delay-100 flex flex-col items-center animate-fade-in-up">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 text-2xl mb-6">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Quality Guaranteed</h3>
<p className="text-sm text-gray-500 leading-relaxed">All products backed by our 2-year quality guarantee.</p>
</div>
<div className="scroll-element delay-200 flex flex-col items-center animate-fade-in-up">
<div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 text-2xl mb-6">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Best Prices</h3>
<p className="text-sm text-gray-500 leading-relaxed">Competitive pricing with regular discounts and promotions.</p>
</div>
<div className="scroll-element delay-300 flex flex-col items-center animate-fade-in-up">
<div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 text-2xl mb-6">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Customer Support</h3>
<p className="text-sm text-gray-500 leading-relaxed">24/7 customer support ready to assist you anytime.</p>
</div>
</div>
</div>
</section>
<footer className="bg-gray-900 text-gray-400 py-12 text-center text-sm font-light">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="text-lg font-semibold tracking-tight text-gray-200 mb-4">SPORTGEAR PRO</div>
<p className="mb-6">© 2024 SportGear Pro. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors duration-200" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors duration-200" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors duration-200" href="#">Contact Us</a>
</div>
</div>
</footer>


    </>
  );
}
