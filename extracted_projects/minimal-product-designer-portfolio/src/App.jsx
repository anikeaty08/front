import { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import "iconify-icon";
import "./index.css";

const avatar =
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f804111a-fe24-4660-b754-0f3654213f91_320w.jpg";

const nav = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Process", "/process"],
  ["Resume", "/resume"],
];

const logos = ["Apple", "Tesla", "Stripe", "Notion", "Figma", "Linear"];

const services = [
  {
    title: "Product Design",
    text: "End-to-end product design from research and strategy to pixel-perfect interfaces that users love.",
    items: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing",
    ],
  },
  {
    title: "Mobile Apps",
    text: "Native iOS and Android app design that feels at home on every platform while maintaining brand consistency.",
    items: [
      "iOS & Android design",
      "Human interface guidelines",
      "Micro-interactions",
      "App store optimization",
    ],
  },
  {
    title: "Design Systems",
    text: "Scalable design systems and component libraries that ensure consistency across all touchpoints.",
    items: ["Component libraries", "Design tokens", "Documentation", "Team training"],
  },
];

const projects = [
  {
    title: "Fintech Mobile Experience",
    meta: "Mobile App · Product Strategy",
    desc: "A redesigned banking experience focused on trust, speed, and everyday clarity for modern finance teams.",
    tint: "blue",
    layout: "mobile"
  },
  {
    title: "AI Workspace Platform",
    meta: "SaaS Product · Design System",
    desc: "A collaborative AI interface with scalable components, onboarding flows, and workflow automation patterns.",
    tint: "purple",
    layout: "kanban"
  },
  {
    title: "EV Charging Network",
    meta: "Consumer Product · UX Research",
    desc: "Mapping, payments, and station insights for electric vehicle drivers moving through dense urban networks.",
    tint: "green",
    layout: "dashboard"
  },
];

const codeLines = [
  "const prototype = createFlow({",
  "  screens: ['home', 'checkout'],",
  "  motion: 'natural',",
  "  testing: true",
  "});",
];

