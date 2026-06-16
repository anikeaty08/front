import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky z-50 bg-black/20 border-white/10 border-b top-0 backdrop-blur-xl grayscale">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="md:hidden hidden flex-col gap-4 pb-6 border-t pt-4 border-white/10" id="mobileMenu">
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
        Products
      </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-building w-4 h-4" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
        Solutions
      </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
        Developers
      </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
        Pricing
      </a>
<a className="text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>Sign in</a>
</div>
</div>
</header>
<main className="">

<section className="isolate lg:pt-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/130dea6b-2314-48df-941c-6d720cdd8f04_3840w.webp)] bg-cover pt-0 relative scale-100">
<div className="sm:px-6 lg:px-8 bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4b81c19-1f4d-4f97-9b5e-476210e7c3e8_3840w.webp)] max-w-full bg-cover mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<h1 className="sm:text-5xl lg:text-7xl leading-tight animate-slide-up delay-500 text-4xl tracking-tight font-space-grotesk opacity-0">DEMONSTRATE DESIGN</h1>

<div className="lg:mt-24 animate-scale-in delay-800 -multi opacity-0 mt-24 relative" style={{}}>
<div className="flex flex-col sm:flex-row sm:gap-8 -multi items-center justify-center">
<div className="transform hover:rotate-[-8deg] transition-transform duration-500 overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 w-72 h-44 rounded-2xl relative rotate-[-12deg]">
<div className="bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6113da5-27bf-484c-94fe-5b61c9e36663_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20706e4b-4149-4f12-8767-d6d2637f0ac5_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d141bca6-d816-4592-a56e-a43ca7c5d7af_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 translate-y-6 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4563af4a-9b46-4ef4-85dc-7e3e2a973210_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/405619e6-647b-4332-b48e-59d53444eeb1_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b191f336-811a-4594-8c83-6a58c8b44378_1600w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 translate-y-16 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/858d38fd-31a3-4f38-a3d1-0f55fcfc501b_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edf4e467-e001-49ca-ba7d-9a7db7d0d288_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bbca775-9952-44df-a54a-7f0134c743dd_1600w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 z-[60] pointer-events-auto mt-8 mb-8 absolute translate-y-16 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fe73053-045b-48ef-9db4-344942da5b3a_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfcf2f34-9963-42cc-a70e-01431fa61d24_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d889a7a2-459a-4be7-b900-8b0c3783ad40_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 z-[60] pointer-events-auto mt-60 mb-60 absolute translate-y-16 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38f81d52-fa80-4ab8-8ab2-45c678b3fdd8_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07835275-67f4-4805-b498-7ca86169a594_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/355a8413-25c4-4a3c-9ef0-b46d5bf3258c_1600w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 mt-60 mb-60 pt-60 pb-30 absolute top-180 bottom-180 translate-y-16 scale-100 gap-x-20 gap-y-20 items-center">
<div className="transform hover:rotate-[-8deg] transition-transform duration-500 overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 w-72 h-44 rounded-2xl relative rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6f94fa2-6f75-46f7-93fa-dff39a11e32f_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e066692-2e55-4fc0-84f0-c65a12f5e519_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae7aecc8-985f-447b-a3ec-59c66ea6af15_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div>
</div>
</div>

<section className="isolate lg:pt-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/468f07f8-319b-4040-971a-1178d8a19c7f_3840w.webp)] bg-cover pt-0 relative scale-100" style={{visibility: 'hidden'}}>
<div className="sm:px-6 lg:px-8 bg-center text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4b81c19-1f4d-4f97-9b5e-476210e7c3e8_3840w.webp)] max-w-full bg-cover mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<h1 className="sm:text-5xl lg:text-7xl leading-tight animate-slide-up delay-500 text-4xl tracking-tight font-space-grotesk opacity-0">DEMONSTRATE DESIGN</h1>

<div className="lg:mt-24 animate-scale-in delay-800 -multi opacity-0 mt-24 relative" style={{}}>
<div className="flex flex-col sm:flex-row sm:gap-8 -multi items-center justify-center">
<div className="transform hover:rotate-[-8deg] transition-transform duration-500 overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 w-72 h-44 rounded-2xl relative rotate-[-12deg]">
<div className="bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6113da5-27bf-484c-94fe-5b61c9e36663_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20706e4b-4149-4f12-8767-d6d2637f0ac5_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d141bca6-d816-4592-a56e-a43ca7c5d7af_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 translate-y-6 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4563af4a-9b46-4ef4-85dc-7e3e2a973210_1600w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/405619e6-647b-4332-b48e-59d53444eeb1_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b191f336-811a-4594-8c83-6a58c8b44378_1600w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 translate-y-16 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/858d38fd-31a3-4f38-a3d1-0f55fcfc501b_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edf4e467-e001-49ca-ba7d-9a7db7d0d288_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bbca775-9952-44df-a54a-7f0134c743dd_1600w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 z-[60] pointer-events-auto mt-8 mb-8 absolute translate-y-16 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fe73053-045b-48ef-9db4-344942da5b3a_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfcf2f34-9963-42cc-a70e-01431fa61d24_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d889a7a2-459a-4be7-b900-8b0c3783ad40_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 z-[60] pointer-events-auto mt-60 mb-60 absolute translate-y-16 scale-100 items-center">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38f81d52-fa80-4ab8-8ab2-45c678b3fdd8_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07835275-67f4-4805-b498-7ca86169a594_1600w.png)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/355a8413-25c4-4a3c-9ef0-b46d5bf3258c_1600w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div><div className="flex flex-col sm:flex-row sm:gap-8 mt-60 mb-60 pt-60 pb-30 absolute top-180 bottom-180 translate-y-16 scale-100 gap-x-20 gap-y-20 items-center">
<div className="transform hover:rotate-[-8deg] transition-transform duration-500 overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 w-72 h-44 rounded-2xl relative rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6f94fa2-6f75-46f7-93fa-dff39a11e32f_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e066692-2e55-4fc0-84f0-c65a12f5e519_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="">
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="flex flex-col bg-center h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae7aecc8-985f-447b-a3ec-59c66ea6af15_1600w.png)] bg-cover pt-6 pr-6 pb-6 pl-6 relative space-y-20">
<div className="">
</div>
</div>
</div>
</div>
</div>
</div>

</section></section>


</main>


    </>
  );
}
