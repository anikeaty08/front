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
      
    // Global variables
    let csvData = null;
    let processedData = [];
    let chart = null;
    let under2Chart = null;
    let under25Chart = null;
    let t9TeamsActive = false;

    // T9 Teams data
    const t9Teams = {
      EPL: ['Tottenham', 'Brighton', 'Man City', 'Liverpool', 'Fulham', 'Aston Villa', 'Newcastle', 'Arsenal', 'Bournemouth', 'Brentford'],
      German1: ['Bayern Munich', 'Stuttgart', 'Dortmund', 'Mgladbach', 'Leverkusen', 'Hoffenheim', 'Werder Bremen', 'RB Leipzig', 'Ein Frankfurt', 'Freiburg', 'Wolfsburg'],
      Scottish: ['Celtic', 'Rangers', 'Hibernian', 'Motherwell']
    };

    const gbp0 = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 });
    const gbp2 = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Load and parse CSV data
    async function loadData() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/ODUnike/simplifi-dataset/main/ok.csv', { cache: 'no-cache' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const csvText = await response.text();

        csvData = Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true
        }).data;

        populateFilters();
        updateT9Button();
        hideLoading();
        updateCalculation();
      } catch (error) {
        console.error('Error loading CSV:', error);
        showError();
      }
    }

    // Populate filter dropdowns
    function populateFilters() {
      const seasons = [...new Set(csvData.map(row => row.Season))].filter(Boolean).sort();
      const leagues = [...new Set(csvData.map(row => row.League))].filter(Boolean).sort();

      const seasonSelect = document.getElementById('selectedSeason');
      const leagueSelect = document.getElementById('selectedLeague');

      // Reset Season options
      seasonSelect.innerHTML = '<option value="Max">Max (All Seasons)</option>';

      seasons.forEach(season => {
        const option = document.createElement('option');
        option.value = season;
        option.textContent = season;
        seasonSelect.appendChild(option);
      });

      // Reset League options
      leagueSelect.innerHTML = '';
      leagues.forEach(league => {
        const option = document.createElement('option');
        option.value = league;
        option.textContent = league;
        leagueSelect.appendChild(option);
      });

      // Default to EPL if available
      if (leagues.includes('EPL')) {
        leagueSelect.value = 'EPL';
      }
    }

    // Process data based on current settings
    function processData() {
      if (!csvData) return [];

      const startingCapital = parseFloat(document.getElementById('startingCapital').value) || 0;
      const stakePercentage = parseFloat(document.getElementById('stakePercentage').value) || 0;
      const selectedSeason = document.getElementById('selectedSeason').value;
      const selectedLeague = document.getElementById('selectedLeague').value;

      let filteredData;

      if (selectedSeason === 'Max') {
        filteredData = csvData.filter(row => row.League === selectedLeague);
      } else {
        filteredData = csvData.filter(row => row.League === selectedLeague && row.Season === selectedSeason);
      }

      // Sort by date (assuming dd/mm/yyyy)
      filteredData = filteredData
        .map(row => ({
          ...row,
          dateObj: parseDateSafe(row.Date)
        }))
        .filter(row => row.dateObj instanceof Date && !isNaN(row.dateObj))
        .sort((a, b) => a.dateObj - b.dateObj);

      // Apply T9 teams filter (limit to matches where a listed team participates)
      if (t9TeamsActive && t9Teams[selectedLeague]) {
        const leagueT9Teams = t9Teams[selectedLeague];
        filteredData = filteredData.filter(game =>
          leagueT9Teams.includes(game.HomeTeam) || leagueT9Teams.includes(game.AwayTeam)
        );
      }

      // Calculate capital movement (fixed stake based on starting capital)
      const stakeAmount = (startingCapital * stakePercentage) / 100;
      let runningCapital = startingCapital;

      return filteredData.map((game, index) => {
        const totalGoals = getTotalGoals(game);

        // UPDATED: Over 2.5 Goals logic
        // HIGHLIGHT: win if totalGoals > 2, LOSS if totalGoals <= 2 (2 is NO LONGER a push)
        let outcome = 'loss';
        if (!isNaN(totalGoals)) {
          if (totalGoals > 2) outcome = 'win';
          else outcome = 'loss'; // UPDATED CONDITION: totalGoals === 2 now treated as LOSS
        }

        const isWin = outcome === 'win';
        let profit = 0;
        if (outcome === 'win') {
          profit = stakeAmount * ((parseFloat(game.odd) || 0) - 1);
        } else if (outcome === 'loss') {
          profit = -stakeAmount;
        }

        runningCapital = runningCapital + profit;

        return {
          ...game,
          stake: stakeAmount,
          isWin,
          outcome,
          profit,
          capitalMovement: runningCapital,
          gameNumber: index + 1
        };
      });
    }

    function parseDateSafe(str) {
      if (!str || typeof str !== 'string') return null;
      if (str.includes('/')) {
        const [d, m, y] = str.split('/');
        return new Date(`${y}-${m}-${d}`);
      }
      return new Date(str);
    }

    // Calculate statistics
    function calculateStats() {
      const startingCapital = parseFloat(document.getElementById('startingCapital').value) || 0;

      if (!processedData.length) {
        return {
          totalGames: 0,
          finalCapital: startingCapital,
          totalReturn: 0,
          winRate: 0,
          maxCapital: startingCapital,
          minCapital: startingCapital,
          roi: 0
        };
      }

      const totalGames = processedData.length;
      const finalCapital = processedData[processedData.length - 1].capitalMovement;
      const totalReturn = finalCapital - startingCapital;
      const wins = processedData.filter(g => g.isWin).length;
      const winRate = (wins / totalGames) * 100;
      const maxCapital = Math.max(...processedData.map(g => g.capitalMovement));
      const minCapital = Math.min(...processedData.map(g => g.capitalMovement));
      const roi = ((totalReturn / startingCapital) * 100);

      return {
        totalGames,
        finalCapital,
        totalReturn,
        winRate,
        maxCapital,
        minCapital,
        roi
      };
    }

    // Update all calculations and displays
    function updateCalculation() {
      processedData = processData();
      const stats = calculateStats();

      updateDisplays();
      updateStats(stats);
      updateChart(stats);
      updateUnder2Chart();
      updateUnder25Chart();

      // Refresh icons when UI changes
      if (window.lucide) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    }

    // Update display values
    function updateDisplays() {
      const startingCapital = parseFloat(document.getElementById('startingCapital').value) || 0;
      const stakePercentage = parseFloat(document.getElementById('stakePercentage').value) || 0;
      const selectedSeason = document.getElementById('selectedSeason').value;
      const selectedLeague = document.getElementById('selectedLeague').value;
      const stakeAmount = (startingCapital * stakePercentage) / 100;

      // Update current settings
      document.getElementById('displayCapital').textContent = gbp0.format(startingCapital);
      document.getElementById('displayStake').textContent = gbp2.format(stakeAmount);
      document.getElementById('displayLeague').textContent = selectedLeague;
      document.getElementById('displaySeason').textContent = selectedSeason;
      document.getElementById('displayTeams').textContent = t9TeamsActive ? 'T9 Teams Only' : 'All Teams';

      // Update summary section
      document.getElementById('summaryLeague').textContent = selectedLeague;
      document.getElementById('summarySeason').textContent = selectedSeason;
      document.getElementById('summaryDescription').textContent =
        `Starting with ${gbp0.format(startingCapital)}, using ${stakePercentage}% stake (${gbp2.format(stakeAmount)} per bet)`;

      // Update detail section
      document.getElementById('detailLeague').textContent = selectedLeague;
      document.getElementById('detailSeason').textContent = selectedSeason === 'Max' ? 'All Seasons (Chronological)' : selectedSeason;
      document.getElementById('detailTeams').textContent = t9TeamsActive ? `T9 Teams Only (${t9Teams[selectedLeague]?.length || 0} teams)` : 'All Teams';
      document.getElementById('detailCapital').textContent = gbp0.format(startingCapital);
      document.getElementById('detailStake').textContent = `${stakePercentage}% (${gbp2.format(stakeAmount)})`;

      // Show/hide T9 teams list
      const t9List = document.getElementById('t9TeamsList');
      const summaryT9 = document.getElementById('summaryT9');

      if (t9TeamsActive && t9Teams[selectedLeague]) {
        t9List.style.display = 'block';
        summaryT9.style.display = 'inline';
        document.getElementById('t9TeamsDisplay').textContent = t9Teams[selectedLeague].join(', ');
      } else {
        t9List.style.display = 'none';
        summaryT9.style.display = 'none';
      }
    }

    // Update statistics cards
    function updateStats(stats) {
      const startingCapital = parseFloat(document.getElementById('startingCapital').value) || 0;

      document.getElementById('statGames').textContent = stats.totalGames;
      document.getElementById('statFinalCapital').textContent = gbp0.format(Math.round(stats.finalCapital));
      const netReturnEl = document.getElementById('statNetReturn');
      const netPrefix = stats.totalReturn >= 0 ? '+' : '';
      netReturnEl.textContent = `${netPrefix}${gbp0.format(Math.abs(Math.round(stats.totalReturn))).replace('£', '£')}`;
      document.getElementById('statROI').textContent = `${stats.roi.toFixed(1)}%`;
      document.getElementById('statWinRate').textContent = `${stats.winRate.toFixed(1)}%`;
      document.getElementById('statPeak').textContent = gbp0.format(Math.round(stats.maxCapital));
      document.getElementById('statLowest').textContent = gbp0.format(Math.round(stats.minCapital));

      // Update summary section
      document.getElementById('detailGames').textContent = stats.totalGames;
      document.getElementById('summaryWinRate').textContent = `${stats.winRate.toFixed(1)}%`;
      document.getElementById('summaryROI').textContent = `${stats.roi.toFixed(1)}%`;
      document.getElementById('summaryDrawdown').textContent = gbp0.format(Math.max(0, Math.round(startingCapital - stats.minCapital)));
      document.getElementById('summaryPeakGain').textContent = gbp0.format(Math.max(0, Math.round(stats.maxCapital - startingCapital)));
      document.getElementById('summaryFinalCapital').textContent = gbp0.format(Math.round(stats.finalCapital));
      document.getElementById('summaryNetReturn').textContent = `${stats.totalReturn >= 0 ? '+' : ''}${gbp0.format(Math.abs(Math.round(stats.totalReturn)))}`;

      // Update card colors
      const finalCapitalCard = document.getElementById('finalCapitalCard');
      const finalCapitalLabel = document.getElementById('finalCapitalLabel');
      const netReturnCard = document.getElementById('netReturnCard');
      const netReturnLabel = document.getElementById('netReturnLabel');
      const finalCapitalValue = document.getElementById('statFinalCapital');
      const roiStat = document.getElementById('statROI');

      if (stats.finalCapital >= startingCapital) {
        finalCapitalCard.className = 'bg-gray-900/70 border border-green-500/30 p-4 rounded-lg hover:border-green-400/40 transition-colors';
        finalCapitalLabel.className = 'font-semibold text-sm text-green-400 inline-flex items-center gap-2';
        finalCapitalValue.className = 'text-xl font-semibold text-green-300 mt-1';
      } else {
        finalCapitalCard.className = 'bg-gray-900/70 border border-red-500/30 p-4 rounded-lg hover:border-red-400/40 transition-colors';
        finalCapitalLabel.className = 'font-semibold text-sm text-red-400 inline-flex items-center gap-2';
        finalCapitalValue.className = 'text-xl font-semibold text-red-300 mt-1';
      }

      if (stats.totalReturn >= 0) {
        netReturnCard.className = 'bg-gray-900/70 border border-green-500/30 p-4 rounded-lg hover:border-green-400/40 transition-colors';
        netReturnLabel.className = 'font-semibold text-sm text-green-400 inline-flex items-center gap-2';
        netReturnEl.className = 'text-xl font-semibold text-green-300 mt-1';
      } else {
        netReturnCard.className = 'bg-gray-900/70 border border-red-500/30 p-4 rounded-lg hover:border-red-400/40 transition-colors';
        netReturnLabel.className = 'font-semibold text-sm text-red-400 inline-flex items-center gap-2';
        netReturnEl.className = 'text-xl font-semibold text-red-300 mt-1';
      }

      roiStat.className = `text-xl font-semibold ${stats.roi >= 0 ? 'text-green-300' : 'text-red-300'} mt-1`;
    }

    // Update line chart
    function updateChart(stats) {
      const ctx = document.getElementById('capitalChart').getContext('2d');
      const startingCapital = parseFloat(document.getElementById('startingCapital').value) || 0;

      const chartData = processedData.map(d => ({
        x: d.gameNumber,
        y: d.capitalMovement
      }));

      const lineColor = stats.finalCapital >= startingCapital ? '#22c55e' : '#ef4444';
      const fillColor = 'rgba(34, 197, 94, 0.08)';

      if (chart) {
        chart.destroy();
      }

      chart = new Chart(ctx, {
        type: 'line',
        data: {
          datasets: [
            {
              label: 'Capital Movement',
              data: chartData,
              borderColor: lineColor,
              backgroundColor: fillColor,
              borderWidth: 2.5,
              pointRadius: 0,
              pointHoverRadius: 4,
              tension: 0.25,
              fill: true
            },
            {
              label: `Starting Capital (${gbp0.format(startingCapital)})`,
              data: [
                { x: 0, y: startingCapital },
                { x: Math.max(chartData.length, 1), y: startingCapital }
              ],
              borderColor: '#6b7280',
              borderDash: [5, 5],
              borderWidth: 1.75,
              pointRadius: 0,
              tension: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#e5e7eb', font: { family: 'Inter', size: 12 } }
            },
            tooltip: {
              backgroundColor: '#0b0f12',
              borderColor: '#243341',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#cbd5e1',
              callbacks: {
                label: function(context) {
                  return ` ${gbp0.format(Math.round(context.parsed.y))}`;
                }
              }
            }
          },
          scales: {
            x: {
              type: 'linear',
              title: { display: true, text: 'Game Number', color: '#9CA3AF' },
              ticks: { color: '#9CA3AF' },
              grid: { color: '#1f2937' }
            },
            y: {
              title: { display: true, text: 'Capital (£)', color: '#9CA3AF' },
              ticks: {
                color: '#9CA3AF',
                callback: (value) => '£' + Number(value).toLocaleString()
              },
              grid: { color: '#1f2937' }
            }
          }
        }
      });
    }

    // Helpers to safely get full-time total goals from various CSV schemas
    function getTotalGoals(row) {
      const toNum = (v) => {
        if (typeof v === 'number') return v;
        if (typeof v === 'string' && v.trim() !== '') {
          const n = Number(v);
          return isNaN(n) ? NaN : n;
        }
        return NaN;
      };

      const homeKeys = ['FTHG', 'HomeGoals', 'HG', 'home_goals', 'FHG', 'HomeG'];
      const awayKeys = ['FTAG', 'AwayGoals', 'AG', 'away_goals', 'FAG', 'AwayG'];

      let h = NaN, a = NaN;
      for (const k of homeKeys) {
        if (k in row) { h = toNum(row[k]); break; }
      }
      for (const k of awayKeys) {
        if (k in row) { a = toNum(row[k]); break; }
      }
      if (!isNaN(h) && !isNaN(a)) return h + a;

      const scoreKeys = ['FTScore', 'Score', 'FullTimeScore', 'Result'];
      for (const k of scoreKeys) {
        const v = row[k];
        if (typeof v === 'string') {
          const m = v.match(/(\d+)\s*[-:]\s*(\d+)/);
          if (m) return Number(m[1]) + Number(m[2]);
        }
      }

      if (typeof row['Goals'] === 'number') return row['Goals'];
      if (typeof row['totalgoals'] === 'number') return row['totalgoals'];

      return NaN;
    }

    // Compute ranking for FT Over 2 Goals (uses totalGoals > 2, aligned with Over 2.5 counts)
    function computeUnder2Ranking(data) {
      const selectedLeague = document.getElementById('selectedLeague').value;
      const limitToT9 = t9TeamsActive && t9Teams[selectedLeague];
      const allowed = limitToT9 ? new Set(t9Teams[selectedLeague]) : null;

      const counts = new Map();
      for (const row of (data || [])) {
        if (!row) continue;
        if (row.League !== selectedLeague) continue; // safety
        const total = getTotalGoals(row);
        if (isNaN(total)) continue;
        if (total > 2) {
          const teams = [row.HomeTeam, row.AwayTeam].filter(Boolean);
          for (const team of teams) {
            if (allowed && !allowed.has(team)) continue;
            counts.set(team, (counts.get(team) || 0) + 1);
          }
        }
      }

      const entries = Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      return {
        labels: entries.map(e => e[0]),
        values: entries.map(e => e[1])
      };
    }

    // Compute ranking for FT Under 2.5 Goals
    function computeUnder25Ranking(data) {
      const selectedLeague = document.getElementById('selectedLeague').value;
      const limitToT9 = t9TeamsActive && t9Teams[selectedLeague];
      const allowed = limitToT9 ? new Set(t9Teams[selectedLeague]) : null;

      const counts = new Map();
      for (const row of (data || [])) {
        if (!row) continue;
        if (row.League !== selectedLeague) continue; // safety
        const total = getTotalGoals(row);
        if (isNaN(total)) continue;

        // HIGHLIGHT: Under 2.5 Goals win condition includes totalGoals === 2
        if (total <= 2) { // totalGoals = 0,1,2 are wins for Under 2.5
          const teams = [row.HomeTeam, row.AwayTeam].filter(Boolean);
          for (const team of teams) {
            if (allowed && !allowed.has(team)) continue;
            counts.set(team, (counts.get(team) || 0) + 1);
          }
        }
      }

      const entries = Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      return {
        labels: entries.map(e => e[0]),
        values: entries.map(e => e[1])
      };
    }

    // Update Over 2 Goals bar chart
    function updateUnder2Chart() {
      const selectedLeague = document.getElementById('selectedLeague').value;
      const selectedSeason = document.getElementById('selectedSeason').value;

      // Update header text
      document.getElementById('under2League').textContent = selectedLeague;
      document.getElementById('under2Season').textContent = selectedSeason;
      const t9Badge = document.getElementById('under2T9');
      if (t9TeamsActive && t9Teams[selectedLeague]) {
        t9Badge.style.display = 'inline';
      } else {
        t9Badge.style.display = 'none';
      }

      const result = computeUnder2Ranking(processedData);
      const labels = result.labels;
      const values = result.values;

      const emptyEl = document.getElementById('under2Empty');
      const wrapper = document.getElementById('under2ChartWrapper');

      if (!labels.length) {
        emptyEl.style.display = 'block';
        wrapper.style.display = 'none';
        if (under2Chart) { under2Chart.destroy(); under2Chart = null; }
        return;
      } else {
        emptyEl.style.display = 'none';
        wrapper.style.display = 'block';
      }

      // Dynamic height
      const perBar = 28;
      const minH = 280;
      const targetH = Math.max(minH, Math.min(800, labels.length * perBar + 40));
      wrapper.style.height = targetH + 'px';

      const ctx = document.getElementById('under2Chart').getContext('2d');
      if (under2Chart) under2Chart.destroy();

      under2Chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'FT Over 2 .5 Goals (count)',
              data: values,
              backgroundColor: 'rgba(16, 185, 129, 0.6)',
              borderColor: '#10b981',
              borderWidth: 1.5,
              borderRadius: 4,
              maxBarThickness: 20
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#e5e7eb', font: { family: 'Inter', size: 12 } }
            },
            tooltip: {
              backgroundColor: '#0b0f12',
              borderColor: '#243341',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#cbd5e1',
              callbacks: {
                label: (ctx) => ` ${ctx.parsed.x} matches`
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                color: '#9CA3AF',
                precision: 0,
                stepSize: 1
              },
              grid: { color: '#1f2937' }
            },
            y: {
              ticks: { color: '#9CA3AF' },
              grid: { color: '#111827' }
            }
          }
        }
      });
    }

    // Update Under 2.5 Goals bar chart
    function updateUnder25Chart() {
      const selectedLeague = document.getElementById('selectedLeague').value;
      const selectedSeason = document.getElementById('selectedSeason').value;

      // Update header text
      document.getElementById('under25League').textContent = selectedLeague;
      document.getElementById('under25Season').textContent = selectedSeason;
      const t9Badge = document.getElementById('under25T9');
      if (t9TeamsActive && t9Teams[selectedLeague]) {
        t9Badge.style.display = 'inline';
      } else {
        t9Badge.style.display = 'none';
      }

      const result = computeUnder25Ranking(processedData);
      const labels = result.labels;
      const values = result.values;

      const emptyEl = document.getElementById('under25Empty');
      const wrapper = document.getElementById('under25ChartWrapper');

      if (!labels.length) {
        emptyEl.style.display = 'block';
        wrapper.style.display = 'none';
        if (under25Chart) { under25Chart.destroy(); under25Chart = null; }
        return;
      } else {
        emptyEl.style.display = 'none';
        wrapper.style.display = 'block';
      }

      // Dynamic height
      const perBar = 28;
      const minH = 280;
      const targetH = Math.max(minH, Math.min(800, labels.length * perBar + 40));
      wrapper.style.height = targetH + 'px';

      const ctx = document.getElementById('under25Chart').getContext('2d');
      if (under25Chart) under25Chart.destroy();

      under25Chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'FT Under 2.5 Goals (count)',
              data: values,
              backgroundColor: 'rgba(59, 130, 246, 0.6)',
              borderColor: '#3b82f6',
              borderWidth: 1.5,
              borderRadius: 4,
              maxBarThickness: 20
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#e5e7eb', font: { family: 'Inter', size: 12 } }
            },
            tooltip: {
              backgroundColor: '#0b0f12',
              borderColor: '#243341',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#cbd5e1',
              callbacks: {
                label: (ctx) => ` ${ctx.parsed.x} matches`
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              ticks: {
                color: '#9CA3AF',
                precision: 0,
                stepSize: 1
              },
              grid: { color: '#1f2937' }
            },
            y: {
              ticks: { color: '#9CA3AF' },
              grid: { color: '#111827' }
            }
          }
        }
      });
    }

    // Toggle T9 teams
    function toggleT9Teams() {
      const selectedLeague = document.getElementById('selectedLeague').value;
      const button = document.getElementById('t9TeamsButton');

      if (!t9Teams[selectedLeague]) {
        return; // No T9 teams for this league
      }

      t9TeamsActive = !t9TeamsActive;

      if (t9TeamsActive) {
        button.className = 'w-full px-4 py-2 rounded-md font-medium text-sm transition-all bg-[#1f5410] text-white hover:bg-emerald-700/90 hover:shadow-sm ring-1 ring-emerald-500/40';
        button.innerHTML = `<span class="inline-flex items-center gap-2"><i data-lucide="users"></i>T9 Teams Active (${t9Teams[selectedLeague].length} teams)</span>`;
      } else {
        button.className = 'w-full px-4 py-2 rounded-md font-medium text-sm transition-all bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:shadow-sm ring-1 ring-gray-700/60';
        button.innerHTML = `<span class="inline-flex items-center gap-2"><i data-lucide="user-check"></i>All Teams</span>`;
      }

      updateCalculation();
    }

    // Update T9 button based on league
    function updateT9Button() {
      const selectedLeague = document.getElementById('selectedLeague').value;
      const button = document.getElementById('t9TeamsButton');

      if (t9Teams[selectedLeague]) {
        button.disabled = false;
        if (t9TeamsActive) {
          button.className = 'w-full px-4 py-2 rounded-md font-medium text-sm transition-all bg-[#1f5410] text-white hover:bg-emerald-700/90 hover:shadow-sm ring-1 ring-emerald-500/40';
          button.innerHTML = `<span class="inline-flex items-center gap-2"><i data-lucide="users"></i>T9 Teams Active (${t9Teams[selectedLeague].length} teams)</span>`;
        } else {
          button.className = 'w-full px-4 py-2 rounded-md font-medium text-sm transition-all bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:shadow-sm ring-1 ring-gray-700/60';
          button.innerHTML = `<span class="inline-flex items-center gap-2"><i data-lucide="user-check"></i>All Teams (${t9Teams[selectedLeague].length} T9 teams)</span>`;
        }
      } else {
        button.disabled = true;
        button.className = 'w-full px-4 py-2 rounded-md font-medium text-sm bg-gray-900 text-gray-500 cursor-not-allowed ring-1 ring-gray-800';
        button.innerHTML = `<span class="inline-flex items-center gap-2"><i data-lucide="ban"></i>No T9 teams available</span>`;
        t9TeamsActive = false;
      }
    }

    // UI helper functions
    function hideLoading() {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('app').style.display = 'block';
    }

    function showError() {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('error').style.display = 'flex';
    }

    // Event listeners
    document.getElementById('startingCapital').addEventListener('input', () => {
      const el = document.getElementById('startingCapital');
      const val = parseFloat(el.value);
      if (isNaN(val) || val < 0) el.value = 0;
      updateCalculation();
    });
    document.getElementById('stakePercentage').addEventListener('change', updateCalculation);
    document.getElementById('selectedSeason').addEventListener('change', updateCalculation);
    document.getElementById('selectedLeague').addEventListener('change', function () {
      updateT9Button();
      updateCalculation();
    });

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) {
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      loadData();
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
      

<div className="flex items-center justify-center min-h-screen" id="loading">
<div className="text-center animate-pulse">
<div className="inline-flex items-center gap-2 text-xl tracking-tight text-emerald-400 mb-3">
<i data-lucide="football"></i>
<span>Loading football data...</span>
</div>
<div className="text-sm text-gray-400">Fetching MAINRAW.csv...</div>
</div>
</div>

<div className="flex items-center justify-center min-h-screen" id="error" style={{display: 'none'}}>
<div className="text-center">
<div className="inline-flex items-center gap-2 text-xl tracking-tight text-red-400 mb-4">
<i data-lucide="triangle-alert"></i>
<span>Error loading data</span>
</div>
<div className="text-sm text-gray-400 mb-2">Please check:</div>
<ul className="text-xs text-gray-500 text-left inline-block space-y-1">
<li>• MAINRAW.csv is in public/ folder</li>
<li>• File is accessible at /MAINRAW.csv</li>
<li>• Check browser console for errors</li>
</ul>
</div>
</div>

<div className="p-6 bg-black min-h-screen" id="app" style={{display: 'none'}}>
<div className="max-w-7xl mx-auto space-y-6">

<div className="bg-gradient-to-r from-gray-900 to-[#1f5410] rounded-xl shadow-lg p-6 border border-gray-800/80 outline outline-1 outline-gray-900/50">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-3xl tracking-tight font-semibold text-white mb-1 inline-flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/20">
<i data-lucide="line-chart"></i>
</span>
              Simplifi Football Investment Calculator
            </h1>
<p className="text-gray-300">
              Simulate Over 2 Goals betting strategy with dynamic stake management
            </p>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="text-xs text-gray-400 px-3 py-1 rounded-md bg-gray-800/60 ring-1 ring-gray-700/60">
<span className="text-gray-300">Data</span> • <span className="text-emerald-400">Live</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
<div className="transition-all duration-300">
<label className="block text-sm font-medium text-gray-300 mb-2">Starting Capital (£)</label>
<input className="w-full border border-gray-600/70 rounded-md px-3 py-2 text-sm bg-gray-900 text-white focus:ring-2 focus:ring-[#1f5410] focus:outline-none hover:border-gray-500/70 transition-colors" id="startingCapital" min="100" step="100" type="number" value="1000"/>
</div>
<div className="transition-all duration-300">
<label className="block text-sm font-medium text-gray-300 mb-2">Stake Percentage</label>
<select className="w-full border border-gray-600/70 rounded-md px-3 py-2 text-sm bg-gray-900 text-white focus:ring-2 focus:ring-[#1f5410] focus:outline-none hover:border-gray-500/70 transition-colors" id="stakePercentage">
<option value="2">2%</option>
<option selected="" value="5">5%</option>
<option value="7">7%</option>
</select>
</div>
<div className="transition-all duration-300">
<label className="block text-sm font-medium text-gray-300 mb-2">Season</label>
<select className="w-full border border-gray-600/70 rounded-md px-3 py-2 text-sm bg-gray-900 text-white focus:ring-2 focus:ring-[#1f5410] focus:outline-none hover:border-gray-500/70 transition-colors" id="selectedSeason">
<option value="Max">Max (All Seasons)</option>
</select>
</div>
<div className="transition-all duration-300">
<label className="block text-sm font-medium text-gray-300 mb-2">League</label>
<select className="w-full border border-gray-600/70 rounded-md px-3 py-2 text-sm bg-gray-900 text-white focus:ring-2 focus:ring-[#1f5410] focus:outline-none hover:border-gray-500/70 transition-colors" id="selectedLeague">
<option value="EPL">EPL</option>
</select>
</div>
<div className="col-span-1 md:col-span-4">
<label className="block text-sm font-medium text-gray-300 mb-2">T9 Teams Filter</label>
<button className="w-full px-4 py-2 rounded-md font-medium text-sm transition-all bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:shadow-sm ring-1 ring-gray-700/60" id="t9TeamsButton" onclick="toggleT9Teams()
                    ">
<span className="inline-flex items-center gap-2">
<i data-lucide="user-check"></i>
                All Teams
              </span>
</button>
</div>
</div>

<div className="mt-6">
<div className="h-96 mb-6 rounded-lg bg-gray-900/70 ring-1 ring-gray-800/80 p-3">
<div className="h-full w-full">
<canvas id="capitalChart"></canvas>
</div>
</div>
</div>

<div className="bg-gray-900/70 border border-[#1f5410]/20 p-4 rounded-lg mb-6">
<div className="inline-flex items-center gap-2 mb-2">
<i data-lucide="sliders-horizontal"></i>
<h3 className="font-semibold text-[#4ade80]">Current Settings</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
<div>
<span className="text-gray-400 font-medium">Starting Capital</span>
<p className="text-white font-semibold" id="displayCapital">£1,000</p>
</div>
<div>
<span className="text-gray-400 font-medium">Stake per Bet</span>
<p className="text-white font-semibold" id="displayStake">£50.00</p>
</div>
<div>
<span className="text-gray-400 font-medium">League</span>
<p className="text-white font-semibold" id="displayLeague">EPL</p>
</div>
<div>
<span className="text-gray-400 font-medium">Season</span>
<p className="text-white font-semibold" id="displaySeason">Max</p>
</div>
<div>
<span className="text-gray-400 font-medium">Teams</span>
<p className="text-white font-semibold" id="displayTeams">All Teams</p>
</div>
</div>
<div className="mt-3 pt-3 border-t border-gray-800" id="t9TeamsList" style={{display: 'none'}}>
<span className="text-gray-400 font-medium text-sm">T9 Teams:</span>
<p className="text-emerald-400 text-sm mt-1" id="t9TeamsDisplay"></p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-7 gap-4">
<div className="bg-gray-900/70 border border-blue-500/30 p-4 rounded-lg hover:border-blue-400/40 transition-colors">
<h3 className="font-semibold text-blue-400 text-sm inline-flex items-center gap-2">
<i data-lucide="circle-dot"></i>Games
            </h3>
<p className="text-xl font-semibold text-white mt-1" id="statGames">0</p>
</div>
<div className="bg-gray-900/70 border border-gray-500/30 p-4 rounded-lg hover:border-gray-400/40 transition-colors" id="finalCapitalCard">
<h3 className="font-semibold text-sm text-gray-400 inline-flex items-center gap-2" id="finalCapitalLabel">
<i data-lucide="banknote"></i>Final Capital
            </h3>
<p className="text-xl font-semibold text-white mt-1" id="statFinalCapital">£1,000</p>
</div>
<div className="bg-gray-900/70 border border-gray-500/30 p-4 rounded-lg hover:border-gray-400/40 transition-colors" id="netReturnCard">
<h3 className="font-semibold text-sm text-gray-400 inline-flex items-center gap-2" id="netReturnLabel">
<i data-lucide="dollar-sign"></i>Net Return
            </h3>
<p className="text-xl font-semibold text-white mt-1" id="statNetReturn">£0</p>
</div>
<div className="bg-gray-900/70 border border-purple-500/30 p-4 rounded-lg hover:border-purple-400/40 transition-colors">
<h3 className="font-semibold text-purple-400 text-sm inline-flex items-center gap-2">
<i data-lucide="percent"></i>ROI
            </h3>
<p className="text-xl font-semibold text-white mt-1" id="statROI">0.0%</p>
</div>
<div className="bg-gray-900/70 border border-indigo-500/30 p-4 rounded-lg hover:border-indigo-400/40 transition-colors">
<h3 className="font-semibold text-indigo-400 text-sm inline-flex items-center gap-2">
<i data-lucide="medal"></i>Win Rate
            </h3>
<p className="text-xl font-semibold text-white mt-1" id="statWinRate">0.0%</p>
</div>
<div className="bg-gray-900/70 border border-emerald-500/30 p-4 rounded-lg hover:border-emerald-400/40 transition-colors">
<h3 className="font-semibold text-emerald-400 text-sm inline-flex items-center gap-2">
<i data-lucide="trending-up"></i>Peak
            </h3>
<p className="text-xl font-semibold text-white mt-1" id="statPeak">£1,000</p>
</div>
<div className="bg-gray-900/70 border border-orange-500/30 p-4 rounded-lg hover:border-orange-400/40 transition-colors">
<h3 className="font-semibold text-orange-400 text-sm inline-flex items-center gap-2">
<i data-lucide="trending-down"></i>Lowest
            </h3>
<p className="text-xl font-semibold text-white mt-1" id="statLowest">£1,000</p>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-gray-900 to-[#1f5410] rounded-xl shadow-lg p-6 border border-gray-800/80 outline outline-1 outline-gray-900/50">
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/20">
<i data-lucide="layout-panel-top"></i>
</span>
<h2 className="text-2xl tracking-tight font-semibold text-white">
            Capital Movement - <span id="summaryLeague">EPL</span> (<span id="summarySeason">Max</span>)
            <span className="text-[#4ade80]" id="summaryT9" style={{display: 'none'}}> - T9 Teams Only</span>
</h2>
</div>
<p className="text-gray-300 mb-6">
<span id="summaryDescription">Starting with £1,000, using 5% stake (£50.00 per bet)</span>
</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-4 bg-gray-900/70 border border-gray-800/80 rounded-lg">
<h3 className="font-semibold text-white mb-2 inline-flex items-center gap-2">
<i data-lucide="clipboard-list"></i>Investment Details
            </h3>
<ul className="text-sm text-gray-300 space-y-1">
<li>• Strategy: Over 2 Goals</li>
<li>• League: <span id="detailLeague">EPL</span></li>
<li>• Season: <span id="detailSeason">Max</span></li>
<li>• Teams: <span id="detailTeams">All Teams</span></li>
<li>• Starting Capital: <span id="detailCapital">£1,000</span></li>
<li>• Stake per Bet: <span id="detailStake">5% (£50.00)</span></li>
<li>• Total Games: <span id="detailGames">0</span></li>
</ul>
</div>
<div className="p-4 bg-gray-900/70 border border-gray-800/80 rounded-lg">
<h3 className="font-semibold text-white mb-2 inline-flex items-center gap-2">
<i data-lucide="sparkles"></i>Performance Summary
            </h3>
<ul className="text-sm text-gray-300 space-y-1">
<li>• Win Rate: <span id="summaryWinRate">0.0%</span></li>
<li>• ROI: <span id="summaryROI">0.0%</span></li>
<li>• Max Drawdown: <span id="summaryDrawdown">£0</span></li>
<li>• Peak Gain: <span id="summaryPeakGain">£0</span></li>
<li>• Final Capital: <span id="summaryFinalCapital">£1,000</span></li>
<li>• Net Return: <span id="summaryNetReturn">£0</span></li>
</ul>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-gray-900 to-[#1f5410] rounded-xl shadow-lg p-6 border border-gray-800/80 outline outline-1 outline-gray-900/50">
<div className="flex items-center gap-3 mb-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/20">
<i data-lucide="bar-chart-3"></i>
</span>
<h2 className="text-2xl tracking-tight font-semibold text-white">
            FT Over 2 .5 Goals - Team Ranking · <span id="under2League">EPL</span> (<span id="under2Season">Max</span>)
            <span className="text-[#4ade80]" id="under2T9" style={{display: 'none'}}> - T9 Teams Only</span>
</h2>
</div>
<p className="text-gray-300 mb-4">
          Teams ranked by number of matches with total full-time goals over 2.5 within the selected filters.
        </p>
<div className="rounded-lg bg-gray-900/70 ring-1 ring-gray-800/80 p-3">
<div className="text-sm text-gray-400 px-2 py-3" id="under2Empty" style={{display: 'none'}}>
            No data available for the current filter selection.
          </div>
<div className="w-full" id="under2ChartWrapper" style={{height: '360px'}}>
<div className="h-full w-full">
<canvas id="under2Chart"></canvas>
</div>
</div>
</div>
</div>


<div className="bg-gradient-to-r from-gray-900 to-[#1f5410] rounded-xl shadow-lg p-6 border border-gray-800/80 outline outline-1 outline-gray-900/50">
<div className="flex items-center gap-3 mb-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/20">
<i data-lucide="bar-chart-3"></i>
</span>
<h2 className="text-2xl tracking-tight font-semibold text-white">
            FT Under 2.5 Goals - Team Ranking · <span id="under25League">EPL</span> (<span id="under25Season">Max</span>)
            <span className="text-[#4ade80]" id="under25T9" style={{display: 'none'}}> - T9 Teams Only</span>
</h2>
</div>
<p className="text-gray-300 mb-4">
          Teams ranked by number of matches with total full-time goals under 2.5 within the selected filters.
        </p>
<div className="rounded-lg bg-gray-900/70 ring-1 ring-gray-800/80 p-3">
<div className="text-sm text-gray-400 px-2 py-3" id="under25Empty" style={{display: 'none'}}>
            No data available for the current filter selection.
          </div>
<div className="w-full" id="under25ChartWrapper" style={{height: '360px'}}>
<div className="h-full w-full">
<canvas id="under25Chart"></canvas>
</div>
</div>
</div>
</div>

</div>
</div>


    </>
  );
}
