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



    // Initial App State
    const state = {
      user: null,
      stats: { today_completed: 0, today_accepted: 0 },
      filter: 'All',
      lang: 'en',
      staff: ['Ahmed', 'Priya', 'Omar'],
      orders: [
        {
          order_id: 'ORD-1010',
          room_number: '307',
          service_type: 'Laundry',
          details: '2 shirts, 1 pant',
          status: 'Pending Acceptance',
          accepted_by: null,
          transfer_to: null,
          time: '15:40'
        },
        {
          order_id: 'ORD-1009',
          room_number: '304',
          service_type: 'Room Service',
          details: 'Chicken Sandwich and Orange Juice',
          status: 'Accepted',
          accepted_by: 'Ahmed',
          transfer_to: null,
          time: '15:23'
        }
      ],
      selectedOrderId: null,
      notes: {},
      transferTarget: null
    };

    // i18n dictionary
    const i18n = {
      en: {
        app_title_hdr: 'AeroTag Assist',
        subtitle: 'Employee Operations',
        logout: 'Logout',
        login_title: 'AeroTag Assist Login',
        login_subtitle: 'Sign in with your Employee ID',
        employee_id_label: 'Employee ID',
        password_label: 'Password',
        login_btn_text: 'Login',
        welcome_prefix: 'Welcome,',
        progress_sub: 'Here’s your progress today',
        completed_orders_label: 'Completed Orders',
        accepted_orders_label: 'Accepted Orders',
        active_tasks_heading: 'Active Tasks',
        active_tasks_empty: 'No active orders yet.',
        dept_orders_heading: 'Department Orders',
        orders_subtitle: 'Accept new tasks or view ongoing ones',
        filter_all: 'All',
        filter_pending: 'Pending',
        filter_accepted: 'Accepted',
        back_text: 'Back',
        mark_ready_text: 'Mark as Ready',
        mark_delivered_text: 'Mark as Delivered',
        add_note_text: 'Add Note',
        save_note_text: 'Save Note',
        detail_room_label: 'Room',
        detail_type_label: 'Type',
        detail_details_label: 'Details',
        accept: 'Accept',
        accepted_by: 'Accepted by',
        view: 'View',
        transfer_text: 'Transfer',
        accept_transfer_text: 'Accept Transfer',
        transfer_to_title: 'Transfer to',
        select_staff_hint: 'Select staff',
        cancel_text: 'Cancel',
        send_transfer_text: 'Send Transfer',
        transfer_pending: 'Transfer Pending',
        nav_home_text: 'Home',
        nav_orders_text: 'Orders',
        toast_order_accepted: id => `Order ${id} accepted`,
        toast_note_saved: 'Note saved',
        toast_status_set: s => `Status set to ${s}`,
        toast_transfer_sent: 'Transfer requested',
        toast_transfer_accepted: 'Transfer accepted'
      },
      hi: {
        app_title_hdr: 'AeroTag Assist',
        subtitle: 'कर्मचारी संचालन',
        logout: 'लॉग आउट',
        login_title: 'AeroTag Assist लॉगिन',
        login_subtitle: 'अपने कर्मचारी आईडी से साइन इन करें',
        employee_id_label: 'कर्मचारी आईडी',
        password_label: 'पासवर्ड',
        login_btn_text: 'लॉग इन',
        welcome_prefix: 'स्वागत है,',
        progress_sub: 'आज की प्रगति',
        completed_orders_label: 'पूर्ण आदेश',
        accepted_orders_label: 'स्वीकृत आदेश',
        active_tasks_heading: 'सक्रिय कार्य',
        active_tasks_empty: 'कोई सक्रिय आदेश नहीं।',
        dept_orders_heading: 'विभाग आदेश',
        orders_subtitle: 'नए कार्य स्वीकार करें या जारी कार्य देखें',
        filter_all: 'सभी',
        filter_pending: 'लंबित',
        filter_accepted: 'स्वीकृत',
        back_text: 'वापस',
        mark_ready_text: 'तैयार चिह्नित करें',
        mark_delivered_text: 'डिलीवर चिह्नित करें',
        add_note_text: 'नोट जोड़ें',
        save_note_text: 'नोट सहेजें',
        detail_room_label: 'कमरा',
        detail_type_label: 'प्रकार',
        detail_details_label: 'विवरण',
        accept: 'स्वीकार करें',
        accepted_by: 'द्वारा स्वीकार',
        view: 'देखें',
        transfer_text: 'स्थानांतरण',
        accept_transfer_text: 'स्थानांतरण स्वीकार करें',
        transfer_to_title: 'स्थानांतरण करें',
        select_staff_hint: 'कर्मचारी चुनें',
        cancel_text: 'रद्द करें',
        send_transfer_text: 'स्थानांतरण भेजें',
        transfer_pending: 'स्थानांतरण लंबित',
        nav_home_text: 'होम',
        nav_orders_text: 'ऑर्डर्स',
        toast_order_accepted: id => `ऑर्डर ${id} स्वीकार किया गया`,
        toast_note_saved: 'नोट सहेजा गया',
        toast_status_set: s => `स्थिति ${s} कर दी गई`,
        toast_transfer_sent: 'स्थानांतरण अनुरोध भेजा गया',
        toast_transfer_accepted: 'स्थानांतरण स्वीकार किया गया'
      },
      ar: {
        app_title_hdr: 'AeroTag Assist',
        subtitle: 'عمليات الموظفين',
        logout: 'تسجيل الخروج',
        login_title: 'تسجيل الدخول',
        login_subtitle: 'سجل دخولك برقم الموظف',
        employee_id_label: 'رقم الموظف',
        password_label: 'كلمة المرور',
        login_btn_text: 'تسجيل الدخول',
        welcome_prefix: 'مرحباً،',
        progress_sub: 'تقدمك اليوم',
        completed_orders_label: 'الطلبات المكتملة',
        accepted_orders_label: 'الطلبات المقبولة',
        active_tasks_heading: 'المهام النشطة',
        active_tasks_empty: 'لا توجد طلبات نشطة.',
        dept_orders_heading: 'طلبات القسم',
        orders_subtitle: 'اقبل مهاماً جديدة أو اعرض الجارية',
        filter_all: 'الكل',
        filter_pending: 'قيد الانتظار',
        filter_accepted: 'مقبولة',
        back_text: 'رجوع',
        mark_ready_text: 'تحديد كجاهز',
        mark_delivered_text: 'تحديد كمسلّم',
        add_note_text: 'إضافة ملاحظة',
        save_note_text: 'حفظ الملاحظة',
        detail_room_label: 'الغرفة',
        detail_type_label: 'النوع',
        detail_details_label: 'التفاصيل',
        accept: 'قبول',
        accepted_by: 'قُبلت بواسطة',
        view: 'عرض',
        transfer_text: 'تحويل',
        accept_transfer_text: 'قبول التحويل',
        transfer_to_title: 'تحويل إلى',
        select_staff_hint: 'اختر الموظف',
        cancel_text: 'إلغاء',
        send_transfer_text: 'إرسال التحويل',
        transfer_pending: 'تحويل قيد الموافقة',
        nav_home_text: 'الرئيسية',
        nav_orders_text: 'الطلبات',
        toast_order_accepted: id => `تم قبول الطلب ${id}`,
        toast_note_saved: 'تم حفظ الملاحظة',
        toast_status_set: s => `تم تعيين الحالة إلى ${s}`,
        toast_transfer_sent: 'تم إرسال طلب التحويل',
        toast_transfer_accepted: 'تم قبول التحويل'
      }
    };

    // Helpers
    const $ = (s, root = document) => root.querySelector(s);
    const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

    function tKey(k) {
      const lang = state.lang;
      return i18n[lang][k] ?? i18n['en'][k] ?? '';
    }
    function tFormat(fnOrStr, arg) {
      if (typeof fnOrStr === 'function') return fnOrStr(arg);
      return fnOrStr;
    }

    function applyI18n() {
      $('#app_title_hdr').textContent = tKey('app_title_hdr');
      $('#subtitle').textContent = tKey('subtitle');
      $('#logout_text').textContent = tKey('logout');

      $('#login_title').textContent = tKey('login_title');
      $('#login_subtitle').textContent = tKey('login_subtitle');
      $('#employee_id_label').textContent = tKey('employee_id_label');
      $('#password_label').textContent = tKey('password_label');
      $('#login_btn_text').textContent = tKey('login_btn_text');

      $('#welcome_prefix').textContent = tKey('welcome_prefix');
      $('#progress_sub').textContent = tKey('progress_sub');
      $('#completed_orders_label').textContent = tKey('completed_orders_label');
      $('#accepted_orders_label').textContent = tKey('accepted_orders_label');
      $('#active_tasks_heading').textContent = tKey('active_tasks_heading');
      $('#active_tasks_empty').textContent = tKey('active_tasks_empty');

      $('#dept_orders_heading').textContent = tKey('dept_orders_heading');
      $('#orders_subtitle').textContent = tKey('orders_subtitle');
      $('#filter_all').textContent = tKey('filter_all');
      $('#filter_pending').textContent = tKey('filter_pending');
      $('#filter_accepted').textContent = tKey('filter_accepted');

      $('#back_text').textContent = tKey('back_text');
      $('#mark_ready_text').textContent = tKey('mark_ready_text');
      $('#mark_delivered_text').textContent = tKey('mark_delivered_text');
      $('#add_note_text').textContent = tKey('add_note_text');
      $('#save_note_text').textContent = tKey('save_note_text');
      $('#detail_room_label').textContent = tKey('detail_room_label');
      $('#detail_type_label').textContent = tKey('detail_type_label');
      $('#detail_details_label').textContent = tKey('detail_details_label');
      $('#transfer_text').textContent = tKey('transfer_text');
      $('#accept_transfer_text').textContent = tKey('accept_transfer_text');

      $('#transfer_to_title').textContent = tKey('transfer_to_title');
      $('#select_staff_hint').textContent = tKey('select_staff_hint');
      $('#cancel_text').textContent = tKey('cancel_text');
      $('#send_transfer_text').textContent = tKey('send_transfer_text');

      $('#nav_home_text').textContent = tKey('nav_home_text');
      $('#nav_orders_text').textContent = tKey('nav_orders_text');

      // lang label
      $('#lang_label').textContent = state.lang === 'en' ? 'EN' : state.lang === 'hi' ? 'HI' : 'AR';

      // direction for Arabic
      document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = state.lang;

      // Rerender dynamic lists to update button texts in lists
      renderHome();
      renderOrders();
      renderDetails();
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    function showToast(msg) {
      const el = $('#toast');
      $('#toast_msg').textContent = msg;
      el.classList.remove('hidden', 'opacity-0');
      el.classList.add('opacity-100');
      setTimeout(() => {
        el.classList.add('opacity-0');
        setTimeout(() => el.classList.add('hidden'), 250);
      }, 1300);
    }

    function createStatusPill(status, extra = {}) {
      const base = 'text-xs px-2.5 py-1 rounded-full border';
      if (status === 'Transfer Pending') {
        return `<span class="${base} border-black/10 bg-[#FFF6E5] text-black">${tKey('transfer_pending')}</span>`;
      }
      switch (status) {
        case 'Pending Acceptance': return `<span class="${base} border-black/10 bg-white text-black/70">${tKey('filter_pending')}</span>`;
        case 'Accepted': return `<span class="${base} border-black/10 bg-black/5 text-black">${tKey('filter_accepted')}</span>`;
        case 'In Progress': return `<span class="${base} border-black/10 bg-black/5 text-black">In Progress</span>`;
        case 'Ready': return `<span class="${base} border-black/10 bg-white text-black/80">Ready</span>`;
        case 'Completed': return `<span class="${base} border-black/10 bg-white text-black/80">Completed</span>`;
        default: return `<span class="${base} border-black/10 bg-white text-black/70">${status}</span>`;
      }
    }

    // Navigation
    function setHeaderAndNavVisibility(screenId) {
      const hideHeader = screenId === 'login_screen';
      $('#appHeader').classList.toggle('hidden', hideHeader);
      $('#bottom_nav').classList.toggle('hidden', hideHeader);
    }

    function navigate(screenId) {
      $$('#login_screen, #home_screen, #orders_screen, #order_details_screen').forEach(sec => sec.classList.add('hidden'));
      $('#' + screenId).classList.remove('hidden');
      setHeaderAndNavVisibility(screenId);
      $$('#bottom_nav .nav-item').forEach(btn => {
        const active = btn.dataset.target === screenId;
        btn.classList.toggle('text-black', active);
        btn.classList.toggle('text-black/60', !active);
      });
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Rendering
    function renderHome() {
      $('#employee_name').textContent = state.user?.name || '—';
      $('#today_completed').textContent = state.stats.today_completed;
      $('#today_accepted').textContent = state.stats.today_accepted;

      const container = $('#accepted_orders_list');
      const items = state.orders.filter(o =>
        o.accepted_by === state.user?.name &&
        ['Accepted', 'In Progress', 'Ready', 'Transfer Pending'].includes(o.status)
      );
      container.innerHTML = items.map(o => `
        <button data-order-id="${o.order_id}" class="w-full text-left rounded-xl border border-black/10 bg-white hover:bg-black/5 active:bg-black/10 transition p-3.5">
          <div class="flex items-start justify-between">
            <div>
              <div class="flex items-center gap-2">
                <p class="text-[13px] font-medium tracking-tight">${o.service_type}</p>
                ${createStatusPill(o.status)}
                ${o.status === 'Transfer Pending' && o.transfer_to ? `<span class="text-[11px] px-2 py-0.5 rounded-full border border-black/10 bg-[#F5F5F5]">${tKey('transfer_text')}: ${o.transfer_to}</span>` : ''}
              </div>
              <p class="text-[12px] text-black/60 mt-0.5">${o.details}</p>
              <div class="mt-2 flex items-center gap-2 text-[11px] text-black/60">
                <span class="inline-flex items-center gap-1"><i data-lucide="hash" class="w-3.5 h-3.5"></i>${o.order_id}</span>
                <span class="inline-flex items-center gap-1"><i data-lucide="door-open" class="w-3.5 h-3.5"></i>${tKey('detail_room_label')} ${o.room_number}</span>
                <span class="inline-flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i>${o.time || ''}</span>
              </div>
            </div>
            <i data-lucide="chevron-right" class="w-4.5 h-4.5 text-black/50 mt-1"></i>
          </div>
        </button>
      `).join('');

      $('#accepted_orders_empty').classList.toggle('hidden', items.length > 0 ? true : false);

      $$('#accepted_orders_list [data-order-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          state.selectedOrderId = btn.dataset.orderId;
          renderDetails();
          navigate('order_details_screen');
        });
      });

      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    function renderOrders() {
      $$('.filter-chip').forEach(chip => {
        const active = chip.dataset.filter === state.filter;
        chip.classList.toggle('bg-black', active);
        chip.classList.toggle('text-white', active);
        chip.classList.toggle('border', !active);
        chip.classList.toggle('border-black/0', active);
        chip.classList.toggle('border-black/10', !active);
      });

      let items = state.orders.slice();
      if (state.filter === 'Pending') items = items.filter(o => o.status === 'Pending Acceptance');
      if (state.filter === 'Accepted') items = items.filter(o => o.status !== 'Pending Acceptance');

      const list = $('#orders_list');
      list.innerHTML = items.map(o => {
        const accepted = !!o.accepted_by && o.status !== 'Pending Acceptance';
        const canAcceptTransfer = o.status === 'Transfer Pending' && o.transfer_to === state.user?.name;
        return `
          <div class="rounded-xl border border-black/10 p-3.5 bg">
            <div class="flex items-start justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <p class="text-[13px] font-medium tracking-tight">${o.service_type}</p>
                  <span class="text-[11px] px-2 py-0.5 rounded-full border border-black/10 bg-[#F5F5F5]">${tKey('detail_room_label')} ${o.room_number}</span>
                </div>
                <p class="text-[12px] text-black/60 mt-0.5">${o.details}</p>
                <div class="mt-2 flex items-center gap-2 text-[11px] text-black/60">
                  <span class="inline-flex items-center gap-1"><i data-lucide="hash" class="w-3.5 h-3.5"></i>${o.order_id}</span>
                  ${createStatusPill(o.status)}
                  ${accepted ? `<span class="inline-flex items-center gap-1"><i data-lucide="user" class="w-3.5 h-3.5"></i>${tKey('accepted_by')} ${o.accepted_by}</span>` : ''}
                  ${o.status === 'Transfer Pending' && o.transfer_to ? `<span class="inline-flex items-center gap-1"><i data-lucide="send" class="w-3.5 h-3.5"></i>${tKey('transfer_text')}: ${o.transfer_to}</span>` : ''}
                </div>
              </div>
            </div>
            <div class="mt-3 flex items-center gap-2">
              ${o.status === 'Pending Acceptance' ? `
                <button data-accept="${o.order_id}" class="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white py-2.5 text-sm font-medium tracking-tight hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-4 focus:ring-black/20 transition">
                  <i data-lucide="hand" class="w-4.5 h-4.5"></i> ${tKey('accept')}
                </button>
              ` : `
                ${canAcceptTransfer ? `
                  <button data-accept-transfer="${o.order_id}" class="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white py-2.5 text-sm font-medium tracking-tight hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-4 focus:ring-black/20 transition">
                    <i data-lucide="user-check" class="w-4.5 h-4.5"></i> ${tKey('accept_transfer_text')}
                  </button>
                ` : `
                  <button disabled class="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-[#E0E0E0] text-[#7D7D7D] py-2.5 text-sm">
                    <i data-lucide="check" class="w-4.5 h-4.5"></i> ${tKey('accepted_by')} ${o.accepted_by || '-'}
                  </button>
                `}
                <button data-open="${o.order_id}" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-black/10 hover:bg-black/5 active:bg-black/10 text-[13px]">
                  <i data-lucide="eye" class="w-4 h-4"></i> ${tKey('view')}
                </button>
              `}
            </div>
          </div>
        `;
      }).join('');

      // Attach accept handlers
      $$('[data-accept]').forEach(btn => {
        btn.addEventListener('click', () => acceptOrder(btn.dataset.accept));
      });
      // Attach open handlers
      $$('[data-open]').forEach(btn => {
        btn.addEventListener('click', () => {
          state.selectedOrderId = btn.dataset.open;
          renderDetails();
          navigate('order_details_screen');
        });
      });
      // Attach accept transfer handlers
      $$('[data-accept-transfer]').forEach(btn => {
        btn.addEventListener('click', () => {
          acceptTransfer(btn.dataset.acceptTransfer);
        });
      });

      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    function renderDetails() {
      const o = state.orders.find(x => x.order_id === state.selectedOrderId);
      if (!o) return;

      $('#detail_service_type').textContent = o.service_type;
      $('#detail_order_id').textContent = o.order_id;
      $('#detail_room').textContent = o.room_number;
      $('#detail_type').textContent = o.service_type;
      $('#detail_details').textContent = o.details;

      const pill = $('#detail_status_pill');
      pill.textContent = (o.status === 'Transfer Pending') ? tKey('transfer_pending') : o.status;
      pill.className = 'text-xs px-2.5 py-1 rounded-full border';
      pill.classList.add('border-black/10', (o.status === 'Accepted' || o.status === 'In Progress') ? 'bg-black/5' : (o.status === 'Transfer Pending' ? 'bg-[#FFF6E5]' : 'bg-white'));

      const isMine = o.accepted_by === state.user?.name;
      const isTarget = o.transfer_to === state.user?.name && o.status === 'Transfer Pending';

      // Buttons visibility / state
      const readyBtn = $('#mark_ready_btn');
      const deliveredBtn = $('#mark_delivered_btn');
      const transferBtn = $('#transfer_btn');
      const acceptTransferBtn = $('#accept_transfer_btn');

      // Toggle accept transfer vs action buttons
      acceptTransferBtn.classList.toggle('hidden', !isTarget);
      readyBtn.classList.toggle('hidden', isTarget);
      deliveredBtn.classList.toggle('hidden', isTarget);
      transferBtn.classList.toggle('hidden', isTarget);

      // Enablement rules
      const disableActions = !isMine || ['Ready', 'Completed', 'Transfer Pending'].includes(o.status);
      readyBtn.disabled = disableActions;
      deliveredBtn.disabled = !isMine || ['Completed', 'Transfer Pending'].includes(o.status);
      transferBtn.disabled = !isMine || ['Ready', 'Completed', 'Transfer Pending'].includes(o.status);

      [readyBtn, deliveredBtn, transferBtn].forEach(btn => {
        btn.classList.toggle('opacity-60', btn.disabled);
      });

      // Note area state
      const note = state.notes[o.order_id] || '';
      if (note) {
        $('#note_area').classList.remove('hidden');
        $('#order_note').value = note;
      } else {
        $('#order_note').value = '';
        $('#note_area').classList.add('hidden');
      }

      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }

    // Actions
    function acceptOrder(orderId) {
      const o = state.orders.find(x => x.order_id === orderId);
      if (!o || !state.user) return;
      o.status = 'Accepted';
      o.accepted_by = state.user.name;
      o.transfer_to = null;
      state.stats.today_accepted = state.orders.filter(or => or.accepted_by === state.user.name).length;
      showToast(tFormat(tKey('toast_order_accepted'), orderId));
      renderHome();
      renderOrders();
      navigate('home_screen');
    }

    function updateStatus(orderId, newStatus) {
      const o = state.orders.find(x => x.order_id === orderId);
      if (!o) return;
      o.status = newStatus;
      if (newStatus === 'Completed') {
        state.stats.today_completed += 1;
      }
      renderHome();
      renderOrders();
      renderDetails();
      showToast(tFormat(tKey('toast_status_set'), (newStatus === 'Transfer Pending' ? tKey('transfer_pending') : newStatus)));
    }

    function openTransferModal() {
      // Build staff list excluding current assigned and current user
      const o = state.orders.find(x => x.order_id === state.selectedOrderId);
      const candidates = state.staff.filter(name => name !== state.user?.name && name !== o?.accepted_by);
      const list = $('#staff_list');
      state.transferTarget = null;
      list.innerHTML = candidates.map(name => `
        <button data-staff="${name}" class="w-full flex items-center justify-between rounded-md border border-black/10 px-3 py-2 hover:bg-black/5">
          <span class="text-sm">${name}</span>
          <i data-lucide="plus" class="w-4 h-4"></i>
        </button>
      `).join('');
      $('#transfer_modal').classList.remove('hidden');
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      $$('[data-staff]').forEach(btn => {
        btn.addEventListener('click', () => {
          $$('[data-staff]').forEach(b => b.classList.remove('bg-black/5'));
          btn.classList.add('bg-black/5');
          state.transferTarget = btn.dataset.staff;
        });
      });
    }

    function closeTransferModal() {
      $('#transfer_modal').classList.add('hidden');
      state.transferTarget = null;
    }

    function sendTransfer() {
      const o = state.orders.find(x => x.order_id === state.selectedOrderId);
      if (!o || !state.transferTarget) return;
      o.transfer_to = state.transferTarget;
      o.status = 'Transfer Pending';
      closeTransferModal();
      renderHome();
      renderOrders();
      renderDetails();
      showToast(tKey('toast_transfer_sent'));
    }

    function acceptTransfer(orderId) {
      const o = state.orders.find(x => x.order_id === orderId);
      if (!o || !state.user) return;
      if (o.transfer_to === state.user.name && o.status === 'Transfer Pending') {
        o.accepted_by = state.user.name;
        o.transfer_to = null;
        o.status = 'Accepted';
        state.stats.today_accepted = state.orders.filter(or => or.accepted_by === state.user.name).length;
        renderHome();
        renderOrders();
        if (state.selectedOrderId === orderId) renderDetails();
        showToast(tKey('toast_transfer_accepted'));
      }
    }

    function markDelivered() {
      if (!state.selectedOrderId) return;
      const o = state.orders.find(x => x.order_id === state.selectedOrderId);
      if (!o) return;
      updateStatus(o.order_id, 'Completed');
    }

    // Event Listeners
    // Bottom nav
    $$('#bottom_nav .nav-item').forEach(btn => {
      btn.addEventListener('click', () => navigate(btn.dataset.target));
    });

    // Filters
    $$('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.filter = chip.dataset.filter;
        renderOrders();
      });
    });

    // Login
    $('#loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const id = $('#employee_id').value.trim();
      if (!id) return;
      state.user = { id, name: `Agent ${id}` };
      state.stats.today_accepted = state.orders.filter(o => o.accepted_by === state.user.name).length;
      state.stats.today_completed = 0;
      applyI18n();
      renderHome();
      renderOrders();
      navigate('home_screen');
    });

    // Logout
    $('#logoutBtn').addEventListener('click', () => {
      state.user = null;
      state.filter = 'All';
      $('#employee_id').value = '';
      $('#password').value = '';
      navigate('login_screen');
    });

    // Details screen actions
    $('#back_to_orders').addEventListener('click', () => navigate('orders_screen'));
    $('#mark_ready_btn').addEventListener('click', () => {
      if (!state.selectedOrderId) return;
      const o = state.orders.find(x => x.order_id === state.selectedOrderId);
      if (!o) return;
      if (o.status === 'Accepted' || o.status === 'In Progress') {
        updateStatus(o.order_id, 'Ready');
      } else if (o.status === 'Ready') {
        updateStatus(o.order_id, 'Completed');
      } else if (o.status === 'Pending Acceptance') {
        updateStatus(o.order_id, 'Accepted');
      }
    });
    $('#mark_delivered_btn').addEventListener('click', () => markDelivered());
    $('#transfer_btn').addEventListener('click', () => openTransferModal());
    $('#accept_transfer_btn').addEventListener('click', () => {
      if (!state.selectedOrderId) return;
      acceptTransfer(state.selectedOrderId);
    });

    $('#add_note_toggle').addEventListener('click', () => {
      $('#note_area').classList.toggle('hidden');
    });
    $('#save_note_btn').addEventListener('click', () => {
      const id = state.selectedOrderId;
      if (!id) return;
      state.notes[id] = $('#order_note').value.trim();
      showToast(tKey('toast_note_saved'));
    });

    // Language Switcher
    $('#lang_btn').addEventListener('click', (e) => {
      e.stopPropagation();
      $('#lang_menu').classList.toggle('hidden');
    });
    $$('#lang_menu [data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lang = btn.dataset.lang;
        $('#lang_menu').classList.add('hidden');
        applyI18n();
      });
    });
    window.addEventListener('click', (e) => {
      if (!$('#lang_menu').classList.contains('hidden')) {
        $('#lang_menu').classList.add('hidden');
      }
    });

    // Transfer modal buttons
    $('#transfer_close').addEventListener('click', closeTransferModal);
    $('#transfer_cancel').addEventListener('click', closeTransferModal);
    $('#transfer_send').addEventListener('click', sendTransfer);

    // Initial view
    setHeaderAndNavVisibility('login_screen');
    navigate('login_screen');
    applyI18n();
  


    // Initialize lucide icons
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  
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
      
