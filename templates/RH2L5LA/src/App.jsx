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
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Add fade-in animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeInDown {
                from { opacity: 0; transform: translateY(-30px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);

        // Food preview functionality
        const foodData = {
            pizza: {
                title: "Disco Pizza Supreme",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
                badge: "HOT! 🔥",
                price: "$12.99",
                description: "This pizza is so groovy, it might start dancing in your mouth! Made with the finest ingredients and a secret blend of spices that will make you boogie all night long.",
                ingredients: ["Mozzarella", "Tomato Sauce", "Basil", "Secret Spice", "Love"]
            },
            burger: {
                title: "The Gigantic Giggles",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
                badge: "NEW! ✨",
                price: "$15.49",
                description: "A burger so big, it needs its own zip code! This towering masterpiece will challenge your jaw muscles and reward your taste buds.",
                ingredients: ["Angus Beef", "Cheddar", "Bacon", "Pickles", "Special Sauce"]
            },
            taco: {
                title: "Taco 'Bout Delicious",
                image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop",
                badge: "SPICY! 🌶️",
                price: "$9.99",
                description: "These tacos are nacho average meal! Packed with flavor and guaranteed to make you say 'Holy Guacamole!'",
                ingredients: ["Seasoned Chicken", "Avocado", "Salsa", "Cilantro", "Lime"]
            },
            ramen: {
                title: "Slurp-tastic Ramen",
                image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
                badge: "SOUL FOOD 🍜",
                price: "$11.99",
                description: "Warning: May cause instant happiness! This ramen is so good, it should come with a therapist.",
                ingredients: ["Rich Broth", "Ramen Noodles", "Soft Egg", "Green Onions", "Magic"]
            },
            sushi: {
                title: "Roll With It Sushi",
                image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
                badge: "FRESH! 🐟",
                price: "$18.99",
                description: "So fresh, the fish is still telling jokes! Our sushi chef has hands blessed by the ocean gods.",
                ingredients: ["Sushi Rice", "Fresh Salmon", "Nori", "Wasabi", "Ocean Vibes"]
            },
            "ice-cream": {
                title: "Scoop Dreams",
                image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&h=400&fit=crop",
                badge: "CHILL! 🧊",
                price: "$7.99",
                description: "Triple scoop of pure happiness! Warning: May cause brain freeze and uncontrollable smiling.",
                ingredients: ["Vanilla Dreams", "Chocolate Heaven", "Strawberry Bliss", "Whipped Cream", "Joy"]
            },
            pasta: {
                title: "Pasta La Vista",
                image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=400&fit=crop",
                badge: "CLASSIC! 🍝",
                price: "$13.99",
                description: "Twirl your way to flavor town! This pasta is so good, it'll make you want to move to Italy.",
                ingredients: ["Al Dente Pasta", "Rich Tomatoes", "Fresh Herbs", "Parmesan", "Italian Love"]
            },
            salad: {
                title: "Lettuce Be Happy",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop",
                badge: "HEALTHY! 🥗",
                price: "$8.99",
                description: "Guilt-free and flavor-full! This salad is so good, even carnivores will convert.",
                ingredients: ["Mixed Greens", "Cherry Tomatoes", "Cucumber", "Vinaigrette", "Good Vibes"]
            }
        };

        function openFoodPreview(foodType) {
            const modal = document.getElementById('foodPreviewModal');
            const food = foodData[foodType];
            
            if (food) {
                document.getElementById('previewTitle').textContent = food.title;
                document.getElementById('previewImage').src = food.image;
                document.getElementById('previewImage').alt = food.title;
                document.getElementById('previewBadge').textContent = food.badge;
                document.getElementById('previewPrice').textContent = food.price;
                document.getElementById('previewDescription').textContent = food.description;
                
                // Update ingredients
                const ingredientsContainer = document.getElementById('previewIngredients');
                ingredientsContainer.innerHTML = food.ingredients.map(ingredient => 
                    `<span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">${ingredient}</span>`
                ).join('');
                
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                }, 10);
            }
        }

        function closeFoodPreview() {
            const modal = document.getElementById('foodPreviewModal');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Close modal when clicking outside
        document.getElementById('foodPreviewModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeFoodPreview();
            }
        });

        // Add some interactive hover effects
        document.addEventListener('DOMContentLoaded', function() {
            const foodCards = document.querySelectorAll('.food-card');
            foodCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'rotate(' + (Math.random() * 6 - 3) + 'deg) scale(1.05)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'rotate(0deg) scale(1)';
                });
            });
        });
    
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
      

