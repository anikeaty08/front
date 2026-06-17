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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      lucide.createIcons();

      document.addEventListener('DOMContentLoaded', () => {

          /* --- Language Toggle Logic --- */
          const langToggle = document.getElementById('lang-toggle');
          const langEn = document.getElementById('lang-en');
          const langDe = document.getElementById('lang-de');

          const elements = {
            nav: {
                platform: document.getElementById('nav-platform'),
                solutions: document.getElementById('nav-solutions'),
                research: document.getElementById('nav-research'),
                company: document.getElementById('nav-company'),
                cta1: document.getElementById('nav-cta-1'),
                cta2: document.getElementById('nav-cta-2')
            },
            hero: {
                h1: document.getElementById('hero-h1'),
                sub: document.getElementById('hero-sub'),
                micro: document.getElementById('hero-micro'),
                cta: document.querySelector('#hero-cta span')
            },
            problem: {
                h2: document.getElementById('problem-h2'),
                intro: document.getElementById('problem-intro'),
                li1: document.getElementById('problem-li-1'),
                li2: document.getElementById('problem-li-2'),
                li3: document.getElementById('problem-li-3'),
                li4: document.getElementById('problem-li-4'),
                closing: document.getElementById('problem-closing')
            },
            authority: {
                h2: document.getElementById('authority-h2'),
                body: document.getElementById('authority-body'),
                micro: document.getElementById('authority-micro')
            },
            ai: {
                h2: document.getElementById('ai-h2'),
                body: document.getElementById('ai-body'),
                highlight: document.getElementById('ai-highlight'),
                clarity: document.getElementById('ai-clarity')
            },
            struct: {
                sub: document.getElementById('struct-sub'),
                h2: document.getElementById('struct-h2'),
                p: document.getElementById('struct-p')
            },
            princ: {
                sub: document.getElementById('princ-sub'),
                h2: document.getElementById('princ-h2'),
                p: document.getElementById('princ-p'),
                t1: document.getElementById('princ-t1'), d1: document.getElementById('princ-d1'),
                t2: document.getElementById('princ-t2'), d2: document.getElementById('princ-d2'),
                t3: document.getElementById('princ-t3'), d3: document.getElementById('princ-d3'),
                t4: document.getElementById('princ-t4'), d4: document.getElementById('princ-d4')
            },
            spec: {
                sub: document.getElementById('spec-sub'),
                h2: document.getElementById('spec-h2'),
                t1: document.getElementById('spec-t1'), d1: document.getElementById('spec-d1'),
                t2: document.getElementById('spec-t2'), d2: document.getElementById('spec-d2'),
                t3: document.getElementById('spec-t3'), d3: document.getElementById('spec-d3')
            },
            stats: {
                h2: document.getElementById('stats-h2'),
                p: document.getElementById('stats-p'),
                l1: document.getElementById('stat-l1'),
                l2: document.getElementById('stat-l2'),
                l3: document.getElementById('stat-l3'),
                l4: document.getElementById('stat-l4')
            },
            impl: {
                sub: document.getElementById('impl-sub'),
                h2: document.getElementById('impl-h2'),
                t1: document.getElementById('impl-t1'), d1: document.getElementById('impl-d1'),
                t2: document.getElementById('impl-t2'), d2: document.getElementById('impl-d2'),
                t3: document.getElementById('impl-t3'), d3: document.getElementById('impl-d3')
            },
            faq: {
                sub: document.getElementById('faq-sub'),
                h2: document.getElementById('faq-h2'),
                q1: document.getElementById('faq-q1'), a1: document.getElementById('faq-a1'),
                q2: document.getElementById('faq-q2'), a2: document.getElementById('faq-a2'),
                q3: document.getElementById('faq-q3'), a3: document.getElementById('faq-a3')
            },
            cta: {
                h2: document.getElementById('cta-h2'),
                b1: document.getElementById('cta-b1'),
                b2: document.getElementById('cta-b2')
            },
            footer: {
                tagline: document.getElementById('footer-tagline')
            }
          };

          let currentLang = 'en';

          const content = {
              en: {
                  nav: { platform: "Platform", solutions: "Solutions", research: "Research", company: "Company", cta: "Get Started" },
                  hero: {
                      h1: "Your digital presence should reduce your workload.",
                      sub: "If it doesn’t, the issue is usually structure — not effort.",
                      micro: "Websites, shops, and systems designed to create order and reliability.",
                      cta: "Digital Presence Check"
                  },
                  problem: {
                      h2: "Where digital presence often starts to break down.",
                      intro: "Many businesses are visible online.\nYet everything still feels heavy, unclear, or fragmented.",
                      li1: "The presence looks solid but feels interchangeable",
                      li2: "Inquiries are inconsistent or misaligned",
                      li3: "Changes require too much effort",
                      li4: "Responsibility is unclear",
                      closing: "The issue is rarely effort — it’s usually structure."
                  },
                  authority: {
                      h2: "Structure creates clarity. Responsibility creates impact.",
                      body: "Digital presence is not a one-time project.\nIt is a system that needs care, evolution,\nand clear responsibility.\n\nThat is exactly what we take on.\n\nNot as an agency.\nNot as a tool.\nBut as a stable structure in the background.",
                      micro: "As digital technologies grow more complex,\nwe keep your online presence clear and controlled."
                  },
                  ai: {
                      h2: "The way people search is fundamentally changing.",
                      body: "For years, search engine optimization was the primary driver of digital visibility. We are now experiencing a structural shift: More and more people search, compare, and decide through AI-generated answers, summaries, and recommendations rather than traditional search results.",
                      highlight: "Visibility is no longer created by rankings alone, but by how a company is understood, categorized, and referenced by AI systems.",
                      clarity: "Classic SEO remains important. But it is no longer sufficient. Future relevance is created where AI systems process, evaluate, and surface information."
                  },
                  struct: {
                      sub: "Visual Core",
                      h2: "Built for <span class='text-neutral-500'>clarity.</span><br />Designed for <span class='text-white'>impact.</span>",
                      p: "Our interface removes the noise, allowing pure data and creativity to merge. A canvas that respects your focus."
                  },
                  princ: {
                      sub: "Core Principles",
                      h2: "Technology that <br />feels <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>alive.</span>",
                      p: "Silent systems that adapt to your workflow. No interruptions. Just continuous, fluid operation.",
                      t1: "Modular Design", d1: "Components are isolated to prevent cascade failure. Replace or upgrade individual modules without downtime.",
                      t2: "Protocol Security", d2: "Strict adherence to defined security protocols. Automatic rejection of non-compliant data packets.",
                      t3: "Passive Monitoring", d3: "Systems observe without interfering. Metrics are gathered silently to inform future optimization.",
                      t4: "Version Control", d4: "Every state change is recorded. Roll back to any previous secure state instantly."
                  },
                  spec: {
                      sub: "Specification",
                      h2: "System Architecture",
                      t1: "Data Integrity", d1: "Verification of every bit. Redundant checksums ensure that the data stored is exactly the data received.",
                      t2: "Access Control", d2: "Granular permission sets. Define exactly who can see what, down to the field level.",
                      t3: "Distributed Ledger", d3: "Immutable records distributed across multiple nodes to prevent single points of failure."
                  },
                  stats: {
                      h2: "Operational Metrics",
                      p: "Consistent performance under load. Measured outcomes.",
                      l1: "Uptime", l2: "Latency", l3: "Encryption", l4: "Nodes"
                  },
                  impl: {
                      sub: "Sequence",
                      h2: "Implementation protocol.",
                      t1: "Connect Sources", d1: "Link existing data repositories via secure API endpoints.",
                      t2: "Define Rules", d2: "Set parameters for data validation and processing logic.",
                      t3: "Deploy", d3: "Activate the system across all nodes."
                  },
                  faq: {
                      sub: "Support",
                      h2: "Inquiries",
                      q1: "Is the system compatible with legacy architecture?", a1: "Yes. We provide adapters for most standard legacy protocols, allowing for gradual migration.",
                      q2: "Where is data stored?", a2: "Data storage can be configured for on-premise, cloud, or hybrid environments depending on compliance needs.",
                      q3: "What is the deployment timeline?", a3: "Standard deployment takes approximately 48 hours after network configuration is complete."
                  },
                  cta: {
                      h2: "System ready.",
                      b1: "Initialize System",
                      b2: "Read Documentation"
                  },
                  footer: { tagline: "Advanced digital infrastructure for the creative web." }
              },
              de: {
                  nav: { platform: "Plattform", solutions: "Lösungen", research: "Forschung", company: "Unternehmen", cta: "Loslegen" },
                  hero: {
                      h1: "Ihre digitale Präsenz sollte Sie entlasten.",
                      sub: "Falls nicht, liegt es meist an der Struktur – nicht am Aufwand.",
                      micro: "Websites, Shops und Systeme, die für Ordnung und Verlässlichkeit sorgen.",
                      cta: "Digital Presence Check"
                  },
                  problem: {
                      h2: "Wo digitale Präsenz oft ins Stocken gerät.",
                      intro: "Viele Unternehmen sind online sichtbar.\nDennoch wirkt alles oft schwerfällig, unklar oder fragmentiert.",
                      li1: "Der Auftritt wirkt solide, aber austauschbar",
                      li2: "Anfragen kommen unregelmäßig oder unpassend",
                      li3: "Änderungen kosten zu viel Zeit und Energie",
                      li4: "Niemand fühlt sich wirklich verantwortlich",
                      closing: "Das Problem ist selten fehlender Einsatz – sondern fehlende Struktur."
                  },
                  authority: {
                      h2: "Struktur schafft Klarheit. Verantwortung schafft Wirkung.",
                      body: "Digitale Präsenz ist kein einmaliges Projekt.\nSie ist ein System, das gepflegt, weiterentwickelt\nund verantwortet werden muss.\n\nGenau das übernehmen wir.\n\nNicht als Agentur.\nNicht als Tool.\nSondern als dauerhafte Struktur im Hintergrund.",
                      micro: "Während digitale Technologien komplexer werden,\nhalten wir Ihren Online-Auftritt klar und kontrolliert."
                  },
                  ai: {
                      h2: "Die Art, wie Menschen suchen, verändert sich grundlegend.",
                      body: "Jahrelang war Suchmaschinenoptimierung der wichtigste Treiber für digitale Sichtbarkeit. Jetzt erleben wir einen strukturellen Wandel: Immer mehr Menschen suchen, vergleichen und entscheiden durch KI-generierte Antworten und Empfehlungen statt durch klassische Suchergebnisse.",
                      highlight: "Sichtbarkeit entsteht nicht mehr allein durch Rankings, sondern dadurch, wie ein Unternehmen von KI-Systemen verstanden und referenziert wird.",
                      clarity: "Klassisches SEO bleibt wichtig, reicht aber nicht mehr aus. Zukünftige Relevanz entsteht dort, wo KI-Systeme Informationen verarbeiten und ausgeben."
                  },
                  struct: {
                      sub: "Visueller Kern",
                      h2: "Gebaut für <span class='text-neutral-500'>Klarheit.</span><br />Designt für <span class='text-white'>Wirkung.</span>",
                      p: "Unser Interface entfernt das Rauschen und lässt Daten und Kreativität verschmelzen. Eine Leinwand, die Ihren Fokus respektiert."
                  },
                  princ: {
                      sub: "Kernprinzipien",
                      h2: "Technologie, die sich <br /><span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>lebendig</span> anfühlt.",
                      p: "Stille Systeme, die sich Ihrem Workflow anpassen. Keine Unterbrechungen. Nur kontinuierlicher, flüssiger Betrieb.",
                      t1: "Modulares Design", d1: "Komponenten sind isoliert, um Kaskadeneffekte zu verhindern. Austausch ohne Ausfallzeiten.",
                      t2: "Protokoll-Sicherheit", d2: "Strikte Einhaltung von Sicherheitsprotokollen. Automatische Ablehnung nicht-konformer Daten.",
                      t3: "Passives Monitoring", d3: "Systeme beobachten ohne zu stören. Metriken werden lautlos gesammelt.",
                      t4: "Versionskontrolle", d4: "Jede Statusänderung wird aufgezeichnet. Sofortiges Rollback zu jedem sicheren Status."
                  },
                  spec: {
                      sub: "Spezifikation",
                      h2: "Systemarchitektur",
                      t1: "Datenintegrität", d1: "Verifizierung jedes Bits. Redundante Prüfsummen garantieren Datenechtheit.",
                      t2: "Zugriffskontrolle", d2: "Granulare Berechtigungen. Definieren Sie exakt, wer was sehen darf.",
                      t3: "Verteiltes Register", d3: "Unveränderliche Datensätze über mehrere Knoten verteilt zur Ausfallsicherheit."
                  },
                  stats: {
                      h2: "Betriebsmetriken",
                      p: "Konsistente Leistung unter Last. Messbare Ergebnisse.",
                      l1: "Verfügbarkeit", l2: "Latenz", l3: "Verschlüsselung", l4: "Knoten"
                  },
                  impl: {
                      sub: "Sequenz",
                      h2: "Implementierungsprotokoll.",
                      t1: "Quellen verbinden", d1: "Verknüpfung bestehender Daten über sichere API-Endpunkte.",
                      t2: "Regeln definieren", d2: "Parameter für Validierung und Verarbeitungslogik setzen.",
                      t3: "Bereitstellen", d3: "Aktivierung des Systems auf allen Knoten."
                  },
                  faq: {
                      sub: "Support",
                      h2: "Anfragen",
                      q1: "Ist das System mit Legacy-Architektur kompatibel?", a1: "Ja. Wir bieten Adapter für die meisten Standardprotokolle für eine schrittweise Migration.",
                      q2: "Wo werden Daten gespeichert?", a2: "Die Speicherung kann je nach Compliance-Bedarf On-Premise, in der Cloud oder hybrid erfolgen.",
                      q3: "Wie ist der Zeitrahmen für die Bereitstellung?", a3: "Die Standardbereitstellung dauert ca. 48 Stunden nach Abschluss der Netzwerkkonfiguration."
                  },
                  cta: {
                      h2: "System bereit.",
                      b1: "System initialisieren",
                      b2: "Dokumentation lesen"
                  },
                  footer: { tagline: "Fortschrittliche digitale Infrastruktur für das kreative Web." }
              }
          };

          const updateText = (element, text) => {
             if(element) element.innerHTML = text;
          };

          langToggle.addEventListener('click', () => {
              currentLang = currentLang === 'en' ? 'de' : 'en';
              const c = content[currentLang];

              // Update Toggle UI
              if(currentLang === 'de') {
                  langDe.classList.remove('opacity-50');
                  langDe.classList.add('opacity-100', 'text-white');
                  langEn.classList.add('opacity-50');
                  langEn.classList.remove('opacity-100', 'text-white');
              } else {
                  langEn.classList.remove('opacity-50');
                  langEn.classList.add('opacity-100', 'text-white');
                  langDe.classList.add('opacity-50');
                  langDe.classList.remove('opacity-100', 'text-white');
              }

              // Update Content
              updateText(elements.nav.platform, c.nav.platform);
              updateText(elements.nav.solutions, c.nav.solutions);
              updateText(elements.nav.research, c.nav.research);
              updateText(elements.nav.company, c.nav.company);
              updateText(elements.nav.cta1, c.nav.cta);
              updateText(elements.nav.cta2, c.nav.cta);

              updateText(elements.hero.h1, c.hero.h1);
              updateText(elements.hero.sub, c.hero.sub);
              updateText(elements.hero.micro, c.hero.micro);
              updateText(elements.hero.cta, c.hero.cta);

              updateText(elements.problem.h2, c.problem.h2);
              updateText(elements.problem.intro, c.problem.intro);
              updateText(elements.problem.li1, c.problem.li1);
              updateText(elements.problem.li2, c.problem.li2);
              updateText(elements.problem.li3, c.problem.li3);
              updateText(elements.problem.li4, c.problem.li4);
              updateText(elements.problem.closing, c.problem.closing);

              updateText(elements.authority.h2, c.authority.h2);
              updateText(elements.authority.body, c.authority.body);
              updateText(elements.authority.micro, c.authority.micro);

              updateText(elements.ai.h2, c.ai.h2);
              updateText(elements.ai.body, c.ai.body);
              updateText(elements.ai.highlight, c.ai.highlight);
              updateText(elements.ai.clarity, c.ai.clarity);

              updateText(elements.struct.sub, c.struct.sub);
              updateText(elements.struct.h2, c.struct.h2);
              updateText(elements.struct.p, c.struct.p);

              updateText(elements.princ.sub, c.princ.sub);
              updateText(elements.princ.h2, c.princ.h2);
              updateText(elements.princ.p, c.princ.p);
              updateText(elements.princ.t1, c.princ.t1); updateText(elements.princ.d1, c.princ.d1);
              updateText(elements.princ.t2, c.princ.t2); updateText(elements.princ.d2, c.princ.d2);
              updateText(elements.princ.t3, c.princ.t3); updateText(elements.princ.d3, c.princ.d3);
              updateText(elements.princ.t4, c.princ.t4); updateText(elements.princ.d4, c.princ.d4);

              updateText(elements.spec.sub, c.spec.sub);
              updateText(elements.spec.h2, c.spec.h2);
              updateText(elements.spec.t1, c.spec.t1); updateText(elements.spec.d1, c.spec.d1);
              updateText(elements.spec.t2, c.spec.t2); updateText(elements.spec.d2, c.spec.d2);
              updateText(elements.spec.t3, c.spec.t3); updateText(elements.spec.d3, c.spec.d3);

              updateText(elements.stats.h2, c.stats.h2);
              updateText(elements.stats.p, c.stats.p);
              updateText(elements.stats.l1, c.stats.l1);
              updateText(elements.stats.l2, c.stats.l2);
              updateText(elements.stats.l3, c.stats.l3);
              updateText(elements.stats.l4, c.stats.l4);

              updateText(elements.impl.sub, c.impl.sub);
              updateText(elements.impl.h2, c.impl.h2);
              updateText(elements.impl.t1, c.impl.t1); updateText(elements.impl.d1, c.impl.d1);
              updateText(elements.impl.t2, c.impl.t2); updateText(elements.impl.d2, c.impl.d2);
              updateText(elements.impl.t3, c.impl.t3); updateText(elements.impl.d3, c.impl.d3);

              updateText(elements.faq.sub, c.faq.sub);
              updateText(elements.faq.h2, c.faq.h2);
              updateText(elements.faq.q1, c.faq.q1); updateText(elements.faq.a1, c.faq.a1);
              updateText(elements.faq.q2, c.faq.q2); updateText(elements.faq.a2, c.faq.a2);
              updateText(elements.faq.q3, c.faq.q3); updateText(elements.faq.a3, c.faq.a3);

              updateText(elements.cta.h2, c.cta.h2);
              updateText(elements.cta.b1, c.cta.b1);
              updateText(elements.cta.b2, c.cta.b2);

              updateText(elements.footer.tagline, c.footer.tagline);
          });


          /* --- Animation & Effects Logic --- */
          const processTextElement = (el) => {
              if (el.classList.contains('tech-processed') || !el.textContent.trim()) return;
              const isHeading = ['H1', 'H2', 'H3'].includes(el.tagName);
              const text = el.innerText;

              if (el.children.length > 0 && !['SPAN', 'STRONG', 'B'].includes(el.children[0].tagName)) return;

              el.classList.add('tech-content', 'tech-processed');
              el.innerHTML = '';

              if (isHeading) {
                  const chars = text.split('');
                  chars.forEach((char, index) => {
                      const span = document.createElement('span');
                      span.textContent = char;
                      span.className = 'tech-char';
                      if (char === ' ') span.innerHTML = '&nbsp;';
                      span.style.setProperty('--tech-index', index);
                      el.appendChild(span);
                  });
              } else {
                  const words = text.split(/(\s+)/);
                  let wordIndex = 0;
                  words.forEach((word) => {
                      if (word.trim().length === 0) {
                          el.appendChild(document.createTextNode(word));
                      } else {
                          const span = document.createElement('span');
                          span.textContent = word;
                          span.className = 'tech-word';
                          span.style.setProperty('--tech-index', wordIndex);
                          el.appendChild(span);
                          wordIndex++;
                      }
                  });
              }
          };

          const selectors = [
              'h1', 'h2', 'h3', 'p', 'li', 'span.tech-observe', 'label', 'a.tech-observe', 'button .tech-observe', '#authority-body'
          ];

          document.querySelectorAll(selectors.join(',')).forEach(el => {
              if(el.offsetParent === null) return;
              processTextElement(el);
          });

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('tech-active');
                      observer.unobserve(entry.target);
                  }
              });
          }, {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
          });

          document.querySelectorAll('.tech-content, .tech-observe').forEach(el => {
              observer.observe(el);
          });

          // Counter
          const counterObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const el = entry.target;
                      const target = parseFloat(el.getAttribute('data-target'));
                      if(el.classList.contains('animated')) return;
                      el.classList.add('animated');

                      const duration = 2000;
                      const start = 0;
                      const startTime = performance.now();

                      const animate = (currentTime) => {
                          const elapsed = currentTime - startTime;
                          const progress = Math.min(elapsed / duration, 1);
                          const ease = 1 - Math.pow(1 - progress, 4);
                          const current = (start + (target - start) * ease).toFixed(target % 1 === 0 ? 0 : 1);
                          el.innerText = current;

                          if (progress < 1) {
                              requestAnimationFrame(animate);
                          } else {
                              el.innerText = target;
                          }
                      };
                      requestAnimationFrame(animate);
                      observer.unobserve(el);
                  }
              });
          }, { threshold: 0.5 });

          document.querySelectorAll('.counter-item').forEach(el => {
              counterObserver.observe(el);
          });
      });

      // Parallax
      let ticking = false;
      window.addEventListener('scroll', function() {
          if (!ticking) {
              window.requestAnimationFrame(function() {
                  const scrolled = window.scrollY;
                  document.querySelectorAll('.parallax-effect').forEach(el => {
                      const speed = el.getAttribute('data-parallax-speed') || 0.05;
                      const rect = el.getBoundingClientRect();
                      if (rect.top < window.innerHeight && rect.bottom > 0) {
                           el.style.transform = `translateY(${scrolled * speed}px)`;
                      }
                  });
                  ticking = false;
              });
              ticking = true;
          }
      });

      // Accordion
      document.querySelectorAll('.accordion-btn').forEach(button => {
          button.addEventListener('click', () => {
              const content = button.nextElementSibling;
              const icon = button.querySelector('svg');

              if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                  content.style.maxHeight = '0px';
                  content.style.opacity = '0';
                  content.classList.remove('open');
                  if(icon) icon.style.transform = 'rotate(0deg)';
              } else {
                  content.style.maxHeight = content.scrollHeight + "px";
                  content.style.opacity = '1';
                  content.classList.add('open');
                   if(icon) icon.style.transform = 'rotate(45deg)';
              }
          });
      });
    
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
      

