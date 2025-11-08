import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Impact', href: '/impact' },
      { name: 'Success Stories', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Hire-Train-Deploy', href: '/services#htd' },
      { name: 'TechShift Programme', href: '/services#techshift' },
      { name: 'Outcome-Based Delivery', href: '/services#delivery' },
      { name: 'Experienced Hire', href: '/services#experienced' },
    ],
    resources: [
      { name: 'Learning Pathways', href: '/learning-pathways' },
      { name: 'Neurodiversity', href: '/neurodiversity' },
      { name: 'Mission Partners', href: '/partners' },
    ],
  };

  return (
    <footer className="bg-viridian-700">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://content-studio.biela.dev/i/content-studio/690336182d58fe6cb4ca68de/1762365156841-690336182d58fe6cb4ca68de/1762369959656.png/codeverse-logo.webp" 
              alt="CodeVerse Logo" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-slate-300 text-sm">
              Where Human Potential Meets AI Capability
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-300 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400 text-xs text-center">
            AI vibe coded development by{' '}
            <a href="https://biela.dev/" target="_blank" rel="noopener noreferrer" className="text-viridian-400 hover:text-viridian-300 transition-colors">
              Biela.dev
            </a>
            , powered by{' '}
            <a href="https://teachmecode.ae/" target="_blank" rel="noopener noreferrer" className="text-viridian-400 hover:text-viridian-300 transition-colors">
              TeachMeCode® Institute
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
