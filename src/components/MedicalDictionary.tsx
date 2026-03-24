import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { defineTerm } from '../services/gemini';
import { Search, X, BookOpen, Loader2, ArrowRight } from 'lucide-react';

export default function MedicalDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState<{ definition: string; etymology?: string; clinicalSignificance?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setError(null);
    setDefinition(null);

    try {
      const result = await defineTerm(searchTerm);
      setDefinition(result);
    } catch (err) {
      setError("Could not fetch definition.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-medical-navy text-white rounded-full flex items-center justify-center shadow-2xl shadow-medical-navy/20 hover:scale-110 active:scale-95 transition-all z-[100]"
        title="Medical Dictionary"
      >
        <BookOpen className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-8 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-medical-navy rounded-2xl flex items-center justify-center text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Medical Dictionary</h2>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Clinical Specialist Lexicon</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-8 overflow-y-auto">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a medical term..."
                    className="w-full pl-16 pr-24 py-6 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] text-lg focus:ring-2 focus:ring-medical-teal outline-none transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !searchTerm.trim()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-3 bg-medical-navy text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-medical-navy/90 disabled:opacity-50 transition-all"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                    Search
                  </button>
                </form>

                <div className="space-y-8">
                  {isLoading ? (
                    <div className="py-20 flex flex-col items-center justify-center gap-4 text-zinc-400">
                      <Loader2 className="w-12 h-12 animate-spin" />
                      <p className="text-lg font-medium">Consulting Lexicon...</p>
                    </div>
                  ) : error ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mx-auto">
                        <X className="w-8 h-8" />
                      </div>
                      <p className="text-red-500 font-medium">{error}</p>
                    </div>
                  ) : definition ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold tracking-tight text-medical-navy dark:text-white">{searchTerm}</h3>
                        <div className="h-1 w-20 bg-medical-teal rounded-full" />
                      </div>

                      <div className="space-y-6">
                        <div className="space-y-3">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Definition</p>
                          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {definition.definition}
                          </p>
                        </div>

                        {definition.etymology && (
                          <div className="p-8 bg-zinc-50 dark:bg-zinc-950 rounded-[2rem] border border-zinc-200 dark:border-zinc-800">
                            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">Etymology</p>
                            <p className="text-sm italic text-zinc-600 dark:text-zinc-400 leading-relaxed">
                              {definition.etymology}
                            </p>
                          </div>
                        )}

                        {definition.clinicalSignificance && (
                          <div className="p-8 bg-medical-teal/5 rounded-[2rem] border border-medical-teal/20">
                            <p className="text-[10px] font-mono uppercase tracking-widest text-medical-teal mb-4">Clinical Significance</p>
                            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                              {definition.clinicalSignificance}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="py-20 text-center space-y-4 text-zinc-400">
                      <BookOpen className="w-16 h-16 mx-auto opacity-20" />
                      <p className="text-lg">Enter a term to see its definition, etymology, and clinical significance.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