<div className="fixed top-0 w-full h-screen saturate-[1.6] brightness-[0.85] contrast-[1.2]" data-alpha-mask="0" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-purple-900/20 to-transparent mix-blend-screen z-0 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.15),transparent_70%)] z-0 pointer-events-none"></div>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10 opacity-60 mix-blend-hard-light" data-us-project="krvLrHX3sj3cg8BHywDj"></div>

</div>
</div>

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
</div>

<div className="fixed inset-0 pointer-events-none opacity-[0.15] z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMiLz4KPC9zdmc+')]"></div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5 transition-all duration-500" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 relative flex items-center justify-center">
<div className="absolute w-2 h-2 rounded-full bg-cyan-400 top-0 left-0 blur-[1px]"></div>
<div className="absolute w-2 h-2 rounded-full bg-purple-500 bottom-0 right-0 blur-[1px]"></div>
<div className="absolute w-full h-full rounded-full border border-white/20 scale-75"></div>
</div>
<span className="tech-observe text-xl font-semibold tracking-tight text-white hover-target">
            nexusynth
          </span>
</div>
<div className="hidden md:flex items-center gap-10 text-xs font-medium text-neutral-400">
<a className="tech-observe hover:text-cyan-400 transition-colors hover-target" href="#" id="nav-platform">
            Platform
          </a>
