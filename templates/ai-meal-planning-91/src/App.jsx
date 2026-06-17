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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- DATA SIMULATION ---

      const ingredientsDb = {
          'chicken': { name: 'Chicken Breast', price: 14.99, store: 'Walmart', icon: '🍗' },
          'eggs': { name: 'Large Eggs (12)', price: 4.49, store: 'Loblaws', icon: '🥚' },
          'milk': { name: 'Almond Milk', price: 3.99, store: 'Walmart', icon: '🥛' },
          'zucchini': { name: 'Zucchini', price: 2.99, store: 'Loblaws', icon: '🥒' },
          'broccoli': { name: 'Broccoli Crown', price: 2.49, store: 'Walmart', icon: '🥦' },
          'salmon': { name: 'Wild Salmon', price: 18.99, store: 'Loblaws', icon: '🐟' },
          'quinoa': { name: 'White Quinoa', price: 5.99, store: 'Walmart', icon: '🌾' },
          'mixed_greens': { name: 'Mixed Greens', price: 4.99, store: 'Loblaws', icon: '🥬' },
          'tomatoes': { name: 'Cherry Tomatoes', price: 3.49, store: 'Walmart', icon: '🍅' },
          'tofu': { name: 'Extra Firm Tofu', price: 3.49, store: 'Loblaws', icon: '🧊' },
          'pesto': { name: 'Basil Pesto', price: 5.49, store: 'Walmart', icon: '🌿' },
          'asparagus': { name: 'Asparagus', price: 4.99, store: 'Loblaws', icon: '🥬' },
          'turkey': { name: 'Ground Turkey', price: 8.99, store: 'Walmart', icon: '🦃' },
          'spinach': { name: 'Baby Spinach', price: 3.99, store: 'Loblaws', icon: '🍃' },
          'sweet_potato': { name: 'Sweet Potato', price: 1.99, store: 'Walmart', icon: '🍠' },
          'beef': { name: 'Lean Ground Beef', price: 9.99, store: 'Loblaws', icon: '🥩' },
          'rice': { name: 'Brown Rice', price: 4.49, store: 'Walmart', icon: '🍚' },
          'avocado': { name: 'Avocado', price: 2.50, store: 'Loblaws', icon: '🥑' }
      };

      const detectedFridgeItems = ['Chicken', 'Eggs', 'Milk', 'Zucchini', 'Broccoli', 'Salmon', 'Quinoa', 'Mixed Greens', 'Tomatoes', 'Tofu'];

      const mealsDb = {
          'm1': { id: 'm1', name: 'Grilled Chicken Salad', emoji: '🥗', desc: 'Mixed greens, grilled chicken, cherry tomatoes, light vinaigrette.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', req: ['chicken', 'mixed_greens', 'tomatoes'], inst: ['Wash and dry mixed greens.', 'Season chicken and grill for 6-8 mins per side.', 'Slice tomatoes and toss everything with vinaigrette.'] },
          'm2': { id: 'm2', name: 'Zucchini Noodles with Pesto', emoji: '🍝', desc: 'Low-calorie zucchini pasta tossed in fresh basil pesto.', img: 'https://images.unsplash.com/photo-1551186835-25e8354cda87?w=600&q=80', req: ['zucchini', 'pesto', 'tomatoes'], inst: ['Spiralize zucchini into noodles.', 'Sauté noodles briefly for 2-3 mins.', 'Remove from heat and toss with pesto and halved tomatoes.'] },
          'm3': { id: 'm3', name: 'Baked Salmon & Asparagus', emoji: '🐟', desc: 'Oven-baked wild salmon paired with tender steamed asparagus.', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80', req: ['salmon', 'asparagus'], inst: ['Preheat oven to 400°F (200°C).', 'Season salmon and bake for 12-15 minutes.', 'Steam or roast asparagus until tender.'] },
          'm4': { id: 'm4', name: 'Quinoa Veggie Bowl', emoji: '🥗', desc: 'Protein-packed quinoa topped with roasted seasonal vegetables.', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80', req: ['quinoa', 'broccoli', 'sweet_potato'], inst: ['Rinse and cook quinoa according to package.', 'Chop sweet potato and broccoli, roast at 400°F for 25 mins.', 'Assemble bowl and drizzle with light dressing.'] },
          'm5': { id: 'm5', name: 'Turkey Lettuce Wraps', emoji: '🥬', desc: 'Savory ground turkey served in crisp lettuce cups.', img: 'https://images.unsplash.com/photo-1626804475297-41609ea0ca4eb?w=600&q=80', req: ['turkey', 'mixed_greens'], inst: ['Brown ground turkey in a skillet.', 'Add soy sauce, ginger, and garlic for flavor.', 'Serve hot filling inside fresh lettuce leaves.'] },
          'm6': { id: 'm6', name: 'Omelette with Spinach', emoji: '🍳', desc: 'Fluffy egg whites folded with fresh spinach and herbs.', img: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80', req: ['eggs', 'spinach'], inst: ['Whisk eggs with a splash of water.', 'Pour into a heated, greased pan.', 'Add spinach, let it wilt, then fold the omelette.'] },
          'm7': { id: 'm7', name: 'Grilled Tofu & Broccoli', emoji: '🥦', desc: 'Crispy tofu cubes stir-fried with crunchy broccoli florets.', img: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=600&q=80', req: ['tofu', 'broccoli', 'rice'], inst: ['Press tofu to remove moisture, then cube.', 'Pan-fry tofu until crispy on all sides.', 'Add broccoli and stir-fry until bright green. Serve over rice.'] },
          // Alternatives
          'a1': { id: 'a1', name: 'Chicken & Avocado Wrap', emoji: '🌯', desc: 'Sliced chicken and avocado in a whole wheat wrap.', img: 'https://images.unsplash.com/photo-1626804475297-41609ea0ca4eb?w=600&q=80', req: ['chicken', 'avocado', 'mixed_greens'], inst: ['Slice cooked chicken and avocado.', 'Lay wrap flat, add greens, chicken, and avocado.', 'Roll tightly and slice in half.'] },
          'a2': { id: 'a2', name: 'Beef & Broccoli Stir-fry', emoji: '🥩', desc: 'Classic lean beef strips with broccoli.', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80', req: ['beef', 'broccoli', 'rice'], inst: ['Thinly slice beef and brown in a hot wok.', 'Add broccoli and a dash of soy sauce.', 'Serve over steamed brown rice.'] },
          'a3': { id: 'a3', name: 'Sweet Potato Hash', emoji: '🍠', desc: 'Diced sweet potatoes cooked with eggs.', img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80', req: ['sweet_potato', 'eggs', 'spinach'], inst: ['Dice sweet potato and sauté until soft.', 'Add spinach until wilted.', 'Crack eggs directly into the hash and cover until cooked.'] }
      };

      const weeklyPlanSkeleton = [
          { day: 'Monday', meal: 'm1', alts: ['a1', 'm5'] },
          { day: 'Tuesday', meal: 'm2', alts: ['a3', 'm4'] },
          { day: 'Wednesday', meal: 'm3', alts: ['m7', 'a2'] },
          { day: 'Thursday', meal: 'm4', alts: ['m2', 'a1'] },
          { day: 'Friday', meal: 'm5', alts: ['a2', 'm1'] },
          { day: 'Saturday', meal: 'm6', alts: ['a3', 'm7'] },
          { day: 'Sunday', meal: 'm7', alts: ['m3', 'a2'] }
      ];

      // --- STATE ---
      let state = {
          screen: 'welcome',
          servings: 2,
          budget: 150,
          plan: JSON.parse(JSON.stringify(weeklyPlanSkeleton)), // deep copy
          swapTargetDayIndex: null
      };

      const screens = ['welcome', 'scanning', 'preferences', 'mealplan', 'grocery', 'checkout'];

      // --- CORE LOGIC ---

      function init() {
          updateServingsUI();
          document.getElementById('budget-input').addEventListener('input', (e) => {
              state.budget = parseFloat(e.target.value) || 0;
          });
      }

      function navigate(toScreen) {
          screens.forEach(s => document.getElementById(`screen-${s}`).classList.add('hidden'));
          document.getElementById(`screen-${toScreen}`).classList.remove('hidden');
          state.screen = toScreen;
          window.scrollTo(0,0);
          updateHeaderFooter();

          if (toScreen === 'mealplan') renderMealPlan();
          if (toScreen === 'grocery') renderGroceryList();
          if (toScreen === 'checkout') renderCheckout();
      }

      function updateHeaderFooter() {
          const header = document.getElementById('main-header');
          const footer = document.getElementById('bottom-action');
          const backBtn = document.getElementById('back-btn');
          const title = document.getElementById('header-title');
          const primaryBtn = document.getElementById('primary-btn');

          header.classList.remove('hidden');
          footer.classList.remove('hidden');
          backBtn.classList.remove('hidden');
          backBtn.onclick = goBack;

          switch(state.screen) {
              case 'welcome':
              case 'scanning':
                  header.classList.add('hidden');
                  footer.classList.add('hidden');
                  break;
              case 'preferences':
                  title.textContent = 'Settings';
                  backBtn.classList.add('hidden');
                  primaryBtn.innerHTML = 'Generate Meal Plan <iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>';
                  primaryBtn.onclick = () => navigate('mealplan');
                  break;
              case 'mealplan':
                  title.textContent = 'Meal Plan';
                  primaryBtn.innerHTML = 'View Grocery List <iconify-icon icon="solar:cart-large-2-linear"></iconify-icon>';
                  primaryBtn.onclick = () => navigate('grocery');
                  break;
              case 'grocery':
                  title.textContent = 'Grocery List';
                  primaryBtn.innerHTML = 'Checkout Groceries <iconify-icon icon="solar:card-linear"></iconify-icon>';
                  primaryBtn.onclick = () => navigate('checkout');
                  break;
              case 'checkout':
                  title.textContent = 'Checkout';
                  primaryBtn.innerHTML = 'Pay & Place Order <iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>';
                  primaryBtn.onclick = processPayment;
                  break;
          }
      }

      function goBack() {
          const flow = ['preferences', 'mealplan', 'grocery', 'checkout'];
          const currentIndex = flow.indexOf(state.screen);
          if (currentIndex > 0) navigate(flow[currentIndex - 1]);
      }

      // --- ACTIONS ---

      function startScan() {
          navigate('scanning');
          const container = document.getElementById('detected-items');
          container.innerHTML = '';

          // Simulate items popping in
          detectedFridgeItems.forEach((item, index) => {
              setTimeout(() => {
                  const el = document.createElement('div');
                  el.className = 'bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium pop-in backdrop-blur-md';
                  el.textContent = item;
                  container.appendChild(el);
              }, index * 300);
          });

          setTimeout(() => {
              navigate('preferences');
          }, detectedFridgeItems.length * 300 + 1000);
      }

      function skipScan() {
          navigate('preferences');
      }

      function adjustServings(delta) {
          state.servings = Math.max(1, Math.min(8, state.servings + delta));
          updateServingsUI();
      }

      function updateServingsUI() {
          document.getElementById('serving-size').textContent = state.servings;
      }

      // --- RENDERERS ---

      function renderMealPlan() {
          const container = document.getElementById('meal-plan-container');
          container.innerHTML = '';

          state.plan.forEach((dayPlan, index) => {
              const meal = mealsDb[dayPlan.meal];

              const card = document.createElement('div');
              card.className = 'bg-white border border-zinc-200/60 rounded-2xl overflow-hidden shadow-sm';
              card.innerHTML = `
                  <div class="h-32 w-full relative bg-zinc-100">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" class="w-full h-full object-cover" alt="${meal.name}">
                      <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-zinc-900 shadow-sm uppercase tracking-wider">
                          ${dayPlan.day}
                      </div>
                  </div>
                  <div class="p-4">
                      <div class="flex justify-between items-start mb-2">
                          <h3 class="text-base font-semibold tracking-tight text-zinc-900 leading-tight pr-4">${meal.name} ${meal.emoji}</h3>
                      </div>
                      <p class="text-xs text-zinc-500 mb-4 line-clamp-2">${meal.desc}</p>

                      <div class="flex items-center gap-2">
                          ${meal.req.map(ing => `<span title="${ingredientsDb[ing].name}" class="text-lg grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">${ingredientsDb[ing].icon}</span>`).join('')}
                      </div>

                      <div class="mt-4 pt-4 border-t border-zinc-100 flex justify-end">
                          <button onclick="openAlternatives(${index})" class="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors flex items-center gap-1">
                              <iconify-icon icon="solar:refresh-linear"></iconify-icon> Swap Meal
                          </button>
                      </div>
                  </div>
              `;
              container.appendChild(card);
          });
      }

      function openAlternatives(dayIndex) {
          state.swapTargetDayIndex = dayIndex;
          const dayPlan = state.plan[dayIndex];
          const container = document.getElementById('alternatives-list');
          container.innerHTML = '';

          dayPlan.alts.forEach(altId => {
              const meal = mealsDb[altId];
              const div = document.createElement('div');
              div.className = 'bg-white border border-zinc-200/60 rounded-xl p-3 flex gap-4 items-center cursor-pointer active:scale-[0.98] transition-transform';
              div.onclick = () => selectAlternative(altId);
              div.innerHTML = `
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" class="w-16 h-16 rounded-lg object-cover bg-zinc-100 shrink-0">
                  <div class="flex-1 min-w-0">
                      <h4 class="text-sm font-semibold text-zinc-900 truncate">${meal.name} ${meal.emoji}</h4>
                      <p class="text-xs text-zinc-500 truncate mt-0.5">${meal.desc}</p>
                  </div>
                  <iconify-icon icon="solar:alt-arrow-right-linear" class="text-zinc-300" width="1.2em"></iconify-icon>
              `;
              container.appendChild(div);
          });

          document.getElementById('alternatives-sheet').classList.remove('translate-y-full');
          document.getElementById('alt-backdrop').classList.remove('hidden');
      }

      function closeAlternatives() {
          document.getElementById('alternatives-sheet').classList.add('translate-y-full');
          setTimeout(() => {
              document.getElementById('alt-backdrop').classList.add('hidden');
          }, 300);
      }

      function selectAlternative(altId) {
          const dayIndex = state.swapTargetDayIndex;
          const currentMealId = state.plan[dayIndex].meal;

          // Swap
          state.plan[dayIndex].meal = altId;
          // Put old meal into alts, remove new meal from alts
          state.plan[dayIndex].alts = state.plan[dayIndex].alts.filter(id => id !== altId);
          state.plan[dayIndex].alts.push(currentMealId);

          closeAlternatives();
          setTimeout(renderMealPlan, 300); // Wait for sheet animation
      }

      function calculateGroceries() {
          let required = {};

          // Gather ingredients
          state.plan.forEach(day => {
              const meal = mealsDb[day.meal];
              meal.req.forEach(ing => {
                  if (!required[ing]) required[ing] = 0;
                  required[ing] += state.servings * 0.5; // Arbitrary multiplier for demo
              });
          });

          let stores = {};
          let total = 0;
          let totalItems = 0;

          Object.keys(required).forEach(ingId => {
              const dbIng = ingredientsDb[ingId];
              if (!stores[dbIng.store]) stores[dbIng.store] = [];

              const qtyMultiplier = Math.ceil(required[ingId] / 2);
              const itemTotal = dbIng.price * qtyMultiplier;

              stores[dbIng.store].push({
                  name: dbIng.name,
                  icon: dbIng.icon,
                  price: itemTotal,
                  qty: qtyMultiplier
              });

              total += itemTotal;
              totalItems += qtyMultiplier;
          });

          return { stores, total, totalItems };
      }

      function renderGroceryList() {
          const { stores, total } = calculateGroceries();
          const container = document.getElementById('grocery-stores-container');
          container.innerHTML = '';

          document.getElementById('grocery-total-display').textContent = `$${total.toFixed(2)}`;

          const warning = document.getElementById('budget-warning');
          if (total > state.budget) {
              warning.classList.remove('hidden');
              document.getElementById('over-budget-amount').textContent = `$${(total - state.budget).toFixed(2)}`;
              document.getElementById('grocery-total-display').classList.add('text-red-600');
          } else {
              warning.classList.add('hidden');
              document.getElementById('grocery-total-display').classList.remove('text-red-600');
          }

          Object.keys(stores).forEach(storeName => {
              const storeItems = stores[storeName];
              const storeDiv = document.createElement('div');

              let itemsHtml = storeItems.map(item => `
                  <div class="flex justify-between items-center py-3 border-b border-zinc-100 last:border-0">
                      <div class="flex items-center gap-3">
                          <span class="text-xl w-8 text-center bg-zinc-50 rounded-lg py-1">${item.icon}</span>
                          <div>
                              <p class="text-sm font-medium text-zinc-900">${item.name}</p>
                              <p class="text-xs text-zinc-500">Qty: ${item.qty}</p>
                          </div>
                      </div>
                      <span class="text-sm font-medium text-zinc-700">$${item.price.toFixed(2)}</span>
                  </div>
              `).join('');

              storeDiv.innerHTML = `
                  <div class="mb-2 flex items-center gap-2">
                      <iconify-icon icon="solar:shop-linear" class="text-zinc-400"></iconify-icon>
                      <h3 class="text-sm font-bold tracking-wide text-zinc-800 uppercase">${storeName}</h3>
                  </div>
                  <div class="bg-white border border-zinc-200/60 rounded-xl px-4 shadow-sm">
                      ${itemsHtml}
                  </div>
              `;
              container.appendChild(storeDiv);
          });
      }

      function renderCheckout() {
          const { total, totalItems } = calculateGroceries();
          document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
          document.getElementById('checkout-item-count').textContent = totalItems;
      }

      function processPayment() {
          const btn = document.getElementById('primary-btn');
          btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="1.5em"></iconify-icon> Processing...';

          setTimeout(() => {
              document.getElementById('success-overlay').classList.remove('hidden');
              document.getElementById('success-overlay').classList.add('flex');
          }, 1500);
      }

      // Initialize
      init();
    
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
      

<div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl overflow-hidden flex flex-col" id="app">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200/60 px-5 py-4 flex items-center justify-between hidden" id="main-header">
<div className="flex items-center gap-3">
<button className="p-1 -ml-1 text-zinc-400 hover:text-zinc-900 transition-colors hidden" id="back-btn">
<iconify-icon icon="solar:alt-arrow-left-linear" width="1.5em"></iconify-icon>
</button>
<h1 className="text-base font-semibold tracking-tight text-zinc-900" id="header-title">
            Fill the Fridge
          </h1>
</div>
<div className="text-sm font-medium text-emerald-600" id="header-action"></div>
</header>

<main className="flex-1 overflow-y-auto hide-scrollbar relative pb-24" id="main-content">

<div className="screen flex flex-col h-full" id="screen-welcome">
<div className="relative w-full h-2/5 min-h-[240px] bg-zinc-900">
<img alt="Fridge interior" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0faac530-4ada-4338-a2fb-81f3caed85d7_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h1 className="text-3xl font-semibold tracking-tight text-white leading-tight">
                Eat Smarter.
                <br/>
                Spend Less.
                <br/>
                Waste Nothing.
              </h1>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-center">
<div className="space-y-5 mb-8">

<div className="flex gap-4 items-start">
<div className="mt-0.5 w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200/60 flex items-center justify-center shrink-0 text-xs font-semibold text-zinc-900 shadow-sm">
                  1
                </div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-0.5">
                    Snap Your Fridge
                  </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                    Take a quick photo of your fridge or pantry. Our AI
                    instantly recognizes what you already have.
                  </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="mt-0.5 w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200/60 flex items-center justify-center shrink-0 text-xs font-semibold text-zinc-900 shadow-sm">
                  2
                </div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-0.5">
                    Get Your 7-Day Family Plan
                  </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                    Receive a personalized weekly meal plan tailored to your
                    ingredients, family size, and budget.
                  </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="mt-0.5 w-6 h-6 rounded-full bg-zinc-50 border border-zinc-200/60 flex items-center justify-center shrink-0 text-xs font-semibold text-zinc-900 shadow-sm">
                  3
                </div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 mb-0.5">
                    Auto Grocery, Best Price
                  </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
                    We build the lowest-cost grocery cart from Walmart and
                    Loblaw and deliver straight to your door.
                  </p>
</div>
</div>
</div>
<button className="w-full bg-zinc-900 text-white rounded-xl py-4 text-sm font-medium tracking-tight hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm" onclick="startScan()">
<iconify-icon icon="solar:scanner-linear" width="1.2em"></iconify-icon>
              Scan Fridge
            </button>
<button className="w-full mt-4 text-zinc-500 text-sm font-medium hover:text-zinc-900 transition-colors" onclick="skipScan()">
              Skip &amp; enter manually
            </button>
</div>
</div>

<div className="screen hidden flex-col h-full bg-zinc-900 relative" id="screen-scanning">
<img alt="Scanning" className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0faac530-4ada-4338-a2fb-81f3caed85d7_1600w.webp"/>
<div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] scan-line z-10"></div>
<div className="relative z-20 flex flex-col items-center justify-center h-full p-6 text-center">
<iconify-icon className="text-emerald-400 mb-4 animate-pulse" icon="solar:cpu-linear" width="2.5em"></iconify-icon>
<h2 className="text-xl font-semibold tracking-tight text-white mb-2">
              Analyzing Contents...
            </h2>
<p className="text-sm text-zinc-400 mb-8">
              Identifying ingredients using AI
            </p>
<div className="flex flex-wrap justify-center gap-2 max-w-[280px]" id="detected-items">

</div>
</div>
</div>

<div className="screen hidden p-5" id="screen-preferences">
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">
              Tailor your plan
            </h2>
<p className="text-sm text-zinc-500">Tell us what you're aiming for.</p>
</div>
<div className="space-y-6">

<div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex gap-3 items-start">
<iconify-icon className="text-emerald-600 mt-0.5" icon="solar:check-circle-linear" width="1.2em"></iconify-icon>
<div>
<p className="text-sm font-medium text-emerald-900">
                  10 ingredients detected
                </p>
<p className="text-xs text-emerald-700/80 mt-1 leading-relaxed">
                  We found Chicken, Eggs, Salmon and 7 others. We'll use these
                  to reduce your grocery bill.
                </p>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-zinc-900 mb-3">
                Primary Goal
              </label>
<div className="grid grid-cols-2 gap-3">
<label className="relative cursor-pointer">
<input checked="" className="peer sr-only" name="goal" type="radio" value="weight_loss"/>
<div className="p-3 border border-zinc-200 rounded-xl flex items-center gap-2 transition-all">
<iconify-icon className="text-zinc-400" icon="solar:scale-linear" width="1.2em"></iconify-icon>
<span className="text-sm font-medium">Weight Loss</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="muscle"/>
<div className="p-3 border border-zinc-200 rounded-xl flex items-center gap-2 transition-all">
<iconify-icon className="text-zinc-400" icon="solar:dumbbell-linear" width="1.2em"></iconify-icon>
<span className="text-sm font-medium">Muscle Gain</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="health"/>
<div className="p-3 border border-zinc-200 rounded-xl flex items-center gap-2 transition-all">
<iconify-icon className="text-zinc-400" icon="solar:heart-pulse-linear" width="1.2em"></iconify-icon>
<span className="text-sm font-medium">Gen. Health</span>
</div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="goal" type="radio" value="kids"/>
<div className="p-3 border border-zinc-200 rounded-xl flex items-center gap-2 transition-all">
<iconify-icon className="text-zinc-400" icon="solar:users-group-two-rounded-linear" width="1.2em"></iconify-icon>
<span className="text-sm font-medium">Kid-Friendly</span>
</div>
</label>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-zinc-900 mb-3">
                Servings per meal
              </label>
<div className="flex items-center gap-4 bg-zinc-50 border border-zinc-200 rounded-xl p-2 w-max">
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 bg-white rounded-lg shadow-sm border border-zinc-200/60" onclick="adjustServings(-1)">
                  -
                </button>
<span className="w-6 text-center text-sm font-semibold" id="serving-size">
                  2
                </span>
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 bg-white rounded-lg shadow-sm border border-zinc-200/60" onclick="adjustServings(1)">
                  +
                </button>
</div>
</div>

<div>
<label className="block text-sm font-semibold text-zinc-900 mb-3">
                Weekly Grocery Budget (CAD)
              </label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">
                  $
                </span>
<input className="w-full pl-8 pr-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-sm font-medium focus:bg-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" id="budget-input" placeholder="150" type="number" value="150"/>
</div>
<p className="text-xs text-zinc-500 mt-2">
                We'll optimize ingredients to stay under this limit.
              </p>
</div>
</div>
</div>

<div className="screen hidden bg-zinc-50/50 min-h-full" id="screen-mealplan">
<div className="px-5 pt-5 pb-3 bg-white border-b border-zinc-200/60 sticky top-0 z-30">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">
              Your 7-Day Menu
            </h2>
<p className="text-sm text-zinc-500 mt-1">
              Based on your fridge and goal.
            </p>
</div>
<div className="p-5 space-y-6" id="meal-plan-container">

</div>
</div>

<div className="screen hidden bg-white min-h-full" id="screen-grocery">
<div className="px-5 pt-5 pb-4 bg-white sticky top-0 z-30 shadow-sm border-b border-zinc-200/60">
<div className="flex justify-between items-end mb-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                  Grocery List
                </h2>
<p className="text-sm text-zinc-500 mt-1">
                  Optimized across stores.
                </p>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500 mb-0.5">Estimated Total</p>
<p className="text-xl font-semibold tracking-tight text-zinc-900" id="grocery-total-display">
                  $0.00
                </p>
</div>
</div>
<div className="hidden bg-red-50 border border-red-100 rounded-lg p-3 flex gap-2 items-center" id="budget-warning">
<iconify-icon className="text-red-500" icon="solar:danger-triangle-linear" width="1.2em"></iconify-icon>
<p className="text-xs font-medium text-red-800">
                You are
                <span id="over-budget-amount"></span>
                over your weekly budget. Try swapping some meals.
              </p>
</div>
</div>
<div className="p-5 space-y-8" id="grocery-stores-container">

</div>
</div>


<div className="screen hidden bg-zinc-50 min-h-full p-5" id="screen-checkout">
<div className="mb-6 mt-4">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-1">
              Checkout
            </h2>
<p className="text-sm text-zinc-500">Demo Stripe integration.</p>
</div>
<div className="bg-white border border-zinc-200/60 rounded-2xl shadow-sm overflow-hidden mb-6">
<div className="p-5 border-b border-zinc-100">
<p className="text-sm font-medium text-zinc-500 mb-1">
                Total Grocery Order
              </p>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900" id="checkout-total">
                $0.00
              </h3>
</div>
<div className="p-5 space-y-4">
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Items (optimized)</span>
<span className="text-zinc-900 font-medium" id="checkout-item-count">
                  0
                </span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-500">Delivery</span>
<span className="text-zinc-900 font-medium">$0.00 (Demo)</span>
</div>
</div>
</div>
<div className="bg-white border border-zinc-200/60 rounded-xl p-4 shadow-sm mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:card-linear" width="1.2em"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900">
                Payment Details
              </span>
</div>
<div className="space-y-3">
<input className="w-full p-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm" disabled="" placeholder="Card number (Stripe Demo)" type="text"/>
<div className="grid grid-cols-2 gap-3">
<input className="w-full p-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm" disabled="" placeholder="MM/YY" type="text"/>
<input className="w-full p-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm" disabled="" placeholder="CVC" type="text"/>
</div>
</div>
</div>
</div>

<div className="fixed inset-x-0 bottom-0 z-50 transform translate-y-full transition-transform duration-300 ease-in-out" id="alternatives-sheet">
<div className="-top-[100vh] bg-zinc-900/40 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm" id="alt-backdrop" onclick="closeAlternatives()"></div>
<div className="relative bg-white rounded-t-3xl border-t border-zinc-200/60 shadow-2xl w-full max-w-md mx-auto h-[80vh] flex flex-col">
<div className="flex justify-center p-3">
<div className="w-12 h-1.5 bg-zinc-200 rounded-full"></div>
</div>
<div className="px-5 pb-3 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                Swap Meal
              </h3>
<button className="text-zinc-400 p-2" onclick="closeAlternatives()">
<iconify-icon icon="solar:close-circle-linear" width="1.5em"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-4 bg-zinc-50/50" id="alternatives-list">

</div>
</div>
</div>

<div className="fixed inset-0 z-50 bg-white hidden flex-col items-center justify-center text-center p-6" id="success-overlay">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 pop-in">
<iconify-icon icon="solar:check-read-linear" width="2em"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2 pop-in" style={{animationDelay: '0.1s'}}>
            Order Placed!
          </h2>
<p className="text-sm text-zinc-500 mb-8 max-w-[250px] pop-in" style={{animationDelay: '0.2s'}}>
            Your groceries are being sourced and will be delivered tomorrow.
          </p>
<button className="w-full max-w-[200px] bg-zinc-900 text-white rounded-xl py-3 text-sm font-medium pop-in" onclick="location.reload()" style={{animationDelay: '0.3s'}}>
            Start Over
          </button>
</div>
</main>

<footer className="absolute bottom-0 w-full bg-white border-t border-zinc-200/60 p-4 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.03)] hidden" id="bottom-action">
<button className="w-full bg-emerald-600 text-white rounded-xl py-3.5 text-sm font-semibold tracking-wide hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-2" id="primary-btn">
          Continue
        </button>
</footer>
</div>


    </>
  );
}
