import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            // Reusable contact block builder
function contacts(faculty, students){
    const stus = students.map(s => {
        const phone = s.phone ? `<a href="tel:${s.phone}" style="font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--gold);text-decoration:none;margin-left:auto;white-space:nowrap;">${s.phone}</a>` : '';
        return `<li style="display:flex;align-items:center;gap:0.7rem;padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.82rem;color:var(--text);">
            <span style="width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,var(--violet),var(--gold));display:flex;align-items:center;justify-content:center;font-size:0.5rem;color:#000;font-family:'DM Mono',monospace;font-weight:700;flex-shrink:0;">${s.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</span>
            <span style="flex:1">${s.name}</span>${phone}</li>`;
    }).join('');
    return `<div style="margin-top:1.4rem;">
        <div class="m-sec" style="margin-top:0">Contacts</div>
        <div style="background:rgba(255,255,255,0.02);border:1px solid var(--border);border-radius:8px;overflow:hidden;">
            <div style="display:flex;align-items:center;gap:0.7rem;padding:0.75rem 1rem;border-bottom:1px solid var(--border);background:rgba(201,168,76,0.05);">
                <span style="font-size:0.7rem;color:var(--gold);">🎓</span>
                <span style="font-size:0.82rem;color:var(--white);font-weight:500;">${faculty}</span>
                <span style="font-family:'DM Mono',monospace;font-size:0.55rem;color:var(--muted);letter-spacing:0.1em;text-transform:uppercase;margin-left:auto;">Faculty</span>
            </div>
            <ul style="list-style:none;padding:0 1rem;">${stus}</ul>
        </div>
    </div>`;
}

