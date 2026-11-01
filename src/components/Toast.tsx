import React from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 rounded-lg shadow-xl border border-stone-800 dark:border-stone-200 transition-all transform animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="w-5 h-5 rounded-full bg-stone-800 dark:bg-stone-200 flex items-center justify-center shrink-0">
        <Check className="w-3.5 h-3.5 text-stone-100 dark:text-stone-900" />
      </div>
      <p className="text-xs tracking-wide font-medium">{message}</p>
      <button 
        onClick={onClose}
        className="ml-2 text-stone-400 hover:text-stone-100 dark:hover:text-stone-900 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
