import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LaserBackground from '../effects/LaserBackground';
import GridOverlay from '../effects/GridOverlay';

export default function Layout() {
  return (
    <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
      <LaserBackground />
      <GridOverlay />
      <Navbar />
      <main className="w-full flex-1 flex flex-col items-center relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}