const EVENTS = {
    chrono:{title:'ChronoCart – Shark Tank',tag:'Management · Entrepreneurship',body:`
        <p style="color:var(--muted);font-style:italic;font-size:0.85rem;margin-bottom:1.5rem;">Present a time-travelling business concept to the sharks!</p>
        <div class="m-sec">Format</div><ul class="m-rules"><li><strong style="color:var(--white)">Teams:</strong> 2–4 participants</li><li><strong style="color:var(--white)">Presentation:</strong> 10 min + 5 min Q&A</li><li><strong style="color:var(--white)">Theme:</strong> Time Travel (mandatory)</li></ul>
        <div class="m-sec">Rules</div><ul class="m-rules"><li>Gameplay rules must be pre-defined and clearly explained</li><li>No plagiarism — copied ideas lead to disqualification</li><li>No offensive or profane language</li><li>Game must ensure fair play and avoid unethical themes</li><li>Judges' decision is final</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹50 Solo / ₹100 Group</span></div>
        ${contacts('Prof. Khushboo Satardekar',[{name:'Riya Jethani',phone:'8080867252'},{name:'Sugandhi Motwani',phone:'8149187431'},{name:'Abhishek Motwani'},{name:'Lalit Daswani'}])}`},

    mktambola:{title:'Marketing Tambola',tag:'Management · Marketing · Solo',body:`
        <p style="color:var(--muted);font-style:italic;font-size:0.85rem;margin-bottom:1.5rem;">A marketing-themed housie where domain jargon replaces numbers.</p>
        <div class="m-2col"><div class="m-box"><div class="m-box-t">Participation</div><ul class="m-rules"><li>Open to all college students</li><li>Individual participation only</li><li>One housie ticket per participant</li></ul></div><div class="m-box"><div class="m-box-t">Game Format</div><ul class="m-rules"><li>Tickets contain domain-based terms</li><li>Anchor calls out questions / clues</li><li>Strike the correct term on your ticket</li></ul></div></div>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹50 Solo</span></div>
        ${contacts('Prof. Prem Rajani',[{name:'Krina',phone:'9423029032'},{name:'Dishita Kadam'},{name:'Mahek Rajani'},{name:'Sushil More'}])}`},

    hirefire:{title:'Hire & Fire (HR)',tag:'Management · HR · Solo',body:`
        <p style="color:var(--muted);font-style:italic;font-size:0.85rem;margin-bottom:1.5rem;">An HR-themed housie where domain terminology replaces numbers.</p>
        <div class="m-2col"><div class="m-box"><div class="m-box-t">Participation</div><ul class="m-rules"><li>Open to all college students</li><li>Individual participation only</li><li>One housie ticket per participant</li></ul></div><div class="m-box"><div class="m-box-t">Game Format</div><ul class="m-rules"><li>Tickets contain HR domain terms</li><li>Anchor calls out questions / clues</li><li>Strike the correct term on your ticket</li></ul></div></div>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹50 Solo</span></div>
        ${contacts('Prof. Ekta Multani',[{name:'Krisha',phone:'7021816932'},{name:'Simran',phone:'8459743749'},{name:'Pranita',phone:'9689885381'},{name:'Prasad Pathak'}])}`},

    money:{title:'Money Matrix',tag:'Management · Finance · Solo',body:`
        <p style="color:var(--muted);font-style:italic;font-size:0.85rem;margin-bottom:1.5rem;">A finance-themed housie where domain terminology replaces numbers.</p>
        <div class="m-2col"><div class="m-box"><div class="m-box-t">Participation</div><ul class="m-rules"><li>Open to all college students</li><li>Individual participation only</li><li>One housie ticket per participant</li></ul></div><div class="m-box"><div class="m-box-t">Game Format</div><ul class="m-rules"><li>Tickets contain Finance terms</li><li>Anchor calls out questions / clues</li><li>Strike the correct term on your ticket</li></ul></div></div>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹50 Solo</span></div>
        ${contacts('Prof. Bharti Bhojwani',[{name:'Afreen Khan',phone:'9175825591'},{name:'Rutuja Sathe'},{name:'Shreya'}])}`},

    dance:{title:'KAALDHARA – Trikaal Dance',tag:'Cultural · Dance · Solo / Group',body:`
        <div class="m-chips" style="margin-bottom:1.5rem"><span class="m-chip" style="color:var(--gold);border-color:var(--gold-dim)">Past: Divinity</span><span class="m-chip" style="color:var(--violet);border-color:rgba(124,92,252,.4)">Present: Chaos</span><span class="m-chip" style="color:var(--cyan);border-color:rgba(61,224,213,.4)">Future: Awakening</span></div>
        <div class="m-sec">Guidelines</div><ul class="m-rules"><li>Min 2 timelines — Classical → Fusion → Abstract</li><li>Solo / Duo / Group (max 6 members)</li><li>Duration: 4–7 minutes</li><li>Fusion music & symbolic props only</li><li>Flow · Break · Restart concept encouraged</li></ul>
        <div class="m-sec">Special Awards</div><div class="m-chips" style="margin-bottom:1rem"><span class="m-chip">Best Kaal Transition</span><span class="m-chip">Most Mythical Act</span><span class="m-chip">Future Vision Award</span></div>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹100 Solo / ₹200 Group</span></div>
        ${contacts('Prof. Priya Mulchandani',[{name:'Maheswari Unhale',phone:'7620515641'},{name:'Himanshu Mishra'},{name:'Nikita Jadhav'}])}`},

    drama:{title:'Samaychakra Drama',tag:'Cultural · Skit · Group',body:`
        <p style="font-family:'Playfair Display',serif;font-style:italic;color:var(--muted);font-size:1rem;margin-bottom:0.4rem">"Time repeats. Lessons remain."</p>
        <p style="color:var(--muted);font-size:0.82rem;margin-bottom:1.5rem">Theme: Myth in the modern world. Dharma across Past · Present · Future.</p>
        <div class="m-sec">Rules & Guidelines</div><ul class="m-rules"><li><strong style="color:var(--white)">Team:</strong> 6–12 members</li><li><strong style="color:var(--white)">Time:</strong> 10–15 minutes</li><li><strong style="color:var(--white)">Language:</strong> Hindi or English</li><li>Original script required — minimal props</li><li>No political or religious disrespect</li><li>One symbolic element must flow throughout</li></ul>
        <div class="m-sec">Judging</div><div class="m-chips" style="margin-bottom:1rem"><span class="m-chip">Story & Emotion</span><span class="m-chip">Timeline Flow</span><span class="m-chip">Acting & Message</span></div>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹200 Group only</span></div>
        ${contacts('Prof. Priya Mulchandani',[{name:'Alshifa Shaikh',phone:'7620692706'},{name:'Raj Godambe'},{name:'Sanjay'}])}`},

    poetry:{title:'Kavya-Kaal – Poetry / Shayari',tag:'Cultural · Poetry · Solo',body:`
        <p style="color:var(--muted);font-size:0.82rem;margin-bottom:1.5rem">Past: Memory & myth · Present: Chaos & questions · Future: Hope & awakening</p>
        <div class="m-sec">Rules</div><ul class="m-rules"><li>Solo only — max 3 minutes</li><li>Language: Hindi / Urdu / English</li><li>Original poetry — no plagiarism</li><li>Props: Book or paper only</li><li>Soft background music optional</li></ul>
        <div class="m-sec">Judging Criteria</div><ul class="m-rules"><li>Theme & time clarity</li><li>Language & imagery</li><li>Emotion & originality</li><li>Voice & delivery</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹100 Solo</span></div>
        ${contacts('Prof. Priya Mulchandani',[{name:'Alshifa Shaikh',phone:'7620692706'},{name:'Raj Godambe'},{name:'Sanjay'}])}`},

    reels:{title:'Samay Snap – Reel Making',tag:'Cultural · Reels · Solo / Team',body:`
        <p style="color:var(--muted);font-size:0.82rem;margin-bottom:1.5rem">Tell an Indian mythology story through a modern reel — blending nostalgia, today's reality, and tomorrow's hope in seconds.</p>
        <div class="m-sec">Mandatory Theme</div>
        <div class="m-chips" style="margin-bottom:0.8rem"><span class="m-chip" style="color:var(--gold)">Past: Mythology & Shlokas</span><span class="m-chip" style="color:var(--violet)">Present: Modern life</span><span class="m-chip" style="color:var(--cyan)">Future: Hope & wisdom</span></div>
        <p style="font-size:0.77rem;color:var(--muted);margin-bottom:1.3rem">Show at least 2 timelines. Smooth transition = key.</p>
        <div class="m-sec">Technical Rules</div><ul class="m-rules"><li>Solo / Team (max 3 members)</li><li>Duration: 20–45 seconds</li><li>Format: Vertical 9:16</li><li>Upload on Instagram (rules will be announced)</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹100 Solo</span></div>
        ${contacts('Prof. Bharti Bhojwani',[{name:'Tanisha Kedare',phone:'8591361030'},{name:'Prashik Kamble'}])}`},

    bgmi:{title:'BGMI — Battlegrounds Mobile India',tag:'Sports · E-Sports · Squad',body:`
        <p style="color:var(--muted);font-size:0.82rem;margin-bottom:1.5rem">Strategy · Survival · Teamwork. From ancient battle instincts to digital warfare.</p>
        <div class="m-sec">Format & Rules</div><ul class="m-rules"><li>4-Player Squad Battle</li><li>Knockout / Points Based format</li><li>1 Kill = 1 Point</li><li>Report on time — Fair Play Only</li><li>No hacks, mods, or toxic behaviour</li><li>Must use official BGMI App</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹100 Solo / ₹200 Group</span></div>
        ${contacts('Prof. Prem Rajani',[{name:'Nishant Mishra',phone:'9321658972'},{name:'Mayur',phone:'9322723899'}])}`},

    chess:{title:'Chess',tag:'Sports · Board Game · Individual',body:`
        <div class="m-sec">Rules & Guidelines</div><ul class="m-rules"><li>Matches follow standard chess rules</li><li>Touch-move rule applies</li><li>Bring your own chess board</li><li>Mobile phones strictly prohibited during play</li><li>Cheating or misconduct leads to disqualification</li><li>Arbiter's decision is final</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹100 Solo</span></div>
        ${contacts('Prof. Prem Rajani',[{name:'Chetana Gaikwad',phone:'7709639856'},{name:'Aarya Patil',phone:'8793424013'}])}`},

    carrom:{title:'Carrom',tag:'Sports · Board Game · Singles / Doubles',body:`
        <div class="m-sec">Rules & Guidelines</div><ul class="m-rules"><li>Singles or Doubles — Knockout or League format</li><li>Each match: 1 board or fixed points</li><li>Toss decides the first strike</li><li>Strike only using the striker within the baseline</li><li>Pocketing the Queen must be followed by a cover shot</li><li>Pocketing the striker results in a penalty</li><li>Foul shots include hand touches and improper strikes</li><li>Referee's decision is final</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹50 Solo</span></div>
        ${contacts('Prof. Prem Rajani',[{name:'Vaishnavi',phone:'9850789795'},{name:'Shweta Rai'},{name:'Bhumika Ruparel'}])}`},

    tt:{title:'Table Tennis',tag:'Sports · Racket · Individual',body:`
        <div class="m-sec">Rules & Guidelines</div><ul class="m-rules"><li>Best of 3 sets format</li><li>Each set played to 11 points (win by min. 2 points)</li><li>Service changes every 2 points</li><li>Serve from an open palm — toss the ball vertically</li><li>Free hand must not touch the table during play</li><li>Official ITTF rules apply</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹100 Solo</span></div>
        ${contacts('Prof. Prem Rajani',[{name:'Pramod',phone:'7710830410'},{name:'Vinay Bharambe',phone:'9975089325'},{name:'Sakshi Gaikwad'},{name:'Bhagyashri'}])}`},

    darts:{title:'Darts',tag:'Sports · Accuracy · Individual',body:`
        <div class="m-sec">Rules & Guidelines</div><ul class="m-rules"><li>3 darts per turn</li><li>Standard dartboard scoring rules apply</li><li>Players must throw from behind the fixed line</li><li>Bounced-out or fallen darts not counted</li><li>Do not touch dartboard before score is recorded</li><li>Highest cumulative score across rounds wins</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹50 Solo</span></div>
        ${contacts('Prof. Prem Rajani',[{name:'Aashish Mhatre',phone:'9146291703'},{name:'Vinay Bhoir'}])}`},

    badminton:{title:'Badminton',tag:'Sports · Racket · Individual',body:`
        <div class="m-sec">Rules & Guidelines</div><ul class="m-rules"><li>Best of 3 games format</li><li>Each game to 21 points — rally point scoring</li><li>Win by 2-point margin (cap at 30 points)</li><li>Service must be delivered below the waist</li><li>Service must be diagonal — straight serve is a foul</li><li>Players must stay within court boundaries during serve</li></ul>
        <div class="m-fee"><span class="m-fee-lbl">Entry Fees</span><span class="m-fee-val">₹100 Solo</span></div>
        ${contacts('Prof. Prem Rajani',[{name:'Rohan',phone:'7058595069'},{name:'Khushi'},{name:'Manasvi'},{name:'Vishal'}])}`}
};

