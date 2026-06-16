import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#3F51B5',
primaryHover: '#303F9F',
}
}
}
}



        // --- Data ---
        // Updated Image URLs to match the new minimal design prompts
        const resources = [
            {
                id: 0,
                title: "3 Ways to Get Asthma Under Control",
                image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800&auto=format&fit=crop", // Calm, nature, breathing space
                preview: "Asthma is a chronic condition that affects your airways, but with the right management plan, you can live an active, healthy life. Understanding your triggers is the first step towards better breathing. Many environmental factors such as dust, pollen, and pet dander can initiate flare-ups unexpectedly.",
                fullContent: "In this guide, we explore three clinically proven methods to maintain control. First, adherence to controller medication is paramount. Unlike rescue inhalers, controller meds reduce underlying inflammation. Second, creating an 'asthma action plan' with your doctor helps you recognize early warning signs before they become emergencies. Third, environmental hygiene—using HEPA filters and hypoallergenic bedding—can significantly reduce daily attacks. By integrating these habits, patients report a 60% reduction in hospitalization risk."
            },
            {
                id: 1,
                title: "Antioxidants Protect Skin",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop", // Citrus, clean background, minimal glow
                preview: "Your skin faces a daily barrage of environmental stressors, from UV rays to pollution. Antioxidants are nature's defense mechanism, helping to neutralize harmful free radicals that cause premature aging. Incorporating them into your routine can transform your skin's texture and resilience.",
                fullContent: "Vitamin C is the gold standard, brightening skin and boosting collagen production. Vitamin E works synergistically with C to protect cell membranes. Niacinamide (Vitamin B3) improves skin elasticity and barrier function. This guide details how to layer these ingredients effectively, recommended concentrations for different skin types, and dietary changes to boost your antioxidant intake from within. Remember, consistency is key—results typically become visible after 6-8 weeks of daily application."
            },
            {
                id: 2,
                title: "Reduce Your Cancer Risk",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop", // Healthy food, salad, minimal flat lay
                preview: "While genetics play a role in cancer risk, research suggests that a significant percentage of cancers are preventable through lifestyle modifications. Making conscious choices about what you eat, how you move, and what you expose yourself to can powerfully influence your long-term health.",
                fullContent: "This comprehensive guide breaks down the American Cancer Society's top recommendations. We cover the importance of a plant-forward diet rich in phytochemicals, the specific impact of alcohol reduction, and the optimal amount of weekly aerobic activity needed to lower risks for colon and breast cancer. We also discuss screening schedules by age and gender, empowering you to take proactive control of your health. Small changes, accumulated over time, create the strongest defense."
            }
        ];

        // --- State ---
        let isSubscribed = false;
        let currentFlow = ''; // 'read' or 'download'
        let currentPostId = null;

        // --- Navigation Logic ---
        function navigateToPost(id) {
            currentPostId = id;
            const post = resources[id];
            
            // Populate Content
            document.getElementById('post-title').innerText = post.title;
            document.getElementById('post-image').src = post.image;
            
            // Handle truncated text logic
            const allText = post.preview + " " + post.fullContent;
            const words = allText.split(' ');
            const first30 = words.slice(0, 30).join(' ') + "...";
            const rest = words.slice(30).join(' ');

            document.getElementById('post-body-start').innerText = first30;
            // Create paragraphs for the rest
            document.getElementById('post-body-rest').innerHTML = `<p>${rest}</p>`;
            
            // Reset Gating UI
            if (!isSubscribed) {
                document.getElementById('post-content-wrapper').classList.add('max-h-[200px]');
                document.getElementById('read-more-gradient').classList.remove('hidden');
                document.getElementById('read-more-btn-container').classList.remove('hidden');
            } else {
                unlockContentUI();
            }

            // View Transition
            document.getElementById('view-archive').classList.add('opacity-0', 'hidden');
            const postView = document.getElementById('view-post');
            postView.classList.remove('hidden');
            setTimeout(() => postView.classList.remove('opacity-0'), 50);
            window.scrollTo(0,0);
        }

        function backToArchive() {
            const postView = document.getElementById('view-post');
            postView.classList.add('opacity-0');
            setTimeout(() => {
                postView.classList.add('hidden');
                const archiveView = document.getElementById('view-archive');
                archiveView.classList.remove('hidden');
                setTimeout(() => archiveView.classList.remove('opacity-0'), 50);
            }, 300);
            window.scrollTo(0,0);
        }

        function unlockContentUI() {
            document.getElementById('post-content-wrapper').classList.remove('max-h-[200px]');
            document.getElementById('read-more-gradient').classList.add('hidden');
            document.getElementById('read-more-btn-container').classList.add('hidden');
        }

        // --- Modal Logic ---
        function openModal(flow) {
            currentFlow = flow;
            const backdrop = document.getElementById('modal-backdrop');
            const content = document.getElementById('modal-content');
            const title = document.getElementById('modal-title');
            const desc = document.getElementById('modal-desc');
            const btn = document.getElementById('modal-btn-text');
            const icon = document.getElementById('modal-icon');

            // Reset Form View
            document.getElementById('modal-form-state').classList.remove('hidden');
            document.getElementById('modal-success-state').classList.add('hidden');

            // Configure Content based on Flow
            if (flow === 'read') {
                title.innerText = "Unlock the Full Article";
                desc.innerText = "Enter your email address to continue reading.";
                btn.innerText = "Subscribe & Continue";
                icon.setAttribute('icon', 'solar:lock-keyhole-minimalistic-linear');
            } else {
                title.innerText = "Get the Free PDF";
                desc.innerText = "Enter your email to download this guide instantly.";
                btn.innerText = "Subscribe & Download";
                icon.setAttribute('icon', 'solar:file-download-linear');
            }

            backdrop.classList.remove('hidden');
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            const backdrop = document.getElementById('modal-backdrop');
            const content = document.getElementById('modal-content');
            
            backdrop.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            
            setTimeout(() => {
                backdrop.classList.add('hidden');
            }, 300);
        }

        // --- Interaction Handlers ---
        
        function handleDownloadClick() {
            if (isSubscribed) {
                // If already subscribed, simulate download immediately
                startDownloadSequence(true);
            } else {
                openModal('download');
            }
        }

        function handleSubscribe(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            // Simulate API call / Processing
            document.getElementById('modal-form-state').classList.add('hidden');
            document.getElementById('modal-success-state').classList.remove('hidden');
            
            isSubscribed = true; // Set global state

            if (currentFlow === 'read') {
                // Read Flow Logic
                document.getElementById('success-title').innerText = "Success!";
                document.getElementById('success-desc').innerText = "You've unlocked the article.";
                
                // Show Checkmark immediately
                document.getElementById('spinner').classList.add('hidden');
                document.getElementById('checkmark').classList.remove('hidden');

                setTimeout(() => {
                    closeModal();
                    unlockContentUI();
                }, 1500);

            } else {
                // Download Flow Logic
                document.getElementById('success-title').innerText = "Preparing your download...";
                document.getElementById('success-desc').innerText = "Your file is being generated.";
                document.getElementById('download-progress').classList.remove('hidden');
                
                setTimeout(() => {
                    // Download complete simulation
                    document.getElementById('spinner').classList.add('hidden');
                    document.getElementById('checkmark').classList.remove('hidden');
                    document.getElementById('success-title').innerText = "Download Started";
                    
                    // Trigger "Fake" file download
                    const link = document.createElement('a');
                    link.href = '#'; // In real app, this is the PDF url
                    link.download = resources[currentPostId].title + '.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);

                    setTimeout(() => {
                        closeModal();
                    }, 1500);
                }, 2500);
            }
        }

        function startDownloadSequence(skipModal) {
            if(skipModal) {
                // Use a toast or simple indicator ideally, but re-using modal for simplicity
                openModal('download');
                document.getElementById('modal-form-state').classList.add('hidden');
                document.getElementById('modal-success-state').classList.remove('hidden');
                document.getElementById('success-title').innerText = "Downloading...";
                document.getElementById('success-desc').innerText = "Since you're subscribed, your download is starting.";
                document.getElementById('download-progress').classList.remove('hidden');
                
                setTimeout(() => {
                    document.getElementById('spinner').classList.add('hidden');
                    document.getElementById('checkmark').classList.remove('hidden');
                    
                    const link = document.createElement('a');
                    link.href = '#'; 
                    link.download = resources[currentPostId].title + '.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    setTimeout(() => closeModal(), 1000);
                }, 2000);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-[#3F51B5] flex items-center justify-center text-white">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900">HEALTHGUIDES</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
</nav>

<main className="flex-grow" id="app-container">

<section className="max-w-[1440px] mx-auto px-6 py-12 md:py-20 transition-opacity duration-500" id="view-archive">
<div className="max-w-2xl mb-12">
<span className="text-xs font-semibold tracking-widest text-[#3F51B5] uppercase mb-3 block">Free Resources</span>
<h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Download Your Free Guides</h1>
<p className="text-slate-500 text-lg leading-relaxed">Get instant access to our collection of expertly crafted guides and templates designed to improve your health journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-pointer h-full flex flex-col" onclick="navigateToPost(0)">
<div className="h-48 overflow-hidden relative">
<img alt="Asthma and Breathing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">3 Ways to Get Asthma Under Control</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">Doctor-approved tips to manage asthma, breathe easier, and reduce flare-ups effectively.</p>
<button className="w-full py-2.5 px-4 bg-slate-50 hover:bg-[#3F51B5] text-[#3F51B5] hover:text-white border border-[#3F51B5] hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                            Download Free PDF
                        </button>
</div>
</article>

<article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-pointer h-full flex flex-col" onclick="navigateToPost(1)">
<div className="h-48 overflow-hidden relative">
<img alt="Skin Care and Citrus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Antioxidants Protect Skin</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">Discover antioxidants that protect skin, fight aging, and enhance your natural radiance.</p>
<button className="w-full py-2.5 px-4 bg-slate-50 hover:bg-[#3F51B5] text-[#3F51B5] hover:text-white border border-[#3F51B5] hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                            Download Free PDF
                        </button>
</div>
</article>

<article className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group cursor-pointer h-full flex flex-col" onclick="navigateToPost(2)">
<div className="h-48 overflow-hidden relative">
<img alt="Healthy Lifestyle and Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Reduce Your Cancer Risk</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">Learn lifestyle choices and nutrition habits that help lower cancer risks significantly.</p>
<button className="w-full py-2.5 px-4 bg-slate-50 hover:bg-[#3F51B5] text-[#3F51B5] hover:text-white border border-[#3F51B5] hover:border-transparent rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
                            Download Free PDF
                        </button>
</div>
</article>
</div>
</section>

<section className="hidden max-w-[1440px] mx-auto px-4 md:px-6 py-8 md:py-12 opacity-0 transition-opacity duration-500" id="view-post">

<button className="group flex items-center gap-2 text-sm text-slate-500 hover:text-[#3F51B5] transition-colors mb-8" onclick="backToArchive()">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                Back to Resources
            </button>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8">
<div className="mb-8">
<span className="text-xs font-medium text-[#3F51B5] bg-[#3F51B5]/5 px-3 py-1 rounded-full mb-4 inline-block">Guide</span>
<h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6" id="post-title"></h1>
<div className="aspect-video w-full rounded-2xl overflow-hidden mb-8 bg-slate-100">
<img alt="Featured" className="w-full h-full object-cover" id="post-image" src=""/>
</div>
</div>

<div className="relative">

<div className="relative overflow-hidden transition-all duration-700 max-h-[200px]" id="post-content-wrapper">
<div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
<p className="mb-4" id="post-body-start"></p>
<div className="space-y-4" id="post-body-rest">

</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent flex items-end justify-center pb-4" id="read-more-gradient">
</div>
</div>

<div className="absolute bottom-0 left-0 w-full flex justify-center pb-8 z-10" id="read-more-btn-container">
<button className="bg-white text-slate-900 border border-slate-200 hover:border-[#3F51B5] hover:text-[#3F51B5] shadow-lg shadow-slate-200/50 px-6 py-3 rounded-full font-medium text-sm transition-all transform hover:-translate-y-1 flex items-center gap-2" onclick="openModal('read')">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="18"></iconify-icon>
                                Read Full Article
                            </button>
</div>
</div>
</div>

<aside className="lg:col-span-4 space-y-6">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-[#3F51B5] shrink-0">
<iconify-icon icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Free PDF Guide</h3>
<p className="text-sm text-slate-500">Save this guide to read offline or print for reference.</p>
</div>
</div>
<button className="w-full bg-[#3F51B5] hover:bg-[#303F9F] text-white py-3.5 rounded-xl font-medium shadow-md shadow-indigo-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group" onclick="handleDownloadClick()">
<iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="solar:download-linear" width="20"></iconify-icon>
<span>Download Free PDF</span>
</button>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-xs text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secure</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:file-check-linear"></iconify-icon> PDF Format</span>
</div>
</div>
</aside>
</div>
</section>
</main>

<div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4" id="modal-backdrop">
<div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 transform scale-95 transition-all duration-300 relative overflow-hidden" id="modal-content">

<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>

<div id="modal-form-state">
<div className="mb-6 text-center">
<div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-[#3F51B5] mx-auto mb-4">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" id="modal-icon" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-900 mb-2" id="modal-title">Unlock the Full Article</h2>
<p className="text-sm text-slate-500" id="modal-desc">Enter your email address to continue reading.</p>
</div>
<form className="space-y-4" onsubmit="handleSubscribe(event)">
<div>
<label className="sr-only" htmlFor="email">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent transition-all sm:text-sm" id="email" placeholder="name@example.com" required="" type="email"/>
</div>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#3F51B5] hover:bg-[#303F9F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3F51B5] transition-all" id="modal-btn-text" type="submit">
                        Subscribe &amp; Continue
                    </button>
</form>
<p className="mt-4 text-xs text-center text-slate-400">No spam. Unsubscribe anytime.</p>
</div>

<div className="hidden text-center py-4" id="modal-success-state">
<div className="relative w-16 h-16 mx-auto mb-6">
<div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
<div className="absolute inset-0 border-4 border-[#3F51B5] rounded-full border-t-transparent animate-spin" id="spinner"></div>
<div className="absolute inset-0 flex items-center justify-center text-[#3F51B5] hidden" id="checkmark">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2" id="success-title">Preparing...</h3>

<div className="hidden w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden" id="download-progress">
<div className="bg-[#3F51B5] h-2 rounded-full animate-progress"></div>
</div>
<p className="text-sm text-slate-500" id="success-desc">Just a moment while we set things up.</p>
</div>
</div>
</div>


    </>
  );
}
