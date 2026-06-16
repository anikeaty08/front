import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#050505',
accent: '#3b82f6',
glass: 'rgba(255, 255, 255, 0.03)',
border: 'rgba(255, 255, 255, 0.08)'
},
fontFamily: {
sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // --- DATA: Translations ---
        const translations = {
            en: {
                nav_services: "Services", nav_roi: "ROI Calculator", nav_demos: "Demos", nav_packages: "Packages", nav_contact: "Contact", nav_book: "Book Consultation",
                hero_headline: "Silent, intelligent workflows.", hero_subhead: "We build autonomous systems that reclaim time and revenue. Precision engineering for modern businesses.",
                hero_cta_roi: "Calculate ROI", hero_cta_demos: "View Demos",
                proof_fast: "Faster Operations", proof_cost: "Lower Admin Cost", proof_response: "Better Customer Response",
                services_title: "Core Systems", serv_outcome: "Typical outcome:",
                serv_1_title: "Automation", serv_1_desc: "Custom node-based workflows that connect your apps without breakage.", serv_1_out: "90% less data entry",
                serv_2_title: "AI Agents", serv_2_desc: "Intelligent bots for customer support and internal operations.", serv_2_out: "24/7 Instant Replies",
                serv_3_title: "Data Pipelines", serv_3_desc: "Seamless syncing between CRM, ERP, and databases.", serv_3_out: "Real-time Dashboard",
                serv_4_title: "Monitoring & Alerts", serv_4_desc: "Self-healing systems with instant notifications on failure.", serv_4_out: "Zero Downtime",
                roi_title: "ROI Calculator", roi_subtitle: "Estimate the value of automating your manual workflows.",
                roi_goal_biz: "Business ROI", roi_goal_pers: "Personal Goals",
                roi_label_industry: "Industry", roi_label_role: "Role", roi_label_team: "Team Size", roi_label_curr: "Currency",
                roi_label_salary: "Monthly Cost/Salary", roi_btn_benchmark: "Use Typical Benchmarks",
                roi_label_hours_total: "Hours worked/week", roi_label_hours_saved: "Hours saved/week (per person)", roi_label_cost: "Est. Project Cost", roi_helper_cost: "Typical range depends on scope",
                out_hourly: "Hourly Value", out_monthly: "Monthly Value", out_time: "Time Recovered", out_payback: "Payback Time",
                roi_proj_title: "Cumulative Savings Projection", roi_sugg_title: "AI Suggestions", roi_rec_title: "Recommended Starter Templates",
                time_6m: "6 Mo", time_12m: "12 Mo", time_3y: "3 Yrs", time_5y: "5 Yrs", time_10y: "10 Yrs",
                rec_for: "Recommended for",
                demo_title: "Demo Library", demo_subtitle: "Production-style demos. Clean setup. Real outcomes.", demo_micro: "Pick a demo. We’ll deploy it to your stack.",
                filter_all: "All", filter_solo: "Solo", filter_agency: "Agency", filter_ecom: "E-commerce", filter_ops: "Ops", filter_sales: "Sales",
                demo_fallback_msg: "Showing universal demos instead.",
                demo_cta_title: "Want one of these running in your business?", demo_cta_req: "Request a Demo", demo_cta_audit: "Get a Quick Audit",
                pkg_title: "Engagement Models",
                pkg_1_name: "Pilot", pkg_1_desc: "Single workflow setup. Perfect for proof of concept.", pkg_1_f1: "1 Automation Workflow", pkg_1_f2: "Basic Error Handling", pkg_1_f3: "7-Day Delivery", btn_start: "Start Pilot",
                pkg_pop: "POPULAR", pkg_2_name: "Growth", pkg_2_desc: "Multi-step orchestration and AI agents for teams.", pkg_2_f1: "Multi-step Orchestration", pkg_2_f2: "Custom AI Agent", pkg_2_f3: "Admin Dashboard", pkg_2_f4: "2-3 Weeks Delivery", btn_scale: "Scale Up",
                pkg_3_name: "Partner", pkg_3_desc: "Full enterprise architecture and ongoing support.", pkg_3_f1: "System Architecture", pkg_3_f2: "Self-host Option", pkg_3_f3: "SLA & Priority Support", btn_contact: "Contact Us",
                case_title: "Recent Impacts",
                case_1_stat: "+40% Capacity", case_1_ind: "Logistics", case_1_desc: "Reduced manual dispatching errors and automated driver notifications.",
                case_2_stat: "15hrs/wk Saved", case_2_ind: "Finance", case_2_desc: "Automated compliance report generation across 4 banking portals.",
                case_3_stat: "-25% Chargebacks", case_3_ind: "E-commerce", case_3_desc: "Flagging high-risk orders automatically before fulfillment via API.",
                footer_title: "Ready to scale?", footer_sub: "Schedule a 15-minute discovery call. No sales pitch, just feasibility.",
                modal_how: "How it works", modal_in: "Inputs", modal_out: "Outputs",
                tag_ready: "Ready", tag_pilot: "Pilot-ready", btn_view: "View Demo"
            },
            tr: {
                nav_services: "Hizmetler", nav_roi: "ROI Hesaplayıcı", nav_demos: "Demolar", nav_packages: "Paketler", nav_contact: "İletişim", nav_book: "Randevu Al",
                hero_headline: "Sessiz, akıllı iş akışları.", hero_subhead: "Zaman ve gelir geri kazandıran otonom sistemler kuruyoruz. Modern işletmeler için hassas mühendislik.",
                hero_cta_roi: "ROI Hesapla", hero_cta_demos: "Demoları Gör",
                proof_fast: "Hızlı Operasyon", proof_cost: "Düşük Admin Maliyeti", proof_response: "Daha İyi Müşteri Yanıtı",
                services_title: "Çekirdek Sistemler", serv_outcome: "Tipik sonuç:",
                serv_1_title: "n8n Otomasyonu", serv_1_desc: "Uygulamalarınızı kırılmadan bağlayan özel düğüm tabanlı iş akışları.", serv_1_out: "%90 daha az veri girişi",
                serv_2_title: "AI Ajanları", serv_2_desc: "Müşteri desteği ve iç operasyonlar için akıllı botlar.", serv_2_out: "7/24 Anında Yanıt",
                serv_3_title: "Veri Hatları", serv_3_desc: "CRM, ERP ve veritabanları arasında kesintisiz senkronizasyon.", serv_3_out: "Gerçek zamanlı Dashboard",
                serv_4_title: "İzleme & Uyarılar", serv_4_desc: "Arıza durumunda anında bildirim veren kendi kendini onaran sistemler.", serv_4_out: "Sıfır Kesinti",
                roi_title: "ROI Hesaplayıcı", roi_subtitle: "Manuel iş akışlarını otomatikleştirmenin değerini tahmin edin.",
                roi_goal_biz: "İşletme ROI", roi_goal_pers: "Kişisel Hedefler",
                roi_label_industry: "Endüstri", roi_label_role: "Rol", roi_label_team: "Takım Boyutu", roi_label_curr: "Para Birimi",
                roi_label_salary: "Aylık Maliyet/Maaş", roi_btn_benchmark: "Tipik Değerleri Kullan",
                roi_label_hours_total: "Haftalık çalışma saati", roi_label_hours_saved: "Kurtarılan saat/hafta (kişi başı)", roi_label_cost: "Tahmini Proje Maliyeti", roi_helper_cost: "Aralık kapsama bağlıdır",
                out_hourly: "Saatlik Değer", out_monthly: "Aylık Değer", out_time: "Kurtarılan Zaman", out_payback: "Geri Ödeme Süresi",
                roi_proj_title: "Kümülatif Tasarruf Projeksiyonu", roi_sugg_title: "Yapay Zeka Önerileri", roi_rec_title: "Önerilen Başlangıç Şablonları",
                time_6m: "6 Ay", time_12m: "12 Ay", time_3y: "3 Yıl", time_5y: "5 Yıl", time_10y: "10 Yıl",
                rec_for: "Önerilen:",
                demo_title: "Demo Kütüphanesi", demo_subtitle: "Prodüksiyon tarzı demolar. Temiz kurulum. Gerçek sonuçlar.", demo_micro: "Bir demo seçin. Sizin sisteminize kuralım.",
                filter_all: "Tümü", filter_solo: "Solo", filter_agency: "Ajans", filter_ecom: "E-ticaret", filter_ops: "Ops", filter_sales: "Satış",
                demo_fallback_msg: "Evrensel demolar gösteriliyor.",
                demo_cta_title: "Bunlardan birinin işletmenizde çalışmasını ister misiniz?", demo_cta_req: "Demo Talep Et", demo_cta_audit: "Hızlı Denetim Al",
                pkg_title: "Çalışma Modelleri",
                pkg_1_name: "Pilot", pkg_1_desc: "Tek iş akışı kurulumu. Kavram kanıtı için mükemmel.", pkg_1_f1: "1 Otomasyon İş Akışı", pkg_1_f2: "Temel Hata Yönetimi", pkg_1_f3: "7 Günde Teslim", btn_start: "Pilotu Başlat",
                pkg_pop: "POPÜLER", pkg_2_name: "Büyüme", pkg_2_desc: "Çok adımlı orkestrasyon ve takımlar için AI ajanları.", pkg_2_f1: "Çok adımlı Orkestrasyon", pkg_2_f2: "Özel AI Ajanı", pkg_2_f3: "Yönetici Paneli", pkg_2_f4: "2-3 Hafta Teslim", btn_scale: "Büyümeye Geç",
                pkg_3_name: "Partner", pkg_3_desc: "Tam kurumsal mimari ve sürekli destek.", pkg_3_f1: "Sistem Mimarisi", pkg_3_f2: "Self-host Seçeneği", pkg_3_f3: "SLA & Öncelikli Destek", btn_contact: "Bize Ulaşın",
                case_title: "Son Etkiler",
                case_1_stat: "+%40 Kapasite", case_1_ind: "Lojistik", case_1_desc: "Manuel sevkiyat hataları azaltıldı ve sürücü bildirimleri otomatikleşti.",
                case_2_stat: "15sa/hafta Tasarruf", case_2_ind: "Finans", case_2_desc: "4 banka portalında otomatik uyumluluk raporu oluşturma.",
                case_3_stat: "-%25 İade", case_3_ind: "E-ticaret", case_3_desc: "Yüksek riskli siparişleri API aracılığıyla gönderimden önce işaretleme.",
                footer_title: "Büyümeye hazır mısınız?", footer_sub: "15 dakikalık bir keşif görüşmesi planlayın. Satış konuşması yok, sadece fizibilite.",
                modal_how: "Nasıl çalışır", modal_in: "Girdiler", modal_out: "Çıktılar",
                tag_ready: "Hazır", tag_pilot: "Pilot-hazır", btn_view: "Demoyu İncele"
            },
            es: { nav_services: "Servicios", nav_roi: "Calculadora ROI", nav_demos: "Demos", nav_book: "Reservar Consulta", hero_headline: "Flujos de trabajo silenciosos e inteligentes.", hero_cta_roi: "Calcular ROI", roi_title: "Calculadora ROI", demo_title: "Biblioteca de Demos", pkg_title: "Paquetes", footer_title: "¿Listo para escalar?", roi_btn_benchmark: "Usar Referencias", tag_ready: "Listo", btn_view: "Ver Demo", modal_how: "Cómo funciona", modal_in: "Entradas", modal_out: "Salidas", time_5y: "5 Años", time_10y: "10 Años", rec_for: "Recomendado para" },
            de: { nav_services: "Dienstleistungen", nav_roi: "ROI-Rechner", nav_demos: "Demos", nav_book: "Beratung Buchen", hero_headline: "Stille, intelligente Arbeitsabläufe.", hero_cta_roi: "ROI Berechnen", roi_title: "ROI-Rechner", demo_title: "Demo-Bibliothek", pkg_title: "Pakete", footer_title: "Bereit zu skalieren?", roi_btn_benchmark: "Benchmarks verwenden", tag_ready: "Bereit", btn_view: "Demo Ansehen", modal_how: "Wie es funktioniert", modal_in: "Eingaben", modal_out: "Ausgaben", time_5y: "5 Jahre", time_10y: "10 Jahre", rec_for: "Empfohlen für" },
            fr: { nav_services: "Services", nav_roi: "Calculateur ROI", nav_demos: "Démos", nav_book: "Réserver Consultation", hero_headline: "Flux de travail silencieux et intelligents.", hero_cta_roi: "Calculer ROI", roi_title: "Calculateur ROI", demo_title: "Bibliothèque de Démos", pkg_title: "Forfaits", footer_title: "Prêt à évoluer ?", roi_btn_benchmark: "Utiliser des repères", tag_ready: "Prêt", btn_view: "Voir Démo", modal_how: "Comment ça marche", modal_in: "Entrées", modal_out: "Sorties", time_5y: "5 Ans", time_10y: "10 Ans", rec_for: "Recommandé pour" },
            ar: { nav_services: "الخدمات", nav_roi: "حاسبة العائد", nav_demos: "العروض التجريبية", nav_book: "احجز استشارة", hero_headline: "سير عمل صامت وذكي.", hero_cta_roi: "حساب العائد", roi_title: "حاسبة العائد على الاستثمار", demo_title: "مكتبة العروض", pkg_title: "الباقات", footer_title: "جاهز للتوسع؟", roi_btn_benchmark: "استخدم المعايير النموذجية", tag_ready: "جاهز", btn_view: "عرض تجريبي", modal_how: "كيف يعمل", modal_in: "المدخلات", modal_out: "المخرجات", time_5y: "5 سنوات", time_10y: "10 سنوات", rec_for: "موصى به لـ" }
        };

        const langs = ['es', 'de', 'fr', 'ar'];
        langs.forEach(l => {
            Object.keys(translations.en).forEach(k => {
                if (!translations[l][k]) translations[l][k] = translations.en[k]; 
            });
        });

        // --- DATA: Demos (Updated with 20 items) ---
        const demoData = [
            { id: 1, title: "Inbox → Daily Brief", desc: "Summarizes today’s emails, calendar, and tasks into one short brief.", inputs: ["Gmail", "G-Cal"], outputs: ["Slack/Notion Brief", "Priority List"], bestFor: "Solo", tag: "Ready", filter: ["Solo", "Founder", "RealEstate"], steps: ["AI scans unread emails & calendar", "Extracts action items & deadlines", "Categorizes by priority", "Sends summary to Slack/Notion", "Drafts replies for urgent items"] },
            { id: 2, title: "Personal Knowledge Q&A (RAG)", desc: "Upload docs, ask questions, get answers with sources.", inputs: ["PDFs", "Docs"], outputs: ["Chat Answers", "Citations"], bestFor: "Solo", tag: "Ready", filter: ["Solo", "Ops", "SaaS", "Support", "HR", "Dev"], steps: ["Upload documents to vector DB", "User asks question in chat", "AI retrieves relevant chunks", "Synthesizes answer with citations", "Updates context for follow-up"] },
            { id: 3, title: "Job Hunt Autopilot", desc: "Tracks applications, creates reminders, drafts follow-ups.", inputs: ["Sheets", "Gmail"], outputs: ["Drafts", "Dashboard"], bestFor: "Solo", tag: "Ready", filter: ["Solo"], steps: ["Log application in Sheet", "AI schedules follow-up date", "Checks inbox for replies", "Drafts personalized follow-up", "Updates status in Sheet"] },
            { id: 4, title: "Content Repurposer", desc: "Turns one long piece into multiple posts and a newsletter.", inputs: ["Text/Audio"], outputs: ["5-10 Posts", "Newsletter"], bestFor: "Founder", tag: "Ready", filter: ["Founder", "Sales", "Agency", "Dev"], steps: ["Ingest YouTube/Article URL", "Extract key themes", "Generate LinkedIn/Twitter hooks", "Write newsletter draft", "Save to content calendar"] },
            { id: 5, title: "Lead Capture → CRM + Instant Reply", desc: "Captures leads, adds to CRM, replies instantly.", inputs: ["Web Form", "Email"], outputs: ["CRM Entry", "Auto-reply"], bestFor: "Agency", tag: "Ready", filter: ["Agency", "Sales", "RealEstate", "Ecommerce", "SaaS", "Founder"], steps: ["Webhook catches form sub", "Validates email address", "Adds contact to HubSpot", "AI writes personalized intro", "Notifies sales team on Slack"] },
            { id: 6, title: "Appointment Booking + No-Show Reducer", desc: "Books appointments, sends reminders, handles reschedules.", inputs: ["Calendar"], outputs: ["Confirmation", "Reminders"], bestFor: "Agency", tag: "Ready", filter: ["Agency", "Sales", "RealEstate", "Healthcare", "Support"], steps: ["User selects time slot", "System books calendar", "Sends WhatsApp/SMS confirm", "Sends T-24h & T-1h reminders", "Offers reschedule link if cancelled"] },
            { id: 7, title: "Invoice + Payment Follow-Up", desc: "Tracks invoices and automatically reminds late payers.", inputs: ["Xero/QB"], outputs: ["Reminders", "Alerts"], bestFor: "Ops", tag: "Ready", filter: ["Ops", "Agency", "Finance", "Ecommerce"], steps: ["Check unpaid invoices daily", "Calculate days overdue", "Select tone (Gentle/Firm)", "Send email reminder", "Escalate to owner if >30 days"] },
            { id: 8, title: "Order → Inventory → Shipping", desc: "Syncs orders, updates inventory, sends tracking updates.", inputs: ["Shopify"], outputs: ["Tasks", "Updates"], bestFor: "Ecommerce", tag: "Ready", filter: ["Ecommerce", "Ops", "Logistics"], steps: ["New order received", "Deduct inventory count", "Generate shipping label", "Email tracking info to customer", "Alert if stock low"] },
            { id: 9, title: "Multi-Client Reporting Bot", desc: "Generates weekly client reports from ads + analytics.", inputs: ["Ads API", "GA4"], outputs: ["PDF Report", "Email"], bestFor: "Agency", tag: "Ready", filter: ["Agency", "Founder"], steps: ["Fetch data from Meta/Google Ads", "Aggregate metrics in Sheets", "Generate chart images", "Compile PDF summary", "Email to Account Manager"] },
            { id: 10, title: "Employee Onboarding Automation", desc: "Creates onboarding tasks, folders, welcome pack.", inputs: ["Form"], outputs: ["Tasks", "Access"], bestFor: "Ops", tag: "Pilot-ready", filter: ["Ops", "Agency", "Healthcare", "SaaS", "HR"], steps: ["New hire form submitted", "Create email account", "Invite to Slack/Notion", "Assign training tasks", "Schedule welcome meeting"] },
            { id: 11, title: "Vendor Bills → Approval", desc: "Extracts invoice data, routes approvals, syncs to accounting.", inputs: ["PDF Invoice"], outputs: ["Approval Req", "Accounting"], bestFor: "Finance", tag: "Pilot-ready", filter: ["Ops", "Finance", "Logistics"], steps: ["AI extracts data from PDF", "Matches against PO", "Routes to manager Slack", "Wait for 'Approve' button", "Sync to Xero as Bill"] },
            { id: 12, title: "Governance + Monitoring Layer", desc: "Central dashboard for runs, failures, logs, alerts.", inputs: ["Logs"], outputs: ["Alerts", "Dashboard"], bestFor: "Ops", tag: "Pilot-ready", filter: ["Ops", "Ecommerce", "Logistics", "Finance", "Healthcare", "Dev", "Support"], steps: ["Listen for error events", "Classify severity", "Retrying logic (optional)", "Alert Engineering team", "Log to monthly health report"] },
            { id: 13, title: "Social Media Scheduler + Analytics", desc: "Schedules posts across platforms, tracks engagement, suggests best times.", inputs: ["Calendar", "Accounts"], outputs: ["Posts", "Report"], bestFor: "Agency", tag: "Ready", filter: ["Agency", "Sales"], steps: ["Connect to social APIs", "Upload content to calendar", "AI schedules at peak times", "Post automatically", "Fetch engagement data weekly"] },
            { id: 14, title: "Support Ticket Router + Auto-Response", desc: "Categorizes tickets, routes to right team, sends instant acknowledgment.", inputs: ["Email", "Rules"], outputs: ["Ticket", "Auto-reply"], bestFor: "Support", tag: "Ready", filter: ["Support", "SaaS"], steps: ["Receive email/form ticket", "Analyze sentiment & topic", "Route to Tech/Billing/Sales", "Send personalized ACK", "Track SLA time"] },
            { id: 15, title: "Contract Review Assistant", desc: "Scans contracts, flags key terms, extracts dates and obligations.", inputs: ["PDF Contract"], outputs: ["Summary", "Calendar"], bestFor: "Founder", tag: "Pilot-ready", filter: ["Founder", "Finance"], steps: ["Upload PDF", "OCR & extract text", "Identify clauses (Indemnity, Termination)", "Generate risk summary", "Add deadlines to calendar"] },
            { id: 16, title: "Expense Report Automation", desc: "Extracts receipt data, categorizes expenses, generates reports.", inputs: ["Receipts"], outputs: ["Log", "Approval"], bestFor: "Finance", tag: "Ready", filter: ["Finance", "Ops"], steps: ["Upload receipt photo", "Extract vendor/date/amount", "Categorize via AI", "Add to expense sheet", "Trigger approval if >$500"] },
            { id: 17, title: "Customer Feedback Analyzer", desc: "Aggregates reviews/feedback, sentiment analysis, theme extraction.", inputs: ["Reviews", "Surveys"], outputs: ["Dashboard", "Report"], bestFor: "Support", tag: "Ready", filter: ["Support", "Ecommerce"], steps: ["Scrape reviews (Google/Trustpilot)", "Analyze sentiment score", "Extract common themes", "Update dashboard", "Alert on negative spikes"] },
            { id: 18, title: "Meeting Notes → Action Items", desc: "Transcribes meetings, extracts action items, assigns tasks.", inputs: ["Recording"], outputs: ["Tasks", "Summary"], bestFor: "Founder", tag: "Ready", filter: ["Founder", "Ops"], steps: ["Transcribe audio/video", "Identify action items & owners", "Create tasks in Asana/Jira", "Post summary to Slack channel", "Email attendees"] },
            { id: 19, title: "Competitor Price Monitor", desc: "Tracks competitor pricing, alerts on changes, generates reports.", inputs: ["URLs"], outputs: ["Alerts", "Report"], bestFor: "Ecommerce", tag: "Ready", filter: ["Ecommerce", "Sales"], steps: ["Scan competitor product pages", "Extract current pricing", "Compare to historical data", "Alert if price drops", "Generate weekly trend report"] },
            { id: 20, title: "Churn Risk Detector", desc: "Monitors customer behavior, flags at-risk accounts, triggers outreach.", inputs: ["CRM", "Usage"], outputs: ["Risk Score", "Alert"], bestFor: "SaaS", tag: "Pilot-ready", filter: ["SaaS", "Support"], steps: ["Ingest usage data & support tickets", "Calculate health score", "Flag if score drops < 50", "Alert CSM team", "Draft re-engagement email"] }
        ];

        // --- MAPPING for Smart Recs ---
        const smartMapping = {
            industry: {
                'Ecommerce': [8, 5, 7, 19, 17],
                'Agency': [9, 4, 5, 13, 6],
                'RealEstate': [5, 6, 1],
                'Healthcare': [6, 10, 12],
                'Logistics': [8, 11, 12],
                'Finance': [11, 7, 12, 16],
                'SaaS': [5, 10, 2, 14, 20],
                'Other': [5, 1, 4]
            },
            role: {
                'Founder': [1, 5, 9, 15, 18],
                'Ops': [8, 11, 12, 16],
                'Sales': [5, 6, 4, 13, 19],
                'Support': [2, 6, 12, 14, 17],
                'Finance': [7, 11, 12, 16],
                'HR': [10, 1, 2],
                'Dev': [12, 2, 4]
            }
        };

        // --- DATA: Benchmarks ---
        const benchmarks = {
            'Founder': 8000, 'Ops': 5000, 'Sales': 4500, 'Support': 3000, 'Finance': 4500, 'HR': 4000, 'Dev': 7000
        };
        const suggestionsData = {
            'Ecommerce': ["Automated Returns Processing", "Abandoned Cart Recovery AI", "Inventory Prediction"],
            'Agency': ["Client Onboarding Flow", "Automated Monthly Reporting", "Lead Qualification Bot"],
            'RealEstate': ["Tenant Inquiry Auto-Reply", "Lease Renewal Reminders", "Maintenance Request Routing"],
            'Healthcare': ["Patient Appointment Reminders", "Intake Form Digitization", "Insurance Verification"],
            'Logistics': ["Route Optimization", "Driver Document Expiry Alerts", "Load Matching"],
            'Finance': ["Expense Categorization", "Fraud Detection", "Invoice Data Extraction"],
            'SaaS': ["Churn Prediction", "Feature Request Aggregation", "Automated Ticket Routing"],
            'Other': ["Email Inbox Triage", "Meeting Notes Summarizer", "Expense Receipt Scanner"]
        };

        // --- LOGIC: Globals ---
        let currentLang = 'en';
        let currentFilter = 'all';

        // --- LOGIC: Functions ---

        function init() {
            setLanguage('en');
            renderDemos('all');
            calculateROI();
            
            // Listeners
            document.getElementById('lang-switcher').addEventListener('change', (e) => setLanguage(e.target.value));
            document.querySelectorAll('#roi input, #roi select').forEach(el => {
                el.addEventListener('input', calculateROI);
                el.addEventListener('change', calculateROI);
            });

            // Mouse Glow (Desktop Only)
            if (window.innerWidth > 1024) {
                const glow = document.createElement('div');
                glow.className = 'mouse-glow';
                document.body.appendChild(glow);
                
                document.addEventListener('mousemove', (e) => {
                    glow.style.left = e.clientX + 'px';
                    glow.style.top = e.clientY + 'px';
                });
            }
        }

        function setLanguage(lang) {
            currentLang = lang;
            const t = translations[lang] || translations['en'];
            
            // Text Content
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) el.textContent = t[key];
            });

            // RTL
            if (lang === 'ar') {
                document.documentElement.dir = 'rtl';
                document.body.classList.add('rtl');
            } else {
                document.documentElement.dir = 'ltr';
                document.body.classList.remove('rtl');
            }

            // Re-render components that depend on lang text
            renderDemos(currentFilter);
            calculateROI(); 
        }

        function setGoal(type) {
            const btnBiz = document.getElementById('goal-biz');
            const btnPers = document.getElementById('goal-pers');
            
            if (type === 'business') {
                btnBiz.classList.replace('text-gray-400', 'text-white');
                btnBiz.classList.add('bg-white/10');
                btnPers.classList.remove('bg-white/10');
                btnPers.classList.replace('text-white', 'text-gray-400');
            } else {
                btnPers.classList.replace('text-gray-400', 'text-white');
                btnPers.classList.add('bg-white/10');
                btnBiz.classList.remove('bg-white/10');
                btnBiz.classList.replace('text-white', 'text-gray-400');
            }
        }

        function useBenchmark() {
            const role = document.getElementById('roi-role').value;
            const base = benchmarks[role] || 4000;
            const curr = document.getElementById('roi-currency').value;
            let val = base;
            if (curr === 'TRY') val = base * 30;
            if (curr === 'EUR') val = base * 0.9;
            if (curr === 'GBP') val = base * 0.8;

            document.getElementById('roi-salary').value = Math.floor(val);
            document.getElementById('benchmark-feedback').classList.remove('hidden');
            setTimeout(() => document.getElementById('benchmark-feedback').classList.add('hidden'), 2000);
            calculateROI();
        }

        function calculateROI() {
            // Inputs
            const salary = parseFloat(document.getElementById('roi-salary').value) || 0;
            const hoursTotal = parseFloat(document.getElementById('roi-hours').value) || 160;
            const hoursSaved = parseFloat(document.getElementById('roi-saved').value) || 0;
            const cost = parseFloat(document.getElementById('roi-project').value) || 0;
            const teamSizeVal = document.getElementById('roi-team').value;
            const curr = document.getElementById('roi-currency').value;
            
            const symbol = curr === 'USD' ? '$' : curr === 'EUR' ? '€' : curr === 'GBP' ? '£' : '₺';

            // Multiplier Logic
            let teamMultiplier = 1;
            let teamDisplay = 1;
            if (teamSizeVal === '5') { teamMultiplier = 3; teamDisplay = 3; }
            else if (teamSizeVal === '15') { teamMultiplier = 12; teamDisplay = 12; }
            else if (teamSizeVal === '50') { teamMultiplier = 50; teamDisplay = 50; }
            else if (teamSizeVal === '100') { teamMultiplier = 100; teamDisplay = 100; }

            // Calc
            // Assuming 4.3 weeks per month
            const hourlyRate = hoursTotal > 0 ? (salary / (hoursTotal * 4.3)) : 0;
            const monthlyValuePerPerson = hourlyRate * (hoursSaved * 4.3);
            const monthlyValueTotal = monthlyValuePerPerson * teamMultiplier;
            const timeRecoveredTotal = (hoursSaved * 4.3) * teamMultiplier; // hours per month
            
            const paybackWeeks = monthlyValueTotal > 0 ? (cost / (monthlyValueTotal / 4.3)) : 0;

            // Update Text
            document.getElementById('out-hourly').innerText = `${symbol}${hourlyRate.toFixed(0)}`;
            document.getElementById('out-monthly').innerText = `${symbol}${monthlyValueTotal.toLocaleString(undefined, {maximumFractionDigits:0})}`;
            document.getElementById('out-time').innerText = `${timeRecoveredTotal.toFixed(0)}h / mo`;
            document.getElementById('out-payback').innerText = monthlyValueTotal > 0 ? `${paybackWeeks.toFixed(1)} wks` : "N/A";
            
            document.getElementById('team-note').innerText = `Calculations reflect team-wide impact based on ${teamDisplay} people.`;

            // Projections (Cumulative Savings - Cost)
            // Values = (MonthlyTotal * Months) - Cost
            const sav6m = (monthlyValueTotal * 6) - cost;
            const sav12m = (monthlyValueTotal * 12) - cost;
            const sav3y = (monthlyValueTotal * 36) - cost;
            const sav5y = (monthlyValueTotal * 60) - cost;
            const sav10y = (monthlyValueTotal * 120) - cost;

            const formatVal = (val) => `${symbol}${Math.max(0, val).toLocaleString(undefined, {notation: "compact"})}`;

            document.getElementById('val-6m').innerText = formatVal(sav6m);
            document.getElementById('val-12m').innerText = formatVal(sav12m);
            document.getElementById('val-3y').innerText = formatVal(sav3y);
            document.getElementById('val-5y').innerText = formatVal(sav5y);
            document.getElementById('val-10y').innerText = formatVal(sav10y);

            // Animate Bars
            const max = Math.max(sav10y, 1);
            const setHeight = (id, val) => document.getElementById(id).style.height = `${Math.max(10, (val/max)*100)}%`;
            setHeight('bar-6m', sav6m);
            setHeight('bar-12m', sav12m);
            setHeight('bar-3y', sav3y);
            setHeight('bar-5y', sav5y);
            setHeight('bar-10y', sav10y);

            updateSuggestions();
        }

        function updateSuggestions() {
            const industry = document.getElementById('roi-industry').value;
            const role = document.getElementById('roi-role').value;
            const t = translations[currentLang] || translations['en'];

            // AI Suggestions List
            const list = suggestionsData[industry] || suggestionsData['Other'];
            const container = document.getElementById('suggestion-list');
            container.innerHTML = '';
            
            list.forEach(item => {
                const div = document.createElement('div');
                div.className = "flex items-center gap-2 text-sm text-gray-300";
                div.innerHTML = `<span class="iconify text-accent" data-icon="lucide:sparkles" data-width="14"></span> ${item}`;
                container.appendChild(div);
            });

            // Smart Recommendations Logic
            const indIds = smartMapping.industry[industry] || smartMapping.industry['Other'];
            const roleIds = smartMapping.role[role] || smartMapping.role['Founder'];
            
            // Combine: 3 from Industry, 2 from Role
            let combinedIds = [...indIds.slice(0, 3)];
            roleIds.slice(0, 2).forEach(id => {
                if (!combinedIds.includes(id)) combinedIds.push(id);
            });
            // Fallbacks if not enough unique
            if (combinedIds.length < 3) {
                [5, 1, 4].forEach(id => { if(!combinedIds.includes(id)) combinedIds.push(id); });
            }

            // Get Demo Objects
            const recDemos = combinedIds.slice(0, 3).map(id => demoData.find(d => d.id === id)).filter(Boolean);

            const recContainer = document.getElementById('rec-demos-list');
            recContainer.innerHTML = '';
            
            recDemos.forEach(d => {
                const card = document.createElement('div');
                card.className = "p-3 rounded border border-white/5 bg-white/5 hover:border-white/20 cursor-pointer transition-colors";
                card.onclick = () => openModal(d.id);
                card.innerHTML = `
                    <p class="text-xs font-medium text-white truncate">${d.title}</p>
                    <p class="text-[10px] text-gray-500 mt-1 truncate">${d.desc}</p>
                `;
                recContainer.appendChild(card);
            });

            // Update Title Context
            const titleEl = document.getElementById('rec-demos-title');
            titleEl.textContent = `${t.rec_for} ${industry} + ${role}`;
        }

        function filterDemos(cat) {
            currentFilter = cat;
            
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('bg-white', 'text-black');
                btn.classList.add('text-gray-400');
            });
            event.target.classList.remove('text-gray-400');
            event.target.classList.add('bg-white', 'text-black');

            renderDemos(cat);
        }

        function renderDemos(filter) {
            const grid = document.getElementById('demo-grid');
            const fallback = document.getElementById('demo-fallback');
            grid.innerHTML = '';
            
            let filtered = filter === 'all' ? demoData : demoData.filter(d => d.filter.includes(filter) || d.bestFor === filter);
            
            if (filtered.length === 0) {
                fallback.classList.remove('hidden');
                filtered = demoData.slice(0, 6);
            } else {
                fallback.classList.add('hidden');
            }

            const t = translations[currentLang] || translations['en'];

            filtered.forEach(d => {
                const card = document.createElement('div');
                card.className = "glass-panel p-6 rounded-xl border border-white/10 hover-glow transition-all flex flex-col";
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-3">
                        <span class="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded bg-white/10 text-gray-300 border border-white/5">${d.tag === "Ready" ? t.tag_ready : t.tag_pilot}</span>
                        <span class="iconify text-gray-500" data-icon="lucide:arrow-up-right" data-width="16"></span>
                    </div>
                    <h3 class="text-lg font-medium text-white mb-2">${d.title}</h3>
                    <p class="text-sm text-gray-400 mb-6 flex-1">${d.desc}</p>
                    
                    <div class="grid grid-cols-2 gap-2 mb-6">
                        <div>
                            <span class="text-[10px] text-gray-500 uppercase block mb-1">${t.modal_in}</span>
                            <div class="flex flex-wrap gap-1">
                                ${d.inputs.map(i => `<span class="text-xs text-gray-300 bg-white/5 px-1.5 py-0.5 rounded">${i}</span>`).join('')}
                            </div>
                        </div>
                        <div>
                            <span class="text-[10px] text-gray-500 uppercase block mb-1">${t.modal_out}</span>
                            <div class="flex flex-wrap gap-1">
                                ${d.outputs.map(o => `<span class="text-xs text-gray-300 bg-white/5 px-1.5 py-0.5 rounded">${o}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <button onclick="openModal(${d.id})" class="w-full py-2 border border-white/20 rounded-lg hover:bg-white/5 text-sm font-medium text-white transition-colors">
                        ${t.btn_view}
                    </button>
                `;
                grid.appendChild(card);
            });
        }

        function openModal(id) {
            const d = demoData.find(x => x.id === id);
            if (!d) return;

            const t = translations[currentLang] || translations['en'];

            document.getElementById('modal-title').innerText = d.title;
            document.getElementById('modal-desc').innerText = d.desc;
            
            const stepsContainer = document.getElementById('modal-steps');
            stepsContainer.innerHTML = '';
            d.steps.forEach((step, idx) => {
                const div = document.createElement('div');
                div.className = "flex gap-3";
                div.innerHTML = `
                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">${idx + 1}</div>
                    <p class="text-sm text-gray-300">${step}</p>
                `;
                stepsContainer.appendChild(div);
            });

            document.getElementById('modal-inputs').innerHTML = d.inputs.map(i => `<div class="flex items-center gap-2"><span class="iconify text-gray-500" data-icon="lucide:arrow-right" data-width="12"></span> ${i}</div>`).join('');
            document.getElementById('modal-outputs').innerHTML = d.outputs.map(o => `<div class="flex items-center gap-2"><span class="iconify text-gray-500" data-icon="lucide:check" data-width="12"></span> ${o}</div>`).join('');

            const modal = document.getElementById('demo-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('demo-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }

        window.addEventListener('DOMContentLoaded', init);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<svg aria-hidden="true" className="iconify text-accent iconify--lucide" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
                AETHER AI
            </a>

<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
<a className="hover:text-white transition-colors" data-i18n="nav_services" href="#services">Services</a>
<a className="hover:text-white transition-colors" data-i18n="nav_roi" href="#roi">ROI Calculator</a>
<a className="hover:text-white transition-colors" data-i18n="nav_demos" href="#demos">Demos</a>
<a className="hover:text-white transition-colors" data-i18n="nav_packages" href="#packages">Packages</a>
<a className="hover:text-white transition-colors" data-i18n="nav_contact" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<select className="bg-transparent text-xs text-gray-400 border border-white/10 rounded px-2 py-1 outline-none focus:border-white/30 cursor-pointer" id="lang-switcher">
<option value="en">EN</option>
<option value="tr">TR</option>
<option value="es">ES</option>
<option value="de">DE</option>
<option value="fr">FR</option>
<option value="ar">AR</option>
</select>
<a className="hidden sm:block text-xs font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors" data-i18n="nav_book" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Book Consultation</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]" data-i18n="hero_headline">Silent, intelligent workflows.</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light" data-i18n="hero_subhead">We build autonomous systems that reclaim time and revenue. Precision engineering for modern businesses.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors" data-i18n="hero_cta_roi" href="#roi">Calculate ROI</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors" data-i18n="hero_cta_demos" href="#demos">View Demos</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400 border-t border-white/5 pt-8">
<div className="flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify text-accent iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span data-i18n="proof_fast">Faster Operations</span>
</div>
<div className="flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify text-accent iconify--lucide" data-icon="lucide:trending-down" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 17h6v-6"></path><path d="m22 17l-8.5-8.5l-5 5L2 7"></path></g></svg>
<span data-i18n="proof_cost">Lower Admin Cost</span>
</div>
<div className="flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify text-accent iconify--lucide" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span data-i18n="proof_response">Better Customer Response</span>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight mb-12" data-i18n="services_title">Core Systems</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel hover-glow transition-all group rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-4 text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="serv_1_title">Automation</h3>
<p className="text-sm text-gray-400 h-10 mb-4" data-i18n="serv_1_desc" style={{}}>Custom node-based workflows that connect your apps without breakage.</p>
<div className="text-xs text-gray-500 border-t border-white/5 pt-3">
<span className="" data-i18n="serv_outcome">Typical outcome:</span> <span className="text-gray-300" data-i18n="serv_1_out">90% less data entry</span>
</div>
</div>

<div className="glass-panel p-6 rounded-xl hover-glow transition-all group">
<div className="mb-4 text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="serv_2_title">AI Agents</h3>
<p className="text-sm text-gray-400 mb-4 h-10" data-i18n="serv_2_desc">Intelligent bots for customer support and internal operations.</p>
<div className="text-xs text-gray-500 border-t border-white/5 pt-3">
<span data-i18n="serv_outcome">Typical outcome:</span> <span className="text-gray-300" data-i18n="serv_2_out">24/7 Instant Replies</span>
</div>
</div>

<div className="glass-panel p-6 rounded-xl hover-glow transition-all group">
<div className="mb-4 text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:database" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="serv_3_title">Data Pipelines</h3>
<p className="text-sm text-gray-400 mb-4 h-10" data-i18n="serv_3_desc">Seamless syncing between CRM, ERP, and databases.</p>
<div className="text-xs text-gray-500 border-t border-white/5 pt-3">
<span data-i18n="serv_outcome">Typical outcome:</span> <span className="text-gray-300" data-i18n="serv_3_out">Real-time Dashboard</span>
</div>
</div>

<div className="glass-panel p-6 rounded-xl hover-glow transition-all group">
<div className="mb-4 text-accent">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="serv_4_title">Monitoring &amp; Alerts</h3>
<p className="text-sm text-gray-400 mb-4 h-10" data-i18n="serv_4_desc">Self-healing systems with instant notifications on failure.</p>
<div className="text-xs text-gray-500 border-t border-white/5 pt-3">
<span data-i18n="serv_outcome">Typical outcome:</span> <span className="text-gray-300" data-i18n="serv_4_out">Zero Downtime</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#080808] relative z-10" id="roi">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2" data-i18n="roi_title">ROI Calculator</h2>
<p className="text-sm text-gray-400" data-i18n="roi_subtitle">Estimate the value of automating your manual workflows.</p>
</div>

<div className="flex items-center gap-3 bg-white/5 rounded-lg p-1 mt-4 md:mt-0">
<button className="px-4 py-2 text-xs font-medium rounded bg-white/10 text-white transition-all" data-i18n="roi_goal_biz" id="goal-biz" onclick="setGoal('business')">Business ROI</button>
<button className="px-4 py-2 text-xs font-medium rounded text-gray-400 hover:text-white transition-all" data-i18n="roi_goal_pers" id="goal-pers" onclick="setGoal('personal')">Personal Goals</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-5 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-gray-400" data-i18n="roi_label_industry">Industry</label>
<select className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-industry">
<option value="Ecommerce">E-commerce</option>
<option value="Agency">Agency</option>
<option value="RealEstate">Real Estate</option>
<option value="Healthcare">Healthcare</option>
<option value="Logistics">Logistics</option>
<option value="Finance">Finance</option>
<option value="SaaS">SaaS</option>
<option value="Other">Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-400" data-i18n="roi_label_role">Role</label>
<select className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-role">
<option value="Founder">Owner/Founder</option>
<option value="Ops">Ops Manager</option>
<option value="Sales">Sales</option>
<option value="Support">Support</option>
<option value="Finance">Accounting</option>
<option value="HR">HR</option>
<option value="Dev">Developer</option>
</select>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-gray-400" data-i18n="roi_label_team">Team Size</label>
<select className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-team">
<option value="1">Solo</option>
<option value="5">2-5</option>
<option value="15">6-20</option>
<option value="50">21-100</option>
<option value="100">100+</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-400" data-i18n="roi_label_curr">Currency</label>
<select className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-currency">
<option value="USD">USD ($)</option>
<option value="EUR">EUR (€)</option>
<option value="GBP">GBP (£)</option>
<option value="TRY">TRY (₺)</option>
</select>
</div>
</div>

<div className="space-y-4 pt-4 border-t border-white/5">

<div className="space-y-2">
<div className="flex justify-between">
<label className="text-xs text-gray-400" data-i18n="roi_label_salary">Monthly Cost/Salary</label>
<button className="text-xs text-accent hover:underline" data-i18n="roi_btn_benchmark" onclick="useBenchmark()">Use Typical Benchmarks</button>
</div>
<input className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-salary" type="number" value="5000"/>
<p className="text-[10px] text-gray-500 hidden italic" id="benchmark-feedback">Filled with example data.</p>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-gray-400" data-i18n="roi_label_hours_total">Hours worked/week</label>
<input className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-hours" type="number" value="40"/>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-400" data-i18n="roi_label_hours_saved">Hours saved/week (per person)</label>
<input className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-saved" type="number" value="10"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-gray-400" data-i18n="roi_label_cost">Est. Project Cost</label>
<input className="w-full bg-black border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-accent outline-none" id="roi-project" type="number" value="3000"/>
<p className="text-[10px] text-gray-500" data-i18n="roi_helper_cost">Typical range depends on scope</p>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<p className="text-xs text-gray-500 mb-1" data-i18n="out_hourly">Hourly Value</p>
<p className="text-xl font-semibold text-white" id="out-hourly">$29</p>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<p className="text-xs text-gray-500 mb-1" data-i18n="out_monthly">Monthly Value</p>
<p className="text-xl font-semibold text-accent" id="out-monthly">$1,250</p>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<p className="text-xs text-gray-500 mb-1" data-i18n="out_time">Time Recovered</p>
<p className="text-xl font-semibold text-white" id="out-time">43h / mo</p>
</div>
<div className="bg-white/5 rounded-lg p-4 border border-white/5">
<p className="text-xs text-gray-500 mb-1" data-i18n="out_payback">Payback Time</p>
<p className="text-xl font-semibold text-white" id="out-payback">10.3 wks</p>
</div>
</div>
<p className="text-xs text-gray-500 -mt-2 italic" id="team-note">Calculations reflect team-wide impact based on 1 person.</p>

<div className="glass-panel rounded-xl p-6">
<h4 className="text-sm font-medium text-white mb-4" data-i18n="roi_proj_title">Cumulative Savings Projection</h4>
<div className="flex items-end justify-between gap-2 md:gap-4 h-40">

<div className="chart-bar flex-1 bg-blue-900/20 rounded-t-lg relative group flex items-end justify-center pb-2 border-t border-x border-blue-500/10" id="bar-6m" style={{height: '10%'}}>
<span className="text-[10px] md:text-xs font-semibold text-blue-200" id="val-6m">$4.5K</span>
<span className="absolute -bottom-8 text-[9px] md:text-[10px] text-gray-500" data-i18n="time_6m">6 Mo</span>
</div>

<div className="chart-bar flex-1 bg-blue-900/30 rounded-t-lg relative group flex items-end justify-center pb-2 border-t border-x border-blue-500/20" id="bar-12m" style={{height: '20%'}}>
<span className="text-[10px] md:text-xs font-semibold text-blue-200" id="val-12m">$12K</span>
<span className="absolute -bottom-8 text-[9px] md:text-[10px] text-gray-500" data-i18n="time_12m">12 Mo</span>
</div>

<div className="chart-bar flex-1 bg-blue-800/30 rounded-t-lg relative group flex items-end justify-center pb-2 border-t border-x border-blue-500/30" id="bar-3y" style={{height: '40%'}}>
<span className="text-[10px] md:text-xs font-semibold text-blue-200" id="val-3y">$42K</span>
<span className="absolute -bottom-8 text-[9px] md:text-[10px] text-gray-500" data-i18n="time_3y">3 Yrs</span>
</div>

<div className="chart-bar flex-1 bg-blue-700/30 rounded-t-lg relative group flex items-end justify-center pb-2 border-t border-x border-blue-500/40" id="bar-5y" style={{height: '60%'}}>
<span className="text-[10px] md:text-xs font-semibold text-blue-100" id="val-5y">$80K</span>
<span className="absolute -bottom-8 text-[9px] md:text-[10px] text-gray-500" data-i18n="time_5y">5 Yrs</span>
</div>

<div className="chart-bar flex-1 bg-blue-600/30 rounded-t-lg relative group flex items-end justify-center pb-2 border-t border-x border-blue-500/50" id="bar-10y" style={{height: '90%'}}>
<span className="text-[10px] md:text-xs font-semibold text-blue-100" id="val-10y">$180K</span>
<span className="absolute -bottom-8 text-[9px] md:text-[10px] text-gray-500" data-i18n="time_10y">10 Yrs</span>
</div>
</div>
</div>

<div className="space-y-4 mt-2">

<div className="border-t border-white/5 pt-4">
<h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3" data-i18n="roi_sugg_title">AI Suggestions</h5>
<div className="space-y-2" id="suggestion-list"></div>
</div>

<div className="border-t border-white/5 pt-4">
<h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3" data-i18n="roi_rec_title" id="rec-demos-title">Recommended Starter Templates</h5>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="rec-demos-list"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 relative z-10" id="demos">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2" data-i18n="demo_title">Demo Library</h2>
<p className="text-gray-400 mb-4" data-i18n="demo_subtitle">Production-style demos. Clean setup. Real outcomes.</p>
<p className="text-xs text-gray-500" data-i18n="demo_micro">Pick a demo. We’ll deploy it to your stack.</p>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-10" id="demo-filters">
<button className="filter-btn active px-3 py-1 text-xs border border-white/10 rounded-full bg-white text-black" data-i18n="filter_all" onclick="filterDemos('all')">All</button>
<button className="filter-btn px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 hover:text-white" data-i18n="filter_solo" onclick="filterDemos('Solo')">Solo</button>
<button className="filter-btn px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 hover:text-white" data-i18n="filter_agency" onclick="filterDemos('Agency')">Agency</button>
<button className="filter-btn px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 hover:text-white" data-i18n="filter_ecom" onclick="filterDemos('Ecommerce')">E-commerce</button>
<button className="filter-btn px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 hover:text-white" data-i18n="filter_ops" onclick="filterDemos('Ops')">Ops</button>
<button className="filter-btn px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 hover:text-white" data-i18n="filter_sales" onclick="filterDemos('Sales')">Sales</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="demo-grid"></div>

<div className="hidden text-center py-10" id="demo-fallback">
<p className="text-gray-500 text-sm" data-i18n="demo_fallback_msg">Showing universal demos instead.</p>
</div>

<div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-xl text-center">
<h3 className="text-xl font-medium text-white mb-6" data-i18n="demo_cta_title">Want one of these running in your business?</h3>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors" data-i18n="demo_cta_req" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Request a Demo</a>
<a className="px-6 py-2 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors" data-i18n="demo_cta_audit" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Get a Quick Audit</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-white/5 relative z-10" id="packages">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-12 text-center" data-i18n="pkg_title">Engagement Models</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2" data-i18n="pkg_1_name">Pilot</h3>
<p className="text-sm text-gray-400 mb-6" data-i18n="pkg_1_desc">Single workflow setup. Perfect for proof of concept.</p>
<ul className="text-sm text-gray-300 space-y-3 mb-8 flex-1">
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_1_f1">1 Automation Workflow</span></li>
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_1_f2">Basic Error Handling</span></li>
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_1_f3">7-Day Delivery</span></li>
</ul>
<a className="block text-center w-full py-2 border border-white/20 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors" data-i18n="btn_start" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Start Pilot</a>
</div>

<div className="glass-panel p-8 rounded-xl border border-accent/30 bg-accent/5 flex flex-col relative">
<div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg" data-i18n="pkg_pop">POPULAR</div>
<h3 className="text-lg font-medium text-white mb-2" data-i18n="pkg_2_name">Growth</h3>
<p className="text-sm text-gray-400 mb-6" data-i18n="pkg_2_desc">Multi-step orchestration and AI agents for teams.</p>
<ul className="text-sm text-gray-300 space-y-3 mb-8 flex-1">
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_2_f1">Multi-step Orchestration</span></li>
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_2_f2">Custom AI Agent</span></li>
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_2_f3">Admin Dashboard</span></li>
</ul>
<a className="block text-center w-full py-2 bg-white text-black rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors" data-i18n="btn_scale" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Scale Up</a>
</div>

<div className="glass-panel p-8 rounded-xl border border-white/10 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2" data-i18n="pkg_3_name">Partner</h3>
<p className="text-sm text-gray-400 mb-6" data-i18n="pkg_3_desc">Full enterprise architecture and ongoing support.</p>
<ul className="text-sm text-gray-300 space-y-3 mb-8 flex-1">
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_3_f1">System Architecture</span></li>
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_3_f2">Self-host Option</span></li>
<li className="flex gap-2"><span className="text-accent">✓</span> <span data-i18n="pkg_3_f3">SLA &amp; Priority Support</span></li>
</ul>
<a className="block text-center w-full py-2 border border-white/20 rounded-lg hover:bg-white/5 text-sm font-medium transition-colors" data-i18n="btn_contact" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Contact Us</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#080808] relative z-10">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-12" data-i18n="case_title">Recent Impacts</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 border-l-2 border-accent bg-white/5">
<p className="text-2xl font-bold text-white mb-2" data-i18n="case_1_stat">+40% Capacity</p>
<h4 className="text-sm font-semibold text-gray-300 mb-2" data-i18n="case_1_ind">Logistics</h4>
<p className="text-xs text-gray-500" data-i18n="case_1_desc">Reduced manual dispatching errors and automated driver notifications.</p>
</div>
<div className="p-6 border-l-2 border-purple-500 bg-white/5">
<p className="text-2xl font-bold text-white mb-2" data-i18n="case_2_stat">15hrs/wk Saved</p>
<h4 className="text-sm font-semibold text-gray-300 mb-2" data-i18n="case_2_ind">Finance</h4>
<p className="text-xs text-gray-500" data-i18n="case_2_desc">Automated compliance report generation across 4 banking portals.</p>
</div>
<div className="p-6 border-l-2 border-emerald-500 bg-white/5">
<p className="text-2xl font-bold text-white mb-2" data-i18n="case_3_stat">-25% Chargebacks</p>
<h4 className="text-sm font-semibold text-gray-300 mb-2" data-i18n="case_3_ind">E-commerce</h4>
<p className="text-xs text-gray-500" data-i18n="case_3_desc">Flagging high-risk orders automatically before fulfillment via API.</p>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 border-t border-white/10 text-center relative z-10" id="contact">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight" data-i18n="footer_title">Ready to scale?</h2>
<p className="text-gray-400 mb-8 max-w-md mx-auto" data-i18n="footer_sub">Schedule a 15-minute discovery call. No sales pitch, just feasibility.</p>
<a className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors" data-i18n="nav_book" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Book Consultation</a>
<div className="mt-16 text-xs text-gray-600">
            © 2024 Aether AI. All rights reserved.
        </div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="demo-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl animate-fade-in">

<div className="p-6 border-b border-white/10 flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-white" id="modal-title"></h3>
<p className="text-sm text-gray-400 mt-1" id="modal-desc"></p>
</div>
<button className="text-gray-400 hover:text-white" onclick="closeModal()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="p-6 max-h-[60vh] overflow-y-auto">
<div className="mb-6">
<h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3" data-i18n="modal_how">How it works</h4>
<div className="space-y-3" id="modal-steps">

</div>
</div>
<div className="grid grid-cols-2 gap-6 p-4 bg-white/5 rounded-lg border border-white/5">
<div>
<span className="text-xs text-gray-500 block mb-2" data-i18n="modal_in">Inputs</span>
<div className="text-sm text-white space-y-1" id="modal-inputs"></div>
</div>
<div>
<span className="text-xs text-gray-500 block mb-2" data-i18n="modal_out">Outputs</span>
<div className="text-sm text-white space-y-1" id="modal-outputs"></div>
</div>
</div>
</div>

<div className="p-6 border-t border-white/10 bg-white/5 flex justify-end">
<a className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors" data-i18n="nav_book" href="https://calendly.com/aethertrade2023/discovery-meeting" target="_blank">Book Consultation</a>
</div>
</div>
</div>



    </>
  );
}
