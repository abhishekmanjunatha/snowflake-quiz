import React from 'react';
import { Snowflake } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Snowflake className="h-8 w-8" />
            <h1 className="text-xl font-bold">SnowPro Core Prep</h1>
          </div>
          <div className="text-sm opacity-90">COF-C02</div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-slate-800 text-slate-400 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>Unofficial Practice App for SnowPro Core Certification</p>
        </div>
      </footer>
    </div>
  );
};