function go(id){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-links button').forEach(b=>{
        b.classList.toggle('active', b.dataset.p===id);
    });
    document.querySelectorAll('.mobile-menu button').forEach(b=>{
        b.classList.toggle('active', b.dataset.mp===id);
    });
    window.scrollTo({top:0,behavior:'smooth'});
}

function toggleMenu(){
    const ham = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu');
    const isOpen = menu.classList.contains('open');
    ham.classList.toggle('open', !isOpen);
    menu.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
}
function closeMenu(){
    document.getElementById('hamburger').classList.remove('open');
    document.getElementById('mobile-menu').classList.remove('open');
    document.body.style.overflow = '';
}

function filterEv(cat, btn){
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    ['management','cultural','sports'].forEach(c=>{
        const el=document.getElementById(c+'-events');
        if(el) el.style.display=(cat==='all'||cat===c)?'':'none';
    });
}

function openModal(id){
    const d=EVENTS[id]; if(!d) return;
    document.getElementById('m-title').innerText=d.title;
    document.getElementById('m-body').innerHTML=`<div class="m-tag">${d.tag}</div>${d.body}`;
    document.getElementById('modal-bd').classList.add('open');
    document.body.style.overflow='hidden';
}
function closeModal(){
    document.getElementById('modal-bd').classList.remove('open');
    document.body.style.overflow='';
}
function bdClick(e){ if(e.target===document.getElementById('modal-bd')) closeModal(); }
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

