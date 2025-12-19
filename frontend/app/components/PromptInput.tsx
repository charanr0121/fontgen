"use client";

import { useRef, useEffect, useState } from "react";
import { TextureButton } from "@/components/ui/texture-button";

interface PromptInputProps {
  show: boolean;
}

export default function PromptInput({ show }: PromptInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

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

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tag)) {
        newSet.delete(tag);
      } else {
        newSet.add(tag);
      }
      return newSet;
    });
  };

  return (
    <div 
      className={`overflow-visible transition-all duration-500 ease-out ${
        show 
          ? 'max-h-96 opacity-100 translate-y-0 mb-8' 
          : 'max-h-0 opacity-0 -translate-y-4 mb-0'
      }`}
    >
      <div className="max-w-2xl mx-auto mt-8">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
          <textarea
            ref={textareaRef}
            placeholder="A bold, modern sans-serif font with rounded edges and playful character spacing"
            className="w-full px-6 py-4 rounded-t-2xl focus:outline-none resize-none overflow-hidden bg-transparent"
            onInput={adjustTextareaHeight}
            style={{ minHeight: '80px' }}
          />
          <div className="flex items-center gap-2 px-3 pb-3">
            <TextureButton
              variant="icon"
              size="icon"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </TextureButton>
            <div className="flex items-center gap-1.5 flex-1 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {["serif", "sans-serif", "monospace", "script", "display", "handwriting"].map((tag) => {
                const isSelected = selectedTags.has(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-3 py-1 text-xs rounded-full border transition-colors whitespace-nowrap ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 text-blue-700 hover:bg-blue-100"
                        : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
            <TextureButton
              variant="icon"
              size="icon"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </TextureButton>
          </div>
        </div>
      </div>
    </div>
  );
}

