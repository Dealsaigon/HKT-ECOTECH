import React from 'react';
import { Leaf } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  brandName: string;
  ctaLabel: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, brandName, ctaLabel }) => {
  const navItems = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'emissions', label: 'Emissions' },
    { id: 'resources', label: 'Resources' },
    { id: 'partnerships', label: 'Partnerships' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-white/95 backdrop-blur-md border-b border-surface-container-high transition-colors duration-200">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('solutions')}>
        <Leaf className="w-6 h-6 text-primary" fill="currentColor" />
        <span className="text-xl font-bold text-primary">{brandName}</span>
      </div>
      
      <div className="hidden md:flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 active:scale-95
              ${activeTab === item.id 
                ? 'text-primary border-b-2 border-primary rounded-none pb-1.5' 
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center justify-center px-6 py-2.5 bg-primary text-on-primary text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm">
          {ctaLabel}
        </button>
      </div>
    </nav>
  );
};
