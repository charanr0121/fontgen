"use client";

import React from "react";
import { TextureButton } from "@/components/ui/texture-button";

export function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          FontGen
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <TextureButton variant="minimal" size="md">
            Sign In
          </TextureButton>
          <TextureButton variant="primary" size="md" className="whitespace-nowrap">
            Get Started
          </TextureButton>
        </div>
      </div>
    </nav>
  );
}

export function HeadlineSection() {
  const headlineParts = [
    { text: "build", font: "var(--font-poppins)" },
    { text: "beautiful fonts", font: "var(--font-cookie)" },
    { text: "in seconds", font: "var(--font-libre)" }
  ];

  return (
    <>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 mb-8">
        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
        New: AI-powered font generation
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
        {headlineParts.map((part, index) => (
          <React.Fragment key={index}>
            <span
              className="inline-block pb-3 pt-1 overflow-visible"
              style={{
                fontFamily: part.font,
                lineHeight: '1.4'
              }}
            >
              {part.text}
            </span>
            {index < headlineParts.length - 1 && " "}
          </React.Fragment>
        ))}
      </h1>

      {/* Subheadline */}
      <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Create custom fonts with AI or draw them by hand. 
        <span className="text-gray-900 font-medium"> Choose your creative path.</span>
      </p>
    </>
  );
}

