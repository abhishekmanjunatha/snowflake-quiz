import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { BookOpen, GraduationCap } from 'lucide-react';

export const Home: React.FC = () => {
  const { setMode } = useQuiz();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Select Your Mode</h2>
        <p className="text-slate-600">Choose how you want to prepare for your certification.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <button
          onClick={() => setMode('practice')}
          className="group p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-blue-500 hover:shadow-md transition-all text-left"
        >
          <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Practice Mode</h3>
          <p className="text-slate-500 text-sm">
            Explore any domain freely. Get immediate feedback on answers. No pressure.
          </p>
        </button>

        <button
          onClick={() => setMode('exam')}
          className="group p-6 bg-white rounded-xl shadow-sm border-2 border-transparent hover:border-purple-500 hover:shadow-md transition-all text-left"
        >
          <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Exam Mode</h3>
          <p className="text-slate-500 text-sm">
            Simulate the exam environment. Unlock domains sequentially by scoring 80%+.
          </p>
        </button>
      </div>

      <div className="text-center pt-8 border-t border-slate-200">
        <p className="text-slate-500 text-sm">
          SnowPro Core Certification Prep &copy; {new Date().getFullYear()}
          <br />
          Created by <a href="https://github.com/AbhishekManjunath" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Abhishek Manjunath</a>
        </p>
      </div>
    </div>
  );
};