<a className="tech-observe hover:text-cyan-400 transition-colors hover-target" href="#" id="nav-solutions">
            Solutions
          </a>
<a className="tech-observe hover:text-cyan-400 transition-colors hover-target" href="#" id="nav-research">
            Research
          </a>
<a className="tech-observe hover:text-cyan-400 transition-colors hover-target" href="#" id="nav-company">
            Company
          </a>
</div>
<div className="flex items-center gap-8">

<button aria-label="Switch Language" className="group flex items-center text-[10px] font-bold tracking-widest text-neutral-500 hover:text-white transition-colors uppercase outline-none" id="lang-toggle">
<span className="transition-opacity opacity-50 group-hover:opacity-100" id="lang-de">
              DE
            </span>
<span className="mx-1.5 text-neutral-700 opacity-50">|</span>
<span className="transition-opacity opacity-100 text-white" id="lang-en">
              EN
            </span>
</button>
<a className="tech-observe relative group overflow-hidden bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_20px_-5px_rgba(34,211,238,0.5)]" href="#">
<span className="relative z-10" id="nav-cta-1">Get Started</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-semibold" id="nav-cta-2">
              Get Started
            </span>
</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
<div className="section-number top-32 right-6 md:right-12 opacity-50">01</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">

<div className="lg:w-8/12 parallax-effect" data-parallax-speed="0.05">

