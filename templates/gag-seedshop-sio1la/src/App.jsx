import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const el = {
      list: document.getElementById('list'),
      coins: document.getElementById('coins'),
      timer: document.getElementById('timer'),
      restock: document.getElementById('restock'),
      closeShop: document.getElementById('closeShop'),
      search: document.getElementById('search'),
      toasts: document.getElementById('toasts'),
    };

    const rarityColors = {
      "Common": { bg: "bg-stone-600", border: "border-stone-900", text: "text-stone-100" },
      "Uncommon": { bg: "bg-green-700", border: "border-green-950", text: "text-green-100" },
      "Rare": { bg: "bg-blue-700", border: "border-blue-950", text: "text-blue-100" },
      "Epic": { bg: "bg-purple-700", border: "border-purple-950", text: "text-purple-100" },
      "Legendary": { bg: "bg-amber-600", border: "border-amber-950", text: "text-amber-100" },
    };

    const baseSeeds = [
      { id: "tomato", name: "TOMATO", emoji: "🍅", price: 25, rarity: "Common", growTime: "2m" },
      { id: "carrot", name: "CARROT", emoji: "🥕", price: 30, rarity: "Common", growTime: "3m" },
      { id: "corn", name: "CORN", emoji: "🌽", price: 50, rarity: "Uncommon", growTime: "5m" },
      { id: "strawberry", name: "STRAWBERRY", emoji: "🍓", price: 75, rarity: "Uncommon", growTime: "6m" },
      { id: "pumpkin", name: "PUMPKIN", emoji: "🎃", price: 150, rarity: "Rare", growTime: "10m" },
      { id: "watermelon", name: "WATERMELON", emoji: "🍉", price: 200, rarity: "Rare", growTime: "12m" },
      { id: "eggplant", name: "EGGPLANT", emoji: "🍆", price: 350, rarity: "Epic", growTime: "18m" },
      { id: "sunflower", name: "SUNFLOWER", emoji: "🌻", price: 500, rarity: "Epic", growTime: "25m" },
      { id: "rainbow", name: "RAINBOW PLANT", emoji: "🌈", price: 1500, rarity: "Legendary", growTime: "45m" },
    ];

    let seeds = [];
    let user = { coins: 1234 };
    let ui = { q: "" };

    function formatCoins(v) {
      return v.toLocaleString();
    }

    function restockSeeds() {
      seeds = baseSeeds.map(s => {
        const stock = Math.floor(Math.random() * 15) + 5;
        return { ...s, stock };
      });
    }

    function render() {
      let items = seeds.filter(s => s.name.toLowerCase().includes(ui.q));

      el.list.innerHTML = items.map(s => {
        const colors = rarityColors[s.rarity];
        return `
          <div id="seed-${s.id}" class="flex items-center gap-4 ${colors.bg} border-4 ${colors.border} p-4 hover:opacity-90 transition-all">
            <div class="text-5xl flex-shrink-0"><span id="emoji-${s.id}">${s.emoji}</span></div>
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-2xl ${colors.text}">${s.name}</h3>
                <div class="bg-amber-800 border-2 ${colors.border} ${colors.text} px-3 py-1 text-xs">
                  ${s.rarity.toUpperCase()}
                </div>
              </div>
              <div class="flex items-center gap-4 text-sm ${colors.text}">
                <div class="flex items-center gap-1">
                  <i data-lucide="clock" class="size-4"></i>
                  <span>${s.growTime}</span>
                </div>
                <div class="flex items-center gap-1">
                  <i data-lucide="package" class="size-4"></i>
                  <span>${s.stock} LEFT</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 flex-shrink-0">
              <div class="flex items-center gap-2 bg-amber-700 border-4 border-amber-950 px-4 py-2">
                <i data-lucide="coins" class="size-5 text-amber-100"></i>
                <span class="text-xl text-amber-100">${formatCoins(s.price)}</span>
              </div>
              <button data-id="${s.id}" class="buy bg-green-600 hover:bg-green-500 border-4 border-green-950 text-green-50 px-6 py-2 disabled:bg-stone-600 disabled:border-stone-900" ${s.stock <= 0 ? 'disabled' : ''}>
                <i data-lucide="shopping-cart" class="inline size-5 -mt-0.5"></i> BUY
              </button>
            </div>
          </div>
        `;
      }).join("");

      el.coins.textContent = formatCoins(user.coins);

      document.querySelectorAll('button.buy').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const seed = seeds.find(s => s.id === id);
          if (!seed) return;

          if (seed.stock <= 0) return toast("OUT OF STOCK!", "alert-triangle", "bg-red-700 border-red-950");
          if (user.coins < seed.price) return toast("NOT ENOUGH COINS!", "circle-slash", "bg-red-700 border-red-950");

          user.coins -= seed.price;
          seed.stock -= 1;

          // Add crazy glow effect to the seed card
          const seedCard = document.getElementById(`seed-${id}`);
          const emojiEl = document.getElementById(`emoji-${id}`);
          
          if (seedCard) {
            // Remove class if already present
            seedCard.classList.remove('crazy-glow-effect');
            // Force reflow
            void seedCard.offsetWidth;
            // Add class
            seedCard.classList.add('crazy-glow-effect');
            setTimeout(() => {
              seedCard.classList.remove('crazy-glow-effect');
            }, 1500);
          }

          if (emojiEl) {
            // Remove class if already present
            emojiEl.classList.remove('emoji-dance');
            // Force reflow
            void emojiEl.offsetWidth;
            // Add class
            emojiEl.classList.add('emoji-dance');
            setTimeout(() => {
              emojiEl.classList.remove('emoji-dance');
            }, 1500);
          }

          toast(`BOUGHT ${seed.name}! ${seed.emoji}`, "check-circle-2", "bg-green-600 border-green-950");
          
          // Delay render to allow animation to play
          setTimeout(() => render(), 1500);
        });
      });

      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    function toast(msg, icon = "bell", colors = "bg-stone-700 border-stone-950") {
      const id = 't' + Math.random().toString(36).slice(2);
      const node = document.createElement('div');
      node.id = id;
      node.className = `pointer-events-auto flex items-center gap-3 ${colors} border-4 text-white px-5 py-3 text-lg`;
      node.innerHTML = `<i data-lucide="${icon}" class="size-6"></i><span>${msg}</span>`;
      el.toasts.appendChild(node);
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      setTimeout(() => {
        node.style.transition = 'all 0.3s';
        node.style.opacity = '0';
        node.style.transform = 'translateX(100px)';
        setTimeout(() => node.remove(), 300);
      }, 2500);
    }

    let remaining = 892;

    function updateTimer() {
      const m = String(Math.floor(remaining / 60)).padStart(2, '0');
      const s = String(remaining % 60).padStart(2, '0');
      el.timer.textContent = `${m}:${s}`;
      remaining = Math.max(0, remaining - 1);
      if (remaining === 0) {
        toast("NEW SEEDS AVAILABLE!", "sprout", "bg-green-600 border-green-950");
        restockSeeds();
        render();
        remaining = 900;
      }
    }

    setInterval(updateTimer, 1000);

    el.restock.addEventListener('click', () => {
      restockSeeds();
      render();
      remaining = 900;
      toast("SHOP RESTOCKED!", "refresh-cw", "bg-green-600 border-green-950");
    });

    el.closeShop.addEventListener('click', () => {
      toast("THANKS FOR SHOPPING!", "heart", "bg-amber-600 border-amber-950");
    });

    el.search.addEventListener('input', (e) => {
      ui.q = e.target.value.trim().toLowerCase();
      render();
    });

    restockSeeds();
    render();
    updateTimer();

    if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-green-900 border-b-4 border-green-950 p-4 flex items-center justify-between">