<header className="bg-white/80 backdrop-blur-lg border-b border-orange-200 sticky top-0 z-50" style={{opacity: '0', animation: 'fadeInDown 0.8s ease-out 0.2s forwards'}}>
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center wiggle">
<span className="text-white text-xl">🍕</span>
</div>
<h1 className="text-2xl font-bold text-gray-900 font-['Comic_Neue']">FoodieGoof</h1>
</div>
<div className="flex items-center space-x-4">
<button className="relative bg-orange-500/20 hover:bg-orange-500/30 p-2 rounded-lg transition-all duration-300">
<i className="w-5 h-5 text-orange-600" data-lucide="shopping-cart"></i>
<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center bounce-slow">7</span>
</button>
<img alt="Profile" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&amp;h=40&amp;fit=crop&amp;crop=face"/>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 py-8">

<div className="text-center mb-12" style={{opacity: '0', animation: 'fadeInUp 0.8s ease-out 0.4s forwards'}}>
<h2 className="text-5xl font-bold text-gray-900 mb-4 font-['Comic_Neue'] tracking-tight">
                Ridiculously <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Delicious</span> Food
            </h2>
<p className="text-xl text-gray-600 mb-8">Warning: May cause uncontrollable drooling and bad dance moves</p>
<div className="flex justify-center space-x-4 text-4xl">
<span className="animate-bounce" style={{animationDelay: '0s'}}>🍔</span>
<span className="animate-bounce" style={{animationDelay: '0.1s'}}>🌮</span>
<span className="animate-bounce" style={{animationDelay: '0.2s'}}>🍕</span>
<span className="animate-bounce" style={{animationDelay: '0.3s'}}>🍰</span>
<span className="animate-bounce" style={{animationDelay: '0.4s'}}>🍜</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12" style={{opacity: '0', animation: 'fadeInUp 0.8s ease-out 0.6s forwards'}}>
<button className="bg-white/60 backdrop-blur-sm hover:bg-orange-100/80 p-4 rounded-2xl border border-orange-200/50 transition-all duration-300 food-card goofy-shadow">
<div className="text-2xl mb-2">🍕</div>
<h3 className="font-semibold text-gray-900 text-sm">Pizza</h3>
</button>
<button className="bg-white/60 backdrop-blur-sm hover:bg-red-100/80 p-4 rounded-2xl border border-red-200/50 transition-all duration-300 food-card goofy-shadow">
<div className="text-2xl mb-2">🍔</div>
<h3 className="font-semibold text-gray-900 text-sm">Burgers</h3>
</button>
<button className="bg-white/60 backdrop-blur-sm hover:bg-yellow-100/80 p-4 rounded-2xl border border-yellow-200/50 transition-all duration-300 food-card goofy-shadow">
<div className="text-2xl mb-2">🌮</div>
<h3 className="font-semibold text-gray-900 text-sm">Tacos</h3>
</button>
<button className="bg-white/60 backdrop-blur-sm hover:bg-pink-100/80 p-4 rounded-2xl border border-pink-200/50 transition-all duration-300 food-card goofy-shadow">
<div className="text-2xl mb-2">🍰</div>
<h3 className="font-semibold text-gray-900 text-sm">Desserts</h3>
</button>
<button className="bg-white/60 backdrop-blur-sm hover:bg-green-100/80 p-4 rounded-2xl border border-green-200/50 transition-all duration-300 food-card goofy-shadow">
<div className="text-2xl mb-2">🥗</div>
<h3 className="font-semibold text-gray-900 text-sm">Salads</h3>
</button>
<button className="bg-white/60 backdrop-blur-sm hover:bg-purple-100/80 p-4 rounded-2xl border border-purple-200/50 transition-all duration-300 food-card goofy-shadow">
<div className="text-2xl mb-2">🍜</div>
<h3 className="font-semibold text-gray-900 text-sm">Soups</h3>
</button>
</div>

