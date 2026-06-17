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



      // Lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Demo dataset (swap with your real data)
      const demoData = {
        2024: {
          currency: 'USD',
          invoices: [
            { id: 'INV-1001', date: '2024-01-12', customer: 'Acme Co', status: 'paid', sentDate: '2024-01-12', paidDate: '2024-01-20', dueDate: '2024-01-25', items: [
              { name: 'Website Design', qty: 1, price: 2400 },
              { name: 'Hosting', qty: 12, price: 20 }
            ]},
            { id: 'INV-1002', date: '2024-02-05', customer: 'Globex', status: 'sent', sentDate: '2024-02-06', dueDate: '2024-02-20', items: [
              { name: 'Maintenance', qty: 10, price: 80 }
            ]},
            { id: 'INV-1003', date: '2024-02-19', customer: 'Acme Co', status: 'paid', sentDate: '2024-02-19', paidDate: '2024-02-28', dueDate: '2024-03-05', items: [
              { name: 'Website Design', qty: 1, price: 2600 }
            ]},
            { id: 'INV-1004', date: '2024-03-02', customer: 'Soylent Corp', status: 'overdue', sentDate: '2024-03-03', dueDate: '2024-03-17', items: [
              { name: 'Consulting', qty: 15, price: 120 }
            ]},
            { id: 'INV-1005', date: '2024-05-11', customer: 'Initech', status: 'paid', sentDate: '2024-05-11', paidDate: '2024-05-14', dueDate: '2024-05-25', items: [
              { name: 'Hosting', qty: 12, price: 20 },
              { name: 'Maintenance', qty: 12, price: 85 }
            ]},
            { id: 'INV-1006', date: '2024-07-07', customer: 'Vandelay', status: 'draft', items: [
              { name: 'Consulting', qty: 5, price: 150 }
            ]},
            { id: 'INV-1007', date: '2024-08-16', customer: 'Globex', status: 'paid', sentDate: '2024-08-16', paidDate: '2024-08-29', dueDate: '2024-09-01', items: [
              { name: 'Maintenance', qty: 6, price: 90 },
              { name: 'Hosting', qty: 6, price: 22 }
            ]},
            { id: 'INV-1008', date: '2024-10-05', customer: 'Acme Co', status: 'sent', sentDate: '2024-10-06', dueDate: '2024-10-20', items: [
              { name: 'Consulting', qty: 8, price: 140 }
            ]},
            { id: 'INV-1009', date: '2024-11-21', customer: 'Stark Industries', status: 'paid', sentDate: '2024-11-21', paidDate: '2024-12-01', dueDate: '2024-12-05', items: [
              { name: 'Website Design', qty: 1, price: 3200 }
            ]},
            { id: 'INV-1010', date: '2024-12-09', customer: 'Soylent Corp', status: 'overdue', sentDate: '2024-12-09', dueDate: '2024-12-23', items: [
              { name: 'Maintenance', qty: 5, price: 95 }
            ]},
          ],
          proposals: [
            { id: 'PR-301', date: '2024-01-05', client: 'Acme Co', status: 'accepted', sentDate: '2024-01-05', acceptedDate: '2024-01-07' },
            { id: 'PR-302', date: '2024-02-10', client: 'Globex', status: 'sent', sentDate: '2024-02-11' },
            { id: 'PR-303', date: '2024-05-03', client: 'Initech', status: 'accepted', sentDate: '2024-05-03', acceptedDate: '2024-05-05' },
            { id: 'PR-304', date: '2024-07-22', client: 'Vandelay', status: 'rejected', sentDate: '2024-07-22' },
            { id: 'PR-305', date: '2024-09-18', client: 'Stark Industries', status: 'accepted', sentDate: '2024-09-18', acceptedDate: '2024-09-20' },
            { id: 'PR-306', date: '2024-10-30', client: 'Acme Co', status: 'sent', sentDate: '2024-10-30' },
          ]
        },
        2023: {
          currency: 'USD',
          invoices: [
            { id: 'INV-0901', date: '2023-03-12', customer: 'Acme Co', status: 'paid', sentDate: '2023-03-12', paidDate: '2023-03-21', dueDate: '2023-03-28', items: [
              { name: 'Website Design', qty: 1, price: 2000 }
            ]},
            { id: 'INV-0902', date: '2023-06-10', customer: 'Initech', status: 'paid', sentDate: '2023-06-10', paidDate: '2023-06-15', dueDate: '2023-06-25', items: [
              { name: 'Maintenance', qty: 8, price: 75 }
            ]},
            { id: 'INV-0903', date: '2023-08-27', customer: 'Globex', status: 'overdue', sentDate: '2023-08-27', dueDate: '2023-09-10', items: [
              { name: 'Consulting', qty: 10, price: 120 }
            ]},
          ],
          proposals: [
            { id: 'PR-251', date: '2023-02-01', client: 'Acme Co', status: 'accepted', sentDate: '2023-02-01', acceptedDate: '2023-02-03' },
            { id: 'PR-252', date: '2023-05-14', client: 'Globex', status: 'sent', sentDate: '2023-05-15' },
          ]
        }
      };

      const $ = (s) => document.querySelector(s);
      const formatCurrency = (n, currency='USD') =>
        new Intl.NumberFormat(undefined, { style: 'currency', currency, maximumFractionDigits: 0 }).format(n);

      const sumInvoice = (inv) => inv.items.reduce((acc, it) => acc + it.qty * it.price, 0);

      let charts = {};

      function computeMetrics(year) {
        const d = demoData[year];
        const invoices = d.invoices;
        const proposals = d.proposals;
        const currency = d.currency || 'USD';

        const created = invoices.length;
        const sent = invoices.filter(i => !!i.sentDate).length;
        const paid = invoices.filter(i => i.status === 'paid');
        const overdue = invoices.filter(i => i.status === 'overdue');
        const drafts = invoices.filter(i => i.status === 'draft');

        const revenue = paid.reduce((acc, i) => acc + sumInvoice(i), 0);
        const avgInv = created ? (invoices.reduce((a, i) => a + sumInvoice(i), 0) / created) : 0;

        // Top customer by paid revenue
        const paidByCustomer = {};
        paid.forEach(i => {
          const amt = sumInvoice(i);
          paidByCustomer[i.customer] = (paidByCustomer[i.customer] || 0) + amt;
        });
        const topCustomer = Object.entries(paidByCustomer).sort((a,b)=>b[1]-a[1])[0];

        // Top item by revenue (paid)
        const itemsRev = {};
        paid.forEach(i => {
          i.items.forEach(it => {
            itemsRev[it.name] = (itemsRev[it.name] || 0) + it.qty * it.price;
          });
        });
        const topItem = Object.entries(itemsRev).sort((a,b)=>b[1]-a[1])[0];

        // Most past due customer
        const overdueByCustomer = {};
        overdue.forEach(i => {
          const amt = sumInvoice(i);
          overdueByCustomer[i.customer] = (overdueByCustomer[i.customer] || 0) + amt;
        });
        const mostPastDue = Object.entries(overdueByCustomer).sort((a,b)=>b[1]-a[1])[0];

        // Monthly revenue from paidDate
        const monthly = Array(12).fill(0);
        paid.forEach(i => {
          const m = i.paidDate ? new Date(i.paidDate).getMonth() : new Date(i.date).getMonth();
          monthly[m] += sumInvoice(i);
        });

        // Status counts
        const statusCounts = {
          draft: drafts.length,
          sent: invoices.filter(i => i.status === 'sent').length,
          paid: paid.length,
          overdue: overdue.length
        };

        // Top items array sorted
        const itemsSorted = Object.entries(itemsRev).sort((a,b)=>b[1]-a[1]).slice(0,5);

        // Proposals
        const pCreated = proposals.length;
        const pSent = proposals.filter(p => !!p.sentDate).length;
        const pAccepted = proposals.filter(p => p.status === 'accepted').length;
        const pRate = pSent ? (pAccepted / pSent) : 0;

        // Proposal timing
        let fastest = null;
        let totalAcceptMs = 0;
        let acceptCount = 0;
        proposals.forEach(p => {
          if (p.status === 'accepted' && p.acceptedDate && p.sentDate) {
            const ms = new Date(p.acceptedDate) - new Date(p.sentDate);
            totalAcceptMs += ms;
            acceptCount++;
            if (!fastest || ms < fastest.ms) fastest = { id: p.id, client: p.client, ms };
          }
        });
        const avgAcceptMs = acceptCount ? totalAcceptMs / acceptCount : null;

        return {
          currency,
          created, sent, revenue, avgInv,
          monthly,
          statusCounts,
          topCustomer,
          topItem,
          mostPastDue,
          itemsSorted,
          pCreated, pSent, pAccepted, pRate,
          fastest, avgAcceptMs
        };
      }

      function msToDays(ms) {
        if (ms == null) return '—';
        const days = ms / (1000 * 60 * 60 * 24);
        if (days < 1) return `${Math.max(1, Math.round(days*24))}h`;
        return `${Math.round(days)}d`;
      }

      function hydrateUI(year) {
        const m = computeMetrics(year);

        // Hero chips
        $('#heroInvoices').textContent = `${m.created} invoices • ${m.sent} sent`;
        $('#heroProposals').textContent = `${m.pCreated} proposals • ${m.pAccepted} accepted`;
        $('#heroRevenue').textContent = `${formatCurrency(m.revenue, m.currency)} revenue`;

        // Highlights
        $('#yearChip').textContent = year;
        $('#invoicesCreated').textContent = m.created.toLocaleString();
        $('#invoicesSent').textContent = m.sent.toLocaleString();
        $('#revenue').textContent = formatCurrency(m.revenue, m.currency);
        $('#avgInvoice').textContent = formatCurrency(m.avgInv, m.currency);

        $('#draftCount').textContent = m.statusCounts.draft;
        $('#sentCount').textContent = m.statusCounts.sent;
        $('#paidCount').textContent = m.statusCounts.paid;
        $('#overdueCount').textContent = m.statusCounts.overdue;

        $('#topCustomer').textContent = m.topCustomer ? m.topCustomer[0] : '—';
        $('#topCustomerValue').textContent = m.topCustomer ? `${formatCurrency(m.topCustomer[1], m.currency)} paid` : 'No paid invoices';

        $('#topItem').textContent = m.topItem ? m.topItem[0] : '—';
        $('#topItemValue').textContent = m.topItem ? `${formatCurrency(m.topItem[1], m.currency)} revenue` : '—';

        $('#mostPastDue').textContent = m.mostPastDue ? m.mostPastDue[0] : '—';
        $('#mostPastDueValue').textContent = m.mostPastDue ? `${formatCurrency(m.mostPastDue[1], m.currency)} outstanding` : 'All caught up';

        const accRatePct = Math.round((m.pRate || 0) * 100);
        $('#acceptanceRate').textContent = `${accRatePct}%`;

        // Proposals section
        $('#proposalsCreated').textContent = m.pCreated.toLocaleString();
        $('#proposalsSent').textContent = m.pSent.toLocaleString();
        $('#proposalsAccepted').textContent = m.pAccepted.toLocaleString();
        $('#proposalsRate').textContent = `${accRatePct}%`;
        $('#proposalSummary').textContent = `${m.pSent} sent • ${m.pAccepted} accepted`;

        const narrative = m.pAccepted > 0
          ? `You turned ${m.pAccepted} proposals into wins with a ${accRatePct}% acceptance rate. Keep momentum with a consistent sending cadence.`
          : `No accepted proposals yet—try templatizing offers and following up within 48 hours.`;
        $('#proposalNarrative').textContent = narrative;

        $('#fastestAccept').textContent = m.fastest
          ? `Fastest accepted: ${m.fastest.client} in ${msToDays(m.fastest.ms)}`
          : 'Fastest accepted: —';
        $('#avgAcceptTime').textContent = `Average time to accept: ${m.avgAcceptMs ? msToDays(m.avgAcceptMs) : '—'}`;

        // Story
        $('#storyTopCustomer').textContent = m.topCustomer
          ? `${m.topCustomer[0]} contributed ${formatCurrency(m.topCustomer[1], m.currency)} in paid revenue.`
          : 'No paid invoices recorded.';
        $('#storyTopItem').textContent = m.topItem
          ? `${m.topItem[0]} led your catalog with ${formatCurrency(m.topItem[1], m.currency)} in sales.`
          : 'No item sales to report.';
        $('#storyPastDue').textContent = m.mostPastDue
          ? `${m.mostPastDue[0]} has ${formatCurrency(m.mostPastDue[1], m.currency)} overdue. Consider reminders or late fees.`
          : 'No overdue balances. Great job!';

        // Charts
        renderCharts(year, m);
      }

      function renderCharts(year, m) {
        // Dispose existing charts
        Object.values(charts).forEach(c => c && c.destroy());
        charts = {};

        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        const ctxRev = document.getElementById('revChart');
        const grad = ctxRev.getContext('2d').createLinearGradient(0, 0, 0, 240);
        grad.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
        grad.addColorStop(1, 'rgba(99, 102, 241, 0.02)');

        charts.rev = new Chart(ctxRev, {
          type: 'line',
          data: {
            labels: months,
            datasets: [{
              label: 'Revenue',
              data: m.monthly.map(v => Math.round(v)),
              borderColor: 'rgb(99, 102, 241)',
              backgroundColor: grad,
              fill: true,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => `${new Intl.NumberFormat(undefined, { style: 'currency', currency: m.currency, maximumFractionDigits: 0 }).format(ctx.raw)}`
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { size: 11 } } },
              y: {
                grid: { color: 'rgba(15,23,42,0.06)' },
                ticks: {
                  color: '#475569',
                  font: { size: 11 },
                  callback: (v) => new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 }).format(v)
                }
              }
            }
          }
        });

        charts.status = new Chart(document.getElementById('statusChart'), {
          type: 'doughnut',
          data: {
            labels: ['Draft','Sent','Paid','Overdue'],
            datasets: [{
              data: [m.statusCounts.draft, m.statusCounts.sent, m.statusCounts.paid, m.statusCounts.overdue],
              backgroundColor: ['#94a3b8','#818cf8','#34d399','#fb7185'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            }
          }
        });

        charts.items = new Chart(document.getElementById('itemsChart'), {
          type: 'bar',
          data: {
            labels: m.itemsSorted.map(i => i[0]),
            datasets: [{
              label: '          Revenue',
              data: m.itemsSorted.map(i => Math.round(i[1])),
              backgroundColor: 'rgba(99, 102, 241, 0.85)',
              borderRadius: 6,
              borderSkipped: false
            }]
          },
          options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => `${new Intl.NumberFormat(undefined, { style: 'currency', currency: m.currency, maximumFractionDigits: 0 }).format(ctx.raw)}`
                }
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(15,23,42,0.06)' },
                ticks: {
                  color: '#475569',
                  font: { size: 11 },
                  callback: (v) => new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 }).format(v)
                }
              },
              y: { grid: { display: false }, ticks: { color: '#334155', font: { size: 11 } } }
            }
          }
        });

        charts.proposal = new Chart(document.getElementById('proposalChart'), {
          type: 'bar',
          data: {
            labels: ['Sent', 'Accepted'],
            datasets: [{
              data: [m.pSent, m.pAccepted],
              backgroundColor: ['#818cf8', '#34d399'],
              borderRadius: 8,
              borderSkipped: false
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#475569', font: { size: 11 } } },
              y: { grid: { color: 'rgba(15,23,42,0.06)' }, ticks: { color: '#475569', font: { size: 11 }, precision: 0, stepSize: 1 } }
            }
          }
        });
      }

      // Recap overlay logic
      let recap = {
        timers: [],
        current: 0,
        durations: [2200, 2400, 2200, 2600, 2600, 2600, 2600],
        progressEls: [],
        revChart: null
      };

      function clearRecapTimers() {
        recap.timers.forEach(t => clearTimeout(t));
        recap.timers = [];
      }

      function setSlidesVisibility(idx) {
        const slides = Array.from(document.querySelectorAll('#recapSlides .recap-slide'));
        slides.forEach((s, i) => {
          if (i === idx) {
            s.classList.remove('hidden', 'opacity-0', 'translate-y-2');
            s.classList.add('opacity-100');
          } else {
            s.classList.add('hidden');
            s.classList.remove('opacity-100');
          }
          s.setAttribute('aria-hidden', i === idx ? 'false' : 'true');
        });
      }

      function buildProgressSegments(count) {
        const container = $('#recapProgress');
        container.innerHTML = '';
        recap.progressEls = [];
        for (let i = 0; i < count; i++) {
          const seg = document.createElement('div');
          seg.className = 'h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden';
          const fill = document.createElement('div');
          fill.className = 'h-full w-0 bg-white transition-[width] duration-[2000ms]';
          seg.appendChild(fill);
          container.appendChild(seg);
          recap.progressEls.push(fill);
        }
      }

      function animateProgress(idx, duration) {
        recap.progressEls.forEach((el, i) => {
          el.style.transitionDuration = `${duration}ms`;
          el.style.width = i < idx ? '100%' : '0%';
        });
        // Animate only current segment
        if (recap.progressEls[idx]) {
          // Force reflow to restart transition
          void recap.progressEls[idx].offsetWidth;
          recap.progressEls[idx].style.transitionDuration = `${duration}ms`;
          recap.progressEls[idx].style.width = '100%';
        }
      }

      function animateCount(el, to, duration = 1200, formatter = (v) => Math.round(v).toLocaleString()) {
        const start = 0;
        const startTime = performance.now();
        function frame(now) {
          const p = Math.min(1, (now - startTime) / duration);
          const val = start + (to - start) * p;
          el.textContent = formatter(val);
          if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      }

      function renderRecapChart(m) {
        if (recap.revChart) {
          recap.revChart.destroy();
          recap.revChart = null;
        }
        const el = document.getElementById('recapRevChart');
        if (!el) return;
        const ctx = el.getContext('2d');
        const grad = ctx.createLinearGradient(0, 0, 0, 220);
        grad.addColorStop(0, 'rgba(99,102,241,0.35)');
        grad.addColorStop(1, 'rgba(99,102,241,0.02)');
        recap.revChart = new Chart(el, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              label: 'Revenue',
              data: m.monthly.map(v => Math.round(v)),
              borderColor: '#a5b4fc',
              backgroundColor: grad,
              borderWidth: 2,
              tension: 0.35,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#e2e8f0', font: { size: 11 } } },
              y: {
                grid: { color: 'rgba(255,255,255,0.08)' },
                ticks: {
                  color: '#e2e8f0',
                  font: { size: 11 },
                  callback: (v) => new Intl.NumberFormat(undefined, { notation: 'compact', maximumFractionDigits: 1 }).format(v)
                }
              }
            }
          }
        });
      }

      function startRecap(year) {
        const m = computeMetrics(year);
        // Populate text
        $('#recapYearText').textContent = `Year ${year}`;
        animateCount($('#recapInvCreated'), m.created, 1000);
        animateCount($('#recapInvSent'), m.sent, 1000);
        $('#recapRevenue').textContent = '—';
        setTimeout(() => {
          $('#recapRevenue').textContent = formatCurrency(m.revenue, m.currency);
        }, 250);

        $('#recapTopCustomer').textContent = m.topCustomer ? `${m.topCustomer[0]} • ${formatCurrency(m.topCustomer[1], m.currency)}` : '—';
        $('#recapTopItem').textContent = m.topItem ? `${m.topItem[0]} • ${formatCurrency(m.topItem[1], m.currency)}` : '—';

        animateCount($('#recapPropSent'), m.pSent, 1000);
        animateCount($('#recapPropRate'), Math.round((m.pRate || 0) * 100), 1000, (v) => `${Math.round(v)}%`);
        $('#recapPropNote').textContent = `${m.pAccepted} accepted out of ${m.pSent} sent`;

        const topName = m.topCustomer ? m.topCustomer[0] : 'your clients';
        $('#recapClosing').textContent = `Great work! ${topName} stood out this year. Plan your next wins with templates, reminders, and automation.`;

        renderRecapChart(m);

        // Slides
        recap.current = 0;
        setSlidesVisibility(recap.current);
        buildProgressSegments(7);
        animateProgress(0, recap.durations[0]);
        clearRecapTimers();

        for (let i = 0; i < 6; i++) {
          const t = setTimeout(() => {
            recap.current = i + 1;
            setSlidesVisibility(recap.current);
            animateProgress(recap.current, recap.durations[recap.current]);
          }, recap.durations.slice(0, i + 1).reduce((a, b) => a + b, 0));
          recap.timers.push(t);
        }
      }

      function openRecap() {
        const year = $('#yearSelect').value;
        $('#recapOverlay').classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        startRecap(year);
        // Focus
        $('#recapClose').focus({ preventScroll: true });
      }

      function closeRecap() {
        clearRecapTimers();
        $('#recapOverlay').classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        // Reset progress
        recap.progressEls.forEach(el => el.style.width = '0%');
      }

      // Utility: Toast
      function showToast(message) {
        const t = document.createElement('div');
        t.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-[70] rounded-lg bg-slate-900 text-white px-3.5 py-2 text-sm shadow-lg border border-slate-800';
        t.textContent = message;
        document.body.appendChild(t);
        setTimeout(() => { t.classList.add('opacity-0', 'translate-y-1'); }, 1800);
        setTimeout(() => { t.remove(); }, 2300);
      }

      // Generate shareable summary text
      function buildSummary(year) {
        const m = computeMetrics(year);
        const lines = [
          `Bookipi • Year in Review ${year}`,
          `Invoices: ${m.created} created, ${m.sent} sent`,
          `Revenue: ${formatCurrency(m.revenue, m.currency)} (avg ${formatCurrency(m.avgInv, m.currency)})`,
          `Status — Draft ${m.statusCounts.draft}, Sent ${m.statusCounts.sent}, Paid ${m.statusCounts.paid}, Overdue ${m.statusCounts.overdue}`,
          `Top customer: ${m.topCustomer ? `${m.topCustomer[0]} (${formatCurrency(m.topCustomer[1], m.currency)})` : '—'}`,
          `Top item: ${m.topItem ? `${m.topItem[0]} (${formatCurrency(m.topItem[1], m.currency)})` : '—'}`,
          `Proposals: ${m.pSent} sent, ${m.pAccepted} accepted (${Math.round((m.pRate || 0) * 100)}%)`
        ];
        return lines.join('\n');
      }

      // Event bindings and initial load
      (function init() {
        const yearSelect = $('#yearSelect');
        const year = yearSelect ? yearSelect.value : String(new Date().getFullYear());
        hydrateUI(year);

        // Footer year
        const now = new Date();
        if ($('#yearNow')) $('#yearNow').textContent = now.getFullYear();

        // Year select
        if (yearSelect) {
          yearSelect.addEventListener('change', (e) => {
            const y = e.target.value;
            hydrateUI(y);
            showToast(`Showing ${y}`);
          });
        }

        // Recap interactions
        $('#recapBtn')?.addEventListener('click', openRecap);
        $('#recapClose')?.addEventListener('click', closeRecap);
        $('#recapExit')?.addEventListener('click', closeRecap);
        $('#recapReplay')?.addEventListener('click', () => {
          clearRecapTimers();
          startRecap($('#yearSelect').value);
        });
        // Click to advance to next slide
        $('#recapSlides')?.addEventListener('click', () => {
          clearRecapTimers();
          recap.current = Math.min(recap.current + 1, 6);
          setSlidesVisibility(recap.current);
          animateProgress(recap.current, recap.durations[recap.current]);
        });
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
          if ($('#recapOverlay')?.classList.contains('hidden')) return;
          if (e.key === 'Escape') closeRecap();
          if (e.key === 'ArrowRight') {
            clearRecapTimers();
            recap.current = Math.min(recap.current + 1, 6);
            setSlidesVisibility(recap.current);
            animateProgress(recap.current, recap.durations[recap.current]);
          }
          if (e.key === 'ArrowLeft') {
            clearRecapTimers();
            recap.current = Math.max(recap.current - 1, 0);
            setSlidesVisibility(recap.current);
            animateProgress(recap.current, recap.durations[recap.current]);
          }
        });

        // Share
        $('#shareBtn')?.addEventListener('click', async () => {
          const year = $('#yearSelect').value;
          const text = buildSummary(year);
          try {
            if (navigator.share) {
              await navigator.share({ title: `Bookipi • Year in Review ${year}`, text, url: location.href });
              showToast('Shared');
            } else {
              await navigator.clipboard.writeText(`${text}\n${location.href}`);
              showToast('Link & summary copied');
            }
          } catch {
            await navigator.clipboard.writeText(`${text}\n${location.href}`);
            showToast('Link & summary copied');
          }
        });

        // Copy summary
        $('#copyBtn')?.addEventListener('click', async () => {
          const year = $('#yearSelect').value;
          const text = buildSummary(year);
          try {
            await navigator.clipboard.writeText(text);
            showToast('Summary copied');
          } catch {
            showToast('Copy failed');
          }
        });
      })();
    
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
      
