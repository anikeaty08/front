import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    gsap.registerPlugin(ScrollTrigger);

!function(){const p=document.getElementById('pre'),n=document.getElementById('pn');
gsap.to('.pre b,.pre small',{opacity:1,duration:.4,stagger:.08,delay:.1});
let c=0,iv=setInterval(()=>{c+=~~(Math.random()*8)+4;if(c>=100){c=100;clearInterval(iv);
gsap.to('.pre b,.pre small',{opacity:0,duration:.25,stagger:.04,delay:.25,onComplete(){p.classList.add('done');document.body.classList.add('ok');go()}})}n.textContent=c},25)}();

addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('s',scrollY>40));
document.querySelectorAll('.faq__q').forEach(q=>q.onclick=()=>{const i=q.parentElement;document.querySelectorAll('.faq__i').forEach(x=>{if(x!==i)x.classList.remove('open')});i.classList.toggle('open')});
gsap.to('#cr',{rotationY:360,duration:24,ease:'none',repeat:-1,transformStyle:'preserve-3d'});

!function(){const d=document.getElementById('dots');
const cols=innerWidth>=768?64:32,rows=12;
const bars=[];
for(let c=0;c<cols;c++){const bar=document.createElement('div');bar.className='dots__bar';
const dots=[];for(let r=0;r<rows;r++){const dot=document.createElement('div');dot.className='dot';bar.appendChild(dot);dots.push(dot)}
d.appendChild(bar);bars.push(dots)}
// Animate like equalizer
function pump(){bars.forEach((dots,ci)=>{
  const level=Math.floor(Math.random()*rows*.8)+1;
  const wave=Math.sin(ci*.3+Date.now()*.002)*3;
  const h=Math.max(1,Math.min(rows,Math.floor(level+wave)));
  dots.forEach((dot,ri)=>{
    if(ri<h){dot.classList.add('on');dot.classList.toggle('mid',ri<h-2)}
    else{dot.classList.remove('on','mid')}
  })});requestAnimationFrame(pump)}pump()}();

