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



      let cart=[];function updateCartUI(){const count=document.getElementById('cart-count');const items=document.getElementById('cart-items');const total=document.getElementById('cart-total');const btn=document.getElementById('checkout-btn');const cartTotal=cart.reduce((sum,item)=>sum+(item.price*item.quantity),0);count.textContent=cart.reduce((sum,item)=>sum+item.quantity,0);count.classList.toggle('hidden',cart.length===0);total.textContent=cartTotal.toLocaleString()+' FCFA';btn.disabled=cart.length===0;if(cart.length===0){items.innerHTML='<div class="text-center text-neutral-400 py-12"><i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-3 opacity-50"></i><p>Votre panier est vide</p></div>';}else{items.innerHTML=cart.map((item,index)=>`<div class="bg-white border border-neutral-200 rounded-lg p-3"><div class="flex items-start justify-between mb-2"><h4 class="font-medium text-sm flex-1">${item.name}</h4><button onclick="removeFromCart(${index})" class="text-red-600 hover:bg-red-50 p-1 rounded transition-colors"><i data-lucide="trash-2" class="w-4 h-4"></i></button></div><div class="flex items-center justify-between"><div class="flex items-center space-x-2 bg-neutral-100 rounded-lg"><button onclick="decreaseQuantity(${index})" class="px-2 py-1 hover:bg-neutral-200 rounded-l-lg transition-colors"><i data-lucide="minus" class="w-3 h-3"></i></button><span class="px-3 py-1 font-medium text-sm">${item.quantity}</span><button onclick="increaseQuantity(${index})" class="px-2 py-1 hover:bg-neutral-200 rounded-r-lg transition-colors"><i data-lucide="plus" class="w-3 h-3"></i></button></div><span class="font-semibold text-red-600">${(item.price*item.quantity).toLocaleString()} FCFA</span></div></div>`).join('');}lucide.createIcons();}function addToCart(btn){const card=btn.closest('.menu-item');const name=card.querySelector('h3').textContent;const priceText=card.querySelector('.text-2xl').textContent;const price=parseInt(priceText.replace(/[^0-9]/g,''));const existingItem=cart.find(item=>item.name===name);if(existingItem){existingItem.quantity++;}else{cart.push({name,price,quantity:1});}updateCartUI();const badge=document.getElementById('cart-count');badge.style.animation='none';setTimeout(()=>{badge.style.animation='bounce 0.5s ease';},10);}function removeFromCart(index){cart.splice(index,1);updateCartUI();}function increaseQuantity(index){cart[index].quantity++;updateCartUI();}function decreaseQuantity(index){if(cart[index].quantity>1){cart[index].quantity--;}else{cart.splice(index,1);}updateCartUI();}function toggleCart(){const panel=document.getElementById('cart-panel');panel.classList.toggle('open');}function checkout(){if(cart.length===0)return;const orderText=cart.map(item=>`${item.quantity}x ${item.name} - ${(item.price*item.quantity).toLocaleString()} FCFA`).join('%0A');const total=cart.reduce((sum,item)=>sum+(item.price*item.quantity),0);const message=`Bonjour! Je voudrais commander:%0A%0A${orderText}%0A%0ATotal: ${total.toLocaleString()} FCFA`;window.open(`https://wa.me/22670000000?text=${message}`,'_blank');}
    


      // Initialize Lucide icons
      lucide.createIcons();

      // Mobile menu toggle
      function toggleMobileMenu() {
          const menu = document.getElementById('mobileMenu');
          menu.classList.toggle('hidden');
      }

      // Menu filter functionality
      function filterMenu(category) {
          const items = document.querySelectorAll('.menu-item');
          const buttons = document.querySelectorAll('.menu-filter');

          // Update button styles
          buttons.forEach(btn => {
              if (btn.textContent.toLowerCase().includes(category) || category === 'all') {
                  if ((category === 'all' && btn.textContent === 'Tout') ||
                      (category === 'pizzas' && btn.textContent === 'Pizzas') ||
                      (category === 'burgers' && btn.textContent === 'Burgers') ||
                      (category === 'wings' && btn.textContent === 'Wings') ||
                      (category === 'plats' && btn.textContent === 'Plats') ||
                      (category === 'desserts' && btn.textContent === 'Desserts') ||
                      (category === 'boissons' && btn.textContent === 'Boissons')) {
                      btn.className = 'menu-filter px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-medium hover:shadow-lg transition-all';
                  } else {
                      btn.className = 'menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all';
                  }
              } else {
                  btn.className = 'menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all';
              }
          });

          // Filter items
          items.forEach(item => {
              if (category === 'all' || item.classList.contains(category)) {
                  item.style.display = 'block';
                  item.style.animation = 'fadeInUp 0.5s ease-out';
              } else {
                  item.style.display = 'none';
              }
          });
      }

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                  target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                  });
                  // Close mobile menu if open
                  document.getElementById('mobileMenu').classList.add('hidden');
              }
          });
      });

      // Header scroll effect
      let lastScroll = 0;
      const header = document.querySelector('header');

      window.addEventListener('scroll', () => {
          const currentScroll = window.pageYOffset;

          if (currentScroll > 100) {
              header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
          } else {
              header.style.boxShadow = 'none';
          }

          lastScroll = currentScroll;
      });

      // Form submission
      document.querySelector('form').addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
          e.target.reset();
      });

      // Reinitialize Lucide icons after dynamic content changes
      setTimeout(() => {
          lucide.createIcons();
      }, 100);
    
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
      

