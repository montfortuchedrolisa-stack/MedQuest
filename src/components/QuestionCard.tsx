import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { USMLEQuestion } from '../types';
import { CheckCircle2, XCircle, Info, ChevronRight, Timer, EyeOff, Eye } from 'lucide-react';
import TermExplainer from './TermExplainer';

interface QuestionCardProps {
  question: USMLEQuestion;
  onNext: (isCorrect: boolean) => void;
}

export default function QuestionCard({ question, onNext }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [struckOptions, setStruckOptions] = useState<Set<string>>(new Set());
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isSubmitted) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSubmitted, question.questionNumber]);

  // Reset timer on new question
  useEffect(() => {
    setSeconds(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setStruckOptions(new Set());
  }, [question.questionNumber]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (id: string) => {
    if (isSubmitted || struckOptions.has(id)) return;
    setSelectedOption(id);
  };

  const toggleStrike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (isSubmitted) return;
    const newStruck = new Set(struckOptions);
    if (newStruck.has(id)) {
      newStruck.delete(id);
    } else {
      newStruck.add(id);
      if (selectedOption === id) setSelectedOption(null);
    }
    setStruckOptions(newStruck);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
  };

  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
      {/* Header / Meta */}
      <div className="flex items-center justify-between border-b-2 border-dashed pb-6 border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-slate-400">Assessment ID</span>
            <span className="text-xs font-mono font-bold text-medical-navy dark:text-white">{question.questionNumber}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-slate-400">Elapsed Time</span>
            <div className="flex items-center gap-2">
              <Timer className="w-3 h-3 text-medical-teal" />
              <span className="text-xs font-mono font-bold text-medical-navy dark:text-white">{formatTime(seconds)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-slate-400">System Status</span>
            <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-md border ${
              isSubmitted 
                ? (isCorrect ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200') 
                : 'bg-medical-teal/10 text-medical-teal border-medical-teal/20'
            }`}>
              {isSubmitted ? (isCorrect ? 'VERIFIED_CORRECT' : 'VERIFIED_INCORRECT') : 'MONITORING_INPUT'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Vignette Section */}
        <div className="lg:col-span-7 space-y-8">
          <div className="relative">
            <div className="paper-texture p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden dark:bg-slate-900">
              <div className="absolute top-0 left-0 w-1 h-full bg-medical-teal/20" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-medical-teal animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-slate-400">Patient Record / Clinical Data</span>
              </div>
              <div className="text-xl leading-relaxed text-medical-ink dark:text-slate-100 font-serif selection:bg-medical-teal/20">
                <TermExplainer text={question.vignette} />
              </div>
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">Inquiry</span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>
              <h2 className="text-2xl font-bold text-medical-navy dark:text-white tracking-tight leading-tight">
                {question.question}
              </h2>
            </div>
          </div>
        </div>

        {/* Options Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-slate-400">Response Selection</span>
            <span className="text-[9px] text-slate-400 font-mono uppercase tracking-widest">A-E Protocol</span>
          </div>
          <div className="grid gap-3">
            {question.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isStruck = struckOptions.has(option.id);
              const isCorrectOption = isSubmitted && option.id === question.correctAnswer;
              const isWrongSelection = isSubmitted && isSelected && !isCorrect;

              return (
                <div key={option.id} className="relative group">
                  <button
                    onClick={() => handleOptionSelect(option.id)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      toggleStrike(e as any, option.id);
                    }}
                    disabled={isSubmitted || isStruck}
                    className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all duration-200 relative overflow-hidden ${
                      isStruck 
                        ? 'opacity-30 grayscale cursor-not-allowed border-dashed' 
                        : isSelected 
                          ? 'border-medical-navy bg-medical-navy text-white shadow-xl shadow-medical-navy/20' 
                          : 'border-slate-100 hover:border-medical-teal dark:border-slate-800 dark:hover:border-medical-teal bg-white dark:bg-slate-950'
                    } ${
                      isCorrectOption ? '!border-green-500 !bg-green-50 !text-green-900 dark:!bg-green-900/20 dark:!text-green-100' : ''
                    } ${
                      isWrongSelection ? '!border-red-500 !bg-red-50 !text-red-900 dark:!bg-red-900/20 dark:!text-red-100' : ''
                    }`}
                  >
                    <span className={`w-8 h-8 flex items-center justify-center rounded-lg border-2 text-xs font-mono font-bold transition-colors ${
                      isSelected ? 'border-medical-teal bg-medical-teal text-white' : 'border-slate-200 dark:border-slate-800 text-slate-400'
                    }`}>
                      {option.id}
                    </span>
                    <span className={`flex-1 font-bold text-sm tracking-tight ${isStruck ? 'line-through' : ''}`}>{option.text}</span>
                    {isCorrectOption && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />}
                    {isWrongSelection && <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />}
                  </button>
                  
                  {!isSubmitted && (
                    <button
                      onClick={(e) => toggleStrike(e, option.id)}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                        isStruck ? 'text-medical-teal' : 'text-slate-300 hover:text-medical-teal'
                      }`}
                    >
                      {isStruck ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-6">
            {!isSubmitted && (
              <button
                onClick={handleSubmit}
                disabled={!selectedOption}
                className="w-full py-5 bg-medical-navy text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 shadow-2xl shadow-medical-navy/30 uppercase tracking-widest text-xs"
              >
                Commit Response
              </button>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10 pt-16 border-t-2 border-dashed border-slate-200 dark:border-slate-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-medical-paper dark:bg-slate-900/50 p-10 rounded-3xl space-y-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-medical-teal/10 flex items-center justify-center text-medical-teal">
                    <Info className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-slate-400">Educational Objective</h3>
                </div>
                <p className="text-medical-ink dark:text-slate-300 italic font-serif text-lg leading-relaxed">
                  {question.educationalObjective}
                </p>
              </div>

              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-medical-teal">Clinical Logic / Explanation</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none text-medical-ink dark:text-slate-300 leading-relaxed font-medium">
                    <TermExplainer text={question.explanation} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-slate-400">Differential / Distractor Analysis</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                    <TermExplainer text={question.distractorAnalysis} />
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNext(isCorrect)}
                    className="w-full py-5 bg-medical-teal text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-medical-teal/30 uppercase tracking-widest text-xs"
                  >
                    Advance to Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
