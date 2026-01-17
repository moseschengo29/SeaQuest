"use client";

import React, { forwardRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from '@/src/utils/constants';
import logo from '../../../public/assets/Seaquest PNG logo.png';

interface NavbarProps {
  isScrolled: boolean;
  fontClass: string;
  onEnter: () => void;
  onLeave: () => void;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ isScrolled, onEnter, onLeave }, ref) => {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent, id: string) => {
    // 1. If we are NOT on the home page, let the Link component handle the navigation
    if (pathname !== "/") return;

    // 2. If we ARE on the home page, prevent default and do the smooth GSAP/Scroll
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const offset = 80; // Adjusted for the floating navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav ref={ref} className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? "top-6 left-0 right-0 mx-auto w-[90%] md:w-[600px] bg-white/5 backdrop-blur-xl rounded-full py-2 px-0 shadow-2xl" : "top-0 w-full py-8 px-8 bg-transparent"}`}>
      <div className="flex justify-between items-center md:px-6 lg:px-12">
        
        {/* --- LOGO LINKED TO HOME --- */}
        <Link 
          href="/" 
          className="relative w-28 h-8 md:w-32 md:h-12 transition-transform active:scale-95"
          onMouseEnter={onEnter} 
          onMouseLeave={onLeave}
        >
          <Image 
            src={logo} 
            alt="SeaQuest" 
            fill 
            className="object-contain object-left" 
            priority
          />
        </Link>          
        
        {/* --- NAVIGATION LINKS --- */}
        <div className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] transition-opacity duration-300 ${isScrolled ? "opacity-0 w-0 pointer-events-none" : "opacity-100"}`}>
          {NAV_LINKS.map((item) => (
            <Link 
              key={item.name} 
              href={`/#${item.id}`} // Points to the root ID
              onClick={(e) => handleScroll(e, item.id)}
              onMouseEnter={onEnter} 
              onMouseLeave={onLeave} 
              className="hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* --- CONTACT / STATUS --- */}
        <div className="flex items-center gap-4 px-0">
           {isScrolled && (
             <span className="hidden md:block text-[10px] text-white uppercase tracking-widest font-bold animate-pulse">
               ● Live: Malindi
             </span>
           )}
           
           <Link href='/contact'>
             <button 
               onMouseEnter={onEnter} 
               onMouseLeave={onLeave} 
               className={`magnetic-btn rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${isScrolled ? "bg-sq-secondary text-black px-6 py-2 shadow-[0_0_20px_rgba(34,211,238,0.3)]" : "border border-white/20 px-8 py-3"}`}
             >
               Contact Us
             </button>
           </Link>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;