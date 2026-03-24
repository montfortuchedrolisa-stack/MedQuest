export type USMLELevel = 'Step 1' | 'Step 2 CK' | 'Step 3';
export type QuestionMode = 'Clinical Relevance' | 'Straight Recall';

export interface TopicSubdivision {
  name: string;
  description: string;
}

export interface TopicDivision {
  name: string;
  subdivisions: TopicSubdivision[];
}

export interface TopicCategory {
  name: string;
  divisions: TopicDivision[];
}

export interface Option {
  id: string;
  text: string;
}

export interface USMLEQuestion {
  questionNumber: string;
  vignette: string;
  question: string;
  options: Option[];
  correctAnswer: string; // The letter (A, B, C, D, E)
  educationalObjective: string;
  explanation: string;
  distractorAnalysis: string;
}

export interface UserProfile {
  uid: string;
  username: string;
  email: string;
  createdAt: string;
  trialStartDate: string;
}