<header className="fixed top-0 w-full z-50 glass border-b border-neutral-200 transition-all duration-300">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 sm:h-20">
<div className="flex items-center space-x-2">
<div className="bg-gradient-to-br from-red-600 to-orange-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl tracking-tighter">
              UC
            </div>
<span className="font-semibold text-base sm:text-lg tracking-tight hidden sm:block">
              Upright Café &amp; Pizzeria
            </span>
</div>

<div className="hidden md:flex items-center space-x-1">
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors" href="#accueil">
              Accueil
            </a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors" href="#menu">
              Menu
            </a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors" href="#apropos">
              À propos
            </a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors" href="#galerie">
              Galerie
            </a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors" href="#evenements">
              Événements
            </a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors" href="#avis">
              Avis
            </a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-colors" href="#contact">
              Contact
            </a>
</div>
<div className="flex items-center space-x-2 sm:space-x-3">
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 relative" onclick="toggleCart()">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<span>Panier</span>
<span className="hidden absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center cart-badge" id="cart-count">
                0
              </span>
</button>

<button className="md:hidden p-2 rounded-lg hover:bg-neutral-100" onclick="toggleMobileMenu()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="hidden md:hidden border-t border-neutral-200 bg-white" id="mobileMenu">
<div className="px-4 py-3 space-y-1">
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100" href="#accueil">
            Accueil
          </a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100" href="#menu">
            Menu
          </a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100" href="#apropos">
            À propos
          </a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100" href="#galerie">
            Galerie
          </a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100" href="#evenements">
            Événements
          </a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100" href="#avis">
            Avis
          </a>
<a className="block px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-100" href="#contact">
            Contact
          </a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20" id="accueil">
<div className="absolute inset-0 z-0">
<img alt="Pizza" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
<div className="animate-fadeInUp">
<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-shadow">
            Goûtez la différence chez
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Upright Café &amp; Pizzeria
            </span>
</h1>
<p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-neutral-200 max-w-3xl mx-auto font-light">
            Les meilleures pizzas, burgers et wings de Ouagadougou. Une
            expérience culinaire unique dans nos restaurants à Ouaga 2000 et
            Gounghin.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl text-base font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2" href="#menu">
