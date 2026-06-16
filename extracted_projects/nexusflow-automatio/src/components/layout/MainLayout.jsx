import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen flex flex-col selection:bg-orange-500/30 selection:text-orange-200">
      {/* Global Fixed Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="bg-orb w-[800px] h-[800px] bg-black top-[-10%] left-[-10%] blur-[120px]"></div>
        <div className="bg-orb w-[600px] h-[600px] bg-black bottom-[-10%] right-[-10%] blur-[120px]" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-20"></div>
      </div>

      <Navbar />
      <main className="flex-1 relative z-10 w-full flex flex-col items-center overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}