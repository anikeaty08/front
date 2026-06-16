import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 backdrop-blur-md bg-slate-50/80 border-b border-slate-200/50">
<div className="font-medium text-lg tracking-tight text-slate-900">NAUFAL ASYAM</div>
<div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-slate-500">
<a className="nav-link relative hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="nav-link relative hover:text-slate-900 transition-colors" href="#skills">Skills</a>
<a className="nav-link relative hover:text-slate-900 transition-colors" href="#projects">Projects</a>
<a className="nav-link relative hover:text-slate-900 transition-colors" href="#experience">Experience</a>
</div>
</nav>


<div className="main-wrapper">

<section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
<div className="max-w-4xl">
<div className="flex items-center gap-3 mb-6">
<div className="h-[1px] w-8 bg-blue-900"></div>
<span className="text-xs uppercase tracking-widest text-blue-900 font-medium">Professional Portfolio</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-slate-900 leading-[1.1] mb-6">
                    Engineering the <br/>
<span className="text-blue-900">intelligent</span> future.
                </h1>
<h2 className="text-sm md:text-base uppercase tracking-widest text-slate-500 mb-8 font-normal">
                    Electrical Engineer • IoT Developer • Robotics &amp; Renewable Energy
                </h2>
<p className="text-base md:text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
                    Lulusan SMK Telkom Sidoarjo dan Mahasiswa Teknik Elektro di Telkom University. 
                    Berfokus menjembatani sistem fisik dan kecerdasan digital melalui pengembangan arsitektur IoT komersial, 
                    robotika, dan integrasi embedded system untuk aplikasi dunia nyata.
                </p>
<div className="mt-12">
<a className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-full text-sm font-medium hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all" href="#projects">
                        View Projects
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>


<section className="py-24 px-6 md:px-20 border-t border-slate-200" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
<div className="md:col-span-4">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-slate-900 mb-8">About Me</h2>

<img alt="Naufal Asyam Studio Portrait" className="w-full max-w-xs rounded-2xl border border-slate-200 shadow-sm object-cover aspect-[4/5] hover:shadow-md transition-shadow" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd5161ce-a568-4e8c-852d-5b20b30c6240_800w.jpg"/>
</div>
<div className="md:col-span-8 text-base md:text-lg text-slate-600 font-light leading-relaxed space-y-6">
<p>
                        Saya adalah lulusan SMK Telkom Sidoarjo jurusan Teknik Jaringan Akses Telekomunikasi. Di sana, saya membangun fondasi yang kuat dalam bidang telekomunikasi, termasuk keahlian dalam <em>network cabling</em> dan infrastruktur FTTH (Fiber To The Home).
                    </p>
<p>
                        Saat ini, saya sedang menempuh pendidikan sebagai mahasiswa Teknik Elektro di Telkom University. Fokus eksplorasi dan riset saya berada pada persimpangan antara Internet of Things (IoT), Embedded System, Robotika, dan Energi Terbarukan. Pendekatan engineering saya selalu didasarkan pada pemahaman mendalam terkait integrasi <em>hardware</em> dan <em>software</em>.
                    </p>
<p>
                        Saya memiliki pengalaman praktis dalam merancang sistem IoT untuk kebutuhan komersial maupun <em>prototype</em>, pengembangan robot edukasi, hingga pemrograman <em>embedded system</em> berbasis <em>task</em> dan RTOS. Saya percaya inovasi terbaik lahir dari sistem yang kokoh secara elektris namun cerdas dalam memproses data.
                    </p>
</div>
</div>
</section>


<section className="py-24 px-6 md:px-20 bg-white" id="skills">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-slate-900">Technical Expertise</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50/50">
<iconify-icon className="text-blue-900 mb-6" icon="solar:cpu-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-4 text-slate-900">Electrical &amp; IoT</h3>
<ul className="space-y-3 text-sm text-slate-600 font-light">
<li>Commercial &amp; Prototype IoT</li>
<li>Embedded System (Task-based)</li>
<li>RTOS Based Programming</li>
<li>STM32 (Basic-Intermediate)</li>
<li>Renewable Energy Systems</li>
</ul>
</div>