<i className="w-5 h-5" data-lucide="utensils"></i>
<span>Voir le menu</span>
</a>
<a className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2" href="https://wa.me/22670000000" target="_blank">
<i className="w-5 h-5" data-lucide="phone"></i>
<span>Commander maintenant</span>
</a>
<a className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2" href="#contact">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span>Nous localiser</span>
</a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
<i className="w-8 h-8 text-white" data-lucide="chevron-down"></i>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="animate-fadeInUp">
<div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="award"></i>
<span>Restaurant reconnu à Ouagadougou</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Une expérience culinaire exceptionnelle
            </h2>
<p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Depuis notre ouverture, Upright Café &amp; Pizzeria s'est imposé
              comme une référence incontournable de la restauration à
              Ouagadougou. Nous proposons une cuisine savoureuse et variée dans
              une ambiance chaleureuse et conviviale.
            </p>
<p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Nos deux établissements à Ouaga 2000 et Gounghin vous accueillent
              pour des moments gourmands inoubliables, que ce soit en famille,
              entre amis ou pour vos événements professionnels.
            </p>
<div className="grid grid-cols-3 gap-6 mb-8">
<div className="text-center">
<div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                  2
                </div>
<div className="text-sm text-neutral-600">Restaurants</div>
</div>
<div className="text-center border-l border-r border-neutral-200">
<div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                  50+
                </div>
<div className="text-sm text-neutral-600">Plats au menu</div>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                  100%
                </div>
<div className="text-sm text-neutral-600">Fraîcheur</div>
</div>
</div>
<a className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 transition-colors" href="#apropos">
<span>Découvrir notre histoire</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<img alt="Pizza" className="w-full h-64 object-cover rounded-2xl hover-lift" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&amp;q=80"/>
<img alt="Burger" className="w-full h-48 object-cover rounded-2xl hover-lift" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&amp;q=80"/>
</div>
<div className="space-y-4 pt-8">
<img alt="Wings" className="w-full h-48 object-cover rounded-2xl hover-lift" src="https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&amp;q=80"/>
<img alt="Café" className="w-full h-64 object-cover rounded-2xl hover-lift" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 sm:mb-16">
<div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="chef-hat"></i>
<span>Notre carte</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Découvrez notre menu
          </h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Une sélection de plats préparés avec passion et des ingrédients de
            qualité
          </p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="menu-filter px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-medium hover:shadow-lg transition-all" onclick="filterMenu('all')">
            Tout
          </button>
<button className="menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all" onclick="filterMenu('pizzas')">
            Pizzas
          </button>
<button className="menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all" onclick="filterMenu('burgers')">
            Burgers
          </button>
<button className="menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all" onclick="filterMenu('wings')">
            Wings
          </button>
<button className="menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all" onclick="filterMenu('plats')">
            Plats
          </button>
<button className="menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all" onclick="filterMenu('desserts')">
            Desserts
          </button>
<button className="menu-filter px-6 py-2.5 rounded-full bg-white text-neutral-700 text-sm font-medium hover:bg-neutral-100 border border-neutral-200 transition-all" onclick="filterMenu('boissons')">
            Boissons
          </button>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="menu-item pizzas bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Pizza Margherita" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&amp;q=80"/>
<div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Pizza Margherita</h3>
<p className="text-neutral-600 text-sm mb-4">
                Tomate, mozzarella, basilic frais, huile d'olive extra vierge
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">5.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" data-name="{{NAME}}" data-price="{{PRICE}}" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item pizzas bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Pizza 4 Fromages" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Pizza 4 Fromages</h3>
<p className="text-neutral-600 text-sm mb-4">
                Mozzarella, gorgonzola, parmesan, chèvre
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">6.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" data-name="Pizza 4 Fromages" data-price="6500" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item pizzas bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Pizza Pepperoni" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Pizza Pepperoni</h3>
<p className="text-neutral-600 text-sm mb-4">
                Sauce tomate, mozzarella, pepperoni épicé
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">6.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" data-name="Pizza Pepperoni" data-price="6000" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>

