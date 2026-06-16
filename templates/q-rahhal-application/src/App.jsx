import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Data: 8 Categories ---
        const data = [
            {
                id: 'first-aid',
                title: 'الإسعافات الأولية',
                icon: 'activity',
                desc: 'اختبر معلوماتك الطبية الأساسية وتصرفك في الحالات الطارئة.',
                questions: [
                    { q: "وش تسوي لو قرصك عقرب؟", a: ["غسل المكان بالماء والصابون وكمادة باردة", "شق الجرح وامتصاص السم", "ربط المكان بقوة", "وضع الثلج مباشرة لمدة ساعة"], correct: 0, reason: "الشق والربط قد يزيدان الضرر، التبريد والغسل هو الإجراء الأولي الصحيح." },
                    { q: "شخص غص (انسداد مجرى الهواء)، التصرف؟", a: ["مناورة هيمليك (ضغطات البطن)", "شرب الماء", "الضرب بقوة على الظهر فقط", "النوم على الظهر"], correct: 0, reason: "ضغطات البطن هي الطريقة الفعالة لإخراج الجسم الغريب." },
                    { q: "كيف تتعامل مع الرعاف؟", a: ["انحناء للأمام وضغط الأنف", "رفع الرأس للخلف", "الاستلقاء", "وضع قطن داخل الأنف"], correct: 0, reason: "رفع الرأس للخلف يسبب بلع الدم، الانحناء للأمام هو الصحيح." },
                    { q: "حرق بسيط في اليد، وش تحط عليه؟", a: ["ماء جاري فاتر", "معجون أسنان", "ثلج مباشر", "زبدة"], correct: 0, reason: "الماء الفاتر يبرد الحرق دون إتلاف الأنسجة، المعجون يحبس الحرارة." }
                ]
            },
            {
                id: 'desert',
                title: 'القيادة في الصحراء',
                icon: 'sun', // using sun as proxy for desert nature
                desc: 'مهارات القيادة على الكثبان الرملية والتجهيزات الضرورية.',
                questions: [
                    { q: "كم ضغط الإطارات المناسب للرمال الناعمة؟", a: ["15-20 PSI", "35 PSI", "10 PSI", "50 PSI"], correct: 0, reason: "تنسيم الكفرات يزيد مساحة التلامس ويمنع التغريز." },
                    { q: "لو غرزت السيارة، وش أول شيء تسويه؟", a: ["توقف عن الدعس فوراً", "استمر بالدعس بقوة", "لف الدركسون يمين يسار بسرعة", "شغل المكيف"], correct: 0, reason: "الاستمرار بالدعس يخلي السيارة تحفر وتغوص أكثر." },
                    { q: "وش أفضل وقت لطلوع الطعس؟", a: ["الصباح الباكر أو الغروب", "الظهر وقت الحر", "الليل الدامس", "وقت المطر الغزير"], correct: 0, reason: "الرمل يكون أتماسك في البرودة وتكون الرؤية أوضح للتضاريس." },
                    { q: "إذا ارتفعت حرارة السيارة بالبر؟", a: ["توقف وجه السيارة للهواء وتفتح الكبوت", "تطفي السيارة فوراً", "ترش ماء بارد على المكينة", "تكمل تمشي بشويش"], correct: 0, reason: "إطفاء السيارة فوراً قد يضر الرأس، اتركها شغالة وتواجه الهواء لتبرد المراوح." }
                ]
            },
            {
                id: 'mechanics',
                title: 'ميكانيكا السيارات',
                icon: 'wrench',
                desc: 'المعرفة الأساسية بصيانة الأعطال والمركبة.',
                questions: [
                    { q: "وش يعني لمبة البطارية في الطبلون؟", a: ["خلل في الدينامو (الشحن)", "البطارية جديدة", "السيارة تحتاج بنزين", "الكفرات منسمة"], correct: 0, reason: "تعني أن المولد (الدينامو) لا يشحن البطارية والسيارة تعتمد على المخزون." },
                    { q: "كيف تشيك على زيت المكينة؟", a: ["والسيارة طافية وباردة", "والسيارة شغالة", "والسيارة ماشية", "بعد السفر مباشرة"], correct: 0, reason: "عشان ينزل الزيت للكارتير ويعطيك قراءة دقيقة." },
                    { q: "صوت صفير عند الفرامل غالباً يعني؟", a: ["تآكل الفحمات", "نقص زيت الفرامل", "الهواء قليل", "الشارع ناعم"], correct: 0, reason: "مؤشر احتكاك حديد بحديد لانتهاء الفحمات." }
                ]
            },
            {
                id: 'traffic',
                title: 'قوانين المرور',
                icon: 'traffic-cone', // proxy
                desc: 'قواعد السير والأولويات في الطرق العامة.',
                questions: [
                    { q: "الأولوية في الدوار لمن؟", a: ["للمركبة اللي بداخل الدوار", "للمركبة اللي جاية من اليمين", "للمركبة الأسرع", "للمركبة الأكبر"], correct: 0, reason: "القاعدة العامة: الأولوية لمن بداخل الدوار." },
                    { q: "متى يمديك تتجاوز من اليمين؟", a: ["ممنوع إلا في حالات نادرة جداً", "دائماً مسموح", "اذا اللي قدامك بطيء", "في الطرق السريعة فقط"], correct: 0, reason: "التجاوز من اليمين خطر ومخالفة إلا إذا كانت المسارات محددة والمركبة الأمامية تنتظر للدوران لليسار." },
                    { q: "الخط المتصل في وسط الطريق يعني؟", a: ["ممنوع التجاوز", "مسموح التجاوز", "توقف", "مكان للمشاة"], correct: 0, reason: "الخط المتصل يعني منع التجاوز تماماً لخطورة الطريق." }
                ]
            },
            {
                id: 'camping',
                title: 'التخييم والرحلات',
                icon: 'tent',
                desc: 'أسس التخييم الآمن والمحافظة على البيئة.',
                questions: [
                    { q: "وين أفضل مكان تنصب فيه الخيمة؟", a: ["منطقة مرتفعة ومحمية من الرياح", "بطن الوادي", "تحت شجرة يابسة", "جمب جحر حيوانات"], correct: 0, reason: "بطن الوادي خطر سيول، والمرتفع آمن، والشجر اليابس قد يسقط." },
                    { q: "كيف تطفي مشب النار قبل تمشي؟", a: ["تدفنه بالرمل وتصب ماء", "تتركه يطفى لحاله", "تغطيه بكرتون", "تنفخ عليه"], correct: 0, reason: "الدفن والرمل يضمن انقطاع الأكسجين وعدم اشتعاله مجدداً." },
                    { q: "قاعدة 'لا تترك أثراً' تعني؟", a: ["تاخذ زبالتك معك بالكامل", "تدفن الزبالة", "تحرق الزبالة", "تخلي الأكل للطيور"], correct: 0, reason: "يجب إعادة المكان كما كان وأفضل لحماية البيئة." }
                ]
            },
            {
                id: 'safety',
                title: 'السلامة المنزلية',
                icon: 'shield-check',
                desc: 'الوقاية من المخاطر المنزلية والحرائق.',
                questions: [
                    { q: "شميت ريحة غاز قوية بالمطبخ، وش تسوي؟", a: ["تفتح الشبابيك ولا تشغل أي مفتاح كهرباء", "تشغل مروحة الشفط", "تولع ولاعة تتأكد", "تتصل بالجوال من داخل المطبخ"], correct: 0, reason: "أي شرارة كهربائية (حتى من مفتاح اللمبة) قد تسبب انفجار." },
                    { q: "حريق زيت في المقلاة، كيف تطفيه؟", a: ["تغطيه بغطاء معدني (كتم)", "تصب عليه ماء", "تشيله وترميه بالمغسلة", "تنفخ عليه"], correct: 0, reason: "الماء يسبب انفجار الزيت، الكتم هو الحل لقطع الأكسجين." },
                    { q: "طفاية الحريق المناسبة للكهرباء؟", a: ["بودرة أو ثاني أكسيد الكربون", "ماء", "رغوة", "تراب"], correct: 0, reason: "الماء موصل للكهرباء ويزيد الخطر." }
                ]
            },
            {
                id: 'tech',
                title: 'الأمن الرقمي',
                icon: 'lock',
                desc: 'حماية البيانات والخصوصية في العالم الرقمي.',
                questions: [
                    { q: "جاك رابط من رقم غريب يقول ربحت جائزة، وش تسوي؟", a: ["تتجاهله وتحظره", "تفتح وتشوف", "ترسله لأخوياك", "تدخل بياناتك"], correct: 0, reason: "غالباً تصيد احتيالي (Phishing) لسرقة البيانات." },
                    { q: "وش أقوى كلمة مرور؟", a: ["M@x#92$Pl", "123456", "password", "Saud123"], correct: 0, reason: "تحتوي على حروف كبيرة وصغيرة وأرقام ورموز وليست كلمة شائعة." },
                    { q: "المصادقة الثنائية (2FA) تعني؟", a: ["كلمة مرور + رمز يوصل لجوالك", "كلمة مرور طويلة", "بصمة فقط", "سؤال سري"], correct: 0, reason: "طبقة حماية إضافية تمنع الدخول حتى لو سرقت كلمة المرور." }
                ]
            },
            {
                id: 'general',
                title: 'الثقافة العامة',
                icon: 'globe',
                desc: 'معلومات عامة متنوعة وتاريخية.',
                questions: [
                    { q: "ما هي عاصمة المملكة العربية السعودية؟", a: ["الرياض", "جدة", "مكة المكرمة", "الدمام"], correct: 0, reason: "الرياض هي العاصمة السياسية والإدارية." },
                    { q: "رؤية السعودية للمستقبل تسمى؟", a: ["رؤية 2030", "رؤية 2020", "رؤية 2050", "الخطوة القادمة"], correct: 0, reason: "رؤية 2030 هي الخطة الاستراتيجية لتنويع الاقتصاد." },
                    { q: "أكبر محيط في العالم؟", a: ["المحيط الهادي", "المحيط الأطلسي", "المحيط الهندي", "المتجمد الشمالي"], correct: 0, reason: "المحيط الهادي يغطي مساحة أكبر من اليابسة كلها." }
                ]
            }
        ];

        // --- Application Logic ---
        const app = {
            currentCategory: null,
            questionsQueue: [],
            currentQIndex: 0,
            score: 0,
            
            // UI Elements Reference
            ui: {
                dashboard: document.getElementById('dashboard-view'),
                startScreen: document.getElementById('start-screen'),
                quizScreen: document.getElementById('quiz-screen'),
                resultScreen: document.getElementById('result-screen'),
                grid: document.getElementById('categories-grid'),
                modal: document.getElementById('feedback-modal')
            },

            init() {
                this.renderDashboard();
                lucide.createIcons();
            },

            renderDashboard() {
                const grid = this.ui.grid;
                grid.innerHTML = '';
                
                data.forEach(cat => {
                    const card = document.createElement('div');
                    card.className = "group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer flex flex-col items-start gap-4 hover:-translate-y-1";
                    card.onclick = () => this.selectCategory(cat.id);

                    card.innerHTML = `
                        <div class="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-200">
                            <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                        </div>
                        <div class="w-full">
                            <h3 class="font-semibold text-gray-900 text-lg tracking-tight mb-1">${cat.title}</h3>
                            <p class="text-xs text-gray-400 font-normal line-clamp-2 leading-relaxed">${cat.desc}</p>
                        </div>
                        <div class="mt-auto w-full pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
                            <span>${cat.questions.length} أسئلة</span>
                            <i data-lucide="arrow-left" class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300"></i>
                        </div>
                    `;
                    grid.appendChild(card);
                });
                lucide.createIcons();
            },

            selectCategory(id) {
                this.currentCategory = data.find(c => c.id === id);
                if (!this.currentCategory) return;

                // Update Intro Screen
                document.getElementById('intro-title').innerText = this.currentCategory.title;
                document.getElementById('intro-desc').innerText = this.currentCategory.desc;
                document.getElementById('intro-count').innerText = `${this.currentCategory.questions.length} أسئلة`;
                
                const iconContainer = document.getElementById('intro-icon');
                iconContainer.innerHTML = `<i data-lucide="${this.currentCategory.icon}" class="w-6 h-6 text-gray-900"></i>`;
                
                this.switchView('start-screen');
                lucide.createIcons();
            },

            startQuiz() {
                // Prepare Quiz
                this.questionsQueue = this.shuffleArray([...this.currentCategory.questions]);
                this.currentQIndex = 0;
                this.score = 0;
                
                this.switchView('quiz-screen');
                this.renderQuestion();
            },

            renderQuestion() {
                const qData = this.questionsQueue[this.currentQIndex];
                
                // Update Progress
                document.getElementById('current-q-num').innerText = this.currentQIndex + 1;
                document.getElementById('total-q-num').innerText = this.questionsQueue.length;
                const progress = ((this.currentQIndex) / this.questionsQueue.length) * 100;
                document.getElementById('progress-bar').style.width = `${progress}%`;

                // Text
                document.getElementById('question-text').innerText = qData.q;
                
                // Options
                const container = document.getElementById('options-container');
                container.innerHTML = '';
                
                // Create options with index to track correct answer after shuffle
                const optionsWithIndices = qData.a.map((opt, i) => ({ text: opt, originalIndex: i }));
                const shuffledOptions = this.shuffleArray(optionsWithIndices);

                shuffledOptions.forEach(optObj => {
                    const btn = document.createElement('button');
                    btn.className = "w-full text-right p-4 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm transition-all duration-200 text-gray-700 font-medium text-sm sm:text-base group flex items-center justify-between";
                    
                    btn.innerHTML = `
                        <span>${optObj.text}</span>
                        <i data-lucide="circle" class="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors"></i>
                    `;
                    
                    btn.onclick = () => this.handleAnswer(optObj.originalIndex, qData);
                    container.appendChild(btn);
                });
                lucide.createIcons();
            },

            handleAnswer(selectedIndex, qData) {
                if (selectedIndex === qData.correct) {
                    this.score++;
                    this.nextQuestion();
                } else {
                    // Show modal
                    const modal = this.ui.modal;
                    document.getElementById('feedback-reason').innerText = qData.reason;
                    document.getElementById('feedback-correct').innerText = qData.a[qData.correct];
                    modal.classList.remove('hidden');
                }
            },

            nextQuestion() {
                this.ui.modal.classList.add('hidden');
                this.currentQIndex++;
                
                if (this.currentQIndex < this.questionsQueue.length) {
                    this.renderQuestion();
                } else {
                    this.showResults();
                }
            },

            showResults() {
                document.getElementById('result-category-name').innerText = this.currentCategory.title;
                document.getElementById('final-score').innerText = this.score;
                document.getElementById('total-score-display').innerText = this.questionsQueue.length;
                this.switchView('result-screen');
            },

            restartCategory() {
                this.startQuiz();
            },

            goHome() {
                this.currentCategory = null;
                this.switchView('dashboard-view');
            },

            switchView(viewId) {
                // Hide all
                Object.values(this.ui).forEach(el => {
                    if (el && !el.id.includes('modal') && el.id !== 'categories-grid') {
                        el.classList.add('hidden');
                    }
                });
                // Show target
                const target = document.getElementById(viewId);
                target.classList.remove('hidden');
                // Scroll to top
                window.scrollTo(0, 0);
            },

            shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }
        };

        // Start
        window.addEventListener('DOMContentLoaded', () => {
            app.init();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-200 sticky top-0 z-30 bg-opacity-80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<h1 className="text-lg font-semibold tracking-tight text-gray-900">منصة المعرفة</h1>
</div>
<button className="p-2 hover:bg-gray-100 rounded-md transition-colors text-gray-500" onclick="app.goHome()">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</button>
</div>
</header>

<main className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 flex flex-col justify-center" id="app">

<div className="fade-in w-full" id="dashboard-view">
<div className="mb-8">
<h2 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">اختر مجال الاختبار</h2>
<p className="text-gray-500">اختر تصنيفاً للبدء في اختبار معلوماتك وتقييم مستواك.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="categories-grid">

</div>
</div>

<div className="hidden w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200 p-8 text-center fade-in" id="start-screen">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-6 border border-gray-100" id="intro-icon">

</div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2" id="intro-title">--</h1>
<p className="text-gray-500 text-lg mb-8 font-normal" id="intro-desc">--</p>
<div className="flex items-center justify-center gap-6 mb-8 text-gray-400 text-sm border-y border-gray-50 py-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="help-circle"></i>
<span id="intro-count">5 أسئلة</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>3 دقائق تقريباً</span>
</div>
</div>
<div className="flex gap-3 justify-center">
<button className="px-6 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-all duration-200" onclick="app.goHome()">
                    عودة
                </button>
<button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md" onclick="app.startQuiz()">
<span>ابدأ الاختبار</span>
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
</div>
</div>

<div className="hidden w-full max-w-2xl mx-auto fade-in" id="quiz-screen">
<div className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
<span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs">سؤال <span id="current-q-num">1</span></span>
<span className="text-gray-300">/</span>
<span className="text-gray-400" id="total-q-num">10</span>
</div>
<button className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1" onclick="app.goHome()">
<i className="w-3 h-3" data-lucide="x"></i>
                    إنهاء
                </button>
</div>

<div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
<div className="h-full bg-gray-900 rounded-full transition-all duration-500 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>
<div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-200 overflow-hidden">
<div className="p-8 pb-6">
<h2 className="text-xl sm:text-2xl font-semibold leading-relaxed tracking-tight text-gray-900 mb-8" id="question-text">

</h2>
<div className="grid grid-cols-1 gap-3" id="options-container">

</div>
</div>
<div className="bg-gray-50 px-8 py-4 border-t border-gray-100 text-xs text-gray-400 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>اختر الإجابة الصحيحة للمتابعة</span>
</div>
</div>
</div>

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="feedback-modal">
<div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-200 p-6 scale-in">
<div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
<i className="w-5 h-5" data-lucide="x"></i>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">إجابة غير صحيحة</h3>
<div className="mb-6 space-y-4">
<div className="bg-red-50 p-4 rounded-lg border border-red-100">
<p className="text-xs font-semibold text-red-800 mb-1 uppercase tracking-wide opacity-80">السبب</p>
<p className="text-gray-700 text-sm leading-relaxed" id="feedback-reason"></p>
</div>
<div className="bg-green-50 p-4 rounded-lg border border-green-100">
<p className="text-xs font-semibold text-green-800 mb-1 uppercase tracking-wide opacity-80">الإجابة الصحيحة</p>
<p className="text-gray-900 font-medium text-sm" id="feedback-correct"></p>
</div>
</div>
<button className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2" onclick="app.nextQuestion()">
<span>التالي</span>
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
</div>
</div>

<div className="hidden w-full max-w-2xl mx-auto fade-in bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200 p-8 text-center" id="result-screen">
<div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100 relative">
<i className="w-8 h-8 text-gray-900" data-lucide="trophy"></i>
<div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
</div>
<h2 className="text-2xl font-semibold text-gray-900 mb-2">اكتمل الاختبار!</h2>
<p className="text-gray-500 mb-8" id="result-msg">نتيجة اختبارك في <span className="font-medium text-gray-800" id="result-category-name">--</span></p>
<div className="flex items-center justify-center gap-8 mb-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
<div className="text-center">
<div className="text-4xl font-semibold text-gray-900 tracking-tight" id="final-score">0</div>
<div className="text-xs text-gray-400 mt-1 uppercase tracking-wide font-medium">صح</div>
</div>
<div className="w-px h-12 bg-gray-200"></div>
<div className="text-center">
<div className="text-4xl font-semibold text-gray-300 tracking-tight" id="total-score-display">10</div>
<div className="text-xs text-gray-400 mt-1 uppercase tracking-wide font-medium">المجموع</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<button className="px-6 py-2.5 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2" onclick="app.restartCategory()">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
<span>إعادة الاختبار</span>
</button>
<button className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-sm" onclick="app.goHome()">
<span>العودة للرئيسية</span>
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
</div>
</div>
</main>


    </>
  );
}