function go(){
  document.querySelectorAll('[data-flash]').forEach(el=>{
    const w=[];el.childNodes.forEach(n=>{
      if(n.nodeType===3)n.textContent.trim().split(/\s+/).filter(Boolean).forEach(t=>w.push({t,d:0}));
      else if(n.tagName==='EM')n.textContent.trim().split(/\s+/).filter(Boolean).forEach(t=>w.push({t,d:1}));
    });if(!w.length)return;
    el.innerHTML=w.map(x=>`<span style="display:inline-block;${x.d?'font-weight:300;font-style:normal;':''}opacity:0">${x.t}</span>`).join(' ');
    ScrollTrigger.create({trigger:el,start:'top 90%',once:true,onEnter(){
      el.querySelectorAll('span').forEach((s,i)=>{
        gsap.timeline({delay:i*.12})
        .to(s,{opacity:1,color:'var(--t)',duration:.3,ease:'power2.out'})
        .to(s,{color:'var(--a)',duration:.15})
        .to(s,{color:s.style.fontWeight==='300'?'var(--tx2)':'var(--tx)',duration:.4,ease:'power1.out'})
      })}});
  });

  gsap.utils.toArray('.b1,.b2,.b3,.b4').forEach((c,i)=>{
    gsap.fromTo(c,{y:30,opacity:0},{y:0,opacity:1,duration:.6,delay:i*.1,ease:'power2.out',scrollTrigger:{trigger:c,start:'top 92%',once:true}})});
  // Scroll-pinned stacking step cards
  if(window.innerWidth>=768){
    document.querySelectorAll('.step__slide').forEach((slide,i,all)=>{
      const step=slide.querySelector('.step');
      if(i<all.length-1){
        gsap.to(step,{
          scale:.9,
          rotationX:6,
          opacity:0,
          ease:'none',
          scrollTrigger:{trigger:slide,pin:true,start:'top top',end:'+=80%',scrub:1}
        });
      } else {
        // Last card: no pin, just show
      }
    });
  }
  gsap.utils.toArray('.faq__i').forEach((f,i)=>{
    gsap.fromTo(f,{y:10,opacity:0},{y:0,opacity:1,duration:.35,delay:i*.05,ease:'power2.out',scrollTrigger:{trigger:f,start:'top 94%',once:true}})});
  // Ensure anything already in view is visible
  ScrollTrigger.refresh();

  // 3D tilt on bento cards
  document.querySelectorAll('.b1,.b2,.b3').forEach(card=>{
    card.style.transformStyle='preserve-3d';
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      gsap.to(card,{rotateY:x*6,rotateX:-y*4,duration:.3,ease:'power2.out'});
    });
    card.addEventListener('mouseleave',()=>{
      gsap.to(card,{rotateY:0,rotateX:0,duration:.5,ease:'elastic.out(1,.6)'});
    });
  });

  // Cursor glow follower
  const glow=document.createElement('div');
  glow.style.cssText='position:fixed;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(45,212,191,.06),transparent 70%);pointer-events:none;z-index:9997;transform:translate(-50%,-50%);transition:opacity .3s';
  glow.style.opacity='0';
  document.body.appendChild(glow);
  document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';glow.style.opacity='1'});
  document.addEventListener('mouseleave',()=>{glow.style.opacity='0'});
}
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pre" id="pre"><b id="pn">0</b><small>synthara</small></div>
<nav id="nav">
<a className="logo" href="#">synthara</a>
<div className="nr"><a className="nl" href="#feat">Features</a><a className="nl" href="#how">How it works</a><a className="nl" href="#faq">FAQ</a><button className="btn">Get started</button></div>
</nav>
<section className="hero">
<div className="hero__main">
<div>
<div className="hero__tag">AI Music Production</div>
<h1 className="hero__h" data-flash="">Your sound, <em>instantly composed.</em></h1>
</div>
</div>
<div className="car">
<div className="car__r" id="cr">
<div className="car__c" style={{transform: 'rotateY(0deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=320&amp;h=420&amp;fit=crop"/>
</div>
<div className="car__c" style={{transform: 'rotateY(45deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=320&amp;h=420&amp;fit=crop"/>
</div>
<div className="car__c" style={{transform: 'rotateY(90deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=320&amp;h=420&amp;fit=crop"/>
</div>
<div className="car__c" style={{transform: 'rotateY(135deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=320&amp;h=420&amp;fit=crop"/>
</div>
<div className="car__c" style={{transform: 'rotateY(180deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=320&amp;h=420&amp;fit=crop"/>
</div>
<div className="car__c" style={{transform: 'rotateY(225deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=320&amp;h=420&amp;fit=crop"/>
</div>
<div className="car__c" style={{transform: 'rotateY(270deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=320&amp;h=420&amp;fit=crop"/>
</div>
<div className="car__c" style={{transform: 'rotateY(315deg) translateZ(250px)'}}><img alt="" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=320&amp;h=420&amp;fit=crop"/>
</div>
</div>
</div>
<div className="tk">
<div className="tk__r">
<span className="tk__i">Film Scores</span><span className="tk__i">Podcasts</span><span className="tk__i">Lo-fi Beats</span><span className="tk__i">Ambient</span><span className="tk__i">Game Audio</span><span className="tk__i">Jingles</span><span className="tk__i">Sound Effects</span><span className="tk__i">Ad Music</span>
<span className="tk__i">Film Scores</span><span className="tk__i">Podcasts</span><span className="tk__i">Lo-fi Beats</span><span className="tk__i">Ambient</span><span className="tk__i">Game Audio</span><span className="tk__i">Jingles</span><span className="tk__i">Sound Effects</span><span className="tk__i">Ad Music</span>
<span className="tk__i">Film Scores</span><span className="tk__i">Podcasts</span><span className="tk__i">Lo-fi Beats</span><span className="tk__i">Ambient</span><span className="tk__i">Game Audio</span><span className="tk__i">Jingles</span><span className="tk__i">Sound Effects</span><span className="tk__i">Ad Music</span>
<span className="tk__i">Film Scores</span><span className="tk__i">Podcasts</span><span className="tk__i">Lo-fi Beats</span><span className="tk__i">Ambient</span><span className="tk__i">Game Audio</span><span className="tk__i">Jingles</span><span className="tk__i">Sound Effects</span><span className="tk__i">Ad Music</span>
</div>
</div>
</section>
<div className="lt"></div>

<div className="block-wrap">
<div className="block" id="feat">
<div className="block__top">
<div className="block__tag">What you can create</div>
<h2 className="block__h" data-flash="">Studio-grade audio.<br/>Made by AI.</h2>
</div>
</div>
<div className="bento">
<div className="b1">
<img alt="Concert" className="b__img" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&amp;h=450&amp;fit=crop"/>
<div className="b__body">
<div className="b__row">
<div className="b__dot"></div>
<div className="b__label">AI Track Composition</div>
</div>
<div className="b__title">Full arrangements, without the session musicians.</div>
<p className="b__copy">Describe a mood and get a complete, multi-layered track — strings, drums, synths, all mixed
            and mastered.</p>
<div className="b__btn"><a className="btn" href="#">Get started</a></div>
</div>
</div>
<div className="b2">
<img alt="Studio monitors" className="b__img-tall" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&amp;h=380&amp;fit=crop"/>
<div className="b__body">
<div className="b__row">
<div className="b__dot"></div>
<div className="b__label">AI Sound Design</div>
</div>
<div className="b__title">Your concept, new soundscapes on demand.</div>
<p className="b__copy">Upload a reference track and we build unique textures and ambient layers around your
            direction.</p>
</div>
</div>
<div className="b3">
<img alt="Mic" className="b__img-tall" src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&amp;h=380&amp;fit=crop"/>
<div className="b__body">
<div className="b__row">
<div className="b__dot"></div>
<div className="b__label">AI Audio Production</div>
</div>
<div className="b__title">Ad-ready audio in minutes.</div>
<p className="b__copy">Create on-brand jingles, podcast intros, and campaign tracks for any platform.</p>
</div>
</div>
<div className="b4">
<img alt="Concert" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1000&amp;h=400&amp;fit=crop"/>
<div className="b4__t">
<div className="b4__tag">Built for creators</div>
<div className="b4__h">From bedroom producers to enterprise teams.</div>
<p className="b4__p">Whether you're scoring a film or building a brand playlist, Synthara adapts.</p>
</div>
</div>
</div>
</div>
<div className="ln"></div>

<div className="how-wrap">
<section className="how" id="how">
<div className="how__tag">How It Works</div>
<div className="how__row">
<div className="how__ai" data-flash="">AI that</div>
<div className="how__col">
<div className="how__scroll">
<div className="how__si">Composes tracks</div>
<div className="how__si">Designs sounds</div>
<div className="how__si">Stays on-brand</div>
<div className="how__si">Composes tracks</div>
</div>
</div>
<a className="btn" href="#">Get started</a>
</div>
</section>
</div>
<div className="lt"></div>
<div className="trust">
<div className="trust__l">Trusted By</div>
<div className="trust__r">
<span className="trust__i">LUNAR STUDIOS</span><span className="trust__i">VOXEL MEDIA</span><span className="trust__i">PRISM AUDIO</span><span className="trust__i">ECHO LABS</span><span className="trust__i">DRIFT CREATIVE</span><span className="trust__i">NOVA SOUND</span><span className="trust__i">HELIX MUSIC</span><span className="trust__i">ARCWAVE</span><span className="trust__i">SONIQ</span><span className="trust__i">WAVEFORM CO</span>
<span className="trust__i">LUNAR STUDIOS</span><span className="trust__i">VOXEL MEDIA</span><span className="trust__i">PRISM AUDIO</span><span className="trust__i">ECHO LABS</span><span className="trust__i">DRIFT CREATIVE</span><span className="trust__i">NOVA SOUND</span><span className="trust__i">HELIX MUSIC</span><span className="trust__i">ARCWAVE</span><span className="trust__i">SONIQ</span><span className="trust__i">WAVEFORM CO</span>
<span className="trust__i">LUNAR STUDIOS</span><span className="trust__i">VOXEL MEDIA</span><span className="trust__i">PRISM AUDIO</span><span className="trust__i">ECHO LABS</span><span className="trust__i">DRIFT CREATIVE</span><span className="trust__i">NOVA SOUND</span><span className="trust__i">HELIX MUSIC</span><span className="trust__i">ARCWAVE</span><span className="trust__i">SONIQ</span><span className="trust__i">WAVEFORM CO</span>
<span className="trust__i">LUNAR STUDIOS</span><span className="trust__i">VOXEL MEDIA</span><span className="trust__i">PRISM AUDIO</span><span className="trust__i">ECHO LABS</span><span className="trust__i">DRIFT CREATIVE</span><span className="trust__i">NOVA SOUND</span><span className="trust__i">HELIX MUSIC</span><span className="trust__i">ARCWAVE</span><span className="trust__i">SONIQ</span><span className="trust__i">WAVEFORM CO</span>
</div>
</div>
<div className="dots-wrap">
<div className="dots" id="dots"></div>
</div>
<div className="lt"></div>

<div className="steps-wrap">
<section className="steps" id="steps">
<div className="steps__top">
<h2 className="steps__h" data-flash="">From concept to tracks<br/>in four steps.</h2>
<div className="steps__sub">Sign up free and supercharge<br/>your audio workflow.</div>
</div>
<div className="steps__list">
<div className="step__slide">
<div className="step">
<div className="step__top">
<div className="step__left">
<div className="step__head">
<div className="step__code">(SI)</div>
</div>
<div className="step__label">
<div className="step__dot"></div>
<div className="step__cat">Brand Setup</div>
</div>
<div className="step__t">Set your sonic<br/>identity.</div>
<p className="step__desc">Upload your brand references and let Synthara learn your sound DNA before
                  generating anything.</p>
<div className="step__info">
<div className="step__info-col">
<div className="step__tag">50+ genre presets</div>
<p className="step__p">Store your brand sounds and tonal preferences.</p>
</div>
<div className="step__info-col">
<div className="step__tag">Custom mood controls</div>
<p className="step__p">Define energy, tempo, and emotion for every generation.</p>
</div>
</div>
<div className="step__cta"><a className="btn" href="#">Get started</a></div>
</div>
<div className="step__n-wrap">
<div className="step__n">01</div>
<div className="step__n-line"></div>
</div>
</div>
<div className="step__divider"></div>
<div className="step__images">
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1563330232-57114bb0823c?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Presets</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Studio</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Monitors</div>
</div>
</div>
</div>
</div>
<div className="step__slide">
<div className="step">
<div className="step__top">
<div className="step__left">
<div className="step__head">
<div className="step__code">(GV)</div>
</div>
<div className="step__label">
<div className="step__dot"></div>
<div className="step__cat">Generation</div>
</div>
<div className="step__t">AI generates<br/>variations.</div>
<p className="step__desc">Describe a direction or let AI surprise you. Multiple takes, different
                  arrangements, all on-brand.</p>
<div className="step__info">
<div className="step__info-col">
<div className="step__tag">Style variations</div>
<p className="step__p">Explore new arrangements and instrumentation.</p>
</div>
<div className="step__info-col">
<div className="step__tag">Mood shifts</div>
<p className="step__p">Shift between energetic, mellow, or dark vibes.</p>
</div>
</div>
<div className="step__cta"><a className="btn" href="#">Get started</a></div>
</div>
<div className="step__n-wrap">
<div className="step__n">02</div>
<div className="step__n-line"></div>
</div>
</div>
<div className="step__divider"></div>
<div className="step__images">
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Compose</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Mix</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Master</div>
</div>
</div>
</div>
</div>
<div className="step__slide">
<div className="step">
<div className="step__top">
<div className="step__left">
<div className="step__head">
<div className="step__code">(BT)</div>
</div>
<div className="step__label">
<div className="step__dot"></div>
<div className="step__cat">Selection</div>
</div>
<div className="step__t">Pick the<br/>best take.</div>
<p className="step__desc">Listen, compare, and cherry-pick. Every variation is production-ready from the
                  start.</p>
<div className="step__info">
<div className="step__info-col">
<div className="step__tag">A/B comparison</div>
<p className="step__p">Compare versions side by side and select the best.</p>
</div>
<div className="step__info-col">
<div className="step__tag">Instant preview</div>
<p className="step__p">Listen in real-time before committing.</p>
</div>
</div>
<div className="step__cta"><a className="btn" href="#">Get started</a></div>
</div>
<div className="step__n-wrap">
<div className="step__n">03</div>
<div className="step__n-line"></div>
</div>
</div>
<div className="step__divider"></div>
<div className="step__images">
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Compare</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Preview</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Select</div>
</div>
</div>
</div>
</div>
<div className="step__slide">
<div className="step">
<div className="step__top">
<div className="step__left">
<div className="step__head">
<div className="step__code">(EP)</div>
</div>
<div className="step__label">
<div className="step__dot"></div>
<div className="step__cat">Export</div>
</div>
<div className="step__t">Export &amp;<br/>publish.</div>
<p className="step__desc">One click to download masters, stems, or push live to your platform of choice.</p>
<div className="step__info">
<div className="step__info-col">
<div className="step__tag">WAV / MP3 / FLAC</div>
<p className="step__p">Download production-ready files or stems.</p>
</div>
<div className="step__info-col">
<div className="step__tag">Stems included</div>
<p className="step__p">Push directly to your platform of choice.</p>
</div>
</div>
<div className="step__cta"><a className="btn" href="#">Get started</a></div>
</div>
<div className="step__n-wrap">
<div className="step__n">04</div>
<div className="step__n-line"></div>
</div>
</div>
<div className="step__divider"></div>
<div className="step__images">
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">WAV</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Stems</div>
</div>
<div className="step__img-wrap"><img alt="" className="step__img" src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&amp;h=380&amp;fit=crop"/>
<div className="step__img-label">Publish</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
<div className="lt"></div>

<div className="faq-wrap">
<section className="faq" id="faq">
<div className="faq__l">
<div className="faq__tag">FAQs</div>
</div>
<div className="faq__r">
<h2 className="faq__h" data-flash="">Not AI-generated answers. Real ones here.</h2>
<div className="faq__i">
<div className="faq__q"><span>What kind of audio can Synthara create?</span><span className="faq__ic">+</span></div>
<div className="faq__a">
<p>Full tracks, background music, jingles, soundscapes, podcast intros, and sound effects for ads, games,
              videos, and social media.</p>
</div>
</div>
<div className="faq__i">
<div className="faq__q"><span>What do I need to get started?</span><span className="faq__ic">+</span></div>
<div className="faq__a">
<p>Just a text description of the mood, genre, or vibe you want. You can also upload a reference track.</p>
</div>
</div>
<div className="faq__i">
<div className="faq__q"><span>Will the music match my brand sound?</span><span className="faq__ic">+</span></div>
<div className="faq__a">
<p>Yes. We learn from your reference audio and keep tempo, tone, and instrumentation consistent.</p>
</div>
</div>
<div className="faq__i">
<div className="faq__q"><span>Do I own the tracks you generate?</span><span className="faq__ic">+</span></div>
<div className="faq__a">
<p>Yes. All generated audio is fully licensed for commercial use across any channel.</p>
</div>
</div>
<div className="faq__i">
<div className="faq__q"><span>How fast do I get results?</span><span className="faq__ic">+</span></div>
<div className="faq__a">
<p>Most tracks generate in under 30 seconds. Longer compositions may take a few minutes.</p>
</div>
</div>
<div className="faq__i">
<div className="faq__q"><span>Does this replace my music producer?</span><span className="faq__ic">+</span></div>
<div className="faq__a">
<p>No. It accelerates production so your team can focus on creative direction.</p>
</div>
</div>
</div>
</section>
</div>
<div className="ln"></div>
<footer className="foot">
<div className="foot__top">
<div className="foot__logo">synthara</div>
<div className="foot__col">
<div className="foot__ct">Product</div><a href="#">Tracks</a><a href="#">Sound Design</a><a href="#">Audio
          Production</a>
</div>
<div className="foot__col">
<div className="foot__ct">Legal</div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a>
</div>
<div className="foot__col">
<div className="foot__ct">Social</div><a href="#">Instagram</a><a href="#">Twitter / X</a><a href="#">YouTube</a>
</div>
</div>
<div className="foot__bot"><span>© 2026 Synthara Ltd.</span><span>AI-powered music production.</span></div>
</footer>


    </>
  );
}
