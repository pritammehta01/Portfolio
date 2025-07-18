// components/NavBar.js
'use client';

import Image from 'next/image';

const navItems = [
  { label: 'Home', icon: '/images/home.png', href: '#home' },
  { label: 'About', icon: '/images/user.png', href: '#about' },
  { label: 'Skills', icon: '/images/programming.png', href: '#skills' },
  { label: 'Education', icon: '/graduate/graduation-hat.png', href: '#education' },
  { label: 'Contact', icon: '/graduate/customer-support.png', href: '#contact' },
];

export default function NavBar() {
  return (
    <nav className="bg-white h-16 sticky top-0 z-50 flex items-center justify-around shadow-md dark:bg-[#121212] dark:text-white">
      <link href="/" className="logo flex items-center gap-2">
        <Image className="w-10 h-10" src="/portfolio.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl text-blue-600">Pritam</span>
      </link>

      <ul className="hidden md:flex gap-6 font-semibold">
        {navItems.map(({ label, icon, href }) => (
          <li key={label}>
            <a className="nav-link flex items-center gap-1 hover:text-blue-500 transition-all duration-200" href={href}>
              <span className="hidden sm:block">{label}</span>
              <Image src={icon} alt={label} width={20} height={20} className="sm:hidden" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