<div className="menu-item burgers bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Upright Burger" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&amp;q=80"/>
<div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Upright Burger</h3>
<p className="text-neutral-600 text-sm mb-4">
                Bœuf 200g, cheddar, salade, tomate, sauce maison
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">4.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item burgers bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Chicken Burger" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Chicken Burger</h3>
<p className="text-neutral-600 text-sm mb-4">
                Poulet pané croustillant, salade, mayo épicée
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">4.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item burgers bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Veggie Burger" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Veggie Burger</h3>
<p className="text-neutral-600 text-sm mb-4">
                Steak végétarien, avocat, légumes grillés
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">3.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>

<div className="menu-item wings bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Wings BBQ" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&amp;q=80"/>
<div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Populaire
              </div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Wings BBQ</h3>
<p className="text-neutral-600 text-sm mb-4">
                6 pièces, sauce BBQ maison, frites incluses
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">3.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item wings bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Wings Piquantes" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Wings Piquantes</h3>
<p className="text-neutral-600 text-sm mb-4">
                6 pièces, sauce piquante, céleri et ranch
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">3.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item wings bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Wings Miel &amp; Moutarde" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">
                Wings Miel &amp; Moutarde
              </h3>
<p className="text-neutral-600 text-sm mb-4">
                6 pièces, sauce miel-moutarde douce
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">3.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>

<div className="menu-item plats bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Pasta Carbonara" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Pasta Carbonara</h3>
<p className="text-neutral-600 text-sm mb-4">
                Pâtes fraîches, crème, lardons, parmesan
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">4.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item plats bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Poulet Grillé" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Poulet Grillé</h3>
<p className="text-neutral-600 text-sm mb-4">
                Demi-poulet mariné, frites, salade
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">5.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item plats bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Salade Caesar" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Salade Caesar</h3>
<p className="text-neutral-600 text-sm mb-4">
                Poulet grillé, laitue, parmesan, croûtons
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">3.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>

<div className="menu-item desserts bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Tiramisu" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Tiramisu</h3>
<p className="text-neutral-600 text-sm mb-4">
                Mascarpone, café, cacao amer
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">2.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item desserts bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Fondant au Chocolat" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Fondant au Chocolat</h3>
<p className="text-neutral-600 text-sm mb-4">
                Cœur coulant, glace vanille
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">2.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item desserts bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Cheesecake" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Cheesecake</h3>
<p className="text-neutral-600 text-sm mb-4">
                New York style, coulis fruits rouges
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">2.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>

<div className="menu-item boissons bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Café Expresso" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Café Expresso</h3>
<p className="text-neutral-600 text-sm mb-4">
                Arabica premium, torréfaction artisanale
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">1.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item boissons bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Smoothie Tropical" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Smoothie Tropical</h3>
<p className="text-neutral-600 text-sm mb-4">
                Mangue, ananas, passion, gingembre
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">2.000 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
<div className="menu-item boissons bg-white rounded-2xl overflow-hidden border border-neutral-200 hover-lift">
<div className="relative overflow-hidden group">
<img alt="Jus Frais" className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold mb-2">Jus Frais</h3>
<p className="text-neutral-600 text-sm mb-4">
                Orange, citron, gingembre, menthe
              </p>
<div className="flex items-center justify-between">
<span className="text-2xl font-bold text-red-600">1.500 FCFA</span>
<button className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1" onclick="addToCart(this)">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Ajouter</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" id="apropos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 sm:mb-16">
<div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="heart"></i>
<span>Notre histoire</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            À propos d'Upright Café &amp; Pizzeria
          </h2>
<p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Une passion pour la gastronomie, un engagement pour la qualité
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
              Notre philosophie
            </h3>
<p className="text-neutral-600 mb-4 leading-relaxed">
              Upright Café &amp; Pizzeria est né d'une vision simple : offrir à
              Ouagadougou une expérience culinaire exceptionnelle, alliant
              authenticité, qualité et innovation. Depuis notre ouverture, nous
              nous engageons à servir des plats préparés avec passion et des
              ingrédients soigneusement sélectionnés.
            </p>