window.addEventListener('load',()=>go('home'));
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav>
<div className="nav-logo" onclick="go('home')">
<div className="nav-gem">M</div>
            MILAAP <span className="nav-year">2026</span>
</div>
<div className="nav-links">
<button className="active" data-p="home" onclick="go('home')">Home</button>
<button data-p="about" onclick="go('about')">Institute</button>
<button data-p="events" onclick="go('events')">Events</button>
<button data-p="register" onclick="go('register')">Register</button>
<button data-p="contact" onclick="go('contact')">Contact</button>
</div>
<button className="nav-cta" onclick="go('register')">Register →</button>
<button aria-label="Toggle menu" className="hamburger" id="hamburger" onclick="toggleMenu()">
<span></span><span></span><span></span>
</button>
</nav>

<div className="mobile-menu" id="mobile-menu">
<button data-mp="home" onclick="go('home');closeMenu()">Home</button>
<button data-mp="about" onclick="go('about');closeMenu()">Institute</button>
<button data-mp="events" onclick="go('events');closeMenu()">Events</button>
<button data-mp="register" onclick="go('register');closeMenu()">Register</button>
<button data-mp="contact" onclick="go('contact');closeMenu()">Contact</button>
</div>

<div className="announce-bar">
<div className="announce-pill">
<span className="a-icon">📅</span>
<span><strong>7th &amp; 8th March 2026</strong></span>
</div>
<div className="announce-divider"></div>
<div className="announce-pill">
<span className="a-icon">📍</span>
<span><strong>H. &amp; G.H. Mansukhani Institute of Management</strong> — Opp. Ulhasnagar Railway Station, Ulhasnagar-3</span>
</div>
</div>
<main>

<div className="page active" id="home">
<div id="home-inner">
<div className="hero-glow"></div>
<div className="hero-grid"></div>
<div className="hero-ring"></div>
<div className="hero-ring-inner"></div>
<div className="hero-content">
<div className="hero-eyebrow">HSNC Board's · Mansukhani Institute of Management</div>
<div className="hero-title">
<span className="hero-title-outline">MILAAP</span>
<span className="hero-title-solid">MILAAP</span>
</div>
<div className="hero-year">2 0 2 6</div>
<p className="hero-tagline">Time Travel — Past · Present · Future</p>
<p className="hero-hindi">"Kaal badalta hai, kahaniyaan nahi."</p>
<div className="hero-eras">
<div className="era era-past">
<span className="era-icon">⏳</span>
<div className="era-name">Past</div>
<div className="era-desc">Tradition &amp; Roots</div>
</div>
<div className="era era-present">
<span className="era-icon">⌚</span>
<div className="era-name">Present</div>
<div className="era-desc">Reality &amp; Challenge</div>
</div>
<div className="era era-future">
<span className="era-icon">🚀</span>
<div className="era-name">Future</div>
<div className="era-desc">Innovation &amp; Vision</div>
</div>
</div>
<div className="hero-btns">
<button className="btn-primary" onclick="go('register')">Join the Journey</button>
<button className="btn-ghost" onclick="go('events')">Explore Events</button>
</div>
<div className="venue-card">
<div className="venue-block">
<div className="venue-icon-wrap">📅</div>
<div>
<div className="venue-block-label">Date</div>
<div className="venue-block-main">7th &amp; 8th March 2026</div>
<div className="venue-block-sub">Two days of competitions, culture &amp; sports</div>
</div>
</div>
<div className="venue-block">
<div className="venue-icon-wrap">📍</div>
<div>
<div className="venue-block-label">Venue</div>
<div className="venue-block-main">H. &amp; G.H. Mansukhani Institute of Management</div>
<div className="venue-block-sub">Smt. C.H.M. Campus, Opposite Ulhasnagar Railway Station,
                                    Ulhasnagar-3</div>