<div className="min-h-screen">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200 transition-colors">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5">B</div>
<div className="flex items-baseline gap-3">
<span className="text-[15px] text-slate-600">Bookipi</span>
<span className="text-slate-300">/</span>
<span className="text-[15px] font-medium tracking-tight text-slate-900">Year in Review</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5 transition-transform duration-300 transform-gpu hover:-translate-y-0.5 hover:border-slate-300">
<svg className="lucide lucide-calendar w-4 h-4 text-slate-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<select className="bg-transparent text-[14px] font-medium text-slate-700 focus:outline-none focus:ring-0" id="yearSelect">
<option selected="" value="2024">2024</option>
<option value="2023">2023</option>
</select>
</div>
<button className="group inline-flex gap-2 text-[14px] hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-95 font-medium text-slate-800 bg-white border-slate-200 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" id="recapBtn">
<svg className="lucide lucide-play w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Play recap
              </button>
<button className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[14px] font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-95" id="shareBtn">
<svg className="lucide lucide-share-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                Share
              </button>
<button className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-1.5 text-[14px] font-medium hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-95" id="copyBtn">
<svg className="lucide lucide-link-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                Copy summary
              </button>
</div>
</div>
</div>
</header>

<section className="relative border-b border-slate-200 overflow-hidden">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-24 -left-16 h-56 w-56 rounded-full opacity-25 blur-3xl animate-spin bg-[conic-gradient(at_top_left,_#818cf8,_#22d3ee,_#a78bfa,_#818cf8)]" style={{animationDuration: '20s'}}></div>
<div className="absolute top-1/2 -right-20 h-72 w-72 rounded-full opacity-20 blur-3xl animate-spin bg-[conic-gradient(at_bottom_right,_#34d399,_#60a5fa,_#f472b6,_#34d399)]" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-7">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                Your <span className="text-indigo-600">Year in Review</span>
</h1>
<p className="mt-3 text-[15px] leading-7 text-slate-600 max-w-2xl">
                A clear snapshot of your year across invoices, customers, items, and proposals. Celebrate the wins, spot the trends, and get ready for your next big leap.
              </p>
<div className="mt-6 flex items-center gap-3">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
<svg className="lucide lucide-receipt w-4 h-4 text-slate-500" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
<span className="text-[13px] text-slate-700" id="heroInvoices">10 invoices • 9 sent</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
<svg className="lucide lucide-rocket w-4 h-4 text-slate-500" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-[13px] text-slate-700" id="heroProposals">6 proposals • 3 accepted</span>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
<svg className="lucide lucide-wallet w-4 h-4 text-slate-500" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span className="text-[13px] text-slate-700" id="heroRevenue">$10,372 revenue</span>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Highlights</h3>
<span className="text-[12px] text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md animate-pulse" id="yearChip" style={{animationDuration: '3s'}}>2024</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center justify-between">
<span className="text-[12px] text-slate-600">Top customer</span>
<svg className="lucide lucide-user w-4 h-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="mt-2 text-[15px] font-medium text-slate-900 truncate" id="topCustomer">Acme Co</div>
<div className="text-[12px] text-slate-600" id="topCustomerValue">$5,240 paid</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center justify-between">
<span className="text-[12px] text-slate-600">Top item</span>
<svg className="lucide lucide-package w-4 h-4 text-slate-500 transition-transform duration-300" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="mt-2 text-[15px] font-medium text-slate-900 truncate" id="topItem">Website Design</div>
<div className="text-[12px] text-slate-600" id="topItemValue">$8,200 revenue</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center justify-between">
<span className="text-[12px] text-slate-600">Most past due</span>
<svg className="lucide lucide-clock-8 w-4 h-4 text-slate-500 transition-transform duration-300" data-lucide="clock-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l-4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="mt-2 text-[15px] font-medium text-slate-900 truncate" id="mostPastDue">Soylent Corp</div>
<div className="text-[12px] text-slate-600" id="mostPastDueValue">$2,275 outstanding</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center justify-between">
<span className="text-[12px] text-slate-600">Acceptance rate</span>
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-slate-500 transition-transform duration-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="mt-2 text-[15px] font-medium text-slate-900" id="acceptanceRate">50%</div>
<div className="text-[12px] text-slate-600">Proposals accepted</div>
</div>
</div>
<div className="mt-4 rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-indigo-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h4 className="text-[13px] font-medium text-slate-900">AI Website &amp; Contracts</h4>
</div>
<p className="mt-1.5 text-[13px] text-slate-600">Keep the momentum going with your AI website and contract signing—ready when you are.</p>
<div className="mt-3 flex gap-2">
<button className="group inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-wand-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                      Launch AI site
                    </button>
<button className="group inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-signature w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"></path><path d="M3 21h18"></path></svg>
                      New contract
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 gap-8">

<div className="rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300">
<div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-receipt w-5 h-5 text-slate-600" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
<h2 className="text-[17px] font-semibold tracking-tight text-slate-900">Invoicing</h2>
</div>
<div className="flex items-center gap-3">
<div className="text-[12px] text-slate-600">Status mix</div>
<div className="flex -space-x-1.5">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-400 ring-2 ring-white" title="Draft"></span>
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-400 ring-2 ring-white" title="Sent"></span>
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white" title="Paid"></span>
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400 ring-2 ring-white" title="Overdue"></span>
</div>
</div>
</div>
<div className="p-5 sm:p-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Invoices created</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="invoicesCreated">10</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Invoices sent</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="invoicesSent">9</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Revenue</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="revenue">$10,372</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Avg. invoice value</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="avgInvoice">$1,532</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 rounded-lg border border-slate-200 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="p-4 sm:p-5">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Revenue trend</h3>
<p className="mt-1 text-[13px] text-slate-600">Month-by-month paid revenue</p>
<div className="mt-3">
<div className="relative h-56 sm:h-64 md:h-72">
<canvas height="288" id="revChart" style={{display: 'block', boxSizing: 'border-box', height: '288px', width: '628px'}} width="628"></canvas>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 rounded-lg border border-slate-200 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="p-4 sm:p-5">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Invoice status</h3>
<p className="mt-1 text-[13px] text-slate-600">Drafts, sent, paid, and overdue</p>
<div className="mt-3">
<div className="relative h-56">
<canvas height="224" id="statusChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '429px'}} width="429"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-[12px]">
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-slate-400"></span><span className="text-slate-700">Draft</span><span className="ml-auto text-slate-500" id="draftCount">1</span></div>
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-indigo-400"></span><span className="text-slate-700">Sent</span><span className="ml-auto text-slate-500" id="sentCount">2</span></div>
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span><span className="text-slate-700">Paid</span><span className="ml-auto text-slate-500" id="paidCount">5</span></div>
<div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span><span className="text-slate-700">Overdue</span><span className="ml-auto text-slate-500" id="overdueCount">2</span></div>
</div>
</div>
</div>
</div>

<div className="mt-6 rounded-lg border border-slate-200 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Top items</h3>
<p className="mt-1 text-[13px] text-slate-600">Items by revenue</p>
</div>
<div className="flex items-center gap-2 text-[12px] text-slate-600">
<svg className="lucide lucide-filter w-4 h-4 text-slate-500" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                      Top 5
                    </div>
</div>
<div className="mt-3">
<div className="relative h-56 md:h-64">
<canvas height="256" id="itemsChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '1124px'}} width="1124"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300">
<div className="p-5 sm:p-6 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-text w-5 h-5 text-slate-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<h2 className="text-[17px] font-semibold tracking-tight text-slate-900">Proposals</h2>
</div>
<div className="text-[13px] text-slate-600" id="proposalSummary">6 sent • 3 accepted</div>
</div>
<div className="p-5 sm:p-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Proposals created</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="proposalsCreated">6</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Proposals sent</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="proposalsSent">6</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Accepted</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="proposalsAccepted">3</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="text-[12px] text-slate-600">Acceptance rate</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900" id="proposalsRate">50%</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 rounded-lg border border-slate-200 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="p-4 sm:p-5">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Proposal outcomes</h3>
<p className="mt-1 text-[13px] text-slate-600">Sent vs accepted</p>
<div className="mt-3">
<div className="relative h-56 sm:h-64">
<canvas height="256" id="proposalChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '628px'}} width="628"></canvas>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 rounded-lg border border-slate-200 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="p-4 sm:p-5">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Quick narrative</h3>
<p className="mt-1 text-[13px] text-slate-600" id="proposalNarrative">You turned 3 proposals into wins with a 50% acceptance rate. Keep momentum with a consistent sending cadence.</p>
<div className="mt-4 grid grid-cols-1 gap-3">
<div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
<svg className="lucide lucide-send w-4 h-4 text-indigo-600" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-[13px] text-slate-700" id="fastestAccept">Fastest accepted: Acme Co in 2d</span>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
<svg className="lucide lucide-clock w-4 h-4 text-emerald-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-[13px] text-slate-700" id="avgAcceptTime">Average time to accept: 2d</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-slate-300">
<div className="p-5 sm:p-6 border-b border-slate-200 flex items-center gap-2">
<svg className="lucide lucide-sparkles w-5 h-5 text-slate-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h2 className="text-[17px] font-semibold tracking-tight text-slate-900">Your story, this year</h2>
</div>
<div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-emerald-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-[13px] font-medium text-slate-900">Top customer</span>
</div>
<p className="mt-2 text-[13px] text-slate-700" id="storyTopCustomer">Acme Co contributed $5,240 in paid revenue.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-indigo-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-[13px] font-medium text-slate-900">Top item</span>
</div>
<p className="mt-2 text-[13px] text-slate-700" id="storyTopItem">Website Design led your catalog with $8,200 in sales.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4 transition-all duration-300 transform-gpu hover:-translate-y-0.5 hover:shadow-sm hover:border-slate-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-alert-octagon w-4 h-4 text-rose-600" data-lucide="alert-octagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M12 8v4"></path><path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path></svg>
<span className="text-[13px] font-medium text-slate-900">Most past due</span>
</div>
<p className="mt-2 text-[13px] text-slate-700" id="storyPastDue">Soylent Corp has $2,275 overdue. Consider reminders or late fees.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white">
<div className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Ready to grow next year?</h3>
<p className="mt-1 text-[13px] text-slate-600">Turn insights into action—schedule recurring invoices, templatize proposals, and automate follow-ups.</p>
</div>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[14px] font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-repeat w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
                  Automate invoices
                </button>
<button className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-3 py-1.5 text-[14px] font-medium hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-300 transform-gpu hover:-translate-y-0.5 active:scale-95">
<svg className="lucide lucide-sparkles w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Boost proposals
                </button>
</div>
</div>
</div>
</div>
</section>
<footer className="py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between border-t border-slate-200 pt-6">
<p className="text-[12px] text-slate-500">© <span id="yearNow">2025</span> Bookipi. All rights reserved.</p>
<div className="text-[12px] text-slate-500">Year in Review</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[60]" id="recapOverlay">
<div className="absolute inset-0 bg-slate-950"></div>

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-20 blur-3xl animate-spin bg-[conic-gradient(at_top_left,_#818cf8,_#22d3ee,_#a78bfa,_#818cf8)]" style={{animationDuration: '24s'}}></div>
<div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl animate-spin bg-[conic-gradient(at_bottom_right,_#34d399,_#60a5fa,_#f472b6,_#34d399)]" style={{animationDuration: '36s', animationDirection: 'reverse'}}></div>
</div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
<div className="flex gap-1.5" id="recapProgress"><div className="h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden"><div className="h-full w-0 bg-white transition-[width] duration-[2000ms]" style={{transitionDuration: '2200ms', width: '100%'}}></div></div><div className="h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden"><div className="h-full w-0 bg-white transition-[width] duration-[2000ms]" style={{transitionDuration: '2200ms', width: '100%'}}></div></div><div className="h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden"><div className="h-full w-0 bg-white transition-[width] duration-[2000ms]" style={{transitionDuration: '2200ms', width: '100%'}}></div></div><div className="h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden"><div className="h-full w-0 bg-white transition-[width] duration-[2000ms]" style={{transitionDuration: '2200ms', width: '0%'}}></div></div><div className="h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden"><div className="h-full w-0 bg-white transition-[width] duration-[2000ms]" style={{transitionDuration: '2200ms', width: '0%'}}></div></div><div className="h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden"><div className="h-full w-0 bg-white transition-[width] duration-[2000ms]" style={{transitionDuration: '2200ms', width: '0%'}}></div></div><div className="h-1.5 flex-1 rounded-full bg-white/15 overflow-hidden"><div className="h-full w-0 bg-white transition-[width] duration-[2000ms]" style={{transitionDuration: '2200ms', width: '0%'}}></div></div></div>
</div>
<button className="absolute top-4 right-4 inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-white transition" id="recapClose">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="flex w-full h-full pr-6 pl-6 relative items-center justify-center">
<div className="w-full max-w-3xl h-[72vh] sm:h-[70vh] rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-2xl" id="recapSlides">

<div aria-hidden="true" className="recap-slide h-full w-full flex flex-col items-center justify-center text-center text-white px-6">
<div className="text-sm/6 text-white/70">Bookipi</div>
<h2 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">Your <span className="text-indigo-400">Year in Review</span></h2>
<div className="mt-3 text-white/70 text-sm" id="recapYearText">Year 2024</div>
</div>

<div aria-hidden="true" className="recap-slide h-full w-full flex items-center justify-center">
<div className="w-full text-white px-8">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Invoices at a glance</h3>
<p className="mt-1 text-sm text-white/70">Created and sent this year</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-white/70">Created</div>
<div className="mt-1 text-4xl sm:text-5xl font-semibold tracking-tight" id="recapInvCreated">0</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-white/70">Sent</div>
<div className="mt-1 text-4xl sm:text-5xl font-semibold tracking-tight" id="recapInvSent">0</div>
</div>
</div>
</div>
</div>

<div aria-hidden="false" className="recap-slide h-full w-full flex items-center justify-center">
<div className="w-full text-white px-8">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Revenue</h3>
<p className="mt-1 text-sm text-white/70">Total paid this year</p>
<div className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight" id="recapRevenue">$10,372</div>
</div>
</div>

<div aria-hidden="true" className="recap-slide h-full w-full flex items-center justify-center">
<div className="w-full text-white px-6">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Revenue trend</h3>
<p className="mt-1 text-sm text-white/70">Month-by-month</p>
<div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="relative h-56 sm:h-64">
<div className="h-full w-full">
<canvas height="256" id="recapRevChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '684px'}} width="684"></canvas>
</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="recap-slide h-full w-full flex items-center justify-center">
<div className="w-full text-white px-8">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Top performers</h3>
<p className="mt-1 text-sm text-white/70">Customer and item</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-emerald-300" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-xs text-white/80">Top customer</span>
</div>
<div className="mt-2 text-lg font-medium" id="recapTopCustomer">Acme Co • $5,240</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-indigo-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs text-white/80">Top item</span>
</div>
<div className="mt-2 text-lg font-medium" id="recapTopItem">Website Design • $8,200</div>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="recap-slide h-full w-full flex items-center justify-center">
<div className="w-full text-white px-8">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Proposals</h3>
<p className="mt-1 text-sm text-white/70">Sent and acceptance rate</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-white/70">Sent</div>
<div className="mt-1 text-4xl sm:text-5xl font-semibold tracking-tight" id="recapPropSent">0</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-xs text-white/70">Acceptance rate</div>
<div className="mt-1 text-4xl sm:text-5xl font-semibold tracking-tight" id="recapPropRate">0%</div>
</div>
</div>
<div className="mt-3 text-sm text-white/70" id="recapPropNote">3 accepted out of 6 sent</div>
</div>
</div>

<div aria-hidden="true" className="recap-slide h-full w-full flex items-center justify-center">
<div className="w-full text-white px-8 text-center">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Onward and upward</h3>
<p className="mt-2 text-sm text-white/80" id="recapClosing">Great work! Acme Co stood out this year. Plan your next wins with templates, reminders, and automation.</p>
<div className="mt-6 flex items-center justify-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-3 py-1.5 text-[14px] font-medium hover:bg-white/15 border border-white/10 transition" id="recapReplay">
<svg className="lucide lucide-rotate-ccw w-4 h-4" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                  Replay
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 text-white px-3 py-1.5 text-[14px] font-medium hover:bg-indigo-400 transition" id="recapExit">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Done
                </button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
