import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                const loanData = {
                    1: {
                        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                        title: 'Gói vay ưu đãi 2024',
                        limit: '70% - 80%',
                        rate: '6.5%/năm',
                        term: '35 năm',
                        time: '3 - 7 ngày'
                    },
                    2: {
                        img: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80',
                        title: 'Đầu tư sinh lời cao',
                        limit: '60% - 70%',
                        rate: '7.5%/năm',
                        term: '20 năm',
                        time: '5 - 7 ngày'
                    },
                    3: {
                        img: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80',
                        title: 'Giải ngân nhanh chóng',
                        limit: 'Lên đến 85%',
                        rate: '8.0%/năm',
                        term: '15 năm',
                        time: '2 - 3 ngày'
                    },
                    4: {
                        img: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80',
                        title: 'Thanh toán linh hoạt',
                        limit: '50% - 60%',
                        rate: '0% trong 2 năm',
                        term: '10 năm',
                        time: '1 - 2 ngày'
                    }
                };

                function switchLoanTab(tabId) {
                    for (let i = 1; i <= 4; i++) {
                        const tab = document.getElementById('tab-' + i);
                        if (i === tabId) {
                            tab.className = 'text-xl lg:text-2xl tracking-tight text-[#FFC647] cursor-pointer font-sans font-semibold transition-colors duration-300';
                        } else {
                            tab.className = 'text-xl lg:text-2xl tracking-tight text-white/40 hover:text-white transition-colors duration-300 cursor-pointer font-sans font-semibold';
                        }
                    }

                    const data = loanData[tabId];
                    const img = document.getElementById('loan-image');
                    
                    img.style.opacity = '0.3';
                    setTimeout(() => {
                        img.src = data.img;
                        img.style.opacity = '0.8';
                    }, 200);

                    document.getElementById('loan-title').innerText = data.title;
                    document.getElementById('loan-limit').innerText = data.limit;
                    document.getElementById('loan-rate').innerText = data.rate;
                    document.getElementById('loan-term').innerText = data.term;
                    document.getElementById('loan-time').innerText = data.time;
                }
            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="z-50 text-white mix-blend-normal absolute top-0 right-0 left-0">
<div className="flex bg-[#000000]/5 w-full h-24 max-w-[1170px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-3 items-center">
<iconify-icon className="text-[32px]" icon="solar:city-linear"></iconify-icon>
<span className="text-2xl text-slate-50 tracking-tight font-sans font-semibold">Webtop</span>
</div>
<nav className="hidden lg:flex gap-12 items-center">
<a className="hover:opacity-70 transition-opacity text-sm font-medium font-sans" href="#">Trang chủ</a>
<a className="hover:opacity-70 transition-opacity flex items-center gap-1 text-sm font-medium text-slate-50 font-sans" href="#">Dự án <iconify-icon className="text-[16px] ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<a className="hover:opacity-70 transition-opacity flex items-center gap-1 text-sm font-medium font-sans" href="#">Dịch vụ <iconify-icon className="text-[16px] ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<a className="hover:opacity-70 transition-opacity text-sm font-medium font-sans" href="#">Hỗ trợ vay</a>
<a className="text-sm font-medium hover:opacity-70 transition-opacity font-sans" href="#">Liên hệ</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium font-sans" href="tel:1900xxxx">
<iconify-icon className="text-[16px]" icon="solar:phone-calling-linear"></iconify-icon> 1900 xxxx
                </a>
<a className="hidden md:flex items-center justify-center hover:bg-white/90 transition-all text-sm font-medium text-[#02365C] bg-[#FFC647] rounded-full pt-3 pr-6 pb-3 pl-6 font-sans" href="#">
                    Tư vấn ngay
                </a>
<button className="lg:hidden p-2">
<iconify-icon className="text-[24px]" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative h-screen min-h-[600px] max-h-[950px] overflow-y-auto overflow-x-hidden w-full flex flex-col justify-end text-white pb-12 lg:pb-16">
<img alt="Luxury Real Estate" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2800&amp;q=80"/>
<div className="z-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 w-full max-w-[1170px] mr-auto ml-auto pr-6 pl-6 relative">
<div className="lg:mb-24 max-w-4xl mb-12">
<h1 className="leading-[0.95] sm:text-7xl lg:text-[7rem] text-6xl text-slate-50 tracking-tight mb-12 font-sans font-semibold">Bất động sản<br/>Uy tín</h1>
<a className="inline-flex items-center justify-center hover:bg-gray-100 transition-colors text-lg font-medium text-[#02365C] font-sans bg-[#FFC647] rounded-full pt-4 pr-8 pb-4 pl-8" href="/#">
                        Xem dự án tiêu biểu
                    </a>
</div>
<div className="flex flex-col md:flex-row gap-8 lg:gap-12 border-white/20 border-t pt-8 items-end justify-between">
<div className="max-w-sm">
<p className="text-lg font-light text-gray-200 font-sans">
                            Chúng tôi giúp bạn chọn đúng dự án, giảm rủi ro và sở hữu tài sản sinh lời bền vững tại thị trường Việt Nam.
                        </p>
