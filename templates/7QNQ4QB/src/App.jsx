import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.addEventListener('DOMContentLoaded',()=>{
  lucide.createIcons({attrs:{'stroke-width':'1.4','aria-hidden':'true'}});

  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion){
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(i=>{if(i.isIntersecting){i.target.classList.add('show');obs.unobserve(i.target);}});
    },{threshold:.12});
    document.querySelectorAll('.fade-slide').forEach(el=>obs.observe(el));
  }else{
    document.querySelectorAll('.fade-slide').forEach(el=>el.classList.add('show'));
  }

  const artData=[...Array(9)].map((_,i)=>({src:`https://source.unsplash.com/random/600x600?art,${i+1}`,name:['Neon Nights','Afterglow','Midnight City','Echoes','Skyline','Moonlight','Starlight','Wanderlust','Night Drive'][i]}));
  const artGrid=document.getElementById('artGrid'),artTpl=document.getElementById('artCard').content;
  artData.forEach(item=>{
    const node=artTpl.cloneNode(true);
    node.querySelector('img').src=item.src;
    node.querySelector('img').alt=`Artwork for ${item.name}`;
    node.querySelector('.caption').textContent=item.name;
    artGrid.appendChild(node);
  });

  const photoGrid=document.getElementById('photoGrid'),photoTpl=document.getElementById('photoCard').content;
  [...Array(9)].forEach((_,i)=>{
    const node=photoTpl.cloneNode(true);
    node.querySelector('img').src=`https://source.unsplash.com/random/800x1000?portrait,artist,${i}`;
    node.querySelector('img').alt=`Press photo ${i+1}`;
    photoGrid.appendChild(node);
  });

  const songs=['Neon Nights','Afterglow','Midnight City','Echoes','Skyline','Moonlight'];
  const videoFolders=document.getElementById('videoFolders'),videoTpl=document.getElementById('videoCard').content;
  songs.forEach(name=>{
    const details=document.createElement('details');
    details.className='border border-slate-700 bg-slate-800 rounded-lg overflow-hidden group';
    const summary=document.createElement('summary');
    summary.className='cursor-pointer px-4 py-3 flex items-center justify-between bg-slate-700/50 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded';
    summary.innerHTML=`<span>${name}</span><i data-lucide="chevron-down" class="w-4 h-4 stroke-1.5 transition-transform group-open:rotate-180"></i>`;
    details.appendChild(summary);
    const inner=document.createElement('div');
    inner.className='accordion p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3';
    [...Array(3)].forEach((_,v)=>{
      const clip=videoTpl.cloneNode(true);
      clip.querySelector('source').src=`https://download.samplelib.com/mp4/sample-${(v+1)%3+1}.mp4`;
      inner.appendChild(clip);
    });
    details.appendChild(inner);
    videoFolders.appendChild(details);
  });

  const longVideoData=[
    {src:'https://download.samplelib.com/mp4/sample-5s.mp4',title:'Studio Session'},
    {src:'https://download.samplelib.com/mp4/sample-10s.mp4',title:'Live Performance'}
  ];
  const longVideoGrid=document.getElementById('longVideoGrid'),videoTplLong=document.getElementById('videoCard').content;
  longVideoData.forEach(item=>{
    const clip=videoTplLong.cloneNode(true);
    clip.querySelector('source').src=item.src;
    longVideoGrid.appendChild(clip);
  });

  lucide.createIcons({attrs:{'stroke-width':'1.4','aria-hidden':'true'}});

  function updateInventory(){
    document.getElementById('inv-art-count').textContent=artGrid.childElementCount;
    document.getElementById('inv-short-count').textContent=document.querySelectorAll('#videos video').length;
    document.getElementById('inv-long-count').textContent=document.querySelectorAll('#long-videos video').length;
  }
  updateInventory();

  const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');
  function size(){canvas.width=innerWidth;canvas.height=innerHeight}size();addEventListener('resize',size);
  const dots=[...Array(70)].map(()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}));
  (function loop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    dots.forEach(d=>{
      d.x+=d.vx;d.y+=d.vy;
      if(d.x<0||d.x>canvas.width)d.vx*=-1;
      if(d.y<0||d.y>canvas.height)d.vy*=-1;
      ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,6.283);ctx.fillStyle='#334155';ctx.fill();
    });
    requestAnimationFrame(loop);
  })();
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="sr-only focus:not-sr-only absolute top-2 left-2 z-[60] bg-indigo-600 text-white px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" href="#main">Skip to content</a>
<canvas className="fixed inset-0 -z-10 opacity-30" id="particles"></canvas>
<header className="sticky top-0 z-40 w-full bg-slate-900/80 backdrop-blur border-b border-slate-700">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="text-xl font-semibold tracking-tight font-['Playfair_Display'] text-slate-100">ArtistOS</span>
<nav aria-label="Main navigation" className="hidden md:flex gap-4 text-sm font-medium">
<a className="tab-link hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded transition" href="#dashboard">Dashboard</a>
<a className="tab-link hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded transition" href="#inventory">Inventory</a>
<a className="tab-link hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded transition" href="#artwork">Artwork</a>
<a className="tab-link hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded transition" href="#videos">Videos</a>
<a className="tab-link hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded transition" href="#timeline">Timeline</a>
<a className="tab-link hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded transition" href="#links">Links</a>
<a className="tab-link hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded transition" href="#song-about">Song About</a>
</nav>
</div>
</div>
</header>
<section aria-labelledby="dash-title" className="scroll-mt-24 mx-auto max-w-7xl px-6 pt-10 pb-20 space-y-6 fade-slide" id="dashboard">
<h1 className="font-['Playfair_Display'] text-[44px] md:text-[60px] font-semibold tracking-tight leading-tight text-slate-100" id="dash-title">
    Artist Control Room
  </h1>
