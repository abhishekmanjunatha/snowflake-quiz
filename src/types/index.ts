export interface Option {
  label: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
}

export interface SubTopic {
  id: string;
  title: string;
  questions: Question[];
}

export interface Scenario {
  title: string;
  description: string;
}

export interface Domain {
  id: string;
  title: string;
  weightage: string;
  scenario: Scenario | null;
  subTopics: SubTopic[];
}

export interface QuizData {
  title: string;
  domains: Domain[];
}

export type QuizMode = 'exam' | 'practice';

export interface DomainResult {
  score: number;
  totalQuestions: number;
  passed: boolean;
  timestamp: number;
  incorrectSubTopics: string[];
}
