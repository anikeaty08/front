import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let selectedService = 'likes';
        
        const slider = document.getElementById('amountSlider');
        slider.addEventListener('input', function() {
            document.getElementById('amountValue').textContent = this.value;
        });

        function searchUser() {
            const username = document.getElementById('username').value.trim();
            if (!username) {
                alert('Please enter your TikTok username');
                return;
            }
            
            document.getElementById('displayName').textContent = username.charAt(0).toUpperCase() + username.slice(1);
            document.getElementById('displayHandle').textContent = '@' + username;
            document.getElementById('avatar').textContent = username.charAt(0).toUpperCase();
            document.getElementById('profileCard').classList.remove('hidden');
        }

        function selectService(service) {
            selectedService = service;
            document.querySelectorAll('.service-btn').forEach(btn => {
                btn.classList.remove('border-pink-500');
                btn.classList.add('border-zinc-700');
            });
            document.getElementById('btn-' + service).classList.remove('border-zinc-700');
            document.getElementById('btn-' + service).classList.add('border-pink-500');
            document.getElementById('serviceLabel').textContent = service.charAt(0).toUpperCase() + service.slice(1);
        }

        function startProcess() {
            document.getElementById('profileCard').classList.add('hidden');
            document.getElementById('progressCard').classList.remove('hidden');
            
            const steps = [
                { progress: 20, text: 'Connecting to TikTok API...' },
                { progress: 40, text: 'Validating account...' },
                { progress: 60, text: 'Generating ' + selectedService + '...' },
                { progress: 80, text: 'Sending to your profile...' },
                { progress: 100, text: 'Finalizing...' }
            ];
            
            let currentStep = 0;
            const interval = setInterval(() => {
                if (currentStep < steps.length) {
                    document.getElementById('progressBar').style.width = steps[currentStep].progress + '%';
                    document.getElementById('progressText').textContent = steps[currentStep].text;
                    currentStep++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        document.getElementById('progressCard').classList.add('hidden');
                        document.getElementById('successCard').classList.remove('hidden');
                        document.getElementById('successService').textContent = selectedService;
                    }, 500);
                }
            }, 1000);
        }

        function resetForm() {
            document.getElementById('successCard').classList.add('hidden');
            document.getElementById('profileCard').classList.remove('hidden');
            document.getElementById('progressBar').style.width = '0%';
        }

        function toggleFaq(element) {
            const content = element.nextElementSibling;
            const icon = element.querySelector('.faq-icon');
            content.classList.toggle('hidden');
            icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(45deg)';
        }

        // Select likes by default
        selectService('likes');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 z-50">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">TB</span>
</div>
<span className="text-lg font-semibold tracking-tight">TokBoost</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<button className="bg-gradient-to-r from-pink-500 to-cyan-400 text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Get Started
            </button>
</div>
</nav>

<section className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-xs text-zinc-400 mb-8">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                100% Free &amp; Working in 2024
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                Grow Your TikTok<br/>Instantly &amp; Free
            </h1>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
                Get real likes, followers, and views on your TikTok account. No password required, completely free, and works instantly.
            </p>

<div className="max-w-md mx-auto bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
<div className="mb-4">
<label className="block text-left text-sm text-zinc-400 mb-2">Your TikTok Username</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">@</span>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors" id="username" placeholder="username" type="text"/>
</div>
</div>
<button className="w-full bg-gradient-to-r from-pink-500 to-cyan-400 font-medium py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2" onclick="searchUser()">
<iconify-icon height="18" icon="lucide:search" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Find My Profile
                </button>
</div>

<div className="hidden max-w-md mx-auto mt-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6" id="profileCard">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-full flex items-center justify-center text-xl font-semibold" id="avatar">
                        U
                    </div>
<div className="text-left">
<h3 className="font-semibold text-lg" id="displayName">Username</h3>
<p className="text-sm text-zinc-400" id="displayHandle">@username</p>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-left text-sm text-zinc-400 mb-2">Select Service</label>
<div className="grid grid-cols-3 gap-2">
<button className="service-btn bg-zinc-800 border-2 border-zinc-700 rounded-xl py-3 text-sm hover:border-pink-500 transition-colors" id="btn-likes" onclick="selectService('likes')">
<iconify-icon className="mx-auto mb-1" height="20" icon="lucide:heart" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Likes
                            </button>
