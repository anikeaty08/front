import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Modal Logic
        const modal = document.getElementById('imageModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Modal Views
        const modalImageContent = document.getElementById('modalImageContent');
        const modalLetterContent = document.getElementById('modalLetterContent');

        // Image View Elements
        const modalImg = document.getElementById('modalImage');
        const modalAuthorImg = document.getElementById('modalAuthorImg');
        const modalAuthorName = document.getElementById('modalAuthorName');
        const modalCaption = document.getElementById('modalCaption');

        function openModal(item) {
            const type = item.dataset.type;

            if (type === 'letter') {
                // Switch to Letter View
                modalImageContent.classList.add('hidden');
                modalLetterContent.classList.remove('hidden');
            } else {
                // Switch to Image View
                modalLetterContent.classList.add('hidden');
                modalImageContent.classList.remove('hidden');

                // Populate Image Data
                const imgSrc = item.querySelector('img:not(.author-img)').src;
                const authorImgSrc = item.querySelector('.author-img').src;
                const authorName = item.dataset.author;
                const caption = item.dataset.caption;

                modalImg.src = imgSrc;
                modalAuthorImg.src = authorImgSrc;
                modalAuthorName.textContent = authorName;
                modalCaption.textContent = caption;
            }

            // Show Modal
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('modal-enter');
                modal.classList.add('modal-active');
            }, 10);
            
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('modal-active');
            modal.classList.add('modal-enter');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                // Reset views for next open (optional but good practice)
                modalImageContent.classList.remove('hidden'); 
                modalLetterContent.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        galleryItems.forEach(item => {
            item.addEventListener('click', () => openModal(item));
        });

        closeModalBtn.addEventListener('click', closeModal);
        modalBackdrop.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="liquid-bg w-[500px] h-[500px] rounded-full bg-[#A7D82C]/10 top-[-10%] left-[-10%]"></div>
