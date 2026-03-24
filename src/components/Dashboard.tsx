import React from 'react';
import { USMLELevel, QuestionMode, TopicCategory, TopicDivision, TopicSubdivision } from '../types';
import { BookOpen, GraduationCap, Settings2, Sparkles, Info, BrainCircuit, ChevronRight, Layers, Target } from 'lucide-react';
import { TOPIC_CATEGORIES } from '../constants/topics';

interface DashboardProps {
  selectedCategory: TopicCategory;
  setSelectedCategory: (category: TopicCategory) => void;
  selectedDivision: TopicDivision;
  setSelectedDivision: (division: TopicDivision) => void;
  selectedSubdivision: TopicSubdivision;
  setSelectedSubdivision: (subdivision: TopicSubdivision) => void;
  selectedLevel: USMLELevel;
  setSelectedLevel: (level: USMLELevel) => void;
  selectedMode: QuestionMode;
  setSelectedMode: (mode: QuestionMode) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const LEVELS: USMLELevel[] = ['Step 1', 'Step 2 CK', 'Step 3'];
const MODES: QuestionMode[] = ['Clinical Relevance', 'Straight Recall'];

export default function Dashboard({
  selectedCategory,
  setSelectedCategory,
  selectedDivision,
  setSelectedDivision,
  selectedSubdivision,
  setSelectedSubdivision,
  selectedLevel,
  setSelectedLevel,
  selectedMode,
  setSelectedMode,
  onGenerate,
  isLoading
}: DashboardProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-medical-teal">
            <div className="w-1.5 h-1.5 rounded-full bg-medical-teal animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold">Clinical Assessment Terminal</span>
          </div>
          <h1 className="text-7xl font-bold tracking-tighter text-medical-navy dark:text-white">
            MedQuest
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-md leading-tight">
            High-fidelity board preparation for the next generation of physicians.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 text-right">Configuration</span>
          <div className="flex flex-col gap-2">
            <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
              {LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    selectedLevel === level 
                      ? 'bg-medical-navy text-white shadow-xl shadow-medical-navy/20' 
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
              {MODES.map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedMode(mode)}
                  className={`flex-1 px-4 py-2.5 rounded-xl text-[10px] uppercase tracking-wider font-bold transition-all duration-300 ${
                    selectedMode === mode 
                      ? 'bg-medical-teal text-white shadow-xl shadow-medical-teal/20' 
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Topic Selection - Hierarchical */}
        <div className="lg:col-span-8 space-y-10">
          {/* Category Selection */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-medical-navy dark:text-white font-bold">
                <Layers className="w-4 h-4 text-medical-teal" />
                <h2 className="text-sm uppercase tracking-widest">Course Category</h2>
              </div>
              <span className="text-[10px] font-mono text-slate-400">{TOPIC_CATEGORIES.length} Categories</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {TOPIC_CATEGORIES.map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedDivision(category.divisions[0]);
                    setSelectedSubdivision(category.divisions[0].subdivisions[0]);
                  }}
                  className={`px-3 py-4 rounded-2xl border text-[10px] font-bold transition-all duration-300 ${
                    selectedCategory.name === category.name 
                      ? 'bg-medical-navy text-white border-medical-navy shadow-lg' 
                      : 'bg-white dark:bg-slate-950 text-slate-500 border-slate-200 dark:border-slate-800 hover:border-medical-teal'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Division Selection */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-medical-navy dark:text-white font-bold">
                <BookOpen className="w-4 h-4 text-medical-teal" />
                <h2 className="text-sm uppercase tracking-widest">Specialty Division</h2>
              </div>
              <span className="text-[10px] font-mono text-slate-400">{selectedCategory.divisions.length} Divisions</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {selectedCategory.divisions.map((division) => (
                <button
                  key={division.name}
                  onClick={() => {
                    setSelectedDivision(division);
                    setSelectedSubdivision(division.subdivisions[0]);
                  }}
                  className={`px-4 py-6 rounded-3xl border text-sm font-bold transition-all duration-300 ${
                    selectedDivision.name === division.name 
                      ? 'bg-medical-navy text-white border-medical-navy shadow-lg' 
                      : 'bg-white dark:bg-slate-950 text-slate-500 border-slate-200 dark:border-slate-800 hover:border-medical-teal'
                  }`}
                >
                  {division.name}
                </button>
              ))}
            </div>
          </div>

          {/* Subdivision Selection */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-medical-navy dark:text-white font-bold">
                <Target className="w-4 h-4 text-medical-teal" />
                <h2 className="text-sm uppercase tracking-widest">Subdivision Focus</h2>
              </div>
              <span className="text-[10px] font-mono text-slate-400">{selectedDivision.subdivisions.length} Subdivisions</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedDivision.subdivisions.map((subdivision) => (
                <button
                  key={subdivision.name}
                  onClick={() => setSelectedSubdivision(subdivision)}
                  className={`group relative px-6 py-8 rounded-[2rem] border transition-all duration-300 text-left overflow-hidden ${
                    selectedSubdivision.name === subdivision.name 
                      ? 'border-medical-navy bg-medical-navy text-white shadow-2xl shadow-medical-navy/20' 
                      : 'border-slate-200 hover:border-medical-teal dark:border-slate-800 dark:hover:border-medical-teal bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full transition-transform duration-500 group-hover:scale-150 ${
                    selectedSubdivision.name === subdivision.name ? 'bg-medical-teal/20' : 'bg-slate-50 dark:bg-slate-900'
                  }`} />
                  <div className="relative z-10 space-y-1">
                    <p className="text-sm font-bold tracking-tight leading-tight">{subdivision.name}</p>
                    <p className={`text-[10px] font-medium leading-tight ${selectedSubdivision.name === subdivision.name ? 'text-white/60' : 'text-slate-400'}`}>
                      {subdivision.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-medical-navy dark:text-white font-bold">
              <Settings2 className="w-4 h-4 text-medical-teal" />
              <h2 className="text-sm uppercase tracking-widest">Session Logic</h2>
            </div>
            
            <div className="bg-medical-navy p-8 rounded-[2.5rem] border border-white/10 space-y-10 relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 p-6">
                <Sparkles className="w-5 h-5 text-medical-teal/40" />
              </div>
              
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-[10px] font-mono font-bold text-medical-teal uppercase tracking-widest">Active Parameters</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">
                        {selectedLevel}
                      </span>
                      <span className="px-3 py-1 bg-medical-teal/20 text-medical-teal rounded-full text-[10px] font-bold uppercase tracking-wider border border-medical-teal/30">
                        {selectedMode}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[8px] font-mono text-white/40 uppercase tracking-widest">Target Focus</p>
                      <p className="text-xs font-bold text-white leading-tight">
                        {selectedCategory.name} <ChevronRight className="w-3 h-3 inline text-medical-teal" /> {selectedDivision.name} <ChevronRight className="w-3 h-3 inline text-medical-teal" /> {selectedSubdivision.name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-medical-teal flex items-center justify-center text-white shadow-lg shadow-medical-teal/20">
                      {selectedMode === 'Clinical Relevance' ? <GraduationCap className="w-6 h-6" /> : <BrainCircuit className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold text-medical-teal uppercase">Batch Size</p>
                      <p className="text-xl font-bold">{selectedMode === 'Straight Recall' ? '5 Items' : '2 Items'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onGenerate}
                disabled={isLoading}
                className="w-full py-5 bg-medical-teal text-white rounded-3xl font-bold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100 shadow-2xl shadow-medical-teal/30"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Initialize Assessment
                  </>
                )}
              </button>
              
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                <Info className="w-4 h-4 text-medical-teal" />
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                  Psychometrically validated vignettes generated in real-time via Med-AI core.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
