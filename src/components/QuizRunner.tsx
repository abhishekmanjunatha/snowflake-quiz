import React, { useState, useMemo } from 'react';
import { Domain, Question } from '../types';
import { useQuiz } from '../context/QuizContext';
import { ChevronRight, ChevronLeft, BookOpen, X, Check, AlertCircle } from 'lucide-react';

interface QuizRunnerProps {
  domain: Domain;
  onComplete: (score: number, total: number, incorrectSubTopics: string[]) => void;
  onExit: () => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({ domain, onComplete, onExit }) => {
  const { mode } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showScenario, setShowScenario] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false); // For practice mode immediate feedback

  // Flatten questions to a single array, keeping track of subtopic
  const allQuestions = useMemo(() => {
    const questions: { q: Question; subTopicId: string; subTopicTitle: string }[] = [];
    domain.subTopics.forEach(sub => {
      sub.questions.forEach(q => {
        questions.push({ q, subTopicId: sub.id, subTopicTitle: sub.title });
      });
    });
    return questions;
  }, [domain]);

  const currentQ = allQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === allQuestions.length - 1;
  const hasAnsweredCurrent = !!answers[currentQ.q.id];

  const handleAnswer = (optionLabel: string) => {
    if (hasAnsweredCurrent && mode === 'practice') return; // Prevent changing answer in practice mode after feedback
    
    setAnswers(prev => ({
      ...prev,
      [currentQ.q.id]: optionLabel
    }));

    if (mode === 'practice') {
      setShowFeedback(true);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      finishQuiz();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowFeedback(false);
    }
  };

  const finishQuiz = () => {
    let score = 0;
    const incorrectSubTopics = new Set<string>();

    allQuestions.forEach(({ q, subTopicTitle }) => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      } else {
        incorrectSubTopics.add(subTopicTitle);
      }
    });

    onComplete(score, allQuestions.length, Array.from(incorrectSubTopics));
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Domain {domain.id}</h2>
          <p className="text-sm text-slate-500">Question {currentQuestionIndex + 1} of {allQuestions.length}</p>
        </div>
        <div className="flex space-x-2">
          {domain.scenario && (
            <button
              onClick={() => setShowScenario(true)}
              className="flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Scenario
            </button>
          )}
          <button
            onClick={onExit}
            className="px-3 py-2 text-slate-500 hover:text-slate-700 text-sm font-medium"
          >
            Exit
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-8">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestionIndex + 1) / allQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6">
        <div className="mb-6">
          <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded mb-3">
            {currentQ.subTopicTitle}
          </span>
          <h3 className="text-xl font-medium text-slate-900 leading-relaxed">
            {currentQ.q.text}
          </h3>
        </div>

        <div className="space-y-3">
          {currentQ.q.options.map((option) => {
            const isSelected = answers[currentQ.q.id] === option.label;
            const isCorrect = currentQ.q.correctAnswer === option.label;
            
            let buttonStyle = "border-slate-200 hover:border-blue-400 hover:bg-blue-50";
            let icon = null;

            if (mode === 'practice' && showFeedback) {
              if (isSelected && !isCorrect) {
                buttonStyle = "border-red-500 bg-red-50 text-red-700";
                icon = <AlertCircle className="h-5 w-5 text-red-500" />;
              } else if (isCorrect) {
                buttonStyle = "border-green-500 bg-green-50 text-green-700";
                icon = <Check className="h-5 w-5 text-green-500" />;
              } else {
                buttonStyle = "border-slate-200 opacity-50";
              }
            } else if (isSelected) {
              buttonStyle = "border-blue-600 bg-blue-50 ring-1 ring-blue-600";
            }

            return (
              <button
                key={option.label}
                onClick={() => handleAnswer(option.label)}
                disabled={mode === 'practice' && showFeedback}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between ${buttonStyle}`}
              >
                <div className="flex items-start">
                  <span className="font-bold mr-3 w-6">{option.label}.</span>
                  <span>{option.text}</span>
                </div>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Explanation (Practice Mode) */}
        {mode === 'practice' && showFeedback && (
          <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-700">
            <p className="font-bold mb-1">Explanation:</p>
            <p>{currentQ.q.explanation}</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="flex items-center px-4 py-2 text-slate-600 disabled:opacity-50 hover:text-slate-900"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={!hasAnsweredCurrent}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          {!isLastQuestion && <ChevronRight className="h-5 w-5 ml-1" />}
        </button>
      </div>

      {/* Scenario Modal */}
      {showScenario && domain.scenario && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button 
              onClick={() => setShowScenario(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🏢</span>
              {domain.scenario.title}
            </h3>
            <div className="prose prose-slate text-slate-600">
              <p>{domain.scenario.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