</div>
<div className="flex items-end gap-12 text-right">
<div className="">
<div className="text-5xl lg:text-6xl tracking-tight mb-2 font-sans font-semibold">50+</div>
<div className="text-sm font-medium uppercase tracking-wider text-gray-300 font-sans">Dự án mới nhất</div>
</div>
<div className="">
<div className="text-5xl lg:text-6xl tracking-tight mb-2 font-sans font-semibold">10+</div>
<div className="text-sm font-medium uppercase tracking-wider text-gray-300 font-sans">Năm kinh nghiệm</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-16 overflow-y-auto overflow-x-hidden bg-white max-h-[950px] pt-12 pb-12 relative">
<div className="max-w-[1170px] mx-auto px-6 w-full relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="space-y-8">
<div className="space-y-3">
<span className="text-xl text-[#DCA052] font-sans font-semibold">Về chúng tôi</span>
<h2 className="leading-[1.05] lg:text-6xl text-5xl font-semibold text-[#0A4D7A] tracking-tight font-sans">Tại Sao Hàng Nghìn Khách Hàng Chọn Webtop?</h2>
</div>
<div className="space-y-4 text-lg text-zinc-500 font-light leading-relaxed">
<p className="font-semibold font-sans">
                                Emporium tortor vel orci efficitur, in venenatis felis molestie. In lobortis odio augue, id vulputate erat egestas sed. Ut euismod ipsum ut dolor hendrerit, non ultricies urna accumsan.
                            </p>
<p className="font-semibold font-sans">
                                Donec vitae risus eget nisi molestie vehicula quis vel magna. Donec tristique mauris eu fermentum dignissim.
                            </p>
