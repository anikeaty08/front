import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // -------- Fixture JSON --------
      const fixture = {
        id: "doc_123",
        title: "ภาวะตลาดหุ้นวันนี้ก่อนปิดบวก!",
        tags: ["บทวิเคราะห์", "หุ้น"],
        publishedAt: "2025-09-09T05:30:00Z",
        locked: false,
        hero: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1600&auto=format&fit=crop",
        bodyHtml: `
          <p class="text-[15px] leading-[1.6] text-slate-800">ดัชนี SET Index วันนี้แกว่งตัวในกรอบกว้าง +/- 5 จุดหลังแรงซื้อในกลุ่มปิโตรเคมีและพลังงานหนุนภาพรวม ขณะที่กลุ่มเทคโนโลยียังคงเผชิญแรงขายทำกำไรระยะสั้น นักลงทุนต่างชาติยังอยู่ในโหมด “Wait and see” ต่อการตัดสินใจของเฟด</p>
          <p class="text-[15px] leading-[1.6] text-slate-800 mt-4">ประเด็นติดตามคือทิศทางราคาน้ำมันและเงินเฟ้อภายในประเทศ ซึ่งอาจส่งผลต่อบรรยากาศการลงทุนในระยะถัดไป เราประเมินกรอบวันนี้ที่ 1,520–1,540 จุด และยังคงแนะนำกลยุทธ์ซื้อเมื่ออ่อนตัวสำหรับหุ้นพื้นฐานเด่น</p>
        `,
        hashtags: ["keyword1","keyword2","keyword3"],
        strategists: [
          { name: "Padon Vanarat", role: "Head of Research", avatar: "https://images.unsplash.com/photo-1513026754624-9fdb9d6e9df4?q=80&w=160&auto=format&fit=crop" },
          { name: "Jinjutha Somwangprasert", role: "Head of Research", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop" },
          { name: "Somchai P.", role: "Senior Strategist", avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=160&auto=format&fit=crop" }
        ],
        channel: {
          id: "yuanta_designs",
          name: "Wealth Design by Yuanta",
          avatar: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=160&auto=format&fit=crop",
          following: false,
          subtitle: "เผยแพร่บทวิเคราะห์ล่าสุดเมื่อ 2 ชั่วโมงที่แล้ว"
        },
        assetsOfInterest: ["KT-Property-A", "B-IR-FOF", "K-VIETNAM"],
        recommended: [
          {
            id: "rec1",
            title: "หุ้นคืออะไร? ทำไมถึงเป็นสินทรัพย์ของนักลงทุนในปัจจุบัน",
            source: "Wealth Design Daily",
            date: "2025-09-09T05:30:00Z",
            tags: ["Analysis","Stock","My Asset"],
            thumb: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=300&auto=format&fit=crop",
            locked: false
          },
          {
            id: "rec2",
            title: "กลยุทธ์รับมือความผันผวนในไตรมาส 4",
            source: "Wealth Design Daily",
            date: "2025-09-07T05:30:00Z",
            tags: ["Analysis","Stock","My Asset"],
            thumb: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=300&auto=format&fit=crop",
            locked: true
          },
          {
            id: "rec3",
            title: "มองตลาดต่างประเทศ: เวียดนามน่าสนไหม?",
            source: "Wealth Design Daily",
            date: "2025-09-01T05:30:00Z",
            tags: ["Analysis","Stock","My Asset"],
            thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop",
            locked: false
          },
          {
            id: "rec4",
            title: "Property Theme: โอกาสจากการฟื้นตัวท่องเที่ยว",
            source: "Wealth Design Daily",
            date: "2025-08-28T05:30:00Z",
            tags: ["Analysis","Stock","My Asset"],
            thumb: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=300&auto=format&fit=crop",
            locked: false
          }
        ]
      };

      // -------- Utilities --------
      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
      const formatDateTH = (iso) => new Intl.DateTimeFormat('th-TH', { dateStyle: 'long' }).format(new Date(iso));
      const toast = (msg) => {
        const t = $('#toast');
        $('#toast-text').textContent = msg;
        t.classList.remove('hidden');
        clearTimeout(window.__toastTimer);
        window.__toastTimer = setTimeout(() => t.classList.add('hidden'), 2000);
      };
      const saveLS = (k,v) => localStorage.setItem(k, JSON.stringify(v));
      const getLS = (k, def) => {
        try { const v = JSON.parse(localStorage.getItem(k)); return v ?? def; } catch { return def; }
      };

      // -------- Renderers --------
      function renderArticle(data){
        $('#published-date').textContent = formatDateTH(data.publishedAt);
        $('#article-title').textContent = data.title;
        $('#hero-img').src = data.hero;
        $('#article-body').innerHTML = data.bodyHtml;

        // Lock chip
        $('#chip-locked').classList.toggle('hidden', !data.locked);
        // Blur hero/body if locked
        $('#hero-img').classList.toggle('blur-sm', data.locked);
        $('#body-wrapper').classList.toggle('blur-[1px]', data.locked);

        // Hashtags
        const ht = $('#hashtags');
        ht.innerHTML = '';
        data.hashtags.forEach(tag => {
          const chip = document.createElement('button');
          chip.className = 'inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-2 focus:ring-primary/40';
          chip.innerHTML = `<i data-lucide="hash" class="w-3.5 h-3.5"></i> #${tag}`;
          chip.addEventListener('click', () => {
            location.hash = `#${tag}`;
            toast(`กรองแท็ก #${tag}`);
          });
          ht.appendChild(chip);
        });

        // Strategists
        const tl = $('#team-list'); tl.innerHTML = '';
        data.strategists.slice(0,4).forEach(p => {
          const el = document.createElement('div');
          el.className = 'flex items-center gap-3 p-3 border border-slate-200 rounded-lg';
          el.innerHTML = `
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${p.name}" class="w-10 h-10 rounded-lg ring-1 ring-slate-200 object-cover">
            <div>
              <div class="text-[14px] font-semibold tracking-tight text-slate-900">${p.name}</div>
              <div class="text-[12px] text-slate-500">${p.role}</div>
            </div>
          `;
          tl.appendChild(el);
        });

        // Channel
        $('#channel-avatar').src = data.channel.avatar;
        $('#channel-name').textContent = data.channel.name;
        $('#channel-subtitle').textContent = data.channel.subtitle;
        const chFollowing = getLS('channel_following', {})[data.channel.id] ?? data.channel.following;
        updateChannelFollowBtn(chFollowing);

        // Assets
        const al = $('#assets-list'); al.innerHTML = '';
        data.assetsOfInterest.forEach(sym => {
          const li = document.createElement('li');
          li.className = 'px-4 py-3 first:rounded-t-lg last:rounded-b-lg';
          li.textContent = sym;
          al.appendChild(li);
        });
        const aa = $('#assets-actions'); aa.innerHTML = '';
        data.assetsOfInterest.forEach(sym => {
          const b = document.createElement('button');
          b.className = 'h-10 px-4 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[14px] flex items-center gap-2 focus:ring-2 focus:ring-primary/40';
          b.innerHTML = `<i data-lucide="external-link" class="w-4 h-4"></i> ดูรายละเอียด`;
          b.addEventListener('click', () => toast(`ดูรายละเอียด ${sym}`));
          aa.appendChild(b);
        });

        // Recommended
        renderRecommended(data.recommended);

        // Icons refresh
        lucide.createIcons();
      }

      function renderRecommended(list){
        const grid = $('#recommended-grid');
        const empty = $('#recommended-empty');
        grid.innerHTML = '';
        if(!list || list.length === 0){
          empty.classList.remove('hidden');
          return;
        } else {
          empty.classList.add('hidden');
        }

        const bookmarks = getLS('bookmarks', {});
        list.forEach(item => {
          const card = document.createElement('article');
          card.className = 'relative border border-slate-200 rounded-lg p-4 flex gap-3 bg-white';
          card.innerHTML = `
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                ${item.tags.map((t,i)=>`<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium ${i===0?'bg-primary/10 text-primary':'bg-slate-100 text-slate-700'}">${t}</span>`).join('')}
              </div>
              <h3 class="mt-2 text-[15px] font-semibold tracking-tight line-clamp-2 text-slate-900">${item.title}</h3>
              <div class="mt-2 text-[12px] text-slate-500">${item.source} · ${formatDateTH(item.date)}</div>
              <div class="mt-2 flex items-center gap-2">
                <button class="bookmark-btn h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:ring-2 focus:ring-primary/40" aria-label="บันทึก" data-id="${item.id}">
                  <i data-lucide="${bookmarks[item.id] ? 'bookmark-check' : 'bookmark'}" class="w-4 h-4 text-slate-700"></i>
                </button>
              </div>
            </div>
            <div class="w-20 h-20 relative">
              <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="" class="w-20 h-20 rounded-lg ring-1 ring-slate-200 object-cover">
              ${item.locked ? `<div class="absolute inset-0 bg-white/60 backdrop-blur-[1px] rounded-lg flex items-center justify-center"><i data-lucide="lock" class="w-5 h-5 text-slate-600"></i></div>` : ''}
            </div>
          `;
          grid.appendChild(card);
        });

        // Bind bookmarks
        $$('.bookmark-btn', grid).forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = btn.dataset.id;
            const bk = getLS('bookmarks', {});
            bk[id] = !bk[id];
            saveLS('bookmarks', bk);
            // swap icon
            const icon = btn.querySelector('i');
            icon.setAttribute('data-lucide', bk[id] ? 'bookmark-check' : 'bookmark');
            lucide.createIcons();
            toast(bk[id] ? 'บันทึกเนื้อหาแล้ว' : 'ยกเลิกการบันทึก');
          });
        });

        lucide.createIcons();
      }

      function updateChannelFollowBtn(isFollowing){
        const btn = $('#btn-follow-channel');
        if(isFollowing){
          btn.textContent = 'กำลังติดตาม';
          btn.className = 'h-10 px-4 rounded-lg bg-white text-slate-700 border border-slate-200 hover:border-slate-300 focus:ring-2 focus:ring-primary/40';
        }else{
          btn.textContent = 'ติดตาม';
          btn.className = 'h-10 px-4 rounded-lg bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/40';
        }
      }

      // -------- Interactions --------
      function bindInteractions(data){
        // Back
        $('#btn-back').addEventListener('click', () => history.back());

        // Read more
        const readBtn = $('#btn-readmore');
        const bodyWrap = $('#body-wrapper');
        const fade = $('#fade-overlay');
        const setExpanded = (exp) => {
          bodyWrap.dataset.expanded = String(exp);
          readBtn.setAttribute('aria-expanded', String(exp));
          if(exp){
            bodyWrap.style.maxHeight = '9999px';
            fade.classList.add('hidden');
            readBtn.querySelector('span').textContent = 'ย่อเนื้อหา';
            readBtn.querySelector('i').setAttribute('data-lucide','chevron-up');
          } else {
            bodyWrap.style.maxHeight = '240px';
            fade.classList.remove('hidden');
            readBtn.querySelector('span').textContent = 'อ่านเพิ่มเติม';
            readBtn.querySelector('i').setAttribute('data-lucide','book-open');
          }
          lucide.createIcons();
        };
        readBtn.addEventListener('click', () => {
          const exp = bodyWrap.dataset.expanded === 'true';
          setExpanded(!exp);
        });

        // Follow doc (top-right)
        const docKey = `doc_follow_${data.id}`;
        const updateFollowDocUI = (val) => {
          const btn = $('#btn-follow-doc');
          if(val){
            btn.innerHTML = `<i data-lucide="check" class="w-5 h-5"></i><span class="text-[14px]">กำลังติดตาม</span>`;
          }else{
            btn.innerHTML = `<i data-lucide="plus" class="w-5 h-5"></i><span class="text-[14px]">ติดตาม</span>`;
          }
          lucide.createIcons();
        };
        updateFollowDocUI(getLS(docKey, false));
        $('#btn-follow-doc').addEventListener('click', () => {
          const cur = getLS(docKey, false);
          saveLS(docKey, !cur);
          updateFollowDocUI(!cur);
          if(!cur) toast('ติดตามช่องแล้ว');
        });

        // Channel follow
        $('#btn-follow-channel').addEventListener('click', () => {
          const store = getLS('channel_following', {});
          const curr = store[data.channel.id] ?? data.channel.following;
          store[data.channel.id] = !curr;
          saveLS('channel_following', store);
          updateChannelFollowBtn(!curr);
          toast(!curr ? 'ติดตามช่องแล้ว' : 'ยกเลิกการติดตาม');
        });

        // Share
        const shareBtn = $('#btn-share');
        const menu = $('#share-menu');
        shareBtn.addEventListener('click', async () => {
          // Native share if available
          if(navigator.share){
            try{
              await navigator.share({ title: data.title, url: location.href });
            } catch {}
            return;
          }
          // Toggle menu
          const expanded = shareBtn.getAttribute('aria-expanded') === 'true';
          shareBtn.setAttribute('aria-expanded', String(!expanded));
          menu.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
          if(!$('#share-menu').contains(e.target) && e.target !== $('#btn-share')){
            $('#share-menu').classList.add('hidden');
            $('#btn-share').setAttribute('aria-expanded','false');
          }
        });
        $$('#share-menu [data-share]').forEach(item => {
          item.addEventListener('click', async () => {
            const type = item.dataset.share;
            if(type === 'copy'){
              await navigator.clipboard.writeText(location.href);
              toast('คัดลอกลิงก์แล้ว');
            }else if(type === 'line'){
              window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(location.href)}`,'_blank');
            }else{
              window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(location.href)}&text=${encodeURIComponent(document.title)}`,'_blank');
            }
            $('#share-menu').classList.add('hidden');
            $('#btn-share').setAttribute('aria-expanded','false');
          });
        });

        // Smooth scroll if hash present
        if(location.hash){
          const target = document.querySelector(location.hash);
          if(target){
            target.scrollIntoView({ behavior:'smooth', block:'start' });
          }
        }
      }

      // -------- State Knobs --------
      function setLoadingState(isLoading){
        $('#article-skeleton').classList.toggle('hidden', !isLoading);
        $('#article-content').classList.toggle('hidden', isLoading);
        $('#recommended-skeleton').classList.toggle('hidden', !isLoading);
        $('#recommended-grid').classList.toggle('hidden', isLoading);
      }
      function setErrorState(isError){
        $('#error-card').classList.toggle('hidden', !isError);
        $('#article-card').classList.toggle('hidden', isError);
      }
      function setLockedState(isLocked){
        fixture.locked = isLocked;
        renderArticle(fixture);
      }

      // -------- Init --------
      document.addEventListener('DOMContentLoaded', () => {
        // Initial render
        setLoadingState(false);
        setErrorState(false);
        renderArticle(fixture);
        bindInteractions(fixture);
        lucide.createIcons();

        // Knobs
        $('#knob-loading').addEventListener('click', () => {
          const on = $('#article-skeleton').classList.contains('hidden');
          setLoadingState(on);
        });
        $('#knob-error').addEventListener('click', () => {
          const on = $('#error-card').classList.contains('hidden');
          setErrorState(on);
        });
        $('#knob-locked').addEventListener('click', () => {
          const isLocked = !fixture.locked;
          setLockedState(isLocked);
        });
        $('#btn-retry').addEventListener('click', () => {
          setErrorState(false);
          setLoadingState(true);
          setTimeout(() => { setLoadingState(false); renderArticle(fixture); }, 800);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
<div className="flex gap-4 h-16 items-center">

<a className="shrink-0 inline-flex items-center gap-2" href="#">
<img alt="Yuanta Securities logo" className="w-auto h-8" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg"/>
</a>


<nav className="hidden md:flex gap-2 items-center">
<button aria-label="Search" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-search w-[18px] h-[18px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Messages" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-message-square w-[18px] h-[18px]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<button aria-label="Notifications" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-bell w-[18px] h-[18px]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="ml-1 h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="Profile" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop"/>
</button>
</nav>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-[960px] mx-auto px-4 md:px-6 lg:px-8 py-6 space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<button aria-label="ย้อนกลับ" className="h-10 px-3 rounded-lg hover:border-slate-300 text-slate-700 focus:ring-2 focus:ring-primary/40 flex items-center gap-2" id="btn-back">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="#0A6EE7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="text-[14px]">ย้อนกลับ</span>
</button>
</div>
<div className="flex items-center gap-3">
<button aria-label="บันทึก" className="hover:border-slate-300 focus:ring-2 focus:ring-primary/40 flex gap-2 text-slate-700 bg-white h-10 border-slate-200 border rounded-lg pr-3 pl-3 items-center"><svg className="lucide lucide-bookmark w-5 h-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg><span className="text-[14px]">บันทึก</span></button>
<div className="relative">
<button aria-expanded="false" aria-haspopup="menu" aria-label="แชร์" className="h-10 px-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 text-slate-700 focus:ring-2 focus:ring-primary/40 flex items-center gap-2" id="btn-share">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="text-[14px]">แชร์</span>
</button>

<div className="hidden absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 bg-white shadow-lg p-2 z-20" id="share-menu">
<button aria-label="คัดลอกลิงก์" className="w-full h-10 px-3 rounded-lg hover:bg-slate-50 text-left text-[14px] flex items-center gap-2 focus:ring-2 focus:ring-primary/40" data-share="copy">
<svg className="lucide lucide-link w-4 h-4 text-slate-600" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> คัดลอกลิงก์
                  </button>
<button aria-label="แชร์ผ่าน LINE" className="w-full h-10 px-3 rounded-lg hover:bg-slate-50 text-left text-[14px] flex items-center gap-2 focus:ring-2 focus:ring-primary/40" data-share="line">
<svg className="lucide lucide-message-circle w-4 h-4 text-slate-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> LINE
                  </button>
<button aria-label="แชร์ผ่าน Twitter" className="w-full h-10 px-3 rounded-lg hover:bg-slate-50 text-left text-[14px] flex items-center gap-2 focus:ring-2 focus:ring-primary/40" data-share="twitter">
<svg className="lucide lucide-twitter w-4 h-4 text-slate-600" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> Twitter/X
                  </button>
</div>
</div>
</div>
</div>

<div className="hidden bg-white border border-slate-200 rounded-lg p-4" id="error-card">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<svg className="lucide lucide-triangle-alert w-5 h-5 text-secondary" data-lucide="triangle-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="flex-1">
<h3 className="text-[16px] font-semibold tracking-tight">เกิดข้อผิดพลาดในการโหลดเนื้อหา</h3>
<p className="text-[14px] text-slate-600 mt-2">โปรดลองใหม่อีกครั้ง</p>
<div className="mt-4">
<button aria-label="ลองอีกครั้ง" className="h-10 px-4 rounded-lg bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 flex items-center gap-2" id="btn-retry">
<svg className="lucide lucide-refresh-ccw w-5 h-5" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg> ลองอีกครั้ง
                  </button>
</div>
</div>
</div>
</div>

<article className="bg-white border border-slate-200 rounded-lg" id="article-card">

<div className="hidden p-4 md:p-6 space-y-4 animate-pulse" id="article-skeleton">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-5 w-16 bg-slate-200 rounded-lg"></div>
<div className="h-5 w-10 bg-slate-200 rounded-lg"></div>
</div>
<div className="h-4 w-24 bg-slate-200 rounded-lg"></div>
</div>
<div className="h-7 w-3/4 bg-slate-200 rounded-lg"></div>
<div className="rounded-lg overflow-hidden">
<div className="w-full aspect-video bg-slate-200"></div>
</div>
<div className="space-y-2">
<div className="h-4 w-full bg-slate-200 rounded-lg"></div>
<div className="h-4 w-11/12 bg-slate-200 rounded-lg"></div>
<div className="h-4 w-10/12 bg-slate-200 rounded-lg"></div>
</div>
<div className="flex gap-2">
<div className="h-6 w-20 bg-slate-200 rounded-lg"></div>
<div className="h-6 w-16 bg-slate-200 rounded-lg"></div>
<div className="h-6 w-24 bg-slate-200 rounded-lg"></div>
</div>
<div className="h-10 w-40 bg-slate-200 rounded-lg mx-auto"></div>
</div>

<div className="md:p-6 pt-4 pr-4 pb-4 pl-4">

<div className="flex items-center justify-between">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 text-[12px] text-primary font-medium rounded-lg pt-0.5 pr-2 pb-0.5 pl-2">
                     บทวิเคราะห์
                  <svg className="lucide lucide-file-text w-3.5 h-3.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700" id="chip-asset">
<svg className="lucide lucide-trending-up w-3.5 h-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> หุ้น
                  </span>
<span className="hidden inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-50 text-slate-500" id="chip-locked">
<svg className="lucide lucide-lock w-3.5 h-3.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> เข้าถึงแบบจำกัด
                  </span>
</div>
</div>

<h1 className="mt-4 text-[20px] md:text-[24px] tracking-tight font-semibold text-slate-900" id="article-title">ภาวะตลาดหุ้นวันนี้ก่อนปิดบวก!</h1>

<div className="mt-4 rounded-lg ring-1 ring-slate-200 overflow-hidden">
<div className="w-full aspect-video">
<img alt="ภาพหน้าปก" className="w-full h-full object-cover" id="hero-img" src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-white rounded-lg mt-4 pb-3">
<div className="flex items-center gap-3">
<div className="flex-1 min-w-0">
<audio aria-label="เสียงอ่านบทความโดย AI" className="mt-2 w-full" controls="" controlslist="nodownload" id="article-tts" preload="none">
<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
                      เบราว์เซอร์ของคุณไม่รองรับการเล่นเสียง
                    </audio>
</div>
</div>
</div>

<div className="mt-4 max-w-[760px] mx-auto">
<div className="relative overflow-hidden transition-all duration-300" data-expanded="false" id="body-wrapper" style={{maxHeight: '240px'}}>
<div className="prose prose-slate max-w-none" id="article-body">
<p className="text-[15px] leading-[1.6] text-slate-800">ดัชนี SET Index วันนี้แกว่งตัวในกรอบกว้าง +/- 5 จุดหลังแรงซื้อในกลุ่มปิโตรเคมีและพลังงานหนุนภาพรวม ขณะที่กลุ่มเทคโนโลยียังคงเผชิญแรงขายทำกำไรระยะสั้น นักลงทุนต่างชาติยังอยู่ในโหมด “Wait and see” ต่อการตัดสินใจของเฟด</p>
<p className="text-[15px] leading-[1.6] text-slate-800 mt-4">ประเด็นติดตามคือทิศทางราคาน้ำมันและเงินเฟ้อภายในประเทศ ซึ่งอาจส่งผลต่อบรรยากาศการลงทุนในระยะถัดไป เราประเมินกรอบวันนี้ที่ 1,520–1,540 จุด และยังคงแนะนำกลยุทธ์ซื้อเมื่ออ่อนตัวสำหรับหุ้นพื้นฐานเด่น</p>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" id="fade-overlay"></div>
</div>

<div className="mt-4 flex flex-wrap gap-2" id="hashtags"><button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-2 focus:ring-primary/40"><svg className="lucide lucide-hash w-3.5 h-3.5" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg> #keyword1</button><button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-2 focus:ring-primary/40"><svg className="lucide lucide-hash w-3.5 h-3.5" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg> #keyword2</button><button className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 focus:ring-2 focus:ring-primary/40"><svg className="lucide lucide-hash w-3.5 h-3.5" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg> #keyword3</button></div>

<div className="mt-4 flex justify-center">
<button aria-controls="body-wrapper" aria-expanded="false" aria-label="อ่านเพิ่มเติม" className="h-10 px-4 rounded-lg border border-slate-200 bg-primary text-blue-600 hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 flex items-center gap-2" id="btn-readmore">
<svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="">อ่านเพิ่มเติม</span>
</button>
</div>
</div>
</div>
</article>

<section className="bg-white border border-slate-200 rounded-lg p-4 md:p-6" id="team">
<h2 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-slate-900">Strategist Team</h2>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="team-list"><div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg">
<img alt="Padon Vanarat" className="w-10 h-10 rounded-lg ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-[14px] font-semibold tracking-tight text-slate-900">Padon Vanarat</div>
<div className="text-[12px] text-slate-500">Head of Research</div>
</div>
</div><div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg">
<img alt="Jinjutha Somwangprasert" className="w-10 h-10 rounded-lg ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-[14px] font-semibold tracking-tight text-slate-900">Jinjutha Somwangprasert</div>
<div className="text-[12px] text-slate-500">Head of Research</div>
</div>
</div><div className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg">
<img alt="Somchai P." className="w-10 h-10 rounded-lg ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-[14px] font-semibold tracking-tight text-slate-900">Somchai P.</div>
<div className="text-[12px] text-slate-500">Senior Strategist</div>
</div>
</div></div>
</section>

<section className="bg-white border border-slate-200 rounded-lg p-4 md:p-6">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Channel" className="w-10 h-10 rounded-lg ring-1 ring-slate-200 object-cover" id="channel-avatar" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-[15px] font-semibold tracking-tight" id="channel-name">Wealth Design by Yuanta</div>
<div className="text-[12px] text-slate-500" id="channel-subtitle">เผยแพร่บทวิเคราะห์ล่าสุดเมื่อ 2 ชั่วโมงที่แล้ว</div>
</div>
</div>
<button aria-label="ติดตามช่อง" className="h-10 px-4 rounded-lg bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/40" id="btn-follow-channel">ติดตาม</button>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-lg p-4 md:p-6" id="assets">
<h2 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-slate-900">สินทรัพย์ที่น่าสนใจ</h2>
<div className="mt-4" id="aura-emfqp1zna">
<ul className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white" id="assets-list">
<li className="first:rounded-t-lg last:rounded-b-lg">
<div className="px-4 py-3 flex items-center justify-between gap-3">
<span className="text-[14px] text-slate-800">KT-Property-A</span>
<button className="h-10 px-4 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[14px] flex items-center gap-2 focus:ring-2 focus:ring-primary/40">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
          ดูรายละเอียด
        </button>
</div>
</li>
<li className="first:rounded-t-lg last:rounded-b-lg">
<div className="px-4 py-3 flex items-center justify-between gap-3">
<span className="text-[14px] text-slate-800">B-IR-FOF</span>
<button className="h-10 px-4 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[14px] flex items-center gap-2 focus:ring-2 focus:ring-primary/40">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
          ดูรายละเอียด
        </button>
</div>
</li>
<li className="first:rounded-t-lg last:rounded-b-lg">
<div className="px-4 py-3 flex items-center justify-between gap-3">
<span className="text-[14px] text-slate-800">K-VIETNAM</span>
<button className="h-10 px-4 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[14px] flex items-center gap-2 focus:ring-2 focus:ring-primary/40">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
          ดูรายละเอียด
        </button>
</div>
</li>
</ul>
<div className="hidden" id="assets-actions"></div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-lg p-4 md:p-6" id="recommended">
<div className="flex items-center justify-between">
<h2 className="text-[18px] md:text-[20px] tracking-tight font-semibold text-slate-900">แนะนำสำหรับคุณ</h2>
<a className="text-[12px] text-primary hover:underline" href="#recommended">ดูทั้งหมด</a>
</div>

<div className="hidden mt-6 border border-dashed border-slate-200 rounded-lg p-6 text-center" id="recommended-empty">
<div className="mx-auto w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center">
<svg className="lucide lucide-inbox w-7 h-7 text-slate-400" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<p className="mt-3 text-[14px] text-slate-600">ยังไม่มีคำแนะนำ</p>
</div>

<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" id="recommended-grid"><article className="relative border border-slate-200 rounded-lg p-4 flex gap-3 bg-white">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-primary/10 text-primary">Analysis</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">Stock</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">My Asset</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight line-clamp-2 text-slate-900">หุ้นคืออะไร? ทำไมถึงเป็นสินทรัพย์ของนักลงทุนในปัจจุบัน</h3>
<div className="mt-2 text-[12px] text-slate-500">Wealth Design Daily · 9 กันยายน 2568</div>
<div className="mt-2 flex items-center gap-2">
<button aria-label="บันทึก" className="bookmark-btn h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:ring-2 focus:ring-primary/40" data-id="rec1">
<svg className="lucide lucide-bookmark w-4 h-4 text-slate-700" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>
<div className="w-20 h-20 relative">
<img alt="" className="w-20 h-20 rounded-lg ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</article><article className="relative border border-slate-200 rounded-lg p-4 flex gap-3 bg-white">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-primary/10 text-primary">Analysis</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">Stock</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">My Asset</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight line-clamp-2 text-slate-900">กลยุทธ์รับมือความผันผวนในไตรมาส 4</h3>
<div className="mt-2 text-[12px] text-slate-500">Wealth Design Daily · 7 กันยายน 2568</div>
<div className="mt-2 flex items-center gap-2">
<button aria-label="บันทึก" className="bookmark-btn h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:ring-2 focus:ring-primary/40" data-id="rec2">
<svg className="lucide lucide-bookmark w-4 h-4 text-slate-700" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>
<div className="w-20 h-20 relative">
<img alt="" className="w-20 h-20 rounded-lg ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] rounded-lg flex items-center justify-center"><svg className="lucide lucide-lock w-5 h-5 text-slate-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
</div>
</article><article className="relative border border-slate-200 rounded-lg p-4 flex gap-3 bg-white">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-primary/10 text-primary">Analysis</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">Stock</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">My Asset</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight line-clamp-2 text-slate-900">มองตลาดต่างประเทศ: เวียดนามน่าสนไหม?</h3>
<div className="mt-2 text-[12px] text-slate-500">Wealth Design Daily · 1 กันยายน 2568</div>
<div className="mt-2 flex items-center gap-2">
<button aria-label="บันทึก" className="bookmark-btn h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:ring-2 focus:ring-primary/40" data-id="rec3">
<svg className="lucide lucide-bookmark w-4 h-4 text-slate-700" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>
<div className="w-20 h-20 relative">
<img alt="" className="w-20 h-20 rounded-lg ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</article><article className="relative border border-slate-200 rounded-lg p-4 flex gap-3 bg-white">
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-primary/10 text-primary">Analysis</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">Stock</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">My Asset</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight line-clamp-2 text-slate-900">Property Theme: โอกาสจากการฟื้นตัวท่องเที่ยว</h3>
<div className="mt-2 text-[12px] text-slate-500">Wealth Design Daily · 28 สิงหาคม 2568</div>
<div className="mt-2 flex items-center gap-2">
<button aria-label="บันทึก" className="bookmark-btn h-8 w-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:border-slate-300 focus:ring-2 focus:ring-primary/40" data-id="rec4">
<svg className="lucide lucide-bookmark w-4 h-4 text-slate-700" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</div>
<div className="w-20 h-20 relative">
<img alt="" className="w-20 h-20 rounded-lg ring-1 ring-slate-200 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</article></div>

<div className="hidden mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse" id="recommended-skeleton">
<div className="border border-slate-200 rounded-lg p-4 flex gap-3">
<div className="flex-1 space-y-2">
<div className="h-4 w-28 bg-slate-200 rounded-lg"></div>
<div className="h-4 w-3/4 bg-slate-200 rounded-lg"></div>
<div className="h-4 w-1/2 bg-slate-200 rounded-lg"></div>
</div>
<div className="w-20 h-20 bg-slate-200 rounded-lg"></div>
</div>
<div className="border border-slate-200 rounded-lg p-4 flex gap-3">
<div className="flex-1 space-y-2">
<div className="h-4 w-28 bg-slate-200 rounded-lg"></div>
<div className="h-4 w-3/4 bg-slate-200 rounded-lg"></div>
<div className="h-4 w-1/2 bg-slate-200 rounded-lg"></div>
</div>
<div className="w-20 h-20 bg-slate-200 rounded-lg"></div>
</div>
</div>
</section>
</div>
</main>

<div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="bg-slate-900 text-white text-[14px] px-4 py-2 rounded-lg shadow-lg ring-1 ring-black/10">
<span id="toast-text">ติดตามช่องแล้ว</span>
</div>
</div>

<footer className="py-6"></footer>


    </>
  );
}
