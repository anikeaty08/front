import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Dataset
      const countries = [
        { name: "United States", code: "US", flag: "🇺🇸", lat: 38, lon: -97, pop: 331000000, area: 9833520, langs: ["en"] },
        { name: "Canada", code: "CA", flag: "🇨🇦", lat: 56.130, lon: -106.346, pop: 38000000, area: 9984670, langs: ["en","fr"] },
        { name: "Brazil", code: "BR", flag: "🇧🇷", lat: -14.235, lon: -51.925, pop: 212000000, area: 8515767, langs: ["pt"] },
        { name: "Mexico", code: "MX", flag: "🇲🇽", lat: 23.6345, lon: -102.5528, pop: 128000000, area: 1964375, langs: ["es"] },
        { name: "United Kingdom", code: "GB", flag: "🇬🇧", lat: 55.378, lon: -3.436, pop: 67000000, area: 242495, langs: ["en"] },
        { name: "France", code: "FR", flag: "🇫🇷", lat: 46.227, lon: 2.213, pop: 67000000, area: 551695, langs: ["fr"] },
        { name: "Germany", code: "DE", flag: "🇩🇪", lat: 51.165, lon: 10.451, pop: 83000000, area: 357386, langs: ["de"] },
        { name: "Spain", code: "ES", flag: "🇪🇸", lat: 40.463, lon: -3.749, pop: 47000000, area: 505990, langs: ["es"] },
        { name: "Italy", code: "IT", flag: "🇮🇹", lat: 41.8719, lon: 12.567, pop: 60000000, area: 301340, langs: ["it"] },
        { name: "Russia", code: "RU", flag: "🇷🇺", lat: 61.524, lon: 105.318, pop: 144000000, area: 17098242, langs: ["ru"] },
        { name: "China", code: "CN", flag: "🇨🇳", lat: 35.8617, lon: 104.195, pop: 1402000000, area: 9596961, langs: ["zh"] },
        { name: "India", code: "IN", flag: "🇮🇳", lat: 20.5937, lon: 78.9629, pop: 1380000000, area: 3287263, langs: ["hi","en"] },
        { name: "Japan", code: "JP", flag: "🇯🇵", lat: 36.2048, lon: 138.2529, pop: 126000000, area: 377975, langs: ["ja"] },
        { name: "Australia", code: "AU", flag: "🇦🇺", lat: -25.2744, lon: 133.7751, pop: 25600000, area: 7692024, langs: ["en"] },
        { name: "Egypt", code: "EG", flag: "🇪🇬", lat: 26.8206, lon: 30.8025, pop: 102000000, area: 1002450, langs: ["ar"] },
        { name: "South Africa", code: "ZA", flag: "🇿🇦", lat: -30.5595, lon: 22.9375, pop: 59300000, area: 1221037, langs: ["en","zu","xh","af"] },
        { name: "Nigeria", code: "NG", flag: "🇳🇬", lat: 9.0820, lon: 8.6753, pop: 206000000, area: 923768, langs: ["en","ha","yo","ig"] },
        { name: "Argentina", code: "AR", flag: "🇦🇷", lat: -38.4161, lon: -63.6167, pop: 45100000, area: 2780400, langs: ["es"] },
        { name: "Turkey", code: "TR", flag: "🇹🇷", lat: 38.9637, lon: 35.2433, pop: 82000000, area: 783562, langs: ["tr"] },
        { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", lat: 23.8859, lon: 45.0792, pop: 34800000, area: 2149690, langs: ["ar"] },
        { name: "Indonesia", code: "ID", flag: "🇮🇩", lat: -0.7893, lon: 113.9213, pop: 273000000, area: 1904569, langs: ["id"] },
        { name: "South Korea", code: "KR", flag: "🇰🇷", lat: 35.9078, lon: 127.7669, pop: 51700000, area: 100210, langs: ["ko"] },
        { name: "Iran", code: "IR", flag: "🇮🇷", lat: 32.4279, lon: 53.6880, pop: 83900000, area: 1648195, langs: ["fa"] },
        { name: "Pakistan", code: "PK", flag: "🇵🇰", lat: 30.3753, lon: 69.3451, pop: 220000000, area: 881913, langs: ["ur","en"] },
        { name: "Poland", code: "PL", flag: "🇵🇱", lat: 51.9194, lon: 19.1451, pop: 38000000, area: 312696, langs: ["pl"] },
      ];

      // State
      const state = {
        target: null,
        attempts: 0,
        maxAttempts: 10,
        startedAt: null,
        history: [],
        showHints: true,
        unit: 'km',
      };

      // Elements
      const el = {
        home: document.getElementById('home'),
        game: document.getElementById('game'),
        topbar: document.getElementById('topbar'),
        startGame: document.getElementById('startGame'),
        homeHowTo: document.getElementById('homeHowTo'),
        openHowTo: document.getElementById('openHowTo'),
        submitGuess: document.getElementById('submitGuess'),
        countryInput: document.getElementById('countryInput'),
        submitStatus: document.getElementById('submitStatus'),
        attemptsVal: document.getElementById('attemptsVal'),
        attemptsMax: document.getElementById('attemptsMax'),
        attemptsVal2: document.getElementById('attemptsVal2'),
        attemptsMax2: document.getElementById('attemptsMax2'),
        hintsGrid: document.getElementById('hintsGrid'), // may be null (hints removed)
        rerollHints: document.getElementById('rerollHints'), // may be null (hints removed)
        history: document.getElementById('history'),
        howtoModal: document.getElementById('howtoModal'),
        settingsModal: document.getElementById('settingsModal'),
        winModal: document.getElementById('winModal'),
        loseModal: document.getElementById('loseModal'),
        openSettings: document.getElementById('openSettings'),
        unitSelect: document.getElementById('unitSelect'),
        toggleHints: document.getElementById('toggleHints'),
        howtoStart: document.getElementById('howtoStart'),
        playAgainWin: document.getElementById('playAgainWin'),
        backToMenu: document.getElementById('backToMenu'),
        tryAgainLose: document.getElementById('tryAgainLose'),
        winName: document.getElementById('winName'),
        winFlag: document.getElementById('winFlag'),
        winAttempts: document.getElementById('winAttempts'),
        winTime: document.getElementById('winTime'),
        winStreak: document.getElementById('winStreak'),
        loseName: document.getElementById('loseName'),
        loseFlag: document.getElementById('loseFlag'),
        loseFact: document.getElementById('loseFact'),
        shareWin: document.getElementById('shareWin'),
        homeStats: {
          games: document.getElementById('statGames'),
          streak: document.getElementById('statStreak'),
          avg: document.getElementById('statAvg'),
        },
        autocomplete: document.getElementById('autocomplete'),
        suggestions: document.getElementById('suggestions'),
        difficultyLabel: document.getElementById('difficultyLabel'),
      };

      // LocalStorage Stats
      const STORAGE_KEY = 'geohunter_stats_v1';
      function loadStats() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          try { return JSON.parse(raw); } catch { return { games: 0, wins: 0, streak: 0, lastWinTime: 0, attemptsSum: 0 }; }
        }
        return { games: 0, wins: 0, streak: 0, lastWinTime: 0, attemptsSum: 0 };
      }
      function saveStats(s) { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }
      let stats = loadStats();

      function updateHomeStats() {
        el.homeStats.games.textContent = stats.games || 0;
        el.homeStats.streak.textContent = stats.streak || 0;
        el.homeStats.avg.textContent = (stats.wins > 0 ? (stats.attemptsSum / stats.wins).toFixed(1) : '—');
      }

      // Utils
      function randChoice(arr, n) {
        const a = [...arr];
        const out = [];
        while (a.length && out.length < n) {
          const i = Math.floor(Math.random() * a.length);
          out.push(a.splice(i, 1)[0]);
        }
        return out;
      }
      function toRad(d){return d*Math.PI/180;}
      function haversine(lat1, lon1, lat2, lon2){
        const R = 6371; // km
        const dLat = toRad(lat2-lat1), dLon = toRad(lon2-lon1);
        const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
        return 2*R*Math.asin(Math.sqrt(a));
      }
      function kmToMi(km){ return km * 0.621371; }
      function classifyDistance(km) {
        if (km < 800) return { label: "Very Close", level: 5, color: "emerald" };
        if (km < 2000) return { label: "Close", level: 4, color: "green" };
        if (km < 4500) return { label: "Medium", level: 3, color: "yellow" };
        if (km < 8000) return { label: "Far", level: 2, color: "orange" };
        return { label: "Very Far", level: 1, color: "red" };
      }
      function classifyScale(guess, target, key) {
        const g = guess[key], t = target[key];
        const ratio = g / t;
        if (ratio < 0.4) return { dir: "↑", label: "Much Smaller", level: 1, color: "red" };
        if (ratio < 0.8) return { dir: "↑", label: "Smaller", level: 2, color: "orange" };
        if (ratio <= 1.25) return { dir: "=", label: "Similar", level: 4, color: "green" };
        if (ratio <= 2.0) return { dir: "↓", label: "Larger", level: 3, color: "yellow" };
        return { dir: "↓", label: "Much Larger", level: 1, color: "red" };
      }
      function classifyLanguage(guess, target) {
        const s1 = new Set(guess.langs);
        const s2 = new Set(target.langs);
        let overlap = 0;
        s1.forEach(l => { if (s2.has(l)) overlap++; });
        const union = new Set([...s1, ...s2]).size;
        const j = union === 0 ? 0 : overlap / union;
        if (j === 1) return { label: "Very Close", level: 5, color: "emerald", overlap };
        if (j >= 0.5) return { label: "Close", level: 4, color: "green", overlap };
        if (j > 0) return { label: "Medium", level: 3, color: "yellow", overlap };
        return { label: "Far", level: 2, color: "orange", overlap };
      }
      function colorClasses(c) {
        switch(c){
          case 'emerald': return { bg: 'bg-emerald-500/15', text: 'text-emerald-300', ring: 'ring-emerald-400/30' };
          case 'green': return { bg: 'bg-green-500/15', text: 'text-green-300', ring: 'ring-green-400/30' };
          case 'yellow': return { bg: 'bg-yellow-500/15', text: 'text-yellow-300', ring: 'ring-yellow-400/30' };
          case 'orange': return { bg: 'bg-orange-500/15', text: 'text-orange-300', ring: 'ring-orange-400/30' };
          case 'red': return { bg: 'bg-red-500/15', text: 'text-red-300', ring: 'ring-red-400/30' };
          default: return { bg: 'bg-zinc-700/30', text: 'text-white/80', ring: 'ring-white/10' };
        }
      }

      // Game Core
      function startNewGame(goToGame = true) {
        state.target = randChoice(countries, 1)[0];
        state.attempts = 0;
        state.history = [];
        state.startedAt = Date.now();
        el.history.innerHTML = '';
        el.countryInput.value = '';
        updateAttempts();
        setHints();
        if (goToGame) {
          el.home.classList.add('hidden');
          el.game.classList.remove('hidden');
          el.topbar.classList.remove('hidden');
        }
        el.submitStatus.textContent = '';
        refreshIcons();
      }

      function updateAttempts() {
        el.attemptsVal.textContent = state.attempts;
        if (el.attemptsVal2) el.attemptsVal2.textContent = state.attempts;
        el.attemptsMax.textContent = state.maxAttempts;
        if (el.attemptsMax2) el.attemptsMax2.textContent = state.maxAttempts;
      }

      // Hints removed from UI; keep safe no-op to avoid errors
      function setHints() {
        if (!el.hintsGrid) return;
        el.hintsGrid.innerHTML = '';
      }

      function findCountryByName(input) {
        const q = input.trim().toLowerCase();
        return countries.find(c => c.name.toLowerCase() === q);
      }

      function addHistoryCard(guess, analysis) {
        const t = state.target;
        const card = document.createElement('div');
        card.className = "opacity-0 translate-y-2 transition-all duration-300 rounded-2xl border border-white/10 bg-zinc-900/70 p-4 hover:border-white/20";
        const distC = colorClasses(analysis.distance.color);
        const popC = colorClasses(analysis.population.color);
        const areaC = colorClasses(analysis.area.color);
        const langC = colorClasses(analysis.language.color);

        const unitLabel = state.unit === 'mi' ? 'mi' : 'km';
        const distanceKm = analysis.distance.km;
        const distanceVal = state.unit === 'mi' ? Math.round(kmToMi(distanceKm)) : Math.round(distanceKm);
        const distanceSentence = `${guess.name} is ${distanceVal.toLocaleString()} ${unitLabel} from the hidden country`;

        const popDiff = guess.pop - t.pop;
        const absPop = Math.abs(popDiff);
        const popHuman = fmtNum(absPop);
        const popSentence = absPop === 0
          ? `${guess.name} has the same population as the hidden country`
          : `${guess.name} has ${popHuman} ${popDiff > 0 ? 'more' : 'less'} people than the hidden country`;

        const ratio = guess.area / t.area;
        const ratioAbs = ratio >= 1 ? ratio : 1 / ratio;
        const ratioFmt = ratioAbs >= 10 ? Math.round(ratioAbs).toString() : ratioAbs.toFixed(1);
        let areaSentence = '';
        if (ratio >= 1.1) {
          areaSentence = `${guess.name} is ${ratioFmt}× larger than the hidden country`;
        } else if (ratio <= 0.9) {
          areaSentence = `${guess.name} is ${ratioFmt}× smaller than the hidden country`;
        } else {
          areaSentence = `${guess.name} is about the same size as the hidden country`;
        }

        const shared = guess.langs.filter(l => t.langs.includes(l));
        const langSentence = shared.length === 0
          ? `${guess.name} shares no common languages with the hidden country`
          : `${guess.name} shares ${shared.length} language${shared.length>1?'s':''} with the hidden country: ${shared.join(', ')}`;

        card.innerHTML = `
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-800 ring-1 ring-inset ring-white/10 text-xl">${guess.flag}</div>
              <div>
                <div class="text-base font-semibold tracking-tight">${guess.name}</div>
                <div class="text-xs text-white/50">Attempt #${state.attempts}</div>
              </div>
            </div>
            <div class="rounded-md border border-white/10 bg-zinc-800/60 px-2 py-1 text-xs text-white/70">vs Target</div>
          </div>
          <div class="mt-3 grid grid-cols-2 gap-3">
            <div class="rounded-lg ring-1 ${distC.ring} ${distC.bg} p-3">
              <div class="flex items-center gap-2 text-sm ${distC.text}">
                <i data-lucide="globe-2" class="h-4 w-4"></i> Distance
              </div>
              <div class="mt-1 flex items-center justify-between">
                <div class="text-sm text-white/80">${distanceSentence}</div>
                <div class="text-xs text-white/60">${distanceVal.toLocaleString()} ${unitLabel}</div>
              </div>
              <div class="mt-2 flex gap-1">
                ${renderDots(analysis.distance.level)}
              </div>
            </div>
            <div class="rounded-lg ring-1 ${popC.ring} ${popC.bg} p-3">
              <div class="flex items-center gap-2 text-sm ${popC.text}">
                <i data-lucide="users" class="h-4 w-4"></i> Population
              </div>
              <div class="mt-1 flex items-center justify-between">
                <div class="text-sm text-white/80">${popSentence}</div>
                <div class="text-xs text-white/60">${fmtNum(guess.pop)}</div>
              </div>
              <div class="mt-2 flex gap-1">
                ${renderDots(analysis.population.level)}
              </div>
            </div>
            <div class="rounded-lg ring-1 ${areaC.ring} ${areaC.bg} p-3">
              <div class="flex items-center gap-2 text-sm ${areaC.text}">
                <i data-lucide="ruler" class="h-4 w-4"></i> Size
              </div>
              <div class="mt-1 flex items-center justify-between">
                <div class="text-sm text-white/80">${areaSentence}</div>
                <div class="text-xs text-white/60">${fmtNum(guess.area)} km²</div>
              </div>
              <div class="mt-2 flex gap-1">
                ${renderDots(analysis.area.level)}
              </div>
            </div>
            <div class="rounded-lg ring-1 ${langC.ring} ${langC.bg} p-3">
              <div class="flex items-center gap-2 text-sm ${langC.text}">
                <i data-lucide="message-square" class="h-4 w-4"></i> Language
              </div>
              <div class="mt-1 flex items-center justify-between">
                <div class="text-sm text-white/80">${langSentence}</div>
                <div class="text-xs text-white/60">${guess.langs.join(', ')}</div>
              </div>
              <div class="mt-2 flex gap-1">
                ${renderDots(analysis.language.level)}
              </div>
            </div>
          </div>
        `;
        el.history.prepend(card);
        refreshIcons();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => { card.classList.remove('opacity-0', 'translate-y-2'); });
        });
      }

      function renderDots(level) {
        let out = '';
        for (let i = 1; i <= 5; i++) {
          const active = i <= level;
          const cls = active ? 'bg-emerald-400/80' : 'bg-white/15';
          out += `<span class="h-1.5 w-5 rounded-full ${cls}"></span>`;
        }
        return out;
      }

      function fmtNum(n) {
        if (n >= 1e9) return (n/1e9).toFixed(1) + 'B';
        if (n >= 1e6) return (n/1e6).toFixed(1) + 'M';
        if (n >= 1e3) return (n/1e3).toFixed(1) + 'K';
        return String(n);
      }

      function analyzeGuess(guess) {
        const t = state.target;
        const dkm = haversine(guess.lat, guess.lon, t.lat, t.lon);
        const distance = classifyDistance(dkm);
        const population = classifyScale(guess, t, 'pop');
        const area = classifyScale(guess, t, 'area');
        const language = classifyLanguage(guess, t);
        return { distance: { ...distance, km: dkm }, population, area, language };
      }

      function handleWin() {
        const timeSec = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));
        stats.games += 1;
        stats.wins += 1;
        stats.streak = (stats.streak || 0) + 1;
        stats.attemptsSum = (stats.attemptsSum || 0) + state.attempts;
        saveStats(stats);
        updateHomeStats();

        el.winName.textContent = state.target.name;
        el.winFlag.textContent = state.target.flag;
        el.winAttempts.textContent = state.attempts;
        el.winTime.textContent = timeSec + 's';
        el.winStreak.textContent = stats.streak;

        openModal('winModal');
      }

      function handleLose() {
        stats.games += 1;
        stats.streak = 0;
        saveStats(stats);
        updateHomeStats();

        el.loseName.textContent = state.target.name;
        el.loseFlag.textContent = state.target.flag;
        el.loseFact.textContent = `Population ~ ${fmtNum(state.target.pop)}, Area ~ ${fmtNum(state.target.area)} km², Languages: ${state.target.langs.join(', ')}.`;

        openModal('loseModal');
      }

      // Modal helpers
      function openModal(id) {
        const m = document.getElementById(id);
        if (!m) return;
        m.classList.remove('hidden');
        m.classList.add('flex');
        refreshIcons();
      }
      function closeModal(id) {
        const m = document.getElementById(id);
        if (!m) return;
        m.classList.add('hidden');
        m.classList.remove('flex');
      }
      function closeAllModals() {
        ['howtoModal','settingsModal','winModal','loseModal'].forEach(closeModal);
      }

      function refreshIcons() {
        if (window.lucide) {
          // Cleanup current icons then re-render
          document.querySelectorAll('i[data-lucide]').forEach(el => { el.innerHTML = ''; });
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      }

      // Autocomplete
      let acState = { open: false, items: [], active: -1 };
      function updateSuggestions() {
        const q = el.countryInput.value.trim().toLowerCase();
        if (!q) { hideAutocomplete(); return; }
        const matches = countries
          .filter(c => c.name.toLowerCase().includes(q))
          .sort((a,b) => a.name.localeCompare(b.name))
          .slice(0, 12);
        acState.items = matches;
        acState.active = matches.length ? 0 : -1;
        renderSuggestions();
      }
      function renderSuggestions() {
        if (!acState.items.length) { hideAutocomplete(); return; }
        el.suggestions.innerHTML = '';
        acState.items.forEach((c, idx) => {
          const li = document.createElement('li');
          const isActive = idx === acState.active;
          li.className = `flex cursor-pointer items-center justify-between px-3 py-2 text-sm ${isActive ? 'bg-sky-500/15 text-white' : 'text-white/80 hover:bg-white/5'}`;
          li.setAttribute('role', 'option');
          li.setAttribute('aria-selected', String(isActive));
          li.dataset.index = String(idx);
          li.innerHTML = `
            <span class="flex items-center gap-2">
              <span class="text-base">${c.flag}</span>
              <span>${c.name}</span>
            </span>
            <span class="text-xs text-white/50">${c.code}</span>
          `;
          li.addEventListener('click', () => selectSuggestion(idx));
          el.suggestions.appendChild(li);
        });
        el.autocomplete.classList.remove('hidden');
        acState.open = true;
      }
      function hideAutocomplete() {
        acState.open = false;
        acState.active = -1;
        el.autocomplete.classList.add('hidden');
      }
      function selectSuggestion(idx) {
        const item = acState.items[idx];
        if (!item) return;
        el.countryInput.value = item.name;
        hideAutocomplete();
        submitCurrentGuess();
      }
      function moveActive(delta) {
        if (!acState.open || !acState.items.length) return;
        acState.active = (acState.active + delta + acState.items.length) % acState.items.length;
        renderSuggestions();
      }

      // History rendering (for unit changes)
      function renderHistory() {
        const existing = [...state.history];
        el.history.innerHTML = '';
        existing.forEach(({ guess, analysis }) => addHistoryCard(guess, analysis));
      }

      // Guess flow
      function submitCurrentGuess() {
        const input = el.countryInput.value.trim();
        if (!input) {
          el.submitStatus.textContent = 'Please type a country name.';
          return;
        }
        let guess = findCountryByName(input);
        if (!guess) {
          // Allow forgiving match by startsWith first
          const lower = input.toLowerCase();
          guess = countries.find(c => c.name.toLowerCase().startsWith(lower)) ||
                  countries.find(c => c.name.toLowerCase().includes(lower));
        }
        if (!guess) {
          el.submitStatus.textContent = 'No matching country found.';
          return;
        }

        // Prevent duplicate immediate guesses
        if (state.history.some(h => h.guess.name === guess.name)) {
          el.submitStatus.textContent = 'You already tried that country.';
          return;
        }

        state.attempts += 1;
        updateAttempts();

        const analysis = analyzeGuess(guess);
        state.history.push({ guess, analysis });
        addHistoryCard(guess, analysis);

        if (guess.name === state.target.name) {
          handleWin();
          return;
        }

        const attemptsLeft = state.maxAttempts - state.attempts;
        if (attemptsLeft <= 0) {
          handleLose();
          return;
        }
        el.submitStatus.textContent = `${attemptsLeft} attempt${attemptsLeft !== 1 ? 's' : ''} remaining.`;
        el.countryInput.value = '';
        hideAutocomplete();
        el.countryInput.focus();
      }

      // Events
      function wireEvents() {
        // Start actions
        el.startGame.addEventListener('click', () => startNewGame(true));
        el.howtoStart.addEventListener('click', () => { closeModal('howtoModal'); startNewGame(true); });

        // Open modals
        el.homeHowTo.addEventListener('click', () => openModal('howtoModal'));
        el.openHowTo.addEventListener('click', () => openModal('howtoModal'));
        el.openSettings.addEventListener('click', () => openModal('settingsModal'));

        // Close modal buttons via data-close
        document.querySelectorAll('[data-close]').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-close');
            closeModal(id);
          });
        });

        // Back/Try again/Play again
        el.tryAgainLose.addEventListener('click', () => { closeModal('loseModal'); startNewGame(false); });
        el.playAgainWin.addEventListener('click', () => { closeModal('winModal'); startNewGame(false); });
        el.backToMenu.addEventListener('click', () => {
          closeAllModals();
          el.game.classList.add('hidden');
          el.topbar.classList.add('hidden');
          el.home.classList.remove('hidden');
        });

        // Share results
        el.shareWin.addEventListener('click', async () => {
          const timeSec = Math.max(1, Math.round((Date.now() - state.startedAt) / 1000));
          const title = 'GeoHunter — I found the country!';
          const attempts = state.attempts;
          const rows = state.history.map(({ analysis }) => {
            const lvls = [
              analysis.distance.level,
              analysis.population.level,
              analysis.area.level,
              analysis.language.level
            ];
            return lvls.map(l => l >= 4 ? '🟩' : l === 3 ? '🟨' : '🟥').join('');
          }).join('\n');
          const text = `${title}\n${state.target.flag} ${state.target.name}\nAttempts: ${attempts} • Time: ${timeSec}s\n${rows}\n#GeoHunter`;

          if (navigator.share && navigator.canShare && navigator.canShare({ text })) {
            try { await navigator.share({ text }); } catch {}
          } else {
            try {
              await navigator.clipboard.writeText(text);
              el.shareWin.innerHTML = '<i data-lucide="check" class="h-4 w-4"></i> Copied!';
              refreshIcons();
              setTimeout(() => {
                el.shareWin.innerHTML = '<i data-lucide="share-2" class="h-4 w-4"></i> Share Results';
                refreshIcons();
              }, 1500);
            } catch {}
          }
        });

        // Guess submission
        el.submitGuess.addEventListener('click', submitCurrentGuess);
        el.countryInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            if (acState.open && acState.active >= 0) {
              e.preventDefault();
              selectSuggestion(acState.active);
            } else {
              submitCurrentGuess();
            }
          } else if (e.key === 'ArrowDown') {
            e.preventDefault(); updateSuggestions(); moveActive(1);
          } else if (e.key === 'ArrowUp') {
            e.preventDefault(); updateSuggestions(); moveActive(-1);
          } else if (e.key === 'Escape') {
            hideAutocomplete();
          }
        });
        el.countryInput.addEventListener('input', updateSuggestions);
        document.addEventListener('click', (ev) => {
          if (!el.autocomplete.contains(ev.target) && ev.target !== el.countryInput) {
            hideAutocomplete();
          }
        });

        // Settings
        el.unitSelect.addEventListener('change', () => {
          state.unit = el.unitSelect.value;
          renderHistory();
        });

        el.toggleHints.addEventListener('click', () => {
          state.showHints = !state.showHints;
          const pressed = state.showHints;
          el.toggleHints.setAttribute('aria-pressed', String(pressed));
          el.toggleHints.classList.toggle('bg-zinc-700', pressed);
          el.toggleHints.classList.toggle('bg-zinc-800', !pressed);
          const knob = el.toggleHints.querySelector('span.inline-block');
          if (knob) {
            knob.classList.toggle('translate-x-6', pressed);
            knob.classList.toggle('translate-x-1', !pressed);
          }
        });

        // Global keys
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') closeAllModals();
        });
      }

      // Initialize
      (function init() {
        updateHomeStats();
        wireEvents();
        // Sync settings from storage if present in future versions
        el.unitSelect.value = state.unit;
        // Difficulty label (placeholder for future)
        if (el.difficultyLabel) el.difficultyLabel.textContent = 'Standard';
        refreshIcons();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_30%_20%,rgba(139,92,246,0.25),transparent),radial-gradient(35%_30%_at_70%_10%,rgba(20,184,166,0.25),transparent),radial-gradient(60%_50%_at_50%_80%,rgba(59,130,246,0.2),transparent)]"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526779259212-939e64788e03?auto=format&amp;fit=crop&amp;w=1600&amp;q=60')] opacity-[0.07] bg-cover bg-center mix-blend-soft-light"></div>