<div className="mx-auto w-full max-w-sm min-h-screen flex flex-col">

<header className="sticky top-0 z-20 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5" id="appHeader">
<div className="px-4 pt-3 pb-3 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div aria-label="AeroTag" className="h-8 w-8 rounded-md bg-black text-white grid place-items-center tracking-tight text-[13px] font-medium">AT</div>
<div className="leading-none">
<p className="text-sm font-medium tracking-tight" id="app_title_hdr">AeroTag Assist</p>
<p className="text-[11px] text-black/60" id="subtitle">Employee Operations</p>
</div>
</div>
<div className="flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-md border border-black/10 hover:border-black/40 hover:bg-black/5 active:bg-black/10 transition-colors" id="lang_btn">
<i className="w-4 h-4" data-lucide="globe"></i>
<span id="lang_label">EN</span>
</button>
<div className="hidden absolute right-0 mt-1 w-40 rounded-md border border-black/10 bg-white shadow-sm p-1.5" id="lang_menu">
<button className="w-full text-left px-2.5 py-1.5 rounded-md text-[13px] hover:bg-black/5" data-lang="en">English</button>
<button className="w-full text-left px-2.5 py-1.5 rounded-md text-[13px] hover:bg-black/5" data-lang="hi">हिंदी</button>
<button className="w-full text-left px-2.5 py-1.5 rounded-md text-[13px] hover:bg-black/5" data-lang="ar">العربية</button>
</div>
</div>
<button className="inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-md border border-black/10 hover:border-black/40 hover:bg-black/5 active:bg-black/10 transition-colors" id="logoutBtn">
<i className="w-4 h-4" data-lucide="log-out"></i>
<span id="logout_text">Logout</span>
</button>
</div>
</div>
</header>

