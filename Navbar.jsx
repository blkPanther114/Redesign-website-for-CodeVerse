import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'What We Do', href: '/services' },
    { name: 'Learning Pathways', href: '/learning-pathways' },
    { name: 'Success Stories', href: '/case-studies' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const impactMissionLinks = [
    { name: 'Our Impact', href: '/impact' },
    { name: 'Neurodiversity', href: '/neurodiversity' },
    { name: 'Mission Partners', href: '/partners' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762369959656.png/codeverse-logo.webp" 
                alt="CodeVerse Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
            {navigation.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-viridian-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-viridian-600 transition-colors"
              >
                Impact & Mission
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50"
                >
                  {impactMissionLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-viridian-50 hover:text-viridian-600 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navigation.slice(4).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold text-slate-700 hover:text-viridian-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-2 text-base font-semibold text-slate-700 hover:text-viridian-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-slate-200 pt-4 mt-2">
                <p className="text-sm font-semibold text-slate-700 px-2 mb-2">Impact & Mission</p>
                {impactMissionLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-2 pl-4 text-base font-semibold text-slate-700 hover:text-viridian-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
