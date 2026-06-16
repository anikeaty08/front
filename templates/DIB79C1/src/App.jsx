import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Primary brand
      const BRAND = { primary: '#A28139' };

      // Mock Data (replace with your real data sources)
      const Users = [
        { id: 'u_001', name: 'Inês Matias', email: 'ines@guest.com', tier: 'Member', pointsBalance: 12650,
          bookingsCount: 7, reviewsCount: 3, referralsCount: 1, nights: 18 }
      ];

      const PointsLedger = [
        { id:'pl_01', userId:'u_001', timestamp:'2025-08-07T18:12:00Z', source:'Booking #MV-482', points:+1800 },
        { id:'pl_02', userId:'u_001', timestamp:'2025-08-02T10:31:00Z', source:'Welcome Bonus', points:+500 },
        { id:'pl_03', userId:'u_001', timestamp:'2025-07-18T09:02:00Z', source:'Redeemed: Late Checkout', points:-300 },
        { id:'pl_04', userId:'u_001', timestamp:'2025-06-29T12:11:00Z', source:'Booking #MV-421', points:+1200 },
        { id:'pl_05', userId:'u_001', timestamp:'2025-06-01T08:45:00Z', source:'Seasonal Bonus', points:+200 },
        { id:'pl_06', userId:'u_001', timestamp:'2025-05-21T15:10:00Z', source:'Redeemed: Spa Access', points:-700 },
        { id:'pl_07', userId:'u_001', timestamp:'2025-05-11T11:20:00Z', source:'Booking #MV-408', points:+950 },
        { id:'pl_08', userId:'u_001', timestamp:'2025-04-03T10:00:00Z', source:'Referral Bonus', points:+300 },
        { id:'pl_09', userId:'u_001', timestamp:'2025-03-12T09:25:00Z', source:'Booking #MV-372', points:+1300 },
        { id:'pl_10', userId:'u_001', timestamp:'2025-02-10T08:10:00Z', source:'Redeemed: Breakfast', points:-150 },
        { id:'pl_11', userId:'u_001', timestamp:'2025-01-08T14:45:00Z', source:'Booking #MV-350', points:+1100 },
      ];

      const Rewards = [
        { id: 'rw_01', title: 'Spa Access', cost: 700, active: true },
        { id: 'rw_02', title: 'Late Checkout', cost: 300, active: true }
      ];

      const Lodgings = [
        {
          id:'l_01',
          title:'Forest Cabin',
          description:'A cozy timber cabin immersed in greenery. Perfect for couples or small families.\n\nAmenities:\n• Queen bed + sofa bed\n• Fireplace\n• Private deck\n• Kitchenette\n• Wi‑Fi',
          image:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop',
          capacity:4,
          priceText:'From €130/night',
          bookingLink:'https://www.matiasnaturevillage.pt'
        },
        {
          id:'l_02',
          title:'Riverside Lodge',
          description:'Wake to the sound of the river. Wide windows and a panoramic veranda.\n\nAmenities:\n• King bed\n• River view\n• Full kitchen\n• Outdoor grill\n• Wi‑Fi',
          image:'https://images.unsplash.com/photo-1499699966767-c9f0d7d9b0b1?q=80&w=1600&auto=format&fit=crop',
          capacity:2,
          priceText:'From €150/night',
          bookingLink:'https://www.matiasnaturevillage.pt'
        },
        {
          id:'l_03',
          title:'Hillside Villa',
          description:'Spacious villa nestled on a quiet hillside. Ideal for families.\n\nAmenities:\n• 2 Bedrooms\n• Garden & patio\n• Full kitchen\n• Workspace\n• Wi‑Fi',
          image:'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop',
          capacity:6,
          priceText:'From €220/night',
          bookingLink:'https://www.matiasnaturevillage.pt'
        },
      ];

      const News = [
        {
          id:'n_03',
          title:'Autumn Offer: Stay 3, Pay 2',
          content:'Celebrate autumn at Matias Nature Village. Enjoy vibrant colors, crisp air, and one free night on us when you book 3 nights during October or November.',
          image:'https://images.unsplash.com/photo-1507637282669-8b3621deab63?q=80&w=1600&auto=format&fit=crop',
          date:'2025-09-15T08:00:00Z',
          link:'https://www.matiasnaturevillage.pt'
        },
        {
          id:'n_02',
          title:'New Riverside Deck',
          content:'We’ve completed our new riverside deck with loungers and a firepit for starry nights. Guests can now book sunset sessions with complimentary herbal tea.',
          image:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
          date:'2025-08-22T09:00:00Z',
          link:''
        },
        {
          id:'n_01',
          title:'Wellness Mornings',
          content:'Join our guided forest breathing and morning stretch classes on weekends. Suitable for all levels. Complimentary for loyalty members.',
          image:'https://images.unsplash.com/photo-1520975933028-c5871ead2b30?q=80&w=1600&auto=format&fit=crop',
          date:'2025-07-30T10:00:00Z',
          link:''
        },
      ];

      // Store catalog
      const StoreItems = [
        { id:'st_01', title:'Breakfast for Two', cost:600, stock:5, image:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop' },
        { id:'st_02', title:'Late Checkout', cost:300, stock:10, image:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop' },
        { id:'st_03', title:'Spa Access', cost:700, stock:8, image:'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=1600&auto=format&fit=crop' },
        { id:'st_04', title:'Picnic Basket', cost:900, stock:4, image:'https://images.unsplash.com/photo-1522185117747-6b14f4a73b6e?q=80&w=1600&auto=format&fit=crop' },
        { id:'st_05', title:'Firewood Bundle', cost:200, stock:12, image:'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9716?q=80&w=1600&auto=format&fit=crop' },
        { id:'st_06', title:'River Kayak Hour', cost:1200, stock:3, image:'https://images.unsplash.com/photo-1518607692855-8a02c9d4b8b9?q=80&w=1600&auto=format&fit=crop' },
      ];

      // Badges
      const BADGE_DEFS = [
        { id:'b_first_stay', name:'First Stay', icon:'award', desc:'Completed your first booking', check:u=>u.bookingsCount>=1 },
        { id:'b_five_stays', name:'Explorer', icon:'compass', desc:'Completed 5 bookings', check:u=>u.bookingsCount>=5 },
        { id:'b_reviewer', name:'Reviewer', icon:'star', desc:'Left your first review', check:u=>u.reviewsCount>=1 },
        { id:'b_top_reviewer', name:'Top Reviewer', icon:'stars', desc:'Left 5 reviews', check:u=>u.reviewsCount>=5 },
        { id:'b_referral', name:'Advocate', icon:'users', desc:'Referred a new guest', check:u=>u.referralsCount>=1 },
        { id:'b_long_stay', name:'Long Stay', icon:'clock', desc:'Stayed 14+ nights total', check:u=>u.nights>=14 },
      ];

      // Simulate logged-in user
      const LOGGED_IN_USER_ID = 'u_001';

      // Utils
      function formatDate(d) {
        const dt = new Date(d);
        return dt.toLocaleString([], { year:'numeric', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit' });
      }
      function formatShortDate(d) {
        const dt = new Date(d);
        return dt.toLocaleDateString([], { year:'numeric', month:'short', day:'2-digit' });
      }
      function numberWithCommas(x){ return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

      // RENDER: Lodgings list
      function renderLodgingsList() {
        const grid = document.getElementById('lodgings-grid');
        grid.innerHTML = '';
        Lodgings.forEach(item => {
          const card = document.createElement('article');
          card.className = 'group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-sm hover:border-neutral-300 transition';
          card.innerHTML = `
            <div class="relative">
              <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80'}" alt="${item.title}">
              <div class="absolute top-3 left-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs text-neutral-700 border border-neutral-200" style="font-family:'Lato','Montserrat',ui-sans-serif">${item.priceText}</div>
            </div>
            <div class="p-4">
              <h3 style="font-family:'Cinzel',serif" class="text-[18px] tracking-tight text-neutral-900">${item.title}</h3>
              <div class="mt-1 flex items-center gap-2 text-sm text-neutral-600" style="font-family:'Lato','Montserrat',ui-sans-serif">
                <i data-lucide="users" class="w-4 h-4 text-[#A28139]"></i> Sleeps ${item.capacity}
              </div>
              <p class="mt-2 text-sm text-neutral-600 line-clamp-2" style="font-family:'Lato','Montserrat',ui-sans-serif">${item.description.replace(/\n/g,' ').slice(0,140)}...</p>
              <div class="mt-4 flex items-center justify-between">
                <a href="${item.bookingLink}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-lg bg-[#A28139] text-white px-3 py-2 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/40 transition">
                  <i data-lucide="calendar-days" class="w-4 h-4"></i> Book Now
                </a>
                <button data-id="${item.id}" class="open-lodging inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition">
                  <i data-lucide="info" class="w-4 h-4"></i> More Info
                </button>
              </div>
            </div>
          `;
          grid.appendChild(card);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        // Attach handlers
        grid.querySelectorAll('.open-lodging').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            openLodgingDetail(id);
          });
        });
      }

      // RENDER: Lodging detail
      function openLodgingDetail(id) {
        const item = Lodgings.find(l => l.id === id);
        if (!item) return;
        const el = document.getElementById('lodging-detail');
        el.innerHTML = `
          <div class="relative">
            <img class="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80'}" alt="${item.title}">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5">
              <h3 style="font-family:'Cinzel',serif" class="text-white text-[22px] tracking-tight font-medium">${item.title}</h3>
              <div class="mt-1 flex items-center gap-3 text-white/90" style="font-family:'Lato','Montserrat',ui-sans-serif">
                <span class="inline-flex items-center gap-1 text-sm"><i data-lucide="users" class="w-4 h-4 text-white"></i> Sleeps ${item.capacity}</span>
                <span class="inline-flex items-center gap-1 text-sm"><i data-lucide="badge-euro" class="w-4 h-4 text-white"></i> ${item.priceText}</span>
              </div>
            </div>
          </div>
          <div class="p-5 sm:p-6">
            <div class="flex flex-col sm:flex-row gap-3">
              <a href="${item.bookingLink}" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-lg bg-[#A28139] text-white px-4 py-2.5 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/40 transition">
                <i data-lucide="calendar-check-2" class="w-4 h-4"></i> Book Now
              </a>
              <details class="group w-full rounded-lg border border-neutral-200 bg-white open:bg-neutral-50 px-4 py-3">
                <summary class="list-none flex items-center justify-between cursor-pointer">
                  <span class="inline-flex items-center gap-2 text-sm text-neutral-800" style="font-family:'Lato','Montserrat',ui-sans-serif">
                    <i data-lucide="info" class="w-4 h-4 text-[#A28139]"></i> More Info
                  </span>
                  <i data-lucide="chevron-down" class="w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div class="mt-3 text-sm text-neutral-700 whitespace-pre-line leading-6" style="font-family:'Lato','Montserrat',ui-sans-serif">${item.description}</div>
              </details>
            </div>
          </div>
        `;
        showView('lodging-detail');
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // RENDER: News
      function renderNews() {
        const feed = document.getElementById('news-feed');
        feed.innerHTML = '';
        const sorted = [...News].sort((a,b)=> new Date(b.date) - new Date(a.date));
        sorted.forEach(n => {
          const card = document.createElement('article');
          card.className = 'group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-sm hover:border-neutral-300 transition';
          card.innerHTML = `
            <div class="relative">
              <img class="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80'}" alt="${n.title}">
              <div class="absolute top-3 left-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs text-neutral-700 border border-neutral-200" style="font-family:'Lato','Montserrat',ui-sans-serif">${formatShortDate(n.date)}</div>
            </div>
            <div class="p-4">
              <h3 style="font-family:'Cinzel',serif" class="text-[18px] tracking-tight text-neutral-900">${n.title}</h3>
              <p class="mt-1 text-sm text-neutral-600 line-clamp-3" style="font-family:'Lato','Montserrat',ui-sans-serif">${n.content}</p>
              <div class="mt-4 flex items-center justify-between">
                <button data-id="${n.id}" class="open-news inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition">
                  <i data-lucide="book-open" class="w-4 h-4"></i> Read
                </button>
                <a ${n.link ? `href="${n.link}" target="_blank" rel="noopener"` : ''} class="inline-flex items-center gap-2 text-xs text-neutral-600 hover:text-neutral-900">
                  <i data-lucide="external-link" class="w-4 h-4"></i> ${n.link ? 'Open site' : 'Details'}
                </a>
              </div>
            </div>
          `;
          feed.appendChild(card);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        feed.querySelectorAll('.open-news').forEach(btn=>{
          btn.addEventListener('click', (e)=>{
            const id = e.currentTarget.getAttribute('data-id');
            openNews(id);
          });
        });
      }

      function openNews(id){
        const n = News.find(x=>x.id===id);
        if(!n) return;
        if (n.link && n.link.trim().length>0) {
          window.open(n.link, '_blank', 'noopener');
          return;
        }
        const modal = document.getElementById('news-modal');
        document.getElementById('news-modal-title').textContent = n.title;
        document.getElementById('news-modal-image').src = n.image || '';
        document.getElementById('news-modal-date').textContent = formatDate(n.date);
        document.getElementById('news-modal-content').textContent = n.content;
        modal.classList.remove('hidden');
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // RENDER: Points
      function currentUser(){ return Users.find(u=>u.id===LOGGED_IN_USER_ID); }
      function setUserBalance(newBalance){
        const user = currentUser();
        if (!user) return;
        user.pointsBalance = Math.max(0, newBalance);
        document.getElementById('points-balance').textContent = numberWithCommas(user.pointsBalance);
        document.getElementById('store-balance').textContent = numberWithCommas(user.pointsBalance) + ' pts';
      }
      function addLedgerEntry(source, points){
        PointsLedger.unshift({
          id: 'pl_' + Date.now(),
          userId: LOGGED_IN_USER_ID,
          timestamp: new Date().toISOString(),
          source, points
        });
      }
      function renderPoints() {
        const user = currentUser();
        const ledger = PointsLedger.filter(p=>p.userId===LOGGED_IN_USER_ID).sort((a,b)=> new Date(b.timestamp)-new Date(a.timestamp));
        const balance = (user && typeof user.pointsBalance === 'number')
            ? user.pointsBalance
            : ledger.reduce((acc, row)=> acc + row.points, 0);

        document.getElementById('points-balance').textContent = numberWithCommas(balance);
        document.getElementById('points-last-updated').textContent = 'Updated ' + formatShortDate(new Date().toISOString());

        const list = document.getElementById('ledger-list');
        list.innerHTML = '';
        ledger.slice(0,10).forEach(row=>{
          const li = document.createElement('div');
          li.className = 'flex items-center justify-between px-5 py-3';
          const sign = row.points > 0 ? '+' : '';
          li.innerHTML = `
            <div>
              <p class="text-sm text-neutral-900" style="font-family:'Lato','Montserrat',ui-sans-serif">${row.source}</p>
              <p class="text-xs text-neutral-500" style="font-family:'Lato','Montserrat',ui-sans-serif">${formatDate(row.timestamp)}</p>
            </div>
            <div class="text-sm ${row.points>0 ? 'text-[#A28139]' : 'text-red-600'}" style="font-family:'Cinzel',serif">${sign}${row.points}</div>
          `;
          list.appendChild(li);
        });
        // sync store balance
        document.getElementById('store-balance').textContent = numberWithCommas(balance) + ' pts';
      }

      // RENDER: Account + Badges
      function computeBadges(user){
        return BADGE_DEFS.map(def => ({
          ...def,
          earned: !!def.check(user)
        }));
      }
      function renderAccount(){
        const user = currentUser();
        if(!user) return;
        document.getElementById('acc-name').textContent = user.name || 'Guest';
        document.getElementById('acc-email').textContent = user.email || 'guest@example.com';
        document.getElementById('acc-id').textContent = 'ID: ' + (user.id || '—');
        document.getElementById('acc-tier').textContent = 'Tier: ' + (user.tier || 'Member');

        // badges
        const badges = computeBadges(user);
        const grid = document.getElementById('badges-grid');
        grid.innerHTML = '';
        badges.forEach(b=>{
          const card = document.createElement('div');
          card.className = 'rounded-xl border ' + (b.earned ? 'border-neutral-200 bg-white' : 'border-dashed border-neutral-200 bg-neutral-50');
          card.innerHTML = `
            <div class="p-4 flex items-start gap-3">
              <div class="rounded-lg ${b.earned ? 'bg-neutral-100' : 'bg-neutral-100'} p-2">
                <i data-lucide="${b.icon}" class="w-5 h-5 ${b.earned ? 'text-[#A28139]' : 'text-neutral-400'}"></i>
              </div>
              <div class="flex-1">
                <p class="${b.earned ? 'text-neutral-900' : 'text-neutral-500'}" style="font-family:'Cinzel',serif">${b.name}</p>
                <p class="text-sm ${b.earned ? 'text-neutral-600' : 'text-neutral-400'}" style="font-family:'Lato','Montserrat',ui-sans-serif">${b.desc}</p>
              </div>
              <div class="rounded-md ${b.earned ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'} px-2.5 py-1 text-xs" style="font-family:'Lato','Montserrat',ui-sans-serif">
                ${b.earned ? 'Unlocked' : 'Locked'}
              </div>
            </div>
          `;
          grid.appendChild(card);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // RENDER: Store
      function showStoreAlert(msg){
        const el = document.getElementById('store-alert');
        el.textContent = msg;
        el.classList.remove('hidden');
        setTimeout(()=>el.classList.add('hidden'), 2500);
      }
      function renderStore(){
        const user = currentUser();
        document.getElementById('store-balance').textContent = numberWithCommas(user.pointsBalance) + ' pts';
        const grid = document.getElementById('store-grid');
        grid.innerHTML = '';
        StoreItems.forEach(it=>{
          const canRedeem = user.pointsBalance >= it.cost && it.stock > 0;
          const card = document.createElement('article');
          card.className = 'group rounded-2xl border border-neutral-200 bg-white overflow-hidden hover:shadow-sm hover:border-neutral-300 transition';
          card.innerHTML = `
            <div class="relative">
              <img class="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${it.title}">
              <div class="absolute top-3 left-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs text-neutral-700 border border-neutral-200" style="font-family:'Lato','Montserrat',ui-sans-serif">${numberWithCommas(it.cost)} pts</div>
            </div>
            <div class="p-4">
              <h3 style="font-family:'Cinzel',serif" class="text-[18px] tracking-tight text-neutral-900">${it.title}</h3>
              <p class="mt-1 text-xs text-neutral-600" style="font-family:'Lato','Montserrat',ui-sans-serif">Stock: ${it.stock}</p>
              <div
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">

<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-white shadow-sm px-2.5 py-1.5">
<span className="text-[18px] tracking-tight text-[#A28139]" style={{fontFamily: '\'Cinzel\',serif'}}>MNV</span>
</div>
<div>
<h1 className="text-[20px] sm:text-[22px] tracking-tight font-medium text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Matias Nature Village</h1>
<p className="text-sm text-neutral-500" style={{fontFamily: '\'Lato\', \'Montserrat\', ui-sans-serif, system-ui'}}>Guest Loyalty &amp; Rentals</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-3">
<div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
<i className="w-4 h-4 text-[#A28139]" data-lucide="badge-percent"></i>
<span className="text-sm text-neutral-700" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Member</span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" id="to-points">
<i className="w-4 h-4 text-[#A28139]" data-lucide="wallet"></i>
<span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>My Points</span>
</button>
</div>
</div>

<nav className="hidden md:flex items-center gap-1 pb-2">
<button aria-current="page" className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="home">
<i className="w-4 h-4" data-lucide="home"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Home</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="lodgings">
<i className="w-4 h-4" data-lucide="bed-double"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Lodgings</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="news">
<i className="w-4 h-4" data-lucide="newspaper"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>News &amp; Offers</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="points">
<i className="w-4 h-4" data-lucide="wallet"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>My Points</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="store">
<i className="w-4 h-4" data-lucide="shopping-bag"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Store</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="help">
<i className="w-4 h-4" data-lucide="help-circle"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Help</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="account">
<i className="w-4 h-4" data-lucide="user"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Account</span>
</button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="admin">
<i className="w-4 h-4" data-lucide="wrench"></i><span className="tracking-tight" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Admin</span>
</button>
</nav>
</header>

<main className="py-6 md:py-8">

<section className="app-view space-y-6" id="view-home">
<div className="relative overflow-hidden rounded-2xl border border-neutral-200">
<img alt="Nature Lodging" className="h-64 w-full object-cover sm:h-80" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
<h2 className="text-white text-[24px] sm:text-[28px] tracking-tight font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>Welcome to Matias Nature Village</h2>
<p className="mt-1.5 text-white/90 text-sm sm:text-base" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Nature escapes, curated stays, and a loyalty program built for you.</p>
<div className="mt-4 flex items-center gap-2">
<button className="tab-btn inline-flex items-center gap-2 rounded-lg bg-[#A28139] text-white px-4 py-2 text-sm font-medium hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/40 transition" data-tab="lodgings">
<i className="w-4 h-4" data-lucide="bed-double"></i> Explore Lodgings
                </button>
<button className="tab-btn inline-flex items-center gap-2 rounded-lg border border-white/80 bg-white/90 text-neutral-900 px-4 py-2 text-sm hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="news">
<i className="w-4 h-4" data-lucide="newspaper"></i> News &amp; Offers
                </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="trees"></i></div>
<div>
<p className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Nature First</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Sustainable stays amid serene landscapes.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="sparkles"></i></div>
<div>
<p className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Curated Comfort</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Thoughtful amenities and design details.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="badge-percent"></i></div>
<div>
<p className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Loyalty Perks</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Earn and redeem for exclusive experiences.</p>
</div>
</div>
</div>
</div>
</section>

<section className="app-view hidden" id="view-lodgings">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-[22px] tracking-tight text-neutral-900 font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>Lodgings</h2>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600">
<i className="w-4 h-4 text-[#A28139]" data-lucide="filter"></i> Browse our collection
              </div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="lodgings-grid"></div>
</section>

<section className="app-view hidden" id="view-lodging-detail">
<button className="mb-4 inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 transition" id="back-to-lodgings">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Lodgings
          </button>
<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden" id="lodging-detail">

</div>
</section>

<section className="app-view hidden" id="view-news">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-[22px] tracking-tight text-neutral-900 font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>News &amp; Offers</h2>
<span className="text-sm text-neutral-500" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Latest updates from Matias Nature Village</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="news-feed"></div>
</section>

<section className="app-view hidden space-y-5" id="view-store">
<div className="flex items-center justify-between">
<h2 className="text-[22px] tracking-tight text-neutral-900 font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>Store</h2>
<div className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5">
<i className="w-4 h-4 text-[#A28139]" data-lucide="wallet"></i>
<span className="text-sm text-neutral-700" id="store-balance" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>0</span>
</div>
</div>
<div className="hidden rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800" id="store-alert" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}></div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" id="store-grid"></div>
</section>

<section className="app-view hidden space-y-5" id="view-help">
<div>
<h2 className="text-[22px] tracking-tight text-neutral-900 font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>How to Earn Points</h2>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Ways to grow your balance</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 space-y-4">
<div className="flex items-start gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="calendar-days"></i></div>
<div>
<p className="text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Bookings</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Earn 10 points for every €1 spent on eligible stays (pre‑tax).</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="star"></i></div>
<div>
<p className="text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Stay Reviews</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Leave a verified review after checkout: +300 points per review.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="users"></i></div>
<div>
<p className="text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Referrals</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Invite friends who complete a stay: +1000 points per referral.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="gift"></i></div>
<div>
<p className="text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Seasonal Bonuses</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Look out for limited‑time promos on longer stays or weekdays.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="rounded-lg bg-neutral-100 p-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="award"></i></div>
<div>
<p className="text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Badges</p>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Unlock badges through bookings, reviews, referrals, and nights stayed. Badges showcase your milestones.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<p className="text-sm text-neutral-700" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Redeem your points in the Store for perks like breakfast, spa access, and late checkout. Some rewards are subject to availability.</p>
</div>
</section>

<section className="app-view hidden space-y-5" id="view-points">
<div className="flex flex-col sm:flex-row gap-5">

<div className="flex-1 rounded-2xl border border-neutral-200 overflow-hidden">
<div className="bg-[#A28139] text-white px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-white/15 p-2"><i className="w-5 h-5 text-white" data-lucide="wallet"></i></div>
<div>
<p className="text-[18px] tracking-tight font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>My Points</p>
<p className="text-white/90 text-sm" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Current Balance</p>
</div>
</div>
<div className="text-right">
<p className="text-[28px] tracking-tight font-medium" id="points-balance" style={{fontFamily: '\'Cinzel\',serif'}}>0</p>
<p className="text-xs text-white/80" id="points-last-updated" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}></p>
</div>
</div>
</div>
<div className="bg-white px-6 py-4">
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Earn points on bookings and redeem for exclusive perks and stays.</p>
</div>
</div>

<div className="w-full sm:w-[360px] space-y-3">
<button className="tab-btn w-full inline-flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="lodgings">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="bed-double"></i><span className="text-sm" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Book &amp; Earn</span></div>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<button className="tab-btn w-full inline-flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="store">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="shopping-bag"></i><span className="text-sm" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Redeem in Store</span></div>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<button className="tab-btn w-full inline-flex items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" data-tab="help">
<div className="flex items-center gap-2"><i className="w-5 h-5 text-[#A28139]" data-lucide="help-circle"></i><span className="text-sm" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>How to Earn</span></div>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Recent Activity</h3>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Last 10 transactions</p>
</div>
<div className="divide-y divide-neutral-200" id="ledger-list"></div>
</div>
</section>

<section className="app-view hidden space-y-5" id="view-account">
<div className="mb-1">
<h2 className="text-[22px] tracking-tight text-neutral-900 font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>Account</h2>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Manage your profile and preferences</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 flex items-start gap-4" id="account-card">
<img alt="User" className="h-16 w-16 rounded-xl object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-[18px] tracking-tight text-neutral-900" id="acc-name" style={{fontFamily: '\'Cinzel\',serif'}}>Guest</p>
<p className="text-sm text-neutral-600" id="acc-email" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>guest@example.com</p>
<div className="mt-3 flex items-center gap-2">
<div className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700" id="acc-tier" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Tier: Member</div>
<div className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700" id="acc-id" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>ID: —</div>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
            </button>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white">
<div className="px-5 py-4 border-b border-neutral-200">
<h3 className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Badges</h3>
<p className="text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Milestones you’ve unlocked</p>
</div>
<div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="badges-grid"></div>
</div>
</section>

<section className="app-view hidden space-y-6" id="view-admin">
<div className="flex items-center justify-between">
<h2 className="text-[22px] tracking-tight text-neutral-900 font-medium" style={{fontFamily: '\'Cinzel\',serif'}}>Admin</h2>
<div className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-600" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>
<i className="w-4 h-4 text-[#A28139]" data-lucide="shield"></i> Admin Tools
            </div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<h3 className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Manage News</h3>
<span className="text-xs text-neutral-500" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Add or edit articles</span>
</div>
<div className="p-5 space-y-4">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="admin-news-form">
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-news-title" placeholder="Title"/>
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-news-image" placeholder="Image URL"/>
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-news-date" type="datetime-local"/>
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-news-link" placeholder="External Link (optional)"/>
<textarea className="sm:col-span-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-news-content" placeholder="Content" rows="2"></textarea>
<div className="sm:col-span-2 flex items-center justify-end">
<button className="inline-flex items-center gap-2 rounded-lg bg-[#A28139] text-white px-3 py-2 text-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/40" type="submit">
<i className="w-4 h-4" data-lucide="plus"></i> Add News
                  </button>
</div>
</form>
<div className="divide-y divide-neutral-200" id="admin-news-list"></div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between">
<h3 className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '\'Cinzel\',serif'}}>Manage Lodgings</h3>
<span className="text-xs text-neutral-500" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Add or edit units</span>
</div>
<div className="p-5 space-y-4">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="admin-lodging-form">
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-l-title" placeholder="Title"/>
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-l-image" placeholder="Image URL"/>
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-l-capacity" min="1" placeholder="Capacity" type="number"/>
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-l-price" placeholder="Price text (e.g., From €130/night)"/>
<input className="rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-l-book" placeholder="Booking link"/>
<textarea className="sm:col-span-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#A28139]/30" id="admin-l-desc" placeholder="Description" rows="2"></textarea>
<div className="sm:col-span-2 flex items-center justify-end">
<button className="inline-flex items-center gap-2 rounded-lg bg-[#A28139] text-white px-3 py-2 text-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/40" type="submit">
<i className="w-4 h-4" data-lucide="plus"></i> Add Lodging
                  </button>
</div>
</form>
<div className="divide-y divide-neutral-200" id="admin-lodgings-list"></div>
</div>
</div>
</section>
</main>

<nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-neutral-200 bg-white/95 backdrop-blur">
<div className="mx-auto max-w-6xl px-3">
<div className="grid grid-cols-8">
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="home">
<i className="w-5 h-5" data-lucide="home"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Home</span>
</button>
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="lodgings">
<i className="w-5 h-5" data-lucide="bed-double"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Stay</span>
</button>
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="news">
<i className="w-5 h-5" data-lucide="newspaper"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>News</span>
</button>
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="points">
<i className="w-5 h-5" data-lucide="wallet"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Points</span>
</button>
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="store">
<i className="w-5 h-5" data-lucide="shopping-bag"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Store</span>
</button>
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="help">
<i className="w-5 h-5" data-lucide="help-circle"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Help</span>
</button>
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="account">
<i className="w-5 h-5" data-lucide="user"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Account</span>
</button>
<button className="tab-btn flex flex-col items-center py-2 text-[11px] text-neutral-600" data-tab="admin">
<i className="w-5 h-5" data-lucide="wrench"></i><span className="mt-1" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}>Admin</span>
</button>
</div>
</div>
</nav>
</div>

<div className="fixed inset-0 z-50 hidden" id="news-modal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative mx-auto max-w-2xl mt-16 sm:mt-24">
<div className="mx-4 rounded-2xl border border-neutral-200 bg-white overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200">
<h4 className="text-[18px] tracking-tight text-neutral-900" id="news-modal-title" style={{fontFamily: '\'Cinzel\',serif'}}>Article</h4>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A28139]/30 transition" id="news-modal-close">
<i className="w-4 h-4" data-lucide="x"></i> Close
            </button>
</div>
<div className="p-0">
<img alt="News" className="w-full h-56 object-cover" id="news-modal-image" src=""/>
<div className="p-5">
<p className="text-xs text-neutral-500" id="news-modal-date" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}></p>
<p className="mt-2 text-neutral-700 text-sm leading-6" id="news-modal-content" style={{fontFamily: '\'Lato\',\'Montserrat\',ui-sans-serif'}}></p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
