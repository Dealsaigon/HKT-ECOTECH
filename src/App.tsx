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

export default function App() {
  const [activeTab, setActiveTab] = useState('solutions');
  const [content, setContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/content');
        if (!response.ok) return;
        const data = (await response.json()) as SiteContent;
        setContent(data);
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