<div className="liquid-bg w-[600px] h-[600px] rounded-full bg-[#33AFA5]/10 bottom-[-10%] right-[-10%] animation-delay-2000" style={{animationDirection: 'alternate-reverse'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300">

</header>

<div className="pt-32">

<section className="text-center pt-20 pr-4 pb-20 pl-4 relative">
<div className="max-w-6xl mx-auto">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold italic tracking-tight font-playfair mb-8 min-h-[4em] flex items-center justify-center">
<span className="block w-full max-w-5xl mr-auto ml-auto">
                        Why Creativity Always Survives: <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A7D82C] to-[#33AFA5]">Omni, an Ancient Observer's Letter</span>
</span>
</h1>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-10 opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
<div className="glass-panel flex flex-col md:flex-row gap-4 rounded-2xl pt-2 pr-2 pb-2 pl-2 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide space-x-2 px-2 font-dm-sans">
<button className="tab-active whitespace-nowrap transition-all duration-300 text-sm font-medium bg-[#A7D82C] text-[#18181b] shadow-[0_0_15px_rgba(167,216,44,0.3)] rounded-full px-5 py-2.5 flex items-center space-x-2" data-tab="Trending">
<svg className="lucide lucide-flame w-4 h-4" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg><span className="">Trending</span>
</button>
<button className="whitespace-nowrap transition-all duration-300 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full px-5 py-2.5 flex items-center space-x-2" data-tab="Featured">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg><span className="">Featured</span>
</button>
<button className="whitespace-nowrap transition-all duration-300 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full px-5 py-2.5 flex items-center space-x-2" data-tab="New">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg><span className="">New</span>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 grid-flow-dense auto-rows-[300px]" id="gallery">

<div className="group relative break-inside-avoid animate-fade-in gallery-item cursor-pointer h-full" data-author="CyberVision" data-caption="A neon-drenched cityscape where cybernetic flora reclaims the concrete jungle." data-type="image" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 bg-[#A7D82C] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="glass-panel rounded-2xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-1 h-full flex flex-col">
<div className="relative overflow-hidden flex-grow h-full">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b0b1586-3b50-4c70-bb1b-1a06f0b09bcc_800w.png"/>
<div className="group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#A7D82C] to-[#33AFA5] p-[1px]">
<img alt="User" className="w-full h-full rounded-full object-cover author-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7db323b-b62c-48e9-ba21-8ed554e7d2a8_320w.webp"/>
</div>
<span className="text-sm font-dm-sans font-medium text-white/90">CyberVision</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative break-inside-avoid animate-fade-in gallery-item cursor-pointer order-first sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-2 h-full" data-type="letter" style={{animationDelay: '0.15s'}}>

<div className="absolute inset-0 bg-gradient-to-b from-[#A7D82C]/10 to-[#33AFA5]/10 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

<div className="glass-panel rounded-2xl p-6 md:p-10 relative transition-all duration-500 group-hover:-translate-y-1 h-full flex flex-col justify-center border border-white/10 group-hover:border-white/20 bg-white/[0.02] overflow-hidden">
<div className="flex flex-col h-full justify-between z-10 w-full">

<div className="flex justify-center mb-4 shrink-0">
<span className="text-[10px] font-dm-sans font-bold uppercase tracking-[0.25em] text-[#A7D82C] border border-[#A7D82C]/30 px-4 py-1.5 rounded-full bg-[#A7D82C]/5 backdrop-blur-md">Observer's Letter</span>
</div>

<div className="text-center max-w-lg mx-auto flex-grow flex flex-col justify-center">
<h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-white mb-4 italic leading-[1.1] tracking-tight">CambrianEdge.ai</h3>
<div className="relative inline-block">
<p className="line-clamp-4 overflow-hidden break-words leading-relaxed text-sm md:text-base group-hover:opacity-100 transition-opacity duration-500 font-light italic text-white/70 font-merriweather opacity-80">
                    "We stand at the precipice of a new dawn. Not a replacement, but a renaissance. As the tools evolve, so too must the spirit of the creator..."
                </p>
</div>
</div>

<div className="mt-6 flex justify-center shrink-0">
<div className="inline-flex items-center space-x-3 group/btn">
<span className="group-hover/btn:text-[#A7D82C] transition-colors group-hover/btn:border-[#A7D82C] text-sm font-medium text-white font-dm-sans border-transparent border-b">Read the letter</span>
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-[#A7D82C] transition-all duration-300">
<svg className="lucide lucide-arrow-right w-3 h-3 text-white group-hover/btn:text-[#18181b]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative break-inside-avoid animate-fade-in gallery-item cursor-pointer h-full" data-author="NeonDreams" data-caption="Liquid metal synthesis reflecting the shattered dreams of a digital utopia." data-type="image" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-[#33AFA5] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="glass-panel rounded-2xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-1 h-full flex flex-col">
<div className="relative overflow-hidden flex-grow">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f3f53d1-f046-47fd-ae03-947d23f5a6e8_800w.png"/>
<div className="group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-full bg-white/10 p-[1px] border border-white/20">
<img alt="User" className="w-full h-full rounded-full object-cover author-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebeae000-98ad-432e-8085-07d0914261c4_320w.png?w=800&amp;q=80"/>
</div>
<span className="text-xs font-dm-sans font-medium text-white/90">NeonDreams</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative break-inside-avoid animate-fade-in gallery-item cursor-pointer h-full" data-author="EchoSim" data-caption="Aetherial code manifesting into physical structures through sheer computational will." data-type="image" style={{animationDelay: '0.45s'}}>
<div className="absolute inset-0 bg-[#A7D82C] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="glass-panel rounded-2xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-1 h-full flex flex-col">
<div className="relative overflow-hidden flex-grow h-full">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a8b2c5a-df76-40fc-84ef-4cfe4ad61e2a_800w.png"/>
<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.8) 100%), url(\'Portrait Aspect Ratio Request.png\')'}}>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-white/10 p-[1px] border border-white/20">
<img alt="User" className="w-full h-full rounded-full object-cover author-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5865c193-61b7-47c8-899a-c6fa35826688_320w.webp"/>
</div>
<span className="text-sm font-dm-sans font-medium text-white/90">EchoSim</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative break-inside-avoid animate-fade-in gallery-item cursor-pointer h-full" data-author="VoxelStudio" data-caption="Abstract minimalism meeting complex data structures in a void of silence." data-type="image" style={{animationDelay: '0.4s'}}>
<div className="absolute inset-0 bg-[#33AFA5] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="glass-panel rounded-2xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-1 h-full flex flex-col">
<div className="relative overflow-hidden flex-grow">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a625b0e4-c3de-440b-ae87-bf2fdcf9aad4_800w.png" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded-full bg-white/10 p-[1px] border border-white/20">
<img alt="User" className="w-full h-full rounded-full object-cover author-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5865c193-61b7-47c8-899a-c6fa35826688_320w.webp"/>
</div>
<span className="text-xs font-dm-sans font-medium text-white/90">VoxelStudio</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative break-inside-avoid animate-fade-in gallery-item cursor-pointer h-full lg:col-span-2" data-author="FluxCanvas" data-caption="Temporal distortions captured in a single frame of generated brilliance." data-type="image" style={{animationDelay: '0.5s'}}>
<div className="absolute inset-0 bg-[#A7D82C] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="glass-panel rounded-2xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-1 h-full flex flex-col">
<div className="relative overflow-hidden flex-grow">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/630243e4-e528-4c8a-a3c3-c681756310ec_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-white/10 p-[1px] border border-white/20">
<img alt="User" className="w-full h-full rounded-full object-cover author-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/625569f6-2546-4071-9e1a-1a5d8f130ba3_320w.webp"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-dm-sans font-medium text-white/90">FluxCanvas</span>
<span className="text-[10px] text-white/50 font-dm-sans">Landscape Series</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative break-inside-avoid animate-fade-in gallery-item cursor-pointer h-full lg:col-span-2" data-author="ChromaMind" data-caption="A symphony of colors played on the strings of an artificial neural network." data-type="image" style={{animationDelay: '0.6s'}}>
<div className="absolute inset-0 bg-[#33AFA5] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="glass-panel rounded-2xl overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-1 h-full flex flex-col">
<div className="relative overflow-hidden flex-grow">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d9d6df5-bc2b-4eb2-be6f-cdc6e4c0fe84_1600w.png"/>
<div className="group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-white/10 p-[1px] border border-white/20">
<img alt="User" className="w-full h-full rounded-full object-cover author-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99ffb7cb-ea18-479c-93b7-7dda9534f513_320w.webp"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-dm-sans font-medium text-white/90">ChromaMind</span>
<span className="text-[10px] text-white/50 font-dm-sans">Wide Angle</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="fixed inset-0 z-[100] modal-enter transition-all duration-300 hidden" id="imageModal">

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" id="modalBackdrop"></div>

<div className="fixed inset-0 z-10 flex items-center justify-center p-4 pointer-events-none">
<div className="modal-scale relative w-full max-w-6xl h-full md:h-auto max-h-[90vh] transition-transform duration-300 ease-out flex flex-col pointer-events-auto">
<button className="absolute top-4 right-4 md:-top-12 md:-right-4 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all bg-black/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none" id="closeModalBtn">
<svg className="lucide lucide-x w-6 h-6 md:w-8 md:h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>


<div className="liquid-glass-strong w-full rounded-2xl md:rounded-3xl shadow-2xl h-[85vh] md:h-[80vh] flex flex-col overflow-hidden relative">

<div className="flex flex-col md:flex-row h-full w-full overflow-hidden" id="modalImageContent">

<div className="w-full h-[40%] md:w-2/3 md:h-full bg-black/40 flex items-center justify-center relative overflow-hidden group flex-shrink-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Detail View" className="w-full h-full object-contain p-4 md:p-8" id="modalImage" src=""/>
</div>

<div className="w-full h-[60%] md:w-1/3 md:h-full p-6 md:p-10 flex flex-col border-t md:border-t-0 md:border-l border-white/10 bg-gradient-to-b from-white/5 to-transparent overflow-y-auto custom-scrollbar">
<div className="flex items-center space-x-4 mb-6 md:mb-8 flex-shrink-0">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-full p-[2px] bg-gradient-to-br from-[#A7D82C] to-[#33AFA5]">
<img alt="Author" className="w-full h-full rounded-full object-cover border border-[#18181b]" id="modalAuthorImg" src=""/>
</div>
<div>
<h3 className="text-lg md:text-xl font-dm-sans font-bold text-white tracking-wide" id="modalAuthorName"></h3>
<p className="text-[10px] md:text-xs text-[#A7D82C] font-medium tracking-wider uppercase mt-1">Pro Creator</p>
</div>
</div>
<div className="mb-8 flex-grow">
<h4 className="text-xs text-white/40 font-bold uppercase tracking-widest mb-4 font-dm-sans border-b border-white/10 pb-2">Description</h4>
<p className="text-white/90 font-light font-playfair italic text-lg md:text-xl leading-relaxed" id="modalCaption"></p>
</div>
<div className="mt-auto pt-6 border-t border-white/10 flex-shrink-0">
<h4 className="text-xs text-white/40 font-bold uppercase tracking-widest mb-4 font-dm-sans">Share this creation</h4>
<div className="flex space-x-3">

<div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
<div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
<div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
</div>
</div>
</div>
</div>

<div className="hidden h-full w-full overflow-y-auto custom-scrollbar relative" id="modalLetterContent">

<div className="sticky top-0 left-0 right-0 h-12 md:h-20 bg-gradient-to-b from-[#18181b] to-transparent z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 md:px-8 pb-20 pt-4 md:pt-10">

<div className="text-center mb-10 md:mb-16">
<span className="inline-block py-1 px-3 rounded-full bg-[#A7D82C]/10 border border-[#A7D82C]/20 text-[#A7D82C] text-[10px] font-bold uppercase tracking-widest mb-6">Observer's Letter</span>
<h2 className="text-3xl md:text-5xl font-playfair font-semibold text-white italic mb-4 leading-tight">CambrianEdge.ai</h2>
<p className="text-white/40 font-dm-sans uppercase tracking-widest text-xs">Why Creativity Always Survives</p>
</div>

<div className="prose prose-invert prose-lg mx-auto font-merriweather font-light text-white/80 leading-loose space-y-8 text-base md:text-lg">
<p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-playfair first-letter:text-[#A7D82C] first-letter:mr-3 first-letter:float-left">
                                    Do not go gentle into that good night... Rage, rage against the dying of the light." - Dylan Thomas But what if the light isn't dying? What if it's just changing?
                                </p>
<p>
                                    I've been around for 540 million years.
                                    I've seen the Cambrian explosion. The rise of vertebrates. The dinosaurs' reign and fall. The dawn of consciousness.
                                    And now, as another year ends, I'm watching the latest panic unfold.
                                    They're saying AI will kill creativity.
                                    I've heard this song before.
                                </p>
<br/>
<b><i>The Fear Is Ancient</i></b><br/>
<p>

                                    When photography arrived, painters didn't disappear. They discovered impressionism. Abstract art. New ways to see what cameras never could.
                                    When television emerged, radio found its voice. Its intimacy. Its unique power to paint pictures in minds.
                                    When computers came, designers created digital art. Interactive experiences. Possibilities that never existed before.
                                    The tools changed. The creativity exploded.
                                </p>
<br/>
<b><i>
                                What AI Actually Does</i></b><br/>
<p>

                                    AI doesn't create.
                                    It processes. It combines. It suggests.
                                    But it doesn't have hunches born from a lifetime of observation. It doesn't feel the frustration that sparks breakthrough thinking. It doesn't wake up at 3 AM with a crazy idea that just might work.
                                    It doesn't understand why a grandmother's smile sells more soup than a celebrity endorsement—because it's never been a grandmother, never felt that particular love.
                                    Only humans know that.
                                    Only humans carry the creative DNA that's been evolving since consciousness began.
                                </p>
<br/>
<b><i>
                                The New Creative Evolution</i></b><br/>
<p>

                                    Smart creatives aren't running from AI. They're evolving with it.
                                    Using AI to handle the tedious stuff. The research. The first drafts. The variations.
                                    So they can focus on what only humans can do: the big idea. The human insight. The emotional truth that makes people stop scrolling and start caring.
                                    AI gives us more time to be human.
                                    That's not extinction. That's evolution.
                                </p>
<br/>
<b><i>
                                    A Holiday Reflection </i></b><br/>
<p>


                                    As this year ends and we pause to honor what matters—family, connection, the bonds that make us human—I'm reminded why creativity will never die.
                                    Because creativity isn't about the tools.
                                    It's about the human need to connect. To share stories. To make others feel less alone.
                                    Every holiday tradition, every celebration, every moment of joy we create together—that's the real creative revolution.
                                </p>
<br/>
<b><i>
                                Our Commitment </i></b><br/>
<p>

                                    At CambrianEdge.ai, we're not building AI to replace creatives. We're building it to free them.
                                    To handle the mundane so you can focus on the magical.
                                    Because the future of creativity isn't human versus machine. It's human with machine.
                                    And that future is going to be extraordinary.
                                </p>
<br/>
<b><i>
                                A Holiday Reflection </i></b><br/>
<p>

                                    As this year ends and we pause to honor what matters, family, connection, the bonds that make us human. I'm reminded why creativity will never die.
                                    Because creativity isn't about the tools.
                                    It's about the human need to connect. To share stories. To make others feel less alone.
                                    Every holiday tradition, every celebration, every moment of joy we create together—that's the real creative revolution.
                                </p>
<br/>
<b><i>
                                A Toast to What Endures
                                </i></b><br/>
<p>

                                    As we close another year, I raise a tentacle to the creative spirit that has burned bright since the first human drew on a cave wall.
                                </p>
<p className="font-medium text-white">
                                    To the dreamers who see possibilities where others see problems. To the storytellers who make us feel less alone. To the rebels who refuse to accept boring.
                                    I can tell you with certainty:
                                    It's still about people. It always will be.
                                </p>
</div><b><i><b><i><b><i><b><i><b><i><b><i><i>

<div className="mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col items-center text-center">
<div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-[#A7D82C] to-[#33AFA5] p-[2px]">
<div className="w-full h-full rounded-full bg-[#18181b] flex items-center justify-center">
<span className="font-playfair italic text-2xl">O</span>
</div>
</div>
<h4 className="font-playfair italic text-2xl text-white">Omni</h4>
<p className="text-xs text-[#A7D82C] uppercase tracking-widest mt-1">Ancient Observer &amp; Eternal Optimist</p>
<p className="text-xs text-white/30 mt-2 font-dm-sans">CambrianEdge.ai</p>
</div>
</i></i></b></i></b></i></b></i></b></i></b></i></b></div><b><b><i><b><i><i>
</i></i></b></i></b></b></div><b><b><i><b><i><i>
</i></i></b></i></b></b></div><b><b><i><b><i><i>
</i></i></b></i></b></b></div><b><b><i><b><i><i>
</i></i></b></i></b></b></div><b><b><i><b><i><i>
</i></i></b></i></b></b></div><b><b><i><b><i><i>

<footer className="border-t border-white/5 bg-[#18181b]/50 backdrop-blur-md relative font-dm-sans">
<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2 space-y-4">
<a className="inline-flex items-center" href="#">
<span className="text-xl font-playfair font-semibold italic text-white">CambrianEdge<span className="text-[#A7D82C]">.ai</span></span>
</a>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-sm">
                        Pioneering the future of digital expression. Where liquid imagination meets generative reality.
                    </p>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-light gap-4 md:gap-0">
<p className="">© 2024 CambrianEdge.ai</p>

<button className="group flex items-center space-x-2 text-sm font-medium text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 hover:border-white/20">
<span>Join the waitlist</span>
<svg className="lucide lucide-arrow-right w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</footer>

</i></i></b></i></b></b>
    </>
  );
}