<p className="text-neutral-600 mb-6 leading-relaxed">
              Nos deux établissements à Ouaga 2000 et Gounghin reflètent notre
              volonté de proximité avec notre clientèle. Nous créons des espaces
              chaleureux où familles, amis et professionnels se retrouvent
              autour de moments gourmands inoubliables.
            </p>
<div className="space-y-4">
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-red-600" data-lucide="check"></i>
</div>
<div>
<h4 className="font-semibold mb-1">Qualité premium</h4>
<p className="text-sm text-neutral-600">
                    Ingrédients frais et de première qualité pour chaque plat
                  </p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-red-600" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-semibold mb-1">Service rapide</h4>
<p className="text-sm text-neutral-600">
                    Préparation soignée dans les meilleurs délais
                  </p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-red-600" data-lucide="users"></i>
</div>
<div>
<h4 className="font-semibold mb-1">Ambiance conviviale</h4>
<p className="text-sm text-neutral-600">
                    Un cadre chaleureux pour tous vos moments
                  </p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Restaurant" className="w-full h-64 object-cover rounded-2xl hover-lift" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&amp;q=80"/>
<img alt="Intérieur" className="w-full h-64 object-cover rounded-2xl hover-lift mt-8" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&amp;q=80"/>
</div>
</div>

<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 sm:p-12 text-white">
<h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center tracking-tight">
            Nos valeurs
          </h3>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-red-400" data-lucide="sparkles"></i>
</div>
<h4 className="font-semibold mb-2">Excellence</h4>
<p className="text-sm text-neutral-300">
                Engagement total pour la qualité
              </p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-orange-400" data-lucide="leaf"></i>
</div>
<h4 className="font-semibold mb-2">Fraîcheur</h4>
<p className="text-sm text-neutral-300">
                Produits frais tous les jours
              </p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-yellow-400" data-lucide="smile"></i>
</div>
<h4 className="font-semibold mb-2">Convivialité</h4>
<p className="text-sm text-neutral-300">Accueil chaleureux garanti</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-green-400" data-lucide="zap"></i>
</div>
<h4 className="font-semibold mb-2">Rapidité</h4>
<p className="text-sm text-neutral-300">Service efficace et soigné</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50" id="galerie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 sm:mb-16">
<div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="camera"></i>
<span>Nos restaurants</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ambiance &amp; Galerie
          </h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Découvrez l'atmosphère chaleureuse de nos établissements
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="relative overflow-hidden rounded-2xl hover-lift h-64 sm:h-80 group">
<img alt="Restaurant vue" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
<p className="text-white font-medium p-6">Ambiance intérieure</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl hover-lift h-64 sm:h-80 group">
<img alt="Plats" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
<p className="text-white font-medium p-6">Nos spécialités</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl hover-lift h-64 sm:h-80 group">
<img alt="Bar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
<p className="text-white font-medium p-6">Espace bar &amp; café</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl hover-lift h-64 sm:h-80 group sm:col-span-2">
<img alt="Vue d'ensemble" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
<p className="text-white font-medium p-6">
                Vue d'ensemble du restaurant
              </p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl hover-lift h-64 sm:h-80 group">
<img alt="Terrasse" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
<p className="text-white font-medium p-6">Espace terrasse</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" id="evenements">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 sm:mb-16">
<div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Actualités</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Événements &amp; Offres spéciales
          </h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Profitez de nos promotions et événements exclusifs
          </p>
</div>
<div className="overflow-x-auto pb-4">
<div className="flex space-x-6 min-w-max lg:grid lg:grid-cols-3 lg:gap-8 lg:space-x-0">
<div className="w-80 lg:w-auto bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl p-8 text-white flex-shrink-0">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="percent"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">
                Promo du mois
              </h3>