<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-8 text-white tech-observe hover-target max-w-4xl" id="hero-h1">
              Your digital presence should reduce your workload.
            </h1>

<p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl leading-relaxed tech-observe font-light" id="hero-sub">
              If it doesn’t, the issue is usually structure — not effort.
            </p>

<p className="text-sm text-neutral-500 mb-12 max-w-xl leading-relaxed tech-observe font-normal tracking-wide opacity-80" id="hero-micro">
              Websites, shops, and systems designed to create order and
              reliability.
            </p>

<div className="opacity-0 animate-[revealTech_0.8s_1s_forwards] blur-sm filter" style={{animationFillMode: 'forwards'}}>
<button className="bg-white text-black hover:bg-neutral-200 px-8 py-4 font-semibold rounded-full transition-all flex items-center justify-center gap-2 text-sm hover-target hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] tracking-wide" id="hero-cta">
<span className="tech-observe">Digital Presence Check</span>
</button>
</div>
</div>

<div className="lg:w-3/12 flex flex-col gap-12 border-l border-white/10 pl-8 lg:pl-12 py-4 parallax-effect" data-parallax-speed="0.02">
<div className="space-y-10">
<div className="tech-observe group cursor-default">
<h3 className="text-cyan-400 text-xs font-semibold mb-3 uppercase tracking-widest mono-font group-hover:text-purple-400 transition-colors">
                  Clarity
                </h3>