</div>
<div className="h-px w-full bg-zinc-100"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-5xl text-[#DCA052] tracking-tight font-sans font-semibold">10</span>
<span className="text-3xl text-[#DCA052] font-sans font-semibold">+</span>
</div>
<span className="text-base font-medium text-zinc-400 font-sans">Năm kinh nghiệm</span>
</div>
<div className="">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-5xl text-[#DCA052] tracking-tight font-sans font-semibold">100</span>
<span className="text-3xl text-[#DCA052] font-sans font-semibold">+</span>
</div>
<span className="text-base font-medium text-zinc-400 font-sans">Dự án thành công</span>
</div>
<div>
<div className="flex items-baseline gap-1 mb-1">
<span className="text-5xl text-[#DCA052] tracking-tight font-sans font-semibold">42</span>
<span className="text-3xl text-[#DCA052] font-sans font-semibold">+</span>
</div>
<span className="text-base font-medium text-zinc-400 font-sans">Đối tác chiến lược</span>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center justify-center hover:bg-[#073A5D] transition-colors text-base font-medium text-white font-sans bg-[#0A4D7A] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm" href="#">
                                XEM CHI TIẾT
                            </a>
</div>
</div>

<div className="grid grid-cols-12 gap-3 lg:gap-4 mt-8 lg:mt-0">
<div className="col-span-5 flex flex-col justify-end">
<img alt="Bedroom interior" className="w-full h-40 lg:h-48 object-cover object-center rounded-xl" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="col-span-7">
<img alt="Bright living room" className="w-full h-56 lg:h-72 object-cover object-center rounded-xl" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="col-span-8">
<img alt="Modern white bathroom" className="w-full h-48 lg:h-64 object-cover object-center rounded-xl" src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="col-span-4 flex flex-col justify-start">
<img alt="Wooden vanity bathroom" className="w-full h-64 lg:h-80 object-cover object-center rounded-xl" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-16 py-12 border-zinc-200 border-t max-h-[950px] overflow-y-auto overflow-x-hidden">
<div className="max-w-[1170px] mx-auto px-6 w-full">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
<div className="lg:col-span-5">
<span className="text-sm font-medium uppercase tracking-wider text-[#02365C]/60 mb-4 block font-sans">Dịch vụ chuyên sâu</span>
<h2 className="leading-none lg:text-5xl text-4xl text-[#0A4D7A] tracking-tight font-sans font-semibold">Đồng hành<br/>cùng thành công</h2>
</div>
<div className="lg:col-span-7 flex items-end">
<p className="text-base text-zinc-600 font-light max-w-2xl leading-relaxed font-sans">
                            Từ người mua nhà lần đầu, nhà đầu tư chuyên nghiệp hay cần bán gấp, Webtop đều có giải pháp riêng biệt. Chúng tôi mang đến giá trị thực và sự an tâm tuyệt đối.
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
<div>
<iconify-icon className="text-[40px] text-[#FFC647] mb-6 block" icon="solar:target-linear"></iconify-icon>
<h3 className="text-xl tracking-tight mb-3 font-sans font-semibold">Chọn lọc dự án</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans">Kiểm duyệt pháp lý nghiêm ngặt, vị trí đắc địa, tốc độ tăng giá thực tế 15-25%/năm.</p>
</div>
<div className="">
<iconify-icon className="text-[40px] text-[#FFC647] mb-6 block" icon="solar:map-linear"></iconify-icon>
<h3 className="text-xl tracking-tight mb-3 font-sans font-semibold">Am hiểu thị trường</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans">Hơn 10 năm kinh nghiệm tại TP.HCM, Hà Nội, Đà Nẵng. Nắm rõ khu vực tiềm năng.</p>
</div>
<div className="">
<iconify-icon className="text-[40px] text-[#FFC647] mb-6 block" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-xl tracking-tight mb-3 font-sans font-semibold">Hỗ trợ vay vốn</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans">Liên kết 15+ ngân hàng lớn. Duyệt hồ sơ nhanh, lãi suất thấp, vay lên đến 70%.</p>
</div>
<div className="">
<iconify-icon className="text-[40px] text-[#FFC647] mb-6 block" icon="solar:hand-shake-linear"></iconify-icon>
<h3 className="text-xl tracking-tight mb-3 font-sans font-semibold">Hỗ trợ trọn gói</h3>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans">Từ đàm phán, pháp lý, công chứng đến bàn giao. Không phát sinh chi phí ẩn.</p>
</div>
</div>
</div>
</section>

<section className="py-8 lg:py-12 overflow-hidden whitespace-nowrap flex text-[#02365C] opacity-5 max-h-[950px]">
<h2 className="text-[12vw] leading-none font-semibold tracking-tighter font-sans">BẤT ĐỘNG SẢN SINH LỜI — KIẾN TẠO TƯƠNG LAI —</h2>
</section>

<section className="lg:py-20 overflow-y-auto overflow-x-hidden text-white bg-[#02365C] max-h-[950px] pt-16 pb-16">
<div className="w-full max-w-[1170px] mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-12 gap-8 mb-12">
<div className="lg:col-span-3">
<span className="text-sm font-medium uppercase tracking-wider text-[#FFC647] font-sans">Dự án tiêu biểu</span>
</div>
<div className="lg:col-span-9 flex flex-col md:flex-row md:items-end justify-between gap-6">
<h2 className="lg:text-6xl leading-none text-4xl font-semibold tracking-tight font-sans max-w-2xl">
                            Bộ sưu tập<br/>dự án tiềm năng
                        </h2>
<a className="inline-flex text-base font-medium hover:text-[#FFC647] transition-colors pb-1 border-b border-white/30 hover:border-[#FFC647] font-sans" href="#">
                            Xem toàn bộ dự án
                        </a>
</div>
</div>
<div className="grid lg:grid-cols-12 lg:h-[600px] h-auto gap-x-6 gap-y-6">
<div className="lg:col-span-8 group overflow-hidden cursor-pointer lg:h-full h-[360px] rounded-[2rem] relative">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="bg-gradient-to-t from-[#02365C]/90 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex absolute right-8 bottom-8 left-8 items-end justify-between">
<div className="">
<div className="inline-block px-4 py-1.5 bg-[#FFC647] text-[#02365C] text-sm font-medium rounded-full mb-3 font-sans">Đang mở bán</div>
<h3 className="text-3xl tracking-tight mb-2 font-sans font-semibold">The Landmark Residences</h3>
<p className="text-base text-gray-300 font-sans">Quận 1, TP.HCM</p>
</div>
<div className="text-right hidden sm:block">
<p className="text-sm text-gray-400 mb-1 font-sans">Giá từ</p>
<p className="text-2xl font-sans font-semibold">4.5 Tỷ</p>
</div>
</div>
</div>
<div className="lg:col-span-4 grid grid-rows-2 gap-6 h-[500px] lg:h-full">
<div className="group relative rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="bg-gradient-to-t from-[#02365C]/90 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl tracking-tight mb-1 font-sans font-semibold">Aqua City Eco Villas</h3>
<p className="text-base text-gray-300 font-sans">Đồng Nai</p>
</div>
</div>
<div className="group relative rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="bg-gradient-to-t from-[#02365C]/90 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl tracking-tight mb-1 font-sans font-semibold">Ocean View Resort</h3>
<p className="text-base text-gray-300 font-sans">Đà Nẵng</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-20 overflow-y-auto overflow-x-hidden text-white bg-[#042842] max-h-[950px] border-white/10 border-t pt-16 pb-16">
<div className="max-w-[1170px] mx-auto px-6 w-full">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
<div className="lg:col-span-3">
<span className="text-sm font-medium uppercase tracking-wider text-[#FFC647] font-sans">Tài chính</span>
</div>
<div className="lg:col-span-9 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
<h2 className="text-4xl lg:text-5xl tracking-tight font-sans font-semibold">
                            Vay vốn dễ dàng chỉ trong 7 ngày
                        </h2>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#FFC647] transition-colors font-sans" href="#">
                            Tính khả năng vay <iconify-icon className="text-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<div className="lg:col-span-3 space-y-5">
<div className="text-xl lg:text-2xl tracking-tight text-[#FFC647] cursor-pointer font-sans font-semibold transition-colors duration-300" id="tab-1" onclick="switchLoanTab(1)">01. Vay mua nhà ở</div>
<div className="text-xl lg:text-2xl tracking-tight text-white/40 hover:text-white transition-colors cursor-pointer font-sans font-semibold duration-300" id="tab-2" onclick="switchLoanTab(2)">02. Vay đầu tư</div>
<div className="text-xl lg:text-2xl tracking-tight text-white/40 hover:text-white transition-colors cursor-pointer font-sans font-semibold duration-300" id="tab-3" onclick="switchLoanTab(3)">03. Thế chấp BĐS</div>
<div className="text-xl lg:text-2xl tracking-tight text-white/40 hover:text-white transition-colors cursor-pointer font-sans font-semibold duration-300" id="tab-4" onclick="switchLoanTab(4)">04. Trả góp dự án</div>
</div>
<div className="lg:col-span-6 rounded-[2rem] overflow-hidden h-[300px] lg:h-[500px]">
<img alt="Loan Consultation" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" id="loan-image" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="lg:col-span-3">
<h3 className="text-2xl tracking-tight mb-6 font-sans font-semibold" id="loan-title">Gói vay ưu đãi 2024</h3>
<ul className="space-y-3 mb-8 text-base text-gray-300 font-light border-b border-white/10 pb-8">
<li className="flex justify-between items-center font-sans"><span className="text-white font-sans">Hạn mức vay:</span> <span id="loan-limit">70% - 80%</span></li>
<li className="flex justify-between items-center font-sans"><span className="text-white font-sans">Lãi suất từ:</span> <span id="loan-rate">6.5%/năm</span></li>
<li className="flex justify-between items-center font-sans"><span className="text-white font-sans">Thời hạn tối đa:</span> <span id="loan-term">35 năm</span></li>
<li className="flex justify-between items-center font-sans"><span className="text-white font-sans">Thời gian duyệt:</span> <span id="loan-time">3 - 7 ngày</span></li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3 w-full text-base font-medium text-[#02365C] bg-[#FFC647] rounded-full hover:bg-white transition-colors font-sans" href="#">
                            Đăng ký tư vấn vay
                        </a>
</div>
</div>
</div>

</section>

<section className="w-full h-[50vh] min-h-[400px] max-h-[950px] relative bg-zinc-200 overflow-hidden">
<img alt="Locations Map" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bcb077a-dba4-470a-a753-c164e9ae166d_3840w.png"/>
<div className="max-w-[1170px] mx-auto px-6 w-full h-full relative pointer-events-none">

<div className="absolute top-[40%] left-[30%] bg-[#FFC647] w-4 h-4 rounded-full shadow-[0_0_0_4px_rgba(255,198,71,0.3)] pointer-events-auto cursor-pointer"></div>
<div className="absolute top-[55%] left-[60%] bg-[#FFC647] w-4 h-4 rounded-full shadow-[0_0_0_4px_rgba(255,198,71,0.3)] pointer-events-auto cursor-pointer"></div>

<div className="absolute top-[35%] left-[32%] bg-[#F4F3EF] p-5 rounded-2xl shadow-xl border border-zinc-200 w-60 pointer-events-auto">
<div className="flex justify-between items-start mb-2">
<h4 className="text-base font-medium tracking-tight font-sans">Văn phòng chính</h4>
<iconify-icon className="text-[16px] text-zinc-400 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 mb-1 font-sans">+84 1900 xxxx</p>
<p className="text-xs text-zinc-500 font-sans">Quận 1, TP.HCM</p>
</div>
</div>
</section>

<section className="py-16 lg:py-20 text-center max-h-[950px] overflow-y-auto overflow-x-hidden">
<div className="max-w-[1170px] mx-auto px-6 w-full">
<h2 className="text-4xl lg:text-5xl tracking-tight mb-16 max-w-3xl mx-auto font-sans font-semibold">
                    Cam kết định hình<br/>trải nghiệm khách hàng
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
<div className="bg-white p-8 rounded-[2rem] border border-zinc-200 hover:shadow-lg transition-shadow">
<iconify-icon className="text-[40px] text-[#02365C] mb-6 block" icon="solar:shield-check-linear"></iconify-icon>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-6 lg:h-32 font-sans">"Minh bạch 100% thông tin dự án, pháp lý rõ ràng. Giúp khách hàng nắm rõ rủi ro và cơ hội trước khi quyết định."</p>
<div className="text-xs font-medium tracking-tight uppercase text-[#02365C] font-sans">Minh bạch</div>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-zinc-200 hover:shadow-lg transition-shadow">
<iconify-icon className="text-[40px] text-[#02365C] mb-6 block" icon="solar:tag-price-linear"></iconify-icon>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-6 lg:h-32 font-sans">"Tuyệt đối không có chi phí ẩn, không kê giá. Giá bán luôn khớp với chính sách trực tiếp từ chủ đầu tư."</p>
<div className="text-xs font-medium tracking-tight uppercase text-[#02365C] font-sans">Trung thực</div>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-zinc-200 hover:shadow-lg transition-shadow">
<iconify-icon className="text-[40px] text-[#02365C] mb-6 block" icon="solar:refresh-linear"></iconify-icon>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-6 lg:h-32 font-sans">"Cam kết hoàn tiền booking, cọc nếu phát hiện sai sót pháp lý từ phía dự án được phân phối."</p>
<div className="text-xs font-medium tracking-tight uppercase text-[#02365C] font-sans">Bảo đảm</div>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-zinc-200 hover:shadow-lg transition-shadow">
<iconify-icon className="text-[40px] text-[#02365C] mb-6 block" icon="solar:headphones-round-sound-linear"></iconify-icon>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-6 lg:h-32 font-sans">"Hỗ trợ 24/7 suốt vòng đời sở hữu. Từ lúc nhận nhà, cho thuê lại đến khi có nhu cầu chuyển nhượng."</p>
<div className="text-xs font-medium tracking-tight uppercase text-[#02365C] font-sans">Hậu mãi</div>
</div>
</div>
</div>
</section>

<section className="lg:py-20 overflow-y-auto overflow-x-hidden max-h-[950px] border-zinc-200 border-t pt-16 pb-16">
<div className="max-w-[1170px] mx-auto px-6 w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="rounded-[2rem] overflow-hidden h-[450px] lg:h-[600px] order-2 lg:order-1">
<img alt="Office Building" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3de755cd-00d7-4ac0-a03c-0b84cde0f1bc_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2 py-4">
<span className="text-sm font-medium uppercase tracking-wider text-[#02365C]/60 mb-4 block font-sans">Kết nối với chuyên gia</span>
<h2 className="text-4xl lg:text-5xl tracking-tight leading-none mb-10 font-sans font-semibold">
                            Bạn có thắc mắc?<br/>Hãy để chúng tôi hỗ trợ!
                        </h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="text-sm font-medium text-[#02365C] mb-1 block font-sans">Họ và tên *</label>
<input className="w-full bg-transparent border-b border-zinc-300 py-2 focus:outline-none focus:border-[#02365C] transition-colors text-base font-light text-[#02365C] placeholder-zinc-400" placeholder="Nhập tên của bạn" type="text"/>
</div>
<div>
<label className="text-sm font-medium text-[#02365C] mb-1 block font-sans">Email *</label>
<input className="w-full bg-transparent border-b border-zinc-300 py-2 focus:outline-none focus:border-[#02365C] transition-colors text-base font-light text-[#02365C] placeholder-zinc-400" placeholder="Địa chỉ email" type="email"/>
</div>
</div>
<div className="">
<label className="text-sm font-medium text-[#02365C] mb-1 block font-sans">Số điện thoại *</label>
<input className="w-full bg-transparent border-b border-zinc-300 py-2 focus:outline-none focus:border-[#02365C] transition-colors text-base font-light text-[#02365C] placeholder-zinc-400" placeholder="Nhập số điện thoại" type="tel"/>
</div>
<div className="">
<label className="text-sm font-medium text-[#02365C] mb-1 block font-sans">Nội dung quan tâm</label>
<textarea className="w-full bg-transparent border-b border-zinc-300 py-2 focus:outline-none focus:border-[#02365C] transition-colors text-base font-light text-[#02365C] placeholder-zinc-400 resize-none" placeholder="Nhập dự án hoặc nhu cầu của bạn..." rows="2"></textarea>
</div>
<label className="flex items-start gap-4 cursor-pointer group pt-2">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 border border-zinc-400 rounded group-hover:border-[#02365C] transition-colors shrink-0">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="absolute text-[14px] text-transparent peer-checked:text-[#02365C] pointer-events-none transition-colors" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-500 font-light font-sans">Tôi đồng ý với việc thông tin cung cấp được thu thập và lưu trữ để Webtop liên hệ tư vấn theo <a className="underline hover:text-[#02365C] font-sans" href="#">Chính sách bảo mật</a>.</span>
</label>
<button className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-[#02365C] bg-[#FFC647] rounded-full hover:bg-zinc-800 hover:text-white transition-all w-full sm:w-auto mt-2 font-sans" type="submit">
                                Gửi yêu cầu
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="lg:py-20 overflow-y-auto overflow-x-hidden max-h-[950px] border-zinc-200 border-t pt-16 pb-16">
<div className="max-w-[1170px] mx-auto px-6 w-full">
<span className="text-sm font-medium uppercase tracking-wider text-[#02365C]/60 mb-4 block font-sans">Giải đáp nhanh</span>
<h2 className="text-4xl lg:text-5xl tracking-tight leading-none mb-12 font-sans font-semibold">
            Câu hỏi thường gặp
        </h2>
<div className="max-w-4xl space-y-4">
<details className="bg-[#EBE9E0] p-6 lg:p-8 rounded-[1.5rem] group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none gap-4 focus:outline-none">
<h3 className="text-xl lg:text-2xl tracking-tight font-sans font-semibold">Webtop cung cấp những dịch vụ gì?</h3>
<div className="text-[24px] text-[#02365C] shrink-0">
<iconify-icon className="block group-open:hidden transition-all" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="hidden group-open:block transition-all" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans mt-4">
                    Chúng tôi cung cấp dịch vụ môi giới mua bán, cho thuê bất động sản, tư vấn đầu tư, hỗ trợ vay vốn ngân hàng và dịch vụ pháp lý trọn gói. Mục tiêu của Webtop là mang đến giải pháp bất động sản toàn diện, minh bạch và an toàn nhất cho khách hàng.
                </p>
</details>
<details className="bg-[#EBE9E0] p-6 lg:p-8 rounded-[1.5rem] group [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex justify-between items-center cursor-pointer list-none gap-4 focus:outline-none">
<h3 className="text-xl lg:text-2xl tracking-tight font-sans font-semibold">Quá trình giao dịch mua bán mất bao lâu?</h3>
<div className="text-[24px] text-[#02365C] shrink-0">
<iconify-icon className="block group-open:hidden transition-all" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="hidden group-open:block transition-all" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans mt-4">
                    Thời gian phụ thuộc vào tình trạng pháp lý và phương thức thanh toán. Thông thường giao dịch hoàn tất từ 1 tuần đến 1 tháng. Chúng tôi sẽ cập nhật tiến độ liên tục, thiết lập mục tiêu thực tế và xử lý logistics để đảm bảo quá trình diễn ra suôn sẻ từ đầu đến cuối.
                </p>
</details>
<details className="bg-[#EBE9E0] p-6 lg:p-8 rounded-[1.5rem] group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none gap-4 focus:outline-none">
<h3 className="text-xl lg:text-2xl tracking-tight font-sans font-semibold">Tôi có cần trả phí môi giới khi mua nhà không?</h3>
<div className="text-[24px] text-[#02365C] shrink-0">
<iconify-icon className="block group-open:hidden transition-all" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="hidden group-open:block transition-all" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans mt-4">
                    Thông thường tại Việt Nam, phí môi giới sẽ do người bán (chủ nhà hoặc chủ đầu tư) chi trả. Người mua sẽ không phải trả bất kỳ khoản phí dịch vụ nào khi thực hiện giao dịch qua hệ thống của Webtop.
                </p>
</details>
<details className="bg-[#EBE9E0] p-6 lg:p-8 rounded-[1.5rem] group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex justify-between items-center cursor-pointer list-none gap-4 focus:outline-none">
<h3 className="text-xl lg:text-2xl tracking-tight font-sans font-semibold">Webtop chuyên phân phối loại hình BĐS nào?</h3>
<div className="text-[24px] text-[#02365C] shrink-0">
<iconify-icon className="block group-open:hidden transition-all" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="hidden group-open:block transition-all" icon="solar:minus-circle-linear"></iconify-icon>
</div>
</summary>
<p className="text-base text-zinc-600 font-light leading-relaxed font-sans mt-4">
                    Chúng tôi chuyên phân phối đa dạng các loại hình bất động sản từ căn hộ chung cư cao cấp, nhà phố liền kề, biệt thự, đến đất nền dự án và bất động sản nghỉ dưỡng tại các thành phố lớn như TP.HCM, Hà Nội và Đà Nẵng.
                </p>
</details>
</div>
</div>
</section>
</main>

<footer className="bg-[#02365C] text-white py-16 mt-10 rounded-t-[3rem] max-h-[950px] overflow-y-auto overflow-x-hidden">
<div className="max-w-[1170px] mx-auto px-6 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-3 space-y-6">
<div>
<p className="text-sm text-gray-300 font-light mb-1 font-sans">Tầng 12, Tòa nhà ABC</p>
<p className="text-sm text-gray-300 font-light font-sans">Quận 1, TP.HCM</p>
</div>
<div>
<a className="block text-sm text-gray-300 font-light hover:text-[#FFC647] mb-1 font-sans" href="mailto:contact@webtop.vn">contact@webtop.vn</a>
<a className="block text-sm text-gray-300 font-light hover:text-[#FFC647] font-sans" href="tel:1900xxxx">1900 xxxx</a>
</div>
<div className="flex items-center gap-4 pt-2">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#02365C] transition-colors" href="#">
<iconify-icon className="text-[16px]" icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#02365C] transition-colors" href="#">
<iconify-icon className="text-[16px]" icon="mdi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#02365C] transition-colors" href="#">
<iconify-icon className="text-[16px]" icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-3 flex flex-col gap-3">
<a className="text-base text-gray-300 font-light hover:text-white transition-colors font-sans" href="#">Trang chủ</a>
<a className="text-base text-gray-300 font-light hover:text-white transition-colors font-sans" href="#">Dự án tiêu biểu</a>
<a className="text-base text-gray-300 font-light hover:text-white transition-colors font-sans" href="#">Dịch vụ môi giới</a>
<a className="text-base text-gray-300 font-light hover:text-white transition-colors font-sans" href="#">Hỗ trợ vay vốn</a>
<a className="text-base text-gray-300 font-light hover:text-white transition-colors font-sans" href="#">Tin tức</a>
<a className="text-base text-gray-300 font-light hover:text-white transition-colors font-sans" href="#">Liên hệ</a>
</div>
<div className="lg:col-span-6 lg:text-right">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl tracking-tight font-sans font-semibold">
                        Đồng hành cùng<br/>thành công của bạn
                    </h2>
<p className="text-lg text-gray-400 mt-6 max-w-md lg:ml-auto font-semibold font-sans">
                        Mang đến giải pháp an cư và đầu tư bền vững qua từng giao dịch.
                    </p>
</div>
</div>
<div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-[24px] text-[#FFC647]" icon="solar:city-linear"></iconify-icon>
<span className="text-base font-medium tracking-tight font-sans">Webtop</span>
</div>
<p className="text-xs text-gray-400 font-light font-sans">© 2024 Webtop. Tất cả quyền được bảo lưu.</p>
</div>
</div>
</footer>
<div className="eJOY__extension_ai_adv_root_class" id="eJOY__extension_ai_adv_root"><div className="wrapperAiAssEjoy"><div className="containerSumEjoyIcon"><div className="viewIconEjoy gl-tooltip-ejoy gl-tooltip-ejoy-left" tooltip-data="eJOY AI Assistant"><div className="viewIconEjoyItem"><svg fill="none" height="26" viewbox="0 0 24 26" width="24" xmlns="http://www.w3.org/2000/svg"><mask height="8" id="mask0_427_34" maskunits="userSpaceOnUse" style={{maskType: 'luminance'}} width="8" x="16" y="3"><path d="M24 3H16V11H24V3Z" fill="white"></path></mask><g mask="url(#mask0_427_34)"><path d="M23.8012 7.00309L21.0136 8.01539L20.0012 10.8031L18.9889 8.01539L16.2012 7.00309L18.9889 5.9908L20.0012 3.20309L21.0136 5.9908L23.8012 7.00309Z" fill="url(#paint0_linear_427_34)"></path></g><mask height="6" id="mask1_427_34" maskunits="userSpaceOnUse" style={{maskType: 'luminance'}} width="6" x="0" y="10"><path d="M6 10H0V16H6V10Z" fill="white"></path></mask><g mask="url(#mask1_427_34)"><path d="M5.8494 13.0023L3.7587 13.7616L2.9994 15.8523L2.2402 13.7616L0.149399 13.0023L2.2402 12.2431L2.9994 10.1523L3.7587 12.2431L5.8494 13.0023Z" fill="url(#paint1_linear_427_34)"></path></g><mask height="4" id="mask2_427_34" maskunits="userSpaceOnUse" style={{maskType: 'luminance'}} width="4" x="16" y="20"><path d="M20 20H16V24H20V20Z" fill="white"></path></mask><g mask="url(#mask2_427_34)"><path d="M19.8996 22.0016L18.5058 22.5077L17.9996 23.9016L17.4934 22.5077L16.0996 22.0016L17.4934 21.4954L17.9996 20.1016L18.5058 21.4954L19.8996 22.0016Z" fill="url(#paint2_linear_427_34)"></path></g><g filter="url(#filter0_d_427_34)"><path clip-rule="evenodd" d="M11.8671 20.3327C14.8098 20.2537 16.4674 18.0538 16.368 15.5257C15.9553 11.8147 11.5502 10.6201 13.3135 5.666C9.7712 8.7188 7.228 12.6272 7.3363 15.408C7.3847 18.1053 8.9455 20.3327 11.8671 20.3327ZM14.5512 16.5696C15.0045 16.5696 15.3306 16.2001 15.3719 15.7489C15.4799 15.431 15.3719 13.9738 14.2947 13.0395C14.4695 14.2529 13.6329 15.261 13.7305 15.7489C13.7305 16.2022 14.0979 16.5696 14.5512 16.5696Z" fill="#1DA1F2" fill-rule="evenodd"></path></g><defs><filter color-interpolation-filters="sRGB" filterunits="userSpaceOnUse" height="24.381" id="filter0_d_427_34" width="18.7535" x="2.47583" y="0.80886"><feflood flood-opacity="0" result="BackgroundImageFix"></feflood><fecolormatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></fecolormatrix><feoffset></feoffset><fegaussianblur stddeviation="2.42857"></fegaussianblur><fecolormatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></fecolormatrix><feblend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_427_34"></feblend><feblend in="SourceGraphic" in2="effect1_dropShadow_427_34" mode="normal" result="shape"></feblend></filter><lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_427_34" x1="20.0012" x2="20.0012" y1="3.20309" y2="10.8031"><stop stop-color="#1DA1F2"></stop><stop offset="1" stop-color="#6CD2FF"></stop></lineargradient><lineargradient gradientunits="userSpaceOnUse" id="paint1_linear_427_34" x1="2.9994" x2="2.9994" y1="10.1523" y2="15.8523"><stop stop-color="#1DA1F2"></stop><stop offset="1" stop-color="#6CD2FF"></stop></lineargradient><lineargradient gradientunits="userSpaceOnUse" id="paint2_linear_427_34" x1="17.9996" x2="17.9996" y1="20.1016" y2="23.9016"><stop stop-color="#1DA1F2"></stop><stop offset="1" stop-color="#6CD2FF"></stop></lineargradient></defs></svg></div><div className="moveIconEjoyAi"><svg fill="none" height="16" viewbox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5.45139 0.667969C4.64931 0.667969 4 1.31727 4 2.11936C4 2.92144 4.64931 3.57075 5.45139 3.57075C6.25347 3.57075 6.90278 2.92144 6.90278 2.11936C6.90278 1.31727 6.25347 0.667969 5.45139 0.667969ZM4 8.00868C4 7.2066 4.64931 6.55729 5.45139 6.55729C6.25347 6.55729 6.90278 7.2066 6.90278 8.00868C6.90278 8.81076 6.25347 9.46007 5.45139 9.46007C4.64931 9.46007 4 8.81076 4 8.00868ZM4 13.8837C4 13.0816 4.64931 12.4323 5.45139 12.4323C6.25347 12.4323 6.90278 13.0816 6.90278 13.8837C6.90278 14.6858 6.25347 15.3351 5.45139 15.3351C4.64931 15.3351 4 14.6858 4 13.8837Z" fill="#666666" fill-rule="evenodd"></path><path clip-rule="evenodd" d="M10.7854 0.667969C9.98329 0.667969 9.33398 1.31727 9.33398 2.11936C9.33398 2.92144 9.98329 3.57075 10.7854 3.57075C11.5875 3.57075 12.2368 2.92144 12.2368 2.11936C12.2368 1.31727 11.5875 0.667969 10.7854 0.667969ZM9.33398 8.00868C9.33398 7.2066 9.98329 6.55729 10.7854 6.55729C11.5875 6.55729 12.2368 7.2066 12.2368 8.00868C12.2368 8.81076 11.5875 9.46007 10.7854 9.46007C9.98329 9.46007 9.33398 8.81076 9.33398 8.00868ZM9.33398 13.8837C9.33398 13.0816 9.98329 12.4323 10.7854 12.4323C11.5875 12.4323 12.2368 13.0816 12.2368 13.8837C12.2368 14.6858 11.5875 15.3351 10.7854 15.3351C9.98329 15.3351 9.33398 14.6858 9.33398 13.8837Z" fill="#666666" fill-rule="evenodd"></path></svg></div></div><div className="viewCloseIconEjoy"><svg fill="none" height="12" viewbox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" fill="black" fillOpacity="0.25" r="6"></circle><path clip-rule="evenodd" d="M8.71289 3.58672C8.87135 3.74518 8.87135 4.00209 8.71289 4.16054L6.72363 6.14981L8.71289 8.13907C8.87135 8.29752 8.87135 8.55444 8.71289 8.71289C8.55444 8.87135 8.29752 8.87135 8.13907 8.71289L6.14981 6.72363L4.16054 8.71289C4.00209 8.87135 3.74518 8.87135 3.58672 8.71289C3.42826 8.55443 3.42826 8.29752 3.58672 8.13907L5.57598 6.14981L3.58672 4.16054C3.42826 4.00209 3.42826 3.74518 3.58672 3.58672C3.74518 3.42826 4.00209 3.42826 4.16054 3.58672L6.14981 5.57598L8.13907 3.58672C8.29752 3.42826 8.55444 3.42826 8.71289 3.58672Z" fill="white" fill-rule="evenodd"></path></svg></div></div><div className="eJOY__container eJOY__container_scroll"><div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', paddingLeft: '12px'}}><div><div style={{borderRadius: '3px', padding: '4px 8px', color: 'rgb(255, 255, 255)', fontSize: '12px', fontStyle: 'normal', fontWeight: '400', lineHeight: '12px', background: 'rgba(29, 161, 242, 0.65)'}}>Beta</div></div><div style={{display: 'flex', justifyContent: 'center', paddingRight: '12px', flexDirection: 'column'}}><span style={{color: 'rgb(229, 56, 56)', fontSize: '10px', fontStyle: 'normal', fontWeight: '600', lineHeight: '12px', paddingBottom: '1px'}}>0 / 0</span><span style={{color: 'rgb(140, 140, 140)', fontSize: '8px', fontStyle: 'normal', fontWeight: '400', lineHeight: '10px'}}>used queries</span></div></div></div></div></div><div className="eJOY__extension_root_class" id="eJOY__extension_root" style={{all: 'unset'}}></div>
    </>
  );
}