<p className="text-white/90 mb-6">
                -20% sur toutes les pizzas familiales tous les mardis
              </p>
<a className="inline-flex items-center space-x-2 bg-white text-red-600 px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-50 transition-colors" href="https://wa.me/22670000000?text=Je%20veux%20profiter%20de%20la%20promo%20du%20mois">
<span>Commander</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="w-80 lg:w-auto bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 text-white flex-shrink-0">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="pizza"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">
                Soirée Pizza
              </h3>
<p className="text-white/80 mb-6">
                Tous les vendredis soir : ambiance musicale et pizzas à volonté
              </p>
<a className="inline-flex items-center space-x-2 bg-white text-neutral-900 px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-50 transition-colors" href="#contact">
<span>Réserver</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="w-80 lg:w-auto bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-8 text-white flex-shrink-0">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6" data-lucide="gift"></i>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight">
                Menu famille
              </h3>
<p className="text-white/90 mb-6">
                2 pizzas + 1 portion de wings + 4 boissons = 15.000 FCFA
              </p>
<a className="inline-flex items-center space-x-2 bg-white text-orange-600 px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-50 transition-colors" href="https://wa.me/22670000000?text=Je%20veux%20commander%20le%20menu%20famille">
<span>Commander</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50" id="avis">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 sm:mb-16">
<div className="inline-flex items-center space-x-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="star"></i>
<span>Témoignages</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ce que disent nos clients
          </h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Des milliers de clients satisfaits nous font confiance
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 hover-lift">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">
              "Les meilleures pizzas de Ouagadougou ! La pâte est parfaite, les
              ingrédients sont frais et l'ambiance est top. Je recommande
              vivement !"
            </p>
<div className="flex items-center space-x-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<div>
<div className="font-semibold">Aminata Traoré</div>
<div className="text-sm text-neutral-500">Cliente régulière</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 hover-lift">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">
              "Service impeccable, burgers délicieux et cadre agréable. C'est
              devenu mon restaurant préféré pour les sorties en famille."
            </p>
<div className="flex items-center space-x-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
<div>
<div className="font-semibold">Ibrahim Sawadogo</div>
<div className="text-sm text-neutral-500">Entrepreneur</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 hover-lift">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">
              "Excellente découverte ! Les wings sont incroyables et le café est
              parfait. L'équipe est accueillante et professionnelle."
            </p>
<div className="flex items-center space-x-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;q=80"/>
<div>
<div className="font-semibold">Sophie Kaboré</div>
<div className="text-sm text-neutral-500">Étudiante</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 hover-lift">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">
              "Rapport qualité-prix excellent. Les portions sont généreuses et
              tout est fait maison. Je reviendrai sans hésiter !"
            </p>
<div className="flex items-center space-x-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;q=80"/>
<div>
<div className="font-semibold">Marc Ouédraogo</div>
<div className="text-sm text-neutral-500">Ingénieur</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 hover-lift">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">
              "Ambiance chaleureuse, musique agréable et plats savoureux.
              Parfait pour une soirée entre amis ou un repas d'affaires."
            </p>
<div className="flex items-center space-x-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&amp;q=80"/>
<div>
<div className="font-semibold">Fatou Diallo</div>
<div className="text-sm text-neutral-500">Consultante</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 hover-lift">
<div className="flex items-center space-x-1 mb-4">
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 fill-yellow-400 text-yellow-400" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">
              "Un vrai régal ! Les desserts sont divins et le service est
              rapide. Je recommande à 100% pour un moment gourmand."
            </p>
<div className="flex items-center space-x-3">
<img alt="Client" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;q=80"/>
<div>
<div className="font-semibold">Paul Compaoré</div>
<div className="text-sm text-neutral-500">Architecte</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl">
<i className="w-6 h-6" data-lucide="star"></i>
<span className="text-2xl font-bold">4.9/5</span>
<span className="text-sm opacity-90">sur 500+ avis</span>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 sm:mb-16">
<div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Nous contacter</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Venez nous rendre visite
          </h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Deux établissements à votre service à Ouagadougou
          </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 mb-12">