<div className="absolute inset-0 backdrop-blur-[1px]"></div>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
</div>

<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6" id="app">

<header className="hidden md:flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md" id="topbar">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-inset ring-white/10">
<span className="text-lg font-semibold tracking-tight">GH</span>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-sm font-medium tracking-tight text-white/90">GeoHunter</span>
<span className="text-xs text-white/50">Test Your World Knowledge</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-zinc-800/60 px-3 py-1.5 text-sm text-white/80" id="attemptBadge">
<i className="h-4 w-4" data-lucide="target"></i>
            Attempts: <span className="font-medium text-white/90" id="attemptsVal">0</span>/<span className="text-white/60" id="attemptsMax">10</span>
</div>
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-zinc-800/60 px-3 py-1.5 text-sm text-white/80" id="difficultyBadge">
<i className="h-4 w-4" data-lucide="gauge"></i>
<span className="text-white/60">Difficulty:</span>
<span className="font-medium text-white/90" id="difficultyLabel">Standard</span>
</div>
<button className="group inline-flex items-center gap-2 rounded-md border border-white/10 bg-zinc-800/60 px-3 py-1.5 text-sm text-white/80 hover:bg-zinc-700/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60" id="openHowTo">
<i className="h-4 w-4" data-lucide="help-circle"></i>
            How to Play
          </button>