<button className="bg-amber-700 border-4 border-amber-900 px-4 py-2 hover:bg-amber-600">
<i className="size-6 text-amber-100" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-amber-600 border-4 border-amber-900 px-5 py-2">
<i className="size-7 text-amber-100" data-lucide="coins"></i>
<span className="text-2xl text-amber-100" id="coins">1,234</span>
</div>
<button className="bg-green-600 border-4 border-green-950 px-4 py-2 hover:bg-green-500">
<i className="size-6 text-green-100" data-lucide="plus"></i>
</button>
</div>
</header>

<main className="mx-auto w-full max-w-4xl px-4 py-6">
<div className="bg-green-700 border-4 border-green-950">

<div className="bg-green-600 border-b-4 border-green-950 px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="bg-green-800 border-4 border-green-950 p-3">
<i className="size-10 text-green-100" data-lucide="sprout"></i>
</div>
<div>
<h1 className="text-4xl text-green-50">SEED SHOP</h1>
<p className="text-green-100 text-lg mt-1">Choose your seeds wisely!</p>
</div>
</div>
<button className="bg-red-700 hover:bg-red-600 border-4 border-red-950 text-red-50 p-3" id="closeShop">
<i className="size-7" data-lucide="x"></i>
</button>
</div>

<div className="mt-4 flex items-center justify-center gap-3 bg-green-800 border-4 border-green-950 px-5 py-3">
<i className="size-6 text-green-100" data-lucide="clock"></i>
<span className="text-green-100 text-xl">NEXT RESTOCK: <span id="timer">14:52</span></span>
<button className="ml-2 bg-amber-600 hover:bg-amber-500 border-4 border-amber-900 text-amber-50 px-4 py-2" id="restock">
<i className="inline size-5 -mt-0.5" data-lucide="refresh-cw"></i> RESTOCK
          </button>
</div>
</div>

<div className="flex items-center gap-2 px-6 py-4 bg-green-700 border-b-4 border-green-950">
<button className="flex-1 bg-green-600 border-4 border-green-950 text-green-50 px-6 py-3 text-lg hover:bg-green-500">
<i className="inline size-5 -mt-0.5 mr-1" data-lucide="leaf"></i> ALL SEEDS
        </button>
<button className="flex-1 bg-green-800 border-4 border-green-950 text-green-100 px-6 py-3 text-lg hover:bg-green-700">
<i className="inline size-5 -mt-0.5 mr-1" data-lucide="sparkles"></i> SPECIAL
        </button>
<button className="flex-1 bg-green-800 border-4 border-green-950 text-green-100 px-6 py-3 text-lg hover:bg-green-700">
<i className="inline size-5 -mt-0.5 mr-1" data-lucide="heart"></i> FAVORITES
        </button>
</div>

<div className="px-6 py-4 bg-green-700">
<div className="flex items-center gap-3 bg-green-800 border-4 border-green-950 px-5 py-3">
<i className="size-6 text-green-300" data-lucide="search"></i>
<input className="flex-1 bg-transparent text-green-50 placeholder-green-300 focus:outline-none text-lg" id="search" placeholder="SEARCH FOR SEEDS..." type="text"/>
</div>
</div>

<div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto bg-green-700" id="list">

</div>
</div>
</main>

<div className="pointer-events-none fixed top-20 right-4 z-50 space-y-3" id="toasts"></div>




    </>
  );
}