<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
<div className="flex items-start space-x-4 mb-6">
<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center">
<i className="w-7 h-7 text-white" data-lucide="store"></i>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">Upright Ouaga 2000</h3>
<p className="text-neutral-600 text-sm">Restaurant principal</p>
</div>
</div>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" data-lucide="map-pin"></i>
<p className="text-neutral-700">
                  Avenue de la Nation, Ouaga 2000
                  <br/>
                  Ouagadougou, Burkina Faso
                </p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" data-lucide="phone"></i>
<div>
<a className="text-neutral-700 hover:text-red-600 transition-colors" href="tel:+22670000000">
                    +226 70 00 00 00
                  </a>
<br/>
<a className="text-neutral-700 hover:text-red-600 transition-colors" href="tel:+22625000000">
                    +226 25 00 00 00
                  </a>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" data-lucide="clock"></i>
<div className="text-neutral-700">
<p>Lun - Dim : 11h00 - 23h00</p>
<p className="text-sm text-neutral-500 mt-1">Service continu</p>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-200">
<a className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 transition-colors" href="https://www.google.com/maps" target="_blank">
<span>Voir sur Google Maps</span>
<i className="w-4 h-4" data-lucide="external-link"></i>
</a>
</div>
</div>

<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
<div className="flex items-start space-x-4 mb-6">
<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl flex items-center justify-center">
<i className="w-7 h-7 text-white" data-lucide="store"></i>
</div>
<div>
<h3 className="text-xl font-semibold mb-1">Upright Gounghin</h3>
<p className="text-neutral-600 text-sm">Succursale</p>
</div>
</div>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" data-lucide="map-pin"></i>
<p className="text-neutral-700">
                  Avenue Loudun, Gounghin
                  <br/>
                  Ouagadougou, Burkina Faso
                </p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" data-lucide="phone"></i>
<div>
<a className="text-neutral-700 hover:text-orange-600 transition-colors" href="tel:+22671000000">
                    +226 71 00 00 00
                  </a>
<br/>
<a className="text-neutral-700 hover:text-orange-600 transition-colors" href="tel:+22625100000">
                    +226 25 10 00 00
                  </a>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" data-lucide="clock"></i>
<div className="text-neutral-700">
<p>Lun - Dim : 11h00 - 23h00</p>
<p className="text-sm text-neutral-500 mt-1">Service continu</p>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-200">
<a className="inline-flex items-center space-x-2 text-orange-600 font-medium hover:text-orange-700 transition-colors" href="https://www.google.com/maps" target="_blank">
<span>Voir sur Google Maps</span>
<i className="w-4 h-4" data-lucide="external-link"></i>
</a>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 sm:p-12 text-white">
<div className="max-w-2xl mx-auto">
<h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-center tracking-tight">
              Envoyez-nous un message
            </h3>
<p className="text-neutral-300 text-center mb-8">
              Une question ? Une réservation ? Contactez-nous !
            </p>
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
<input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors" placeholder="Votre nom" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
<input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors" placeholder="+226 XX XX XX XX" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors" placeholder="votre@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Restaurant</label>
<select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors">
<option>Upright Ouaga 2000</option>
<option>Upright Gounghin</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="Votre message..." rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2" type="submit">
<i className="w-5 h-5" data-lucide="send"></i>
<span>Envoyer le message</span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

<div>
<div className="flex items-center space-x-2 mb-4">
<div className="bg-gradient-to-br from-red-600 to-orange-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg tracking-tighter">
                UC
              </div>
<span className="font-semibold text-lg">Upright Café</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Les meilleures pizzas, burgers et wings de Ouagadougou. Une
              expérience culinaire unique.
            </p>
