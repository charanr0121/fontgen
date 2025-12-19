"use client";

import { useRef, useEffect } from "react";
import { TextureButton } from "@/components/ui/texture-button";

interface PromptInputProps {
  show: boolean;
}

export default function PromptInput({ show }: PromptInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (show && textareaRef.current) {
      // Small delay to ensure the element is visible before focusing
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  }, [show]);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      const minHeight = 80; // ~3 rows
      const maxHeight = 200; // max height before scrolling
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      adjustTextareaHeight();
    }
  }, [show]);

  return (
    <div 
      className={`overflow-visible transition-all duration-500 ease-out ${
        show 
          ? 'max-h-96 opacity-100 translate-y-0 mb-8' 
          : 'max-h-0 opacity-0 -translate-y-4 mb-0'
      }`}
    >
      <div className="max-w-2xl mx-auto mt-8">
        <div className="relative">
          <textarea
            ref={textareaRef}
            placeholder="A bold, modern sans-serif font with rounded edges and playful character spacing"
            className="w-full px-6 py-4 pr-16 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white shadow-sm resize-none overflow-hidden"
            onInput={adjustTextareaHeight}
            style={{ minHeight: '80px' }}
          />
          <TextureButton
            variant="icon"
            size="icon"
            className="absolute bottom-3 right-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </TextureButton>
        </div>
      </div>
    </div>
  );
}