function Icon({ name, className = "" }) {
  return <iconify-icon icon={name} class={className} aria-hidden="true" />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="site-header fade-in">
      <div className="nav-shell">
        <div className="nav-row">
          <Link to="/" className="brand" aria-label="Jordan Chen home">
            <span>JC</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link 
                key={label} 
                to={href}
                style={{ color: location.pathname === href ? '#fff' : '' }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <a className="connect desktop-connect" href="#contact">
            <Icon name="solar:arrow-right-linear" />
            Let's connect
          </a>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} />
          </button>
        </div>

        {open && (
          <div className="mobile-nav">
            {nav.map(([label, href]) => (
              <Link 
                key={label} 
                to={href} 
                onClick={() => setOpen(false)}
                style={{ color: location.pathname === href ? '#fff' : '' }}
              >
                {label === "Resume" ? "Journal" : label}
              </Link>
            ))}
            <a className="connect mobile-connect" href="#contact" onClick={() => setOpen(false)}>
              <Icon name="solar:arrow-right-linear" />
              Let's connect
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function StatusPill() {
  return (
    <aside className="status-pill">
      <div className="status-card">
        <span className="dot-wrap">
          <span className="dot-ping" />
          <span className="dot" />
        </span>
        <span>Available for projects</span>
        <Icon name="solar:arrow-right-up-linear" />
      </div>
      <i />
    </aside>
  );
}

function Hero() {
  return (
    <section id="heroSection" className="hero">
      <div className="container center">
        <div className="avatar-wrap scale-in">
          <img src={avatar} alt="Jordan Chen" />
        </div>

        <h1 className="hero-title slide-up">
          {"Product Designer".split("").map((c, i) => (
            <span key={i} className="letter" style={{ animationDelay: `${1 + i * 0.025}s` }}>
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </h1>

        <p className="hero-copy slide-up d12">
          Crafting digital experiences that feel intuitive, look beautiful, and solve real
          problems for companies like Apple, Tesla, and Stripe.
        </p>

        <div className="hero-actions slide-up d14">
          <Link to="/work" className="btn btn-light">
            <Icon name="solar:play-linear" />
            View my work
            <Icon name="solar:arrow-right-linear" className="shift" />
          </Link>
          <Link to="/about" className="btn btn-glass">
            <Icon name="solar:user-linear" />
            About me
          </Link>
        </div>

        <div className="stats fade-in d16">
          {[
            ["8+", "Years"],
            ["50+", "Projects"],
            ["12", "Awards"],
          ].map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trusted() {
  return (
    <section className="trusted fade-in d18">
      <div className="container">
        <p>Trusted by industry leaders</p>
        <div className="ticker">
          <div className="ticker-track">
            {[0, 1, 2].map((set) => (
              <div className="ticker-set" key={set}>
                {logos.map((logo) => (
                  <span key={`${set}-${logo}`}>{logo}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head center">
          <h2>What I do</h2>
          <p>Full-spectrum design services for ambitious companies</p>
        </div>

        <div className="service-grid">
          {services.map((s) => (
            <article className="glass-card service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>
                    <Icon name="solar:check-linear" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <>
      <div className="mock-top">
        <span />
        <span />
        <span />
      </div>
      <div className="mock-body">
        <div className="mock-side">
          <b />
          <b />
          <b />
          <b />
        </div>
        <div className="mock-main">
          <div className="chart-card">
            {Array.from({ length: 10 }).map((_, i) => (
              <i key={i} style={{ height: `${22 + i * 5}px` }} />
            ))}
          </div>
          <div className="ui-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="float-panel">
          <strong>+42%</strong>
          <small>Conversion</small>
        </div>
      </div>
    </>
  );
}

function MobileMock() {
  return (
    <div className="mock-mobile-wrapper">
      <div className="mock-mobile-device">
        <div className="mock-mobile-notch" />
        <div className="mock-mobile-card large" />
        <div className="mock-mobile-card" />
        <div className="mock-mobile-card" />
        <div className="mock-mobile-fab" />
      </div>
    </div>
  );
}

function KanbanMock() {
  return (
    <div className="mock-kanban-wrapper">
      <div className="mock-kanban-top">
        <span />
        <div><i /><i /><i /></div>
      </div>
      <div className="mock-kanban-board">
        <div className="mock-kanban-col">
          <div className="mock-kanban-col-title" />
          <div className="mock-kanban-item" />
          <div className="mock-kanban-item tall" />
        </div>
        <div className="mock-kanban-col">
          <div className="mock-kanban-col-title" />
          <div className="mock-kanban-item tall" />
          <div className="mock-kanban-item" />
        </div>
        <div className="mock-kanban-col">
          <div className="mock-kanban-col-title" />
          <div className="mock-kanban-item" />
          <div className="mock-kanban-item" />
        </div>
      </div>
    </div>
  );
}

function ProjectMock({ tint, layout }) {
  return (
    <div className={`project-mock ${tint}`}>
      {layout === "dashboard" && <DashboardMock />}
      {layout === "mobile" && <MobileMock />}
      {layout === "kanban" && <KanbanMock />}
    </div>
  );
}

function FeaturedWork() {
  return (
    <section className="section featured">
      <div className="container">
        <div className="split-head">
          <div>
            <h2>Featured Work</h2>
            <p>Selected projects that shaped product strategy, interaction, and growth.</p>
          </div>
          <Link to="/work" className="soft-link">
            View all work <Icon name="solar:arrow-right-up-linear" />
          </Link>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <a className="project-card" href="#contact" key={p.title}>
              <ProjectMock tint={p.tint} layout={p.layout} />
              <div className="project-meta">
                <span>{p.meta}</span>
                <Icon name="solar:arrow-right-up-linear" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { quote: "Jordan transformed our complex data platform into an intuitive experience. The attention to detail and user empathy is unmatched.", author: "Sarah Jenkins", role: "VP of Product, FinTech Co" },
    { quote: "A rare combination of strategic thinking and pixel-perfect execution. Jordan delivered our comprehensive design system weeks ahead of schedule.", author: "David Chen", role: "CTO, AI Workspace" },
    { quote: "Working with Jordan felt like having an entire design agency in one person. Our conversion rates increased by 42% after the redesign.", author: "Elena Rodriguez", role: "Founder, ChargeNet" }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <h2>Client Feedback</h2>
          <p>What partners and leaders say about working with me</p>
        </div>
        <div className="testimonial-grid">
           {reviews.map((r, i) => (
             <div className="glass-card testimonial-card" key={i}>
                <p>"{r.quote}"</p>
                <div className="author">
                  <strong>{r.author}</strong>
                  <span>{r.role}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "What is your typical project timeline?", a: "Most end-to-end product design projects take between 4 to 8 weeks, depending on the complexity, scope, and feedback cycles." },
    { q: "Do you work with early-stage startups?", a: "Yes! I love partnering with early-stage founders to establish their initial product vision, design system, and core user flows to help them secure funding or reach market validation." },
    { q: "How do you handle design handoff to engineering?", a: "I provide comprehensive Figma files with clearly defined design tokens, component states, and responsive behavior annotations. I also remain available during development for QA to ensure pixel-perfect execution." },
    { q: "Can you help with front-end development?", a: "While my core expertise is product design, I am highly proficient in React, HTML, and CSS (including Tailwind). This allows me to build high-fidelity prototypes and bridge the gap between design and engineering." }
  ];

  return (
    <section className="section">
      <div className="container">
         <div className="section-head center">
           <h2>Frequently Asked Questions</h2>
           <p>Common questions about my process and partnerships</p>
         </div>
         <div className="faq-grid">
           {faqs.map((faq, i) => (
             <div 
               className={`faq-item ${openIndex === i ? 'open' : ''}`} 
               key={i} 
               onClick={() => setOpenIndex(openIndex === i ? null : i)}
             >
               <div className="faq-q">
                 <h3>{faq.q}</h3>
                 <Icon name={openIndex === i ? "solar:minus-circle-linear" : "solar:add-circle-linear"} />
               </div>
               <div className="faq-a">
                 <p>{faq.a}</p>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <h2>Designing with clarity, craft, and measurable impact</h2>
          <p>
            I'm Jordan Chen, a product designer partnering with ambitious teams to turn
            complex systems into simple, beautiful, and useful experiences. My work spans
            early discovery, interface design, prototyping, and design systems for products
            used by millions.
          </p>
          <div className="about-stats">
            <span><b>4.9/5</b> Client rating</span>
            <span><b>30M+</b> Users reached</span>
          </div>
        </div>
        <div className="portrait-card">
          <img src={avatar} alt="Jordan Chen portrait" />
          <div>
            <strong>Jordan Chen</strong>
            <span>Product Designer · San Francisco</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const values = [
    { title: "User-Centricity", desc: "Every decision starts with the user. I believe in empathetic design that solves genuine problems rather than just looking good.", icon: "solar:users-group-rounded-linear" },
    { title: "Craft & Polish", desc: "Good design is invisible. I obsess over the micro-interactions, typography, and spacing to build interfaces that feel premium.", icon: "solar:magic-stick-3-linear" },
    { title: "Strategic Impact", desc: "Design must drive business metrics. I align creative vision with product goals to deliver measurable return on investment.", icon: "solar:chart-square-linear" }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-head center">
          <h2>Core Values</h2>
          <p>The principles that guide my approach to every project</p>
        </div>
        <div className="service-grid">
           {values.map(v => (
             <div className="glass-card service-card" key={v.title}>
                <Icon name={v.icon} style={{ fontSize: '32px', color: 'var(--green)', marginBottom: '16px' }} />
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function AboutGallery() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container gallery-grid">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/ba62ca8b-ac2e-44d4-ae6c-078346f8cc40/1600w.png" alt="Design workspace layout" className="gallery-img slide-up d12" />
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/fe7606e5-3c38-49d5-8c6c-6591f296fa0e/1600w.jpg" alt="Team collaboration and sketching" className="gallery-img slide-up d14" />
      </div>
    </section>
  );
}

function ResearchIllustration() {
  return (
    <div className="research-illus">
      <div className="small-window left">
        <em>User Journey</em>
      </div>
      <div className="small-window right">
        <em>Personas</em>
      </div>
      <div className="focus-window">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function CodeIllustration() {
  return (
    <div className="code-window">
      <div className="code-bar"><i /><i /><i /></div>
      <div className="code-body">
        {codeLines.map((line, i) => (
          <span key={line} style={{ animationDelay: `${i * 0.3}s` }}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function MetricsIllustration() {
  return (
    <div className="metrics-illus">
      <div className="analytics">
        <div><span>USABILITY</span><b>+94%</b></div>
        <div className="mini-bars">
          {Array.from({ length: 11 }).map((_, i) => (
            <i key={i} style={{ height: `${34 + i * 3}px` }} />
          ))}
        </div>
      </div>
      <div className="metrics-panel">
        <span>METRICS</span>
        <p><b>Task Success</b><em>94%</em></p>
        <p><b>Time to Complete</b><em>-40%</em></p>
        <p><b>User Satisfaction</b><em>4.8/5</em></p>
      </div>
      <div className="ab-panel">
        <span>A/B TEST</span>
        <div>{Array.from({ length: 9 }).map((_, i) => <i key={i} />)}</div>
      </div>
    </div>
  );
}

function Process() {
  const cards = [
    {
      title: "Research & Strategy",
      text: <>I begin every project with thorough <b>user research</b> and stakeholder interviews to understand the problem space and align on project goals.</>,
      illus: <ResearchIllustration />,
    },
    {
      title: "Design & Prototype",
      text: <>From wireframes to high-fidelity designs, I create <b>interactive prototypes</b> that bring ideas to life and enable early user testing.</>,
      illus: <CodeIllustration />,
    },
    {
      title: "Test & Refine",
      text: <>Through continuous <b>user testing</b> and data analysis, I iterate and refine designs until they deliver exceptional user experiences and measurable results.</>,
      illus: <MetricsIllustration />,
    },
  ];

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-head center">
          <h2>My Process</h2>
          <p>A focused workflow from discovery to measurable results</p>
        </div>
        <div className="process-grid">
          {cards.map((c) => (
            <article className="process-card" key={c.title}>
              <div className="process-art">{c.illus}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  const tools = [
    ["simple-icons:figma", "Figma"],
    ["simple-icons:framer", "Framer"],
    ["simple-icons:notion", "Notion"],
    ["simple-icons:linear", "Linear"],
    ["simple-icons:react", "React"],
    ["simple-icons:spline", "Spline"],
    ["simple-icons:webflow", "Webflow"],
    ["simple-icons:github", "GitHub"]
  ];

  return (
    <section className="section">
      <div className="container">
         <div className="section-head center">
          <h2>My Toolkit</h2>
          <p>The software and frameworks I use daily to bring ideas to life</p>
        </div>
        <div className="tool-grid">
          {tools.map(([icon, name]) => (
            <div className="glass-card tool-card" key={name}>
              <Icon name={icon} className="tool-icon" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    ["simple-icons:dribbble", "Dribbble"],
    ["simple-icons:x", "Twitter"],
    ["simple-icons:linkedin", "LinkedIn"],
    ["simple-icons:github", "GitHub"],
  ];

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2>Let's create something amazing together</h2>
            <p>
              Ready to bring your vision to life? I'd love to hear about your project and
              explore how we can work together.
            </p>
            <div className="footer-actions">
              <a className="btn btn-light" href="mailto:hello@jordanchen.design">
                <Icon name="solar:letter-linear" />
                hello@jordanchen.design
              </a>
              <a className="btn btn-glass" href="#">
                <Icon name="solar:calendar-linear" />
                Schedule a call
              </a>
            </div>
            <div className="socials">
              {socials.map(([icon, label]) => (
                <a href="#" aria-label={label} key={label}>
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="quick">
            <h3>Quick Links</h3>
            <div>
              {["Home", "Work", "About", "Process", "Resume", "Case Studies", "Speaking", "Mentoring"].map((l) => {
                const isMainRoute = ["Home", "Work", "About", "Process", "Resume"].includes(l);
                const path = l === "Home" ? "/" : isMainRoute ? `/${l.toLowerCase()}` : "#";
                return isMainRoute ? (
                  <Link to={path} key={l}>{l}</Link>
                ) : (
                  <a href={path} key={l}>{l}</a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="copyright">
          <div>
            <span className="mini-brand">JC</span>
            <small>© 2024 Jordan Cole. All rights reserved.</small>
          </div>
          <small>Designed in Aura, built with love</small>
        </div>
      </div>

      <button className="go-top" onClick={goTop} aria-label="Go to top">
        <Icon name="solar:arrow-up-linear" />
      </button>
    </footer>
  );
}

function PageWrapper({ children }) {
  return (
    <div className="fade-in" style={{ paddingTop: "96px", minHeight: "80vh" }}>
      {children}
    </div>
  );
}

function Home() {
  return (
    <div className="fade-in">
      <Hero />
      <Trusted />
      <Services />
      <FeaturedWork />
      <FAQ />
      <Testimonials />
    </div>
  );
}

function WorkPage() {
  return (
    <PageWrapper>
      <Services />
      <FeaturedWork />
      <Testimonials />
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <About />
      <CoreValues />
      <AboutGallery />
      <Trusted />
    </PageWrapper>
  );
}

function ProcessPage() {
  return (
    <PageWrapper>
      <Process />
      <Toolkit />
    </PageWrapper>
  );
}

function ResumePage() {
  const experience = [
    {
      role: "Senior Product Designer",
      company: "Tech Innovations Inc.",
      years: "2020 - Present",
      desc: "Lead the design of the core AI platform, scaling the design team from 2 to 10 and establishing a comprehensive cross-platform design system used by millions."
    },
    {
      role: "Product Designer",
      company: "Creative Solutions",
      years: "2017 - 2020",
      desc: "Owned the end-to-end design for the mobile banking application. Collaborated directly with engineering to launch 5 major feature updates increasing retention by 30%."
    },
    {
      role: "UX Designer",
      company: "StartUp Hub",
      years: "2015 - 2017",
      desc: "Conducted extensive user research, mapped complex enterprise workflows, and translated findings into actionable low and high-fidelity wireframes."
    }
  ];

  return (
    <PageWrapper>
      <section className="section">
        <div className="container">
          <div className="section-head slide-up">
            <h2>Resume & Journal</h2>
            <p>A history of my professional experience, education, and skills.</p>
          </div>
          
          <div className="resume-layout slide-up d12">
            <div className="resume-col">
              <h3>Experience</h3>
              <div className="timeline">
                {experience.map((item, i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-dot" />
                    <strong>{item.role}</strong>
                    <span>{item.company} · {item.years}</span>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="resume-col">
               <h3>Education</h3>
               <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <strong>M.S. Human-Computer Interaction</strong>
                    <span>Carnegie Mellon University · 2013 - 2015</span>
                    <p>Focus on generative research, interaction design, and cognitive psychology applied to digital interfaces.</p>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-dot" />
                    <strong>B.S. Graphic Design</strong>
                    <span>Rhode Island School of Design · 2009 - 2013</span>
                    <p>Foundations in typography, visual communication, and brand identity.</p>
                  </div>
               </div>

               <h3 style={{ marginTop: '64px' }}>Core Skills</h3>
               <div className="skills-flex">
                  {[
                    "UI/UX Design", "Interactive Prototyping", "Design Systems", 
                    "User Research", "Wireframing", "Figma", "Frontend Dev (React)", 
                    "Motion Design", "Product Strategy", "Agile Methodologies"
                  ].map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main>
      <div className="gradient-bg" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <StatusPill />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default function App() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="resume" element={<ResumePage />} />
      </Route>
    </Routes>
  );
}