<div className="flex space-x-3">
<a className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors" href="https://wa.me/22670000000">
<i className="w-4 h-4" data-lucide="message-circle"></i>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-4">Navigation</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="text-neutral-400 hover:text-white transition-colors" href="#accueil">
                  Accueil
                </a>
</li>
<li>
<a className="text-neutral-400 hover:text-white transition-colors" href="#menu">
                  Notre menu
                </a>
</li>
<li>
<a className="text-neutral-400 hover:text-white transition-colors" href="#apropos">
                  À propos
                </a>
</li>
<li>
<a className="text-neutral-400 hover:text-white transition-colors" href="#galerie">
                  Galerie
                </a>
</li>
<li>
<a className="text-neutral-400 hover:text-white transition-colors" href="#evenements">
                  Événements
                </a>
</li>
<li>
<a className="text-neutral-400 hover:text-white transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4">Horaires d'ouverture</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex justify-between">
<span>Lundi - Vendredi</span>
<span className="text-white">11h - 23h</span>
</li>
<li className="flex justify-between">
<span>Samedi</span>
<span className="text-white">11h - 23h</span>
</li>
<li className="flex justify-between">
<span>Dimanche</span>
<span className="text-white">11h - 23h</span>
</li>
</ul>
<div className="mt-4 pt-4 border-t border-white/10">
<p className="text-sm text-neutral-400">
                Service continu tous les jours
              </p>
</div>
</div>

<div>
<h4 className="font-semibold mb-4">Contactez-nous</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start space-x-2">
<i className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" data-lucide="phone"></i>
<div>
<a className="text-neutral-400 hover:text-white transition-colors" href="tel:+22670000000">
                    +226 70 00 00 00
                  </a>
<br/>
<a className="text-neutral-400 hover:text-white transition-colors" href="tel:+22625000000">
                    +226 25 00 00 00
                  </a>
</div>
</li>
<li className="flex items-start space-x-2">
<i className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" data-lucide="mail"></i>
<a className="text-neutral-400 hover:text-white transition-colors" href="mailto:contact@upright-cafe.com">
                  contact@upright-cafe.com
                </a>
</li>
<li className="flex items-start space-x-2">
<i className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" data-lucide="map-pin"></i>
<span className="text-neutral-400">
                  Ouaga 2000 &amp; Gounghin
                  <br/>
                  Ouagadougou, Burkina Faso
                </span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
<p className="text-sm text-neutral-400">
              © 2024 Upright Café &amp; Pizzeria. Tous droits réservés.
            </p>
<div className="flex items-center space-x-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">
                Politique de confidentialité
              </a>
<a className="hover:text-white transition-colors" href="#">
                Mentions légales
              </a>
</div>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 group" href="https://wa.me/22670000000" target="_blank">
<i className="w-6 h-6" data-lucide="message-circle"></i>
<span className="absolute right-full mr-3 bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Commander sur WhatsApp
      </span>
</a>



<div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-2xl z-50 flex flex-col" id="cart-panel">
<div className="flex items-center justify-between p-4 border-b border-neutral-200">
<h3 className="text-lg font-semibold flex items-center space-x-2">
<i className="w-5 h-5 text-red-600" data-lucide="shopping-bag"></i>
<span>Mon Panier</span>
</h3>
<button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors" onclick="toggleCart()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3" id="cart-items">
<div className="text-center text-neutral-400 py-12">
<i className="w-12 h-12 mx-auto mb-3 opacity-50" data-lucide="shopping-cart"></i>
<p>Votre panier est vide</p>
</div>
</div>
<div className="border-t border-neutral-200 p-4 bg-neutral-50">
<div className="flex items-center justify-between mb-4 text-lg font-semibold">
<span>Total</span>
<span className="text-red-600" id="cart-total">0 FCFA</span>
</div>
<button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2" disabled="" id="checkout-btn" onclick="checkout()">
<i className="w-5 h-5" data-lucide="send"></i>
<span>Commander sur WhatsApp</span>
</button>
</div>
</div>

    </>
  );
}