<p className="text-neutral-500 text-xs leading-relaxed group-hover:text-white transition-colors">
                  Clean code, clear systems, calm operations.
                </p>
</div>
</div>
<div className="flex items-center gap-8 opacity-60 transition-all duration-500 tech-observe animate-float">
<i className="w-5 h-5 text-neutral-400" data-lucide="zap"></i>
<i className="w-5 h-5 text-neutral-400" data-lucide="workflow"></i>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 border-t border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start parallax-effect" data-parallax-speed="0.03">
<div className="space-y-12">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white tech-observe" id="problem-h2">
              Where digital presence often starts to break down.
            </h2>
<div className="space-y-8">
<p className="text-xl text-neutral-400 leading-relaxed font-light tech-observe max-w-xl" id="problem-intro">
                Many businesses are visible online. Yet everything still feels
                heavy, unclear, or fragmented.
              </p>
<p className="text-white font-medium text-lg tech-observe opacity-90" id="problem-closing">
                The issue is rarely effort — it’s usually structure.
              </p>
</div>
</div>
<div className="fade-up-block tech-observe pt-2 lg:pt-4">
<ul className="flex flex-col gap-8">
<li className="text-neutral-300 font-light text-xl tracking-wide opacity-80" id="problem-li-1">
                The presence looks solid but feels interchangeable
              </li>
<li className="text-neutral-300 font-light text-xl tracking-wide opacity-80" id="problem-li-2">
                Inquiries are inconsistent or misaligned
              </li>
<li className="text-neutral-300 font-light text-xl tracking-wide opacity-80" id="problem-li-3">
                Changes require too much effort
              </li>
<li className="text-neutral-300 font-light text-xl tracking-wide opacity-80" id="problem-li-4">
                Responsibility is unclear
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-32 border-t border-white/5 overflow-hidden">
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<div className="parallax-effect space-y-12" data-parallax-speed="0.03">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-white tech-observe" id="authority-h2">
            Structure creates clarity. Responsibility creates impact.
          </h2>
<div className="text-lg text-neutral-400 leading-relaxed font-light tech-observe whitespace-pre-line" id="authority-body">
            Digital presence is not a one-time project. It is a system that
            needs care, evolution, and clear responsibility. That is exactly
            what we take on. Not as an agency. Not as a tool. But as a stable
            structure in the background.
          </div>
<p className="text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed tech-observe font-normal tracking-wide opacity-80" id="authority-micro">
            As digital technologies grow more complex, we keep your online
            presence clear and controlled.
          </p>
</div>
</div>
</section>
<section className="relative py-32 border-t border-white/5 overflow-hidden">
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<div className="parallax-effect space-y-12" data-parallax-speed="0.03">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-white tech-observe" id="ai-h2">
            The way people search is fundamentally changing.
          </h2>
<div className="text-lg text-neutral-400 leading-relaxed font-light tech-observe whitespace-pre-line" id="ai-body">
            For years, search engine optimization was the primary driver of
            digital visibility. We are now experiencing a structural shift: More
            and more people search, compare, and decide through AI-generated
            answers, summaries, and recommendations rather than traditional
            search results.
          </div>
<div className="py-8">
<p className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tech-observe max-w-2xl mx-auto leading-relaxed" id="ai-highlight">
              Visibility is no longer created by rankings alone, but by how a
              company is understood, categorized, and referenced by AI systems.
            </p>
</div>
<p className="text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed tech-observe font-normal tracking-wide opacity-80 whitespace-pre-line" id="ai-clarity">
            Classic SEO remains important. But it is no longer sufficient.
            Future relevance is created where AI systems process, evaluate, and
            surface information.
          </p>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950/40 relative border-t border-white/5 overflow-hidden backdrop-blur-sm">
<div className="section-number top-12 left-6 md:left-12 opacity-30">02</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 mb-20 parallax-effect" data-parallax-speed="0.03">
<div>
<span className="tech-observe text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold text-xs tracking-widest uppercase mb-6 block mono-font" id="struct-sub">
              Visual Core
            </span>
<h2 className="tech-observe hover-target text-4xl lg:text-5xl font-semibold tracking-tight mb-8 leading-tight text-white" id="struct-h2">
              Built for
              <span className="text-neutral-500">clarity.</span>