<div className="mb-8" style={{opacity: '0', animation: 'fadeInUp 0.8s ease-out 0.8s forwards'}}>
<h3 className="text-3xl font-bold text-gray-900 mb-6 font-['Comic_Neue']">Today's Goofy Menu</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('pizza')">
<div className="relative">
<img alt="Pizza" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold wiggle">HOT! 🔥</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 4.9</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">Disco Pizza Supreme</h4>
<p className="text-gray-600 text-sm mb-3 line-clamp-2">This pizza is so groovy, it might start dancing!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$12.99</span>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Add 🛒
                            </button>
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('burger')">
<div className="relative">
<img alt="Burger" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold bounce-slow">NEW! ✨</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 4.8</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">The Gigantic Giggles</h4>
<p className="text-gray-600 text-sm mb-3">A burger so big, it needs its own zip code!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$15.49</span>
<button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Dare! 😤
                            </button>
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('taco')">
<div className="relative">
<img alt="Tacos" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">SPICY! 🌶️</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 4.7</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">Taco 'Bout Delicious</h4>
<p className="text-gray-600 text-sm mb-3">These tacos are nacho average meal!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$9.99</span>
<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Nacho! 🌮
                            </button>
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('ramen')">
<div className="relative">
<img alt="Ramen" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">SOUL FOOD 🍜</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 4.9</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">Slurp-tastic Ramen</h4>
<p className="text-gray-600 text-sm mb-3">Warning: May cause instant happiness!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$11.99</span>
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Slurp! 🍜
                            </button>
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('sushi')">
<div className="relative">
<img alt="Sushi" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">FRESH! 🐟</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 4.8</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">Roll With It Sushi</h4>
<p className="text-gray-600 text-sm mb-3">So fresh, the fish is still telling jokes!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$18.99</span>
<button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Roll! 🍣
                            </button>
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('ice-cream')">
<div className="relative">
<img alt="Ice Cream" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-semibold">CHILL! 🧊</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 5.0</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">Scoop Dreams</h4>
<p className="text-gray-600 text-sm mb-3">Triple scoop of pure happiness!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$7.99</span>
<button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Chill! 🍦
                            </button>
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('pasta')">
<div className="relative">
<img alt="Pasta" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">CLASSIC! 🍝</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 4.6</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">Pasta La Vista</h4>
<p className="text-gray-600 text-sm mb-3">Twirl your way to flavor town!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$13.99</span>
<button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Twirl! 🍝
                            </button>
</div>
</div>
</div>
<div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-orange-200/50 food-card transition-all duration-300 goofy-shadow cursor-pointer" onclick="openFoodPreview('salad')">
<div className="relative">
<img alt="Salad" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">HEALTHY! 🥗</div>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">⭐ 4.5</div>
</div>
<div className="p-4">
<h4 className="text-lg font-bold text-gray-900 mb-1">Lettuce Be Happy</h4>
<p className="text-gray-600 text-sm mb-3">Guilt-free and flavor-full!</p>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-orange-600">$8.99</span>
<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                                Fresh! 🥗
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-orange-400/20 to-red-400/20 backdrop-blur-sm rounded-3xl p-8 border border-orange-200/50" style={{opacity: '0', animation: 'fadeInUp 0.8s ease-out 1s forwards'}}>
<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-['Comic_Neue']">Ridiculously Impressive Stats</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="wiggle">
<div className="text-3xl font-bold text-orange-600">42,069</div>
<div className="text-gray-600">Happy Bellies</div>
</div>
<div className="wiggle" style={{animationDelay: '0.2s'}}>
<div className="text-3xl font-bold text-red-600">999+</div>
<div className="text-gray-600">Food Comas</div>
</div>
<div className="wiggle" style={{animationDelay: '0.4s'}}>
<div className="text-3xl font-bold text-yellow-600">∞</div>
<div className="text-gray-600">Smiles Created</div>
</div>
<div className="wiggle" style={{animationDelay: '0.6s'}}>
<div className="text-3xl font-bold text-purple-600">24/7</div>
<div className="text-gray-600">Craving Fixes</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-black/60 food-preview-overlay z-50 hidden opacity-0 transition-all duration-300" id="foodPreviewModal">
<div className="flex items-center justify-center min-h-screen p-4">
<div className="bg-white/90 preview-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl">
<div className="relative">
<button className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300" onclick="closeFoodPreview()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="grid md:grid-cols-2 gap-0">