<div className="p-8 border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50/50">
<iconify-icon className="text-blue-900 mb-6" icon="solar:smart-home-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-4 text-slate-900">Robotics</h3>
<ul className="space-y-3 text-sm text-slate-600 font-light">
<li>Educational Robot Dev</li>
<li>ROS (Basic Level)</li>
<li>Python for Robot Ops</li>
<li>Autonomous Systems</li>
</ul>
</div>

<div className="p-8 border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50/50">
<iconify-icon className="text-blue-900 mb-6" icon="solar:code-square-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-4 text-slate-900">Programming &amp; Data</h3>
<ul className="space-y-3 text-sm text-slate-600 font-light">
<li>Python &amp; R</li>
<li>Data Analysis</li>
<li>Data Visualization</li>
<li>Orange Data Mining</li>
</ul>
</div>

<div className="p-8 border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50/50">
<iconify-icon className="text-blue-900 mb-6" icon="solar:routing-2-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-4 text-slate-900">Telecom &amp; Tools</h3>
<ul className="space-y-3 text-sm text-slate-600 font-light">
<li>Network Cabling</li>
<li>Fiber Optic / FTTH</li>
<li>Hardware Integration</li>
<li>Basic Electronics Tools</li>
</ul>
</div>
</div>
</div>
</section>


<section className="py-24 bg-[#0a0f1d] text-white" id="projects">
<div className="max-w-7xl mx-auto px-6 md:px-20 mb-16">
<div className="flex items-center gap-3 mb-4">
<div className="h-[1px] w-8 bg-white/30"></div>
<span className="text-xs uppercase tracking-widest text-white/50">Selected Works</span>
</div>
<h2 className="text-4xl md:text-6xl tracking-tight font-medium">Featured Projects</h2>
</div>
<div className="stack-container max-w-7xl mx-auto px-6 md:px-20">

