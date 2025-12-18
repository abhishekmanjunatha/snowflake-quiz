import React, { createContext, useContext, useState, useEffect } from 'react';
import { DomainResult, QuizMode } from '../types';

interface QuizContextType {
  mode: QuizMode | null;
  setMode: (mode: QuizMode | null) => void;
  unlockedDomains: string[];
  unlockDomain: (domainId: string) => void;
  domainResults: Record<string, DomainResult>;
  saveDomainResult: (domainId: string, result: DomainResult) => void;
  resetProgress: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<QuizMode | null>(null);
  
  // Load state from local storage
  const [unlockedDomains, setUnlockedDomains] = useState<string[]>(() => {
    const saved = localStorage.getItem('snowpro_unlocked_domains');
    return saved ? JSON.parse(saved) : ['1.0']; // First domain always unlocked
  });

  const [domainResults, setDomainResults] = useState<Record<string, DomainResult>>(() => {
    const saved = localStorage.getItem('snowpro_domain_results');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('snowpro_unlocked_domains', JSON.stringify(unlockedDomains));
  }, [unlockedDomains]);

  useEffect(() => {
    localStorage.setItem('snowpro_domain_results', JSON.stringify(domainResults));
  }, [domainResults]);

  const unlockDomain = (domainId: string) => {
    if (!unlockedDomains.includes(domainId)) {
      setUnlockedDomains(prev => [...prev, domainId]);
    }
  };

  const saveDomainResult = (domainId: string, result: DomainResult) => {
    setDomainResults(prev => ({
      ...prev,
      [domainId]: result
    }));
  };

  const resetProgress = () => {
    setUnlockedDomains(['1.0']);
    setDomainResults({});
    localStorage.removeItem('snowpro_unlocked_domains');
    localStorage.removeItem('snowpro_domain_results');
  };

  return (
    <QuizContext.Provider value={{
      mode,
      setMode,
      unlockedDomains,
      unlockDomain,
      domainResults,
      saveDomainResult,
      resetProgress
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