<button className="group inline-flex items-center justify-center rounded-md border border-white/10 bg-zinc-800/60 p-2 text-white/80 hover:bg-zinc-700/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60" id="openSettings">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
</header>

<section className="relative mx-auto mt-10 flex max-w-4xl flex-col items-center text-center" id="home">
<div className="mb-8 flex items-center justify-center">
<div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 shadow-inner ring-1 ring-white/10">
<div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-violet-500/30 via-sky-500/30 to-teal-400/30 blur-xl"></div>
<div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 ring-1 ring-white/10">
<i className="h-7 w-7 text-white/90" data-lucide="globe-2"></i>
</div>
</div>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-3">GeoHunter</h1>
<p className="max-w-xl text-base sm:text-lg text-white/70">Test Your World Knowledge. Guess the hidden country using clues for distance, population, size, and language similarity.</p>

<div className="mt-8 grid grid-cols-3 gap-3 w-full" id="homeStats">
<div className="rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-left">
<div className="text-xs text-white/50">Games Played</div>
<div className="text-2xl font-semibold tracking-tight" id="statGames">0</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-left">
<div className="text-xs text-white/50">Win Streak</div>
<div className="text-2xl font-semibold tracking-tight" id="statStreak">0</div>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/50 p-4 text-left">
<div className="text-xs text-white/50">Avg Attempts</div>
<div className="text-2xl font-semibold tracking-tight" id="statAvg">—</div>
</div>
</div>

