import React, { useState } from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { DomainSelection } from './components/DomainSelection';
import { QuizRunner } from './components/QuizRunner';
import { ResultSummary } from './components/ResultSummary';
import { Domain, DomainResult } from './types';
import quizData from './data/quiz-data.json';

const AppContent: React.FC = () => {
  const { mode, setMode, unlockDomain, saveDomainResult } = useQuiz();
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [currentResult, setCurrentResult] = useState<DomainResult | null>(null);

  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setCurrentResult(null);
  };

  const handleQuizComplete = (score: number, total: number, incorrectSubTopics: string[]) => {
    if (!selectedDomain || !mode) return;

    const percentage = (score / total) * 100;
    const passed = percentage >= 80; // 80% passing score

    const result: DomainResult = {
      score,
      totalQuestions: total,
      passed,
      timestamp: Date.now(),
      incorrectSubTopics
    };

    setCurrentResult(result);
    saveDomainResult(selectedDomain.id, result);

    if (mode === 'exam' && passed) {
      // Find next domain index
      const currentIndex = quizData.domains.findIndex(d => d.id === selectedDomain.id);
      if (currentIndex < quizData.domains.length - 1) {
        const nextDomain = quizData.domains[currentIndex + 1];
        unlockDomain(nextDomain.id);
      }
    }
  };

  const handleNextDomain = () => {
    if (!selectedDomain) return;
    const currentIndex = quizData.domains.findIndex(d => d.id === selectedDomain.id);
    if (currentIndex < quizData.domains.length - 1) {
      const nextDomain = quizData.domains[currentIndex + 1];
      setSelectedDomain(nextDomain as Domain);
      setCurrentResult(null);
    } else {
      // All domains completed
      setSelectedDomain(null);
      setCurrentResult(null);
    }
  };

  const handleRetry = () => {
    setCurrentResult(null);
  };

  const handleHome = () => {
    setSelectedDomain(null);
    setCurrentResult(null);
    setMode(null);
  };

  const handleBackToSelection = () => {
    setSelectedDomain(null);
    setCurrentResult(null);
  };

  // Render Logic
  let content;

  if (!mode) {
    content = <Home />;
  } else if (selectedDomain && !currentResult) {
    content = (
      <QuizRunner 
        domain={selectedDomain} 
        onComplete={handleQuizComplete}
        onExit={handleBackToSelection}
      />
    );
  } else if (selectedDomain && currentResult) {
    content = (
      <ResultSummary 
        result={currentResult}
        mode={mode}
        onRetry={handleRetry}
        onHome={handleHome}
        onNext={mode === 'exam' && currentResult.passed ? handleNextDomain : undefined}
      />
    );
  } else {
    content = (
      <>
        <button 
          onClick={() => setMode(null)}
          className="mb-6 text-slate-500 hover:text-slate-700 font-medium flex items-center"
        >
          ← Back to Home
        </button>
        <DomainSelection onSelectDomain={handleDomainSelect} />
      </>
    );
  }

  return (
    <Layout>
      {content}
    </Layout>
  );
};

function App() {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
}

export default App;