<br/>
              Designed for
              <span className="text-white">impact.</span>
</h2>
<p className="tech-observe text-base text-neutral-400 leading-relaxed max-w-md font-light" id="struct-p">
              Our interface removes the noise, allowing pure data and creativity
              to merge. A canvas that respects your focus.
            </p>
</div>
</div>
<div className="fade-up-block tech-observe relative w-full aspect-[16/9] lg:aspect-[21/9] bg-[#080808] border border-white/10 rounded-xl overflow-hidden group shadow-2xl shadow-purple-900/10">

<div className="absolute inset-0 p-8 flex flex-col bg-gradient-to-br from-white/5 to-transparent">

<div className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
<div className="flex gap-3">
<div className="h-2 w-2 bg-red-500/50 rounded-full"></div>
<div className="h-2 w-2 bg-yellow-500/50 rounded-full"></div>
<div className="h-2 w-2 bg-green-500/50 rounded-full"></div>
</div>
<div className="flex gap-2 items-center px-4 py-1 bg-white/5 rounded-full border border-white/5">
<i className="w-3 h-3 text-neutral-500" data-lucide="lock"></i>
<span className="text-[10px] text-neutral-400 font-mono">
                  nexusynth.io/secure
                </span>
</div>
</div>

<div className="flex flex-1 gap-8">

<div className="w-12 lg:w-48 hidden md:flex flex-col gap-4 border-r border-white/5 pr-8">
<div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5">
<div className="w-4 h-4 rounded bg-cyan-500/50"></div>
<div className="h-1.5 w-16 bg-neutral-700 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-2">
<div className="w-4 h-4 rounded border border-white/20"></div>
<div className="h-1.5 w-12 bg-neutral-800 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-2">
<div className="w-4 h-4 rounded border border-white/20"></div>
<div className="h-1.5 w-14 bg-neutral-800 rounded-full"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-8 relative">

<div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full"></div>
<div className="grid grid-cols-3 gap-6">
<div className="h-32 bg-black/40 border border-white/10 rounded-lg p-5 relative overflow-hidden group/card">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<div className="h-2 w-8 bg-cyan-500 rounded-full mb-4"></div>
<div className="h-1.5 w-16 bg-neutral-800 rounded-full"></div>
</div>
<div className="h-32 bg-black/40 border border-white/10 rounded-lg p-5 relative overflow-hidden group/card">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
<div className="h-2 w-8 bg-purple-500 rounded-full mb-4"></div>
<div className="h-1.5 w-16 bg-neutral-800 rounded-full"></div>
</div>
<div className="h-32 bg-black/40 border border-white/10 rounded-lg p-5 relative overflow-hidden group/card">
<div className="h-2 w-8 bg-neutral-700 rounded-full mb-4"></div>
<div className="h-1.5 w-16 bg-neutral-800 rounded-full"></div>
</div>
</div>