<div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
<button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-violet-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-teal-500/10 hover:from-teal-400 hover:to-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70 active:scale-[0.99] transition will-change-transform" id="startGame">
<i className="h-5 w-5" data-lucide="play"></i>
            START GAME
          </button>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/60 px-6 py-3 text-base font-medium text-white/90 hover:bg-zinc-800/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60" id="homeHowTo">
<i className="h-5 w-5" data-lucide="lightbulb"></i>
            How to Play
          </button>
</div>
</section>

<section className="hidden mt-6" id="game">

<div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
<div className="mb-2 flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white/90">Enter a country</h2>
<div className="text-sm text-white/60" id="submitStatus"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-3 py-2.5 focus-within:ring-2 focus-within:ring-sky-500/60">
<i className="h-5 w-5 text-white/60" data-lucide="search"></i>
<input autocomplete="off" className="w-full bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none" id="countryInput" placeholder="Type a country name..."/>
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-2 text-sm font-medium text-white shadow hover:from-sky-400 hover:to-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 active:scale-[0.99]" id="submitGuess">
                Guess
              </button>
</div>

<div className="absolute z-20 mt-2 hidden w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80 shadow-xl" id="autocomplete">
<ul className="max-h-64 overflow-auto py-1" id="suggestions">

</ul>
<div className="border-t border-white/10 px-3 py-2 text-xs text-white/50">Use arrow keys ↕ and Enter to select</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="mb-3 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white/90">Your Guesses</h3>
<div className="text-xs text-white/50">Color Coding: Red/Orange = Far • Yellow = Medium • Green = Close</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4" id="history">

