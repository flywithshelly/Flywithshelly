'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Shelly' },
  { href: '/membership', label: 'Membership' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-900 group-hover:text-[#FF6B6B] transition-colors">
              Fly With Shelly
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-[#FFF0F0] text-[#FF6B6B]'
                    : 'text-gray-600 hover:text-[#FF6B6B] hover:bg-[#FFF0F0]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="ml-2 px-4 py-2 bg-[#FF6B6B] hover:bg-[#ff5252] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Join Now
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                  pathname === link.href
                    ? 'bg-[#FFF0F0] text-[#FF6B6B]'
                    : 'text-gray-700 hover:text-[#FF6B6B] hover:bg-[#FFF0F0]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-2.5 bg-[#FF6B6B] hover:bg-[#ff5252] text-white text-sm font-semibold rounded-xl text-center transition-colors"
            >
              Join Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
