import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] pt-20 pb-12 px-page-margin border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <a href="/" className="text-[#0a2540]">
              <iconify-icon icon="simple-icons:stripe" width="56" height="24"></iconify-icon>
            </a>
            <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
              <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
              United States / English
            </div>
            <p className="text-xs text-gray-400 mt-4 max-w-[200px]">
              &copy; {new Date().getFullYear()} Stripe, Inc.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#0a2540] text-sm mb-2">Products</h4>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Atlas</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Billing</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Capital</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Checkout</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Climate</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Connect</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#0a2540] text-sm mb-2">Developers</h4>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Documentation</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">API reference</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">API status</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">API changelog</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Build a Stripe App</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#0a2540] text-sm mb-2">Company</h4>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">About</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Customers</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Enterprise</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Partners</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Jobs</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Blog</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-[#0a2540] text-sm mb-2">Resources</h4>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Support</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Contact</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Guides</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Privacy & terms</a>
            <a href="#" className="text-sm text-[#424770] hover:text-[#0a2540] transition-colors">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;