<p className="text-lg text-slate-400">Campaign Name</p>
</section>
<main className="mx-auto w-full max-w-7xl px-6 pb-24 space-y-20" id="main">

<section aria-labelledby="inventory-title" className="scroll-mt-24 space-y-8 fade-slide" id="inventory">
<div className="flex items-center justify-between">
<h2 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight flex items-center gap-2 text-slate-100" id="inventory-title">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="layers"></i> Content Inventory
      </h2>
</div>
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-lg border border-slate-700 bg-slate-800 p-6 text-center hover:border-indigo-500 hover-lift group">
<i aria-hidden="true" className="w-4 h-4 text-indigo-400 mx-auto" data-lucide="image"></i>
<p className="mt-4 text-3xl font-semibold group-hover:text-indigo-400 transition-colors" id="inv-art-count">0</p>
<p className="mt-1 text-xs text-slate-400">Artwork / Graphics</p>
</div>
<div className="rounded-lg border border-slate-700 bg-slate-800 p-6 text-center hover:border-indigo-500 hover-lift group">
<i aria-hidden="true" className="w-4 h-4 text-indigo-400 mx-auto" data-lucide="video"></i>
<p className="mt-4 text-3xl font-semibold group-hover:text-indigo-400 transition-colors" id="inv-short-count">0</p>
<p className="mt-1 text-xs text-slate-400">Short Videos</p>
</div>
<div className="rounded-lg border border-slate-700 bg-slate-800 p-6 text-center hover:border-indigo-500 hover-lift group">
<i aria-hidden="true" className="w-4 h-4 text-indigo-400 mx-auto" data-lucide="film"></i>
<p className="mt-4 text-3xl font-semibold group-hover:text-indigo-400 transition-colors" id="inv-long-count">0</p>
<p className="mt-1 text-xs text-slate-400">Long Videos</p>
</div>
</div>
</section>

<section aria-labelledby="artwork-title" className="scroll-mt-24 space-y-10 fade-slide" id="artwork">
<div className="flex items-center justify-between">
<h2 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight flex items-center gap-2 text-slate-100" id="artwork-title">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="image"></i> Artwork
      </h2>
<button className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 transition rounded">
<i aria-hidden="true" className="w-4 h-4" data-lucide="upload"></i> Upload
      </button>
</div>
<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="artGrid"></div>
<div className="space-y-6">
<h3 className="text-lg font-medium flex items-center gap-2 text-slate-100">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="camera"></i> Press Photos
      </h3>
<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3" id="photoGrid"></div>
</div>
</section>

<section aria-labelledby="videos-title" className="scroll-mt-24 space-y-10 fade-slide" id="videos">
<div className="flex items-center justify-between">
<h2 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight flex items-center gap-2 text-slate-100" id="videos-title">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="video"></i> Short-form Videos
      </h2>
<button className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 transition rounded">
<i aria-hidden="true" className="w-4 h-4" data-lucide="plus-circle"></i> Add Video
      </button>
</div>
<div className="space-y-4" id="videoFolders"></div>
</section>

<section aria-labelledby="long-videos-title" className="scroll-mt-24 space-y-10 fade-slide" id="long-videos">
<div className="flex items-center justify-between">
<h2 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight flex items-center gap-2 text-slate-100" id="long-videos-title">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="film"></i> Long-form Videos
      </h2>
