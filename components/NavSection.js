'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const navItems = [
  { label: 'Home', icon: '/images/home.png', href: '#home' },
  { label: 'About', icon: '/images/user.png', href: '#about' },
  { label: 'Skills', icon: '/images/programming.png', href: '#skills' },
  { label: 'Education', icon: '/graduate/graduation-hat.png', href: '#education' },
  { label: 'Contact', icon: '/graduate/customer-support.png', href: '#contact' }
];

const Navbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('main > div[id], main > section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('border-b-2', 'border-blue-700', 'text-blue-700', 'font-bold');
        if (link.getAttribute('data-link') === current) {
          link.classList.add('border-b-2', 'border-blue-700', 'text-blue-700', 'font-bold');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white h-16 flex items-center justify-between px-6 sticky top-0 z-50 shadow">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/portfolio.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl text-blue-600">Pritam</span>
      </Link>

      <ul className="flex gap-5 md:gap-10 items-center font-bold text-gray-800">
        {navItems.map(({ label, icon, href }) => (
          <li key={label}>
            <a
              href={href}
              data-link={href.replace('#', '')}
              className="nav-link transition-all duration-150 hover:text-blue-700"
            >
              <span className="hidden sm:block">{label}</span>
              <Image
                className="w-5 h-5 sm:hidden"
                src={icon}
                alt={label}
                width={20}
                height={20}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