</div>
</div>
</section>

<section className="mt-12 rounded-2xl border border-white/10 bg-zinc-900/40 p-6" id="designSystem">
<div className="mb-4 flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-white/90">Design System</h4>
<span className="text-xs text-white/50">Reference only</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div>
<h5 className="text-sm font-medium text-white/80 mb-2">Core Colors (Hex)</h5>
<div className="grid grid-cols-3 gap-2 text-xs">
<div className="rounded-lg border border-white/10 p-3 text-center">
<div className="h-8 w-full rounded bg-[#0ea5e9] mb-2"></div>
<div className="text-white/70">Sky 500</div>
<div className="text-white/50">#0EA5E9</div>
</div>
<div className="rounded-lg border border-white/10 p-3 text-center">
<div className="h-8 w-full rounded bg-[#14b8a6] mb-2"></div>
<div className="text-white/70">Teal 500</div>
<div className="text-white/50">#14B8A6</div>
</div>
<div className="rounded-lg border border-white/10 p-3 text-center">
<div className="h-8 w-full rounded bg-[#8b5cf6] mb-2"></div>
<div className="text-white/70">Violet 500</div>
<div className="text-white/50">#8B5CF6</div>
</div>
<div className="rounded-lg border border-white/10 p-3 text-center">
<div className="h-8 w-full rounded bg-[#22c55e] mb-2"></div>
<div className="text-white/70">Green 500</div>
<div className="text-white/50">#22C55E</div>
</div>
<div className="rounded-lg border border-white/10 p-3 text-center">
<div className="h-8 w-full rounded bg-[#facc15] mb-2"></div>
<div className="text-white/70">Yellow 400</div>
<div className="text-white/50">#FACC15</div>
</div>
<div className="rounded-lg border border-white/10 p-3 text-center">
<div className="h-8 w-full rounded bg-[#ef4444] mb-2"></div>
<div className="text-white/70">Red 500</div>
<div className="text-white/50">#EF4444</div>
</div>
</div>
</div>

