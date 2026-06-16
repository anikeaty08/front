import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- ICONS & DATA ---
        lucide.createIcons();

        let marketData = [
            { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 64230.50, change: 2.34, mcap: '1.2T', type: 'layer1', starred: true, logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg' },
            { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3450.12, change: -0.45, mcap: '400B', type: 'layer1', starred: true, logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg' },
            { id: 3, name: 'Solana', symbol: 'SOL', price: 145.20, change: 8.12, mcap: '65B', type: 'layer1', starred: false, logo: 'https://cryptologos.cc/logos/solana-sol-logo.svg' },
            { id: 4, name: 'Tether', symbol: 'USDT', price: 1.00, change: 0.01, mcap: '103B', type: 'stable', starred: false, logo: 'https://cryptologos.cc/logos/tether-usdt-logo.svg' },
            { id: 5, name: 'BNB', symbol: 'BNB', price: 590.20, change: 1.20, mcap: '87B', type: 'layer1', starred: false, logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg' },
            { id: 6, name: 'XRP', symbol: 'XRP', price: 0.62, change: -1.10, mcap: '34B', type: 'layer1', starred: false, logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg' },
            { id: 7, name: 'Dogecoin', symbol: 'DOGE', price: 0.16, change: 3.20, mcap: '23B', type: 'layer1', starred: false, logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg' }
        ];

        let profiles = {
            'personal': { name: 'Zoin M.', cash: 5240.50, assets: [ { symbol: 'BTC', amount: 0.25 }, { symbol: 'ETH', amount: 4.5 } ], staked: [] },
            'corp': { name: 'Quack Trading Ltd', cash: 120500.00, assets: [ { symbol: 'USDT', amount: 250000 }, { symbol: 'BTC', amount: 2.1 } ], staked: [] }
        };

        let currentIdentity = 'personal';
        let currentMarketFilter = 'all';
        let currentSort = { key: 'mcap', dir: 'desc' };
        let stakingSelection = { ticker: '', apy: 0 };
        let activeChartPair = 'BTC';

        function init() {
            renderOverview();
            renderMarket();
            renderStaking();
            // Wait for DOM
            setTimeout(() => {
                 if(document.getElementById('trading').classList.contains('active-view')) {
                     generateChartData('BTC');
                 }
            }, 100);
        }

        // --- NAVIGATION ---
        function router(viewId) {
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            document.getElementById(`nav-${viewId}`).classList.add('active');

            const activeView = document.querySelector('.view-section.active-view');
            // Immediate switch if no active view found or simply switch
            if (activeView) {
                activeView.style.opacity = '0';
                activeView.style.transform = 'translateY(10px)';
                
                setTimeout(() => {
                    activeView.classList.remove('active-view');
                    const newView = document.getElementById(viewId);
                    newView.classList.add('active-view');
                    
                    if(viewId === 'trading') setTimeout(() => generateChartData(activeChartPair), 50);

                    // Slight delay to allow display:block to apply before animating opacity
                    requestAnimationFrame(() => {
                        newView.style.opacity = '1';
                        newView.style.transform = 'translateY(0)';
                    });
                }, 300);
            } else {
                // First load fallback
                const newView = document.getElementById(viewId);
                newView.classList.add('active-view');
                newView.style.opacity = '1';
                newView.style.transform = 'translateY(0)';
            }
        }

        function switchIdentity(id) {
            currentIdentity = id;
            document.querySelectorAll('.identity-tab').forEach(el => {
                el.classList.remove('active', 'bg-white', 'shadow-sm', 'text-gray-800', 'border-gray-200');
                el.classList.add('text-gray-400', 'border-transparent');
            });
            document.getElementById(`tab-${id}`).classList.add('active', 'bg-white', 'shadow-sm', 'text-gray-800', 'border-gray-200');
            document.getElementById(`tab-${id}`).classList.remove('text-gray-400', 'border-transparent');
            
            const p = profiles[id];
            document.getElementById('profile-name').innerText = p.name;
            document.getElementById('profile-img').src = `https://i.pravatar.cc/150?u=${id}`;
            renderOverview();
            renderStaking();
            showToast('Identity Switched', `Active: ${p.name}`);
        }

        // --- RENDERERS ---
        function renderOverview() {
            const p = profiles[currentIdentity];
            const tbody = document.getElementById('asset-list-body');
            tbody.innerHTML = '';
            let totalVal = p.cash;

            p.assets.forEach(asset => {
                const info = marketData.find(m => m.symbol === asset.symbol);
                if(info) {
                    const val = asset.amount * info.price;
                    totalVal += val;
                    
                    tbody.innerHTML += `
                        <tr class="group hover:bg-gray-50 transition-colors cursor-pointer">
                            <td class="p-4 pl-6 flex items-center gap-3">
                                <img src="${info.logo}" class="w-8 h-8 rounded-full object-contain bg-white p-0.5" alt="${info.name}">
                                <div><div class="font-bold text-gray-900">${info.name}</div><div class="text-xs text-gray-400">${info.symbol}</div></div>
                            </td>
                            <td class="p-4 font-mono text-sm text-gray-600">$${info.price.toLocaleString()}</td>
                            <td class="p-4 font-mono text-sm font-bold text-gray-800">${asset.amount} ${asset.symbol}</td>
                            <td class="p-4 text-right pr-6 font-mono text-sm font-bold text-gray-900">$${val.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
                        </tr>`;
                }
            });
            document.getElementById('display-balance').innerText = `$${totalVal.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}`;
        }

        function renderMarket() {
            const tbody = document.getElementById('market-table-body');
            tbody.innerHTML = '';
            
            let filtered = marketData.filter(c => {
                if(currentMarketFilter === 'all') return true;
                if(currentMarketFilter === 'fav') return c.starred;
                return c.type === currentMarketFilter;
            });

            filtered.sort((a,b) => {
                let valA = a[currentSort.key];
                let valB = b[currentSort.key];
                if(currentSort.key === 'mcap') { valA = parseFloat(valA); valB = parseFloat(valB); }
                return currentSort.dir === 'asc' ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
            });

            filtered.forEach((c, i) => {
                const isPos = c.change > 0;
                tbody.innerHTML += `
                    <tr class="group hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                        <td class="p-4 pl-6 text-gray-400 font-mono text-sm">${i + 1}</td>
                        <td class="p-4 flex items-center gap-3">
                            <img src="${c.logo}" class="w-8 h-8 rounded-full object-contain bg-white p-0.5" alt="${c.name}">
                            <div><div class="font-bold text-gray-900">${c.name}</div><div class="text-xs text-gray-400">${c.symbol}</div></div>
                        </td>
                        <td class="p-4 font-mono text-sm font-bold text-gray-900">$${c.price < 1 ? c.price : c.price.toLocaleString()}</td>
                        <td class="p-4 text-sm font-bold ${isPos ? 'text-emerald-500' : 'text-red-500'}">${isPos?'+':''}${c.change}%</td>
                        <td class="p-4 text-sm text-gray-500 font-mono hidden md:table-cell">${c.mcap}</td>
                        <td class="p-4 text-right pr-6">
                            <button onclick="toggleWatch(${c.id}, event)" class="p-2 hover:bg-gray-100 rounded-full transition-colors ${c.starred ? 'text-yellow-400' : 'text-gray-300'}">
                                <i data-lucide="star" class="w-4 h-4 ${c.starred?'fill-current':''}"></i>
                            </button>
                        </td>
                    </tr>`;
            });
            lucide.createIcons();
        }

        // --- TRADING & CHART ---
        function generateChartData(ticker) {
            const svg = document.getElementById('candlestick-chart');
            if(!svg) return;
            svg.innerHTML = '';
            let price = ticker === 'BTC' ? 64000 : ticker === 'ETH' ? 3400 : 145;
            // Get dimensions dynamically
            const w = svg.clientWidth || 800; 
            const h = svg.clientHeight || 400;
            const candles = 40;
            const candleW = w / candles;
            
            let data = [];
            for(let i=0; i<candles; i++) {
                let change = (Math.random() - 0.48) * (price * 0.02); 
                let open = price;
                let close = price + change;
                let high = Math.max(open, close) + Math.random() * (price * 0.005);
                let low = Math.min(open, close) - Math.random() * (price * 0.005);
                data.push({open, close, high, low, x: i*candleW, w: candleW-4});
                price = close;
            }

            let minP = Math.min(...data.map(d=>d.low));
            let maxP = Math.max(...data.map(d=>d.high));
            let range = maxP - minP;

            data.forEach(d => {
                let yHigh = h - ((d.high - minP) / range) * (h - 40) - 20;
                let yLow = h - ((d.low - minP) / range) * (h - 40) - 20;
                let yOpen = h - ((d.open - minP) / range) * (h - 40) - 20;
                let yClose = h - ((d.close - minP) / range) * (h - 40) - 20;
                const isUp = d.close > d.open;
                const color = isUp ? '#10B981' : '#EF4444';
                
                const wick = document.createElementNS("http://www.w3.org/2000/svg", "line");
                wick.setAttribute("x1", d.x + d.w/2); wick.setAttribute("y1", yHigh);
                wick.setAttribute("x2", d.x + d.w/2); wick.setAttribute("y2", yLow);
                wick.setAttribute("stroke", color); wick.setAttribute("stroke-width", "1");
                svg.appendChild(wick);
                
                const body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                body.setAttribute("x", d.x); body.setAttribute("y", Math.min(yOpen, yClose));
                body.setAttribute("width", d.w); body.setAttribute("height", Math.max(Math.abs(yClose - yOpen), 1));
                body.setAttribute("fill", color); body.setAttribute("rx", "2");
                body.dataset.open = d.open.toFixed(2); body.dataset.close = d.close.toFixed(2);
                svg.appendChild(body);
            });
            const priceDisplay = document.getElementById('chart-price-display');
            if(priceDisplay) priceDisplay.innerText = '$'+price.toLocaleString(undefined, {minimumFractionDigits:2});
        }

        function handleChartHover(e) {
            const container = document.getElementById('chart-container');
            if(!container) return;
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const cursorH = document.getElementById('cursor-h');
            const cursorV = document.getElementById('cursor-v');
            const tt = document.getElementById('chart-tooltip');

            if(cursorH) { cursorH.style.top = y + 'px'; cursorH.style.opacity = 1; }
            if(cursorV) { cursorV.style.left = x + 'px'; cursorV.style.opacity = 1; }
            
            if(tt) {
                tt.style.left = 10 + 'px'; tt.style.top = 10 + 'px'; tt.style.opacity = 1;
                document.getElementById('tt-open').innerText = (Math.random() * 100 + 64000).toFixed(2);
                document.getElementById('tt-close').innerText = (Math.random() * 100 + 64000).toFixed(2);
            }
        }

        function hideChartTooltip() {
            const h = document.getElementById('cursor-h');
            const v = document.getElementById('cursor-v');
            const tt = document.getElementById('chart-tooltip');
            if(h) h.style.opacity = 0;
            if(v) v.style.opacity = 0;
            if(tt) tt.style.opacity = 0;
        }

        function togglePairDropdown() { 
            const dd = document.getElementById('pair-dropdown');
            if(dd) dd.classList.toggle('hidden'); 
        }
        function changePair(t) { 
            activeChartPair = t; 
            document.getElementById('chart-pair').innerText = t + '/USD';
            document.getElementById('pair-dropdown').classList.add('hidden');
            
            // Update logo in header
            const logo = marketData.find(m => m.symbol === t)?.logo;
            if(logo) document.getElementById('chart-logo').src = logo;

            generateChartData(t);
        }

        function setOrderMode(m) {
            const buy = document.getElementById('btn-buy');
            const sell = document.getElementById('btn-sell');
            const sub = document.getElementById('trade-submit-btn');
            
            if(m === 'buy') {
                buy.className = "flex-1 py-2 text-sm font-bold bg-white shadow-sm rounded-lg text-emerald-600 transition-all font-quicksand";
                sell.className = "flex-1 py-2 text-sm font-bold text-gray-400 hover:text-red-500 transition-all font-quicksand";
                sub.className = "w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-500/20 font-quicksand";
                sub.innerText = "Buy " + activeChartPair;
            } else {
                buy.className = "flex-1 py-2 text-sm font-bold text-gray-400 hover:text-emerald-600 transition-all font-quicksand";
                sell.className = "flex-1 py-2 text-sm font-bold bg-white shadow-sm rounded-lg text-red-500 transition-all font-quicksand";
                sub.className = "w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-500/20 font-quicksand";
                sub.innerText = "Sell " + activeChartPair;
            }
        }
        
        function executeTrade() {
            const btn = document.getElementById('trade-submit-btn');
            const originalText = btn.innerText;
            btn.innerText = "Processing...";
            btn.disabled = true;
            setTimeout(() => {
                showToast('Order Filled', 'Transaction successful.');
                btn.innerText = originalText;
                btn.disabled = false;
            }, 800);
        }

        // --- STAKING ---
        function openStakingModal(t, a) {
            stakingSelection = { ticker: t, apy: a };
            document.getElementById('modal-ticker').innerText = t;
            document.getElementById('modal-apy').innerText = a + '%';
            document.getElementById('modal-staking').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('modal-backdrop').classList.remove('opacity-0');
                document.getElementById('modal-staking-content').classList.remove('opacity-0', 'scale-95');
            }, 10);
        }

        function closeModal(id) {
            document.getElementById('modal-backdrop').classList.add('opacity-0');
            document.getElementById('modal-staking-content').classList.add('opacity-0', 'scale-95');
            setTimeout(() => document.getElementById(id).classList.add('hidden'), 300);
        }

        function confirmStake() {
            const val = document.getElementById('stake-input').value;
            if(!val) return showToast('Error', 'Please enter amount', 'error');
            
            profiles[currentIdentity].staked.push({ symbol: stakingSelection.ticker, amount: val, apy: stakingSelection.apy });
            closeModal('modal-staking');
            renderStaking();
            showToast('Staked Successfully', `Locked ${val} ${stakingSelection.ticker}`);
        }

        function renderStaking() {
            const container = document.getElementById('active-stakes-container');
            const list = profiles[currentIdentity].staked;
            if(list.length === 0) {
                container.innerHTML = `<div class="text-center text-gray-400 text-sm py-8 italic flex flex-col items-center gap-2"><div class="bg-gray-100 p-3 rounded-full"><i data-lucide="inbox" class="w-6 h-6"></i></div>No active positions found.</div>`;
                lucide.createIcons();
            } else {
                container.innerHTML = '';
                list.forEach(item => {
                    container.innerHTML += `
                        <div class="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-600">${item.symbol[0]}</div>
                                <div><div class="font-bold text-gray-900">${item.symbol} Yield</div><div class="text-xs text-gray-400">Locked • ${item.apy}% APY</div></div>
                            </div>
                            <div class="text-right"><div class="font-bold text-emerald-600 font-mono">${item.amount} ${item.symbol}</div></div>
                        </div>`;
                });
            }
        }

        // --- UTILS ---
        function filterMarket(type) {
            currentMarketFilter = type;
            document.querySelectorAll('.market-filter').forEach(b => {
                b.classList.remove('active', 'bg-[#0F1115]', 'text-white');
                b.classList.add('text-gray-500');
            });
            event.currentTarget.classList.remove('text-gray-500');
            event.currentTarget.classList.add('active', 'bg-[#0F1115]', 'text-white');
            renderMarket();
        }

        function toggleWatch(id, e) {
            e.stopPropagation();
            const idx = marketData.findIndex(c => c.id === id);
            if(idx > -1) { marketData[idx].starred = !marketData[idx].starred; renderMarket(); }
        }

        function showToast(title, msg, type='success') {
            const c = document.getElementById('toast-container');
            const t = document.createElement('div');
            t.className = "bg-gray-900/95 backdrop-blur-md text-white p-4 rounded-xl shadow-2xl flex items-start gap-3 w-80 pointer-events-auto border border-white/10 toast-enter";
            const color = type === 'success' ? 'text-emerald-500' : 'text-red-500';
            t.innerHTML = `<div class="${color} mt-0.5"><i data-lucide="${type === 'success' ? 'check' : 'alert-circle'}" class="w-5 h-5"></i></div><div><div class="font-bold text-sm">${title}</div><div class="text-xs text-gray-400 mt-1">${msg}</div></div>`;
            c.appendChild(t);
            lucide.createIcons();
            setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; setTimeout(() => t.remove(), 300); }, 3000);
        }

        init();
        window.addEventListener('resize', () => { if(document.getElementById('trading').classList.contains('active-view')) generateChartData(activeChartPair); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-screen -z-10 bg-[#0F1115]">
<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
</div>

<div className="relative w-full max-w-[1600px] h-full max-h-[1000px] bg-[#F8FAFC] rounded-[24px] flex shadow-2xl overflow-hidden ring-1 ring-white/10" id="app-container">

<aside className="flex flex-col flex-shrink-0 bg-[#151516] w-64 h-full border-white/5 border-r relative" id="sidebar">

<div className="pointer-events-none overflow-hidden opacity-40 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-transparent to-transparent z-10"></div>
<div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-spin opacity-5 blur-3xl"></div>
</div>

<div className="flex z-30 h-20 pt-6 pr-6 pl-6 relative items-center">
<div className="flex gap-3 cursor-pointer group items-center text-white">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DE5833] to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
<span className="font-bold text-xl tracking-tight font-grotesk">QUACK OS</span>
</div>
</div>

<nav className="flex-1 z-30 pt-8 pr-3 pb-6 pl-3 relative space-y-1">
<button className="nav-item active w-full flex items-center gap-3 px-3 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200 group active:scale-[0.98]" id="nav-overview" onclick="router('overview')">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="font-semibold text-sm font-quicksand">Overview</span>
</button>
<button className="nav-item flex hover:bg-white/5 hover:text-white transition-all duration-200 group active:scale-[0.98] text-white/70 w-full rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="nav-market" onclick="router('market')">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
<span className="font-semibold text-sm font-quicksand">Market</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200 group active:scale-[0.98]" id="nav-staking" onclick="router('staking')">
<i className="w-5 h-5" data-lucide="lock"></i>
<span className="font-semibold text-sm font-quicksand">Staking</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-all duration-200 group active:scale-[0.98]" id="nav-trading" onclick="router('trading')">
<i className="w-5 h-5" data-lucide="arrow-left-right"></i>
<span className="font-semibold text-sm font-quicksand">Trading</span>
</button>
<button className="nav-item flex hover:bg-white/5 hover:text-white transition-all duration-200 group active:scale-[0.98] text-white/70 w-full rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-3 gap-y-3 items-center" id="nav-community" onclick="router('community')">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="text-sm font-semibold font-quicksand">Community</span>
</button>
</nav>
<div className="z-30 mt-auto pt-4 pr-4 pb-4 pl-4 relative">
<div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md">
<div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-2 font-quicksand">Network Status</div>
<div className="flex items-center gap-2">
<div className="relative">
<div className="w-2 h-2 rounded-full bg-emerald-500 relative z-10"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500 absolute top-0 left-0 animate-ping opacity-75"></div>
</div>
<span className="text-xs text-white font-quicksand">Mainnet: <span className="text-emerald-400 font-mono">14ms</span></span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#F8FAFC]">

<header className="flex-shrink-0 flex z-40 bg-white/80 h-16 border-b border-gray-200 pr-8 pl-8 backdrop-blur-xl items-center justify-between sticky top-0">
<div className="flex items-center gap-3">
<button className="identity-tab active flex gap-2 transition-all hover:-translate-y-0.5 ease-spring text-xs font-bold text-gray-800 bg-white border border-gray-200 rounded-lg py-1.5 px-3 shadow-sm items-center font-quicksand" id="tab-personal" onclick="switchIdentity('personal')">
<div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div> Personal
                    </button>
<button className="identity-tab flex gap-2 hover:bg-white/60 hover:text-gray-800 hover:border-gray-200 transition-all ease-spring text-xs font-bold text-gray-400 border border-transparent rounded-lg py-1.5 px-3 items-center font-quicksand" id="tab-corp" onclick="switchIdentity('corp')">
<div className="bg-blue-500 w-1.5 h-1.5 rounded-full"></div> Trading Corp
                    </button>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-3 bg-gray-100/50 rounded-full px-4 py-2 border border-gray-200/50 hover:bg-white hover:border-gray-300 transition-colors w-64">
<i className="w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="bg-transparent border-none focus:outline-none text-xs font-medium text-gray-700 w-full placeholder:text-gray-400 font-quicksand" placeholder="Search..." type="text"/>
</div>
<div className="h-6 w-[1px] bg-gray-200"></div>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-bold text-gray-800 leading-none font-quicksand" id="profile-name">Zoin M.</p>
<p className="text-[10px] text-emerald-600 font-bold font-quicksand">PRO MEMBER</p>
</div>
<img className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm object-cover bg-gray-200" id="profile-img" src="https://i.pravatar.cc/150?u=personal"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative scroll-smooth custom-scroll bg-[#F8FAFC]" id="view-container">

<section className="view-section active-view max-w-[1200px] mr-auto ml-auto space-y-8" id="overview">

<div className="grid grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-8 overflow-hidden group bg-white border-gray-200 border rounded-[24px] pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="">
<div className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2 font-quicksand">Total Net Worth</div>
<div className="flex items-baseline gap-3">
<h1 className="text-5xl font-bold text-gray-900 tracking-tight font-grotesk" id="display-balance">$36 823,67</h1>
<div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs font-bold font-quicksand flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +2.4%
                                        </div>
</div>
</div>
<div className="flex gap-3 mt-8">
<button className="px-6 py-3 bg-[#0F1115] text-white rounded-xl font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 font-quicksand">Deposit</button>
<button className="px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all font-quicksand">Withdraw</button>
<button className="px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all font-quicksand">Transfer</button>
</div>
</div>

<div className="absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-tr from-orange-100 to-transparent rounded-full opacity-50 blur-3xl pointer-events-none"></div>
</div>

<div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
<div className="flex-1 bg-gradient-to-br from-[#DE5833] to-[#ef4444] rounded-[24px] p-6 text-white relative overflow-hidden shadow-lg shadow-orange-500/20 group">
<div className="relative z-10">
<div className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1 font-quicksand">Daily Yield</div>
<div className="text-3xl font-bold font-grotesk text-white">+$124.50</div>
</div>
<i className="absolute right-4 bottom-4 w-12 h-12 text-white/20 group-hover:scale-110 transition-transform rotate-12" data-lucide="zap"></i>
</div>
<div className="flex-1 bg-white border border-gray-200 rounded-[24px] p-6 flex items-center justify-between group hover:border-[#DE5833]/30 transition-colors cursor-pointer">
<div className="">
<div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 font-quicksand">Security Level</div>
<div className="text-2xl font-bold text-gray-900 font-grotesk">High</div>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-5 rounded-[24px] border border-gray-200 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
<div className="w-16 h-16 bg-blue-50 rounded-xl flex-shrink-0 flex items-center justify-center text-blue-500 border border-blue-100">
<i className="w-8 h-8" data-lucide="graduation-cap"></i>
</div>
<div className="flex-1">
<h3 className="font-bold text-sm text-gray-900 font-quicksand">Learn &amp; Earn</h3>
<p className="text-xs text-gray-500 mt-1 font-quicksand leading-relaxed">Complete the "DeFi 101" course to earn $15 in DOT.</p>
<div className="w-full bg-gray-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-blue-500 w-[60%] h-full rounded-full"></div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-gray-900 to-black p-5 rounded-[24px] border border-gray-800 text-white flex flex-col justify-between relative overflow-hidden group cursor-pointer">
<div className="relative z-10">
<div className="bg-white/20 w-fit px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-2 backdrop-blur-sm text-white">Pro</div>
<h3 className="font-bold text-sm font-quicksand text-white">Invite Friends</h3>
<p className="text-xs text-gray-400 mt-1 font-quicksand">Get 10% of their fees forever.</p>
</div>
<i className="absolute right-[-10px] bottom-[-10px] w-20 h-20 text-white/5 rotate-[-15deg] group-hover:scale-110 transition-transform" data-lucide="gift"></i>
</div>

<div className="bg-white p-5 rounded-[24px] border border-gray-200">
<h3 className="font-bold text-sm text-gray-900 font-quicksand mb-3">Recent Activity</h3>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><i className="w-3 h-3" data-lucide="arrow-down-left"></i></div>
<span className="text-gray-600 font-medium">Received BTC</span>
</div>
<span className="font-bold text-gray-900">+$240.00</span>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center"><i className="w-3 h-3" data-lucide="arrow-up-right"></i></div>
<span className="text-gray-600 font-medium">Sent ETH</span>
</div>
<span className="font-bold text-gray-900">-$50.00</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-sm">
<div className="p-5 border-b border-gray-100 flex justify-between items-center">
<h3 className="font-bold text-gray-900 font-quicksand">Your Assets</h3>
<button className="text-xs font-bold text-[#DE5833] hover:underline font-quicksand">View History</button>
</div>
<table className="w-full">
<thead className="bg-gray-50/50">
<tr className="text-left text-xs font-bold text-gray-500 uppercase">
<th className="p-4 pl-6 font-quicksand">Asset</th>
<th className="p-4 font-quicksand">Price</th>
<th className="p-4 font-quicksand">Balance</th>
<th className="p-4 text-right pr-6 font-quicksand">Value</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50" id="asset-list-body">

</tbody>
</table>
</div>
</section>

<section className="view-section max-w-[1200px] mr-auto ml-auto" id="market">

<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-bold font-grotesk text-gray-900">Market Overview</h2>
<div className="flex bg-white rounded-xl p-1 border border-gray-200">
<button className="market-filter active px-4 py-1.5 rounded-lg text-xs font-bold font-quicksand transition-all bg-[#0F1115] text-white" onclick="filterMarket('all')">All</button>
<button className="market-filter px-4 py-1.5 rounded-lg text-xs font-bold font-quicksand transition-all text-gray-500 hover:text-gray-900" onclick="filterMarket('fav')">Favorites</button>
<button className="market-filter px-4 py-1.5 rounded-lg text-xs font-bold font-quicksand transition-all text-gray-500 hover:text-gray-900" onclick="filterMarket('defi')">DeFi</button>
</div>
</div>
<div className="bg-white rounded-[24px] shadow-sm border border-gray-200 overflow-hidden">
<table className="w-full">
<thead className="bg-gray-50 border-b border-gray-100">
<tr className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
<th className="p-4 pl-6 w-12 font-quicksand">#</th>
<th className="p-4 cursor-pointer hover:text-gray-800 font-quicksand" onclick="sortMarket('name')">Name</th>
<th className="p-4 cursor-pointer hover:text-gray-800 font-quicksand" onclick="sortMarket('price')">Price</th>
<th className="p-4 cursor-pointer hover:text-gray-800 font-quicksand" onclick="sortMarket('change')">24h</th>
<th className="p-4 hidden md:table-cell cursor-pointer font-quicksand" onclick="sortMarket('mcap')">M. Cap</th>
<th className="p-4 text-right pr-6 font-quicksand">Watch</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50" id="market-table-body">

</tbody>
</table>
</div>
</section>

<section className="view-section max-w-[1200px] mr-auto ml-auto" id="staking">
<div className="mb-8 flex justify-between items-end">
<div>
<h2 className="text-2xl font-bold text-gray-900 font-grotesk">Staking Vaults</h2>
<p className="text-sm text-gray-500 font-quicksand mt-1">Lock assets to earn industry-leading yields.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

<div className="bg-white p-6 rounded-[24px] border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
<div className="flex justify-between items-start mb-6">
<img alt="BTC" className="w-12 h-12" src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"/>
<span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold font-quicksand">+12% APY</span>
</div>
<h3 className="font-bold text-lg text-gray-900 font-quicksand">Bitcoin Core</h3>
<div className="flex justify-between text-xs text-gray-500 mt-4 mb-6 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
<span className="font-quicksand">Term: 30 Days</span>
<span className="font-quicksand">Min: 0.01 BTC</span>
</div>
<button className="w-full py-3 bg-[#0F1115] text-white rounded-xl font-bold text-sm hover:opacity-90 transition-all font-quicksand" onclick="openStakingModal('BTC', 12)">Stake Now</button>
</div>

<div className="bg-white p-6 rounded-[24px] border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
<div className="flex justify-between items-start mb-6">
<img alt="ETH" className="w-12 h-12" src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"/>
<span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold font-quicksand">+5.4% APY</span>
</div>
<h3 className="font-bold text-lg text-gray-900 font-quicksand">Ethereum 2.0</h3>
<div className="flex justify-between text-xs text-gray-500 mt-4 mb-6 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
<span className="font-quicksand">Term: Flexible</span>
<span className="font-quicksand">Min: 0.1 ETH</span>
</div>
<button className="w-full py-3 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 rounded-xl font-bold text-sm transition-all font-quicksand" onclick="openStakingModal('ETH', 5.4)">Stake Now</button>
</div>

<div className="bg-white p-6 rounded-[24px] border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group">
<div className="flex justify-between items-start mb-6">
<img alt="SOL" className="w-12 h-12" src="https://cryptologos.cc/logos/solana-sol-logo.svg"/>
<span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold font-quicksand">+8.2% APY</span>
</div>
<h3 className="font-bold text-lg text-gray-900 font-quicksand">Solana Turbo</h3>
<div className="flex justify-between text-xs text-gray-500 mt-4 mb-6 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
<span className="font-quicksand">Term: 14 Days</span>
<span className="font-quicksand">Min: 5 SOL</span>
</div>
<button className="w-full py-3 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 rounded-xl font-bold text-sm transition-all font-quicksand" onclick="openStakingModal('SOL', 8.2)">Stake Now</button>
</div>
</div>

<div className="bg-white border-gray-200 border rounded-[24px] pt-8 pr-8 pb-8 pl-8">
<h3 className="font-bold text-gray-900 font-quicksand mb-4">Active Positions</h3>
<div className="space-y-3" id="active-stakes-container"><div className="text-center text-gray-400 text-sm py-8 italic flex flex-col items-center gap-2"><div className="bg-gray-100 p-3 rounded-full"><i className="w-6 h-6" data-lucide="inbox"></i></div>No active positions found.</div></div>
</div>
</section>

<section className="view-section h-full flex flex-col" id="trading">
<div className="flex-1 grid grid-cols-12 gap-6 h-full pb-2">

<div className="col-span-12 lg:col-span-9 flex flex-col bg-[#131722] border-gray-800 border rounded-[24px] pt-1 pr-1 pb-1 pl-1 relative shadow-2xl">

<div className="flex-1 flex flex-col overflow-hidden bg-[#131722] w-full h-full rounded-[20px] relative">

<div className="flex opacity-100 border-gray-800/50 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-4 relative">
<div className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors border border-transparent hover:border-gray-700" onclick="togglePairDropdown()">
<img className="w-8 h-8 object-contain bg-white rounded-full p-0.5" id="chart-logo" src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"/>
<div className="">
<div className="text-white font-bold text-lg flex items-center gap-2 font-grotesk">
<span className="" id="chart-pair">BTC/USD</span>
<i className="w-4 h-4 text-white" data-lucide="chevron-down"></i>
</div>
<div className="text-xs text-emerald-400 font-mono font-bold flex gap-2">
<span className="" id="chart-price-display">$64,230.50</span>
<span className="opacity-80">+2.45%</span>
</div>
</div>
</div>

<div className="hidden absolute top-full left-0 mt-2 w-64 bg-[#1E222D] border border-gray-700 rounded-xl shadow-2xl z-20 overflow-hidden" id="pair-dropdown">
<div className="p-2 space-y-1">
<button className="w-full text-left px-3 py-3 text-white hover:bg-[#2A2E39] rounded-lg text-sm font-bold flex items-center gap-3 transition-colors" onclick="changePair('BTC')"><img className="w-5 h-5 bg-white rounded-full p-0.5" src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg"/> BTC/USD</button>
<button className="w-full text-left px-3 py-3 text-white hover:bg-[#2A2E39] rounded-lg text-sm font-bold flex items-center gap-3 transition-colors" onclick="changePair('ETH')"><img className="w-5 h-5 bg-white rounded-full p-0.5" src="https://cryptologos.cc/logos/ethereum-eth-logo.svg"/> ETH/USD</button>
<button className="w-full text-left px-3 py-3 text-white hover:bg-[#2A2E39] rounded-lg text-sm font-bold flex items-center gap-3 transition-colors" onclick="changePair('SOL')"><img className="w-5 h-5 bg-white rounded-full p-0.5" src="https://cryptologos.cc/logos/solana-sol-logo.svg"/> SOL/USD</button>
</div>
</div>
</div>
<div className="flex bg-[#1E222D] rounded-lg p-1 border border-gray-700/50">
<button className="px-3 py-1 text-xs font-bold text-white bg-[#2A2E39] rounded shadow-sm font-quicksand">1H</button>
<button className="px-3 py-1 text-xs font-bold text-gray-400 hover:text-white transition-colors font-quicksand">4H</button>
<button className="px-3 py-1 text-xs font-bold text-gray-400 hover:text-white transition-colors font-quicksand">1D</button>
</div>
</div>

<div className="flex-1 relative w-full h-full cursor-crosshair group" id="chart-container" onmouseleave="hideChartTooltip()" onmousemove="handleChartHover(event)">
<svg className="block w-full h-full" height="100%" id="candlestick-chart" strokeWidth="2" width="100%"></svg>

<div className="absolute z-20 bg-[#1E222D] border border-gray-700 text-white p-2 rounded-lg text-xs shadow-xl opacity-0 pointer-events-none font-mono flex gap-3" id="chart-tooltip" style={{left: '10px', top: '10px'}}>
<div className="flex flex-col"><span className="text-gray-500 text-[10px]">Open</span><span id="tt-open">64089.54</span></div>
<div className="flex flex-col"><span className="text-gray-500 text-[10px]">Close</span><span id="tt-close">64099.17</span></div>
</div>
<div className="absolute left-0 w-full h-[1px] bg-white/20 border-t border-dashed border-white/20 opacity-0 pointer-events-none z-10" id="cursor-h"></div>
<div className="absolute top-0 h-full w-[1px] bg-white/20 border-l border-dashed border-white/20 opacity-0 pointer-events-none z-10" id="cursor-v"></div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-3 bg-white rounded-[24px] border border-gray-200 p-6 flex flex-col shadow-sm h-full">
<div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl">
<button className="flex-1 py-2 text-sm font-bold bg-white shadow-sm rounded-lg text-emerald-600 transition-all font-quicksand" id="btn-buy" onclick="setOrderMode('buy')">Buy</button>
<button className="flex-1 py-2 text-sm font-bold text-gray-400 hover:text-red-500 transition-all font-quicksand" id="btn-sell" onclick="setOrderMode('sell')">Sell</button>
</div>
<div className="space-y-5 flex-1">
<div>
<label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide font-quicksand">Price (USD)</label>
<input className="w-full mt-1 bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 font-mono text-sm font-bold focus:outline-none focus:border-black transition-all" id="trade-price" type="number" value="64230"/>
</div>
<div className="">
<label className="text-[10px] font-bold text-gray-400 uppercase tracking-wide font-quicksand">Amount</label>
<div className="relative mt-1">
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-4 pr-12 font-mono text-sm font-bold focus:outline-none focus:border-black transition-all" id="trade-amount" placeholder="0.00" type="number"/>
<span className="absolute right-4 top-3.5 text-xs font-bold text-gray-400 font-quicksand" id="trade-ticker">BTC</span>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 py-1 text-[10px] font-bold bg-gray-100 rounded hover:bg-gray-200 transition-colors font-quicksand">25%</button>
<button className="flex-1 py-1 text-[10px] font-bold bg-gray-100 rounded hover:bg-gray-200 transition-colors font-quicksand">50%</button>
<button className="flex-1 py-1 text-[10px] font-bold bg-gray-100 rounded hover:bg-gray-200 transition-colors font-quicksand">Max</button>
</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-gray-100">
<button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-emerald-500/20 font-quicksand" id="trade-submit-btn" onclick="executeTrade()">Buy BTC</button>
</div>
</div>
</div>
</section>

<section className="view-section max-w-[1000px] mx-auto" id="community">

<div className="flex gap-4 overflow-x-auto pb-4 mb-6 no-scrollbar">
<div className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0">
<div className="w-16 h-16 rounded-full story-ring p-[2px] bg-white">
<img alt="User" className="w-full h-full rounded-full border-2 border-white object-cover group-hover:scale-95 transition-transform bg-gray-200" src="https://i.pravatar.cc/150?u=1"/>
</div>
<span className="text-[10px] font-bold text-gray-600 font-quicksand">Vitalik</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0">
<div className="w-16 h-16 rounded-full story-ring p-[2px] bg-white">
<img alt="User" className="w-full h-full rounded-full border-2 border-white object-cover group-hover:scale-95 transition-transform bg-gray-200" src="https://i.pravatar.cc/150?u=2"/>
</div>
<span className="text-[10px] font-bold text-gray-600 font-quicksand">Satoshi_N</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0">
<div className="w-16 h-16 rounded-full story-ring p-[2px] bg-white">
<img alt="User" className="w-full h-full rounded-full border-2 border-white object-cover group-hover:scale-95 transition-transform bg-gray-200" src="https://i.pravatar.cc/150?u=3"/>
</div>
<span className="text-[10px] font-bold text-gray-600 font-quicksand">Cz_Binance</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0 opacity-60 hover:opacity-100">
<div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors">
<i className="w-6 h-6" data-lucide="plus"></i>
</div>
<span className="text-[10px] font-bold text-gray-600 font-quicksand">Add Story</span>
</div>
</div>
<div className="grid grid-cols-12 gap-8">

<div className="col-span-12 md:col-span-8 space-y-6">

<div className="bg-white border border-gray-200 rounded-[24px] p-0 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
<div className="h-48 overflow-hidden relative bg-gray-200">
<img alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase font-quicksand">Featured</div>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-gray-900 mb-2 font-grotesk group-hover:text-[#DE5833] transition-colors">The Future of Layer 2 Scaling</h3>
<p className="text-sm text-gray-500 font-quicksand leading-relaxed">Ethereum's roadmap is clearer than ever. We dive deep into Optimism, Arbitrum and the new ZK-rollups hitting the market this quarter.</p>
<div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
<div className="flex items-center gap-2">
<img alt="Author" className="w-6 h-6 rounded-full bg-gray-200" src="https://i.pravatar.cc/150?u=author1"/>
<span className="text-xs font-bold text-gray-700 font-quicksand">Alex D.</span>
</div>
<span className="text-xs text-gray-400 font-quicksand">5 min read</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-[24px] p-6 hover:border-blue-200 transition-colors cursor-pointer">
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1">
<button className="text-gray-400 hover:text-[#DE5833]"><i className="w-5 h-5" data-lucide="chevron-up"></i></button>
<span className="text-sm font-bold text-gray-900">452</span>
<button className="text-gray-400 hover:text-blue-500"><i className="w-5 h-5" data-lucide="chevron-down"></i></button>
</div>
<div>
<h4 className="font-bold text-gray-900 text-lg mb-1 font-grotesk">Is it time to rotate back into DeFi tokens?</h4>
<p className="text-sm text-gray-500 mb-3 font-quicksand">Yields are rising across Aave and Compound, but price action has been lagging. What's your play?</p>
<div className="flex gap-2">
<span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500 font-quicksand">Strategy</span>
<span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500 font-quicksand">DeFi</span>
<span className="text-[10px] text-gray-400 py-1 ml-2 font-quicksand">45 comments</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 space-y-6">

<div className="bg-white border border-gray-200 rounded-[24px] p-6">
<h3 className="font-bold text-gray-900 mb-4 font-quicksand flex items-center gap-2">
<i className="w-4 h-4 text-red-500" data-lucide="flame"></i>
                                    Hot Topics
                                </h3>
<div className="space-y-4">
<div className="flex gap-3 items-start">
<div className="text-gray-300 font-bold font-mono text-sm">01</div>
<div>
<div className="text-sm font-bold text-gray-900 font-quicksand hover:underline cursor-pointer">Bitcoin Halving Predictions</div>
<div className="text-xs text-gray-400 font-quicksand">12k discussions</div>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="text-gray-300 font-bold font-mono text-sm">02</div>
<div>
<div className="text-sm font-bold text-gray-900 font-quicksand hover:underline cursor-pointer">Solana Network Upgrades</div>
<div className="text-xs text-gray-400 font-quicksand">8.5k discussions</div>
</div>
</div>
<div className="flex gap-3 items-start">
<div className="text-gray-300 font-bold font-mono text-sm">03</div>
<div>
<div className="text-sm font-bold text-gray-900 font-quicksand hover:underline cursor-pointer">Regualtory News (SEC)</div>
<div className="text-xs text-gray-400 font-quicksand">5k discussions</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="z-[60] flex flex-col gap-2 pointer-events-none absolute right-6 bottom-6" id="toast-container"></div>
</main>
</div>

<div className="fixed z-[70] hidden flex top-0 right-0 bottom-0 left-0 items-center justify-center" id="modal-staking">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="closeModal('modal-staking')"></div>
<div className="transform transition-all duration-300 bg-white opacity-0 w-[420px] rounded-[32px] p-8 relative shadow-2xl scale-95 border border-gray-100" id="modal-staking-content">
<h3 className="text-2xl font-bold font-grotesk mb-1">Stake Assets</h3>
<p className="text-sm text-gray-500 font-quicksand mb-6">Earn passive income on your holdings.</p>
<div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-200 flex justify-between items-center">
<div>
<div className="text-xs font-bold text-gray-400 uppercase font-quicksand mb-1">Asset</div>
<div className="font-bold text-xl font-mono text-gray-900" id="modal-ticker">BTC</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-gray-400 uppercase font-quicksand mb-1">APY</div>
<div className="font-bold text-xl font-mono text-emerald-600" id="modal-apy">12%</div>
</div>
</div>
<div className="space-y-4 mb-8">
<input className="w-full bg-white border border-gray-200 rounded-xl p-4 font-mono text-lg font-bold focus:outline-none focus:ring-2 focus:ring-black/5 placeholder:text-gray-300" id="stake-input" placeholder="0.00" type="number"/>
<button className="w-full py-4 bg-[#DE5833] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all font-quicksand" onclick="confirmStake()">Confirm Stake</button>
</div>
</div>
</div>


    </>
  );
}
