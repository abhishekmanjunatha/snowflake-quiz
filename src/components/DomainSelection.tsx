import React from 'react';
import { useQuiz } from '../context/QuizContext';
import quizData from '../data/quiz-data.json';
import { Lock, CheckCircle, PlayCircle, AlertCircle } from 'lucide-react';
import { Domain } from '../types';

interface DomainSelectionProps {
  onSelectDomain: (domain: Domain) => void;
}

export const DomainSelection: React.FC<DomainSelectionProps> = ({ onSelectDomain }) => {
  const { mode, unlockedDomains, domainResults } = useQuiz();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          {mode === 'exam' ? 'Exam Progression' : 'Practice Domains'}
        </h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          mode === 'exam' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
        }`}>
          {mode === 'exam' ? 'Exam Mode' : 'Practice Mode'}
        </span>
      </div>

      <div className="space-y-4">
        {quizData.domains.map((domain: any) => {
          const isUnlocked = mode === 'practice' || unlockedDomains.includes(domain.id);
          const result = domainResults[domain.id];
          const isCompleted = !!result;
          const isPassed = result?.passed;

          return (
            <button
              key={domain.id}
              disabled={!isUnlocked}
              onClick={() => onSelectDomain(domain)}
              className={`w-full flex flex-col sm:flex-row items-start sm:items-center p-4 rounded-xl border-2 transition-all ${
                !isUnlocked
                  ? 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-md'
              }`}
            >
              <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4">
                {!isUnlocked ? (
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    <Lock className="h-5 w-5" />
                  </div>
                ) : isCompleted ? (
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    isPassed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {isPassed ? <CheckCircle className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <PlayCircle className="h-5 w-5" />
                  </div>
                )}
              </div>

              <div className="flex-1 text-left w-full">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-slate-800">Domain {domain.id}: {domain.title}</h3>
                  {result && (
                    <span className={`text-sm font-bold ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                      {Math.round((result.score / result.totalQuestions) * 100)}%
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center text-sm text-slate-500 gap-x-4 gap-y-1">
                  <span>Weightage: {domain.weightage}</span>
                  <span>{domain.subTopics.reduce((acc: number, sub: any) => acc + sub.questions.length, 0)} Questions</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