<div>
<h5 className="text-sm font-medium text-white/80 mb-2">Typography</h5>
<div className="space-y-3 text-white/80">
<div>
<div className="text-xs uppercase text-white/50 mb-1">Display</div>
<div className="text-3xl font-semibold tracking-tight">Inter — Semibold</div>
</div>
<div>
<div className="text-xs uppercase text-white/50 mb-1">Heading</div>
<div className="text-xl font-semibold tracking-tight">Inter — Semibold</div>
</div>
<div>
<div className="text-xs uppercase text-white/50 mb-1">Body</div>
<div className="text-sm font-normal">Inter — Regular</div>
</div>
</div>
</div>

<div>
<h5 className="text-sm font-medium text-white/80 mb-2">Buttons &amp; States</h5>
<div className="flex flex-wrap items-center gap-2">
<button className="rounded-lg bg-gradient-to-r from-teal-500 to-violet-500 px-4 py-2 text-sm font-medium hover:from-teal-400 hover:to-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70">Primary</button>
<button className="rounded-lg border border-white/10 bg-zinc-800/60 px-4 py-2 text-sm hover:bg-zinc-700/60">Secondary</button>
<button className="rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-white/40" disabled="">Disabled</button>
</div>
<div className="mt-3 text-xs text-white/50">Hover: subtle brighten • Focus: visible ring • Active: slight scale</div>
</div>
</div>
</section>
</div>