<button className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 transition rounded">
<i aria-hidden="true" className="w-4 h-4" data-lucide="plus-circle"></i> Add Video
      </button>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="longVideoGrid"></div>
</section>

<section aria-labelledby="timeline-title" className="scroll-mt-24 space-y-8 fade-slide" id="timeline">
<h2 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight flex items-center gap-2 text-slate-100" id="timeline-title">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="calendar"></i> Timeline
    </h2>
<ul className="space-y-4 border-l border-slate-700 pl-5">
<li className="relative"><span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-indigo-400"></span><p className="text-sm"><span className="text-slate-400 mr-2">Jun 24</span>Single “Neon Nights” Release</p></li>
<li className="relative"><span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-indigo-400"></span><p className="text-sm"><span className="text-slate-400 mr-2">Jul 03</span>TikTok Campaign Kick-off</p></li>
<li className="relative"><span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-indigo-400"></span><p className="text-sm"><span className="text-slate-400 mr-2">Jul 15</span>Lyric Video Premiere</p></li>
<li className="relative"><span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-indigo-400"></span><p className="text-sm"><span className="text-slate-400 mr-2">Aug 08</span>EP Pre-save Announcement</p></li>
<li className="relative"><span className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-indigo-400"></span><p className="text-sm"><span className="text-slate-400 mr-2">Sep 01</span>EP “Afterglow” Drops</p></li>
</ul>
</section>

<section aria-labelledby="links-title" className="scroll-mt-24 space-y-8 fade-slide" id="links">
<div className="flex items-center justify-between">
<h2 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight flex items-center gap-2 text-slate-100" id="links-title">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="link"></i> Smart Links
      </h2>
<button className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 transition rounded">
<i aria-hidden="true" className="w-4 h-4" data-lucide="plus-circle"></i> Add Link
      </button>
</div>
<div className="grid gap-6 sm:grid-cols-2">
<div className="rounded-lg border border-slate-700 bg-slate-800 p-4 space-y-4 hover:border-indigo-500 hover-lift">
<h3 className="text-base font-medium text-slate-100">Neon Nights</h3>
<iframe className="w-full h-44 rounded-md" loading="lazy" src="https://feature.fm/embed/xyz" title="Neon Nights smart link"></iframe>
</div>
<div className="rounded-lg border border-slate-700 bg-slate-800 p-4 space-y-4 hover:border-indigo-500 hover-lift">
<h3 className="text-base font-medium text-slate-100">Afterglow</h3>
<iframe className="w-full h-44 rounded-md" loading="lazy" src="https://linkfire.com/embed/abc" title="Afterglow smart link"></iframe>
</div>
</div>
</section>

<section aria-labelledby="song-about-title" className="scroll-mt-24 space-y-8 fade-slide" id="song-about">
<h2 className="font-['Playfair_Display'] text-xl font-semibold tracking-tight flex items-center gap-2 text-slate-100" id="song-about-title">
<i aria-hidden="true" className="w-5 h-5 text-indigo-400" data-lucide="info"></i> Song About
    </h2>
<div className="space-y-10">
<article className="space-y-3">
<h3 className="text-lg font-medium text-slate-100">Neon Nights</h3>
<p className="text-sm text-slate-300 leading-relaxed">“Neon Nights” blends retro-wave synths with a modern pop backbone, painting a vivid picture of late-night escapades.</p>
</article>
<article className="space-y-3">
<h3 className="text-lg font-medium text-slate-100">Afterglow</h3>
<p className="text-sm text-slate-300 leading-relaxed">“Afterglow” is a bittersweet reflection on the sparkle of love’s early days, carried by lush piano and intimate vocals.</p>
</article>
</div>
</section>
</main>

<template id="artCard">
<div className="space-y-1 hover-lift">
<p className="caption text-xs font-medium text-slate-300 hover:text-indigo-400 cursor-text outline-none focus:ring-2 focus:ring-indigo-500/50 rounded text-center" contenteditable="true">Song Title</p>
<div className="relative w-full aspect-square">
<img alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg border border-slate-700 hover:border-indigo-500 transition" src=""/>
</div>
</div>
</template>
<template id="photoCard">
<img alt="" className="w-full h-64 object-cover rounded-lg border border-slate-700 hover:border-indigo-500 transition hover-lift" src=""/>
</template>
<template id="videoCard">
<video className="w-full rounded-lg border border-slate-700 hover:border-indigo-500 transition" controls="" preload="none">
<source src="" type="video/mp4"/>
    Your browser doesn’t support video.
  </video>
</template>


    </>
  );
}
