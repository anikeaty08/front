import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => {
              observer.observe(el);
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-600" data-icon="lucide:zap" data-width="20"></span>
<span className="font-semibold text-slate-900 tracking-tight text-sm">
            MARKETON
          </span>
</div>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#register">
          Записаться
        </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="scene-3d-container">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[80px] -z-20"></div>
<div className="cube-wrap">
<div className="cube-face face-f"></div>
<div className="cube-face face-b"></div>
<div className="cube-face face-r"></div>
<div className="cube-face face-l"></div>
<div className="cube-face face-t"></div>
<div className="cube-face face-bt"></div>
<div className="inner-atom">
<div className="atom-ring"></div>
<div className="atom-ring"></div>
<div className="atom-ring"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
</div>
</div>
</div>
<div className="max-w-4xl mx-auto text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">
            Практический курс 2024
          </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Маркетинг, который
          <br className="hidden md:block"/>
          приносит
          <span className="text-indigo-600">результат</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Практическая онлайн-школа. Без воды. С реальными навыками. Подойдёт
          для новичков и тех, кто хочет зарабатывать.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2" href="#register">
<span className="mr-2">Записаться на разбор</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors px-6 py-3" href="#program">
            Смотреть программу
          </a>
</div>
<p className="mt-6 text-xs text-slate-400">
          Бесплатно • 15 минут • Персональная стратегия
        </p>
</div>
</section>

<section className="py-20 px-6 border-t border-slate-100 bg-white">
<div className="max-w-6xl mx-auto">
<div className="mb-12 reveal">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
            Кому это идеально подойдёт
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-indigo-600" data-icon="lucide:sprout" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
              Новичкам
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Тем, кто хочет с нуля освоить востребованную профессию и выйти на
              первый доход через 2 месяца.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-indigo-600" data-icon="lucide:laptop" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
              Фрилансерам
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Копирайтерам, дизайнерам и SMM-щикам, которые хотят повысить чек и
              давать клиентам результат.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 hover:-translate-y-1 reveal delay-300">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-indigo-600" data-icon="lucide:briefcase" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">
              Предпринимателям
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Владельцам бизнеса, которые хотят перестать сливать бюджет и
              начать контролировать маркетологов.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50 relative">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            Что вы получите на курсе
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex gap-4 reveal">
<div className="shrink-0 mt-1">
<span className="iconify text-indigo-600" data-icon="lucide:layers" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">
                Системное понимание
              </h4>
<p className="text-sm text-slate-500">
                Не просто набор инструментов, а полная стратегия продвижения
                любого продукта.
              </p>
</div>
</div>

<div className="flex gap-4 reveal delay-100">
<div className="shrink-0 mt-1">
<span className="iconify text-indigo-600" data-icon="lucide:hammer" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">
                Практические навыки
              </h4>
<p className="text-sm text-slate-500">
                Работа с рекламными кабинетами, аналитикой и воронками продаж
                своими руками.
              </p>
</div>
</div>

<div className="flex gap-4 reveal delay-200">
<div className="shrink-0 mt-1">
<span className="iconify text-indigo-600" data-icon="lucide:folder-check" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">
                Реальные кейсы
              </h4>
<p className="text-sm text-slate-500">
                Разбор рабочих связок, которые приносят прибыль прямо сейчас.
              </p>
</div>
</div>

<div className="flex gap-4 reveal">
<div className="shrink-0 mt-1">
<span className="iconify text-indigo-600" data-icon="lucide:coins" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Заработок</h4>
<p className="text-sm text-slate-500">
                Чёткий алгоритм поиска клиентов и продажи своих услуг на высокий
                чек.
              </p>
</div>
</div>

<div className="flex gap-4 reveal delay-100">
<div className="shrink-0 mt-1">
<span className="iconify text-indigo-600" data-icon="lucide:life-buoy" data-width="24"></span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Поддержка</h4>
<p className="text-sm text-slate-500">
                Персональные разборы домашних заданий и ответы на вопросы в
                чате.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-100">
<div className="max-w-5xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
            Как проходит обучение
          </h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="md:hidden absolute top-0 left-6 h-full w-[1px] bg-gradient-to-b from-slate-200 to-transparent z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">

<div className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 reveal">
<div className="w-12 h-12 rounded-full bg-white border border-indigo-100 shadow-sm flex items-center justify-center shrink-0">
<span className="text-indigo-600 font-semibold text-lg">1</span>
</div>
<div className="md:text-center pt-1 md:pt-0">
<h4 className="text-base font-semibold text-slate-900">
                  Видео-уроки
                </h4>
<p className="text-sm text-slate-500 mt-1">
                  Короткие лекции без воды в удобное время.
                </p>
</div>
</div>

<div className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 reveal delay-100">
<div className="w-12 h-12 rounded-full bg-white border border-indigo-100 shadow-sm flex items-center justify-center shrink-0">
<span className="text-indigo-600 font-semibold text-lg">2</span>
</div>
<div className="md:text-center pt-1 md:pt-0">
<h4 className="text-base font-semibold text-slate-900">Задания</h4>
<p className="text-sm text-slate-500 mt-1">
                  Закрепление материала на практике.
                </p>
</div>
</div>

<div className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 reveal delay-200">
<div className="w-12 h-12 rounded-full bg-white border border-indigo-100 shadow-sm flex items-center justify-center shrink-0">
<span className="text-indigo-600 font-semibold text-lg">3</span>
</div>
<div className="md:text-center pt-1 md:pt-0">
<h4 className="text-base font-semibold text-slate-900">Разборы</h4>
<p className="text-sm text-slate-500 mt-1">
                  Обратная связь от кураторов по ошибкам.
                </p>
</div>
</div>

<div className="flex md:flex-col items-start md:items-center gap-6 md:gap-4 reveal delay-300">
<div className="w-12 h-12 rounded-full bg-white border border-indigo-100 shadow-sm flex items-center justify-center shrink-0">
<span className="text-indigo-600 font-semibold text-lg">4</span>
</div>
<div className="md:text-center pt-1 md:pt-0">
<h4 className="text-base font-semibold text-slate-900">Практика</h4>
<p className="text-sm text-slate-500 mt-1">
                  Работа с реальным проектом.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="program">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12 reveal">
<div className="inline-block px-3 py-1 bg-indigo-50 rounded-full mb-4">
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
              Программа курса
            </span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
            От основ до первых денег
          </h2>
</div>
<div className="space-y-4">
<div className="group bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 hover:border-indigo-200 transition-colors reveal">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="font-medium text-slate-700">
              Основы маркетинга и мышление маркетолога
            </span>
</div>
<div className="group bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 hover:border-indigo-200 transition-colors reveal">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="font-medium text-slate-700">
              Глубокий анализ ЦА и конкурентов
            </span>
</div>
<div className="group bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 hover:border-indigo-200 transition-colors reveal">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="font-medium text-slate-700">
              Упаковка продукта и позиционирование
            </span>
</div>
<div className="group bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 hover:border-indigo-200 transition-colors reveal">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="font-medium text-slate-700">
              Построение автоворонок и путь клиента
            </span>
</div>
<div className="group bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 hover:border-indigo-200 transition-colors reveal">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="font-medium text-slate-700">
              Источники трафика: платные и бесплатные
            </span>
</div>
<div className="group bg-white rounded-xl border border-slate-200 p-5 flex items-center gap-4 hover:border-indigo-200 transition-colors reveal">
<span className="iconify text-indigo-500" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="font-medium text-slate-700">
              Финальная практика и упаковка кейса
            </span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50">
<div className="max-w-lg mx-auto reveal">
<div className="relative bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-2xl shadow-indigo-100/40 overflow-hidden">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-50 rounded-full blur-2xl opacity-50"></div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">
            Полный доступ
          </h3>
<p className="text-slate-500 mb-8 text-sm">
            Всё необходимое для старта в профессии
          </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-slate-700">
                Доступ ко всем видео-урокам (6 модулей)
              </span>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-slate-700">
                Проверка домашних заданий
              </span>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-slate-700">
                Доступ в закрытый чат учеников
              </span>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
<span className="text-sm text-slate-700">
                Сертификат по окончанию
              </span>
</div>
</div>
<a className="block w-full text-center bg-slate-900 text-white font-medium py-3.5 rounded-lg hover:bg-indigo-600 hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-indigo-500/10" href="#register">
            Оставить заявку
          </a>
<p className="text-center text-xs text-slate-400 mt-4">
            Места на текущий поток ограничены
          </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl font-semibold text-slate-900 mb-10 tracking-tight text-center reveal">
          Частые вопросы
        </h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md border border-slate-100 transition-all duration-300 reveal">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-slate-700">
<span>Нужен ли опыт в маркетинге?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              Нет, программа построена так, что мы начинаем с самых основ. Опыт
              не требуется, мы всему научим с нуля.
            </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md border border-slate-100 transition-all duration-300 reveal">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-slate-700">
<span>Сколько времени нужно уделять учебе?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              Достаточно 1-2 часов в день. Уроки записаны лаконично, чтобы вы
              могли совмещать обучение с работой или учёбой.
            </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md border border-slate-100 transition-all duration-300 reveal">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-slate-700">
<span>Помогаете ли вы с трудоустройством?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              Да, лучшие студенты попадают в нашу базу рекомендаций, и мы
              делимся вакансиями от партнёров в закрытом чате.
            </div>
</details>

<details className="group bg-slate-50 rounded-lg open:bg-white open:shadow-md border border-slate-100 transition-all duration-300 reveal">
<summary className="flex cursor-pointer items-center justify-between p-5 font-medium text-slate-700">
<span>Есть ли рассрочка?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">
              Да, у нас есть гибкие условия оплаты и беспроцентная рассрочка от
              банков-партнеров.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 relative overflow-hidden" id="register">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-xl mx-auto relative z-10 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
          Начните разбираться в маркетинге и зарабатывать
        </h2>
<p className="text-slate-400 mb-10">
          Оставьте заявку на бесплатный разбор вашей ситуации. Мы свяжемся в
          Telegram.
        </p>
<form className="space-y-4 text-left bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10" onsubmit="event.preventDefault(); alert('Заявка отправлена!');">
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5 ml-1">
              Имя
            </label>
<input className="w-full bg-slate-800/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-3 placeholder-slate-500 transition-all outline-none" placeholder="Ваше имя" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-300 mb-1.5 ml-1">
              Telegram / Телефон
            </label>
<input className="w-full bg-slate-800/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block p-3 placeholder-slate-500 transition-all outline-none" placeholder="@username" type="text"/>
</div>
<button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-3.5 mt-2 transition-all shadow-lg shadow-indigo-900/50" type="submit">
            Записаться на бесплатный разбор
          </button>
<p className="text-center text-[10px] text-slate-500 mt-2">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
</form>
</div>
</section>

<footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-400 text-sm font-medium tracking-tight">
          MARKETON © 2024
        </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white text-sm transition-colors" href="#">
            Оферта
          </a>
<a className="text-slate-500 hover:text-white text-sm transition-colors" href="#">
            Политика
          </a>
</div>
</div>
</footer>



    </>
  );
}