<div className="project-card">
<div className="w-full h-full bg-[#111827] border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
<div className="p-10 md:p-16 flex flex-col justify-center">
<div className="text-xs font-mono text-blue-400 mb-4 tracking-widest">01</div>
<h3 className="text-3xl tracking-tight font-medium mb-4">Smart Garden IoT</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                                Sistem otomasi perawatan taman berbasis Internet of Things yang ditenagai oleh energi terbarukan. Mengumpulkan data kelembapan tanah dan cuaca untuk efisiensi penyiraman otomatis.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">IoT</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Renewable Energy</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Automation</span>
</div>
</div>
<div className="hidden md:block bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-blue-900/40 mix-blend-overlay"></div>
<img alt="Smart Garden" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1585320806055-e71161271e1b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="project-card">
<div className="w-full h-full bg-[#111827] border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
<div className="p-10 md:p-16 flex flex-col justify-center">
<div className="text-xs font-mono text-blue-400 mb-4 tracking-widest">02</div>
<h3 className="text-3xl tracking-tight font-medium mb-4">Smart Home Temp Monitoring</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                                Infrastruktur pemantauan suhu rumah pintar secara real-time. Menggunakan sensor presisi dan integrasi komersial untuk aktuasi sistem pendingin ruangan otomatis.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Embedded System</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Sensors</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Cloud</span>
</div>
</div>
<div className="hidden md:block bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 mix-blend-overlay"></div>
<img alt="Smart Home" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="project-card">
<div className="w-full h-full bg-[#111827] border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
<div className="p-10 md:p-16 flex flex-col justify-center">
<div className="text-xs font-mono text-blue-400 mb-4 tracking-widest">03</div>
<h3 className="text-3xl tracking-tight font-medium mb-4">Face ID Attendance System</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                                Sistem presensi canggih berbasis IoT dan AI yang mengimplementasikan pengenalan wajah. Memproses data secara efisien untuk pencatatan kehadiran yang akurat dan terintegrasi database.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">AI / Vision</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">IoT</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Python</span>
</div>
</div>
<div className="hidden md:block bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 mix-blend-overlay"></div>
<img alt="Face ID" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="project-card">
<div className="w-full h-full bg-[#111827] border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
<div className="p-10 md:p-16 flex flex-col justify-center">
<div className="text-xs font-mono text-blue-400 mb-4 tracking-widest">04</div>
<h3 className="text-3xl tracking-tight font-medium mb-4">UAV VTOL Robotics Project</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                                Proyek riset dan pengembangan Unmanned Aerial Vehicle (UAV) berjenis Vertical Take-Off and Landing. Fokus pada operasi dasar mekanik dan kontrol elektronik penerbangan.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Robotics</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Control System</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Hardware</span>
</div>
</div>
<div className="hidden md:block bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-700/40 mix-blend-overlay"></div>
<img alt="UAV VTOL" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="project-card">
<div className="w-full h-full bg-[#111827] border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
<div className="p-10 md:p-16 flex flex-col justify-center">
<div className="text-xs font-mono text-blue-400 mb-4 tracking-widest">05</div>
<h3 className="text-3xl tracking-tight font-medium mb-4">Robot Edukasi</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                                Merancang dan merakit platform robotik skala kecil untuk tujuan pendidikan. Proyek ini mendemonstrasikan integrasi sensor dasar dan motor untuk mengajarkan logika pemrograman.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Education</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Microcontroller</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Basic Robotics</span>
</div>
</div>
<div className="hidden md:block bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-orange-900/40 mix-blend-overlay"></div>
<img alt="Educational Robot" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="project-card">
<div className="w-full h-full bg-[#111827] border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
<div className="p-10 md:p-16 flex flex-col justify-center">
<div className="text-xs font-mono text-blue-400 mb-4 tracking-widest">06</div>
<h3 className="text-3xl tracking-tight font-medium mb-4">Data Analysis Project</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed mb-8">
                                Menggunakan Python, R, dan Orange Data Mining untuk mengekstraksi wawasan dari dataset, melakukan pembersihan data, serta membangun visualisasi untuk keputusan analitis.
                            </p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Python / R</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Orange Data Mining</span>
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5">Analytics</span>
</div>
</div>
<div className="hidden md:block bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-blue-900/40 mix-blend-overlay"></div>
<img alt="Data Analysis" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 px-6 md:px-20 bg-white border-t border-slate-200" id="experience">

<div className="max-w-7xl mx-auto mb-16 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative">
<img alt="Presentation on IoT and Global Warming" className="w-full h-64 md:h-[400px] object-cover object-center hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ed8ab4c-982d-4a3b-9829-390ed8578882_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
<p className="text-white font-medium tracking-tight text-lg md:text-xl">IoT &amp; Global Warming Presentation</p>
</div>
</div>
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

<div>
<h2 className="text-2xl tracking-tight font-medium text-slate-900 mb-10 flex items-center gap-3">
<iconify-icon className="text-blue-900" icon="solar:case-linear"></iconify-icon>
                        Professional Experience
                    </h2>
<div className="space-y-8">
<div className="group">
<h3 className="text-base font-medium text-slate-900">Robotics Instructor</h3>
<p className="text-sm font-light text-slate-500 mt-1 mb-2">Mengajar fundamental robotik, implementasi IoT, dan dasar elektronika terapan untuk pengembangan prototipe hardware.</p>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div className="group">
<h3 className="text-base font-medium text-slate-900">IoT &amp; Solar Panel Technician (Freelance)</h3>
<p className="text-sm font-light text-slate-500 mt-1 mb-2">Bertanggung jawab atas instalasi perangkat keras, integrasi sistem energi terbarukan, dan troubleshooting di lapangan.</p>
</div>
<div className="h-px w-full bg-slate-100"></div>
<div className="group">
<h3 className="text-base font-medium text-slate-900">Internship Telkomsel</h3>
<p className="text-sm font-light text-slate-500 mt-1 mb-2">Pengalaman industri dalam lingkungan telekomunikasi, kolaborasi pengelolaan sistem, serta infrastruktur jaringan.</p>
</div>
</div>
</div>