<main className="flex-1 relative">

<section className="min-h-[calc(100vh-0px)] flex flex-col" id="login_screen">
<div className="flex-1 grid place-items-center px-5 pb-28 pt-10">
<div className="w-full">
<div className="mb-7 flex flex-col items-center">
<div className="h-14 w-14 rounded-xl bg-black text-white grid place-items-center tracking-tight text-[18px] font-medium">AT</div>
<h1 className="mt-4 text-2xl tracking-tight font-semibold" id="login_title">AeroTag Assist Login</h1>
<p className="mt-1 text-sm text-black/60" id="login_subtitle">Sign in with your Employee ID</p>
</div>
<form className="space-y-4" id="loginForm">
<div>
<label className="block text-xs font-medium mb-1.5" htmlFor="employee_id" id="employee_id_label">Employee ID</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/60" data-lucide="badge-check"></i>
<input className="w-full rounded-lg border border-black/10 bg-white pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-4 focus:ring-black/10 focus:border-black/50 placeholder:text-black/40 transition" id="employee_id" inputmode="numeric" name="employee_id" placeholder="Enter your ID" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1.5" htmlFor="password" id="password_label">Password</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/60" data-lucide="lock"></i>
<input className="w-full rounded-lg border border-black/10 bg-white pl-9 pr-3 py-2.5 text-sm outline-none focus:ring-4 focus:ring-black/10 focus:border-black/50 placeholder:text-black/40 transition" id="password" name="password" placeholder="Enter password" required="" type="password"/>
</div>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white py-3 text-sm font-medium tracking-tight hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-4 focus:ring-black/20 transition" type="submit">
<i className="w-4.5 h-4.5" data-lucide="log-in"></i> <span id="login_btn_text">Login</span>
</button>
</form>
</div>
</div>
</section>

