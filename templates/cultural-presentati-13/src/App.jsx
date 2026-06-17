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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#080805',
foreground: '#ffffff',
accent: '#D4D414',
card: '#121212',
border: '#2A2A2A',
muted: '#888888'
},
fontFamily: {
sans: ['Figtree', 'sans-serif']
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const { useState, useEffect } = React;
        const { motion } = window.Motion;

        // Reusable Subheading Component
        const Subheading = ({ text }) => (
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-5 h-1 rounded-full bg-accent"></div>
                <span className="text-accent uppercase text-xs tracking-wider font-normal">
                    {text}
                </span>
            </div>
        );

        // Navbar Component
        const Navbar = () => {
            return (
                <motion.nav 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-4 inset-x-0 z-50 flex items-center justify-between px-4 md:px-8 w-full max-w-[1440px] mx-auto"
                >
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <span className="tracking-tighter font-medium text-lg uppercase">CULTURA</span>
                    </div>

                    <div className="hidden md:flex glass-panel rounded-full px-6 py-2.5 items-center space-x-12">
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-white/70 transition-colors text-sm font-light">
                            <span>Tópicos</span>
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16"></iconify-icon>
                        </div>
                        <div className="text-white/20">|</div>
                        <div className="flex items-center space-x-4 text-sm font-light text-white/50">
                            Slide 1 de 6
                        </div>
                    </div>

                    <div className="glass-panel rounded-full w-10 h-10 flex flex-col justify-center items-center space-y-1 cursor-pointer hover:bg-white/10 transition-colors">
                        <div className="w-4 h-[1px] bg-white rounded-full"></div>
                        <div className="w-4 h-[1px] bg-white rounded-full"></div>
                        <div className="w-4 h-[1px] bg-white rounded-full"></div>
                    </div>
                </motion.nav>
            );
        };

        // Slide 1: Hero Component
        const Hero = () => {
            return (
                <div data-slide className="p-2 md:p-4 h-[95vh] md:h-[90vh]">
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop" 
                            alt="Abstract Globe Connection" 
                            className="absolute inset-0 w-full h-full object-cover scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90"></div>

                        <Navbar />

                        <div className="absolute top-24 md:top-32 inset-x-0 px-6 md:px-12 flex justify-between items-start text-xs font-light text-white/70 z-10">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                Brasil, Global
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-right max-w-[200px] hidden md:block">
                                Apresentação de<br/>Intercâmbio Cultural
                            </motion.div>
                        </div>

                        <div className="absolute bottom-0 inset-x-0 p-6 md:p-12 z-20 flex flex-col lg:flex-row justify-between lg:items-end gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="max-w-3xl"
                            >
                                <Subheading text="Slide 1: Capa" />
                                <h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6">
                                    Intercâmbio Cultural:<br />5 Hábitos Estrangeiros no Brasil
                                </h1>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-12 w-full lg:w-auto"
                            >
                                <div className="text-lg font-light text-white/80 max-w-sm">
                                    Uma viagem pelas tradições que importamos e transformamos.
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            );
        };

        // Slide 2: About (Tradições de Natal)
        const SlideNatal = () => {
            const traditions = [
                { country: "Alemanha", flag: "https://flagcdn.com/de.svg", detail: "Árvore de Natal, esperança e renovação" },
                { country: "Reino Unido", flag: "https://flagcdn.com/gb.svg", detail: "Troca de presentes e cartões" },
                { country: "Estados Unidos", flag: "https://flagcdn.com/us.svg", detail: "Luzes e a imagem do Papai Noel" },
                { country: "Portugal", flag: "https://flagcdn.com/pt.svg", detail: "Celebração religiosa base" }
            ];

            return (
                <section data-slide className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen flex items-center">
                    <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 w-full">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:w-1/2"
                        >
                            <Subheading text="Slide 2: Tradições de Natal" />
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8 max-w-2xl">
                                O Natal brasileiro é uma colagem de costumes de várias nações.
                            </h2>
                            <div className="flex items-center space-x-6 border-b border-white/10 pb-8 max-w-md">
                                <p className="text-muted font-light text-sm leading-relaxed">
                                    Nenhuma tradição festiva no Brasil demonstra tanto a nossa capacidade de absorver e misturar culturas quanto o Natal, unindo o frio europeu ao nosso clima tropical.
                                </p>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-y-12 gap-x-8">
                            {traditions.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col p-6 rounded-3xl bg-card border border-border"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4">
                                        <img src={item.flag} alt={`Bandeira ${item.country}`} className="w-6 h-6 rounded-full object-cover" />
                                    </div>
                                    <span className="text-xl font-medium tracking-tight mb-2">{item.country}</span>
                                    <span className="text-muted font-light text-sm">{item.detail}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

        // Slide 3: Benefits (Gastronomia)
        const SlideGastronomia = () => {
            const features = [
                { flag: "https://flagcdn.com/jp.svg", title: "Japão", desc: "Introduziu o hábito do consumo frequente de peixes crus e frutos do mar, transformando o paladar urbano brasileiro." },
                { flag: "https://flagcdn.com/pt.svg", title: "Portugal", desc: "Responsável pela introdução do pão, da doçaria conventual (doces de ovos) e do uso do bacalhau em datas festivas." },
                { icon: "solar:earth-linear", title: "A Mistura", desc: "A culinária brasileira é uma 'mistura de panelas' onde cada país adicionou um tempero único ao nosso dia a dia." }
            ];

            return (
                <section data-slide className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto relative min-h-screen flex items-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10"></div>
                    
                    <div className="w-full">
                        <div className="text-center mb-16 flex flex-col items-center">
                            <Subheading text="Slide 3: Gastronomia e Paladar" />
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight">
                                Nossa mesa reflete a história das imigrações
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-card rounded-[2rem] p-8 md:p-10 border border-border hover:border-white/10 transition-colors group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                                        {feature.flag ? (
                                            <img src={feature.flag} alt={`Bandeira ${feature.title}`} className="w-8 h-8 rounded-full object-cover" />
                                        ) : (
                                            <iconify-icon icon={feature.icon} width="28" height="28"></iconify-icon>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-medium tracking-tight mb-4">{feature.title}</h3>
                                    <p className="text-muted font-light text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };

        // Slide 4: Featured Models (Festa Junina)
        const CardHorizontal = ({ name, brand, flag, image, detail }) => (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="min-w-[320px] md:min-w-[400px] w-full md:w-[400px] h-[520px] relative rounded-[2rem] overflow-hidden group shrink-0 snap-center"
            >
                <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
                
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                    <span className="glass-panel px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase flex items-center space-x-2">
                        <img src={flag} alt="Bandeira" className="w-4 h-4 rounded-full object-cover" />
                        <span>{brand}</span>
                    </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col">
                    <h3 className="text-3xl font-medium tracking-tight mb-4">{name}</h3>
                    
                    <div className="glass-panel bg-card/80 rounded-2xl p-6 flex flex-col gap-3 border-none">
                        <p className="text-sm font-light text-white/90 leading-relaxed">
                            {detail}
                        </p>
                    </div>
                </div>
            </motion.div>
        );

        const SlideFestaJunina = () => {
            const cards = [
                { name: "Santos Populares", brand: "Portugal", flag: "https://flagcdn.com/pt.svg", detail: "Os colonizadores trouxeram as celebrações católicas dos santos populares: Santo Antônio, São João e São Pedro.", image: "https://images.unsplash.com/photo-1560002130-9ebf30e6ebf3?q=80&w=800&auto=format&fit=crop" },
                { name: "A Quadrilha", brand: "França", flag: "https://flagcdn.com/fr.svg", detail: "A nossa dança tradicional é uma adaptação das danças de salão francesas (a quadrille), populares na elite da época.", image: "https://images.unsplash.com/photo-1541818292881-807d4c22cc5c?q=80&w=800&auto=format&fit=crop" },
                { name: "Toque Brasileiro", brand: "Brasil", flag: "https://flagcdn.com/br.svg", detail: "Adaptamos tudo com nossas comidas à base de milho (pamonha, canjica), fogueiras e a inconfundível estética caipira.", image: "https://images.unsplash.com/photo-1623075936495-2ba1dcfa21dd?q=80&w=800&auto=format&fit=crop" }
            ];

            return (
                <section data-slide className="py-24 overflow-hidden min-h-screen flex flex-col justify-center">
                    <div className="px-6 md:px-12 max-w-[1440px] mx-auto mb-12 w-full">
                        <div>
                            <Subheading text="Slide 4: Festa Junina" />
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight">
                                Embora pareça 100% brasileira, a festa tem raízes europeias profundas
                            </h2>
                        </div>
                    </div>
                    
                    <div className="flex gap-6 overflow-x-auto hide-scrollbar px-6 md:px-12 pb-12 snap-x snap-mandatory">
                        {cards.map((card, idx) => (
                            <CardHorizontal key={idx} {...card} />
                        ))}
                    </div>
                </section>
            );
        };

        // Slide 5: Ervas Medicinais
        const SlideErvas = () => {
            const points = [
                { name: "China", flag: "https://flagcdn.com/cn.svg", text: "Referência mundial com a Medicina Tradicional Chinesa, focada no equilíbrio energético do corpo através de plantas." },
                { name: "Brasil (Indígena)", flag: "https://flagcdn.com/br.svg", text: "Nossos povos nativos já dominavam amplamente o uso da vasta flora local para curas muito antes da chegada dos europeus." },
                { name: "O Hábito Hoje", icon: "solar:leaf-linear", text: "O costume de 'fazer um chá' para curar males e buscar tratamentos naturais é a perfeita fusão e sobrevivência dessas culturas milenares." }
            ];

            return (
                <section data-slide className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto relative min-h-screen flex flex-col justify-center">
                    <div className="flex flex-col items-center text-center mb-16 relative z-10">
                        <Subheading text="Slide 5: Saberes" />
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">
                            Uso de Ervas Medicinais:<br/>Sabedoria Milenar
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {points.map((point, idx) => (
                            <div key={idx} className="bg-card rounded-[2rem] p-10 border border-border shadow-lg flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-accent mb-6">
                                    {point.flag ? (
                                        <img src={point.flag} alt={`Bandeira ${point.name}`} className="w-10 h-10 rounded-full object-cover" />
                                    ) : (
                                        <iconify-icon icon={point.icon} width="28" height="28"></iconify-icon>
                                    )}
                                </div>
                                <h4 className="font-medium text-xl tracking-tight mb-4">{point.name}</h4>
                                <div className="w-8 h-[1px] bg-border mb-6"></div>
                                <p className="text-sm font-light text-white/80 leading-relaxed">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            );
        };

        // Slide 6: Conclusion
        const SlideConclusao = () => {
            return (
                <section data-slide className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto relative min-h-screen flex items-center justify-center text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10"></div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl"
                    >
                        <div className="flex justify-center mb-6">
                            <Subheading text="Slide 6: Conclusão" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-8">
                            O Brasil é um <span className="text-accent">mosaico cultural.</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
                            Nenhum hábito nasce do nada; nossa identidade é construída através da <strong>adaptação</strong>. Pegamos tradições do mundo inteiro e as deixamos com "jeitinho brasileiro".
                        </p>
                    </motion.div>
                </section>
            );
        };

        // Footer with Navigation Hint
        const Footer = () => (
            <footer className="py-8 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-border flex flex-col md:flex-row items-center justify-between text-xs font-light text-muted bg-background sticky bottom-0 z-50">
                <p>Intercâmbio Cultural © 2026</p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0 glass-panel px-4 py-2 rounded-full text-white/80">
                    <iconify-icon icon="solar:keyboard-linear" width="16" height="16"></iconify-icon>
                    <span>Dica de navegação: Use as setas do teclado (↓ / ↑) para avançar ou voltar.</span>
                </div>
            </footer>
        )

        function App() {
            useEffect(() => {
                const handleKeyDown = (e) => {
                    const slides = Array.from(document.querySelectorAll('[data-slide]'));
                    const currentScroll = window.scrollY;
                    let targetSlide = null;

                    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
                        e.preventDefault();
                        targetSlide = slides.find(slide => slide.offsetTop > currentScroll + 100);
                    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                        e.preventDefault();
                        targetSlide = [...slides].reverse().find(slide => slide.offsetTop < currentScroll - 100);
                    }

                    if (targetSlide) {
                        targetSlide.scrollIntoView({ behavior: 'smooth' });
                    }
                };
                
                window.addEventListener('keydown', handleKeyDown);
                return () => window.removeEventListener('keydown', handleKeyDown);
            }, []);

            return (
                <div className="min-h-screen bg-background flex flex-col">
                    <Hero />
                    <SlideNatal />
                    <SlideGastronomia />
                    <SlideFestaJunina />
                    <SlideErvas />
                    <SlideConclusao />
                    <Footer />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1598284252498-999b7bbe8e90?w=3840&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="" id="root"><div className="min-h-screen bg-background flex flex-col"><div className="p-2 md:p-4 h-[95vh] md:h-[90vh]" data-slide="true"><div className="relative w-full h-full rounded-[2rem] overflow-hidden"><img alt="Abstract Globe Connection" className="absolute inset-0 w-full h-full object-cover scale-105" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2944&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/90"></div><nav className="absolute top-4 inset-x-0 z-50 flex items-center justify-between px-4 md:px-8 w-full max-w-[1440px] mx-auto"><div className="flex items-center space-x-2 cursor-pointer"><span className="tracking-tighter font-medium text-lg uppercase">CULTURA</span></div><div className="hidden md:flex glass-panel rounded-full px-6 py-2.5 items-center space-x-12"><div className="flex items-center space-x-2 cursor-pointer hover:text-white/70 transition-colors text-sm font-light"><span>Tópicos</span><iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></div><div className="text-white/20">|</div><div className="flex items-center space-x-4 text-sm font-light text-white/50">Slide 1 de 6</div></div><div className="glass-panel rounded-full w-10 h-10 flex flex-col justify-center items-center space-y-1 cursor-pointer hover:bg-white/10 transition-colors"><div className="w-4 h-[1px] bg-white rounded-full"></div><div className="w-4 h-[1px] bg-white rounded-full"></div><div className="w-4 h-[1px] bg-white rounded-full"></div></div></nav><div className="absolute top-24 md:top-32 inset-x-0 px-6 md:px-12 flex justify-between items-start text-xs font-light text-white/70 z-10"><div>Brasil, Global</div><div className="text-right max-w-[200px] hidden md:block">Apresentação de<br/>Intercâmbio Cultural</div></div><div className="absolute bottom-0 inset-x-0 p-6 md:p-12 z-20 flex flex-col lg:flex-row justify-between lg:items-end gap-8"><div className="max-w-3xl"><div className="flex items-center space-x-3 mb-4"><div className="w-5 h-1 rounded-full bg-accent"></div><span className="text-accent uppercase text-xs tracking-wider font-normal">Slide 1: Capa</span></div><h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6">Intercâmbio Cultural:<br/>5 Hábitos Estrangeiros no Brasil</h1></div><div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-12 w-full lg:w-auto"><div className="text-lg font-light text-white/80 max-w-sm">Uma viagem pelas tradições que importamos e transformamos.</div></div></div></div></div><section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto min-h-screen flex items-center" data-slide="true"><div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 w-full"><div className="lg:w-1/2"><div className="flex items-center space-x-3 mb-4"><div className="w-5 h-1 rounded-full bg-accent"></div><span className="text-accent uppercase text-xs tracking-wider font-normal">Slide 2: Tradições de Natal</span></div><h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8 max-w-2xl">O Natal brasileiro é uma colagem de costumes de várias nações.</h2><div className="flex items-center space-x-6 border-b border-white/10 pb-8 max-w-md"><p className="text-muted font-light text-sm leading-relaxed">Nenhuma tradição festiva no Brasil demonstra tanto a nossa capacidade de absorver e misturar culturas quanto o Natal, unindo o frio europeu ao nosso clima tropical.</p></div></div><div className="lg:w-1/2 grid grid-cols-2 gap-y-12 gap-x-8"><div className="flex flex-col p-6 rounded-3xl bg-card border border-border"><div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4"><img alt="Bandeira Alemanha" className="w-6 h-6 rounded-full object-cover" src="https://flagcdn.com/de.svg"/></div><span className="text-xl font-medium tracking-tight mb-2">Alemanha</span><span className="text-muted font-light text-sm">Árvore de Natal, esperança e renovação</span></div><div className="flex flex-col p-6 rounded-3xl bg-card border border-border"><div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4"><img alt="Bandeira Reino Unido" className="w-6 h-6 rounded-full object-cover" src="https://flagcdn.com/gb.svg"/></div><span className="text-xl font-medium tracking-tight mb-2">Reino Unido</span><span className="text-muted font-light text-sm">Troca de presentes e cartões</span></div><div className="flex flex-col p-6 rounded-3xl bg-card border border-border"><div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4"><img alt="Bandeira Estados Unidos" className="w-6 h-6 rounded-full object-cover" src="https://flagcdn.com/us.svg"/></div><span className="text-xl font-medium tracking-tight mb-2">Estados Unidos</span><span className="text-muted font-light text-sm">Luzes e a imagem do Papai Noel</span></div><div className="flex flex-col p-6 rounded-3xl bg-card border border-border"><div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-accent mb-4"><img alt="Bandeira Portugal" className="w-6 h-6 rounded-full object-cover" src="https://flagcdn.com/pt.svg"/></div><span className="text-xl font-medium tracking-tight mb-2">Portugal</span><span className="text-muted font-light text-sm">Celebração religiosa base</span></div></div></div></section><section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto relative min-h-screen flex items-center" data-slide="true"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10"></div><div className="w-full"><div className="text-center mb-16 flex flex-col items-center"><div className="flex items-center space-x-3 mb-4"><div className="w-5 h-1 rounded-full bg-accent"></div><span className="text-accent uppercase text-xs tracking-wider font-normal">Slide 3: Gastronomia e Paladar</span></div><h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight">Nossa mesa reflete a história das imigrações</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="bg-card rounded-[2rem] p-8 md:p-10 border border-border hover:border-white/10 transition-colors group"><div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform"><img alt="Bandeira Japão" className="w-8 h-8 rounded-full object-cover" src="https://flagcdn.com/jp.svg"/></div><h3 className="text-xl font-medium tracking-tight mb-4">Japão</h3><p className="text-muted font-light text-sm leading-relaxed">Introduziu o hábito do consumo frequente de peixes crus e frutos do mar, transformando o paladar urbano brasileiro.</p></div><div className="bg-card rounded-[2rem] p-8 md:p-10 border border-border hover:border-white/10 transition-colors group"><div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform"><img alt="Bandeira Portugal" className="w-8 h-8 rounded-full object-cover" src="https://flagcdn.com/pt.svg"/></div><h3 className="text-xl font-medium tracking-tight mb-4">Portugal</h3><p className="text-muted font-light text-sm leading-relaxed">Responsável pela introdução do pão, da doçaria conventual (doces de ovos) e do uso do bacalhau em datas festivas.</p></div><div className="bg-card rounded-[2rem] p-8 md:p-10 border border-border hover:border-white/10 transition-colors group"><div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform"><iconify-icon height="28" icon="solar:earth-linear" width="28"></iconify-icon></div><h3 className="text-xl font-medium tracking-tight mb-4">A Mistura</h3><p className="text-muted font-light text-sm leading-relaxed">A culinária brasileira é uma 'mistura de panelas' onde cada país adicionou um tempero único ao nosso dia a dia.</p></div></div></div></section><section className="py-24 overflow-hidden min-h-screen flex flex-col justify-center" data-slide="true"><div className="px-6 md:px-12 max-w-[1440px] mx-auto mb-12 w-full"><div><div className="flex items-center space-x-3 mb-4"><div className="w-5 h-1 rounded-full bg-accent"></div><span className="text-accent uppercase text-xs tracking-wider font-normal">Slide 4: Festa Junina</span></div><h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-2xl leading-tight">Embora pareça 100% brasileira, a festa tem raízes europeias profundas</h2></div></div><div className="flex gap-6 overflow-x-auto hide-scrollbar px-6 md:px-12 pb-12 snap-x snap-mandatory"><div className="min-w-[320px] md:min-w-[400px] w-full md:w-[400px] h-[520px] relative rounded-[2rem] overflow-hidden group shrink-0 snap-center"><img alt="Santos Populares" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1560002130-9ebf30e6ebf3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div><div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10"><span className="glass-panel px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase flex items-center space-x-2"><img alt="Bandeira" className="w-4 h-4 rounded-full object-cover" src="https://flagcdn.com/pt.svg"/><span>Portugal</span></span></div><div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col"><h3 className="text-3xl font-medium tracking-tight mb-4">Santos Populares</h3><div className="glass-panel bg-card/80 rounded-2xl p-6 flex flex-col gap-3 border-none"><p className="text-sm font-light text-white/90 leading-relaxed">Os colonizadores trouxeram as celebrações católicas dos santos populares: Santo Antônio, São João e São Pedro.</p></div></div></div><div className="min-w-[320px] md:min-w-[400px] w-full md:w-[400px] h-[520px] relative rounded-[2rem] overflow-hidden group shrink-0 snap-center"><img alt="A Quadrilha" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1541818292881-807d4c22cc5c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div><div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10"><span className="glass-panel px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase flex items-center space-x-2"><img alt="Bandeira" className="w-4 h-4 rounded-full object-cover" src="https://flagcdn.com/fr.svg"/><span>França</span></span></div><div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col"><h3 className="text-3xl font-medium tracking-tight mb-4">A Quadrilha</h3><div className="glass-panel bg-card/80 rounded-2xl p-6 flex flex-col gap-3 border-none"><p className="text-sm font-light text-white/90 leading-relaxed">A nossa dança tradicional é uma adaptação das danças de salão francesas (a quadrille), populares na elite da época.</p></div></div></div><div className="min-w-[320px] md:min-w-[400px] w-full md:w-[400px] h-[520px] relative rounded-[2rem] overflow-hidden group shrink-0 snap-center"><img alt="Toque Brasileiro" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1623075936495-2ba1dcfa21dd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/><div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div><div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10"><span className="glass-panel px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase flex items-center space-x-2"><img alt="Bandeira" className="w-4 h-4 rounded-full object-cover" src="https://flagcdn.com/br.svg"/><span>Brasil</span></span></div><div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col"><h3 className="text-3xl font-medium tracking-tight mb-4">Toque Brasileiro</h3><div className="glass-panel bg-card/80 rounded-2xl p-6 flex flex-col gap-3 border-none"><p className="text-sm font-light text-white/90 leading-relaxed">Adaptamos tudo com nossas comidas à base de milho (pamonha, canjica), fogueiras e a inconfundível estética caipira.</p></div></div></div></div></section><section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto relative min-h-screen flex flex-col justify-center" data-slide="true"><div className="flex flex-col items-center text-center mb-16 relative z-10"><div className="flex items-center space-x-3 mb-4"><div className="w-5 h-1 rounded-full bg-accent"></div><span className="text-accent uppercase text-xs tracking-wider font-normal">Slide 5: Saberes</span></div><h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight max-w-2xl">Uso de Ervas Medicinais:<br/>Sabedoria Milenar</h2></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"><div className="bg-card rounded-[2rem] p-10 border border-border shadow-lg flex flex-col items-center text-center"><div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-accent mb-6"><img alt="Bandeira China" className="w-10 h-10 rounded-full object-cover" src="https://flagcdn.com/cn.svg"/></div><h4 className="font-medium text-xl tracking-tight mb-4">China</h4><div className="w-8 h-[1px] bg-border mb-6"></div><p className="text-sm font-light text-white/80 leading-relaxed">Referência mundial com a Medicina Tradicional Chinesa, focada no equilíbrio energético do corpo através de plantas.</p></div><div className="bg-card rounded-[2rem] p-10 border border-border shadow-lg flex flex-col items-center text-center"><div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-accent mb-6"><img alt="Bandeira Brasil (Indígena)" className="w-10 h-10 rounded-full object-cover" src="https://flagcdn.com/br.svg"/></div><h4 className="font-medium text-xl tracking-tight mb-4">Brasil (Indígena)</h4><div className="w-8 h-[1px] bg-border mb-6"></div><p className="text-sm font-light text-white/80 leading-relaxed">Nossos povos nativos já dominavam amplamente o uso da vasta flora local para curas muito antes da chegada dos europeus.</p></div><div className="bg-card rounded-[2rem] p-10 border border-border shadow-lg flex flex-col items-center text-center"><div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center text-accent mb-6"><iconify-icon height="28" icon="solar:leaf-linear" width="28"></iconify-icon></div><h4 className="font-medium text-xl tracking-tight mb-4">O Hábito Hoje</h4><div className="w-8 h-[1px] bg-border mb-6"></div><p className="text-sm font-light text-white/80 leading-relaxed">O costume de 'fazer um chá' para curar males e buscar tratamentos naturais é a perfeita fusão e sobrevivência dessas culturas milenares.</p></div></div></section><section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto relative min-h-screen flex items-center justify-center text-center" data-slide="true"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10"></div><div className="max-w-4xl"><div className="flex justify-center mb-6"><div className="flex items-center space-x-3 mb-4"><div className="w-5 h-1 rounded-full bg-accent"></div><span className="text-accent uppercase text-xs tracking-wider font-normal">Slide 6: Conclusão</span></div></div><h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-8">O Brasil é um <span className="text-accent">mosaico cultural.</span></h2><p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">Nenhum hábito nasce do nada; nossa identidade é construída através da . Pegamos tradições do mundo inteiro e as deixamos com "jeitinho brasileiro".</p></div></section><footer className="py-8 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-border flex flex-col md:flex-row items-center justify-between text-xs font-light text-muted bg-background sticky bottom-0 z-50"><p>Intercâmbio Cultural © 2026</p><div className="flex items-center space-x-4 mt-4 md:mt-0 glass-panel px-4 py-2 rounded-full text-white/80"><iconify-icon height="16" icon="solar:keyboard-linear" width="16"></iconify-icon><span>Dica de navegação: Use as setas do teclado (↓ / ↑) para avançar ou voltar.</span></div></footer></div></div>


    </>
  );
}