<div className="relative bg-gradient-to-br from-orange-100 to-red-100 p-8">
<img alt="" className="w-full h-80 object-cover rounded-2xl shadow-lg" id="previewImage" src=""/>
<div className="absolute inset-8 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div>

<div className="absolute top-12 right-12 floating-ingredient">🍅</div>
<div className="absolute bottom-16 left-12 floating-ingredient" style={{animationDelay: '1s'}}>🧀</div>
<div className="absolute top-20 left-16 floating-ingredient" style={{animationDelay: '2s'}}>🌿</div>
</div>

<div className="p-8">
<div className="mb-4">
<span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4" id="previewBadge">HOT! 🔥</span>
<h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Comic_Neue']" id="previewTitle">Disco Pizza Supreme</h2>
<div className="flex items-center mb-4">
<div className="flex text-yellow-400 mr-2">⭐⭐⭐⭐⭐</div>
<span className="text-gray-600 text-sm">(4.9) • 420 reviews</span>
</div>
</div>
<p className="text-gray-600 mb-6 leading-relaxed" id="previewDescription">This pizza is so groovy, it might start dancing in your mouth! Made with the finest ingredients and a secret blend of spices that will make you boogie.</p>

<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-900 mb-3">Ingredients</h3>
<div className="flex flex-wrap gap-2" id="previewIngredients">
<span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Mozzarella</span>
<span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Tomato Sauce</span>
<span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Basil</span>
<span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Secret Spice</span>
</div>
</div>

<div className="mb-6">
<h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
<div className="flex gap-3">
<button className="border-2 border-orange-500 bg-orange-50 text-orange-700 px-4 py-2 rounded-lg font-semibold">Small</button>
<button className="border-2 border-gray-300 hover:border-orange-500 px-4 py-2 rounded-lg">Medium</button>
<button className="border-2 border-gray-300 hover:border-orange-500 px-4 py-2 rounded-lg">Large</button>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center space-x-4">
<span className="text-gray-700 font-medium">Quantity:</span>
<div className="flex items-center border border-gray-300 rounded-lg">
<button className="px-3 py-2 hover:bg-gray-100">-</button>
<span className="px-4 py-2 border-x border-gray-300">1</span>
<button className="px-3 py-2 hover:bg-gray-100">+</button>
</div>
</div>
<div className="text-right">
<div className="text-3xl font-bold text-orange-600" id="previewPrice">$12.99</div>
</div>
</div>

<div className="flex gap-4">
<button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                                    Add to Cart 🛒
                                </button>
<button className="bg-gray-100 hover:bg-gray-200 p-4 rounded-2xl transition-all duration-300">
<i className="w-6 h-6 text-gray-600" data-lucide="heart"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<button className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 wiggle z-40">
<i className="w-6 h-6" data-lucide="chef-hat"></i>
</button>

<footer className="bg-white/60 backdrop-blur-lg border-t border-orange-200 mt-16">
<div className="max-w-6xl mx-auto px-4 py-8">
<div className="text-center">
<div className="flex items-center justify-center space-x-3 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
<span className="text-white text-lg">🍕</span>
</div>
<h3 className="text-xl font-bold text-gray-900 font-['Comic_Neue']">FoodieGoof</h3>
</div>
<p className="text-gray-600 mb-4">Making food ridiculously delicious since forever!</p>
<div className="flex justify-center space-x-6 text-gray-500">
<a className="hover:text-orange-500 transition-colors" href="#">About</a>
<a className="hover:text-orange-500 transition-colors" href="#">Menu</a>
<a className="hover:text-orange-500 transition-colors" href="#">Contact</a>
<a className="hover:text-orange-500 transition-colors" href="#">Help</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
