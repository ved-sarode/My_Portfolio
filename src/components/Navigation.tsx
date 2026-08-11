"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full top-0 sticky bg-background/90 backdrop-blur-md z-50 shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.6)]">
      <div className="flex justify-between items-center w-full px-6 md:px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl md:text-2xl font-semibold tracking-tight text-primary">
          Vedant Vikas Sarode
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-2 font-body font-semibold text-on-surface">
          <Link href="/" className="text-on-surface-variant px-4 py-2 hover:text-primary transition-all duration-300">
            Home
          </Link>
          <Link href="/experience" className="text-on-surface-variant px-4 py-2 hover:text-primary transition-all duration-300">
            Experience
          </Link>
          <Link href="/publications" className="text-on-surface-variant px-4 py-2 hover:text-primary transition-all duration-300">
            Publications
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <Link 
          href="/contact" 
          className="hidden md:flex bg-background shadow-neo-raised text-primary font-semibold px-6 py-2 rounded-full hover:text-tertiary active:shadow-neo-pressed transition-all duration-300 items-center gap-2"
        >
          Contact
        </Link>
        
        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-on-surface shadow-neo-raised p-2 rounded-lg active:shadow-neo-pressed transition-shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-outline-variant/30 shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex flex-col items-center py-6 gap-4 animate-in slide-in-from-top-2">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant font-semibold text-lg hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/experience" 
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant font-semibold text-lg hover:text-primary transition-colors"
          >
            Experience
          </Link>
          <Link 
            href="/publications" 
            onClick={() => setIsOpen(false)}
            className="text-on-surface-variant font-semibold text-lg hover:text-primary transition-colors"
          >
            Publications
          </Link>
          
          <div className="w-16 h-px bg-outline-variant/50 my-2"></div>
          
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-background shadow-neo-raised text-primary font-semibold px-8 py-3 rounded-full hover:text-tertiary active:shadow-neo-pressed transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
