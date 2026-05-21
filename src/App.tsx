/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SolutionsPage } from './pages/Solutions';
import { BlockchainPage } from './pages/Blockchain';
import { EmissionsPage } from './pages/Emissions';
import { ResourcesPage } from './pages/Resources';
import { Partnerships } from './pages/Partnerships';
import { AIChatWidget } from './components/AIChatWidget';
import { SiteContent } from './types/siteContent';
import { defaultContent } from './lib/defaultContent';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export default function App() {
  const [activeTab, setActiveTab] = useState('solutions');
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/content`);
        if (!response.ok) return;

        const data = (await response.json()) as Partial<SiteContent>;
        if (!data?.brand || !data?.navbar || !data?.emissionsHero) return;

        setContent({
          brand: { ...defaultContent.brand, ...data.brand },
          navbar: { ...defaultContent.navbar, ...data.navbar },
          emissionsHero: { ...defaultContent.emissionsHero, ...data.emissionsHero },
        });
      } catch {
        // fallback to bundled defaults if backend is not running
      }
    };

    fetchContent();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'solutions':
        return <SolutionsPage />;
      case 'blockchain':
        return <BlockchainPage />;
      case 'emissions':
        return <EmissionsPage content={content.emissionsHero} />;
      case 'resources':
        return <ResourcesPage />;
      case 'partnerships':
        return <Partnerships />;
      default:
        return <SolutionsPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans text-on-surface antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} brandName={content.brand.name} ctaLabel={content.navbar.ctaLabel} />

      <main className="flex-1 w-full pt-20 flex flex-col">{renderContent()}</main>

      <Footer />
      <AIChatWidget />
    </div>
  );
}
