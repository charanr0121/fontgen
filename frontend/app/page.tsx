"use client";

import { useState } from "react";
import { Zap, Pencil } from "lucide-react";
import PromptInput from "./components/PromptInput";
import { TextureButton } from "@/components/ui/texture-button";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
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

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            New: AI-powered font generation
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Build beautiful fonts
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              in seconds
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create custom fonts with AI or draw them by hand. 
            <span className="text-gray-900 font-medium"> Choose your creative path.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <TextureButton 
              onClick={() => setShowChat(!showChat)}
              variant="primary"
              size="lg"
              className="w-auto min-w-[180px]"
            >
              <Zap className="w-5 h-5" />
              AI Generate
            </TextureButton>
            <TextureButton 
              variant="secondary"
              size="lg"
              className="w-auto min-w-[180px]"
            >
              <Pencil className="w-5 h-5" />
              Draw One
            </TextureButton>
          </div>

          <PromptInput show={showChat} />
        </div>
      </main>
    </div>
  );
}
