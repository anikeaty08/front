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



        let state = {
            accounts: {
                personal: { balance: 0, transactions: [], currency: 'USD' },
                business: { balance: 0, transactions: [], currency: 'USD' }
            },
            currentAccount: 'personal',
            balanceHidden: false,
            savingsBalance: 0,
            portfolio: { value: 0, holdings: [] },
            crypto: { value: 0, holdings: [] },
            currentTab: 'home'
        };

        let keypadValues = {};
        let tabTimeout;

        function loadState() {
            const saved = localStorage.getItem('vaultAppState');
            if (saved) {
                try { state = JSON.parse(saved); } catch(e) {}
            }
            updateUI();
            updateInvestUI();
            updateCryptoUI();
            updateLifestyleUI();
        }

        function saveState() {
            localStorage.setItem('vaultAppState', JSON.stringify(state));
        }

        function formatCurrency(amount, currency) {
            currency = currency || 'USD';
            const symbols = { USD: '$', EUR: '€', GBP: '£', JPY: '¥' };
            const sym = symbols[currency] || '$';
            return sym + Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        function updateUI() {
            const account = state.accounts[state.currentAccount];
            const balEl = document.getElementById('balanceDisplay');
            const label = document.getElementById('accountLabel');

            if (state.balanceHidden) {
                balEl.textContent = '••••••';
            } else {
                balEl.textContent = formatCurrency(account.balance, account.currency);
            }

            label.textContent = (state.currentAccount.charAt(0).toUpperCase() + state.currentAccount.slice(1)) + ' · ' + account.currency;

            document.getElementById('personalTab').classList.toggle('opacity-50', state.currentAccount !== 'personal');
            document.getElementById('personalTab').classList.toggle('tab-active', state.currentAccount === 'personal');
            document.getElementById('businessTab').classList.toggle('opacity-50', state.currentAccount !== 'business');
            document.getElementById('businessTab').classList.toggle('tab-active', state.currentAccount === 'business');

            renderTransactions();
        }

        function renderTransactions(filter) {
            filter = filter || '';
            const account = state.accounts[state.currentAccount];
            const container = document.getElementById('transactionsList');
            const emptyState = document.getElementById('emptyState');

            let txns = account.transactions.slice().reverse();
            if (filter) {
                txns = txns.filter(function(t) {
                    return t.description.toLowerCase().indexOf(filter.toLowerCase()) !== -1 || t.category.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
                });
            }

            if (txns.length === 0 && !filter) {
                emptyState.classList.remove('hidden');
                container.innerHTML = '';
                return;
            }
            emptyState.classList.add('hidden');

            var icons = {
                deposit: 'solar:add-circle-linear',
                transfer_out: 'solar:arrow-up-linear',
                transfer_in: 'solar:arrow-down-linear',
                payment: 'solar:card-linear',
                savings: 'solar:safe-circle-linear',
                subscription: 'solar:repeat-linear',
                food: 'solar:cup-hot-linear',
                shopping: 'solar:bag-linear',
                transport: 'solar:bus-linear',
                send: 'solar:arrow-up-linear',
                invest: 'solar:graph-up-linear',
                crypto: 'solar:dollar-linear'
            };

            var maxShow = Math.min(txns.length, 8);
            container.innerHTML = txns.slice(0, maxShow).map(function(t, i) {
                var icon = icons[t.category] || 'solar:wallet-linear';
                var isPositive = t.amount > 0;
                var color = isPositive ? 'text-emerald-400' : 'text-white';
                var sign = isPositive ? '+' : '-';
                var date = new Date(t.date);
                var timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                var dateStr = isToday(date) ? 'Today' : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

                return '<div class="glass-card rounded-2xl px-4 py-3.5 flex items-center gap-3.5 stagger-item press-scale" onclick="showTransactionDetail(' + (account.transactions.length - 1 - i) + ')" style="animation-delay: ' + (i * 40) + 'ms">' +
                    '<div class="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">' +
                    '<iconify-icon icon="' + icon + '" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon>' +
                    '</div>' +
                    '<div class="flex-1 min-w-0">' +
                    '<p class="text-sm font-medium text-white truncate">' + t.description + '</p>' +
                    '<p class="text-xs text-white/30 font-normal">' + dateStr + ' · ' + timeStr + '</p>' +
                    '</div>' +
                    '<span class="text-sm font-semibold ' + color + ' flex-shrink-0">' + sign + formatCurrency(Math.abs(t.amount)) + '</span>' +
                    '</div>';
            }).join('');

            setTimeout(function() {
                var items = container.querySelectorAll('.stagger-item');
                items.forEach(function(item, idx) {
                    setTimeout(function() { item.classList.add('visible'); }, idx * 50);
                });
            }, 50);
        }

        function isToday(date) {
            var today = new Date();
            return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
        }

        var currentTab = 'home';

        function switchTab(tab) {
            if (tab === currentTab) return;

            var oldPage = document.getElementById('page-' + currentTab);
            var newPage = document.getElementById('page-' + tab);

            oldPage.classList.remove('active');
            oldPage.classList.add('exiting');

            if (tabTimeout) clearTimeout(tabTimeout);

            tabTimeout = setTimeout(function() {
                // Ensure no pages have residual inline styles which caused the disappearance bug
                document.querySelectorAll('.page').forEach(function(p) {
                    p.classList.remove('active', 'exiting');
                    p.style.display = '';
                });
                
                newPage.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 250);

            var tabs = ['home', 'invest', 'payments', 'crypto', 'lifestyle'];
            tabs.forEach(function(t) {
                var el = document.getElementById('nav' + t.charAt(0).toUpperCase() + t.slice(1));
                var icon = el.querySelector('iconify-icon');
                if (t === tab) {
                    el.classList.add('active');
                    icon.style.color = 'white';
                    var boldMap = {
                        home: 'solar:home-2-bold',
                        invest: 'solar:graph-up-bold',
                        payments: 'solar:card-transfer-bold',
                        crypto: 'solar:diploma-verified-bold',
                        lifestyle: 'solar:star-bold'
                    };
                    icon.setAttribute('icon', boldMap[t]);
                } else {
                    el.classList.remove('active');
                    icon.style.color = 'rgba(255,255,255,0.4)';
                    var linearMap = {
                        home: 'solar:home-2-linear',
                        invest: 'solar:graph-up-linear',
                        payments: 'solar:card-transfer-linear',
                        crypto: 'solar:diploma-verified-linear',
                        lifestyle: 'solar:star-linear'
                    };
                    icon.setAttribute('icon', linearMap[t]);
                }
            });

            currentTab = tab;
            state.currentTab = tab;

            if (tab === 'invest') updateInvestUI();
            if (tab === 'crypto') updateCryptoUI();
            if (tab === 'lifestyle') updateLifestyleUI();
        }

        function updateInvestUI() {
            var chart = document.getElementById('investChart');
            if (!chart) return;
            var bars = '';
            for (var i = 0; i < 24; i++) {
                var h = 20 + Math.random() * 80;
                var green = Math.random() > 0.35;
                bars += '<div class="chart-bar flex-1 rounded-sm" style="height: ' + h + '%; background: ' + (green ? 'rgba(52,211,153,0.5)' : 'rgba(248,113,113,0.3)') + '; animation-delay: ' + (i * 30) + 'ms;"></div>';
            }
            chart.innerHTML = bars;

            document.getElementById('portfolioValue').textContent = formatCurrency(state.portfolio.value);
            var ret = state.portfolio.value > 0 ? '+' + (Math.random() * 5 + 1).toFixed(2) + '%' : '+0.00%';
            document.getElementById('investReturn').textContent = ret;
        }

        function buyStock(symbol) {
            keypadValues['stockAmount'] = '';
            var prices = { AAPL: 198.45, TSLA: 248.12, NVDA: 875.30, MSFT: 415.80 };
            var names = { AAPL: 'Apple', TSLA: 'Tesla', NVDA: 'NVIDIA', MSFT: 'Microsoft' };

            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Buy ' + names[symbol] + '</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="glass-card rounded-xl p-4 mb-5 flex items-center justify-between">' +
                '<div><p class="text-xs text-white/40">Price per share</p><p class="text-lg font-semibold text-white">$' + prices[symbol] + '</p></div>' +
                '<div class="text-right"><p class="text-xs text-white/40">Available</p><p class="text-sm font-medium text-white">' + formatCurrency(state.accounts[state.currentAccount].balance) + '</p></div>' +
                '</div>' +
                '<div class="text-center mb-5">' +
                '<p class="text-sm text-white/40 mb-2">Investment amount</p>' +
                '<p class="text-4xl font-semibold tracking-tight text-white" id="stockAmount">$0</p>' +
                '</div>' +
                keypadHTML('stockAmount', "confirmBuyStock('" + symbol + "', " + prices[symbol] + ")", 'Buy ' + symbol)
            );
        }

        function confirmBuyStock(symbol, price) {
            var amount = parseFloat(keypadValues['stockAmount']);
            if (!amount || amount <= 0) { showToast('Enter a valid amount', 'error'); return; }
            var account = state.accounts[state.currentAccount];
            if (amount > account.balance) { showToast('Insufficient funds', 'error'); return; }

            account.balance -= amount;
            account.transactions.push({
                id: Date.now(), description: 'Buy ' + symbol + ' stock', amount: -amount, category: 'invest', date: new Date().toISOString()
            });
            state.portfolio.value += amount;
            state.portfolio.holdings.push({ symbol: symbol, amount: amount, date: new Date().toISOString() });

            saveState(); updateUI(); updateInvestUI(); closeModal();
            showToast('Bought ' + formatCurrency(amount) + ' of ' + symbol);
        }

        function updateCryptoUI() {
            document.getElementById('cryptoBalance').textContent = formatCurrency(state.crypto.value);
            var change = state.crypto.value > 0 ? '+' + (Math.random() * 8 + 1).toFixed(2) : '+0.00';
            document.getElementById('cryptoChange').textContent = change + '% today';
        }

        function buyCrypto(symbol) {
            keypadValues['cryptoAmount'] = '';
            var prices = { BTC: 67432, ETH: 3521, SOL: 178.90, DOGE: 0.1823 };
            var names = { BTC: 'Bitcoin', ETH: 'Ethereum', SOL: 'Solana', DOGE: 'Dogecoin' };

            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Buy ' + names[symbol] + '</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="glass-card rounded-xl p-4 mb-5 flex items-center justify-between">' +
                '<div><p class="text-xs text-white/40">' + symbol + ' Price</p><p class="text-lg font-semibold text-white">$' + prices[symbol].toLocaleString() + '</p></div>' +
                '<div class="text-right"><p class="text-xs text-white/40">Available</p><p class="text-sm font-medium text-white">' + formatCurrency(state.accounts[state.currentAccount].balance) + '</p></div>' +
                '</div>' +
                '<div class="text-center mb-5">' +
                '<p class="text-sm text-white/40 mb-2">Amount to invest</p>' +
                '<p class="text-4xl font-semibold tracking-tight text-white" id="cryptoAmount">$0</p>' +
                '</div>' +
                keypadHTML('cryptoAmount', "confirmBuyCrypto('" + symbol + "')", 'Buy ' + symbol)
            );
        }

        function confirmBuyCrypto(symbol) {
            var amount = parseFloat(keypadValues['cryptoAmount']);
            if (!amount || amount <= 0) { showToast('Enter a valid amount', 'error'); return; }
            var account = state.accounts[state.currentAccount];
            if (amount > account.balance) { showToast('Insufficient funds', 'error'); return; }

            account.balance -= amount;
            account.transactions.push({
                id: Date.now(), description: 'Buy ' + symbol, amount: -amount, category: 'crypto', date: new Date().toISOString()
            });
            state.crypto.value += amount;
            state.crypto.holdings.push({ symbol: symbol, amount: amount, date: new Date().toISOString() });

            saveState(); updateUI(); updateCryptoUI(); closeModal();
            showToast('Bought ' + formatCurrency(amount) + ' of ' + symbol);
        }

        function updateLifestyleUI() {
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var now = new Date();
            var el = document.getElementById('lifestyleMonth');
            if (el) el.textContent = months[now.getMonth()] + ' ' + now.getFullYear();

            var account = state.accounts[state.currentAccount];
            var cats = { food: 0, shopping: 0, transport: 0, subscription: 0 };
            account.transactions.forEach(function(t) {
                if (t.amount < 0) {
                    if (cats.hasOwnProperty(t.category)) {
                        cats[t.category] += Math.abs(t.amount);
                    }
                }
            });
            var maxCat = Math.max(cats.food, cats.shopping, cats.transport, cats.subscription, 1);

            setTimeout(function() {
                var cf = document.getElementById('catFood'); if (cf) cf.textContent = formatCurrency(cats.food);
                var cs = document.getElementById('catShopping'); if (cs) cs.textContent = formatCurrency(cats.shopping);
                var ct = document.getElementById('catTransport'); if (ct) ct.textContent = formatCurrency(cats.transport);
                var cb = document.getElementById('catSubs'); if (cb) cb.textContent = formatCurrency(cats.subscription);
                var bf = document.getElementById('barFood'); if (bf) bf.style.width = (cats.food / maxCat * 100) + '%';
                var bs = document.getElementById('barShopping'); if (bs) bs.style.width = (cats.shopping / maxCat * 100) + '%';
                var bt = document.getElementById('barTransport'); if (bt) bt.style.width = (cats.transport / maxCat * 100) + '%';
                var bb = document.getElementById('barSubs'); if (bb) bb.style.width = (cats.subscription / maxCat * 100) + '%';
            }, 300);
        }

        function quickSend(name) {
            keypadValues['sendAmount'] = '';
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Send to ' + name + '</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="text-center mb-5">' +
                '<p class="text-sm text-white/40 mb-2">Amount</p>' +
                '<p class="text-4xl font-semibold tracking-tight text-white" id="sendAmount">$0</p>' +
                '</div>' +
                keypadHTML('sendAmount', "confirmSend('" + name + "')", 'Send to ' + name)
            );
        }

        function confirmSend(name) {
            var amount = parseFloat(keypadValues['sendAmount']);
            if (!amount || amount <= 0) { showToast('Enter a valid amount', 'error'); return; }
            var account = state.accounts[state.currentAccount];
            if (amount > account.balance) { showToast('Insufficient funds', 'error'); return; }

            account.balance -= amount;
            account.transactions.push({
                id: Date.now(), description: 'Sent to ' + name, amount: -amount, category: 'send', date: new Date().toISOString()
            });
            saveState(); updateUI(); closeModal();
            showToast(formatCurrency(amount) + ' sent to ' + name);
        }

        function openSendMoney() { quickSend('Someone'); }

        function requestMoney() {
            showToast('Payment link copied!', 'info');
        }

        function scheduledPayments() {
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Scheduled Payments</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="space-y-2">' +
                '<div class="glass-card rounded-xl p-4 flex items-center gap-3">' +
                '<div class="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center"><iconify-icon icon="solar:repeat-linear" width="18" style="color: #a78bfa; stroke-width: 1.5;"></iconify-icon></div>' +
                '<div class="flex-1"><p class="text-sm font-medium text-white">Netflix</p><p class="text-xs text-white/40">Monthly · 15th</p></div>' +
                '<span class="text-sm font-semibold text-white">$15.99</span>' +
                '</div>' +
                '<div class="glass-card rounded-xl p-4 flex items-center gap-3">' +
                '<div class="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center"><iconify-icon icon="solar:repeat-linear" width="18" style="color: #34d399; stroke-width: 1.5;"></iconify-icon></div>' +
                '<div class="flex-1"><p class="text-sm font-medium text-white">Spotify</p><p class="text-xs text-white/40">Monthly · 1st</p></div>' +
                '<span class="text-sm font-semibold text-white">$9.99</span>' +
                '</div>' +
                '<div class="glass-card rounded-xl p-4 flex items-center gap-3">' +
                '<div class="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center"><iconify-icon icon="solar:repeat-linear" width="18" style="color: #60a5fa; stroke-width: 1.5;"></iconify-icon></div>' +
                '<div class="flex-1"><p class="text-sm font-medium text-white">Rent</p><p class="text-xs text-white/40">Monthly · 1st</p></div>' +
                '<span class="text-sm font-semibold text-white">$1,200</span>' +
                '</div>' +
                '</div>'
            );
        }

        function splitBill() {
            keypadValues['splitAmount'] = '';
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Split Bill</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="text-center mb-4">' +
                '<p class="text-sm text-white/40 mb-2">Total bill</p>' +
                '<p class="text-4xl font-semibold tracking-tight text-white" id="splitAmount">$0</p>' +
                '</div>' +
                '<div class="flex gap-2 mb-4 justify-center">' +
                '<button class="glass-pill rounded-full px-4 py-2 text-xs font-medium text-white/70 press-scale" onclick="splitCalc(2)">÷ 2</button>' +
                '<button class="glass-pill rounded-full px-4 py-2 text-xs font-medium text-white/70 press-scale" onclick="splitCalc(3)">÷ 3</button>' +
                '<button class="glass-pill rounded-full px-4 py-2 text-xs font-medium text-white/70 press-scale" onclick="splitCalc(4)">÷ 4</button>' +
                '</div>' +
                '<p class="text-center text-sm text-white/40 mb-5">Each person pays: <span class="text-white font-medium" id="splitEach">$0.00</span></p>' +
                keypadHTML('splitAmount', "confirmSplit()", 'Send Request')
            );
        }

        function splitCalc(num) {
            var total = parseFloat(keypadValues['splitAmount']) || 0;
            var each = total / num;
            document.getElementById('splitEach').textContent = formatCurrency(each);
        }

        function confirmSplit() {
            showToast('Split request sent!', 'success');
            closeModal();
        }

        function toggleBalance() {
            state.balanceHidden = !state.balanceHidden;
            updateUI();
        }

        function switchAccount(type) {
            state.currentAccount = type;
            saveState(); updateUI();
        }

        function searchTransactions(query) {
            renderTransactions(query);
        }

        function showToast(message, type) {
            type = type || 'success';
            var container = document.getElementById('toastContainer');
            var colors = { success: 'bg-emerald-500/90', error: 'bg-red-500/90', info: 'bg-indigo-500/90' };
            var icons = { success: 'solar:check-circle-bold', error: 'solar:close-circle-bold', info: 'solar:info-circle-bold' };

            var toast = document.createElement('div');
            toast.className = 'toast ' + colors[type] + ' rounded-2xl px-4 py-3 flex items-center gap-3 mb-2';
            toast.style.cssText = 'backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); transform: translateZ(0);';
            toast.innerHTML = '<iconify-icon icon="' + icons[type] + '" width="20" style="color: white;"></iconify-icon><span class="text-sm font-medium text-white">' + message + '</span>';
            container.appendChild(toast);
            setTimeout(function() { if (toast.parentNode) toast.remove(); }, 2800);
        }

        function openModal(content) {
            var overlay = document.getElementById('modalOverlay');
            var modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = '<div class="w-10 h-1 rounded-full bg-white/20 mx-auto mb-5"></div>' + content;
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(event) {
            document.getElementById('modalOverlay').classList.add('hidden');
            document.body.style.overflow = '';
        }

        function keypadHTML(inputId, onConfirm, confirmText) {
            confirmText = confirmText || 'Confirm';
            var nums = [1,2,3,4,5,6,7,8,9];
            var html = '<div class="grid grid-cols-3 gap-2.5 mb-4">';
            nums.forEach(function(n) {
                html += '<button class="keypad-btn rounded-2xl py-3.5 text-xl font-medium text-white" onclick="keypadInput(\'' + inputId + '\', \'' + n + '\')">' + n + '</button>';
            });
            html += '<button class="keypad-btn rounded-2xl py-3.5 text-xl font-medium text-white" onclick="keypadInput(\'' + inputId + '\', \'.\')">.</button>';
            html += '<button class="keypad-btn rounded-2xl py-3.5 text-xl font-medium text-white" onclick="keypadInput(\'' + inputId + '\', \'0\')">0</button>';
            html += '<button class="keypad-btn rounded-2xl py-3.5 flex items-center justify-center" onclick="keypadDelete(\'' + inputId + '\')"><iconify-icon icon="solar:backspace-linear" width="24" style="color: white; stroke-width: 1.5;"></iconify-icon></button>';
            html += '</div>';
            html += '<button class="confirm-btn w-full py-4 rounded-2xl text-base font-semibold text-white press-scale" onclick="' + onConfirm + '">' + confirmText + '</button>';
            return html;
        }

        function keypadInput(id, val) {
            if (!keypadValues[id]) keypadValues[id] = '';
            var current = keypadValues[id];
            if (val === '.' && current.indexOf('.') !== -1) return;
            if (current.indexOf('.') !== -1 && current.split('.')[1].length >= 2) return;
            if (current.length >= 10) return;
            keypadValues[id] += val;
            var el = document.getElementById(id);
            if (el) el.textContent = '$' + keypadValues[id];
            if (id === 'splitAmount') splitCalc(2);
        }

        function keypadDelete(id) {
            if (!keypadValues[id]) return;
            keypadValues[id] = keypadValues[id].slice(0, -1);
            var el = document.getElementById(id);
            if (el) el.textContent = keypadValues[id] ? '$' + keypadValues[id] : '$0';
        }

        function openAddMoney() {
            keypadValues['addAmount'] = '';
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Add Money</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="text-center mb-5">' +
                '<p class="text-sm text-white/40 mb-2">Enter amount</p>' +
                '<p class="text-4xl font-semibold tracking-tight text-white" id="addAmount">$0</p>' +
                '</div>' +
                '<div class="flex gap-2 mb-5 justify-center">' +
                '<button class="glass-pill rounded-full px-4 py-2 text-xs font-medium text-white/70 press-scale" onclick="quickAdd(100)">+$100</button>' +
                '<button class="glass-pill rounded-full px-4 py-2 text-xs font-medium text-white/70 press-scale" onclick="quickAdd(500)">+$500</button>' +
                '<button class="glass-pill rounded-full px-4 py-2 text-xs font-medium text-white/70 press-scale" onclick="quickAdd(1000)">+$1K</button>' +
                '<button class="glass-pill rounded-full px-4 py-2 text-xs font-medium text-white/70 press-scale" onclick="quickAdd(5000)">+$5K</button>' +
                '</div>' +
                keypadHTML('addAmount', 'confirmAddMoney()', 'Add Money')
            );
        }

        function quickAdd(amount) {
            keypadValues['addAmount'] = amount.toString();
            document.getElementById('addAmount').textContent = '$' + amount.toLocaleString();
        }

        function confirmAddMoney() {
            var amount = parseFloat(keypadValues['addAmount']);
            if (!amount || amount <= 0) { showToast('Enter a valid amount', 'error'); return; }

            var account = state.accounts[state.currentAccount];
            account.balance += amount;
            account.transactions.push({
                id: Date.now(), description: 'Money added', amount: amount, category: 'deposit', date: new Date().toISOString()
            });
            saveState(); updateUI(); closeModal();
            showToast(formatCurrency(amount) + ' added successfully');
        }

        function openTransfer() {
            keypadValues['transferAmount'] = '';
            var otherAccount = state.currentAccount === 'personal' ? 'business' : 'personal';
            var otherName = otherAccount.charAt(0).toUpperCase() + otherAccount.slice(1);
            var currentName = state.currentAccount.charAt(0).toUpperCase() + state.currentAccount.slice(1);

            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Transfer</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="glass-card rounded-xl p-4 mb-5 flex items-center justify-between">' +
                '<div class="text-center flex-1"><p class="text-xs text-white/40">' + currentName + '</p><p class="text-sm font-medium text-white">' + formatCurrency(state.accounts[state.currentAccount].balance) + '</p></div>' +
                '<iconify-icon icon="solar:arrow-right-linear" width="20" style="color: rgba(255,255,255,0.3); stroke-width: 1.5;"></iconify-icon>' +
                '<div class="text-center flex-1"><p class="text-xs text-white/40">' + otherName + '</p><p class="text-sm font-medium text-white">' + formatCurrency(state.accounts[otherAccount].balance) + '</p></div>' +
                '</div>' +
                '<div class="text-center mb-5">' +
                '<p class="text-sm text-white/40 mb-2">Amount</p>' +
                '<p class="text-4xl font-semibold tracking-tight text-white" id="transferAmount">$0</p>' +
                '</div>' +
                keypadHTML('transferAmount', 'confirmTransfer()', 'Transfer')
            );
        }

        function confirmTransfer() {
            var amount = parseFloat(keypadValues['transferAmount']);
            if (!amount || amount <= 0) { showToast('Enter a valid amount', 'error'); return; }
            var current = state.accounts[state.currentAccount];
            if (amount > current.balance) { showToast('Insufficient funds', 'error'); return; }

            var otherKey = state.currentAccount === 'personal' ? 'business' : 'personal';
            var other = state.accounts[otherKey];
            var otherName = otherKey.charAt(0).toUpperCase() + otherKey.slice(1);

            current.balance -= amount;
            current.transactions.push({ id: Date.now(), description: 'Transfer to ' + otherName, amount: -amount, category: 'transfer_out', date: new Date().toISOString() });
            other.balance += amount;
            other.transactions.push({ id: Date.now() + 1, description: 'Transfer from ' + (state.currentAccount.charAt(0).toUpperCase() + state.currentAccount.slice(1)), amount: amount, category: 'transfer_in', date: new Date().toISOString() });

            saveState(); updateUI(); closeModal();
            showToast(formatCurrency(amount) + ' transferred to ' + otherName);
        }

        function showTransactionDetail(index) {
            var account = state.accounts[state.currentAccount];
            var t = account.transactions[index];
            if (!t) return;
            var date = new Date(t.date);
            var isPositive = t.amount > 0;

            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Transaction</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="text-center mb-8">' +
                '<div class="w-16 h-16 rounded-2xl ' + (isPositive ? 'bg-emerald-500/15' : 'bg-white/8') + ' flex items-center justify-center mx-auto mb-4">' +
                '<iconify-icon icon="' + (isPositive ? 'solar:arrow-down-linear' : 'solar:arrow-up-linear') + '" width="32" style="color: ' + (isPositive ? '#34d399' : 'rgba(255,255,255,0.6)') + '; stroke-width: 1.5;"></iconify-icon>' +
                '</div>' +
                '<p class="text-3xl font-semibold tracking-tight ' + (isPositive ? 'text-emerald-400' : 'text-white') + ' mb-1">' + (isPositive ? '+' : '-') + formatCurrency(Math.abs(t.amount)) + '</p>' +
                '<p class="text-sm text-white/40">' + t.description + '</p>' +
                '</div>' +
                '<div class="space-y-3">' +
                '<div class="flex justify-between"><span class="text-sm text-white/40">Status</span><span class="text-sm font-medium text-emerald-400">Completed</span></div>' +
                '<div class="flex justify-between"><span class="text-sm text-white/40">Date</span><span class="text-sm font-medium text-white">' + date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) + '</span></div>' +
                '<div class="flex justify-between"><span class="text-sm text-white/40">Time</span><span class="text-sm font-medium text-white">' + date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + '</span></div>' +
                '<div class="flex justify-between"><span class="text-sm text-white/40">Category</span><span class="text-sm font-medium text-white capitalize">' + t.category.replace('_', ' ') + '</span></div>' +
                '<div class="flex justify-between"><span class="text-sm text-white/40">Ref</span><span class="text-sm font-medium text-white/50 font-mono">#' + t.id.toString().slice(-8) + '</span></div>' +
                '</div>'
            );
        }

        function showAllTransactions() {
            showToast('Showing all transactions', 'info');
        }

        function showStats() {
            var account = state.accounts[state.currentAccount];
            var totalIn = 0, totalOut = 0;
            account.transactions.forEach(function(t) {
                if (t.amount > 0) totalIn += t.amount;
                else totalOut += Math.abs(t.amount);
            });
            var maxBar = Math.max(totalIn, totalOut, 1);
            var net = totalIn - totalOut;

            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Statistics</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="grid grid-cols-2 gap-3 mb-5">' +
                '<div class="glass-card rounded-2xl p-4 text-center"><p class="text-xs text-white/40 mb-1">Income</p><p class="text-xl font-semibold text-emerald-400 tracking-tight">' + formatCurrency(totalIn) + '</p></div>' +
                '<div class="glass-card rounded-2xl p-4 text-center"><p class="text-xs text-white/40 mb-1">Expenses</p><p class="text-xl font-semibold text-red-400 tracking-tight">' + formatCurrency(totalOut) + '</p></div>' +
                '</div>' +
                '<div class="space-y-3 mb-5">' +
                '<div><div class="flex justify-between text-xs mb-1"><span class="text-white/40">Income</span><span class="text-emerald-400">' + formatCurrency(totalIn) + '</span></div><div class="w-full h-2.5 rounded-full bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" style="width: ' + (totalIn / maxBar * 100) + '%; transition: width 1s;"></div></div></div>' +
                '<div><div class="flex justify-between text-xs mb-1"><span class="text-white/40">Expenses</span><span class="text-red-400">' + formatCurrency(totalOut) + '</span></div><div class="w-full h-2.5 rounded-full bg-white/5 overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400" style="width: ' + (totalOut / maxBar * 100) + '%; transition: width 1s;"></div></div></div>' +
                '</div>' +
                '<div class="glass-card rounded-2xl p-4 text-center"><p class="text-xs text-white/40 mb-1">Net</p><p class="text-2xl font-semibold tracking-tight ' + (net >= 0 ? 'text-emerald-400' : 'text-red-400') + '">' + (net >= 0 ? '+' : '-') + formatCurrency(Math.abs(net)) + '</p></div>'
            );
        }

        function showCards() {
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Cards</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="rounded-2xl p-6 mb-5 relative overflow-hidden float-card" style="background: linear-gradient(135deg, #4338ca, #6d28d9, #7c3aed); min-height: 180px; box-shadow: 0 12px 40px rgba(99,102,241,0.3);">' +
                '<div class="absolute top-0 right-0 w-44 h-44 rounded-full" style="background: rgba(255,255,255,0.08); transform: translate3d(25%, -35%, 0);"></div>' +
                '<div class="absolute bottom-0 left-0 w-36 h-36 rounded-full" style="background: rgba(255,255,255,0.04); transform: translate3d(-25%, 35%, 0);"></div>' +
                '<div class="relative z-10">' +
                '<div class="flex justify-between items-start mb-10"><p class="text-sm font-medium text-white/70">Virtual Card</p><span class="text-lg font-bold tracking-tighter text-white/60">Vault</span></div>' +
                '<p class="text-lg font-medium text-white tracking-widest font-mono mb-4">•••• •••• •••• 4892</p>' +
                '<div class="flex justify-between"><div><p class="text-xs text-white/40">CARDHOLDER</p><p class="text-sm font-medium text-white">USER</p></div><div><p class="text-xs text-white/40">EXPIRES</p><p class="text-sm font-medium text-white">12/28</p></div></div>' +
                '</div></div>' +
                '<div class="grid grid-cols-3 gap-2">' +
                '<button class="glass-card rounded-xl p-3 flex flex-col items-center gap-2 press-scale" onclick="showToast(\'Card frozen\', \'info\'); closeModal();"><iconify-icon icon="solar:snowflake-linear" width="20" style="color: #60a5fa; stroke-width: 1.5;"></iconify-icon><span class="text-xs text-white/50">Freeze</span></button>' +
                '<button class="glass-card rounded-xl p-3 flex flex-col items-center gap-2 press-scale" onclick="showToast(\'PIN: 1234\', \'info\'); closeModal();"><iconify-icon icon="solar:lock-linear" width="20" style="color: #a78bfa; stroke-width: 1.5;"></iconify-icon><span class="text-xs text-white/50">PIN</span></button>' +
                '<button class="glass-card rounded-xl p-3 flex flex-col items-center gap-2 press-scale" onclick="showToast(\'Limits updated\', \'info\'); closeModal();"><iconify-icon icon="solar:tuning-2-linear" width="20" style="color: #f59e0b; stroke-width: 1.5;"></iconify-icon><span class="text-xs text-white/50">Limits</span></button>' +
                '</div>'
            );
        }

        function showProfile() {
            var el = document.getElementById('notifDot');
            if (el) el.style.display = 'none';
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Profile</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="flex items-center gap-4 mb-6">' +
                '<div class="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center"><span class="text-xl font-bold">V</span></div>' +
                '<div><p class="text-lg font-semibold text-white tracking-tight">User</p><p class="text-sm text-white/40">user@vault.app</p><div class="flex items-center gap-1.5 mt-1"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div><span class="text-xs text-emerald-400">Verified</span></div></div>' +
                '</div>' +
                '<div class="space-y-2">' +
                '<div class="glass-card rounded-xl p-4 flex items-center justify-between"><span class="text-sm text-white/40">Plan</span><span class="text-sm font-medium gradient-text">Premium</span></div>' +
                '<div class="glass-card rounded-xl p-4 flex items-center justify-between"><span class="text-sm text-white/40">Member since</span><span class="text-sm font-medium text-white">2024</span></div>' +
                '</div>'
            );
        }

        function openSavings() {
            keypadValues['savingsAmount'] = '';
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Savings</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="glass-card rounded-2xl p-5 mb-5 text-center glow-emerald">' +
                '<p class="text-xs text-white/40 mb-1">Savings Balance</p>' +
                '<p class="text-3xl font-semibold tracking-tight text-white mb-2">' + formatCurrency(state.savingsBalance) + '</p>' +
                '<div class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15"><iconify-icon icon="solar:graph-up-linear" width="14" style="color: #34d399; stroke-width: 1.5;"></iconify-icon><span class="text-xs font-medium text-emerald-400">5.12% APY</span></div>' +
                '</div>' +
                '<div class="text-center mb-4">' +
                '<p class="text-sm text-white/40 mb-2">Deposit to savings</p>' +
                '<p class="text-3xl font-semibold tracking-tight text-white" id="savingsAmount">$0</p>' +
                '<p class="text-xs text-white/25 mt-1">Available: ' + formatCurrency(state.accounts[state.currentAccount].balance) + '</p>' +
                '</div>' +
                keypadHTML('savingsAmount', 'confirmSavingsDeposit()', 'Deposit')
            );
        }

        function confirmSavingsDeposit() {
            var amount = parseFloat(keypadValues['savingsAmount']);
            if (!amount || amount <= 0) { showToast('Enter a valid amount', 'error'); return; }
            var account = state.accounts[state.currentAccount];
            if (amount > account.balance) { showToast('Insufficient funds', 'error'); return; }

            account.balance -= amount;
            state.savingsBalance += amount;
            account.transactions.push({ id: Date.now(), description: 'Savings deposit', amount: -amount, category: 'savings', date: new Date().toISOString() });
            saveState(); updateUI(); closeModal();
            showToast(formatCurrency(amount) + ' moved to Savings');
        }

        function openMultiCurrency() {
            var currencies = [
                { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
                { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
                { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
                { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' }
            ];
            var current = state.accounts[state.currentAccount].currency;

            var html = '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">Currency</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div><div class="space-y-2">';
            currencies.forEach(function(c) {
                html += '<button class="w-full glass-card rounded-2xl p-4 flex items-center justify-between press-scale ' + (c.code === current ? 'ring-1 ring-indigo-400/50' : '') + '" onclick="setCurrency(\'' + c.code + '\')">' +
                    '<div class="flex items-center gap-3"><span class="text-2xl">' + c.flag + '</span><div><p class="text-sm font-medium text-white">' + c.name + '</p><p class="text-xs text-white/40">' + c.code + '</p></div></div>' +
                    (c.code === current ? '<iconify-icon icon="solar:check-circle-bold" width="22" style="color: #818cf8;"></iconify-icon>' : '') +
                    '</button>';
            });
            html += '</div>';
            openModal(html);
        }

        function setCurrency(code) {
            state.accounts[state.currentAccount].currency = code;
            saveState(); updateUI(); closeModal();
            showToast('Currency changed to ' + code, 'info');
        }

        function showMore() {
            openModal(
                '<div class="flex items-center justify-between mb-5">' +
                '<h2 class="text-xl font-semibold tracking-tight text-white">More</h2>' +
                '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                '</div>' +
                '<div class="space-y-2">' +
                '<button class="w-full glass-card rounded-2xl p-4 flex items-center gap-4 text-left press-scale" onclick="simulateSpending()"><div class="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center"><iconify-icon icon="solar:bag-linear" width="20" style="color: #fb923c; stroke-width: 1.5;"></iconify-icon></div><div><p class="text-sm font-medium text-white">Simulate spending</p><p class="text-xs text-white/35">Add random expenses</p></div></button>' +
                '<button class="w-full glass-card rounded-2xl p-4 flex items-center gap-4 text-left press-scale" onclick="simulateIncome()"><div class="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center"><iconify-icon icon="solar:wallet-money-linear" width="20" style="color: #34d399; stroke-width: 1.5;"></iconify-icon></div><div><p class="text-sm font-medium text-white">Simulate income</p><p class="text-xs text-white/35">Add salary deposit</p></div></button>' +
                '<button class="w-full glass-card rounded-2xl p-4 flex items-center gap-4 text-left press-scale" onclick="showDetails()"><div class="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center"><iconify-icon icon="solar:buildings-linear" width="20" style="color: #60a5fa; stroke-width: 1.5;"></iconify-icon></div><div><p class="text-sm font-medium text-white">Account details</p><p class="text-xs text-white/35">IBAN, SWIFT & more</p></div></button>' +
                '<button class="w-full glass-card rounded-2xl p-4 flex items-center gap-4 text-left press-scale" onclick="resetApp()"><div class="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center"><iconify-icon icon="solar:trash-bin-trash-linear" width="20" style="color: #f87171; stroke-width: 1.5;"></iconify-icon></div><div><p class="text-sm font-medium text-white">Reset everything</p><p class="text-xs text-white/35">Clear all data</p></div></button>' +
                '</div>'
            );
        }

        function simulateSpending() {
            var account = state.accounts[state.currentAccount];
            var expenses = [
                { description: 'Starbucks Coffee', category: 'food', min: 3, max: 8 },
                { description: 'Amazon Purchase', category: 'shopping', min: 15, max: 120 },
                { description: 'Uber Ride', category: 'transport', min: 8, max: 35 },
                { description: 'Netflix', category: 'subscription', min: 15, max: 15 },
                { description: 'Grocery Store', category: 'food', min: 25, max: 80 },
                { description: 'Spotify', category: 'subscription', min: 10, max: 10 },
                { description: 'Gas Station', category: 'transport', min: 30, max: 60 },
                { description: 'Restaurant', category: 'food', min: 20, max: 75 }
            ];
            var expense = expenses[Math.floor(Math.random() * expenses.length)];
            var amount = Math.round((Math.random() * (expense.max - expense.min) + expense.min) * 100) / 100;
            if (amount > account.balance) { showToast('Insufficient funds', 'error'); return; }

            account.balance -= amount;
            account.transactions.push({ id: Date.now(), description: expense.description, amount: -amount, category: expense.category, date: new Date().toISOString() });
            saveState(); updateUI(); updateLifestyleUI(); closeModal();
            showToast(expense.description + ': -' + formatCurrency(amount), 'info');
        }

        function simulateIncome() {
            var account = state.accounts[state.currentAccount];
            var incomes = [
                { description: 'Salary Deposit', amount: 4500 },
                { description: 'Freelance Payment', amount: 1200 },
                { description: 'Investment Return', amount: 350 },
                { description: 'Bonus Payment', amount: 2000 }
            ];
            var income = incomes[Math.floor(Math.random() * incomes.length)];
            account.balance += income.amount;
            account.transactions.push({ id: Date.now(), description: income.description, amount: income.amount, category: 'deposit', date: new Date().toISOString() });
            saveState(); updateUI(); closeModal();
            showToast(income.description + ': +' + formatCurrency(income.amount));
        }

        function showDetails() {
            var iban = state.currentAccount === 'personal' ? 'US64 VLTT 0012 3456 7890 12' : 'US64 VLTT 0098 7654 3210 99';
            closeModal();
            setTimeout(function() {
                openModal(
                    '<div class="flex items-center justify-between mb-5">' +
                    '<h2 class="text-xl font-semibold tracking-tight text-white">Account Details</h2>' +
                    '<button onclick="closeModal(event)" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" width="20" style="color: rgba(255,255,255,0.5); stroke-width: 1.5;"></iconify-icon></button>' +
                    '</div>' +
                    '<div class="space-y-2 mb-5">' +
                    '<div class="glass-card rounded-xl p-4"><p class="text-xs text-white/30 mb-1">IBAN</p><p class="text-sm font-medium text-white font-mono">' + iban + '</p></div>' +
                    '<div class="glass-card rounded-xl p-4"><p class="text-xs text-white/30 mb-1">BIC / SWIFT</p><p class="text-sm font-medium text-white font-mono">VLTUS33</p></div>' +
                    '<div class="glass-card rounded-xl p-4"><p class="text-xs text-white/30 mb-1">Currency</p><p class="text-sm font-medium text-white">' + state.accounts[state.currentAccount].currency + '</p></div>' +
                    '</div>' +
                    '<button class="w-full py-3.5 rounded-2xl text-sm font-medium text-white glass-pill press-scale" onclick="navigator.clipboard.writeText(\'' + iban.replace(/\\s/g, '') + '\'); showToast(\'IBAN copied\', \'info\');">Copy IBAN</button>'
                );
            }, 350);
        }

        function resetApp() {
            if (confirm('Reset all data?')) {
                localStorage.removeItem('vaultAppState');
                state = {
                    accounts: { personal: { balance: 0, transactions: [], currency: 'USD' }, business: { balance: 0, transactions: [], currency: 'USD' } },
                    currentAccount: 'personal', balanceHidden: false, savingsBalance: 0,
                    portfolio: { value: 0, holdings: [] }, crypto: { value: 0, holdings: [] }, currentTab: 'home'
                };
                saveState(); updateUI(); updateInvestUI(); updateCryptoUI(); updateLifestyleUI(); closeModal();
                showToast('All data cleared', 'info');
            }
        }

        loadState();

        if (state.currentTab && state.currentTab !== 'home') {
            var t = state.currentTab;
            state.currentTab = 'home';
            currentTab = 'home';
            setTimeout(function() { switchTab(t); }, 100);
        }
    
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
      

<div className="fixed top-12 left-0 right-0 max-w-md mx-auto z-[60] px-5 pointer-events-none" id="toastContainer" style={{paddingTop: 'env(safe-area-inset-top, 0px)'}}></div>

<div className="page active pb-36" id="page-home">
<div className="gradient-header px-5 pt-12 pb-8" style={{paddingTop: 'max(env(safe-area-inset-top, 12px), 12px)'}}>
<div className="flex items-center gap-3 mb-14 pt-3">
<div className="relative flex-shrink-0 press-scale" onclick="showProfile()">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
<span className="text-sm font-semibold text-white">V</span>
</div>
<div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-indigo-600 pulse-dot" id="notifDot"></div>
</div>
<div className="flex-1 glass-pill rounded-full px-4 py-2.5 flex items-center gap-2.5">
<iconify-icon icon="solar:magnifer-linear" style={{color: 'rgba(255,255,255,0.5)', strokeWidth: '1.5'}} width="17"></iconify-icon>
<input className="search-input text-sm text-white w-full" id="searchInput" oninput="searchTransactions(this.value)" placeholder="Search transactions..." type="text"/>
</div>
<div className="glass-pill rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 press-scale" onclick="showStats()">
<iconify-icon icon="solar:chart-2-linear" style={{color: 'rgba(255,255,255,0.7)', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
<div className="text-center mb-6">
<p className="text-sm text-white/50 font-normal mb-2" id="accountLabel">Personal · USD</p>
<h1 className="text-5xl font-semibold tracking-tight mb-5 balance-counter press-scale" id="balanceDisplay" onclick="toggleBalance()">$0.00</h1>
<div className="inline-flex gap-2">
<button className="glass-pill rounded-full px-5 py-2 press-scale tab-active" id="personalTab" onclick="switchAccount('personal')">
<span className="text-sm font-medium text-white/90">Personal</span>
</button>
<button className="glass-pill rounded-full px-5 py-2 press-scale opacity-50" id="businessTab" onclick="switchAccount('business')">
<span className="text-sm font-medium text-white/90">Business</span>
</button>
</div>
</div>
<div className="grid grid-cols-4 gap-3 mt-8">
<div className="flex flex-col items-center gap-2.5 press-scale" onclick="openAddMoney()">
<div className="action-btn w-14 h-14 rounded-2xl flex items-center justify-center">
<iconify-icon icon="solar:add-circle-linear" style={{color: 'white', strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-white/60">Add</span>
</div>
<div className="flex flex-col items-center gap-2.5 press-scale" onclick="openTransfer()">
<div className="action-btn w-14 h-14 rounded-2xl flex items-center justify-center">
<iconify-icon icon="solar:transfer-horizontal-linear" style={{color: 'white', strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-white/60">Transfer</span>
</div>
<div className="flex flex-col items-center gap-2.5 press-scale" onclick="openSendMoney()">
<div className="action-btn w-14 h-14 rounded-2xl flex items-center justify-center">
<iconify-icon icon="solar:arrow-up-linear" style={{color: 'white', strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-white/60">Send</span>
</div>
<div className="flex flex-col items-center gap-2.5 press-scale" onclick="showMore()">
<div className="action-btn w-14 h-14 rounded-2xl flex items-center justify-center">
<iconify-icon icon="solar:menu-dots-linear" style={{color: 'white', strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<span className="text-xs font-medium text-white/60">More</span>
</div>
</div>
</div>
<div className="px-5 mt-6">
<div id="transactionsContainer">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold text-white/80">Recent</h3>
<span className="text-xs font-medium text-indigo-400 press-scale" onclick="showAllTransactions()">See all</span>
</div>
<div className="glass-card rounded-2xl px-5 py-8 flex flex-col items-center gap-3" id="emptyState">
<div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
<iconify-icon icon="solar:wallet-linear" style={{color: 'rgba(255,255,255,0.25)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-sm text-white/35 font-normal">No transactions yet</span>
<button className="glass-pill rounded-full px-5 py-2 text-xs font-medium text-white/70 mt-1 press-scale" onclick="openAddMoney()">Add your first funds</button>
</div>
<div className="space-y-2" id="transactionsList"></div>
</div>
<div className="mt-6 mb-4">
<h3 className="text-base font-semibold text-white/80 mb-4">Explore</h3>
<div className="flex gap-3 overflow-x-auto snap-scroll pb-2" style={{margin: '0 -20px', padding: '0 20px'}}>
<div className="glass-card rounded-2xl p-5 min-w-[200px] flex-shrink-0 press-scale" onclick="openSavings()">
<div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-3">
<iconify-icon icon="solar:safe-circle-linear" style={{color: '#34d399', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<p className="text-sm font-semibold text-white mb-1">Savings</p>
<p className="text-xs text-white/40">Earn 5.12% APY</p>
</div>
<div className="glass-card rounded-2xl p-5 min-w-[200px] flex-shrink-0 press-scale" onclick="showCards()">
<div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-3">
<iconify-icon icon="solar:card-linear" style={{color: '#818cf8', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<p className="text-sm font-semibold text-white mb-1">Cards</p>
<p className="text-xs text-white/40">Virtual &amp; physical</p>
</div>
<div className="glass-card rounded-2xl p-5 min-w-[200px] flex-shrink-0 press-scale" onclick="openMultiCurrency()">
<div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center mb-3">
<iconify-icon icon="solar:globe-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<p className="text-sm font-semibold text-white mb-1">Multi-currency</p>
<p className="text-xs text-white/40">45+ currencies</p>
</div>
</div>
</div>
</div>
</div>

<div className="page pb-36" id="page-invest">
<div className="px-5 pt-12" style={{paddingTop: 'max(env(safe-area-inset-top, 12px), 12px)'}}>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2 mt-3">Invest</h1>
<p className="text-sm text-white/40 mb-6">Build your portfolio</p>
<div className="glass-card rounded-2xl p-5 mb-6 glow-indigo" id="investPortfolio">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-white/40">Portfolio Value</span>
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear" style={{color: '#34d399', strokeWidth: '1.5'}} width="12"></iconify-icon>
<span id="investReturn">+0.00%</span>
</span>
</div>
<p className="text-3xl font-semibold tracking-tight text-white mb-4" id="portfolioValue">$0.00</p>
<div className="flex items-end gap-1 h-16" id="investChart"></div>
</div>
<h3 className="text-sm font-semibold text-white/60 mb-3">Watchlist</h3>
<div className="space-y-2" id="stocksList">
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyStock('AAPL')">
<div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
<span className="text-sm font-bold text-white/70">A</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Apple Inc.</p>
<p className="text-xs text-white/40">AAPL</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$198.45</p>
<p className="text-xs text-emerald-400">+2.34%</p>
</div>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyStock('TSLA')">
<div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
<span className="text-sm font-bold text-white/70">T</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Tesla Inc.</p>
<p className="text-xs text-white/40">TSLA</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$248.12</p>
<p className="text-xs text-red-400">-1.21%</p>
</div>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyStock('NVDA')">
<div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
<span className="text-sm font-bold text-white/70">N</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">NVIDIA Corp.</p>
<p className="text-xs text-white/40">NVDA</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$875.30</p>
<p className="text-xs text-emerald-400">+4.56%</p>
</div>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyStock('MSFT')">
<div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
<span className="text-sm font-bold text-white/70">M</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Microsoft</p>
<p className="text-xs text-white/40">MSFT</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$415.80</p>
<p className="text-xs text-emerald-400">+0.87%</p>
</div>
</div>
</div>
</div>
</div>

<div className="page pb-36" id="page-payments">
<div className="px-5 pt-12" style={{paddingTop: 'max(env(safe-area-inset-top, 12px), 12px)'}}>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2 mt-3">Payments</h1>
<p className="text-sm text-white/40 mb-6">Send &amp; receive money</p>
<h3 className="text-sm font-semibold text-white/60 mb-3">Quick Send</h3>
<div className="flex gap-4 overflow-x-auto snap-scroll pb-4" style={{margin: '0 -20px', padding: '0 20px'}}>
<div className="flex flex-col items-center gap-2 flex-shrink-0 press-scale" onclick="quickSend('Alex')">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
<span className="text-base font-semibold">A</span>
</div>
<span className="text-xs text-white/50">Alex</span>
</div>
<div className="flex flex-col items-center gap-2 flex-shrink-0 press-scale" onclick="quickSend('Sarah')">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
<span className="text-base font-semibold">S</span>
</div>
<span className="text-xs text-white/50">Sarah</span>
</div>
<div className="flex flex-col items-center gap-2 flex-shrink-0 press-scale" onclick="quickSend('Mike')">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
<span className="text-base font-semibold">M</span>
</div>
<span className="text-xs text-white/50">Mike</span>
</div>
<div className="flex flex-col items-center gap-2 flex-shrink-0 press-scale" onclick="quickSend('Emma')">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
<span className="text-base font-semibold">E</span>
</div>
<span className="text-xs text-white/50">Emma</span>
</div>
<div className="flex flex-col items-center gap-2 flex-shrink-0 press-scale" onclick="showToast('Add new contact', 'info')">
<div className="w-14 h-14 rounded-full bg-white/8 border border-dashed border-white/20 flex items-center justify-center">
<iconify-icon icon="solar:add-circle-linear" style={{color: 'rgba(255,255,255,0.4)', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<span className="text-xs text-white/50">Add</span>
</div>
</div>
<h3 className="text-sm font-semibold text-white/60 mb-3 mt-4">Services</h3>
<div className="space-y-2">
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="openSendMoney()">
<div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:arrow-up-linear" style={{color: '#818cf8', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Send Money</p>
<p className="text-xs text-white/40">To anyone, anywhere</p>
</div>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{color: 'rgba(255,255,255,0.3)', strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="requestMoney()">
<div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:arrow-down-linear" style={{color: '#34d399', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Request Money</p>
<p className="text-xs text-white/40">Create payment link</p>
</div>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{color: 'rgba(255,255,255,0.3)', strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="scheduledPayments()">
<div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:calendar-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Scheduled</p>
<p className="text-xs text-white/40">Recurring payments</p>
</div>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{color: 'rgba(255,255,255,0.3)', strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="splitBill()">
<div className="w-11 h-11 rounded-xl bg-pink-500/15 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:users-group-rounded-linear" style={{color: '#ec4899', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Split Bill</p>
<p className="text-xs text-white/40">Share expenses</p>
</div>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{color: 'rgba(255,255,255,0.3)', strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="page pb-36" id="page-crypto">
<div className="px-5 pt-12" style={{paddingTop: 'max(env(safe-area-inset-top, 12px), 12px)'}}>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2 mt-3">Crypto</h1>
<p className="text-sm text-white/40 mb-6">Trade digital assets</p>
<div className="glass-card rounded-2xl p-5 mb-6 glow-amber" id="cryptoPortfolio">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-white/40">Crypto Balance</span>
<div className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot"></div>
<span className="text-xs text-white/40">Live</span>
</div>
</div>
<p className="text-3xl font-semibold tracking-tight text-white mb-1" id="cryptoBalance">$0.00</p>
<p className="text-xs text-emerald-400" id="cryptoChange">+0.00% today</p>
</div>
<h3 className="text-sm font-semibold text-white/60 mb-3">Markets</h3>
<div className="space-y-2" id="cryptoList">
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyCrypto('BTC')">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(247,147,26,0.15)'}}>
<span className="text-lg font-bold" style={{color: '#f7931a'}}>₿</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Bitcoin</p>
<p className="text-xs text-white/40">BTC</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$67,432</p>
<p className="text-xs text-emerald-400">+3.21%</p>
</div>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyCrypto('ETH')">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(98,126,234,0.15)'}}>
<span className="text-lg font-bold" style={{color: '#627eea'}}>Ξ</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Ethereum</p>
<p className="text-xs text-white/40">ETH</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$3,521</p>
<p className="text-xs text-emerald-400">+1.87%</p>
</div>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyCrypto('SOL')">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(153,69,255,0.15)'}}>
<span className="text-lg font-bold" style={{color: '#9945ff'}}>S</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Solana</p>
<p className="text-xs text-white/40">SOL</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$178.90</p>
<p className="text-xs text-red-400">-0.43%</p>
</div>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="buyCrypto('DOGE')">
<div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(196,178,90,0.15)'}}>
<span className="text-lg font-bold" style={{color: '#c4b25a'}}>Ð</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Dogecoin</p>
<p className="text-xs text-white/40">DOGE</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-white">$0.1823</p>
<p className="text-xs text-emerald-400">+8.32%</p>
</div>
</div>
</div>
</div>
</div>

<div className="page pb-36" id="page-lifestyle">
<div className="px-5 pt-12" style={{paddingTop: 'max(env(safe-area-inset-top, 12px), 12px)'}}>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2 mt-3">Lifestyle</h1>
<p className="text-sm text-white/40 mb-6">Perks &amp; benefits</p>
<div className="glass-card rounded-2xl p-5 mb-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-white/70">Monthly Spending</h3>
<span className="text-xs text-white/30" id="lifestyleMonth"></span>
</div>
<div className="space-y-3" id="spendingCategories">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-white/60 flex items-center gap-1.5">
<iconify-icon icon="solar:cup-hot-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Food &amp; Drink
                            </span>
<span className="text-white/80" id="catFood">$0</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full transition-all duration-1000" id="barFood" style={{background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', width: '0%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-white/60 flex items-center gap-1.5">
<iconify-icon icon="solar:bag-linear" style={{color: '#ec4899', strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Shopping
                            </span>
<span className="text-white/80" id="catShopping">$0</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full transition-all duration-1000" id="barShopping" style={{background: 'linear-gradient(90deg, #ec4899, #f472b6)', width: '0%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-white/60 flex items-center gap-1.5">
<iconify-icon icon="solar:bus-linear" style={{color: '#60a5fa', strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Transport
                            </span>
<span className="text-white/80" id="catTransport">$0</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full transition-all duration-1000" id="barTransport" style={{background: 'linear-gradient(90deg, #3b82f6, #60a5fa)', width: '0%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-white/60 flex items-center gap-1.5">
<iconify-icon icon="solar:repeat-linear" style={{color: '#a78bfa', strokeWidth: '1.5'}} width="14"></iconify-icon>
                                Subscriptions
                            </span>
<span className="text-white/80" id="catSubs">$0</span>
</div>
<div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full rounded-full transition-all duration-1000" id="barSubs" style={{background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)', width: '0%'}}></div>
</div>
</div>
</div>
</div>
<h3 className="text-sm font-semibold text-white/60 mb-3">Perks</h3>
<div className="space-y-2">
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="showToast('Lounge access activated!', 'success')">
<div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:cup-star-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Airport Lounges</p>
<p className="text-xs text-white/40">1,300+ lounges worldwide</p>
</div>
<span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">Free</span>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="showToast('Insurance activated!', 'success')">
<div className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#34d399', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Travel Insurance</p>
<p className="text-xs text-white/40">Medical &amp; trip coverage</p>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">Active</span>
</div>
<div className="glass-card rounded-2xl px-4 py-4 flex items-center gap-4 press-scale" onclick="showToast('Cashback activated!', 'success')">
<div className="w-11 h-11 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:tag-price-linear" style={{color: '#818cf8', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Cashback</p>
<p className="text-xs text-white/40">Up to 10% at partners</p>
</div>
<span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-full">Earn</span>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40 flex justify-center" style={{paddingBottom: 'max(env(safe-area-inset-bottom, 24px), 24px)'}}>
<div className="island-nav rounded-full px-2 py-2 flex items-center gap-1" id="islandNav" style={{width: 'auto'}}>
<div className="nav-pill active rounded-full px-4 py-2.5 flex items-center justify-center" id="navHome" onclick="switchTab('home')">
<iconify-icon icon="solar:home-2-bold" style={{color: 'white'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-white">Home</span>
</div>
<div className="nav-pill rounded-full px-4 py-2.5 flex items-center justify-center" id="navInvest" onclick="switchTab('invest')">
<iconify-icon icon="solar:graph-up-linear" style={{color: 'rgba(255,255,255,0.4)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-white">Invest</span>
</div>
<div className="nav-pill rounded-full px-4 py-2.5 flex items-center justify-center" id="navPayments" onclick="switchTab('payments')">
<iconify-icon icon="solar:card-transfer-linear" style={{color: 'rgba(255,255,255,0.4)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-white">Pay</span>
</div>
<div className="nav-pill rounded-full px-4 py-2.5 flex items-center justify-center" id="navCrypto" onclick="switchTab('crypto')">
<iconify-icon icon="solar:diploma-verified-linear" style={{color: 'rgba(255,255,255,0.4)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-white">Crypto</span>
</div>
<div className="nav-pill rounded-full px-4 py-2.5 flex items-center justify-center" id="navLifestyle" onclick="switchTab('lifestyle')">
<iconify-icon icon="solar:star-linear" style={{color: 'rgba(255,255,255,0.4)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-xs font-medium text-white">Life</span>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modalOverlay" onclick="closeModal(event)">
<div className="modal-overlay absolute inset-0 fade-in"></div>
<div className="absolute bottom-0 left-0 right-0 max-w-md mx-auto">
<div className="modal-sheet slide-up p-6" id="modalContent" onclick="event.stopPropagation()" style={{paddingBottom: 'max(env(safe-area-inset-bottom, 32px), 32px)'}}>
<div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-5"></div>
</div>
</div>
</div>


    </>
  );
}
