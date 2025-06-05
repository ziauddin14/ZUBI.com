import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  const customerService = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Help Center', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Track Order', href: '#' }
  ];

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  const legal = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">ZUBI</h3>
            <p className="text-gray-400">
              ZU Business Industries - Your premier destination for online shopping with the best products and unbeatable prices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              {customerService.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('#') ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {company.map((item) => (
                <li key={item.label}>
                  {item.href.startsWith('#') ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              {legal.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 ShopHub. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
