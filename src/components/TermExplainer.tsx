import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { defineTerm } from '../services/gemini';
import { Search, X, BookOpen, Loader2 } from 'lucide-react';

interface TermExplainerProps {
  text: string;
}

export default function TermExplainer({ text }: TermExplainerProps) {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [definition, setDefinition] = useState<{ definition: string; etymology?: string; clinicalSignificance?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleWordClick = async (word: string) => {
    // Clean the word (remove punctuation)
    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
    if (cleanWord.length < 3) return;

    setSelectedTerm(cleanWord);
    setIsLoading(true);
    setError(null);
    setDefinition(null);

    try {
      const result = await defineTerm(cleanWord);
      setDefinition(result);
    } catch (err) {
      setError("Could not fetch definition.");
    } finally {
      setIsLoading(false);
    }
  };

  // Split text into words, keeping punctuation
  const words = text.split(/(\s+)/);

  return (
    <div className="relative">
      <div className="leading-relaxed">
        {words.map((part, i) => {
          if (/\s+/.test(part)) return part;
          
          // Only make words with 3+ characters clickable to avoid common small words
          const isClickable = part.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").length >= 3;

          return (
            <span
              key={i}
              onClick={() => isClickable && handleWordClick(part)}
              className={isClickable ? "cursor-help hover:text-medical-teal hover:underline decoration-dotted transition-colors" : ""}
            >
              {part}
            </span>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedTerm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedTerm(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-medical-navy rounded-xl flex items-center justify-center text-white">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{selectedTerm}</h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Medical Definition</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTerm(null)}
                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {isLoading ? (
                    <div className="py-12 flex flex-col items-center justify-center gap-4 text-zinc-400">
                      <Loader2 className="w-8 h-8 animate-spin" />
                      <p className="text-sm font-medium">Consulting Lexicon...</p>
                    </div>
                  ) : error ? (
                    <div className="py-8 text-center text-red-500">
                      <p>{error}</p>
                    </div>
                  ) : definition && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                          {definition.definition}
                        </p>
                      </div>

                      {definition.etymology && (
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Etymology</p>
                          <p className="text-xs italic text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {definition.etymology}
                          </p>
                        </div>
                      )}

                      {definition.clinicalSignificance && (
                        <div className="p-4 bg-medical-teal/5 rounded-2xl border border-medical-teal/20">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-medical-teal mb-2">Clinical Significance</p>
                          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            {definition.clinicalSignificance}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
