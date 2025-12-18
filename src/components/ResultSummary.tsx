import React from 'react';
import { DomainResult, QuizMode } from '../types';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Home } from 'lucide-react';

interface ResultSummaryProps {
  result: DomainResult;
  mode: QuizMode;
  onRetry: () => void;
  onHome: () => void;
  onNext?: () => void;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({ result, mode, onRetry, onHome, onNext }) => {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const isPass = result.passed;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className={`p-8 text-center ${isPass ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className={`inline-flex p-4 rounded-full mb-4 ${isPass ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {isPass ? <CheckCircle className="h-12 w-12" /> : <XCircle className="h-12 w-12" />}
        </div>
        <h2 className={`text-3xl font-bold mb-2 ${isPass ? 'text-green-800' : 'text-red-800'}`}>
          {isPass ? 'Domain Passed!' : 'Keep Practicing'}
        </h2>
        <p className="text-slate-600 mb-6">
          You scored <span className="font-bold text-slate-900">{percentage}%</span>
          {mode === 'exam' && <span className="text-sm ml-2">(80% required to pass)</span>}
        </p>
        
        <div className="flex justify-center space-x-8 text-sm">
          <div>
            <span className="block font-bold text-2xl text-slate-800">{result.score}</span>
            <span className="text-slate-500">Correct</span>
          </div>
          <div>
            <span className="block font-bold text-2xl text-slate-800">{result.totalQuestions}</span>
            <span className="text-slate-500">Total</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        {result.incorrectSubTopics.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold text-slate-800 mb-3">Improvement Areas</h3>
            <ul className="space-y-2">
              {result.incorrectSubTopics.map((topic, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600">
                  <span className="mr-2 text-red-500">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-3">
          {mode === 'exam' && isPass && onNext && (
            <button
              onClick={onNext}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Next Domain <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          )}
          
          <button
            onClick={onRetry}
            className="w-full py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center"
          >
            <RotateCcw className="h-5 w-5 mr-2" /> Retry Domain
          </button>

          <button
            onClick={onHome}
            className="w-full py-3 text-slate-500 hover:text-slate-700 font-medium flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" /> Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
};
