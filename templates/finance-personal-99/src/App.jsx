import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#2563eb', // Blue 600
primaryHover: '#1d4ed8', // Blue 700
secondary: '#0f172a', // Slate 900
}
}
}
}



        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        function switchTab(type) {
            const salariedBtn = document.getElementById('btn-salaried');
            const businessBtn = document.getElementById('btn-business');
            const salariedContent = document.getElementById('content-salaried');
            const businessContent = document.getElementById('content-business');

            if(type === 'salaried') {
                salariedBtn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
                salariedBtn.classList.remove('text-slate-500');
                
                businessBtn.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
                businessBtn.classList.add('text-slate-500');

                salariedContent.classList.remove('hidden');
                businessContent.classList.add('hidden');
            } else {
                businessBtn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
                businessBtn.classList.remove('text-slate-500');
                
                salariedBtn.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
                salariedBtn.classList.add('text-slate-500');

                businessContent.classList.remove('hidden');
                salariedContent.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 backdrop-blur-md border-b bg-white/80 border-emerald-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-600 text-white">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight text-emerald-900">FinEase</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-500">
<a className="transition-colors hover:text-cyan-600" href="#benefits">Benefits</a>
<a className="transition-colors hover:text-cyan-600" href="#eligibility">Eligibility</a>
<a className="transition-colors hover:text-cyan-600" href="#reviews">Reviews</a>
<a className="transition-colors hover:text-cyan-600" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-900" href="#contact">Contact Support</a>
<a className="text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow-md flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white" href="#apply">
<span>Apply Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden p-2 text-emerald-600" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-b p-4 absolute w-full bg-white border-emerald-200" id="mobile-menu">
<div className="flex flex-col gap-4 text-sm font-medium">
<a className="text-emerald-600" href="#benefits">Benefits</a>
<a className="text-emerald-600" href="#eligibility">Eligibility</a>
<a className="text-emerald-600" href="#reviews">Reviews</a>
<a className="px-4 py-2 rounded-lg text-center bg-cyan-600 text-white" href="#apply">Apply Now</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-100/50 via-emerald-50 to-white"></div>
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-cyan-50 border-cyan-100 text-cyan-600">
<iconify-icon icon="solar:verified-check-linear" width="14"></iconify-icon>
        Trusted by 10,000+ Indians
    </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.1] text-emerald-900">
        Get Instant Personal Loan <br className="hidden sm:block"/> <span className="text-cyan-600">Easily &amp; Securely</span>
</h1>
<p className="text-base sm:text-lg text-emerald-500 mb-8 max-w-2xl mx-auto leading-relaxed">
        Experience hassle-free financing with minimal documentation. Whether you are salaried or a business owner, we
        provide quick approvals and competitive interest rates tailored to your needs.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 font-medium rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-200" href="#apply">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
            Apply Now
        </a>
<a className="w-full sm:w-auto px-8 py-3 border font-medium rounded-xl transition-all flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 border-emerald-200 text-emerald-700" href="#contact">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            Get Assistance
        </a>
</div>

<div className="mt-12 pt-8 border-t flex flex-wrap justify-center gap-6 sm:gap-12 opacity-70 grayscale border-emerald-200/60">
<div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon> Safe &amp; Secure
        </div>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon> 24hr Approval
        </div>
<div className="flex items-center gap-2 text-sm font-medium text-emerald-500">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon> Paperless Process
        </div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-emerald-900">Why Choose Us?</h2>
<p className="text-emerald-500 max-w-xl">We simplify the lending process so you can focus on your goals, not the paperwork.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group border-emerald-100 bg-emerald-50 hover:bg-white hover:shadow-emerald-100">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-white border-emerald-200 text-cyan-600">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-emerald-900">Instant Approval</h3>
<p className="text-sm text-emerald-500 leading-relaxed">Get your loan approved within hours. Our AI-driven process ensures minimal waiting time.</p>
</div>

<div className="p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group border-emerald-100 bg-emerald-50 hover:bg-white hover:shadow-emerald-100">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-white border-emerald-200 text-sky-600">
<iconify-icon icon="solar:percent-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-emerald-900">Low Interest Rates</h3>
<p className="text-sm text-emerald-500 leading-relaxed">Competitive interest rates starting as low as 10.99% p.a. tailored to your credit profile.</p>
</div>

<div className="p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 group border-emerald-100 bg-emerald-50 hover:bg-white hover:shadow-emerald-100">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-white border-emerald-200 text-indigo-600">
<iconify-icon icon="solar:file-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-emerald-900">Minimal Documentation</h3>
<p className="text-sm text-emerald-500 leading-relaxed">Upload your Aadhar and PAN digitally. No physical branch visits required.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-emerald-50" id="eligibility">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-emerald-900">Eligibility &amp; Documents</h2>
<p className="text-emerald-500">Select your profile to view specific requirements.</p>
</div>

<div className="flex justify-center mb-8">
<div className="p-1 rounded-xl border inline-flex shadow-sm bg-white border-emerald-200">
<button className="px-6 py-2 rounded-lg text-sm font-medium transition-all shadow-sm bg-emerald-900 text-white" id="btn-salaried" onclick="switchTab('salaried')">
                        Salaried Person
                    </button>
<button className="px-6 py-2 rounded-lg text-sm font-medium text-emerald-500 transition-all hover:text-emerald-900" id="btn-business" onclick="switchTab('business')">
                        Business Owner
                    </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div className="rounded-2xl border p-8 shadow-sm h-full bg-white border-emerald-200">

<div className="" id="content-salaried">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-cyan-50 text-cyan-600">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-900">For Salaried Employees</h3>
</div>
<div className="space-y-6">
<div className="">
<h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-xs text-emerald-900">Criteria</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-emerald-600">
<iconify-icon className="text-sky-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>Age: 21 to 60 years</span>
</li>
<li className="flex items-start gap-3 text-sm text-emerald-600">
<iconify-icon className="text-sky-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>Min Salary: ₹20,000/month (Credit to Bank)</span>
</li>
<li className="flex items-start gap-3 text-sm text-emerald-600">
<iconify-icon className="text-sky-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>Work Exp: Minimum 6 months in current company</span>
</li>
</ul>
</div>
<div className="h-px bg-emerald-100"></div>
<div>
<h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-xs text-emerald-900">Required Documents</h4>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<li className="flex items-center gap-2 text-sm p-2 rounded-lg border text-emerald-600 bg-emerald-50 border-emerald-100">
<iconify-icon className="text-cyan-500" icon="solar:card-2-linear"></iconify-icon> Aadhar Card
                                    </li>
<li className="flex items-center gap-2 text-sm p-2 rounded-lg border text-emerald-600 bg-emerald-50 border-emerald-100">
<iconify-icon className="text-cyan-500" icon="solar:card-linear"></iconify-icon> PAN Card
                                    </li>
<li className="flex items-center gap-2 text-sm p-2 rounded-lg border text-emerald-600 bg-emerald-50 border-emerald-100">
<iconify-icon className="text-cyan-500" icon="solar:bill-list-linear"></iconify-icon> Last 3 Months Payslip
                                    </li>
</ul>
</div>
</div>
</div>

<div className="hidden" id="content-business">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-emerald-900">For Business Owners</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-xs text-emerald-900">Criteria</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-emerald-600">
<iconify-icon className="text-sky-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>Age: 25 to 65 years</span>
</li>
<li className="flex items-start gap-3 text-sm text-emerald-600">
<iconify-icon className="text-sky-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>Business Vintage: Minimum 3 years</span>
</li>
<li className="flex items-start gap-3 text-sm text-emerald-600">
<iconify-icon className="text-sky-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>ITR Filed: Minimum ₹2.5 Lakhs p.a.</span>
</li>
</ul>
</div>
<div className="h-px bg-emerald-100"></div>
<div>
<h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-xs text-emerald-900">Required Documents</h4>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<li className="flex items-center gap-2 text-sm p-2 rounded-lg border text-emerald-600 bg-emerald-50 border-emerald-100">
<iconify-icon className="text-indigo-500" icon="solar:card-2-linear"></iconify-icon> Aadhar &amp; PAN
                                    </li>
<li className="flex items-center gap-2 text-sm p-2 rounded-lg border text-emerald-600 bg-emerald-50 border-emerald-100">
<iconify-icon className="text-indigo-500" icon="solar:file-text-linear"></iconify-icon> Last 2 Years ITR
                                    </li>
<li className="flex items-center gap-2 text-sm p-2 rounded-lg border text-emerald-600 bg-emerald-50 border-emerald-100">
<iconify-icon className="text-indigo-500" icon="solar:buildings-2-linear"></iconify-icon> Business Reg. Proof
                                    </li>
</ul>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden flex items-center justify-center bg-emerald-200">
<div className="absolute inset-0 bg-emerald-900">

<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 text-center p-8">
<div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-md rounded-2xl border mb-6 bg-white/10 border-white/20 text-white">
<iconify-icon icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-2 text-white">High Approval Rate</h3>
<p className="text-sm text-emerald-400">We process over 500+ applications daily with a 95% success rate for eligible candidates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="apply">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-2 text-emerald-900">Get Your Loan Estimate</h2>
<p className="text-emerald-500 mb-8">Fill in the details below and our executive will contact you shortly.</p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Enquiry Submitted!');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-emerald-700">Full Name</label>
<input className="w-full p-3 border rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm bg-emerald-50 border-emerald-200" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-emerald-700">Phone Number</label>
<input className="w-full p-3 border rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm bg-emerald-50 border-emerald-200" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-emerald-700">Loan Amount (₹)</label>
<input className="w-full p-3 border rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm bg-emerald-50 border-emerald-200" placeholder="e.g. 100000" type="number"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-emerald-700">Employment Type</label>
<select className="w-full p-3 border rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm bg-emerald-50 border-emerald-200 text-emerald-600">
<option>Salaried</option>
<option>Business Owner</option>
<option>Self Employed</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase text-emerald-700">Message (Optional)</label>
<textarea className="w-full p-3 border rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm resize-none bg-emerald-50 border-emerald-200" placeholder="Tell us about your requirement..." rows="3"></textarea>
</div>
<div className="flex items-center gap-2 text-xs text-emerald-500">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                            Your data is secure and will not be shared.
                        </div>
<button className="w-full font-medium py-3 rounded-xl shadow-lg transition-all flex justify-center items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-200" type="submit">
                            Submit Enquiry
                            <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="flex flex-col justify-center h-full space-y-6" id="contact">
<div className="p-8 rounded-2xl shadow-xl relative overflow-hidden bg-emerald-900 text-white">
<div className="relative z-10">
<h3 className="text-xl font-medium mb-1">Need Immediate Help?</h3>
<p className="text-sm mb-6 text-emerald-400">Reach out to us directly via call or WhatsApp.</p>
<div className="space-y-4">
<a className="flex items-center gap-4 group" href="tel:+918076273631">
<div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all bg-white/10">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-emerald-400">Call Us</div>
<div className="font-medium text-lg">+91 80762 73631</div>
</div>
</a>
<a className="flex items-center gap-4 group" href="https://wa.me/918076273631">
<div className="w-10 h-10 bg-sky-500/20 rounded-full flex items-center justify-center group-hover:bg-sky-500/30 transition-all text-sky-400">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-emerald-400">WhatsApp Us</div>
<div className="font-medium text-lg">Chat for Enquiry</div>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-emerald-400">Visit Us</div>
<div className="font-medium text-sm">Sector 18, Noida, Uttar Pradesh, India</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
</div>

<div className="w-full h-40 rounded-xl border flex items-center justify-center overflow-hidden bg-emerald-100 border-emerald-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y bg-emerald-50 border-emerald-200" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-2 text-emerald-900">Customer Stories</h2>
<p className="text-emerald-500">See what our valued customers have to say about our services.</p>
</div>

<button className="text-sm font-medium flex items-center gap-1 text-cyan-600 hover:text-cyan-700" onclick="document.getElementById('review-form').classList.toggle('hidden')">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Write a Review
                </button>
</div>

<div className="hidden mb-12 p-6 rounded-2xl border shadow-sm max-w-xl mx-auto animate-fade-in bg-white border-emerald-200" id="review-form">
<h3 className="text-lg font-medium mb-4">Submit Your Review</h3>
<form className="space-y-4" onsubmit="event.preventDefault(); this.reset(); alert('Review submitted for moderation!');">
<input className="w-full p-2 border rounded-lg text-sm border-emerald-200" placeholder="Your Name" required="" type="text"/>
<textarea className="w-full p-2 border rounded-lg text-sm border-emerald-200" placeholder="Your experience..." required=""></textarea>
<div className="flex justify-end">
<button className="text-sm px-4 py-2 rounded-lg bg-emerald-900 text-white">Post Review</button>
</div>
</form>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-emerald-100">
<div className="flex items-center gap-1 mb-4 text-cyan-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 text-emerald-600">"Excellent service! I got my personal loan approved within 24 hours. The documentation process was very smooth and fully digital."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-cyan-100 text-cyan-600">R</div>
<div>
<div className="text-sm font-medium text-emerald-900">Rahul Sharma</div>
<div className="text-xs text-emerald-400">Delhi</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-emerald-100">
<div className="flex items-center gap-1 mb-4 text-cyan-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="opacity-50" icon="solar:star-bold-duotone"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 text-emerald-600">"Needed a business loan for expansion. The team guided me perfectly regarding ITR requirements. Highly recommended for business owners."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-sky-100 text-sky-600">P</div>
<div>
<div className="text-sm font-medium text-emerald-900">Priya Patel</div>
<div className="text-xs text-emerald-400">Mumbai</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-emerald-100">
<div className="flex items-center gap-1 mb-4 text-cyan-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed mb-6 text-emerald-600">"Very transparent about interest rates and processing fees. No hidden charges. The WhatsApp support is very responsive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-indigo-100 text-indigo-600">A</div>
<div>
<div className="text-sm font-medium text-emerald-900">Amit Verma</div>
<div className="text-xs text-emerald-400">Bangalore</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-center mb-12 text-emerald-900">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group p-4 rounded-xl border [&amp;_summary::-webkit-details-marker]:hidden bg-emerald-50 border-emerald-200">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="font-medium text-emerald-900">What is a Personal Loan?</h3>
<span className="group-open:rotate-180 transition-transform text-emerald-400"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="mt-4 text-sm text-emerald-500 leading-relaxed">
                        A personal loan is an unsecured loan provided by financial institutions based on criteria like employment history, repayment capacity, income level, profession, and credit history. It does not require any collateral.
                    </p>
</details>

<details className="group p-4 rounded-xl border [&amp;_summary::-webkit-details-marker]:hidden bg-emerald-50 border-emerald-200">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="font-medium text-emerald-900">What is the minimum CIBIL score required?</h3>
<span className="group-open:rotate-180 transition-transform text-emerald-400"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="mt-4 text-sm text-emerald-500 leading-relaxed">
                        Generally, a CIBIL score of 700 or above is considered good for personal loan approval. However, we also have partners who consider applicants with lower scores based on other eligibility factors.
                    </p>
</details>

<details className="group p-4 rounded-xl border [&amp;_summary::-webkit-details-marker]:hidden bg-emerald-50 border-emerald-200">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="font-medium text-emerald-900">How long does it take for approval?</h3>
<span className="group-open:rotate-180 transition-transform text-emerald-400"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="mt-4 text-sm text-emerald-500 leading-relaxed">
                        If all your documents are in order, initial approval can happen within minutes. Disbursement usually takes 24 to 48 hours after verification.
                    </p>
</details>

<details className="group p-4 rounded-xl border [&amp;_summary::-webkit-details-marker]:hidden bg-emerald-50 border-emerald-200">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="font-medium text-emerald-900">Is there a prepayment penalty?</h3>
<span className="group-open:rotate-180 transition-transform text-emerald-400"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="mt-4 text-sm text-emerald-500 leading-relaxed">
                        Foreclosure charges vary by lender, typically ranging from 0% to 4% of the outstanding principal amount. This will be clearly mentioned in your loan agreement.
                    </p>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t bg-emerald-900 text-emerald-400 border-emerald-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
<span className="font-medium text-lg">FinEase</span>
</div>
<p className="text-xs leading-relaxed">Your trusted partner for instant personal and business loans in India. Transparent, fast, and secure.</p>
</div>
<div>
<h4 className="font-medium mb-4 text-sm text-white">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="transition-colors hover:text-white" href="#">Personal Loan</a></li>
<li><a className="transition-colors hover:text-white" href="#">Business Loan</a></li>
<li><a className="transition-colors hover:text-white" href="#">Debt Consolidation</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm text-white">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="transition-colors hover:text-white" href="#">About Us</a></li>
<li><a className="transition-colors hover:text-white" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-white" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm text-white">Connect</h4>
<div className="flex gap-4">
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-emerald-800">
<p className="text-xs">© 2023 FinEase India. All rights reserved.</p>
<p className="text-xs">Interest rates are subject to market risks and bank policies.</p>
</div>
</div>
</footer>



    </>
  );
}