<div className="hidden fixed inset-0 z-[60] items-center justify-center p-4" id="howtoModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative max-w-2xl w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 p-5 shadow-2xl">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">How to Play</h3>
<button className="rounded-md border border-white/10 bg-zinc-800/60 p-2 text-white/80 hover:bg-zinc-700/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60" data-close="howtoModal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<ol className="space-y-3">
<li className="flex gap-3 rounded-xl border border-white/10 bg-zinc-900 p-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-inset ring-white/10">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-sm font-medium">Random countries appear as hints</div>
<div className="text-sm text-white/60">Use them to set expectations for region and scale.</div>
</div>
</li>
<li className="flex gap-3 rounded-xl border border-white/10 bg-zinc-900 p-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-inset ring-white/10">
<i className="h-5 w-5" data-lucide="keyboard"></i>
</div>
<div>
<div className="text-sm font-medium">Enter your guess</div>
<div className="text-sm text-white/60">Type a country name and press Enter or tap Guess.</div>
</div>
</li>
<li className="flex gap-3 rounded-xl border border-white/10 bg-zinc-900 p-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-inset ring-white/10">
<i className="h-5 w-5" data-lucide="gauge"></i>
</div>
<div>
<div className="text-sm font-medium">Get feedback on 4 characteristics</div>
<div className="text-sm text-white/60">Distance, Population, Size, and Language similarity with color-coded hints.</div>
</div>
</li>
<li className="flex gap-3 rounded-xl border border-white/10 bg-zinc-900 p-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-800 ring-1 ring-inset ring-white/10">
<i className="h-5 w-5" data-lucide="compass"></i>
</div>
<div>
<div className="text-sm font-medium">Use clues to find the target country</div>
<div className="text-sm text-white/60">Green is good! Adjust your guesses based on the indicators.</div>
</div>
</li>
</ol>
<div className="mt-5 flex items-center justify-end gap-3">
<button className="rounded-lg border border-white/10 bg-zinc-800/60 px-4 py-2 text-sm hover:bg-zinc-700/60" data-close="howtoModal">Close</button>
<button className="rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-2 text-sm font-medium hover:from-sky-400 hover:to-teal-400" id="howtoStart">Start Playing</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[70] items-center justify-center p-4" id="winModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative max-w-lg w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 p-6 shadow-2xl">
<div className="mb-2 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Congratulations!</h3>
<button className="rounded-md border border-white/10 bg-zinc-800/60 p-2 text-white/80 hover:bg-zinc-700/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60" data-close="winModal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="mb-4 text-5xl">🎉</div>
<div className="mb-4 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4">
<div className="text-sm text-white/60">You found the country:</div>
<div className="mt-1 text-2xl font-semibold tracking-tight"><span className="mr-2" id="winFlag"></span><span id="winName"></span></div>
</div>
<div className="grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg border border-white/10 bg-zinc-800/60 p-3">
<div className="text-xs text-white/50">Attempts</div>
<div className="text-xl font-semibold tracking-tight" id="winAttempts">—</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-800/60 p-3">
<div className="text-xs text-white/50">Time</div>
<div className="text-xl font-semibold tracking-tight" id="winTime">—</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-800/60 p-3">
<div className="text-xs text-white/50">Streak</div>
<div className="text-xl font-semibold tracking-tight" id="winStreak">—</div>
</div>
</div>
<div className="mt-5 flex items-center justify-end gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-zinc-800/60 px-4 py-2 text-sm hover:bg-zinc-700/60" id="shareWin">
<i className="h-4 w-4" data-lucide="share-2"></i>
            Share Results
          </button>
