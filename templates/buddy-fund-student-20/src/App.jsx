import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Mock Data
      const COIN_RATE = 75; // $75 = 1 coin
      const state = {
        campaign: { name: 'Spring Drive', ends: 'May 30', schoolProgress: 42 },
        students: [
          {
            id: 's1',
            name: 'Ayaan Khan',
            avatar: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=256&auto=format&fit=crop',
            school: 'Ridgewood Elementary',
            teacher: 'Ms. Lee',
            classroom: '3B',
            goal: 750,
            raised: 315,
            invites: [
              { id: 'i1', name: 'Nadia', channel: 'email', address: 'nadia@example.com', status: 'sent' },
              { id: 'i2', name: 'Rahim', channel: 'sms', address: '+1 555-203-1123', status: 'converted', amount: 50 },
              { id: 'i3', name: 'Samir', channel: 'email', address: 'samir@work.com', status: 'sent' }
            ],
            prizes: [
              { id: 'p1', title: 'Sticker Pack', coins: 1, claimed: false },
              { id: 'p2', title: 'Buddy Keychain', coins: 2, claimed: false },
              { id: 'p3', title: 'Homework Pass', coins: 4, claimed: false },
              { id: 'p4', title: 'Lunch with Principal', coins: 6, claimed: false }
            ]
          },
          {
            id: 's2',
            name: 'Maya Rahman',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop',
            school: 'Ridgewood Elementary',
            teacher: 'Mr. Patel',
            classroom: '5A',
            goal: 900,
            raised: 825,
            invites: [
              { id: 'i4', name: 'Grandma', channel: 'email', address: 'grandma@family.com', status: 'converted', amount: 100 },
              { id: 'i5', name: 'Aunt Sara', channel: 'sms', address: '+1 555-555-2234', status: 'converted', amount: 50 }
            ],
            prizes: [
              { id: 'p1', title: 'Sticker Pack', coins: 1, claimed: true },
              { id: 'p2', title: 'Buddy Keychain', coins: 2, claimed: true },
              { id: 'p3', title: 'Homework Pass', coins: 4, claimed: false },
              { id: 'p4', title: 'Lunch with Principal', coins: 6, claimed: false }
            ]
          }
        ],
        currentStudentId: 's1',
        inviteMode: 'email'
      };

      // Helpers
      const fmtMoney = v => `$${Number(v).toLocaleString()}`;
      const getStudent = () => state.students.find(s => s.id === state.currentStudentId);
      const calcCoins = raised => Math.floor(raised / COIN_RATE);
      const calcProgress = (raised, goal) => goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : 0;

      // Sidebar small stats
      function renderCampaign() {
        document.getElementById('campaignName').textContent = state.campaign.name;
        document.getElementById('campaignEnds').textContent = state.campaign.ends;
        document.getElementById('campaignProgress').style.width = state.campaign.schoolProgress + '%';
        document.getElementById('campaignProgressLabel').textContent = state.campaign.schoolProgress + '%';
      }

      // Student switcher
      function renderStudentSwitcher() {
        const s = getStudent();
        const meta = `${s.school} • ${s.teacher}`;
        document.getElementById('studentAvatar').src = s.avatar;
        document.getElementById('studentName').textContent = s.name;
        document.getElementById('studentMeta').textContent = meta;

        // Profile section
        document.getElementById('profileStudentName').textContent = s.name;
        document.getElementById('profileSchool').textContent = s.school;
        document.getElementById('profileTeacher').textContent = s.teacher;
        document.getElementById('profileClassroom').textContent = s.classroom;

        // Build menu list
        const list = document.getElementById('studentList');
        list.innerHTML = '';
        state.students.forEach(st => {
          const unlockedCoins = calcCoins(st.raised);
          const item = document.createElement('button');
          item.className = 'w-full flex items-center gap-3 px-3 py-3 text-left hover:bg-neutral-50';
          item.innerHTML = `
            <img class="h-9 w-9 rounded-md object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="">
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium ${st.id===state.currentStudentId ? 'text-neutral-900' : 'text-neutral-800'}">${st.name}</span>
                ${st.id===state.currentStudentId ? '<span class="text-[0.7rem] px-1.5 py-0.5 rounded bg-neutral-900 text-white">Active</span>' : ''}
              </div>
              <div class="text-xs text-neutral-600">${st.school} • ${st.teacher}</div>
            </div>
            <div class="text-xs text-neutral-600">${unlockedCoins}c</div>
          `;
          item.addEventListener('click', () => {
            state.currentStudentId = st.id;
            toggleStudentMenu(false);
            renderAll();
          });
          list.appendChild(item);
        });
      }

      // Progress + goal + raised
      function renderProgress() {
        const s = getStudent();
        document.getElementById('raisedAmount').textContent = fmtMoney(s.raised);
        document.getElementById('goalAmount').textContent = fmtMoney(s.goal);
        document.getElementById('goalLabel').textContent = fmtMoney(s.goal);
        const pct = calcProgress(s.raised, s.goal);
        document.getElementById('progressBar').style.width = pct + '%';
        document.getElementById('progressLabel').textContent = pct + '%';
      }

      // Coins
      function renderCoins() {
        const s = getStudent();
        const coins = calcCoins(s.raised);
        document.getElementById('coinCount').textContent = coins;
        // Find next unlock
        const reqs = s.prizes.map(p => p.coins).sort((a,b)=>a-b);
        let next = 'All unlocked';
        for (let r of reqs) {
          if (coins < r) { next = `${r} coins`; break; }
        }
        document.getElementById('nextUnlock').textContent = next;
      }

      // Prize grid with custom checkbox
      function renderPrizes() {
        const s = getStudent();
        const coins = calcCoins(s.raised);
        const grid = document.getElementById('prizeGrid');
        grid.innerHTML = '';
        s.prizes.forEach(p => {
          const unlocked = coins >= p.coins;
          const card = document.createElement('div');
          card.className = 'relative rounded-lg border border-neutral-200 p-4 bg-white';
          card.innerHTML = `
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="h-9 w-9 rounded-md ${unlocked ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-500'} grid place-items-center">
                  <i data-lucide="gift" class="h-5 w-5"></i>
                </div>
                <div>
                  <div class="text-sm font-semibold tracking-tight ${unlocked ? 'text-neutral-900' : 'text-neutral-700'}">${p.title}</div>
                  <div class="text-xs text-neutral-600">${p.coins} coin${p.coins>1?'s':''} required</div>
                </div>
              </div>
              <button class="claim-toggle inline-flex items-center gap-2 text-sm rounded-md px-2.5 py-1.5 border ${p.claimed ? 'bg-neutral-900 text-white border-neutral-900' : 'border-neutral-200 text-neutral-700 hover:bg-neutral-50'}" data-prize="${p.id}" ${!unlocked ? 'disabled' : ''}>
                <i data-lucide="${p.claimed ? 'check' : 'circle'}" class="h-4 w-4"></i>
                ${p.claimed ? 'Claimed' : unlocked ? 'Mark Claimed' : 'Locked'}
              </button>
            </div>
            ${!unlocked ? `
              <div class="absolute inset-0 rounded-lg bg-white/60 pointer-events-none"></div>
              <div class="absolute top-3 right-3 text-xs inline-flex items-center gap-1 text-neutral-600">
                <i data-lucide="lock" class="h-4 w-4"></i> Locked
              </div>` : ''}
          `;
          grid.appendChild(card);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Attach handlers
        grid.querySelectorAll('.claim-toggle').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-prize');
            const prize = s.prizes.find(x => x.id === id);
            prize.claimed = !prize.claimed;
            renderPrizes();
          });
        });
      }

      // Invites section
      function renderInvites() {
        const s = getStudent();
        const list = document.getElementById('inviteList');
        list.innerHTML = '';
        const recent = [...s.invites].slice(-6).reverse();
        recent.forEach(inv => {
          const row = document.createElement('div');
          row.className = 'flex items-center gap-3 px-3 py-2.5 bg-white';
          row.innerHTML = `
            <div class="h-8 w-8 rounded-md ${inv.channel==='email'?'bg-neutral-900 text-white':'bg-neutral-100 text-neutral-700'} grid place-items-center">
              <i data-lucide="${inv.channel==='email'?'mail':'message-square'}" class="h-4 w-4"></i>
            </div>
            <div class="flex-1">
              <div class="text-sm font-medium text-neutral-800">${inv.name}</div>
              <div class="text-xs text-neutral-600">${inv.address}</div>
            </div>
            <div class="text-xs">
              ${inv.status === 'converted'
                ? '<span class="px-2 py-1 rounded bg-green-100 text-green-700">Converted</span>'
                : '<span class="px-2 py-1 rounded bg-neutral-100 text-neutral-700">Sent</span>'}
            </div>
            ${inv.amount ? `<div class="text-sm font-medium text-neutral-800">${fmtMoney(inv.amount)}</div>` : ''}
          `;
          list.appendChild(row);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const total = s.invites.length;
        const converted = s.invites.filter(i => i.status === 'converted').length;
        const emailCount = s.invites.filter(i => i.channel === 'email').length;
        const smsCount = s.invites.filter(i => i.channel === 'sms').length;
        document.getElementById('countInvites').textContent = total;
        document.getElementById('countConverted').textContent = converted;
        document.getElementById('countEmail').textContent = emailCount;
        document.getElementById('countSMS').textContent = smsCount;
      }

      // Invite modal form rows
      function newInviteRow(mode) {
        const row = document.createElement('div');
        row.className = 'flex flex-col sm:flex-row gap-2';
        row.innerHTML = `
          <input type="text" placeholder="Contact name" class="flex-1 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 px-3 py-2 text-sm" />
          ${mode === 'email'
            ? `<input type="email" placeholder="Email address" class="flex-[1.2] rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 px-3 py-2 text-sm" />`
            : `<input type="tel" placeholder="Phone number" class="flex-[1.2] rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 px-3 py-2 text-sm" />`}
          <button class="removeRow inline-flex items-center justify-center rounded-md border border-neutral-200 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
            <i data-lucide="trash-2" class="h-4 w-4"></i>
          </button>
        `;
        row.querySelector('.removeRow').addEventListener('click', () => {
          row.remove();
        });
        return row;
      }

      function openInviteModal() {
        const modal = document.getElementById('inviteModal');
        modal.classList.remove('hidden');
        buildInviteForm();
      }
      function closeInviteModal() {
        document.getElementById('inviteModal').classList.add('hidden');
      }
      function buildInviteForm() {
        const form = document.getElementById('inviteForm');
        form.innerHTML = '';
        form.appendChild(newInviteRow(state.inviteMode));
        form.appendChild(newInviteRow(state.inviteMode));
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        // Update segmented control visuals
        document.getElementById('modeEmail').className = 'invite-mode px-4 py-2 text-sm font-medium ' + (state.inviteMode==='email' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-50');
        document.getElementById('modeSMS').className = 'invite-mode px-4 py-2 text-sm font-medium ' + (state.inviteMode==='sms' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-50');
      }

      // Student menu toggle
      function toggleStudentMenu(show) {
        const menu = document.getElementById('studentMenu');
        if (show === undefined) menu.classList.toggle('hidden');
        else show ? menu.classList.remove('hidden') : menu.classList.add('hidden');
      }

      // Goal modal helpers
      function openGoalModal() {
        const s = getStudent();
        document.getElementById('goalInput').value = s.goal;
        document.getElementById('goalModal').classList.remove('hidden');
      }
      function closeGoalModal() {
        document.getElementById('goalModal').classList.add('hidden');
      }

      // Prize chart modal
      const openPrizeModal = () => document.getElementById('prizeModal').classList.remove('hidden');
      const closePrizeModal = () => document.getElementById('prizeModal').classList.add('hidden');

      // Photo upload
      function openPhotoPicker() {
        document.getElementById('photoInput').click();
      }
      function onPhotoSelected(e) {
        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        const s = getStudent();
        s.avatar = url;
        renderStudentSwitcher();
      }

      // Render all
      function renderAll() {
        renderCampaign();
        renderStudentSwitcher();
        renderProgress();
        renderCoins();
        renderPrizes();
        renderInvites();
      }

      // Actions
      document.addEventListener('DOMContentLoaded', () => {
        // Initial render
        renderAll();

        // Student switcher events
        document.getElementById('studentSwitcherBtn').addEventListener('click', () => toggleStudentMenu());
        document.addEventListener('click', (e) => {
          const sw = document.getElementById('studentSwitcher');
          if (!sw.contains(e.target)) toggleStudentMenu(false);
        });
        document.getElementById('addStudentFromMenu').addEventListener('click', () => {
          toggleStudentMenu(false);
          addMockStudent();
        });
        document.getElementById('addStudentBtn').addEventListener('click', addMockStudent);
        document.getElementById('addStudentBtnMobile').addEventListener('click', addMockStudent);

        // Invite modal triggers
        document.getElementById('sendInvitesBtn').addEventListener('click', openInviteModal);
        document.getElementById('openInviteModalFromSection').addEventListener('click', openInviteModal);
        document.getElementById('inviteModalClose').addEventListener('click', closeInviteModal);
        document.getElementById('modeEmail').addEventListener('click', () => { state.inviteMode = 'email'; buildInviteForm(); });
        document.getElementById('modeSMS').addEventListener('click', () => { state.inviteMode = 'sms'; buildInviteForm(); });
        document.getElementById('addRowBtn').addEventListener('click', () => {
          document.getElementById('inviteForm').appendChild(newInviteRow(state.inviteMode));
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });
        document.getElementById('sendInvitesAction').addEventListener('click', () => {
          const form = document.getElementById('inviteForm');
          const rows = form.querySelectorAll('div.flex');
          const s = getStudent();
          rows.forEach(r => {
            const [nameInput, contactInput] = r.querySelectorAll('input');
            const name = nameInput.value.trim() || 'Supporter';
            const address = contactInput.value.trim() || (state.inviteMode==='email' ? 'unknown@email' : '+1 000-000-0000');
            const inv = { id: 'i' + Math.random().toString(36).slice(2,7), name, channel: state.inviteMode, address, status: 'sent' };
            // Light gamified conversion chance
            if (Math.random() < 0.25) {
              inv.status = 'converted';
              inv.amount = [25, 50, 75, 100][Math.floor(Math.random()*4)];
              s.raised += inv.amount;
            }
            s.invites.push(inv);
          });
          closeInviteModal();
          renderAll();
        });

        // Goal modal
        document.getElementById('editGoalBtn').addEventListener('click', openGoalModal);
        document.getElementById('goalModalClose').addEventListener('click', closeGoalModal);
        document.getElementById('goalCancel').addEventListener('click', closeGoalModal);
        document.getElementById('goalSave').addEventListener('click', () => {
          const s = getStudent();
          const val = Number(document.getElementById('goalInput').value || 0);
          s.goal = Math.max(0, Math.round(val));
          closeGoalModal();
          renderProgress();
        });

        // Prize chart modal
        document.getElementById('viewPrizeChart').addEventListener('click', openPrizeModal);
        document.getElementById('prizeModalClose').addEventListener('click', closePrizeModal);
        document.getElementById('prizeModalDone').addEventListener('click', closePrizeModal);

        // Photo update
        document.getElementById('updatePhotoBtn').addEventListener('click', openPhotoPicker);
        document.getElementById('photoInput').addEventListener('change', onPhotoSelected);

        // Drawer (mobile)
        const drawer = document.getElementById('drawer');
        document.getElementById('mobileMenuBtn').addEventListener('click', () => drawer.classList.remove('hidden'));
        document.getElementById('drawerClose').addEventListener('click', () => drawer.classList.add('hidden'));
        document.getElementById('drawerOverlay').addEventListener('click', () => drawer.classList.add('hidden'));
      });

      // Add mock student (multi-child)
      function addMockStudent() {
        const id = 's' + Math.random().toString(36).slice(2,6);
        state.students.push({
          id,
          name: 'New Student',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
          school: 'Select School',
          teacher: 'Select Teacher',
          classroom: '—',
          goal: 500,
          raised: 0,
          invites: [],
          prizes: [
            { id: 'p1', title: 'Sticker Pack', coins: 1, claimed: false },
            { id: 'p2', title: 'Buddy Keychain', coins: 2, claimed: false },
            { id: 'p3', title: 'Homework Pass', coins: 4, claimed: false },
            { id: 'p4', title: 'Lunch with Principal', coins: 6, claimed: false }
          ]
        });
        state.currentStudentId = id;
        renderAll();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex">

<aside className="group hidden lg:flex lg:flex-col w-72 shrink-0 bg-white/90 backdrop-blur border-r border-neutral-200" id="sidebar">

<div className="h-16 flex items-center justify-between px-5 border-b border-neutral-200/80">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center tracking-tighter text-sm font-semibold">BF</div>
<div className="flex flex-col">
<span className="text-lg tracking-tight font-semibold">Buddy Fund</span>
<span className="text-xs text-neutral-500 -mt-0.5">Student Dashboard</span>
</div>
</div>
<button className="inline-flex items-center gap-1 text-neutral-700 hover:text-neutral-900 text-sm font-medium rounded-md border border-neutral-200/80 px-2.5 py-1.5" id="addStudentBtn">
<i className="h-4 w-4" data-lucide="user-plus"></i>
            Add
          </button>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-neutral-100 text-neutral-900" href="#overview">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
            Overview
          </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#invites">
<i className="h-4 w-4" data-lucide="send"></i>
            Invites
          </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#prizes">
<i className="h-4 w-4" data-lucide="gift"></i>
            Prize Chart
          </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#profile">
<i className="h-4 w-4" data-lucide="user"></i>
            Profile
          </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#help">
<i className="h-4 w-4" data-lucide="help-circle"></i>
            Help
          </a>
</nav>

<div className="mt-auto p-4 border-t border-neutral-200">
<div className="rounded-lg border border-neutral-200/80 p-3 bg-neutral-50/50">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-700">Campaign</span>
<span className="text-sm text-neutral-500" id="campaignName">Spring Drive</span>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm font-medium text-neutral-700">Ends</span>
<span className="text-sm text-neutral-500" id="campaignEnds">May 30</span>
</div>
<div className="mt-3">
<div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 rounded-full" id="campaignProgress" style={{width: '42%'}}></div>
</div>
<div className="mt-1.5 flex items-center justify-between text-xs text-neutral-600">
<span>School Progress</span>
<span className="font-medium" id="campaignProgressLabel">42%</span>
</div>
</div>
</div>
</div>
</aside>

<div className="lg:hidden fixed top-0 inset-x-0 h-14 bg-white/90 backdrop-blur border-b border-neutral-200 z-30 flex items-center justify-between px-4">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center tracking-tighter text-sm font-semibold">BF</div>
<span className="text-base font-semibold tracking-tight">Buddy Fund</span>
</div>
<button className="inline-flex items-center gap-1 text-neutral-700 hover:text-neutral-900 text-sm font-medium rounded-md border border-neutral-200 px-2.5 py-1.5" id="addStudentBtnMobile">
<i className="h-4 w-4" data-lucide="user-plus"></i>
          Add
        </button>
</div>

<div className="fixed inset-0 z-40 lg:hidden hidden" id="drawer">
<div className="absolute inset-0 bg-black/20" id="drawerOverlay"></div>
<div className="absolute inset-y-0 left-0 w-72 bg-white border-r border-neutral-200 flex flex-col">
<div className="h-14 flex items-center justify-between px-4 border-b border-neutral-200">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center tracking-tighter text-sm font-semibold">BF</div>
<span className="text-base font-semibold tracking-tight">Buddy Fund</span>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200" id="drawerClose">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-neutral-100 text-neutral-900" href="#overview">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
              Overview
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#invites">
<i className="h-4 w-4" data-lucide="send"></i>
              Invites
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#prizes">
<i className="h-4 w-4" data-lucide="gift"></i>
              Prize Chart
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#profile">
<i className="h-4 w-4" data-lucide="user"></i>
              Profile
            </a>
<a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" href="#help">
<i className="h-4 w-4" data-lucide="help-circle"></i>
              Help
            </a>
</nav>
</div>
</div>

<main className="flex-1 min-w-0 w-full lg:pl-0">

<div className="lg:hidden h-14"></div>

<header className="border-b border-neutral-200 bg-white/70 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative" id="studentSwitcher">
<button className="flex items-center gap-3 bg-neutral-100 hover:bg-neutral-200/70 rounded-lg px-3 py-2 border border-neutral-200/80" id="studentSwitcherBtn">
<img alt="avatar" className="h-8 w-8 rounded-md object-cover" id="studentAvatar" src=""/>
<div className="flex flex-col items-start">
<span className="text-base font-semibold tracking-tight" id="studentName">Student</span>
<span className="text-xs text-neutral-600" id="studentMeta">School • Teacher</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-2 w-72 bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden" id="studentMenu">
<div className="max-h-72 overflow-auto divide-y divide-neutral-100" id="studentList"></div>
<button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50" id="addStudentFromMenu">
<i className="h-4 w-4" data-lucide="user-plus"></i>
                    Add Student
                  </button>
</div>
</div>

<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-600">
<i className="h-4 w-4" data-lucide="target"></i>
<span>Goal:</span>
<button className="inline-flex items-center gap-1 font-medium text-neutral-800 hover:underline" id="editGoalBtn">
<span id="goalLabel">$0</span>
<i className="h-3.5 w-3.5" data-lucide="pencil"></i>
</button>
</div>
</div>

<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-md px-4 py-2 text-sm font-medium" id="sendInvitesBtn">
<i className="h-4 w-4" data-lucide="send"></i>
                Send Invites
              </button>
<button className="hidden sm:inline-flex items-center gap-2 border border-neutral-200 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50" id="shareBtn">
<i className="h-4 w-4" data-lucide="share-2"></i>
                Share
              </button>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="overview">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 space-y-6">

<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-start justify-between">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Fundraising Progress</h2>
<p className="text-sm text-neutral-600 mt-1">Keep going! Every invite helps reach the goal.</p>
</div>
<div className="text-right">
<div className="text-sm text-neutral-600">Raised</div>
<div className="text-xl tracking-tight font-semibold text-neutral-900" id="raisedAmount">$0</div>
</div>
</div>
<div className="mt-4">
<div className="w-full h-3 rounded-full bg-neutral-200 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700" id="progressBar" style={{width: '0%'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-sm text-neutral-600">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="activity"></i>
<span id="progressLabel">0%</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="trophy"></i>
<span>Goal: <span className="font-medium text-neutral-800" id="goalAmount">$0</span></span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-5" id="invites">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Invites</h3>
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900" id="openInviteModalFromSection">
<i className="h-4 w-4" data-lucide="send"></i>
                    Send More Invites
                  </button>
</div>
<div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">Total Invites</div>
<div className="text-lg tracking-tight font-semibold" id="countInvites">0</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">Converted</div>
<div className="text-lg tracking-tight font-semibold" id="countConverted">0</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">Email Invites</div>
<div className="text-lg tracking-tight font-semibold" id="countEmail">0</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">SMS Invites</div>
<div className="text-lg tracking-tight font-semibold" id="countSMS">0</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h4 className="text-base font-semibold tracking-tight">Recent</h4>
<button className="text-sm text-neutral-600 hover:text-neutral-900" id="viewAllInvites">View all</button>
</div>
<div className="mt-3 divide-y divide-neutral-100 border border-neutral-200 rounded-lg overflow-hidden bg-white" id="inviteList"></div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="rounded-2xl border border-neutral-200 bg-white p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Buddy Coins</h3>
<div className="text-xs text-neutral-600">Rule: $75 = 1 coin</div>
</div>
<div className="mt-4 flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-neutral-900 text-white grid place-items-center">
<i className="h-6 w-6" data-lucide="coins"></i>
</div>
<div>
<div className="text-sm text-neutral-600">Coins Earned</div>
<div className="text-2xl tracking-tight font-semibold" id="coinCount">0</div>
</div>
</div>
<div className="mt-4 rounded-lg border border-neutral-200 p-3 bg-neutral-50/50">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-600">Next prize unlocks at</span>
<span className="font-medium text-neutral-800" id="nextUnlock">—</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-5" id="prizes">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Prize Chart</h3>
<button className="text-sm text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1" id="viewPrizeChart">
<i className="h-4 w-4" data-lucide="image"></i>
                    View Chart
                  </button>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3" id="prizeGrid"></div>
<p className="mt-3 text-xs text-neutral-500">Prizes are for motivation only; fulfillment handled by the school.</p>
</div>
</div>
</div>

<div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5" id="profile">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Profile</h3>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 border border-neutral-200 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50" id="updatePhotoBtn">
<i className="h-4 w-4" data-lucide="upload"></i>
                  Update Photo
                </button>
<button className="inline-flex items-center gap-2 border border-neutral-200 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50" id="editMetaBtn">
<i className="h-4 w-4" data-lucide="pencil"></i>
                  Edit
                </button>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">Student</div>
<div className="text-lg tracking-tight font-semibold" id="profileStudentName">—</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">School</div>
<div className="text-lg tracking-tight font-semibold" id="profileSchool">—</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">Teacher</div>
<div className="text-lg tracking-tight font-semibold" id="profileTeacher">—</div>
</div>
<div className="rounded-lg border border-neutral-200 p-4 bg-neutral-50/50">
<div className="text-sm text-neutral-600">Classroom</div>
<div className="text-lg tracking-tight font-semibold" id="profileClassroom">—</div>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 z-50 hidden" id="inviteModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-2xl rounded-2xl bg-white border border-neutral-200 shadow-xl overflow-hidden">
<div className="p-4 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="send"></i>
<h3 className="text-lg tracking-tight font-semibold">Send Invites</h3>
</div>
<button className="h-9 w-9 rounded-md border border-neutral-200 grid place-items-center" id="inviteModalClose">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4">

<div className="inline-flex rounded-lg border border-neutral-200 overflow-hidden">
<button className="invite-mode px-4 py-2 text-sm font-medium bg-neutral-900 text-white" id="modeEmail">Email</button>
<button className="invite-mode px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50" id="modeSMS">SMS</button>
</div>

<div className="mt-4 space-y-3" id="inviteForm">

</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 border border-neutral-200 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50" id="addRowBtn">
<i className="h-4 w-4" data-lucide="plus"></i>
                Add another
              </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-md px-4 py-2 text-sm font-medium" id="sendInvitesAction">
<i className="h-4 w-4" data-lucide="send"></i>
                  Send
                </button>
</div>
</div>
<div className="mt-4 rounded-lg border border-neutral-200 p-3 bg-neutral-50/50 text-sm text-neutral-600">
              Tips: Personalize messages for better conversions.
            </div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="goalModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-md rounded-2xl bg-white border border-neutral-200 shadow-xl overflow-hidden">
<div className="p-4 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="target"></i>
<h3 className="text-lg tracking-tight font-semibold">Edit Goal</h3>
</div>
<button className="h-9 w-9 rounded-md border border-neutral-200 grid place-items-center" id="goalModalClose">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4 space-y-3">
<label className="block text-sm font-medium text-neutral-700">Amount</label>
<div className="flex items-center gap-2">
<span className="text-neutral-500">$</span>
<input className="flex-1 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 px-3 py-2 text-sm" id="goalInput" min="0" placeholder="e.g., 500" type="number"/>
</div>
<div className="flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 border border-neutral-200 rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50" id="goalCancel">Cancel</button>
<button className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-md px-4 py-2 text-sm font-medium" id="goalSave">Save</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="prizeModal">
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-3xl rounded-2xl bg-white border border-neutral-200 shadow-xl overflow-hidden">
<div className="p-4 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="image"></i>
<h3 className="text-lg tracking-tight font-semibold">Prize Chart</h3>
</div>
<button className="h-9 w-9 rounded-md border border-neutral-200 grid place-items-center" id="prizeModalClose">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="p-4">
<div className="rounded-lg border border-neutral-200 bg-neutral-50/50 p-6 grid place-items-center">
<div className="text-center">
<i className="h-8 w-8 mx-auto text-neutral-700" data-lucide="gift"></i>
<p className="mt-2 text-sm text-neutral-600">Upload or connect visual prize chart in admin settings.</p>
</div>
</div>
</div>
<div className="p-4 border-t border-neutral-200 flex items-center justify-end">
<button className="inline-flex items-center gap-2 bg-neutral-900 text-white rounded-md px-4 py-2 text-sm font-medium" id="prizeModalDone">Done</button>
</div>
</div>
</div>
</div>

<input accept="image/*" className="hidden" id="photoInput" type="file"/>


    </>
  );
}
