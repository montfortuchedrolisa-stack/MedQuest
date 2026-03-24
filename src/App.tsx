import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { USMLELevel, USMLEQuestion, QuestionMode, TopicCategory, TopicDivision, TopicSubdivision, UserProfile } from './types';
import { generateQuestions } from './services/gemini';
import Dashboard from './components/Dashboard';
import QuestionCard from './components/QuestionCard';
import Auth from './components/Auth';
import MedicalDictionary from './components/MedicalDictionary';
import { auth, getUserProfile } from './services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { AlertCircle, ArrowLeft, GraduationCap, LogOut, Clock } from 'lucide-react';
import { TOPIC_CATEGORIES } from './constants/topics';

export default function App() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [view, setView] = useState<'dashboard' | 'question'>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory>(TOPIC_CATEGORIES[0]);
  const [selectedDivision, setSelectedDivision] = useState<TopicDivision>(TOPIC_CATEGORIES[0].divisions[0]);
  const [selectedSubdivision, setSelectedSubdivision] = useState<TopicSubdivision>(TOPIC_CATEGORIES[0].divisions[0].subdivisions[0]);
  const [selectedLevel, setSelectedLevel] = useState<USMLELevel>('Step 1');
  const [selectedMode, setSelectedMode] = useState<QuestionMode>('Clinical Relevance');
  const [questions, setQuestions] = useState<USMLEQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    // Check for local profile first (fallback)
    const localProfileStr = localStorage.getItem('medquest_local_profile');
    if (localProfileStr) {
      setUserProfile(JSON.parse(localProfileStr));
      setIsAuthReady(true);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const profile = await getUserProfile(user.uid);
        setUserProfile(profile);
      } else {
        setUserProfile(null);
      }
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const isTrialExpired = () => {
    if (!userProfile) return false;
    const trialStart = new Date(userProfile.trialStartDate).getTime();
    const now = new Date().getTime();
    const fiveDaysInMs = 5 * 24 * 60 * 60 * 1000;
    return (now - trialStart) > fiveDaysInMs;
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('medquest_local_profile');
    setUserProfile(null);
    setView('dashboard');
  };

  const handleGenerate = async () => {
    if (isLoading) return;
    if (isTrialExpired()) {
      setError("Your 5-day free trial has expired. Please contact support to continue.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setShowSummary(false);
    setScore(0);
    
    // Create a timeout promise (60 seconds)
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error("Request timed out. The system is taking too long to respond. Try a different topic or level.")), 60000)
    );

    try {
      const newQuestions = await Promise.race([
        generateQuestions(selectedSubdivision.name, selectedLevel, selectedMode),
        timeoutPromise
      ]) as USMLEQuestion[];

      if (!newQuestions || newQuestions.length === 0) {
        throw new Error("No questions were generated.");
      }
      setQuestions(newQuestions);
      setCurrentIndex(0);
      setView('question');
    } catch (err) {
      console.error("Generation failed:", err);
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(`Generation failed: ${message}. Check your API key in the Settings menu or try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = (isCorrect: boolean) => {
    if (isCorrect) setScore(s => s + 1);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleBackToDashboard = () => {
    setView('dashboard');
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setShowSummary(false);
  };

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-medical-paper dark:bg-zinc-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-medical-teal/30 border-t-medical-teal rounded-full animate-spin" />
      </div>
    );
  }

  if (!userProfile) {
    return <Auth onAuthSuccess={setUserProfile} />;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <header className="sticky top-0 z-50 bg-medical-navy text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-medical-teal flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-bold tracking-tighter text-lg">MedQuest</span>
              <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-medical-teal">Clinical Specialist v2.0</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {view === 'question' ? (
              <div className="flex items-center gap-8">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-[8px] font-mono uppercase tracking-widest text-white/40">Session Progress</span>
                  <div className="w-48 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                      className="h-full bg-medical-teal"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-mono font-bold text-medical-teal">
                    Q {currentIndex + 1} / {questions.length}
                  </span>
                  <button
                    onClick={handleBackToDashboard}
                    className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Exit
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="py-12">
        {isTrialExpired() && (
          <div className="max-w-4xl mx-auto mb-12 px-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/40 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Clock className="w-8 h-8" />
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100">Trial Period Expired</h2>
                <p className="text-sm text-amber-700 dark:text-amber-300">Your 5-day free trial has come to an end. To continue accessing MedQuest's premium medical education content, please upgrade your account.</p>
              </div>
              <button className="px-8 py-4 bg-amber-600 text-white rounded-2xl font-bold shadow-xl shadow-amber-600/20 hover:scale-[1.02] transition-all">
                Upgrade Now
              </button>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {view === 'dashboard' ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Dashboard
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedDivision={selectedDivision}
                setSelectedDivision={setSelectedDivision}
                selectedSubdivision={selectedSubdivision}
                setSelectedSubdivision={setSelectedSubdivision}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                selectedMode={selectedMode}
                setSelectedMode={setSelectedMode}
                onGenerate={handleGenerate}
                isLoading={isLoading}
              />
              {error && (
                <div className="max-w-md mx-auto mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400 text-sm font-medium">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key={`question-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {currentQuestion && !showSummary ? (
                <QuestionCard
                  question={currentQuestion}
                  onNext={handleNext}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-2xl mx-auto p-12 bg-zinc-50 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 text-center space-y-8"
                >
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-zinc-900 dark:bg-zinc-100 rounded-full flex items-center justify-center text-white dark:text-zinc-900 mx-auto mb-6">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Session Complete</h2>
                    <p className="text-zinc-500">Great job! Here's how you performed in this session.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Score</p>
                      <p className="text-4xl font-bold">{score} / {questions.length}</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Accuracy</p>
                      <p className="text-4xl font-bold">{Math.round((score / questions.length) * 100)}%</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={handleGenerate}
                      className="w-full py-4 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
                    >
                      Start New Session
                    </button>
                    <button
                      onClick={handleBackToDashboard}
                      className="w-full py-4 bg-transparent text-zinc-600 dark:text-zinc-400 font-bold hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      Return to Dashboard
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Psychometric Precision • Medical Education Excellence
          </p>
          <p className="text-sm font-bold text-medical-teal dark:text-medical-teal">
            App designed and developed by Dr. Olisa Montfort Uche, MBBS, FMCPsych, MSc Physiology (in view). Consultant Psychiatrist and Senior Lecturer.
          </p>
        </div>
      </footer>
      <MedicalDictionary />
    </div>
  );
}