<button className="rounded-lg bg-gradient-to-r from-emerald-500 to-lime-500 px-4 py-2 text-sm font-medium text-white hover:from-emerald-400 hover:to-lime-400" id="playAgainWin">Play Again</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[70] items-center justify-center p-4" id="loseModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative max-w-lg w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 p-6 shadow-2xl">
<div className="mb-2 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Game Over</h3>
<button className="rounded-md border border-white/10 bg-zinc-800/60 p-2 text-white/80 hover:bg-zinc-700/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/60" data-close="loseModal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="mb-3 text-white/80">The country was:</div>
<div className="mb-4 rounded-xl border border-white/10 bg-zinc-900 p-4">
<div className="text-2xl font-semibold tracking-tight"><span className="mr-2" id="loseFlag"></span><span id="loseName">—</span></div>
<div className="mt-1 text-sm text-white/60" id="loseFact">Primary language and scale shown in your feedback.</div>
</div>
<div className="mt-5 flex items-center justify-end gap-3">
<button className="rounded-lg border border-white/10 bg-zinc-800/60 px-4 py-2 text-sm hover:bg-zinc-700/60" id="backToMenu">Back to Menu</button>
<button className="rounded-lg bg-gradient-to-r from-sky-500 to-teal-500 px-4 py-2 text-sm font-medium hover:from-sky-400 hover:to-teal-400" id="tryAgainLose">Try Again</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[65] items-center justify-center p-4" id="settingsModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative max-w-md w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/95 p-5 shadow-2xl">
<div className="mb-3 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Settings</h3>
<button className="rounded-md border border-white/10 bg-zinc-800/60 p-2 text-white/80 hover:bg-zinc-700/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60" data-close="settingsModal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="space-y-3">
<label className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900 p-3">
<span className="text-sm text-white/80">Distance Units</span>
<select className="rounded-md border border-white/10 bg-zinc-800/60 px-2 py-1 text-sm text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60" id="unitSelect">
<option value="km">Kilometers (km)</option>
<option value="mi">Miles (mi)</option>
</select>
</label>
<label className="flex items-center justify-between rounded-lg border border-white/10 bg-zinc-900 p-3">
<span className="text-sm text-white/80">Show Context Hints</span>
<button aria-pressed="true" className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-700 transition-colors ring-1 ring-inset ring-white/10" id="toggleHints">
<span className="sr-only">Toggle hints</span>
<span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition"></span>
</button>
</label>
</div>
</div>
</div>



    </>
  );
}