<a href="https://maps.app.goo.gl/4CFUtHk7sQALhtc68" style={{display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.6rem', fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem', color: 'var(--gold)', textDecoration: 'none', letterSpacing: '0.06em'}} target="_blank">
<span>↗</span> Open in Google Maps
                                </a>
</div>
</div>
<div className="venue-map-wrap" style={{flexBasis: '100%'}}>
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2!2d73.1534!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7952b9a3c5555%3A0x7b1a9e3b2c4d5e6f!2sH.+%26+G.H.+Mansukhani+Institute+of+Management!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" title="MILAAP 2026 Venue">
</iframe>
<a className="venue-map-link" href="https://maps.app.goo.gl/4CFUtHk7sQALhtc68" target="_blank">
                                📍 Get Directions ↗
                            </a>
</div>
</div>
</div>
<div className="scroll-cue"><span>Scroll</span>
<div className="scroll-line"></div>
</div>
</div>
</div>

<div className="page" id="about">
<div className="wrap">
<div className="sec-head">
<div>
<div className="sec-label">HSNC Board's</div>
<h1 className="sec-title">H. &amp; G. H. Mansukhani<br/>Institute of Management</h1>
</div>
</div>

<div style={{marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(201,168,76,0.2)', position: 'relative'}}>
<img alt="H. &amp; G.H. Mansukhani Institute of Management" onerror="this.parentElement.style.display='none'" src="https://hsncmim.in/wp-content/uploads/2017/10/MIM-A-Centre-of-Excellence.jpg" style={{width: '100%', display: 'block', objectFit: 'cover', maxHeight: '420px', filter: 'brightness(0.85) saturate(0.9)'}}/>
<div style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '1.5rem 2rem', background: 'linear-gradient(to top,rgba(6,5,10,0.92),transparent)'}}>
<div style={{fontFamily: '\'Playfair Display\',serif', fontSize: '1.1rem', fontWeight: '700', color: 'var(--white)'}}>
                            H. &amp; G.H. Mansukhani Institute of Management</div>
<div style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '0.3rem'}}>
                            A Centre of Excellence · Ulhasnagar</div>
</div>
</div>
<div className="about-grid">
<div className="about-cell">
<div className="about-cell-label">Heritage</div>
<p className="about-cell-text">The first PG Management Institute under the board offering MMS,
                            approved by AICTE &amp; affiliated to the University of Mumbai. Named after visionary brothers
                            Late Shri Hashmatrai &amp; Shri Gangaram Himathmal Mansukhani, champions of value-based
                            education in rural India.</p>
</div>
<div className="about-cell">
<div className="about-cell-label">Leadership</div>
<p className="about-cell-text">MIM thrives under President Mr. Anil Harish, Trustees Mr. Kishu
                            Mansukhani, Dr. Niranjan Hiranandani, Mr. Lal Chellaram, and Ms. Maya Shahani. The premier
                            institute serving students from Thane to Karjat.</p>
</div>
<div className="about-cell about-wide">
<div className="about-cell-label">I/c Director</div>
<div className="about-cell-name">Prof. (Dr.) CA Kishore S. Peshori</div>
<p className="about-cell-text" style={{marginBottom: '1rem', maxWidth: '680px'}}>A beacon of guidance &amp;
                            catalyst for transformation. With wisdom, extensive knowledge, and compassion, he is the
                            cornerstone upon which our college stands — a mentor shaping destinies and instilling values
                            for a brighter tomorrow.</p>
<p style={{fontFamily: '\'Playfair Display\',serif', fontStyle: 'italic', color: 'var(--muted)', fontSize: '0.85rem'}}>
                            "A good leader inspires confidence in their followers, while a great leader inspires
                            confidence within them." — Eleanor Roosevelt</p>
</div>
</div>
<div className="sec-label" style={{marginBottom: '1.2rem'}}>Core Team</div>
<div className="team-grid">
<div className="team-member">
<div className="team-role">Faculty Incharge</div>
<div className="team-name">Prof. Bharti Bhojwani</div>
<div style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem', color: 'var(--gold)', marginTop: '0.3rem'}}>
                            9511 984 490</div>
