import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // WebGL Aurora Background
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
        uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float iTime;
            uniform vec2 iResolution;

            #define NUM_OCTAVES 3

            float rand(vec2 n) { 
                return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
            }

            float noise(vec2 p){
                vec2 ip = floor(p);
                vec2 u = fract(p);
                u = u*u*(3.0-2.0*u);
                
                float res = mix(
                    mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                    mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                return res*res;
            }

            float fbm(vec2 x) {
                float v = 0.0;
                float a = 0.3;
                vec2 shift = vec2(100);    
                mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
                for (int i = 0; i < NUM_OCTAVES; ++i) {
                    v += a * noise(x);
                    x = rot * x * 2.0 + shift;
                    a *= 0.4;
                }
                return v;
            }

            void main() {
                vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
                
                vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
                vec2 v;
                vec4 o = vec4(0.0);
                
                float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
                
                for(float i = 0.0; i++ < 35.0;)
                {
                    v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
                    
                    float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
                    
                    vec4 auroraColors = vec4(
                        0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
                        0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
                        0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
                        1.0
                    );
                    
                    vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                    
                    float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                    o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                }
                
                o = tanh(pow(o / 100.0, vec4(1.6)));
                gl_FragColor = o * 1.5;
            }
        `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate() {
        requestAnimationFrame(animate);
        material.uniforms.iTime.value += 0.016;
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    });

    animate();
  


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas id="aurora-canvas">

<style>
    canvas { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: -10; }
  </style>

</canvas></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
<span className="text-white text-xs font-semibold">F</span>
</div>
<span className="text-sm font-medium tracking-tight text-white/90">Fedorov Strategy</span>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#join">
                Предзаписаться
            </a>
</div>
</header>
<main className="relative z-10 pt-32 pb-24">

<section className="max-w-4xl mx-auto px-6 text-center mb-24 lg:mb-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Старт 1 февраля 2026
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Личная стратегия <br/>
<span className="text-white/40">предпринимателя</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Личная стратегия как опора бизнеса в сложные времена. 7-недельный онлайн-практикум для собственников: свяжите цели, бизнес и жизнь в единую систему.
            </p>
<div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400 mb-10">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="calendar"></i>
<span>7 недель</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="video"></i>
<span>Онлайн (Zoom)</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="clock"></i>
<span>По средам, 2 часа</span>
</div>
</div>
<a className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#join">
                Предзаписаться на программу
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<div className="mt-20 relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:aspect-[21/9] bg-neutral-900 shadow-2xl group">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>

<div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-700">
<div className="text-center">
<i className="w-16 h-16 mx-auto mb-4 opacity-20" data-lucide="layout-dashboard"></i>
<span className="text-sm tracking-widest uppercase opacity-40">Visual Context: Strategy &amp; Konstantin</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Курс для вас, если вы</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<p className="text-neutral-300 font-light leading-relaxed">
                        Предприниматель или собственник и чувствуете нестабильность, тревогу за будущее компании.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<p className="text-neutral-300 font-light leading-relaxed">
                        Принимаете ключевые решения, но часто реагируете из стресса, а не из долгосрочной стратегии.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5">
<i className="w-5 h-5" data-lucide="compass"></i>
</div>
<p className="text-neutral-300 font-light leading-relaxed">
                        Чувствуете, что прежние смыслы и цели устарели, а новых пока нет. Нужен вектор.
                    </p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-emerald-400 border border-white/5">
<i className="w-5 h-5" data-lucide="map"></i>
</div>
<p className="text-neutral-300 font-light leading-relaxed">
                        Планируете 2026 год, но горизонт туманный. Хочется осознанного опорного решения, а не «дотянуть до весны».
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all" href="#join">
                    Да, мне это актуально
                </a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 relative">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-emerald-900/10 blur-[100px] -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<h3 className="text-2xl font-medium mb-8 text-neutral-400">Что происходит сейчас</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start opacity-70">
<i className="w-5 h-5 text-red-400 mt-1 shrink-0" data-lucide="x"></i>
<span className="font-light">Ощущение нестабильности и фоновое беспокойство о будущем компании.</span>
</li>
<li className="flex gap-4 items-start opacity-70">
<i className="w-5 h-5 text-red-400 mt-1 shrink-0" data-lucide="x"></i>
<span className="font-light">Решения принимаются из страха и усталости — за это приходится дорого платить.</span>
</li>
<li className="flex gap-4 items-start opacity-70">
<i className="w-5 h-5 text-red-400 mt-1 shrink-0" data-lucide="x"></i>
<span className="font-light">Поиск опоры вовне (рынок, партнеры), игнорируя внутренний потенциал.</span>
</li>
<li className="flex gap-4 items-start opacity-70">
<i className="w-5 h-5 text-red-400 mt-1 shrink-0" data-lucide="x"></i>
<span className="font-light">Прежние смыслы не работают, новые не оформлены. Нет общей картины.</span>
</li>
</ul>
</div>

<div>
<h3 className="text-2xl font-medium mb-8 text-emerald-400">Что мы делаем на курсе</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1 shrink-0">
<i className="w-3 h-3 text-emerald-400" data-lucide="check"></i>
</div>
<span className="font-normal text-neutral-200">Формируем личную стратегию как фундамент в сложные времена.</span>
</li>
<li className="flex gap-4 items-start">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1 shrink-0">
<i className="w-3 h-3 text-emerald-400" data-lucide="check"></i>
</div>
<span className="font-normal text-neutral-200">Связываем личное с бизнесом, партнерством и семейной жизнью.</span>
</li>
<li className="flex gap-4 items-start">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1 shrink-0">
<i className="w-3 h-3 text-emerald-400" data-lucide="check"></i>
</div>
<span className="font-normal text-neutral-200">Разбираем архитектуру: от Линии жизни до целей на 5–3–1 год.</span>
</li>
<li className="flex gap-4 items-start">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1 shrink-0">
<i className="w-3 h-3 text-emerald-400" data-lucide="check"></i>
</div>
<span className="font-normal text-neutral-200">Разбираем реальные кейсы перезапуска бизнеса и жизни через стратегию.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-center">Что вы получите за 7 недель</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl border-l-2 border-l-emerald-500/50">
<h3 className="text-lg font-medium text-white mb-2">Стратегия 5–3–1</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Чёткое видение себя и бизнеса на несколько горизонтов планирования.</p>
</div>

<div className="glass-card p-6 rounded-xl border-l-2 border-l-emerald-500/50">
<h3 className="text-lg font-medium text-white mb-2">Линия жизни</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Осознание своих паттернов, сильных и слабых ходов прошлого.</p>
</div>

<div className="glass-card p-6 rounded-xl border-l-2 border-l-emerald-500/50">
<h3 className="text-lg font-medium text-white mb-2">Колесо баланса &amp; Икигай</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Новый баланс ролей (бизнес, семья, здоровье) и точка внутренней опоры.</p>
</div>

<div className="glass-card p-6 rounded-xl border-l-2 border-l-emerald-500/50">
<h3 className="text-lg font-medium text-white mb-2">BHAG (Дерзкая цель)</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Амбициозная, но реалистичная цель, которая задаёт вектор развития.</p>
</div>

<div className="glass-card p-6 rounded-xl border-l-2 border-l-emerald-500/50">
<h3 className="text-lg font-medium text-white mb-2">Связка стратегий</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Синхронизация личных, партнерских и корпоративных интересов.</p>
</div>

<div className="glass-card p-6 rounded-xl border-l-2 border-l-emerald-500/50">
<h3 className="text-lg font-medium text-white mb-2">План на 3 месяца</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Конкретные шаги (traction map), которые можно реализовать сразу.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-center">Программа по неделям</h2>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pl-8 md:pl-12">

<div className="relative">
<div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-emerald-500"></div>
<span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-1 block">Неделя 1</span>
<h3 className="text-xl font-medium text-white mb-2">Модель личной стратегии + Линия жизни</h3>
<p className="text-neutral-400 font-light text-sm">Разбор методологии, анализ прошлого опыта и ключевых точек.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700 group-hover:border-emerald-500"></div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1 block">Неделя 2</span>
<h3 className="text-xl font-medium text-white mb-2">Колесо баланса</h3>
<p className="text-neutral-400 font-light text-sm">Аудит текущего состояния во всех сферах жизни.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700"></div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1 block">Неделя 3</span>
<h3 className="text-xl font-medium text-white mb-2">Икигай</h3>
<p className="text-neutral-400 font-light text-sm">Поиск пересечения того, что вы любите, умеете, и что нужно миру.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700"></div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1 block">Неделя 4</span>
<h3 className="text-xl font-medium text-white mb-2">BHAG (Большая дерзкая цель)</h3>
<p className="text-neutral-400 font-light text-sm">Формулирование амбициозного видения будущего.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700"></div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1 block">Неделя 5</span>
<h3 className="text-xl font-medium text-white mb-2">Цели на 5–3–1 год</h3>
<p className="text-neutral-400 font-light text-sm">Декомпозиция видения в конкретные временные горизонты.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700"></div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1 block">Неделя 6</span>
<h3 className="text-xl font-medium text-white mb-2">Связь стратегий: Партнёрская и Корпоративная</h3>
<p className="text-neutral-400 font-light text-sm">Интеграция личных целей с целями бизнеса и партнеров.</p>
</div>

<div className="relative">
<div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-700"></div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1 block">Неделя 7</span>
<h3 className="text-xl font-medium text-white mb-2">План на 3 месяца и Интеграция</h3>
<p className="text-neutral-400 font-light text-sm">Помогаторы, ограничители и первый конкретный трекшн.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32 border-y border-white/5 bg-white/[0.02] py-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center md:text-left">
<div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white">
<i className="w-6 h-6" data-lucide="monitor"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Формат</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Онлайн-занятия в Zoom. 7 недель, по средам, 2 часа. Малые группы и работа с реальными кейсами.
                    </p>
</div>
<div className="text-center md:text-left">
<div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Что внутри</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Живые лекции, практические задания, разборы стратегий, доступ к методике и чек-листам.
                    </p>
</div>
<div className="text-center md:text-left">
<div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Поддержка</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Q&amp;A на каждом занятии. Дополнительные форматы (индивидуальные сессии) для VIP-участников.
                    </p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-32">
<div className="glass-card rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
<div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-neutral-800 border-2 border-emerald-500/20 flex items-center justify-center overflow-hidden">
<i className="w-16 h-16 text-neutral-600" data-lucide="user"></i>

</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-medium text-white mb-2">Константин Федоров</h3>
<p className="text-emerald-400 text-sm font-medium mb-4">Стратег, бизнес-архитектор, основатель Fedorov Strategy Group</p>
<p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
                        20+ лет в стратегии и управлении. Сотни проведённых сессий и проектов. Помогает предпринимателям и собственникам выстраивать архитектуру бизнеса и связывать её с личной стратегией для устойчивого роста.
                    </p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-center">Форматы участия</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col h-full">
<h3 className="text-xl font-medium text-white mb-4">Практикум</h3>
<p className="text-sm text-neutral-500 mb-8 h-10">Групповой формат работы по методике личной стратегии.</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Участие во всех 7 занятиях
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Работа по методике
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i> Разборы кейсов в группе
                        </li>
</ul>
<div className="mt-auto">
<div className="text-xs text-neutral-500 mb-4">Ориентир от 150 000 ₽ (раннее бронирование)</div>
<a className="block w-full text-center py-3 rounded-lg border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-black transition-colors" href="#join">
                            Обсудить формат
                        </a>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border border-emerald-500/30 bg-emerald-900/5 relative flex flex-col h-full">
<div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Limited</div>
<h3 className="text-xl font-medium text-white mb-4">VIP-формат</h3>
<p className="text-sm text-neutral-500 mb-8 h-10">Глубокая индивидуальная проработка с Константином.</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i> Всё, что в Практикуме
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<i className="w-4 h-4 text-emerald-400" data-lucide="star"></i> 2 индивидуальных разбора (по 1 часу)
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<i className="w-4 h-4 text-emerald-400" data-lucide="star"></i> Стратсессия по вашей стратегии (2 часа)
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300 font-light">
<i className="w-4 h-4 text-emerald-400" data-lucide="star"></i> 2 месяца трекинга после курса
                        </li>
</ul>
<div className="mt-auto">
<div className="text-xs text-neutral-500 mb-4">Ориентир от 280 000 ₽ (раннее бронирование)</div>
<a className="block w-full text-center py-3 rounded-lg bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-900/20" href="#join">
                            Оставить заявку на VIP
                        </a>
</div>
</div>
</div>
<p className="text-center text-neutral-500 text-sm mt-8 max-w-2xl mx-auto font-light">
                На этой странице — только предзапись. После заявки мы свяжемся с вами, чтобы рассказать подробности, ответить на вопросы и обсудить условия участия (включая рассрочку).
            </p>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-medium mb-8">Частые вопросы</h2>
<div className="space-y-4">
<details className="group glass-card rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-neutral-200">
<span>Подойдёт ли курс для малого бизнеса?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 text-sm font-light mt-0 px-6 pb-6 leading-relaxed">
                        Да, методология универсальна. Если вы собственник и принимаете стратегические решения, масштаб бизнеса вторичен. Главное — ваше желание навести порядок в целях.
                    </div>
</details>
<details className="group glass-card rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-neutral-200">
<span>Сколько времени нужно выделять?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 text-sm font-light mt-0 px-6 pb-6 leading-relaxed">
                        Занятие длится 2 часа раз в неделю. На домашние задания и рефлексию закладывайте еще 1–2 часа.
                    </div>
</details>
<details className="group glass-card rounded-xl">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-sm text-neutral-200">
<span>Что если я пропущу занятие?</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 text-sm font-light mt-0 px-6 pb-6 leading-relaxed">
                        Все занятия записываются и будут доступны в личном кабинете. Однако живое участие дает больше ценности благодаря разборам.
                    </div>
</details>
</div>
</section>

<section className="max-w-xl mx-auto px-6 mb-20 relative" id="join">
<div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
<div className="text-center mb-8">
<h2 className="text-2xl font-medium text-white mb-2">Оставить заявку</h2>
<p className="text-sm text-neutral-400 font-light">
                        Мы свяжемся с вами, расскажем о программе и условиях первого потока. Заявка ни к чему вас не обязывает.
                    </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Спасибо за заявку! Мы свяжемся с вами.');">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1">Имя</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700" placeholder="Иван Иванов" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1">Телефон</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1">E-mail</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700" placeholder="ivan@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1">Ваша роль</label>
<select className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer">
<option>Собственник</option>
<option>Предприниматель</option>
<option>Руководитель</option>
<option>Другое</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5 ml-1">Ваш запрос (необязательно)</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-neutral-700 resize-none" placeholder="Кратко о ситуации..." rows="2"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-lg mt-2 hover:bg-neutral-200 transition-colors text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]" type="submit">
                        Отправить заявку
                    </button>
<p className="text-[10px] text-neutral-600 text-center mt-3">
                        Обещаем не спамить — только сообщения по курсу и стратегии.
                    </p>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center">
<span className="text-neutral-400 text-[10px] font-bold">F</span>
</div>
<span className="text-xs text-neutral-500">Fedorov Strategy Group © 2026</span>
</div>
<div className="text-xs text-neutral-600 font-light text-center md:text-right">
                ИП Федоров К.Ю. <br className="md:hidden"/> Политика конфиденциальности
            </div>
</div>
</footer>


    </>
  );
}
