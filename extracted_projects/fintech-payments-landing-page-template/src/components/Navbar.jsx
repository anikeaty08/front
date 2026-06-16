import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      label: 'Products', 
      hasDropdown: true,
      dropdownItems: [
        { icon: 'solar:card-bold-duotone', title: 'Payments', desc: 'Accept payments globally' },
        { icon: 'solar:cart-large-bold-duotone', title: 'Checkout', desc: 'Pre-built payment form' },
        { icon: 'solar:bill-list-bold-duotone', title: 'Billing', desc: 'Manage subscriptions' },
        { icon: 'solar:shield-check-bold-duotone', title: 'Fraud & Risk', desc: 'Protect your business' }
      ]
    },
    { 
      label: 'Solutions', 
      hasDropdown: true,
      dropdownItems: [
        { icon: 'solar:shop-bold-duotone', title: 'Ecommerce', desc: 'Unify online and in-person' },
        { icon: 'solar:cloud-bold-duotone', title: 'SaaS', desc: 'Manage recurring revenue' },
        { icon: 'solar:users-group-two-rounded-bold-duotone', title: 'Marketplaces', desc: 'Route multi-party payments' }
      ]
    },
    { 
      label: 'Developers', 
      hasDropdown: true,
      dropdownItems: [
        { icon: 'solar:document-text-bold-duotone', title: 'Documentation', desc: 'Start integrating NexusPay' },
        { icon: 'solar:code-square-bold-duotone', title: 'API Reference', desc: 'Explore our endpoints' },
        { icon: 'solar:server-square-bold-duotone', title: 'API Status', desc: 'View system availability' }
      ]
    },
    { 
      label: 'Resources', 
      hasDropdown: true,
      dropdownItems: [
        { icon: 'solar:notebook-bold-duotone', title: 'Blog', desc: 'Latest news and updates' },
        { icon: 'solar:chat-square-like-bold-duotone', title: 'Customer Stories', desc: 'See who uses NexusPay' },
        { icon: 'solar:help-bold-duotone', title: 'Help Center', desc: 'Get support and answers' }
      ]
    },
    { 
      label: 'Pricing', 
      hasDropdown: false 
    },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-slate-800 font-light text-xl tracking-tight z-10">
          <iconify-icon icon="solar:layers-bold" width="28" height="28" className="text-indigo-600"></iconify-icon>
          <span>NexusPay</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-stretch gap-2 h-full">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group px-3 py-1 flex items-center">
              <button className="text-[15px] font-light text-slate-800 group-hover:text-indigo-600 transition-colors flex items-center gap-1.5 cursor-pointer py-2">
                {link.label}
                {link.hasDropdown && (
                  <iconify-icon 
                    icon="solar:alt-arrow-down-linear" 
                    width="16" 
                    height="16" 
                    className="transition-transform duration-300 group-hover:-rotate-180"
                  ></iconify-icon>
                )}
              </button>

              {/* Popover Dropdown */}
              {link.hasDropdown && (
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 p-2.5 min-w-[300px] relative">
                    {/* Subtle Top Caret */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-slate-100 rotate-45"></div>
                    
                    <div className="relative bg-white z-10 flex flex-col gap-1">
                      {link.dropdownItems.map((item, i) => (
                        <Link key={i} to="#" className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group/item">
                          <div className="w-10 h-10 rounded-lg bg-indigo-50/50 flex items-center justify-center text-indigo-500 shrink-0 group-hover/item:bg-indigo-100 group-hover/item:text-indigo-600 transition-colors">
                            <iconify-icon icon={item.icon} width="22" height="22"></iconify-icon>
                          </div>
                          <div>
                            <div className="text-[14px] font-medium text-slate-800 mb-0.5">{item.title}</div>
                            <div className="text-[13px] text-slate-500 font-light">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="#" className="text-[15px] font-light text-slate-800 hover:text-indigo-600 transition-colors">
            Sign in
          </Link>
          <Link to="#" className="text-[15px] font-light bg-indigo-600 text-white px-4 py-1.5 rounded-full hover:bg-indigo-700 transition-all flex items-center gap-1 shadow-sm hover:shadow hover:-translate-y-0.5">
            Contact sales
            <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-800">
          <iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>
        </button>
      </div>
    </header>
  );
};

export default Navbar;