<button className="service-btn bg-zinc-800 border-2 border-zinc-700 rounded-xl py-3 text-sm hover:border-pink-500 transition-colors" id="btn-followers" onclick="selectService('followers')">
<iconify-icon className="mx-auto mb-1" height="20" icon="lucide:users" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Followers
                            </button>
<button className="service-btn bg-zinc-800 border-2 border-zinc-700 rounded-xl py-3 text-sm hover:border-pink-500 transition-colors" id="btn-views" onclick="selectService('views')">
<iconify-icon className="mx-auto mb-1" height="20" icon="lucide:eye" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                                Views
                            </button>
</div>
</div>
<div>
<label className="block text-left text-sm text-zinc-400 mb-2">Amount: <span className="text-white font-medium" id="amountValue">500</span></label>
<input className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer" id="amountSlider" max="1000" min="100" style={{accentColor: '#ec4899'}} type="range" value="500"/>
</div>
<button className="w-full bg-gradient-to-r from-pink-500 to-cyan-400 font-medium py-3 rounded-xl hover:opacity-90 transition-opacity" onclick="startProcess()">
                        Send Free <span id="serviceLabel">Likes</span>
</button>
</div>
</div>

<div className="hidden max-w-md mx-auto mt-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6" id="progressCard">
<div className="flex items-center justify-center gap-3 mb-4">
<div className="w-6 h-6 border-2 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
<span className="text-zinc-300">Processing your request...</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-3 mb-2">
<div className="bg-gradient-to-r from-pink-500 to-cyan-400 h-3 rounded-full transition-all duration-300" id="progressBar" style={{width: '0%'}}></div>
</div>
<p className="text-sm text-zinc-400" id="progressText">Connecting to servers...</p>
</div>

<div className="hidden max-w-md mx-auto mt-6 bg-zinc-900/50 border border-green-800/50 rounded-2xl p-6" id="successCard">
<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-green-500" height="32" icon="lucide:check" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Success!</h3>
<p className="text-zinc-400 mb-4">Your free <span id="successService">likes</span> are being delivered. It may take up to 5 minutes to appear on your profile.</p>
<button className="text-pink-500 hover:text-pink-400 transition-colors text-sm font-medium" onclick="resetForm()">
                    Send More →
                </button>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-zinc-800/50" id="features">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-4">Why Choose TokBoost?</h2>
<p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">Trusted by over 500,000 TikTok creators worldwide</p>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
<div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
<iconify-icon className="text-pink-500" height="24" icon="lucide:zap" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Instant Delivery</h3>
<p className="text-sm text-zinc-400">Your likes and followers start appearing within minutes of your request.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
<div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
<iconify-icon className="text-cyan-500" height="24" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">100% Safe</h3>
<p className="text-sm text-zinc-400">We never ask for your password. Your account stays secure and protected.</p>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
<div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
<iconify-icon className="text-green-500" height="24" icon="lucide:infinity" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Unlimited &amp; Free</h3>
<p className="text-sm text-zinc-400">No hidden fees, no subscriptions. Use our service as many times as you want.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-900/30 border-y border-zinc-800/50">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">2.5M+</div>
<div className="text-sm text-zinc-400 mt-1">Likes Delivered</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">500K+</div>
<div className="text-sm text-zinc-400 mt-1">Happy Users</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">1M+</div>
<div className="text-sm text-zinc-400 mt-1">Followers Sent</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">99.9%</div>
<div className="text-sm text-zinc-400 mt-1">Uptime</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium">Is this service really free?</span>
<iconify-icon className="text-zinc-400 faq-icon transition-transform" height="20" icon="lucide:plus" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content hidden px-5 pb-5 text-sm text-zinc-400">
                        Yes, our service is completely free! We're supported by ads and optional premium features, so basic likes and followers are always free.
                    </div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium">Do you need my password?</span>
<iconify-icon className="text-zinc-400 faq-icon transition-transform" height="20" icon="lucide:plus" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content hidden px-5 pb-5 text-sm text-zinc-400">
                        Never! We only need your username. We will never ask for your password or any sensitive information.
                    </div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="font-medium">How long does delivery take?</span>
<iconify-icon className="text-zinc-400 faq-icon transition-transform" height="20" icon="lucide:plus" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content hidden px-5 pb-5 text-sm text-zinc-400">
                        Most orders are delivered within 1-5 minutes. During peak times, it may take up to 15 minutes.
                    </div>
</div>
</div>
</div>
</section>

<footer className="py-10 px-6 border-t border-zinc-800/50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-md flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">TB</span>
</div>
<span className="text-sm text-zinc-400">© 2024 TokBoost. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