<section className="hidden" id="home_screen">
<div className="px-4 pt-4 pb-28">

<div className="mb-4">
<h2 className="text-[22px] leading-7 tracking-tight font-semibold">
<span id="welcome_prefix">Welcome,</span> <span id="employee_name">—</span>
</h2>
<p className="text-sm text-black/60 mt-1" id="progress_sub">Here’s your progress today</p>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl bg-[#F5F5F5] p-3.5 border border-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-white border border-black/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="check-circle"></i>
</div>
<span className="text-[11px] text-black/70" id="completed_orders_label">Completed Orders</span>
</div>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold" id="today_completed">0</div>
</div>
<div className="rounded-xl bg-[#F5F5F5] p-3.5 border border-black/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-white border border-black/10 grid place-items-center">
<i className="w-4.5 h-4.5" data-lucide="hand"></i>
</div>
<span className="text-[11px] text-black/70" id="accepted_orders_label">Accepted Orders</span>
</div>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold" id="today_accepted">0</div>
</div>
</div>

<div className="mt-6">
<h3 className="text-[15px] font-medium tracking-tight mb-2.5" id="active_tasks_heading">Active Tasks</h3>
<div className="space-y-2.5" id="accepted_orders_list"></div>
<div className="hidden rounded-lg border border-dashed border-black/10 p-4 text-center" id="accepted_orders_empty">
<p className="text-sm text-black/60" id="active_tasks_empty">No active orders yet.</p>
</div>
</div>
</div>
</section>

<section className="hidden" id="orders_screen">
<div className="px-4 pt-4 pb-28">
<div className="mb-3">
<h2 className="text-[22px] leading-7 tracking-tight font-semibold" id="dept_orders_heading">Department Orders</h2>
<p className="text-sm text-black/60 mt-1" id="orders_subtitle">Accept new tasks or view ongoing ones</p>
</div>

<div className="mb-4">
<div aria-label="Filter orders" className="inline-flex w-full rounded-lg border border-black/10 p-0.5 bg-white" role="tablist">
<button className="filter-chip flex-1 px-3 py-2 text-[13px] font-medium rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 transition" data-filter="All" id="filter_all">All</button>
<button className="filter-chip flex-1 px-3 py-2 text-[13px] font-medium rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 transition" data-filter="Pending" id="filter_pending">Pending</button>
<button className="filter-chip flex-1 px-3 py-2 text-[13px] font-medium rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 transition" data-filter="Accepted" id="filter_accepted">Accepted</button>
</div>
</div>

<div className="space-y-2.5" id="orders_list"></div>
</div>
</section>

<section className="hidden" id="order_details_screen">
<div className="px-4 pt-4 pb-28">
<button className="inline-flex items-center gap-1.5 text-[12px] mb-3 rounded-md border border-black/10 px-2.5 py-1.5 hover:bg-black/5 active:bg-black/10 transition" id="back_to_orders">
<i className="w-4 h-4" data-lucide="arrow-left"></i> <span id="back_text">Back</span>
</button>
<div className="rounded-xl border border-black/10 p-4">
<div className="flex items-start justify-between">
<div>
<h2 className="text-[18px] tracking-tight font-semibold" id="detail_service_type">—</h2>
<p className="text-sm text-black/60 mt-0.5">
                  Order <span className="font-medium text-black" id="detail_order_id">—</span>
</p>
</div>
<span className="text-xs px-2.5 py-1 rounded-full border border-black/10 bg-black/5" id="detail_status_pill">—</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-[#F5F5F5] border border-black/5 p-3">
<p className="text-[11px] text-black/60" id="detail_room_label">Room</p>
<p className="text-base font-medium tracking-tight mt-0.5" id="detail_room">—</p>
</div>
<div className="rounded-lg bg-[#F5F5F5] border border-black/5 p-3">
<p className="text-[11px] text-black/60" id="detail_type_label">Type</p>
<p className="text-base font-medium tracking-tight mt-0.5" id="detail_type">—</p>
</div>
</div>
<div className="mt-4">
<p className="text-[11px] text-black/60 mb-1.5" id="detail_details_label">Details</p>
<div className="text-sm border border-black/10 rounded-lg p-3 bg-white" id="detail_details">—</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="flex-1 min-w-[40%] inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white py-2.5 text-sm font-medium tracking-tight hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-4 focus:ring-black/20 transition" id="mark_ready_btn">
<i className="w-4.5 h-4.5" data-lucide="check"></i> <span id="mark_ready_text">Mark as Ready</span>
</button>
<button className="flex-1 min-w-[40%] inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white text-black py-2.5 text-sm font-medium hover:bg-black/5 active:bg-black/10 focus:outline-none focus:ring-4 focus:ring-black/10 transition" id="mark_delivered_btn">
<i className="w-4.5 h-4.5" data-lucide="package-check"></i> <span id="mark_delivered_text">Mark as Delivered</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white text-black px-3 py-2.5 text-sm font-medium hover:bg-black/5 active:bg-black/10 focus:outline-none focus:ring-4 focus:ring-black/10 transition" id="transfer_btn">
<i className="w-4.5 h-4.5" data-lucide="send"></i> <span id="transfer_text">Transfer</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white text-black px-3 py-2.5 text-sm font-medium hover:bg-black/5 active:bg-black/10 focus:outline-none focus:ring-4 focus:ring-black/10 transition" id="add_note_toggle">
<i className="w-4.5 h-4.5" data-lucide="sticky-note"></i> <span id="add_note_text">Add Note</span>
</button>

<button className="hidden flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white py-2.5 text-sm font-medium tracking-tight hover:opacity-90 active:opacity-80 focus:outline-none focus:ring-4 focus:ring-black/20 transition" id="accept_transfer_btn">
<i className="w-4.5 h-4.5" data-lucide="user-check"></i> <span id="accept_transfer_text">Accept Transfer</span>
</button>
</div>
<div className="hidden mt-3" id="note_area">
<textarea className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm outline-none focus:ring-4 focus:ring-black/10 focus:border-black/50 placeholder:text-black/40 transition" id="order_note" placeholder="Add an internal note..." rows="3"></textarea>
<div className="mt-2 flex justify-end">
<button className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-medium border border-black/10 hover:bg-black/5 active:bg-black/10 transition" id="save_note_btn">
<i className="w-4 h-4" data-lucide="save"></i> <span id="save_note_text">Save Note</span>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="pointer-events-none fixed left-1/2 -translate-x-1/2 bottom-20 z-40 hidden" id="toast">
<div className="rounded-lg bg-black text-white px-3.5 py-2 text-[13px] shadow-md">
<span id="toast_msg">Action completed</span>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70" id="bottom_nav">
<div className="mx-auto max-w-sm">
<div className="grid grid-cols-2">
<button className="nav-item group flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium" data-target="home_screen">
<i className="w-5 h-5" data-lucide="home"></i>
<span id="nav_home_text">Home</span>
</button>
<button className="nav-item group flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium" data-target="orders_screen">
<i className="w-5 h-5" data-lucide="list"></i>
<span id="nav_orders_text">Orders</span>
</button>
</div>
</div>
</nav>
</div>

<div className="hidden fixed inset-0 z-40" id="transfer_modal">
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-x-4 top-24 rounded-xl border border-black/10 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-medium tracking-tight" id="transfer_to_title">Transfer to</h3>
<button className="rounded-md border border-black/10 px-2 py-1 text-[12px] hover:bg-black/5 active:bg-black/10" id="transfer_close">✕</button>
</div>
<p className="text-[12px] text-black/60 mt-1" id="select_staff_hint">Select staff</p>
<div className="mt-3 space-y-2" id="staff_list"></div>
<div className="mt-3 flex justify-end gap-2">
<button className="rounded-md border border-black/10 px-3 py-2 text-[13px] hover:bg-black/5 active:bg-black/10" id="transfer_cancel">
<span id="cancel_text">Cancel</span>
</button>
<button className="rounded-md bg-black text-white px-3 py-2 text-[13px] font-medium hover:opacity-90 active:opacity-80" id="transfer_send">
<i className="w-4 h-4" data-lucide="send"></i> <span id="send_transfer_text">Send Transfer</span>
</button>
</div>
</div>
</div>



    </>
  );
}