</div>
<div className="team-member">
<div className="team-role">Student Coordinator</div>
<div className="team-name">Gahana Aishani</div>
<div style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem', color: 'var(--gold)', marginTop: '0.3rem'}}>
                            7058 603 784</div>
</div>
<div className="team-member">
<div className="team-role">Student Coordinator</div>
<div className="team-name">Ishita Jadhav</div>
<div style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem', color: 'var(--gold)', marginTop: '0.3rem'}}>
                            7719 044 656</div>
</div>
<div className="team-member">
<div className="team-role">Student Asst. Coordinator</div>
<div className="team-name">Alshifa Shaikh</div>
<div style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.62rem', color: 'var(--gold)', marginTop: '0.3rem'}}>
                            7620 692 706</div>
</div>
</div>
</div>
</div>

<div className="page" id="events">
<div className="wrap">
<div className="sec-head">
<div>
<div className="sec-label">What's happening</div>
<h1 className="sec-title">Events</h1>
<p style={{color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.5rem'}}>Click any card to view full
                            rules &amp; details.</p>
</div>
<div className="filter-bar">
<button className="filter-btn active" onclick="filterEv('all',this)">All</button>
<button className="filter-btn" onclick="filterEv('management',this)">Management</button>
<button className="filter-btn" onclick="filterEv('cultural',this)">Cultural</button>
<button className="filter-btn" onclick="filterEv('sports',this)">Sports</button>
</div>
</div>
<div className="events-cat cat-mgmt" id="management-events">
<div className="cat-bar"><span className="cat-bar-text">⚡ Management</span>
<div className="cat-bar-line"></div>
</div>
<div className="events-grid">
<div className="ev-card" onclick="openModal('chrono')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:cart-large-linear"></iconify-icon></div>
<div className="ev-title">ChronoCart – Shark Tank</div>
<div className="ev-sub">Travel from nostalgia to innovation!</div>
<div className="ev-fee">₹50 Solo / ₹100 Group</div>
</div>
<div className="ev-card" onclick="openModal('mktambola')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:ticket-linear"></iconify-icon></div>
<div className="ev-title">Marketing Tambola</div>
<div className="ev-sub">Then &amp; Now — domain terms housie</div>
<div className="ev-fee">₹50 Solo</div>
</div>
<div className="ev-card" onclick="openModal('hirefire')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon></div>
<div className="ev-title">Hire &amp; Fire (HR)</div>
<div className="ev-sub">HR Based Housie Game</div>
<div className="ev-fee">₹50 Solo</div>
</div>
<div className="ev-card" onclick="openModal('money')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon></div>
<div className="ev-title">Money Matrix</div>
<div className="ev-sub">Finance Based Housie Game</div>
<div className="ev-fee">₹50 Solo</div>
</div>
</div>
</div>
<div className="events-cat cat-cult" id="cultural-events">
<div className="cat-bar"><span className="cat-bar-text">✦ Cultural Cosmos</span>
<div className="cat-bar-line"></div>
</div>
<div className="events-grid">
<div className="ev-card" onclick="openModal('dance')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:music-note-linear"></iconify-icon></div>
<div className="ev-title">KAALDHARA – Trikaal Dance</div>
<div className="ev-sub">Past · Present · Future in motion</div>
<div className="ev-fee">₹100 Solo / ₹200 Group</div>
</div>
<div className="ev-card" onclick="openModal('drama')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:theater-linear"></iconify-icon></div>
<div className="ev-title">Samaychakra Drama</div>
<div className="ev-sub">The Eternal Wheel — skit competition</div>
<div className="ev-fee">₹200 Group only</div>
</div>
<div className="ev-card" onclick="openModal('poetry')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:pen-new-square-linear"></iconify-icon></div>
<div className="ev-title">Kavya-Kaal – Poetry / Shayari</div>
<div className="ev-sub">Poetry Beyond Time</div>
<div className="ev-fee">₹100 Solo</div>
</div>
<div className="ev-card" onclick="openModal('reels')">
<div className="ev-arrow">↗</div>
<div className="ev-icon"><iconify-icon icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<div className="ev-title">Samay Snap</div>
<div className="ev-sub">Reels Making Competition</div>
<div className="ev-fee">₹100 Solo</div>
</div>
</div>
</div>
<div className="events-cat cat-sport" id="sports-events">
<div className="cat-bar"><span className="cat-bar-text">◎ Sports Arena</span>
<div className="cat-bar-line"></div>
</div>
<p style={{color: 'var(--muted)', fontSize: '0.78rem', marginBottom: '1.2rem', fontStyle: 'italic'}}>Sports
                        evolve, sportsmanship doesn't.</p>
<div className="sports-grid">
<div className="sp-card" onclick="openModal('bgmi')"><iconify-icon className="sp-icon" icon="solar:gamepad-linear"></iconify-icon>
<div className="sp-title">BGMI</div>
<div className="sp-fee">₹100 / ₹200</div>
</div>
<div className="sp-card" onclick="openModal('chess')"><iconify-icon className="sp-icon" icon="solar:crown-star-linear"></iconify-icon>
<div className="sp-title">Chess</div>
<div className="sp-fee">₹100</div>
</div>
<div className="sp-card" onclick="openModal('carrom')"><iconify-icon className="sp-icon" icon="solar:target-linear"></iconify-icon>
<div className="sp-title">Carrom</div>
<div className="sp-fee">₹50</div>
</div>
<div className="sp-card" onclick="openModal('tt')"><iconify-icon className="sp-icon" icon="solar:tennis-linear"></iconify-icon>
<div className="sp-title">Table Tennis</div>
<div className="sp-fee">₹100</div>
</div>
<div className="sp-card" onclick="openModal('darts')"><iconify-icon className="sp-icon" icon="solar:record-circle-linear"></iconify-icon>
<div className="sp-title">Darts</div>
<div className="sp-fee">₹50</div>
</div>
<div className="sp-card" onclick="openModal('badminton')"><iconify-icon className="sp-icon" icon="solar:racket-linear"></iconify-icon>
<div className="sp-title">Badminton</div>
<div className="sp-fee">₹100</div>
</div>
</div>
</div>
</div>
</div>

<div className="page" id="register">
<div className="wrap">
<div className="sec-head">
<div>
<div className="sec-label">How to participate</div>
<h1 className="sec-title">Registration</h1>
</div>
</div>
<div className="reg-grid">
<div>
<div className="sec-label" style={{marginBottom: '1.1rem'}}>Process</div>
<div className="steps-grid">
<div className="step">
<div className="step-num">01</div>
<div>
<div className="step-t">Check Details</div>
<div className="step-d">Verify event rules and team size requirements before proceeding.
                                    </div>
</div>
</div>
<div className="step">
<div className="step-num">02</div>
<div>
<div className="step-t">Scan &amp; Pay</div>
<div className="step-d">Use the QR. Mention Participant Name &amp; Event in your payment
                                        remarks.</div>
</div>
</div>
<div className="step">
<div className="step-num">03</div>
<div>
<div className="step-t">Fill Form</div>
<div className="step-d">Complete the online registration form via the provided event
                                        link.</div>
</div>
</div>
<div className="step">
<div className="step-num">04</div>
<div>
<div className="step-t">Send Screenshot</div>
<div className="step-d">Forward payment proof to the Faculty Incharge to confirm your
                                        spot.</div>
</div>
</div>
</div>
<div className="sec-label" style={{marginBottom: '1.1rem'}}>General Rules</div>
<div className="rules-block">
<ul className="rules-list">
<li>Open to recognized colleges &amp; universities</li>
<li>Valid College ID is mandatory</li>
<li>Report 30 minutes before your event</li>
<li>Judges' decision is final and binding</li>
<li>Misconduct leads to immediate disqualification</li>
<li>No refund of registration fees</li>
<li>Theme violation results in penalty</li>
<li>One participant = one team per event</li>
</ul>
</div>
</div>
<div className="reg-side">
<div className="qr-box">
<div className="qr-ph"><iconify-icon icon="solar:qr-code-linear"></iconify-icon></div>
<div className="qr-lbl">Scan to Pay</div>
<div className="qr-sub">MILAAP 2026 Official UPI</div>
<button className="btn-primary" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLScdU-V1p97Ff79fYfP5OQ7PpKoC-SPlBANnGfL-k_mgGc_p6w/viewform','_blank')" style={{width: '100%'}}>Open Registration Form ↗</button>
</div>
<div className="fee-table">
<div className="fee-head">Fee Structure</div>
<div className="fee-row">
<span className="fee-lbl">Management Solo (Tambola, HR, Finance)</span><span className="fee-val">₹50</span>
</div>
<div className="fee-row">
<span className="fee-lbl">ChronoCart — Solo / Group</span><span className="fee-val">₹50 / ₹100</span>
</div>
<div className="fee-row">
<span className="fee-lbl">Poetry, Reels, Samay Snap</span><span className="fee-val">₹100 Solo</span>
</div>
<div className="fee-row">
<span className="fee-lbl">KAALDHARA Dance — Solo / Group</span><span className="fee-val">₹100 / ₹200</span>
</div>
<div className="fee-row">
<span className="fee-lbl">Samaychakra Drama — Group only</span><span className="fee-val">₹200</span>
</div>
<div className="fee-row">
<span className="fee-lbl">Chess / Table Tennis / Badminton</span><span className="fee-val">₹100 Solo</span>
</div>
<div className="fee-row">
<span className="fee-lbl">Carrom / Darts</span><span className="fee-val">₹50 Solo</span></div>
<div className="fee-row">
<span className="fee-lbl">BGMI — Solo / Group</span><span className="fee-val">₹100 / ₹200</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page" id="contact">
<div className="wrap">
<div className="sec-head">
<div>
<div className="sec-label">Reach out</div>
<h1 className="sec-title">Get in Touch</h1>
<p style={{color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.5rem'}}>For queries, sponsorship, or
                            stall booking.</p>
</div>
</div>
<div className="ct-grid">
<div>
<div className="sec-label" style={{marginBottom: '1.2rem'}}>Event Coordinators</div>
<div className="ct-list">
<div className="ct-item">
<div className="ct-info">
<div className="ct-av">BB</div>
<div>
<div className="ct-name">Prof. Bharti Bhojwani</div>
<div className="ct-role">Faculty Incharge</div>
</div>
</div><a className="ct-phone" href="tel:9511984490">9511 984 490</a>
</div>
<div className="ct-item">
<div className="ct-info">
<div className="ct-av">GA</div>
<div>
<div className="ct-name">Gahana Aishani</div>
<div className="ct-role">Student Coordinator</div>
</div>
</div><a className="ct-phone" href="tel:7058603784">7058 603 784</a>
</div>
<div className="ct-item">
<div className="ct-info">
<div className="ct-av">IJ</div>
<div>
<div className="ct-name">Ishita Jadhav</div>
<div className="ct-role">Student Coordinator</div>
</div>
</div><a className="ct-phone" href="tel:7719044656">7719 044 656</a>
</div>
<div className="ct-item">
<div className="ct-info">
<div className="ct-av">AS</div>
<div>
<div className="ct-name">Alshifa Shaikh</div>
<div className="ct-role">Student Asst. Coordinator</div>
</div>
</div><a className="ct-phone" href="tel:7620692706">7620 692 706</a>
</div>
</div>
</div>
<div className="stall-box">
<div className="sec-label">Stall Booking</div>
<div className="stall-title">Promote Your Business</div>
<p className="stall-desc">Brand, startup, or local business? MILAAP gives you direct access to
                            energetic youth and professionals. Food, Clothing, Accessories, Career Services — all
                            welcome.</p>
<ul className="stall-perks">
<li>Direct student access at scale</li>
<li>High footfall exposure throughout the event</li>
<li>On-spot sales opportunity</li>
</ul>
<button className="btn-primary" onclick="go('contact')" style={{width: '100%'}}>Enquire for Stalls</button>
</div>
</div>

<div style={{marginTop: '3rem'}}>
<div className="sec-label" style={{marginBottom: '1.2rem'}}>Venue</div>
<div style={{background: 'linear-gradient(135deg,rgba(201,168,76,0.06),rgba(124,92,252,0.03))', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '16px', overflow: 'hidden'}}>
<div style={{padding: '1.8rem 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid rgba(201,168,76,0.15)'}}>
<div>
<div style={{fontFamily: '\'Playfair Display\',serif', fontSize: '1.1rem', fontWeight: '700', color: 'var(--white)', marginBottom: '0.3rem'}}>
                                    H. &amp; G.H. Mansukhani Institute of Management</div>
<div style={{fontSize: '0.82rem', color: 'var(--muted)', lineHeight: '1.6'}}>Smt. C.H.M. Campus,
                                    Opposite Ulhasnagar Railway Station, Ulhasnagar-3</div>
<div style={{fontFamily: '\'DM Mono\',monospace', fontSize: '0.65rem', color: 'var(--gold)', marginTop: '0.5rem', letterSpacing: '0.06em'}}>
                                    📅 7th &amp; 8th March 2026</div>
</div>
<a className="btn-primary" href="https://maps.app.goo.gl/4CFUtHk7sQALhtc68" style={{textDecoration: 'none', whiteSpace: 'nowrap'}} target="_blank">📍 Get Directions ↗</a>
</div>
<div className="venue-map-wrap" style={{borderRadius: '0', border: 'none', margin: '0'}}>
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2!2d73.1534!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7952b9a3c5555%3A0x7b1a9e3b2c4d5e6f!2sH.+%26+G.H.+Mansukhani+Institute+of+Management!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" title="MILAAP 2026 Venue — Ulhasnagar">
</iframe>
</div>
</div>
</div>
</div>
</div>
<footer>
<div className="ft-brand">H. &amp; G.H. Mansukhani Institute of Management · MILAAP 2026</div>
<div className="ft-credit">Developed by Vinay Bharambe, FYMMS</div>
</footer>

<div className="modal-bd" id="modal-bd" onclick="bdClick(event)">
<div className="modal-box">
<div className="modal-head">
<div className="modal-head-t" id="m-title"></div>
<button className="modal-close" onclick="closeModal()"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="modal-body" id="m-body"></div>
<div className="modal-foot">
<button className="btn-ghost" onclick="closeModal()">Close</button>
<button className="btn-primary" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLScdU-V1p97Ff79fYfP5OQ7PpKoC-SPlBANnGfL-k_mgGc_p6w/viewform','_blank')">Register Now ↗</button>
</div>
</div>
</div>

</main>
    </>
  );
}
