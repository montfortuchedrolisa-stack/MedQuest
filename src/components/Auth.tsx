import React, { useState } from 'react';
import { motion } from 'motion/react';
import { auth, createUserProfile, getUserProfile, UserProfile } from '../services/firebase';
import { signInAnonymously } from 'firebase/auth';
import { GraduationCap, LogIn } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: (profile: UserProfile) => void;
}

export default function Auth({ onAuthSuccess }: AuthProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Use anonymous sign-in to track the trial period
      const result = await signInAnonymously(auth);
      const user = result.user;
      
      let profile = await getUserProfile(user.uid);
      
      if (!profile) {
        profile = {
          uid: user.uid,
          username: 'Guest User',
          email: 'anonymous@medquest.local',
          createdAt: new Date().toISOString(),
          trialStartDate: new Date().toISOString()
        };
        await createUserProfile(profile);
      }
      
      onAuthSuccess(profile);
    } catch (err) {
      console.error('Auth error:', err);
      
      // Fallback logic if Anonymous Auth is disabled in Firebase Console
      if (err instanceof Error && err.message.includes('auth/admin-restricted-operation')) {
        console.warn('Anonymous Auth is disabled. Falling back to local session.');
        
        // Check if we have a local profile already
        const localProfileStr = localStorage.getItem('medquest_local_profile');
        if (localProfileStr) {
          onAuthSuccess(JSON.parse(localProfileStr));
        } else {
          // Create a new local profile
          const localProfile: UserProfile = {
            uid: `local_${Math.random().toString(36).substr(2, 9)}`,
            username: 'Local Guest',
            email: 'local@medquest.local',
            createdAt: new Date().toISOString(),
            trialStartDate: new Date().toISOString()
          };
          localStorage.setItem('medquest_local_profile', JSON.stringify(localProfile));
          onAuthSuccess(localProfile);
        }
      } else {
        setError('Access failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-medical-paper dark:bg-zinc-950 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 p-10 shadow-2xl shadow-medical-navy/5 space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-medical-navy rounded-2xl flex items-center justify-center text-white mx-auto shadow-xl shadow-medical-navy/20">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Welcome to MedQuest</h1>
            <p className="text-sm text-zinc-500">Clinical Specialist v2.0</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-50 dark:bg-zinc-950 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Access the platform immediately to start your 5-day free trial period. No registration required.
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl">
              <p className="text-xs text-red-600 dark:text-red-400 font-medium leading-relaxed">{error}</p>
            </div>
          )}

          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-5 bg-medical-navy text-white rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-medical-navy/20 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <LogIn className="w-5 h-5" />
                Enter Platform
              </>
            )}
          </button>
        </div>

        <div className="pt-4 text-center">
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
            Psychometric Precision • Medical Education Excellence
          </p>
        </div>
      </motion.div>
    </div>
  );
}