<div className="flex-1 border border-white/5 rounded-lg relative overflow-hidden bg-black/20">
<svg className="absolute bottom-0 left-0 right-0 h-full w-full" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M0,150 C200,150 200,80 400,100 C600,120 600,40 800,60 C1000,80 1000,20 1200,40" fill="none" stroke="url(#chartGradient)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0,150 C200,150 200,80 400,100 C600,120 600,40 800,60 C1000,80 1000,20 1200,40 V200 H0 Z" fill="url(#chartGradient)" opacity="0.1"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="section-number top-24 right-6 md:right-12 opacity-30">03</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24 parallax-effect" data-parallax-speed="0.04">
<span className="tech-observe text-purple-400 font-semibold text-xs tracking-widest uppercase mb-6 block mono-font" id="princ-sub">
            Core Principles
          </span>
<h2 className="tech-observe hover-target text-4xl lg:text-5xl font-semibold tracking-tight mb-8 text-white" id="princ-h2">
            Technology that
            <br/>
            feels
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              alive.
            </span>
</h2>
<p className="tech-observe text-base text-neutral-400 max-w-xl mx-auto leading-relaxed font-light" id="princ-p">
            Silent systems that adapt to your workflow. No interruptions. Just
            continuous, fluid operation.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6 relative">

<div className="fade-up-block tech-observe group relative bg-neutral-900/40 backdrop-blur-sm border border-white/10 p-10 lg:p-12 hover:border-cyan-500/30 transition-all duration-500 rounded-2xl overflow-hidden hover:bg-neutral-900/60">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-8 right-8 text-5xl font-bold text-white/5 leading-none select-none mono-font">
              01
            </div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium mb-4 text-white hover-target" id="princ-t1">
                Modular Design
              </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors" id="princ-d1">
                Components are isolated to prevent cascade failure. Replace or
                upgrade individual modules without downtime.
              </p>
</div>
</div>

<div className="fade-up-block tech-observe group relative bg-neutral-900/40 backdrop-blur-sm border border-white/10 p-10 lg:p-12 hover:border-purple-500/30 transition-all duration-500 rounded-2xl overflow-hidden hover:bg-neutral-900/60">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-8 right-8 text-5xl font-bold text-white/5 leading-none select-none mono-font">
              02
            </div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 text-purple-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-purple-500/10 group-hover:border-purple-500/30">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-medium mb-4 text-white hover-target" id="princ-t2">
                Protocol Security
              </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors" id="princ-d2">
                Strict adherence to defined security protocols. Automatic
                rejection of non-compliant data packets.
              </p>
</div>
</div>

<div className="fade-up-block tech-observe group relative bg-neutral-900/40 backdrop-blur-sm border border-white/10 p-10 lg:p-12 hover:border-pink-500/30 transition-all duration-500 rounded-2xl overflow-hidden hover:bg-neutral-900/60">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-8 right-8 text-5xl font-bold text-white/5 leading-none select-none mono-font">
              03
            </div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 text-pink-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-pink-500/10 group-hover:border-pink-500/30">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium mb-4 text-white hover-target" id="princ-t3">
                Passive Monitoring
              </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors" id="princ-d3">
                Systems observe without interfering. Metrics are gathered
                silently to inform future optimization.
              </p>
</div>
</div>

<div className="fade-up-block tech-observe group relative bg-neutral-900/40 backdrop-blur-sm border border-white/10 p-10 lg:p-12 hover:border-indigo-500/30 transition-all duration-500 rounded-2xl overflow-hidden hover:bg-neutral-900/60">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-8 right-8 text-5xl font-bold text-white/5 leading-none select-none mono-font">
              04
            </div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-8 text-indigo-400 group-hover:scale-110 transition-transform duration-500 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="git-branch"></i>
</div>
<h3 className="text-xl font-medium mb-4 text-white hover-target" id="princ-t4">
                Version Control
              </h3>
<p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors" id="princ-d4">
                Every state change is recorded. Roll back to any previous secure
                state instantly.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative bg-gradient-to-b from-black to-neutral-950">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<span className="tech-observe text-cyan-500 font-semibold text-xs tracking-widest uppercase mb-6 block mono-font" id="spec-sub">
          Specification
        </span>
<h2 className="tech-observe hover-target text-3xl lg:text-4xl font-semibold tracking-tight mb-20 text-white" id="spec-h2">
          System Architecture
        </h2>
<div className="grid lg:grid-cols-2 gap-20 items-start">
<div className="space-y-4">

<div className="border-b border-cyan-500/30 pb-6 tech-observe bg-white/[0.02] p-6 rounded-lg border border-white/5">
<button className="flex items-center justify-between w-full text-left group">
<span className="text-lg font-medium text-cyan-400" id="spec-t1">
                  Data Integrity
                </span>
<div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
</button>
<div className="accordion-content open h-auto opacity-100">
<p className="mt-4 text-base text-neutral-400 leading-relaxed font-light" id="spec-d1">
                  Verification of every bit. Redundant checksums ensure that the
                  data stored is exactly the data received.
                </p>
</div>
</div>

<div className="border-b border-white/5 pb-6 pt-4 tech-observe px-6">
<button className="accordion-btn flex items-center justify-between w-full text-left group hover:text-white transition-colors">
<span className="text-lg font-medium text-neutral-400 group-hover:text-white transition-colors hover-target" id="spec-t2">
                  Access Control
                </span>
</button>
<div className="accordion-content">
<p className="mt-4 text-base text-neutral-500 leading-relaxed font-light" id="spec-d2">
                  Granular permission sets. Define exactly who can see what,
                  down to the field level.
                </p>
</div>
</div>
<div className="border-b border-white/5 pb-6 pt-4 tech-observe px-6">
<button className="accordion-btn flex items-center justify-between w-full text-left group hover:text-white transition-colors">
<span className="text-lg font-medium text-neutral-400 group-hover:text-white transition-colors hover-target" id="spec-t3">
                  Distributed Ledger
                </span>
</button>
<div className="accordion-content">
<p className="mt-4 text-base text-neutral-500 leading-relaxed font-light" id="spec-d3">
                  Immutable records distributed across multiple nodes to prevent
                  single points of failure.
                </p>
</div>
</div>
</div>

<div className="fade-up-block tech-observe relative h-[450px] w-full bg-[#050505] border border-white/10 rounded-2xl flex items-center justify-center animate-float overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-cyan-900/10 via-purple-900/10 to-transparent blur-3xl opacity-40"></div>
<div className="relative z-10 w-full h-full flex flex-col items-center justify-center parallax-effect" data-parallax-speed="0.06">
<div className="w-72 h-72 relative border border-white/5 rounded-full flex items-center justify-center">
<div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-2 border border-dotted border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="w-40 h-40 bg-gradient-to-b from-white/5 to-transparent rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
<div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-[10px] text-cyan-400 font-mono tracking-widest tech-observe animate-pulse">
                  STATUS: OPTIMAL
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#030303] relative overflow-hidden">
<div className="section-number top-12 left-6 md:left-12 opacity-30">04</div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="tech-observe hover-target text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white" id="stats-h2">
          Operational Metrics
        </h2>
<p className="tech-observe text-neutral-500 mb-16 text-base max-w-xl mx-auto font-light" id="stats-p">
          Consistent performance under load. Measured outcomes.
        </p>
<div className="fade-up-block tech-observe border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-xl p-10 mb-12 shadow-2xl">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:divide-x divide-white/5">
<div className="text-center group">
<div className="text-3xl font-bold text-white mb-2 tabular-nums mono-font group-hover:text-cyan-400 transition-colors">
<span className="counter-item" data-target="99.9">0</span>
                %
              </div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest" id="stat-l1">
                Uptime
              </div>
</div>
<div className="text-center group">
<div className="text-3xl font-bold text-white mb-2 tabular-nums mono-font group-hover:text-purple-400 transition-colors">
<span className="counter-item" data-target="12">0</span>
                ms
              </div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest" id="stat-l2">
                Latency
              </div>
</div>
<div className="text-center group">
<div className="text-3xl font-bold text-white mb-2 tabular-nums mono-font group-hover:text-pink-400 transition-colors">
<span className="counter-item" data-target="256">0</span>
</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest" id="stat-l3">
                Encryption
              </div>
</div>
<div className="text-center group">
<div className="text-3xl font-bold text-white mb-2 tabular-nums mono-font group-hover:text-indigo-400 transition-colors">
<span className="counter-item" data-target="100">0</span>
                +
              </div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest" id="stat-l4">
                Nodes
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<span className="tech-observe text-purple-500 font-semibold text-xs tracking-widest uppercase mb-6 block mono-font" id="impl-sub">
          Sequence
        </span>
<h2 className="tech-observe hover-target text-3xl md:text-4xl font-semibold tracking-tight mb-20 max-w-xl text-white" id="impl-h2">
          Implementation protocol.
        </h2>
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="tech-observe">
<div className="flex flex-col gap-0 border-l border-white/10 pl-8 ml-3">
<div className="relative pb-16 group">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-black border border-cyan-500 shadow-[0_0_10px_#22d3ee]"></div>
<div className="absolute -left-[32px] top-6 w-[2px] h-[calc(100%-20px)] bg-gradient-to-b from-cyan-500 to-purple-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors" id="impl-t1">
                  Connect Sources
                </h3>
<p className="text-neutral-500 text-sm font-light" id="impl-d1">
                  Link existing data repositories via secure API endpoints.
                </p>
</div>
<div className="relative pb-16 group">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-black border border-purple-500 group-hover:shadow-[0_0_10px_#a855f7] transition-shadow"></div>
<div className="absolute -left-[32px] top-6 w-[2px] h-[calc(100%-20px)] bg-gradient-to-b from-purple-500 to-indigo-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-lg font-medium text-neutral-400 mb-2 group-hover:text-purple-400 transition-colors" id="impl-t2">
                  Define Rules
                </h3>
<p className="text-neutral-600 text-sm font-light" id="impl-d2">
                  Set parameters for data validation and processing logic.
                </p>
</div>
<div className="relative group">
<div className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-black border border-indigo-500 group-hover:shadow-[0_0_10px_#6366f1] transition-shadow"></div>
<h3 className="text-lg font-medium text-neutral-400 mb-2 group-hover:text-indigo-400 transition-colors" id="impl-t3">
                  Deploy
                </h3>
<p className="text-neutral-600 text-sm font-light" id="impl-d3">
                  Activate the system across all nodes.
                </p>
</div>
</div>
</div>
<div className="fade-up-block relative tech-observe">
<div className="aspect-video bg-[#080808] border border-white/10 rounded-2xl relative flex items-center justify-center group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 opacity-50"></div>
<div className="relative z-10 flex gap-8">
<div className="w-24 h-24 border border-white/10 rounded-xl flex items-center justify-center bg-black/40 backdrop-blur-sm">
<i className="w-8 h-8 text-neutral-500 stroke-[1]" data-lucide="database"></i>
</div>
<div className="w-24 h-24 flex items-center justify-center animate-pulse">
<i className="w-8 h-8 text-white stroke-[1]" data-lucide="arrow-right"></i>
</div>
<div className="w-24 h-24 border border-cyan-500/30 rounded-xl flex items-center justify-center bg-cyan-900/10 backdrop-blur-sm shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]">
<i className="w-8 h-8 text-cyan-400 stroke-[1]" data-lucide="server"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="tech-observe text-indigo-500 font-semibold text-xs tracking-widest uppercase mb-6 block mono-font" id="faq-sub">
              Support
            </span>
<h2 className="tech-observe hover-target text-3xl font-semibold tracking-tight text-white mb-6" id="faq-h2">
              Inquiries
            </h2>
</div>
<div className="lg:col-span-8">
<div className="space-y-4">
<div className="fade-up-block border-b border-white/5 pb-6 tech-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left">
<span className="text-base font-medium text-white hover-target" id="faq-q1">
                    Is the system compatible with legacy architecture?
                  </span>
<i className="text-neutral-500 w-4 h-4" data-lucide="plus"></i>
</button>
<div className="accordion-content open" style={{maxHeight: '200px', opacity: '1'}}>
<p className="mt-4 text-neutral-500 leading-relaxed text-sm font-light" id="faq-a1">
                    Yes. We provide adapters for most standard legacy protocols,
                    allowing for gradual migration.
                  </p>
</div>
</div>
<div className="fade-up-block border-b border-white/5 pb-6 pt-2 tech-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group">
<span className="text-base font-medium text-neutral-400 group-hover:text-white transition-colors hover-target" id="faq-q2">
                    Where is data stored?
                  </span>
<i className="text-neutral-500 w-4 h-4" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="mt-4 text-neutral-500 leading-relaxed text-sm font-light" id="faq-a2">
                    Data storage can be configured for on-premise, cloud, or
                    hybrid environments depending on compliance needs.
                  </p>
</div>
</div>
<div className="fade-up-block border-b border-white/5 pb-6 pt-2 tech-observe">
<button className="accordion-btn flex items-center justify-between w-full text-left group">
<span className="text-base font-medium text-neutral-400 group-hover:text-white transition-colors hover-target" id="faq-q3">
                    What is the deployment timeline?
                  </span>
<i className="text-neutral-500 w-4 h-4" data-lucide="plus"></i>
</button>
<div className="accordion-content">
<p className="mt-4 text-neutral-500 leading-relaxed text-sm font-light" id="faq-a3">
                    Standard deployment takes approximately 48 hours after
                    network configuration is complete.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 overflow-hidden bg-black border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center parallax-effect" data-parallax-speed="0.03">
<div className="w-20 h-20 mx-auto mb-16 relative tech-observe animate-float border border-white/10 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-md">
<i className="w-8 h-8 text-white stroke-[1]" data-lucide="command"></i>
<div className="absolute inset-0 border border-white/20 rounded-2xl blur-sm"></div>
</div>
<h2 className="tech-observe hover-target text-4xl md:text-6xl font-semibold tracking-tight text-white mb-10" id="cta-h2">
          System ready.
        </h2>
<div className="tech-observe flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="bg-white text-black hover:bg-cyan-50 px-8 py-3.5 rounded-lg font-semibold transition-all w-full sm:w-auto hover-target text-sm tracking-wide shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)]" id="cta-b1">
            Initialize System
          </button>
<button className="text-neutral-400 hover:text-white font-medium transition-all w-full sm:w-auto flex items-center justify-center gap-2 hover-target text-sm tracking-wide" id="cta-b2">
            Read Documentation
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<footer className="bg-[#020202] text-white pt-24 pb-12 relative z-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2 tech-observe">
<div className="flex items-center gap-2 mb-8">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
<span className="text-sm font-bold tracking-tight text-white">
                nexusynth
              </span>
</div>
<p className="text-neutral-500 text-xs leading-relaxed mb-6 max-w-xs font-light" id="footer-tagline">
              Advanced digital infrastructure for the creative web.
            </p>
</div>
<div className="tech-observe">
<h4 className="font-medium mb-6 text-[10px] uppercase tracking-widest text-neutral-500">
              Platform
            </h4>
<ul className="space-y-4 text-xs text-neutral-400 font-light">
<li>
<a className="hover:text-cyan-400 transition-colors" href="#">
                  Architecture
                </a>
</li>
<li>
<a className="hover:text-cyan-400 transition-colors" href="#">
                  Security
                </a>
</li>
<li>
<a className="hover:text-cyan-400 transition-colors" href="#">
                  Compliance
                </a>
</li>
</ul>
</div>
<div className="tech-observe">
<h4 className="font-medium mb-6 text-[10px] uppercase tracking-widest text-neutral-500">
              Company
            </h4>
<ul className="space-y-4 text-xs text-neutral-400 font-light">
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  Manifesto
                </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 tech-observe font-light uppercase tracking-widest">
<p>Nexus Version 2.0.1</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
