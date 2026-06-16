import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`; });
function animateRing() { rx += (mx - rx - 18) * 0.12; ry += (my - ry - 18) * 0.12; ring.style.transform = `translate(${rx}px, ${ry}px)`; requestAnimationFrame(animateRing); }
animateRing();

// Add hover states for interactive elements
document.querySelectorAll('a, button, .faq-question, .service-item, .gallery-item, .testimonial-card, .custom-select-trigger, .custom-option, input, textarea').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});

// NAV
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 60));

// REVEAL ANIMATIONS
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } })
}, { threshold: 0.08 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));

// FAQ ACCORDION
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// CUSTOM DROPDOWN
const selectWrapper = document.getElementById('sessionSelect');
const selectLabel = document.getElementById('selectLabel');
const hiddenInput = document.getElementById('sessionTypeValue');

function toggleDropdown() {
  selectWrapper.classList.toggle('open');
}

function selectOption(val) {
  selectLabel.textContent = val;
  selectLabel.parentElement.classList.add('filled');
  hiddenInput.value = val;
  selectWrapper.classList.remove('open');
}

document.addEventListener('click', (e) => {
  if (!selectWrapper.contains(e.target)) {
    selectWrapper.classList.remove('open');
  }
});

// FORM SUBMISSION
function submitForm() {
  document.getElementById('form-area').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="cursor" id="cursor"></div>
<div className="cursor-ring" id="cursorRing"></div>

<nav id="navbar">
<a className="nav-logo tracking-tight" href="#">Yary Tejeda</a>
<ul className="nav-links">
<li><a href="#gallery">Work</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#testimonials">Reviews</a></li>
<li><a className="nav-cta" href="#contact">Book a Session</a></li>
</ul>
</nav>

<section id="hero">
<div className="hero-left">
<div className="hero-counter">{ 00 } — Buda, Texas</div>
<h1 className="hero-title">
<span className="line">Yary</span>
<span className="line italic">Tejeda</span>
<span className="line">Photography</span>
</h1>
<p className="hero-sub">Capturing the moments your heart will never want to forget — from first smiles to forever vows. Based in Buda, TX · Serving Greater Austin.</p>
<div className="hero-actions">
<a className="btn-primary" href="#contact">Book a Session</a>
<a className="btn-ghost" href="#gallery">See the work →</a>
</div>
</div>
<div className="hero-right">
<div className="hero-photos">
<div className="hero-photo"><img alt="Mother and baby sharing a warm moment" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&amp;q=85"/></div>
<div className="hero-photo"><img alt="Soft natural light portrait of a woman" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&amp;q=85"/></div>
<div className="hero-photo"><img alt="Smiling baby looking at camera" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&amp;q=85"/></div>
</div>
<div className="hero-overlay"></div>
</div>
<div className="hero-location">Buda · TX · Greater Austin</div>
</section>

<section id="about">
<div className="about-inner">
<div className="section-tag reveal">
<span className="section-tag-num">{ 01 }</span>
<div className="section-tag-line"></div>
<span className="section-tag-label">About</span>
</div>
<p className="about-big reveal">Hi, I'm Yary — a photographer based in <em>Buda, Texas,</em> passionate about freezing the moments that matter most. Every session is a story waiting to be told.</p>
<div className="about-grid">
<div className="reveal reveal-delay-1">
<div className="about-stat-num">5★</div>
<div className="about-stat-label">Google Rating</div>
</div>
<div className="reveal reveal-delay-2">
<div className="about-stat-num">100+</div>
<div className="about-stat-label">Sessions captured</div>
</div>
<div className="reveal reveal-delay-3">
<div className="about-stat-num">Buda, TX</div>
<div className="about-stat-label">Serving Greater Austin</div>
</div>
</div>
</div>
</section>

<section id="gallery">
<div className="gallery-header reveal">
<h2 className="gallery-title">Recent<br/><em>Stories</em></h2>
<p className="gallery-sub">A few highlights from the families, babies, and moments I've been trusted to capture.</p>
</div>
<div className="gallery-grid">
<div className="gallery-item g1 reveal"><img alt="Family Session" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1200&amp;q=85"/><div className="caption">Family Session · 2025</div></div>
<div className="gallery-item g2 reveal reveal-delay-1"><img alt="First Birthday" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&amp;q=85"/><div className="caption">First Birthday · 2025</div></div>
<div className="gallery-item g3 reveal reveal-delay-2"><img alt="Cake Smash" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&amp;q=85"/><div className="caption">Cake Smash · 2024</div></div>
<div className="gallery-item g4 reveal reveal-delay-1"><img alt="Maternity Session" src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&amp;q=85"/><div className="caption">Maternity · 2025</div></div>
<div className="gallery-item g5 reveal reveal-delay-2"><img alt="Portrait" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&amp;q=85"/><div className="caption">Portrait · 2024</div></div>
<div className="gallery-item g6 reveal"><img alt="Wedding Moments" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&amp;q=85"/><div className="caption">Wedding · 2024</div></div>
<div className="gallery-item g7 reveal reveal-delay-1"><img alt="Couple Session" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&amp;q=85"/><div className="caption">Couple Session · 2025</div></div>
</div>
<div className="gallery-cta reveal"><a href="#contact">See more work →</a></div>
</section>

<section id="services">
<div className="services-inner">
<div className="section-tag reveal">
<span className="section-tag-num">{ 03 }</span>
<div className="section-tag-line"></div>
<span className="section-tag-label">Services</span>
</div>
<div className="services-header">
<h2 className="services-title reveal-left">What<br/><em>I Offer</em></h2>
<p className="services-intro reveal-right">Every milestone deserves to be remembered. Here's how I can help you hold on to the moments that matter most.</p>
</div>
<div className="services-list">
<div className="service-item reveal">
<span className="service-num">01</span>
<div className="service-content">
<div className="service-name">Baby &amp; Cake Smash</div>
<div className="service-desc">First birthdays, cake smash sessions, and milestone moments. Patient, playful, and full of love — just like your little one.</div>
</div>
<div className="service-photo"><img alt="Baby milestone session" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=300&amp;q=80"/></div>
<div className="service-price">Get a quote</div>
</div>
<div className="service-item reveal">
<span className="service-num">02</span>
<div className="service-content">
<div className="service-name">Family Portraits</div>
<div className="service-desc">Lifestyle or studio-style sessions for families of all sizes. Natural, genuine, and absolutely yours.</div>
</div>
<div className="service-photo"><img alt="Family session" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&amp;q=80"/></div>
<div className="service-price">Get a quote</div>
</div>
<div className="service-item reveal">
<span className="service-num">03</span>
<div className="service-content">
<div className="service-name">Maternity Session</div>
<div className="service-desc">Celebrating the most beautiful chapter. Soft, intimate, and timeless images of you and your growing family.</div>
</div>
<div className="service-photo"><img alt="Maternity session" src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=300&amp;q=80"/></div>
<div className="service-price">Get a quote</div>
</div>
<div className="service-item reveal">
<span className="service-num">04</span>
<div className="service-content">
<div className="service-name">Portrait Session</div>
<div className="service-desc">Individual portraits with natural light and real emotion. No stiff poses — just you, comfortable and confident.</div>
</div>
<div className="service-photo"><img alt="Individual portrait" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&amp;q=80"/></div>
<div className="service-price">Get a quote</div>
</div>
<div className="service-item reveal">
<span className="service-num">05</span>
<div className="service-content">
<div className="service-name">Weddings &amp; Events</div>
<div className="service-desc">Full or half-day wedding coverage. Every vow, every tear, every laugh — captured with care and intention.</div>
</div>
<div className="service-photo"><img alt="Wedding coverage" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&amp;q=80"/></div>
<div className="service-price">Get a quote</div>
</div>
</div>
</div>
</section>

<section id="testimonials">
<div className="testimonials-inner">
<div className="section-tag reveal">
<span className="section-tag-num">{ 04 }</span>
<div className="section-tag-line"></div>
<span className="section-tag-label">Testimonials</span>
</div>
<blockquote className="testimonial-big reveal">"One of the best experiences of my life. Yary is a love of a person — she guided me through every pose and made every photo feel unique and beautiful."</blockquote>
<div className="testimonial-author reveal">— Arlen A. · Portrait Session</div>
<div className="testimonials-grid">
<div className="testimonial-card reveal reveal-delay-1">
<div className="tc-stars">★★★★★</div>
<p className="tc-text">"Yary is super kind and patient. My baby's cake smash session came out incredibly beautiful. We are so happy with the results and the whole experience. Would absolutely recommend her."</p>
<div className="tc-author">
<div className="tc-avatar"><img alt="Client Avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;q=80"/></div>
<div><div className="tc-name">Nelyari Q.</div><div className="tc-meta">Cake Smash Session · Google Review</div></div>
</div>
</div>
<div className="testimonial-card reveal reveal-delay-2">
<div className="tc-stars">★★★★★</div>
<p className="tc-text">"A simply beautiful experience. From the very first moment she made us feel so comfortable — especially my daughter. She captured my baby's first birthday with so much love. You can tell she truly loves what she does."</p>
<div className="tc-author">
<div className="tc-avatar"><img alt="Client Avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/></div>
<div><div className="tc-name">Nati G.</div><div className="tc-meta">First Birthday Session · Google Review</div></div>
</div>
</div>
</div>
</div>
</section>

<section id="faq">
<div className="faq-inner">
<div className="section-tag reveal">
<span className="section-tag-num">{ 05 }</span>
<div className="section-tag-line"></div>
<span className="section-tag-label">FAQ</span>
</div>
<div className="faq-header reveal">
<h2 className="faq-title">Frequently<br/><em>Asked</em></h2>
</div>
<div className="faq-list">
<div className="faq-item reveal">
<div className="faq-question" onclick="toggleFaq(this)">
<span className="faq-q-text">How far in advance should I book?</span>
<div className="faq-toggle">+</div>
</div>
<div className="faq-answer"><div className="faq-answer-inner">For family and portrait sessions, 2–3 weeks is usually enough. For weddings, I recommend booking at least 6 months ahead to secure your date.</div></div>
</div>
<div className="faq-item reveal">
<div className="faq-question" onclick="toggleFaq(this)">
<span className="faq-q-text">Where do sessions take place?</span>
<div className="faq-toggle">+</div>
</div>
<div className="faq-answer"><div className="faq-answer-inner">Outdoor locations in and around Buda and the Greater Austin area — parks, fields, urban spots. I also shoot at your home for a more personal feel. Studio options available on request.</div></div>
</div>
<div className="faq-item reveal">
<div className="faq-question" onclick="toggleFaq(this)">
<span className="faq-q-text">When will I receive my photos?</span>
<div className="faq-toggle">+</div>
</div>
<div className="faq-answer"><div className="faq-answer-inner">Portrait and family sessions are ready within 1–2 weeks. Weddings within 4 weeks. You'll receive a private online gallery with full download access.</div></div>
</div>
<div className="faq-item reveal">
<div className="faq-question" onclick="toggleFaq(this)">
<span className="faq-q-text">Do you speak Spanish?</span>
<div className="faq-toggle">+</div>
</div>
<div className="faq-answer"><div className="faq-answer-inner">¡Sí! I'm fully bilingual. Many of my clients are Spanish-speaking families and I love being able to connect in their language.</div></div>
</div>
<div className="faq-item reveal">
<div className="faq-question" onclick="toggleFaq(this)">
<span className="faq-q-text">How do I book?</span>
<div className="faq-toggle">+</div>
</div>
<div className="faq-answer"><div className="faq-answer-inner">Fill out the contact form below or send me a message on Instagram @yary_tejedaphotography. I'll reply within 24 hours.</div></div>
</div>
</div>
</div>
</section>

<section id="contact">
<div className="contact-inner">
<div className="contact-left reveal-left">
<div className="contact-label">Get in touch</div>
<h2 className="contact-title">Ready to<br/><em>tell your story?</em></h2>
<p className="contact-desc">Whether it's your baby's first birthday, a family session, or your wedding day — I'd love to hear about your plans. I respond within 24 hours.</p>
<div className="contact-details">
<div className="contact-detail">
<div className="contact-detail-icon">
<iconify-icon height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="contact-detail-label">Based in</div>
<div className="contact-detail-value">Buda, TX · Serving Greater Austin</div>
</div>
</div>
<div className="contact-detail">
<div className="contact-detail-icon">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="contact-detail-label">Email</div>
<div className="contact-detail-value">yarytejedaphotography@gmail.com</div>
</div>
</div>
<div className="contact-detail">
<div className="contact-detail-icon">
<iconify-icon height="20" icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="contact-detail-label">Instagram</div>
<div className="contact-detail-value">@yary_tejedaphotography</div>
</div>
</div>
</div>
</div>
<div className="contact-form reveal-right">
<div id="form-area">
<div className="form-row">
<div className="form-group"><label>First Name</label><input placeholder="Maria" type="text"/></div>
<div className="form-group"><label>Last Name</label><input placeholder="Garcia" type="text"/></div>
</div>
<div className="form-group"><label>Email</label><input placeholder="hello@email.com" type="email"/></div>
<div className="form-group"><label>Phone</label><input placeholder="(512) 647-8370" type="tel"/></div>
<div className="form-group">
<label>Session Type</label>
<div className="custom-select-wrapper" id="sessionSelect">
<div className="custom-select-trigger" onclick="toggleDropdown()">
<span id="selectLabel">What are you looking for?</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="custom-options">
<div className="custom-option" onclick="selectOption('Baby &amp; Cake Smash')">Baby &amp; Cake Smash</div>
<div className="custom-option" onclick="selectOption('Family Portraits')">Family Portraits</div>
<div className="custom-option" onclick="selectOption('Maternity Session')">Maternity Session</div>
<div className="custom-option" onclick="selectOption('Portrait Session')">Portrait Session</div>
<div className="custom-option" onclick="selectOption('Wedding / Event')">Wedding / Event</div>
<div className="custom-option" onclick="selectOption('Other')">Other</div>
</div>
</div>
<input id="sessionTypeValue" name="sessionType" type="hidden"/>
</div>
<div className="form-group"><label>Preferred Date</label><input placeholder="August 2025 — flexible" type="text"/></div>
<div className="form-group"><label>Tell me about your session</label><textarea placeholder="A little about your family, your vision, or what matters most to you..."></textarea></div>
<button className="form-submit" onclick="submitForm()">Send Message →</button>
</div>
<div className="form-success" id="form-success">
        Message received.<br/>
<span style={{fontSize: '0.875rem', fontStyle: 'normal', color: 'var(--muted)', fontFamily: 'var(--font-body)'}}>I'll be in touch within 24 hours — can't wait to hear your story.</span>
</div>
</div>
</div>
</section>

<section id="cta-final">
<div className="cta-final-inner">
<div className="section-tag reveal" style={{justifyContent: 'center', marginBottom: '3rem'}}>
<span className="section-tag-num">{ 08 }</span>
<div className="section-tag-line" style={{maxWidth: '4rem'}}></div>
<span className="section-tag-label">Final</span>
</div>
<p className="cta-label reveal">Ready to start?</p>
<h2 className="cta-big reveal">Ready to capture<br/><span>your story?</span></h2>
<div className="cta-actions reveal">
<a className="btn-primary" href="#contact">Book a Session</a>
<a className="btn-ghost" href="mailto:yarytejedaphotography@gmail.com">Send an email →</a>
</div>
</div>
<div className="cta-marquee">
<div className="cta-marquee-track">
<span>Baby &amp; Cake Smash</span><span>Family Portraits</span><span>Maternity Sessions</span><span>Portrait Photography</span><span>Weddings &amp; Events</span><span>Buda Texas</span>
<span>Baby &amp; Cake Smash</span><span>Family Portraits</span><span>Maternity Sessions</span><span>Portrait Photography</span><span>Weddings &amp; Events</span><span>Buda Texas</span>
</div>
</div>
</section>

<footer>
<a className="footer-logo tracking-tight" href="#">Yary Tejeda</a>
<div className="footer-center">© 2025 Yary Tejeda Photography · Buda, Texas</div>
<div className="footer-links">
<a href="https://instagram.com/yary_tejedaphotography" target="_blank">Instagram</a>
<a href="#contact">Contact</a>
</div>
</footer>


    </>
  );
}
