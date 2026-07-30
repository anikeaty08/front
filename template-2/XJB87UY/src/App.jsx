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



    // State
    const state = {
      newsKeys: [],
      geminiKeys: [],
      useGrounding: true,
      searchResearcherKeys: [],
      youtubeKeys: [],
      modelCandidates: [
        'gemini-2.5-pro',
        'gemini-2.0-pro-exp-02-05',
        'gemini-1.5-pro-002',
        'gemini-1.5-pro'
      ],
      results: [],
      selected: [],
      articles: [], // {id, source, url, title, image, content, checks, aiScore}
      activeArticleId: null,
      gold: [],
      likes: [],
      bookmarks: [],
      searchCache: {}, // key => {ts, items, params}
      trends: {}, // country => [topics]
      generating: { running: false, queue: [], index: 0, controller: null, canceled: false }
    };

    // Utils
    const $ = (q, root=document) => root.querySelector(q);
    const $$ = (q, root=document) => Array.from(root.querySelectorAll(q));
    const now = () => new Date();
    const pad2 = n => String(n).padStart(2, '0');
    const ymd = d => `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
    const iso = d => new Date(d).toISOString();
    const safeText = s => (s||'').replace(/\s+/g, ' ').trim();
    const uid = () => Math.random().toString(36).slice(2,9);
    const wordCount = t => safeText(t).split(/\s+/).filter(Boolean).length;
    const sentenceSplit = t => safeText(t).split(/(?<=[\.\!\?])\s+/);
    const avg = arr => arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0;
    const minutesAgoISO = min => new Date(Date.now() - min*60*1000).toISOString();
    const hoursAgoISO = h => minutesAgoISO(h*60);

    function toast(msg) {
      const el = document.createElement('div');
      el.className = 'fixed bottom-4 right-4 glass px-4 py-2 rounded-xl text-sm';
      el.textContent = msg;
      document.body.appendChild(el);
      setTimeout(()=>{ el.remove(); }, 2400);
    }
    function renderIcons() {
      if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
    function setTopProgress(val=null, show=false) {
      const container = $('#globalProgress');
      const bar = $('#globalProgressBar');
      if (show) container.classList.remove('hidden');
      if (val!==null) bar.style.width = `${Math.min(100, Math.max(0, val))}%`;
      if (!show && val===null) { container.classList.add('hidden'); bar.style.width = '0%'; }
    }
    async function autoConfigureProgress() {
      setTopProgress(5, true);
      await new Promise(r=>setTimeout(r, 200));
      setTopProgress(25, true);
      await new Promise(r=>setTimeout(r, 150));
      setTopProgress(55, true);
      await new Promise(r=>setTimeout(r, 150));
      setTopProgress(85, true);
      await new Promise(r=>setTimeout(r, 100));
      setTopProgress(100, true);
      await new Promise(r=>setTimeout(r, 200));
      setTopProgress(null, false);
    }

    // Time range computation with fallback
    function computeTimeRange(value) {
      const to = new Date();
      let from;
      switch(value) {
        case '30m': from = new Date(Date.now() - 30*60*1000); break;
        case '1h': from = new Date(Date.now() - 60*60*1000); break;
        case '3h': from = new Date(Date.now() - 3*60*60*1000); break;
        case '4h': from = new Date(Date.now() - 4*60*60*1000); break;
        case '5h': from = new Date(Date.now() - 5*60*60*1000); break;
        case '24h': from = new Date(Date.now() - 24*60*60*1000); break;
        case 'auto':
        default: from = new Date(Date.now() - 24*60*60*1000); break; // auto is 1min–24h but APIs need exact; we broaden logically
      }
      return { fromISO: from.toISOString(), toISO: to.toISOString(), from, to };
    }

    // Storage
    function loadSettings() {
      try {
        const s = JSON.parse(localStorage.getItem('studio.settings') || '{}');
        state.newsKeys = s.newsKeys || [];
        state.geminiKeys = s.geminiKeys || [];
        state.useGrounding = s.useGrounding ?? true;
        state.searchResearcherKeys = s.searchResearcherKeys || ['AIzaSyBUbvqI71oYpEItmjZDCiCDl0pzgtJP0PI'];
        state.youtubeKeys = s.youtubeKeys || ['AIzaSyBDoJ_bQgMdtvRaff0s-s01yKUP6t2RUnI'];
        $('#newsKey1').value = state.newsKeys[0] || '';
        $('#newsKey2').value = state.newsKeys[1] || '';
        $('#geminiKeys').value = (state.geminiKeys || []).join('\n');
        $('#searchResearcherKeys').value = (state.searchResearcherKeys || []).join('\n');
        $('#youtubeKeys').value = (state.youtubeKeys || []).join('\n');
        $('#groundingToggle').checked = !!state.useGrounding;
      } catch {}
    }
    function saveSettings() {
      state.newsKeys = [ $('#newsKey1').value.trim(), $('#newsKey2').value.trim() ].filter(Boolean);
      state.geminiKeys = $('#geminiKeys').value.split('\n').map(s=>s.trim()).filter(Boolean);
      state.searchResearcherKeys = $('#searchResearcherKeys').value.split('\n').map(s=>s.trim()).filter(Boolean);
      state.youtubeKeys = $('#youtubeKeys').value.split('\n').map(s=>s.trim()).filter(Boolean);
      state.useGrounding = $('#groundingToggle').checked;
      localStorage.setItem('studio.settings', JSON.stringify({
        newsKeys: state.newsKeys, geminiKeys: state.geminiKeys,
        useGrounding: state.useGrounding,
        searchResearcherKeys: state.searchResearcherKeys,
        youtubeKeys: state.youtubeKeys
      }));
    }
    function persistAll() {
      localStorage.setItem('studio.articles', JSON.stringify(state.articles));
      localStorage.setItem('studio.gold', JSON.stringify(state.gold));
      localStorage.setItem('studio.likes', JSON.stringify(state.likes));
      localStorage.setItem('studio.bookmarks', JSON.stringify(state.bookmarks));
      localStorage.setItem('studio.cache', JSON.stringify(state.searchCache));
    }
    function loadAll() {
      try {
        state.articles = JSON.parse(localStorage.getItem('studio.articles') || '[]');
        state.gold = JSON.parse(localStorage.getItem('studio.gold') || '[]');
        state.likes = JSON.parse(localStorage.getItem('studio.likes') || '[]');
        state.bookmarks = JSON.parse(localStorage.getItem('studio.bookmarks') || '[]');
        state.searchCache = JSON.parse(localStorage.getItem('studio.cache') || '{}');
      } catch {}
    }

    // Clock
    function tickClock() {
      const d = now();
      $('#clock').textContent = `${d.toLocaleString([], { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
    }
    setInterval(tickClock, 1000); tickClock();

    // Icons
    renderIcons();

    // Draft cache key
    function buildParams() {
      const country = $('#countrySelect').value;
      const stateR = $('#stateInput').value.trim();
      const district = $('#districtInput').value.trim();
      const city = $('#cityInput').value.trim();
      const category = $('#categorySelect').value;
      const time = $('#timeSelect').value;
      const keywords = $('#keywordBar').value.trim();
      const chips = $$('.chip.chip-active').map(c=>c.dataset.chip);
      return { country, stateR, district, city, category, time, keywords, chips };
    }
    function cacheKeyFromParams(p) { return JSON.stringify(p); }

    // News engines
    async function fetchNewsAPI(params, fromISO, toISO) {
      const keys = state.newsKeys.slice();
      const qParts = [];
      if (params.keywords) qParts.push(params.keywords);
      if (params.city) qParts.push(params.city);
      if (params.district) qParts.push(params.district);
      if (params.stateR) qParts.push(params.stateR);
      if (params.country) qParts.push(params.country);
      if (params.category && params.category!=='all') qParts.push(params.category);
      if (params.chips?.length) qParts.push(params.chips.join(' OR '));
      const q = qParts.join(' ');
      const url = (key, pageSize=50) => `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&from=${encodeURIComponent(fromISO)}&to=${encodeURIComponent(toISO)}&language=en&sortBy=publishedAt&pageSize=${pageSize}&apiKey=${key}`;
      for (const k of keys) {
        try {
          const res = await fetch(url(k, 50));
          if (!res.ok) throw new Error('News API error');
          const data = await res.json();
          if (Array.isArray(data.articles)) {
            return data.articles.map(a=>({
              id: uid(),
              type: 'news',
              title: a.title,
              description: a.description,
              url: a.url,
              image: a.urlToImage || '',
              source: (a.source && a.source.name) || 'Source',
              publishedAt: a.publishedAt ? new Date(a.publishedAt).toISOString() : new Date().toISOString()
            }));
          }
        } catch(e) {
          try {
            const prox = `https://api.allorigins.win/get?url=${encodeURIComponent(url(k, 50))}`;
            const res2 = await fetch(prox);
            const data2 = await res2.json();
            const parsed = JSON.parse(data2.contents || '{}');
            if (Array.isArray(parsed.articles)) {
              return parsed.articles.map(a=>({
                id: uid(), type:'news', title: a.title, description:a.description, url:a.url,
                image:a.urlToImage || '', source:(a.source && a.source.name) || 'Source',
                publishedAt: a.publishedAt ? new Date(a.publishedAt).toISOString() : new Date().toISOString()
              }));
            }
          } catch(_) {}
        }
      }
      return [];
    }

    // Google News RSS via Jina Reader proxy
    async function fetchGoogleNews(params, fromISO) {
      const qParts = [];
      if (params.keywords) qParts.push(params.keywords);
      if (params.category && params.category!=='all') qParts.push(params.category);
      if (params.city) qParts.push(params.city);
      if (params.stateR) qParts.push(params.stateR);
      if (params.country) qParts.push(params.country);
      const q = qParts.join(' ');
      const url = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-US&gl=US&ceid=US:en`;
      try {
        const res = await fetch(`https://r.jina.ai/http://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-US&gl=US&ceid=US:en`);
        const text = await res.text();
        const items = [];
        const regex = /<item>[\s\S]*?<title><!\[CDATA\[(.*?)\]\]><\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<pubDate>(.*?)<\/pubDate>/g;
        let m;
        while ((m = regex.exec(text)) !== null) {
          const title = m[1]; const link = m[2]; const pub = new Date(m[3]).toISOString();
          if (new Date(pub) >= new Date(fromISO)) {
            items.push({
              id: uid(), type:'news', title, description:'', url: link, image:'', source:'Google News', publishedAt: pub
            });
          }
        }
        return items;
      } catch { return []; }
    }

    // YouTube recent videos
    async function fetchYouTube(params, fromISO) {
      const keys = state.youtubeKeys.slice();
      if (!keys.length) return [];
      const qParts = [];
      if (params.category && params.category!=='all') qParts.push(params.category);
      if (params.keywords) qParts.push(params.keywords);
      if (params.city) qParts.push(params.city);
      if (params.stateR) qParts.push(params.stateR);
      if (params.country) qParts.push(params.country);
      const q = qParts.join(' ');
      for (const key of keys) {
        try {
          const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&maxResults=15&type=video&q=${encodeURIComponent(q)}&publishedAfter=${encodeURIComponent(fromISO)}&key=${encodeURIComponent(key)}`;
          const res = await fetch(url);
          if (!res.ok) continue;
          const data = await res.json();
          if (Array.isArray(data.items)) {
            return data.items.map(it=>({
              id: uid(), type:'video',
              title: it.snippet.title,
              description: it.snippet.description,
              url: `https://www.youtube.com/watch?v=${it.id.videoId}`,
              image: it.snippet.thumbnails?.medium?.url || '',
              source: it.snippet.channelTitle || 'YouTube',
              publishedAt: it.snippet.publishedAt
            }));
          }
        } catch {}
      }
      return [];
    }

    // Trending (Google Trends via Jina fetch of daily page)
    async function preloadTrends(countryCode='US') {
      if (state.trends[countryCode]) return state.trends[countryCode];
      try {
        const ymdStr = `${now().getFullYear()}${pad2(now().getMonth()+1)}${pad2(now().getDate())}`;
        const url = `https://trends.google.com/trends/trendingsearches/daily?geo=${countryCode}`;
        const res = await fetch(`https://r.jina.ai/http://trends.google.com/trends/trendingsearches/daily?geo=${countryCode}`);
        const text = await res.text();
        const items = [];
        const re = /<span class="title">([^<]+)<\/span>/g;
        let m; let guard=0;
        while ((m = re.exec(text)) !== null && guard<50) { items.push(m[1]); guard++; }
        state.trends[countryCode] = items.slice(0, 30);
        return state.trends[countryCode];
      } catch { state.trends[countryCode]=[]; return []; }
    }

    function mergeAndSortResults(...lists) {
      const all = [].concat(...lists);
      const seen = new Set();
      const dedup = [];
      all.forEach(it=>{
        const key = (safeText(it.title).toLowerCase() + '|' + (it.source||'') ).slice(0,200);
        if (seen.has(key)) return; seen.add(key);
        dedup.push(it);
      });
      dedup.sort((a,b)=> new Date(b.publishedAt||0) - new Date(a.publishedAt||0));
      return dedup;
    }

    // Grounded Gemini call
    async function callGemini(prompt, controller) {
      const keys = state.geminiKeys.slice();
      let lastErr = null;
      for (const key of keys) {
        for (const model of state.modelCandidates) {
          try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`, {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              signal: controller?.signal,
              body: JSON.stringify({
                contents: [{ role: 'user', parts: [{ text: prompt }]}],
                tools: state.useGrounding ? [{ googleSearch: {} }] : undefined,
                safetySettings: [
                  { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
                  { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
                  { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
                  { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }
                ],
                generationConfig: { temperature: 0.7, topK: 40, topP: 0.9, maxOutputTokens: 2048 }
              })
            });
            if (!res.ok) { lastErr = new Error('model error'); continue; }
            const data = await res.json();
            const text = data?.candidates?.[0]?.content?.parts?.map(p=>p.text).join('') || '';
            if (text) return text;
          } catch(e){ lastErr = e; }
        }
      }
      throw lastErr || new Error('No model available');
    }

    function buildArticlePrompt({dateStr, sourceTitle, sourceUrl, sourceText, thumb}) {
      const context = `
Date: ${dateStr}
Source Title: ${safeText(sourceTitle)}
Source URL: ${sourceUrl}
Source Extract (may be partial): 
${sourceText}
------
You are an elite content strategist for Opera News Hub. Using only the verifiable facts above, produce ONE new article that is fully original and passes quality checks:
- 500 to 1000 words, mobile-first short paragraphs (2–4 sentences).
- Absolutely no plagiarism; do not copy phrasing.
- Clear, authoritative tone; provide context and background.
- Do not use markdown or inline styling; do not add any headings or subheadings inside the article body.
- Avoid repetition and filler; correct grammar and punctuation.
- Anchor the story to today's date and explain why it matters now.
- Include a strong, non-clickbait headline (8–14 words).
- Use the exact final output format below, nothing else.

Mandatory Output Format:
Suggested Thumbnail Image: ${thumb}
Headline: <write the headline here>
(Article Content Begins Here)
<write the full article body here with paragraphs separated by blank lines. No headings inside.>
`;
      return context;
    }

    function buildFixPrompt(kind, original) {
      const head = `You are editing an Opera News Hub article to fix a "${kind}" problem. Keep the same topic and facts, maintain 500–1000 words, no markdown, no headings inside the article body. Maintain the mandatory structure lines at top. Improve clarity and originality.`;
      return `${head}\n\nOriginal:\n${original}\n\nReturn only the corrected article in the same format.`;
    }

    // Validation & AI detection (unchanged)
    function detectAI(text) {
      const sents = sentenceSplit(text).filter(s=>s.trim().length>0);
      const words = safeText(text).toLowerCase().split(/\s+/).filter(Boolean);
      const uniq = new Set(words);
      const typeToken = uniq.size / Math.max(words.length,1);
      const avgLen = avg(sents.map(s=>s.split(/\s+/).length));
      const rep = repetitionScore(text);
      let score = 0;
      score += (typeToken < 0.42 ? 30 : typeToken < 0.5 ? 20 : typeToken < 0.6 ? 10 : 2);
      score += (avgLen >= 18 && avgLen <= 24 ? 25 : avgLen >= 14 && avgLen <= 28 ? 15 : 5);
      score += (rep > 0.18 ? 35 : rep > 0.12 ? 25 : rep > 0.08 ? 15 : 5);
      score = Math.min(100, Math.max(0, Math.round(score)));
      return score;
    }
    function repetitionScore(text) {
      const sents = sentenceSplit(text).map(s=>s.toLowerCase());
      const counts = {};
      sents.forEach(s=>counts[s]=(counts[s]||0)+1);
      const repeats = Object.values(counts).filter(c=>c>1).reduce((a,b)=>a+b-1,0);
      return repeats / Math.max(sents.length,1);
    }
    function simHashTokens(text) {
      const tokens = safeText(text).toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean);
      const base = {};
      for (let i=0;i<tokens.length-3;i++) {
        const shingle = tokens.slice(i,i+4).join(' ');
        base[shingle] = (base[shingle]||0)+1;
      }
      return base;
    }
    function jaccard(a,b) {
      const keysA = new Set(Object.keys(a)); const keysB = new Set(Object.keys(b));
      const inter = new Set([...keysA].filter(k=>keysB.has(k)));
      const union = new Set([...keysA, ...keysB]);
      return inter.size / Math.max(union.size,1);
    }
    async function validateArticle(art) {
      const checks = [];
      const recency = art.source && art.source.publishedAt ? ymd(new Date(art.source.publishedAt))===ymd(new Date()) : true;
      checks.push({key:'recency', label:'Recency (today)', pass: recency, fixable: false});

      const hasThumb = /^Suggested Thumbnail Image:\s?https?:\/\//im.test(art.content||'');
      const hasHeadline = /^Headline:\s?.+/im.test(art.content||'');
      const hasStart = /\(Article Content Begins Here\)/.test(art.content||'');
      const bidx = (art.content||'').indexOf('(Article Content Begins Here)');
      const body = bidx>=0 ? art.content.slice(bidx + '(Article Content Begins Here)'.length).trim() : (art.content||'');
      const words = wordCount(body);
      const noMarkdown = !/[#*_`>{}\[\]]/.test(body);

      checks.push({key:'structure', label:'Mandatory format lines present', pass: hasThumb && hasHeadline && hasStart, fixable: true});
      checks.push({key:'length', label:'Word count 500–1000', pass: words>=500 && words<=1000, fixable: true});
      checks.push({key:'noMarkdown', label:'No markdown / headings inside', pass: noMarkdown && !/^#+\s/m.test(body), fixable: true});

      const typos = (body.match(/\bteh\b|\brecieve\b|\boccured\b|\bdefinately\b/gi) || []).length;
      checks.push({key:'grammar', label:'Grammar & spelling clean', pass: typos===0, fixable: true});

      const repScore = repetitionScore(body);
      checks.push({key:'repetition', label:'No repetition', pass: repScore < 0.12, meta: Math.round(repScore*100)+'%', fixable: true});

      let plagPass = true, plagRatio = 0;
      if (art.sourceExtract) {
        const A = simHashTokens(body);
        const B = simHashTokens(art.sourceExtract);
        plagRatio = jaccard(A,B);
        plagPass = plagRatio < 0.12;
      }
      checks.push({key:'plagiarism', label:'Originality vs source', pass: plagPass, meta: Math.round(plagRatio*100)+'%', fixable: true});

      const headMatch = (art.content||'').match(/^Headline:\s?(.+)$/m);
      const head = headMatch ? headMatch[1].trim() : '';
      const hw = wordCount(head);
      const cb = /(shocking|you won’t believe|breaking!!!|click here)/i.test(head);
      checks.push({key:'headline', label:'Headline quality', pass: hw>=8 && hw<=14 && !cb, fixable: true});

      const banned = /(hate|kill them all|racial slur|genocide|nsfw)/i.test(body);
      checks.push({key:'safety', label:'Safe & respectful', pass: !banned, fixable: true});

      const thumbURLMatch = (art.content||'').match(/^Suggested Thumbnail Image:\s?(https?:\/\/\S+)/m);
      checks.push({key:'thumb', label:'Thumbnail URL present', pass: !!thumbURLMatch, fixable: true});

      const aiScore = detectAI(body);
      art.aiScore = aiScore;
      checks.push({key:'ai', label:'AI content likelihood < 55%', pass: aiScore < 55, meta: aiScore+'%', fixable: true});

      art.checks = checks;
      updateValidationUI(art);
      return checks;
    }

    // Charts
    let overallChart, aiChart;
    function ensureCharts() {
      const ctxOverall = $('#overallChart').getContext('2d');
      const ctxAI = $('#aiGauge').getContext('2d');
      if (!overallChart) {
        overallChart = new Chart(ctxOverall, {
          type: 'doughnut',
          data: { labels: ['Pass','Fail'], datasets: [{ data: [0,100], backgroundColor: ['#84cc16','#ef4444'], borderWidth: 0 }]},
          options: { cutout: '72%', plugins: { legend: { display: false }}, responsive: true, maintainAspectRatio: false }
        });
      }
      if (!aiChart) {
        aiChart = new Chart(ctxAI, {
          type: 'doughnut',
          data: { labels: ['AI-likelihood','Human-likeness'], datasets: [{ data: [0,100], backgroundColor: ['#f59e0b','#22c55e'], borderWidth: 0 }]},
          options: { cutout: '72%', plugins: { legend: { display: false }}, responsive: true, maintainAspectRatio: false }
        });
      }
    }
    function updateValidationUI(art) {
      ensureCharts();
      const passCount = art.checks.filter(c=>c.pass).length;
      const total = art.checks.length;
      const pct = Math.round((passCount/Math.max(total,1))*100);
      $('#overallPct').textContent = pct;
      overallChart.data.datasets[0].data = [pct, 100-pct];
      overallChart.update();
      const ai = art.aiScore || 0;
      $('#aiPct').textContent = ai;
      aiChart.data.datasets[0].data = [ai, 100-ai];
      aiChart.update();
      $('#activeArticleMeta').textContent = art.title ? safeText(art.title).slice(0, 120) : 'Active article';
      const list = $('#checkList');
      list.innerHTML = '';
      art.checks.forEach(ch=>{
        const li = document.createElement('li');
        const badgeClass = ch.pass ? 'status-pass' : (ch.key==='ai' && !ch.pass ? 'status-warn' : 'status-fail');
        li.className = 'flex items-center justify-between gap-2';
        li.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="badge ${badgeClass}">${ch.pass ? 'Pass' : 'Check'}</span>
            <span class="text-sm">${ch.label}${ch.meta?` • ${ch.meta}`:''}</span>
          </div>
          <div class="flex items-center gap-2">
            ${ch.fixable ? `<button data-fix="${ch.key}" class="btn btn-ghost px-2 py-1 text-xs"><i data-lucide="wrench" class="w-4 h-4"></i> Fix</button>` : ''}
          </div>
        `;
        list.appendChild(li);
      });
      renderIcons();
    }

    // Render Results
    function renderResults() {
      const wrap = $('#results');
      wrap.innerHTML = '';
      if (!state.results.length) { $('#resultsEmpty').classList.remove('hidden'); return; }
      $('#resultsEmpty').classList.add('hidden');
      state.results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'rounded-xl overflow-hidden border border-white/10 bg-[#0B0C0F] flex flex-col';
        card.innerHTML = `
          <div class="relative">
            <img src="${item.image || 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80'}" alt="" class="w-full h-32 object-cover">
            <div class="absolute top-2 right-2 flex gap-2">
              <button data-like="${item.id}" class="bg-black/60 hover:bg-black/80 text-xs px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                <i data-lucide="heart" class="w-4 h-4"></i>
              </button>
              <button data-bookmark="${item.id}" class="bg-black/60 hover:bg-black/80 text-xs px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                <i data-lucide="bookmark" class="w-4 h-4"></i>
              </button>
              <button data-id="${item.id}" class="selectBtn bg-black/60 hover:bg-black/80 text-xs px-2 py-1 rounded-lg border border-white/10">Select</button>
            </div>
          </div>
          <div class="p-3 flex-1 flex flex-col">
            <div class="text-sm font-medium line-clamp-2">${item.title || 'Untitled'}</div>
            <div class="text-xs text-gray-400 mt-1 line-clamp-2">${item.description || ''}</div>
            <div class="mt-auto flex items-center justify-between text-xs text-gray-400 pt-2">
              <a href="${item.url}" target="_blank" class="underline decoration-white/20 hover:text-indigo-300">Source</a>
              <span>${new Date(item.publishedAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
            </div>
          </div>
        `;
        wrap.appendChild(card);
      });
      renderIcons();
      $$('.selectBtn', wrap).forEach(b=>{
        b.addEventListener('click', ()=>{
          const id = b.dataset.id;
          const it = state.results.find(x=>x.id===id);
          if (!it) return;
          if (!state.selected.find(x=>x.id===id)) state.selected.push(it);
          renderSelected();
        });
      });
      $$('button[data-like]').forEach(b=>{
        b.addEventListener('click', ()=>{
          const id = b.dataset.like;
          const it = state.results.find(x=>x.id===id);
          if (!it) return;
          if (!state.likes.find(x=>x.url===it.url)) state.likes.unshift({ ...it, savedAt: Date.now() });
          persistAll(); renderDrawerLists(); toast('Added to Liked');
        });
      });
      $$('button[data-bookmark]').forEach(b=>{
        b.addEventListener('click', ()=>{
          const id = b.dataset.bookmark;
          const it = state.results.find(x=>x.id===id);
          if (!it) return;
          if (!state.bookmarks.find(x=>x.url===it.url)) state.bookmarks.unshift({ ...it, savedAt: Date.now() });
          persistAll(); renderDrawerLists(); toast('Bookmarked');
        });
      });
    }

    function renderSelected() {
      const list = $('#selectedList');
      list.innerHTML = '';
      state.selected.forEach(it=>{
        const row = document.createElement('div');
        row.className = 'flex items-center gap-2 text-sm';
        row.innerHTML = `
          <div class="w-9 h-9 rounded-lg overflow-hidden border border-white/10">
            <img src="${it.image || 'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80'}" class="w-full h-full object-cover" alt="">
          </div>
          <div class="flex-1 truncate">${it.title}</div>
          <button data-id="${it.id}" class="btn btn-ghost px-2 py-1"><i data-lucide="minus" class="w-4 h-4"></i></button>
        `;
        list.appendChild(row);
      });
      $('#selCount').textContent = state.selected.length;
      $('#generateBtn').disabled = state.selected.length===0;
      renderIcons();
      $$('#selectedList button').forEach(b=>{
        b.addEventListener('click', ()=>{
          const id=b.dataset.id;
          state.selected = state.selected.filter(x=>x.id!==id);
          renderSelected();
        });
      });
    }

    // Content extraction (CORS-safe via Jina Reader)
    async function fetchReadableText(url, controller) {
      try {
        const fixed = url.startsWith('http') ? url : `https://${url}`;
        const res = await fetch(`https://r.jina.ai/http://` + fixed.replace(/^https?:\/\//,''), { signal: controller?.signal });
        if (!res.ok) throw new Error('fetch fail');
        const txt = await res.text();
        return txt.slice(0, 12000);
      } catch {
        return '';
      }
    }

    // Search orchestrator with cache and time fallback
    async function searchAll(params) {
      const { fromISO, toISO, from, to } = computeTimeRange(params.time || 'auto');
      $('#fromDate').textContent = new Date(fromISO).toLocaleString();
      $('#toDate').textContent = new Date(toISO).toLocaleString();
      const key = cacheKeyFromParams(params);
      // show cached immediately if exists
      if (state.searchCache[key]?.items?.length) {
        state.results = state.searchCache[key].items;
        renderResults();
      }

      // Fetch fresh
      setTopProgress(10, true);
      const list1 = await fetchNewsAPI(params, fromISO, toISO);
      setTopProgress(35, true);
      const list2 = await fetchGoogleNews(params, fromISO);
      setTopProgress(55, true);
      const list3 = await fetchYouTube(params, fromISO);
      setTopProgress(75, true);

      let merged = mergeAndSortResults(list1, list2, list3);

      // If selected narrow range yields too few results, broaden to 24h
      if (!merged.length && params.time !== '24h') {
        const fb = computeTimeRange('24h');
        const fb1 = await fetchNewsAPI(params, fb.fromISO, fb.toISO);
        const fb2 = await fetchGoogleNews(params, fb.fromISO);
        const fb3 = await fetchYouTube(params, fb.fromISO);
        merged = mergeAndSortResults(fb1, fb2, fb3);
      }

      state.results = merged;
      state.searchCache[key] = { ts: Date.now(), items: merged, params };
      persistAll();
      renderResults();
      setTopProgress(100, true);
      await new Promise(r=>setTimeout(r, 150));
      setTopProgress(null, false);
      toast(`Found ${merged.length} items`);
    }

    // Articles rendering (unchanged except icons)
    function renderArticles() {
      const wrap = $('#articles');
      wrap.innerHTML = '';
      if (!state.articles.length) { $('#articlesEmpty').classList.remove('hidden'); return; }
      $('#articlesEmpty').classList.add('hidden');
      state.articles.forEach(a=>{
        const card = document.createElement('div');
        card.className = 'glass rounded-2xl p-4';
        const active = state.activeArticleId===a.id;
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                <img src="${a.image || 'https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80'}" class="w-full h-full object-cover" alt="">
              </div>
              <div>
                <div class="text-sm font-medium max-w-[60vw] md:max-w-[40vw] truncate">${a.title || 'Article'}</div>
                <div class="text-xs text-gray-400 truncate">${a.source?.source || a.source?.sourceName || ''}</div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button data-activate="${a.id}" class="btn btn-ghost ${active?'chip-active':''}">
                <i data-lucide="target" class="w-4 h-4"></i>
                Active
              </button>
              <button data-copy="${a.id}" class="btn btn-ghost">
                <i data-lucide="copy" class="w-4 h-4"></i>
                Copy
              </button>
              <button data-download="${a.id}" class="btn btn-ghost">
                <i data-lucide="download" class="w-4 h-4"></i>
                Download
              </button>
              <button data-delete="${a.id}" class="btn btn-ghost">
                <i data-lucide="trash" class="w-4 h-4"></i>
                Delete
              </button>
            </div>
          </div>
          <div class="mt-3">
            <textarea data-editor="${a.id}" rows="16" class="editor w-full bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-3 focus-ring text-sm" spellcheck="true">${a.content || ''}</textarea>
          </div>
        `;
        wrap.appendChild(card);
      });
      renderIcons();
      $$('button[data-activate]').forEach(b=>b.addEventListener('click', async ()=>{
        state.activeArticleId = b.dataset.activate;
        renderArticles();
        const art = state.articles.find(x=>x.id===state.activeArticleId);
        if (art) await validateArticle(art);
      }));
      $$('button[data-copy]').forEach(b=>b.addEventListener('click', ()=>{
        const art = state.articles.find(x=>x.id===b.dataset.copy);
        if (!art) return;
        navigator.clipboard.writeText(art.content || '').then(()=>toast('Copied'));
      }));
      $$('button[data-download]').forEach(b=>b.addEventListener('click', ()=>{
        const art = state.articles.find(x=>x.id===b.dataset.download);
        if (!art) return;
        const blob = new Blob([art.content||''], {type:'text/plain'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = (safeText(art.title).slice(0,60)||'article') + '.txt';
        a.click();
      }));
      $$('button[data-delete]').forEach(b=>b.addEventListener('click', ()=>{
        state.articles = state.articles.filter(x=>x.id!==b.dataset.delete);
        if (state.activeArticleId===b.dataset.delete) state.activeArticleId = state.articles[0]?.id || null;
        persistAll();
        renderArticles();
      }));
      $$('textarea[data-editor]').forEach(t=>{
        t.addEventListener('input', async ()=>{
          const id = t.getAttribute('data-editor');
          const art = state.articles.find(x=>x.id===id);
          if (!art) return;
          art.content = t.value;
          persistAll();
          if (state.activeArticleId===id) await validateArticle(art);
        });
      });
      if (!state.activeArticleId && state.articles[0]) state.activeArticleId = state.articles[0].id;
    }

    // Fix handlers (unchanged)
    async function fixIssue(key) {
      const art = state.articles.find(x=>x.id===state.activeArticleId);
      if (!art) return;
      if (key==='plagiarism') {
        art.content = await callGemini(buildFixPrompt('plagiarism / originality', art.content));
      } else if (key==='length') {
        art.content = await callGemini(buildFixPrompt('length (500–1000 words)', art.content));
      } else if (key==='structure') {
        art.content = await callGemini(buildFixPrompt('mandatory format lines', art.content));
      } else if (key==='noMarkdown') {
        art.content = await callGemini(buildFixPrompt('remove markdown and headings', art.content));
      } else if (key==='repetition') {
        art.content = await callGemini(buildFixPrompt('reduce repetition', art.content));
      } else if (key==='grammar') {
        art.content = await callGemini(buildFixPrompt('grammar & spelling', art.content));
      } else if (key==='headline') {
        art.content = await callGemini(buildFixPrompt('headline quality (no clickbait, 8–14 words)', art.content));
      } else if (key==='thumb') {
        const injected = (art.content||'').replace(/^Suggested Thumbnail Image:.*$/m, `Suggested Thumbnail Image: ${art.image}`).trim();
        art.content = injected.includes('Suggested Thumbnail Image:') ? injected : `Suggested Thumbnail Image: ${art.image}\n` + (art.content||'');
      } else if (key==='ai') {
        art.content = await callGemini(buildFixPrompt('humanlike cadence and narrative', art.content));
      }
      persistAll();
      renderArticles();
      await validateArticle(art);
      toast('Issue fixed');
    }

    // Generate with cancel/resume
    async function generateFromSelection(item, controller) {
      const txt = await fetchReadableText(item.url, controller);
      const dateStr = now().toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
      const prompt = buildArticlePrompt({ dateStr, sourceTitle: item.title, sourceUrl: item.url, sourceText: txt, thumb: item.image });
      const out = await callGemini(prompt, controller);
      const art = {
        id: uid(),
        title: item.title,
        url: item.url,
        image: item.image,
        source: { source: item.source, publishedAt: item.publishedAt },
        sourceExtract: txt,
        content: out,
        checks: [],
        aiScore: 0
      };
      state.articles.unshift(art);
      state.activeArticleId = art.id;
      persistAll();
      renderArticles();
      await validateArticle(art);
    }

    async function startGeneration() {
      if (!state.selected.length) return;
      if (state.generating.running) return;
      state.generating.running = true;
      state.generating.canceled = false;
      state.generating.queue = state.selected.slice();
      state.generating.index = 0;
      state.generating.controller = new AbortController();
      $('#cancelGenBtn').disabled = false;
      $('#resumeGenBtn').disabled = true;
      setTopProgress(10, true);
      toast('Generating...');
      try {
        for (; state.generating.index < state.generating.queue.length; state.generating.index++) {
          if (state.generating.canceled) break;
          const it = state.generating.queue[state.generating.index];
          setTopProgress(10 + Math.round((state.generating.index/state.generating.queue.length)*80), true);
          await generateFromSelection(it, state.generating.controller);
        }
      } catch(e) {
        if (state.generating.canceled) {
          toast('Generation canceled');
        } else {
          toast('A generation failed');
        }
      } finally {
        setTopProgress(100, true);
        await new Promise(r=>setTimeout(r, 200));
        setTopProgress(null, false);
        state.selected = [];
        renderSelected();
        $('#cancelGenBtn').disabled = true;
        $('#resumeGenBtn').disabled = !state.generating.running && state.generating.canceled && (state.generating.index < state.generating.queue.length);
        state.generating.running = false;
      }
    }

    function cancelGeneration() {
      if (!state.generating.running) return;
      if (!confirm('Cancel generation in progress?')) return;
      state.generating.canceled = true;
      try { state.generating.controller?.abort(); } catch {}
      state.generating.running = false;
      $('#cancelGenBtn').disabled = true;
      $('#resumeGenBtn').disabled = false;
      setTopProgress(null, false);
    }
    async function resumeGeneration() {
      if (state.generating.running) return;
      if (state.generating.index >= state.generating.queue.length) return;
      state.generating.canceled = false;
      state.generating.running = true;
      state.generating.controller = new AbortController();
      $('#cancelGenBtn').disabled = false;
      $('#resumeGenBtn').disabled = true;
      setTopProgress(10, true);
      try {
        for (; state.generating.index < state.generating.queue.length; state.generating.index++) {
          if (state.generating.canceled) break;
          const it = state.generating.queue[state.generating.index];
          setTopProgress(10 + Math.round((state.generating.index/state.generating.queue.length)*80), true);
          await generateFromSelection(it, state.generating.controller);
        }
      } catch {
      } finally {
        setTopProgress(100, true);
        await new Promise(r=>setTimeout(r, 200));
        setTopProgress(null, false);
        $('#cancelGenBtn').disabled = true;
        $('#resumeGenBtn').disabled = true;
        state.generating.running = false;
      }
    }

    // Gold
    function renderGold() {
      $('#goldCount').textContent = `Gold: ${state.gold.length}`;
      const wrap = $('#goldList');
      wrap.innerHTML = '';
      if (!state.gold.length) { $('#goldEmpty').classList.remove('hidden'); return; }
      $('#goldEmpty').classList.add('hidden');
      state.gold.forEach(a=>{
        const card = document.createElement('div');
        card.className = 'rounded-xl border border-yellow-300/30 bg-yellow-500/5 p-3';
        card.innerHTML = `
          <div class="flex items-center gap-2">
            <i data-lucide="medal" class="w-4 h-4 text-yellow-300"></i>
            <div class="text-sm font-medium truncate">${a.title || 'Article'}</div>
          </div>
          <div class="text-xs text-gray-400 mt-1 line-clamp-2">${(a.content||'').slice(0,140)}</div>
          <div class="mt-2 flex items-center justify-between">
            <a href="${a.url}" target="_blank" class="text-xs text-indigo-300 underline">Source</a>
            <button data-copygold="${a.id}" class="btn btn-ghost px-2 py-1 text-xs">Copy</button>
          </div>
        `;
        wrap.appendChild(card);
      });
      renderIcons();
      $$('button[data-copygold]').forEach(b=>{
        b.addEventListener('click', ()=>{
          const a = state.gold.find(x=>x.id===b.dataset.copygold);
          if (a) navigator.clipboard.writeText(a.content||'');
          toast('Copied');
        });
      });
      renderStats();
    }

    // Stats (fully = gold)
    function renderStats() {
      const nowTs = Date.now();
      const day = 24*60*60*1000;
      const week = 7*day;
      const month = 30*day;
      const within = (ms) => state.gold.filter(g => (g.goldAt || g.createdAt || nowTs) >= (nowTs - ms)).length;
      $('#statDay').textContent = within(day);
      $('#statWeek').textContent = within(week);
      $('#statMonth').textContent = within(month);
    }

    function renderDrawerLists() {
      $('#likeCount').textContent = state.likes.length;
      $('#bookmarkCount').textContent = state.bookmarks.length;
      const likeList = $('#likeList'); likeList.innerHTML = '';
      state.likes.slice(0, 50).forEach(it=>{
        const row = document.createElement('div');
        row.className = 'flex items-center gap-2';
        row.innerHTML = `
          <div class="w-8 h-8 rounded-md overflow-hidden border border-white/10"><img src="${it.image||'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80'}" class="w-full h-full object-cover"></div>
          <a class="truncate hover:text-indigo-300 underline decoration-white/20" href="${it.url}" target="_blank">${it.title}</a>
        `;
        likeList.appendChild(row);
      });
      const bmList = $('#bookmarkList'); bmList.innerHTML = '';
      state.bookmarks.slice(0, 50).forEach(it=>{
        const row = document.createElement('div');
        row.className = 'flex items-center gap-2';
        row.innerHTML = `
          <div class="w-8 h-8 rounded-md overflow-hidden border border-white/10"><img src="${it.image||'https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80'}" class="w-full h-full object-cover"></div>
          <a class="truncate hover:text-indigo-300 underline decoration-white/20" href="${it.url}" target="_blank">${it.title}</a>
        `;
        bmList.appendChild(row);
      });
    }

    // UI events
    $('#openSettings').addEventListener('click', ()=>{ $('#settingsModal').classList.remove('hidden'); $('#settingsModal').classList.add('flex'); });
    $('#closeSettings').addEventListener('click', ()=>{ $('#settingsModal').classList.add('hidden'); $('#settingsModal').classList.remove('flex'); });
    $('#saveSettings').addEventListener('click', ()=>{ saveSettings(); toast('Settings saved'); $('#settingsModal').classList.add('hidden'); $('#settingsModal').classList.remove('flex'); });

    $('#openGuidelines').addEventListener('click', ()=>{ $('#guideModal').classList.remove('hidden'); $('#guideModal').classList.add('flex'); });
    $('#closeGuidelines').addEventListener('click', ()=>{ $('#guideModal').classList.add('hidden'); $('#guideModal').classList.remove('flex'); });

    $('#openDrawer').addEventListener('click', ()=>{ $('#drawer').style.transform='translateX(0%)'; });
    $('#closeDrawer').addEventListener('click', ()=>{ $('#drawer').style.transform='translateX(-110%)'; });

    // Chips toggle
    $$('.chip').forEach(c=>{
      c.addEventListener('click', ()=>{ c.classList.toggle('chip-active'); });
    });

    // Suggest modal
    $('#openSuggest').addEventListener('click', async ()=>{
      const cc = $('#countrySelect').value || 'US';
      const topics = await preloadTrends(cc);
      const wrap = $('#trendWrap');
      wrap.innerHTML = '';
      topics.forEach(t=>{
        const btn = document.createElement('button');
        btn.className = 'btn btn-ghost w-full justify-between';
        btn.innerHTML = `<span class="truncate">${t}</span>
          <span class="flex items-center gap-2">
            <i data-lucide="heart" class="w-4 h-4"></i>
            <i data-lucide="bookmark" class="w-4 h-4"></i>
            <i data-lucide="plus" class="w-4 h-4"></i>
          </span>`;
        btn.addEventListener('click', ()=>{ $('#keywordBar').value = t; });
        wrap.appendChild(btn);
      });
      renderIcons();
      $('#suggestModal').classList.remove('hidden'); $('#suggestModal').classList.add('flex');
    });
    $('#closeSuggest').addEventListener('click', ()=>{ $('#suggestModal').classList.add('hidden'); $('#suggestModal').classList.remove('flex'); });

    // Search
    async function handleSearch(randomize=false) {
      const p = buildParams();
      if (!p.country) { toast('Please select a country'); return; }
      if (randomize) {
        if (!p.category || p.category==='all') {
          const cats = ['Politics','Business','Sports','Technology','Entertainment','Health','Science','World','Football','Travel','Lifestyle','Fashion','Education','Environment','Motoring','Career & Jobs'];
          p.category = cats[Math.floor(Math.random()*cats.length)];
        }
        if (!p.time || p.time==='auto') {
          const times = ['30m','1h','3h','4h','5h','24h'];
          p.time = times[Math.floor(Math.random()*times.length)];
        }
        if (!p.keywords) {
          const cc = p.country || 'US';
          const t = await preloadTrends(cc);
          p.keywords = t[Math.floor(Math.random()*Math.max(1,t.length))] || '';
        }
      }
      const key = cacheKeyFromParams(p);
      // skeleton
      $('#results').innerHTML = '';
      $('#resultsEmpty').classList.add('hidden');
      const skel = document.createElement('div');
      skel.className = 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4';
      for (let i=0;i<9;i++){ const s=document.createElement('div'); s.className='rounded-xl border border-white/10 bg-[#0B0C0F] h-48 animate-pulse'; skel.appendChild(s); }
      $('#results').appendChild(skel);
      await searchAll(p);
    }

    $('#autoSearchBtn').addEventListener('click', ()=> handleSearch(true));
    $('#searchBtn').addEventListener('click', ()=> handleSearch(false));

    // Generate controls
    $('#generateBtn').addEventListener('click', startGeneration);
    $('#cancelGenBtn').addEventListener('click', cancelGeneration);
    $('#resumeGenBtn').addEventListener('click', resumeGeneration);

    // Re-check current
    $('#recheckBtn').addEventListener('click', async ()=>{
      const art = state.articles.find(x=>x.id===state.activeArticleId);
      if (!art) return;
      await validateArticle(art);
      toast('Validation updated');
    });
    $('#revalidateAllBtn').addEventListener('click', async ()=>{
      for (const a of state.articles) { await validateArticle(a); }
      toast('All articles re-checked');
    });

    // Automation buttons
    $('#humanizeBtn').addEventListener('click', async ()=>{
      const art = state.articles.find(x=>x.id===state.activeArticleId);
      if (!art) return;
      art.content = await callGemini(buildFixPrompt('humanlike cadence and narrative', art.content));
      persistAll(); renderArticles(); await validateArticle(art); toast('Humanized');
    });
    $('#proofBtn').addEventListener('click', async ()=>{
      const art = state.articles.find(x=>x.id===state.activeArticleId);
      if (!art) return;
      art.content = await callGemini(buildFixPrompt('grammar & punctuation', art.content));
      persistAll(); renderArticles(); await validateArticle(art); toast('Proofread complete');
    });
    $('#plagReduceBtn').addEventListener('click', async ()=>{
      const art = state.articles.find(x=>x.id===state.activeArticleId);
      if (!art) return;
      art.content = await callGemini(buildFixPrompt('originality and paraphrasing while preserving facts', art.content));
      persistAll(); renderArticles(); await validateArticle(art); toast('Similarity reduced');
    });
    $('#addGoldBtn').addEventListener('click', async ()=>{
      const art = state.articles.find(x=>x.id===state.activeArticleId);
      if (!art) return;
      await validateArticle(art);
      const allPass = art.checks.every(c=>c.pass);
      if (!allPass) { toast('Resolve all checks first'); return; }
      if (!state.gold.find(x=>x.id===art.id)) state.gold.unshift({ ...art, goldAt: Date.now() });
      persistAll();      renderGold();
      toast('Added to gold');
    });

    // Export all articles as a single text file
    $('#exportAllBtn').addEventListener('click', () => {
      if (!state.articles.length) { toast('No articles to export'); return; }
      const ts = new Date();
      const stamp = `${ts.getFullYear()}${pad2(ts.getMonth()+1)}${pad2(ts.getDate())}_${pad2(ts.getHours())}${pad2(ts.getMinutes())}${pad2(ts.getSeconds())}`;
      const content = state.articles.map((a, i) => {
        const title = safeText(a.title || `Article ${i+1}`);
        return [
          `=== Article ${i+1}: ${title} ===`,
          a.content || ''
        ].join('\n');
      }).join('\n\n');
      const blob = new Blob([content], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `opera_newsroom_export_${stamp}.txt`;
      a.click();
    });

    // Clear all generated articles
    $('#clearAllBtn').addEventListener('click', ()=>{
      if (!state.articles.length) { toast('Nothing to clear'); return; }
      if (!confirm('Remove all generated articles? This cannot be undone.')) return;
      state.articles = [];
      state.activeArticleId = null;
      persistAll();
      renderArticles();
      // reset validation UI
      ensureCharts();
      $('#overallPct').textContent = '0';
      overallChart.data.datasets[0].data = [0, 100]; overallChart.update();
      $('#aiPct').textContent = '0';
      aiChart.data.datasets[0].data = [0, 100]; aiChart.update();
      $('#checkList').innerHTML = '';
      $('#activeArticleMeta').textContent = 'No active article';
      toast('All articles cleared');
    });

    // Clear gold list
    $('#clearGoldBtn').addEventListener('click', ()=>{
      if (!state.gold.length) { toast('No gold articles to clear'); return; }
      if (!confirm('Clear all gold articles?')) return;
      state.gold = [];
      persistAll();
      renderGold();
      toast('Gold list cleared');
    });

    // Delegate "Fix" actions in validation panel
    $('#validationColumn').addEventListener('click', async (e)=>{
      const btn = e.target.closest('button[data-fix]');
      if (!btn) return;
      const key = btn.getAttribute('data-fix');
      await fixIssue(key);
    });

    // Enter-to-search on keyword bar
    $('#keywordBar').addEventListener('keydown', (e)=>{
      if (e.key === 'Enter') handleSearch(false);
    });

    // Initial boot
    (function init(){
      loadSettings();
      loadAll();
      renderDrawerLists();
      renderArticles();
      renderGold();
      // Validate active article if present
      const art = state.articles.find(x=>x.id===state.activeArticleId) || state.articles[0];
      if (art) {
        state.activeArticleId = art.id;
        validateArticle(art);
      } else {
        ensureCharts();
      }
      // smooth intro progress
      autoConfigureProgress();
      renderIcons();
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
      

<div className="progress-outer hidden" id="globalProgress">
<div className="progress-bar" id="globalProgressBar"></div>
</div>

<div className="fixed inset-y-0 left-0 w-[320px] max-w-[92vw] glass translate-x-[-110%] transition-transform duration-300 z-50" id="drawer">
<div className="p-4 flex items-center justify-between border-b border-white/10">
<div className="text-base font-semibold tracking-tight">Library</div>
<button className="btn btn-ghost px-2 py-1" id="closeDrawer"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-4 space-y-5 overflow-y-auto h-full pb-24 scrollbar-thin">
<div>
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Liked</h4>
<span className="badge" id="likeCount">0</span>
</div>
<div className="mt-2 space-y-2 text-sm" id="likeList"></div>
</div>
<div className="border-t border-white/10 pt-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Bookmarks</h4>
<span className="badge" id="bookmarkCount">0</span>
</div>
<div className="mt-2 space-y-2 text-sm" id="bookmarkList"></div>
</div>
<div className="border-t border-white/10 pt-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Stats</h4>
<span className="badge">This period</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-center" id="statsWrap">
<div className="glass rounded-xl p-3">
<div className="text-2xl font-semibold tracking-tight" id="statDay">0</div>
<div className="text-xs text-gray-400">Day</div>
</div>
<div className="glass rounded-xl p-3">
<div className="text-2xl font-semibold tracking-tight" id="statWeek">0</div>
<div className="text-xs text-gray-400">Week</div>
</div>
<div className="glass rounded-xl p-3">
<div className="text-2xl font-semibold tracking-tight" id="statMonth">0</div>
<div className="text-xs text-gray-400">Month</div>
</div>
</div>
<div className="mt-3 text-xs text-gray-400">Counts include fully passed (Gold) articles only.</div>
</div>
</div>
</div>

<header className="w-full sticky top-0 z-40 glass">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="btn btn-ghost px-2 py-1" id="openDrawer">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="h-9 w-9 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-400/30">
<i className="w-5 h-5 text-indigo-300" data-lucide="wand-2"></i>
</div>
<div>
<h1 className="text-xl md:text-2xl tracking-tight font-semibold">Elite Newsroom Studio</h1>
<p className="text-xs text-gray-400 mt-0.5" id="clock">—</p>
</div>
<span className="ml-3 badge" id="goldCount">Gold: 0</span>
</div>
<div className="flex items-center gap-2">
<button className="btn btn-ghost" id="openSuggest">
<i className="w-4 h-4" data-lucide="flame"></i>
          Suggest
        </button>
<button className="btn btn-ghost" id="openGuidelines">
<i className="w-4 h-4" data-lucide="book-open"></i>
          Guidelines
        </button>
<button className="btn btn-primary" id="openSettings">
<i className="w-4 h-4" data-lucide="settings"></i>
          Settings
        </button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 py-6 space-y-6">

<section className="glass rounded-2xl p-4 md:p-5">
<div className="flex flex-col md:flex-row md:items-end gap-4">
<div className="flex-1">
<label className="text-sm text-gray-400">Country <span className="text-red-400">*</span></label>
<select className="w-full mt-1 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="countrySelect">
<option value="">Select country</option>
<option value="US">United States</option>
<option value="GB">United Kingdom</option>
<option value="NG">Nigeria</option>
<option value="IN">India</option>
<option value="ZA">South Africa</option>
<option value="KE">Kenya</option>
<option value="CA">Canada</option>
<option value="AU">Australia</option>
</select>
</div>
<div className="flex-1">
<label className="text-sm text-gray-400">State/Region</label>
<input className="w-full mt-1 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="stateInput" placeholder="e.g., Lagos, California" />
</div>
<div className="flex-1">
<label className="text-sm text-gray-400">District</label>
<input className="w-full mt-1 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="districtInput" placeholder="District/County (optional)" />
</div>
<div className="flex-1">
<label className="text-sm text-gray-400">City</label>
<input className="w-full mt-1 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="cityInput" placeholder="City (optional)" />
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="md:col-span-2">
<label className="text-sm text-gray-400">Category</label>
<select className="w-full mt-1 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="categorySelect">
<option value="all">All categories</option>
<option>Politics</option><option>Business</option><option>Sports</option><option>Technology</option>
<option>Entertainment</option><option>Health</option><option>Science</option><option>World</option>
<option>Football</option><option>Travel</option><option>Lifestyle</option><option>Fashion</option>
<option>Education</option><option>Environment</option><option>Motoring</option><option>Career & Jobs</option>
</select>
</div>
<div>
<label className="text-sm text-gray-400">Time</label>
<select className="w-full mt-1 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="timeSelect">
<option value="auto">Auto (1 min to 24 hours)</option>
<option value="30m">Last 30 minutes</option>
<option value="1h">Last 1 hour</option>
<option value="3h">Last 3 hours</option>
<option value="4h">Last 4 hours</option>
<option value="5h">Last 5 hours</option>
<option value="24h">Last 24 hours</option>
</select>
</div>
<div>
<label className="text-sm text-gray-400">Keywords</label>
<input className="w-full mt-1 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="keywordBar" placeholder="Search like Google (optional)" />
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2 items-center">
<button className="btn btn-ghost" id="autoSearchBtn">
<i className="w-4 h-4" data-lucide="sparkle"></i>
          Auto search
        </button>
<button className="btn btn-primary" id="searchBtn">
<i className="w-4 h-4" data-lucide="search"></i>
          Search
        </button>
<span className="text-xs text-gray-500">We sort latest to top, broaden time if no results.</span>
</div>

<div className="mt-4 flex flex-wrap gap-2">
<button className="chip" data-chip="Following">Following</button>
<button className="chip" data-chip="For you">For you</button>
<button className="chip chip-active" data-chip="Politics">Politics</button>
<button className="chip" data-chip="Entertainment">Entertainment</button>
<button className="chip" data-chip="Football">Football</button>
<button className="chip" data-chip="Business">Business</button>
<button className="chip" data-chip="Relationship">Relationship</button>
<button className="chip" data-chip="Fashion&Beauty">Fashion&Beauty</button>
<button className="chip" data-chip="LifeStyle">LifeStyle</button>
<button className="chip" data-chip="Headlines">Headlines</button>
<button className="chip" data-chip="Sports">Sports</button>
<button className="chip" data-chip="Technology">Technology</button>
<button className="chip" data-chip="Motoring">Motoring</button>
<button className="chip" data-chip="Career&Jobs">Career&Jobs</button>
<button className="chip" data-chip="Travel">Travel</button>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
<div className="lg:col-span-2 glass rounded-2xl p-4">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg md:text-xl tracking-tight font-semibold">Latest results</h2>
<div className="flex items-center gap-2 text-sm">
<span className="badge">From: <span id="fromDate">—</span></span>
<span className="badge">To: <span id="toDate">—</span></span>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="results"></div>
<div className="text-sm text-gray-400 py-6 hidden" id="resultsEmpty">No results yet. Enter filters and search.</div>
</div>
<div className="glass rounded-2xl p-4 h-fit sticky top-20">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Selected</h3>
<span className="badge" id="selCount">0</span>
</div>
<div className="mt-3 space-y-2 max-h-[320px] overflow-auto scrollbar-thin" id="selectedList"></div>
<div className="mt-4 grid grid-cols-1 gap-2">
<button className="btn btn-primary w-full disabled:opacity-50" disabled id="generateBtn">
<i className="w-4 h-4" data-lucide="wand-sparkles"></i>
            Generate articles
          </button>
<div className="grid grid-cols-2 gap-2">
<button className="btn btn-ghost w-full disabled:opacity-50" disabled id="cancelGenBtn">
<i className="w-4 h-4" data-lucide="square"></i>
              Cancel
            </button>
<button className="btn btn-ghost w-full disabled:opacity-50" disabled id="resumeGenBtn">
<i className="w-4 h-4" data-lucide="play"></i>
              Resume
            </button>
</div>
<button className="btn btn-ghost w-full" id="revalidateAllBtn">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
            Re-check all validations
          </button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-5">

<div className="lg:col-span-2 space-y-4" id="editorColumn">
<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Articles</h3>
<div className="flex items-center gap-2">
<button className="btn btn-ghost" id="exportAllBtn">
<i className="w-4 h-4" data-lucide="download"></i>
                Export all
              </button>
<button className="btn btn-ghost" id="clearAllBtn">
<i className="w-4 h-4" data-lucide="trash-2"></i>
                Clear
              </button>
</div>
</div>
<div className="mt-4 space-y-4" id="articles"></div>
<div className="text-sm text-gray-400 py-6" id="articlesEmpty">Generated articles will appear here.</div>
</div>

<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Gold Articles</h3>
<button className="btn btn-ghost" id="clearGoldBtn">
<i className="w-4 h-4" data-lucide="archive"></i>
              Clear gold
            </button>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3" id="goldList"></div>
<div className="text-sm text-gray-400 py-6" id="goldEmpty">No gold articles yet. Pass all validations to add.</div>
</div>
</div>

<div className="space-y-4" id="validationColumn">
<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Validation dashboard</h3>
<span className="badge">Accuracy suite</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-3">
<div className="glass rounded-xl p-3">
<p className="text-xs text-gray-400">Overall pass</p>
<div className="flex items-center gap-3 mt-2">
<div className="w-16 h-16">
<div className="w-full h-full" id="overallChartWrap">
<div className="w-full h-full"><canvas id="overallChart"></canvas></div>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight"><span id="overallPct">0</span>%</div>
<div className="text-xs text-gray-400">across active article</div>
</div>
</div>
</div>
<div className="glass rounded-xl p-3">
<p className="text-xs text-gray-400">AI content likelihood</p>
<div className="flex items-center gap-3 mt-2">
<div className="w-16 h-16">
<div className="w-full h-full"><canvas id="aiGauge"></canvas></div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight"><span id="aiPct">0</span>%</div>
<div className="text-xs text-gray-400">lower is better</div>
</div>
</div>
</div>
</div>
<div className="mt-3 text-xs text-gray-400" id="activeArticleMeta"></div>
</div>
<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Checks</h3>
<button className="btn btn-ghost" id="recheckBtn">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
              Re-check validation
            </button>
</div>
<ul className="mt-3 space-y-2" id="checkList"></ul>
</div>
<div className="glass rounded-2xl p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Automation</h3>
<span className="badge">Assist</span>
</div>
<div className="mt-3 grid grid-cols-1 gap-2">
<button className="btn btn-primary w-full" id="humanizeBtn">
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Humanlike writing
            </button>
<button className="btn btn-ghost w-full" id="proofBtn">
<i className="w-4 h-4" data-lucide="spell-check-2"></i>
              Proofread now
            </button>
<button className="btn btn-ghost w-full" id="plagReduceBtn">
<i className="w-4 h-4" data-lucide="pencil"></i>
              Reduce similarity
            </button>
<button className="btn btn-primary w-full" id="addGoldBtn">
<i className="w-4 h-4" data-lucide="medal"></i>
              Add to gold article
            </button>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 hidden items-center justify-center" id="settingsModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative glass rounded-2xl p-5 w-[760px] max-w-[92vw]">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Connect APIs</h3>
<button className="btn btn-ghost" id="closeSettings">
<i className="w-4 h-4" data-lucide="x"></i>
          Close
        </button>
</div>
<div className="grid md:grid-cols-2 gap-4 mt-4">
<div>
<p className="text-sm font-medium">News API keys</p>
<input className="w-full mt-2 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="newsKey1" placeholder="Key 1" />
<input className="w-full mt-2 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="newsKey2" placeholder="Key 2" />
<p className="text-xs text-gray-500 mt-2">Used for NewsAPI searches (primary feed).</p>
</div>
<div>
<p className="text-sm font-medium">Gemini API keys</p>
<textarea className="w-full mt-2 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="geminiKeys" placeholder="One per line" rows="4"></textarea>
<div className="mt-2 flex items-center gap-2">
<label className="text-xs text-gray-300 flex items-center gap-2">
<input className="w-4 h-4 rounded border-white/20 bg-transparent" id="groundingToggle" type="checkbox" />
              Enable Google Search grounding
            </label>
</div>
<p className="text-xs text-gray-500 mt-2">Used for article generation, fixes, and grounded search reasoning.</p>
</div>
<div>
<p className="text-sm font-medium">Search Researcher API keys</p>
<textarea className="w-full mt-2 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="searchResearcherKeys" placeholder="One per line" rows="3"></textarea>
<p className="text-xs text-gray-500 mt-2">Used to fetch broader web results and enrich results list.</p>
</div>
<div>
<p className="text-sm font-medium">YouTube Data API keys</p>
<textarea className="w-full mt-2 bg-[#0B0C0F] border border-white/10 rounded-xl px-3 py-2 focus-ring" id="youtubeKeys" placeholder="One per line" rows="3"></textarea>
<p className="text-xs text-gray-500 mt-2">Used to pull recent news videos for context.</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-xs text-gray-400">Keys are stored locally in your browser and rotated automatically.</div>
<div className="flex items-center gap-2">
<button className="btn btn-primary" id="saveSettings">
<i className="w-4 h-4" data-lucide="save"></i>
            Save
          </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 hidden items-center justify-center" id="guideModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative glass rounded-2xl p-5 w-[760px] max-w-[94vw]">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Opera News Hub rules</h3>
<button className="btn btn-ghost" id="closeGuidelines">
<i className="w-4 h-4" data-lucide="x"></i>
          Close
        </button>
</div>
<div className="mt-3 text-sm text-gray-300 space-y-2 max-h-[60vh] overflow-auto scrollbar-thin">
<p>Follow official publishing standards including originality, accuracy, and respectful language. Avoid defamation, hate, violence, adult content, and misinformation. Provide clear context, correct sourcing, and avoid clickbait.</p>
<p>Key quality rules: recent news angle, clean grammar, 500–1000 words, no repetition, no markdown, no headings inside the article body, and include a headline line plus a thumbnail URL line as specified.</p>
<p>Before submission, pass all automated checks below. Reference: hub.opera.com announcement page.</p>
<a className="text-indigo-300 underline" href="https://hub.opera.com/announcement/f50bde1144d945c0a24e6c9c751b8e0f" target="_blank">Open full guidelines</a>
</div>
</div>
</div>

<div className="fixed inset-0 hidden items-center justify-center" id="suggestModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative glass rounded-2xl p-5 w-[760px] max-w-[94vw]">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Trending & Suggestions</h3>
<button className="btn btn-ghost" id="closeSuggest"><i className="w-4 h-4" data-lucide="x"></i>Close</button>
</div>
<div className="mt-3">
<div className="text-xs text-gray-400">Preloaded from search interest; click to add as keyword.</div>
<div className="mt-3 grid sm:grid-cols-2 gap-2" id="trendWrap"></div>
</div>
</div>
</div>


    </>
  );
}