<div>
<h2 className="text-2xl tracking-tight font-medium text-slate-900 mb-10 flex items-center gap-3">
<iconify-icon className="text-blue-900" icon="solar:diploma-linear"></iconify-icon>
                        Licenses &amp; Certifications
                    </h2>
<div className="grid gap-4">
<div className="p-5 border border-slate-200 rounded-xl hover:border-blue-900 transition-colors">
<div className="text-xs text-slate-400 mb-1">BNSP</div>
<h3 className="text-sm font-medium text-slate-900">IoT Embedded System</h3>
</div>
<div className="p-5 border border-slate-200 rounded-xl hover:border-blue-900 transition-colors">
<div className="text-xs text-slate-400 mb-1">ITS</div>
<h3 className="text-sm font-medium text-slate-900">Solar Power Plant Training</h3>
</div>
<div className="p-5 border border-slate-200 rounded-xl hover:border-blue-900 transition-colors">
<div className="text-xs text-slate-400 mb-1">Microsoft</div>
<h3 className="text-sm font-medium text-slate-900">Azure Data Fundamentals</h3>
</div>
<div className="p-5 border border-slate-200 rounded-xl hover:border-blue-900 transition-colors">
<div className="text-xs text-slate-400 mb-1">Dicoding</div>
<h3 className="text-sm font-medium text-slate-900">Data Science Certification</h3>
</div>
<div className="p-5 border border-slate-200 rounded-xl hover:border-blue-900 transition-colors">
<div className="text-xs text-slate-400 mb-1">Telecommunications</div>
<h3 className="text-sm font-medium text-slate-900">Sertifikasi Fiber Optic / FTTH</h3>
</div>
</div>
</div>
</div>
</section>

</div>


<footer className="footer-fixed text-white px-6 md:px-20">
<div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

<div>
<p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Let's Build Together</p>
<h2 className="text-5xl md:text-7xl tracking-tight font-medium mb-6">
                    Connect<br/>With Me.
                </h2>
<a className="text-sm font-light border-b border-white/30 pb-1 hover:border-white hover:text-blue-400 transition-colors" href="mailto:email@anda.com">
                    Start a conversation →
                </a>
</div>

<div className="flex flex-col gap-4">
<a className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm" href="https://instagram.com" target="_blank">
<iconify-icon className="text-blue-400 group-hover:scale-110 transition-transform" icon="solar:camera-linear" width="28"></iconify-icon>
<div>
<h3 className="text-base font-medium">Instagram</h3>
<p className="text-xs font-light text-white/50 mt-1">Dokumentasi visual dan pembaruan proyek terkini.</p>
</div>
</a>
<a className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm" href="https://linkedin.com" target="_blank">
<iconify-icon className="text-blue-400 group-hover:scale-110 transition-transform" icon="solar:laptop-linear" width="28"></iconify-icon>
<div>
<h3 className="text-base font-medium">LinkedIn</h3>
<p className="text-xs font-light text-white/50 mt-1">Profil profesional, koneksi, dan riwayat pekerjaan.</p>
</div>
</a>
<a className="group flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm" href="https://linktr.ee" target="_blank">
<iconify-icon className="text-blue-400 group-hover:scale-110 transition-transform" icon="solar:link-circle-linear" width="28"></iconify-icon>
<div>
<h3 className="text-base font-medium">Linktree</h3>
<p className="text-xs font-light text-white/50 mt-1">Pusat semua tautan portfolio dan kontak saya.</p>
</div>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto w-full mt-20 pt-8 border-t border-white/10 text-xs font-light text-white/30 flex justify-between">
<span>© Naufal Asyam.</span>
<span>Electrical Engineer Portfolio.</span>
</div>
</footer>


    </>
  );
}
