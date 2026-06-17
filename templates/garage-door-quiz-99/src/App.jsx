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



      const questions = [
        {
          text: "Де будуть стояти ворота?",
          options: [
            { label: "Окремий холодний гараж", points: 0, icon: "solar:garage-linear" },
            { label: "Гараж у будинку / у теплому контурі", points: 2, icon: "solar:home-linear", hint: "Для «теплого контуру» важлива герметичність і правильні примикання – це часто додає до ціни." },
            { label: "Паркінг / кооператив (спільні умови)", points: 1, icon: "solar:parking-linear" },
            { label: "Комерційний об'єкт (СТО/склад/мийка)", points: 3, icon: "solar:buildings-linear", hint: "Для комерції важливий ресурс на багато відкривань – «стандарт» швидко зношується." }
          ]
        },
        {
          text: "Проєм уже повністю готовий?",
          options: [
            { label: "Так, усе готово – можна міряти", points: 0, icon: "solar:check-square-linear" },
            { label: "Майже готовий – ще буде штукатурка/плитка/підлога", points: 2, icon: "solar:ruler-angular-linear", hint: "Якщо «ще будуть чистові роботи» – розміри часто «з'їдаються» на 10–30 мм, потім потрібні добори/підрізка/перемонтаж. Це типова «доплата», але вона реальна." },
            { label: "Гараж будується – розміри можуть змінитися", points: 2, icon: "solar:sledgehammer-linear", hint: "Якщо «ще будуть чистові роботи» – розміри часто «з'їдаються» на 10–30 мм, потім потрібні добори/підрізка/перемонтаж. Це типова «доплата», але вона реальна." },
            { label: "Не впевнений(а) – хочу зрозуміти, що важливо", points: 1, icon: "solar:question-circle-linear" }
          ]
        },
        {
          text: "Зверху над проємом достатньо місця? (перемичка)",
          options: [
            { label: "Так, місця достатньо", points: 0, icon: "solar:check-circle-linear" },
            { label: "Місця мало / низька перемичка", points: 4, icon: "solar:arrow-up-linear", hint: "Низька перемичка майже завжди змінює тип підйому і комплект напрямних – це одна з головних причин, чому «ціна по розміру» не працює." },
            { label: "Не знаю – можу зняти коротке відео", points: 2, icon: "solar:videocamera-record-linear", hint: "Якщо не знаєте – відео 10–15 секунд вирішує питання." }
          ]
        },
        {
          text: "По боках проєму є вільне місце? (стіни/стійки)",
          options: [
            { label: "Так, місця достатньо", points: 0, icon: "solar:check-circle-linear" },
            { label: "По боках тісно / є колони / проєм «впритул»", points: 3, icon: "solar:walls-linear", hint: "Якщо по боках тісно – можуть знадобитись інші рішення по монтажу, підсилення, інколи нестандартні елементи. Це впливає на ціну не «воріт», а установки, щоб усе працювало рівно." },
            { label: "Не знаю", points: 1, icon: "solar:question-circle-linear" }
          ]
        },
        {
          text: "Над воротами є щось, що може заважати?",
          options: [
            { label: "Нічого не заважає – стеля рівна", points: 0, icon: "solar:check-circle-linear" },
            { label: "Балка/ригель/перемичка незвичної форми", points: 2, icon: "solar:layers-minimalistic-linear", hint: "Комунікації над воротами часто треба переносити або обходити іншим типом монтажу. Це і є «прихована доплата», яку неможливо чесно назвати без огляду." },
            { label: "Труби/проводка/вентиляція", points: 3, icon: "solar:settings-linear", hint: "Комунікації над воротами часто треба переносити або обходити іншим типом монтажу. Це і є «прихована доплата», яку неможливо чесно назвати без огляду." },
            { label: "Скошена стеля / мансарда", points: 3, icon: "solar:map-arrow-up-linear", hint: "Комунікації над воротами часто треба переносити або обходити іншим типом монтажу. Це і є «прихована доплата», яку неможливо чесно назвати без огляду." },
            { label: "Не знаю", points: 1, icon: "solar:question-circle-linear" }
          ]
        },
        {
          text: "Наскільки важлива герметичність і тепло?",
          options: [
            { label: "Не важливо – гараж холодний", points: 0, icon: "solar:snowflake-linear" },
            { label: "Хочу, щоб не дуло і не летів пил", points: 1, icon: "solar:wind-linear", hint: "Герметичність – це не тільки «товщина панелі». Це ще примикання, ущільнювачі, правильний монтаж. Тут «стандарт» часто перетворюється на доплату." },
            { label: "Важливо – гараж теплий, потрібна хороша теплоізоляція", points: 3, icon: "solar:fire-linear", hint: "Герметичність – це не тільки «товщина панелі». Це ще примикання, ущільнювачі, правильний монтаж. Тут «стандарт» часто перетворюється на доплату." },
            { label: "Дуже важливо – майстерня/речі, хочу максимум герметичності", points: 4, icon: "solar:shield-check-linear", hint: "Герметичність – це не тільки «товщина панелі». Це ще примикання, ущільнювачі, правильний монтаж. Тут «стандарт» часто перетворюється на доплату." }
          ]
        },
        {
          text: "Як часто ворота будуть відкриватися?",
          options: [
            { label: "1–2 рази на день", points: 0, icon: "solar:repeat-one-linear" },
            { label: "3–6 разів на день", points: 1, icon: "solar:repeat-linear", hint: "Частота відкривань = ресурс пружин і комплектуючих. «Стандарт» зазвичай під базовий сценарій. Чим більше циклів – тим більше вимог до ресурсу (і ціна змінюється)." },
            { label: "7–15 разів на день", points: 3, icon: "solar:refresh-circle-linear", hint: "Частота відкривань = ресурс пружин і комплектуючих. «Стандарт» зазвичай під базовий сценарій. Чим більше циклів – тим більше вимог до ресурсу (і ціна змінюється)." },
            { label: "15+ разів на день", points: 5, icon: "solar:infinity-linear", hint: "Частота відкривань = ресурс пружин і комплектуючих. «Стандарт» зазвичай під базовий сценарій. Чим більше циклів – тим більше вимог до ресурсу (і ціна змінюється)." }
          ]
        },
        {
          text: "Потрібна автоматика?",
          options: [
            { label: "Ні, відкриватиму вручну", points: 0, icon: "solar:hand-linear" },
            { label: "Так, базова автоматика", points: 2, icon: "solar:remote-controller-linear", hint: "Автоматика – це не просто «додати мотор». Це ще монтаж, налаштування, безпека, інколи окреме живлення/резерв. Тому «ціна по розміру» без питань – майже завжди неправильна." },
            { label: "Так, хочу тиху/швидку/надійну", points: 3, icon: "solar:star-linear", hint: "Автоматика – це не просто «додати мотор». Це ще монтаж, налаштування, безпека, інколи окреме живлення/резерв. Тому «ціна по розміру» без питань – майже завжди неправильна." },
            { label: "Так, важливо, щоб працювало при відключеннях світла (резерв)", points: 4, icon: "solar:battery-full-linear", hint: "Автоматика – це не просто «додати мотор». Це ще монтаж, налаштування, безпека, інколи окреме живлення/резерв. Тому «ціна по розміру» без питань – майже завжди неправильна." }
          ]
        },
        {
          text: "Потрібна безпека «щоб не придавило/не вдарило»?",
          options: [
            { label: "Базово достатньо", points: 0, icon: "solar:shield-linear" },
            { label: "Потрібні фотоелементи (датчики)", points: 1, icon: "solar:eye-linear", hint: "Безпека – це опції, які рідко входять у «стандартну» ціну. Але якщо є діти/тварини/машина поруч – це не розкіш, а спокій." },
            { label: "Хочу максимум – датчики + додаткові захисти + сигналізація", points: 2, icon: "solar:shield-check-linear", hint: "Безпека – це опції, які рідко входять у «стандартну» ціну. Але якщо є діти/тварини/машина поруч – це не розкіш, а спокій." }
          ]
        },
        {
          text: "Зовнішній вигляд і опції",
          options: [
            { label: "Стандартний білий/коричневий – ок", points: 0, icon: "solar:palette-linear" },
            { label: "Потрібен колір «під фасад» (нестандартний)", points: 1, icon: "solar:paint-roller-linear", hint: "Колір/вікна/хвіртка – типові причини «чому ціна не як в інтернеті». Це не обман, це інша комплектація." },
            { label: "Хочу вікна/вставки", points: 1, icon: "solar:window-linear", hint: "Колір/вікна/хвіртка – типові причини «чому ціна не як в інтернеті». Це не обман, це інша комплектація." },
            { label: "Хочу хвіртку (якщо можливо)", points: 3, icon: "solar:door-linear", hint: "Колір/вікна/хвіртка – типові причини «чому ціна не як в інтернеті». Це не обман, це інша комплектація." },
            { label: "Хочу дизайн/фактуру/преміум", points: 2, icon: "solar:diamond-linear", hint: "Колір/вікна/хвіртка – типові причини «чому ціна не як в інтернеті». Це не обман, це інша комплектація." }
          ]
        },
        {
          text: "Монтаж і відповідальність",
          options: [
            { label: "Монтаж не потрібен – поставлю сам", points: 0, icon: "solar:hand-stars-linear" },
            { label: "Потрібен монтаж «під ключ»", points: 2, icon: "solar:key-linear", hint: "Часто «прихована доплата» – це не самі ворота, а правильний монтаж і запуск. Від цього залежить ресурс, герметичність і гарантія." },
            { label: "Потрібен монтаж + гарантійний запуск/налаштування", points: 3, icon: "solar:settings-minimalistic-linear", hint: "Часто «прихована доплата» – це не самі ворота, а правильний монтаж і запуск. Від цього залежить ресурс, герметичність і гарантія." },
            { label: "Потрібен сервіс 1–2 рази на рік (щоб зберігалася гарантія і ресурс)", points: 4, icon: "solar:calendar-mark-linear", hint: "Часто «прихована доплата» – це не самі ворота, а правильний монтаж і запуск. Від цього залежить ресурс, герметичність і гарантія." }
          ]
        }
      ];

      const results = {
        A: {
          title: "Стандарт вам підходить",
          badge: "✔ Підходить стандарт",
          surcharge: "Очікувана доплата: +0…+10%",
          text: "Схоже, у вашому випадку «стандартні ворота» справді можуть підійти – без складних доплат. Щоб назвати точну суму, достатньо 2–3 фото проєму і розмірів – і ми підтвердимо комплектацію.",
          charges: [],
          cta: "Залиште номер – надішлемо швидкий розрахунок і список фото, які потрібні.",
          gradient: "from-emerald-600 to-teal-600",
          icon: "solar:check-circle-linear",
          iconClass: "text-emerald-200"
        },
        B: {
          title: "На межі – стандарт можливий, але будуть доплати",
          badge: "⚠ Є нюанси",
          surcharge: "Очікувана доплата: +10…+30%",
          text: "«Стандарт» може підійти, але у вашому випадку є 2–3 пункти, де зазвичай з'являється доплата після заміру. Добра новина – це передбачувані речі. Їх можна врахувати заздалегідь, щоб не було сюрпризів.",
          charges: [
            "Автоматика та її налаштування",
            "Герметичність / ущільнювачі / примикання",
            "Ресурс під більшу кількість відкривань",
            "Добори після чистових робіт",
            "Нюанси по місцю зверху/збоку"
          ],
          cta: "Залиште номер – уточнимо 2 питання і дамо 3 комплектації з діапазонами.",
          gradient: "from-amber-500 to-orange-600",
          icon: "solar:danger-triangle-linear",
          iconClass: "text-amber-200"
        },
        C: {
          title: "Стандарт не підходить – потрібен підбір під ваш проєм і сценарій",
          badge: "! Нестандартний випадок",
          surcharge: "Очікувана доплата: +30…+70%",
          text: "За вашими відповідями «ціна по розміру» у вашому випадку майже точно буде неправильною. Не тому, що «дорожче», а тому що у вас є умови, де стандартний комплект або не стане, або працюватиме нестабільно й «з'їдатиме» гроші ремонтом/переробками.",
          charges: [
            "Низька перемичка – інший тип підйому і комплект",
            "Перенос/обхід комунікацій",
            "Теплий гараж – герметичність і правильний монтаж",
            "Підвищений ресурс (7+ відкривань/день, комерція)",
            "Опції – хвіртка, дизайн, вікна",
            "Автоматика + безпека + резерв"
          ],
          cta: "Залиште номер – швидко зв'яжемося і назвемо діапазон по 3 комплектаціях, а точний кошторис зафіксуємо після огляду/відео проєму.",
          gradient: "from-rose-600 to-red-600",
          icon: "solar:info-circle-linear",
          iconClass: "text-rose-200"
        }
      };

      let currentQuestion = 0;
      let selectedOption = null;
      let totalPoints = 0;
      let answers = [];

      function showScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
        document.getElementById(id).querySelector('div').classList.remove('fade-in');
        void document.getElementById(id).querySelector('div').offsetWidth;
        document.getElementById(id).querySelector('div').classList.add('fade-in');
      }

      function startQuiz() {
        currentQuestion = 0;
        totalPoints = 0;
        answers = [];
        selectedOption = null;
        showScreen('screen-quiz');
        renderQuestion();
      }

      function renderQuestion() {
        const q = questions[currentQuestion];
        document.getElementById('question-text').textContent = q.text;
        document.getElementById('question-counter').textContent = `${currentQuestion + 1} / ${questions.length}`;
        const progress = ((currentQuestion) / questions.length) * 100;
        document.getElementById('progress-bar').style.width = Math.max(progress, 4) + '%';

        const container = document.getElementById('options-container');
        container.innerHTML = '';
        selectedOption = null;

        q.options.forEach((opt, i) => {
          const btn = document.createElement('button');
          btn.className = 'option-card w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-left cursor-pointer hover:border-indigo-300 hover:bg-indigo-50/40';
          btn.innerHTML = `
            <span class="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
              <iconify-icon icon="${opt.icon}" style="stroke-width:1.5" class="text-gray-500 text-base"></iconify-icon>
            </span>
            <span class="text-sm text-gray-700 font-medium leading-snug flex-1">${opt.label}</span>
            <span class="w-5 h-5 rounded-full border-2 border-gray-200 flex-shrink-0 option-radio flex items-center justify-center transition-all duration-200"></span>
          `;
          btn.addEventListener('click', () => selectOption(i, opt, btn));
          container.appendChild(btn);
        });

        // Restore selection if going back
        const saved = answers[currentQuestion];
        if (saved !== undefined) {
          const btns = container.querySelectorAll('button');
          selectOption(saved.index, q.options[saved.index], btns[saved.index]);
        }

        document.getElementById('hint-box').classList.add('hidden');
        document.getElementById('hint-box').innerHTML = '';
        document.getElementById('next-btn').disabled = saved === undefined;
      }

      function selectOption(index, opt, btn) {
        const container = document.getElementById('options-container');
        container.querySelectorAll('button').forEach(b => {
          b.classList.remove('selected', 'border-indigo-500', 'bg-indigo-50');
          b.classList.add('border-gray-200', 'bg-white');
          const radio = b.querySelector('.option-radio');
          radio.innerHTML = '';
          radio.classList.remove('border-indigo-500');
          radio.classList.add('border-gray-200');
          const icon = b.querySelector('iconify-icon');
          if (icon) { icon.classList.remove('text-indigo-500'); icon.classList.add('text-gray-500'); }
        });

        btn.classList.add('selected', 'border-indigo-500', 'bg-indigo-50');
        btn.classList.remove('border-gray-200', 'bg-white');
        const radio = btn.querySelector('.option-radio');
        radio.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-indigo-500 block"></span>`;
        radio.classList.add('border-indigo-500');
        radio.classList.remove('border-gray-200');
        const icon = btn.querySelector('iconify-icon');
        if (icon) { icon.classList.add('text-indigo-500'); icon.classList.remove('text-gray-500'); }

        selectedOption = { index, points: opt.points, hint: opt.hint };
        document.getElementById('next-btn').disabled = false;

        // Show hint
        const hintBox = document.getElementById('hint-box');
        if (opt.hint) {
          hintBox.innerHTML = `
            <div class="hint-box flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3.5">
              <iconify-icon icon="solar:info-circle-linear" style="stroke-width:1.5" class="text-amber-500 text-base flex-shrink-0 mt-0.5"></iconify-icon>
              <p class="text-sm text-amber-800 leading-relaxed">${opt.hint}</p>
            </div>
          `;
          hintBox.classList.remove('hidden');
        } else {
          hintBox.classList.add('hidden');
          hintBox.innerHTML = '';
        }
      }

      function nextQuestion() {
        if (selectedOption === null) return;

        answers[currentQuestion] = { index: selectedOption.index, points: selectedOption.points };

        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          renderQuestion();
          document.getElementById('question-area').classList.remove('fade-in');
          void document.getElementById('question-area').offsetWidth;
          document.getElementById('question-area').classList.add('fade-in');
        } else {
          // Calculate
          totalPoints = answers.reduce((sum, a) => sum + a.points, 0);
          showResult();
        }
      }

      function goBack() {
        if (currentQuestion > 0) {
          currentQuestion--;
          renderQuestion();
        } else {
          showScreen('screen-welcome');
        }
      }

      function showResult() {
        let key = 'A';
        if (totalPoints >= 16) key = 'C';
        else if (totalPoints >= 8) key = 'B';

        const r = results[key];
        const header = document.getElementById('result-header');
        header.className = `px-8 py-8 text-white bg-gradient-to-br ${r.gradient}`;

        document.getElementById('result-icon').setAttribute('icon', r.icon);
        document.getElementById('result-icon').className = `text-3xl ${r.iconClass}`;
        document.getElementById('result-icon').setAttribute('style', 'stroke-width:1.5');

        document.getElementById('result-badge').textContent = r.badge;
        document.getElementById('result-title').textContent = r.title;
        document.getElementById('result-surcharge-text').textContent = r.surcharge;
        document.getElementById('result-text').textContent = r.text;
        document.getElementById('result-cta-text').textContent = r.cta;

        const chargesEl = document.getElementById('result-charges');
        const chargesList = document.getElementById('result-charges-list');
        chargesList.innerHTML = '';

        if (r.charges.length > 0) {
          chargesEl.classList.remove('hidden');
          r.charges.forEach(c => {
            const li = document.createElement('li');
            li.className = 'flex items-start gap-2.5';
            li.innerHTML = `
              <iconify-icon icon="solar:alt-arrow-right-linear" style="stroke-width:1.5" class="text-indigo-400 text-sm flex-shrink-0 mt-0.5"></iconify-icon>
              <span class="text-xs text-gray-600 leading-relaxed">${c}</span>
            `;
            chargesList.appendChild(li);
          });
        } else {
          chargesEl.classList.add('hidden');
        }

        document.getElementById('phone-input').value = '';
        showScreen('screen-result');
      }

      function submitForm() {
        const phone = document.getElementById('phone-input').value.trim();
        if (!phone || phone.length < 7) {
          document.getElementById('phone-input').style.borderColor = '#f87171';
          document.getElementById('phone-input').style.boxShadow = '0 0 0 3px rgba(248,113,113,0.15)';
          setTimeout(() => {
            document.getElementById('phone-input').style.borderColor = '';
            document.getElementById('phone-input').style.boxShadow = '';
          }, 1500);
          return;
        }
        showScreen('screen-thanks');
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
      

<div className="screen active w-full max-w-xl mx-auto" id="screen-welcome">
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden fade-in">
<div className="bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-10 text-white">
<div className="flex items-center gap-2 mb-6">
<span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full tracking-wide uppercase">
              Квіз
            </span>
<span className="text-white/60 text-xs">~90 секунд</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight leading-snug mb-3">
            Ціна на стандартні ворота – і які приховані доплати вас чекають
          </h1>
<p className="text-white/80 text-sm leading-relaxed">
            За 90 секунд перевіримо, чи підходять вам «стандартні» ворота – і
            покажемо, де зазвичай з'являється доплата після заміру.
          </p>
</div>
<div className="px-8 py-6">
<div className="flex items-center gap-6 mb-6">
<div className="flex items-center gap-2 text-gray-500 text-xs">
<iconify-icon className="text-indigo-500 text-base" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              11 питань
            </div>
<div className="flex items-center gap-2 text-gray-500 text-xs">
<iconify-icon className="text-indigo-500 text-base" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Без зобов'язань
            </div>
<div className="flex items-center gap-2 text-gray-500 text-xs">
<iconify-icon className="text-indigo-500 text-base" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Точний розрахунок
            </div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2" onclick="startQuiz()">
            Почати
            <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="screen w-full max-w-xl mx-auto" id="screen-quiz">
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden fade-in">

<div className="px-6 pt-6 pb-4 border-b border-gray-50">
<div className="flex items-center justify-between mb-4">
<button className="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-xs transition-colors" onclick="goBack()">
<iconify-icon className="text-sm" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Назад
            </button>
<span className="text-gray-400 text-xs font-medium" id="question-counter">
              1 / 11
            </span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="progress-bar h-full bg-indigo-500 rounded-full" id="progress-bar" style={{width: '9%'}}></div>
</div>
</div>

<div className="px-6 py-6" id="question-area">
<h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-5 leading-snug" id="question-text"></h2>
<div className="flex flex-col gap-2.5" id="options-container"></div>

<div className="hidden mt-4" id="hint-box"></div>
</div>

<div className="px-6 pb-6">
<button className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2" disabled="" id="next-btn" onclick="nextQuestion()">
            Далі
            <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="screen w-full max-w-xl mx-auto" id="screen-result">
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden fade-in">

<div className="px-8 py-8 text-white" id="result-header">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-3xl" id="result-icon" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-4 bg-white/20" id="result-badge"></div>
<h2 className="text-xl font-semibold tracking-tight mb-2 leading-snug" id="result-title"></h2>
<div className="text-white/90 text-sm font-medium mt-3 flex items-center gap-2" id="result-surcharge">
<iconify-icon icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span id="result-surcharge-text"></span>
</div>
</div>

<div className="px-8 py-6 border-b border-gray-50">
<p className="text-gray-600 text-sm leading-relaxed mb-5" id="result-text"></p>
<div className="hidden" id="result-charges">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
              За що зазвичай доплата:
            </p>
<ul className="flex flex-col gap-2" id="result-charges-list"></ul>
</div>
</div>

<div className="px-8 py-6">
<p className="text-sm font-medium text-gray-800 mb-4" id="result-cta-text"></p>
<div className="flex gap-2">
<input className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 transition-all duration-200 focus:border-indigo-400" id="phone-input" placeholder="+380 ___ ___ ____" type="tel"/>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-3 rounded-xl text-sm transition-all duration-200 whitespace-nowrap" onclick="submitForm()">
              Отримати
            </button>
</div>
<p className="text-gray-400 text-xs mt-3 leading-relaxed">
            Передзвонимо або напишемо – уточнимо 2–3 моменти і дамо діапазони по
            3 комплектаціях без «доплат з повітря».
          </p>
</div>
</div>
</div>

<div className="screen w-full max-w-xl mx-auto" id="screen-thanks">
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden fade-in text-center px-8 py-14">
<div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
<iconify-icon className="text-green-500 text-3xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
          Дякуємо!
        </h2>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          Отримали вашу заявку. Зв'яжемося з вами найближчим часом і підберемо
          оптимальні комплектації.
        </p>
</div>
</div>


    </>
  );
}
