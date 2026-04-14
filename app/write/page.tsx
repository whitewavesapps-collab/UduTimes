'use client';

import { 
  Menu, 
  Bold, 
  Italic, 
  Type, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  List, 
  Quote, 
  Undo, 
  Camera, 
  Plus, 
  PenSquare, 
  FileText, 
  Archive, 
  Settings, 
  ChevronUp 
} from 'lucide-react';
import Link from 'next/link';

export default function WritePage() {
  return (
    <div className="min-h-screen bg-[#f9f9fc] dark:bg-slate-950 pb-24 font-[family-name:var(--font-public-sans)]">
      {/* CMS Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm flex justify-between items-center px-4 h-16">
        <div className="flex items-center gap-3">
          <button 
            aria-label="Menu" 
            className="p-2 text-[#002869] dark:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-md"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm">
            <h1 className="text-xl font-[family-name:var(--font-newsreader)] italic font-bold text-[#002869] dark:text-blue-200">
              UduTimes CMS
            </h1>
          </Link>
        </div>
        <button className="bg-[#002869] hover:bg-[#001947] transition-colors text-white px-5 py-1.5 rounded-full text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002869]">
          Publish
        </button>
      </header>

      <main className="pt-20 px-6 max-w-3xl mx-auto">
        {/* Title Input */}
        <div className="relative mt-8">
          <textarea
            className="w-full bg-transparent border-none focus:ring-0 text-4xl md:text-5xl font-[family-name:var(--font-newsreader)] font-bold text-slate-800 dark:text-slate-100 placeholder:text-slate-300 dark:placeholder:text-slate-600 resize-none italic leading-tight p-0"
            placeholder="Enter article title..."
            rows={2}
            aria-label="Article Title"
          />
          <div className="w-16 h-1 bg-[#cca730] mt-4"></div>
        </div>

        {/* Toolbar */}
        <div className="sticky top-16 z-40 bg-[#f9f9fc]/95 dark:bg-slate-950/95 backdrop-blur-sm -mx-6 px-6 py-4 flex items-center gap-6 overflow-x-auto border-y border-slate-200 dark:border-slate-800 mt-8">
          <button aria-label="Bold" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm"><Bold className="w-5 h-5" aria-hidden="true" /></button>
          <button aria-label="Italic" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm"><Italic className="w-5 h-5" aria-hidden="true" /></button>
          <button aria-label="Text Style" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm"><Type className="w-5 h-5" aria-hidden="true" /></button>
          <button aria-label="Insert Link" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm"><LinkIcon className="w-5 h-5" aria-hidden="true" /></button>
          <button aria-label="Insert Image" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm"><ImageIcon className="w-5 h-5" aria-hidden="true" /></button>
          <button aria-label="Bullet List" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm"><List className="w-5 h-5" aria-hidden="true" /></button>
          <button aria-label="Blockquote" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm"><Quote className="w-5 h-5" aria-hidden="true" /></button>
          <button aria-label="Undo" className="text-slate-700 dark:text-slate-300 hover:text-[#002869] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-sm ml-auto"><Undo className="w-5 h-5" aria-hidden="true" /></button>
        </div>

        {/* Editor */}
        <textarea
          className="w-full bg-transparent border-none focus:ring-0 text-lg font-[family-name:var(--font-public-sans)] text-slate-700 dark:text-slate-300 placeholder:text-slate-300 dark:placeholder:text-slate-600 resize-none min-h-[400px] mt-8 leading-relaxed p-0"
          placeholder="Start writing your story here..."
          aria-label="Article Content"
        />

        {/* Post Settings */}
        <section className="mt-12 space-y-6">
          <h3 className="font-[family-name:var(--font-work-sans)] text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">Post Settings</h3>
          
          {/* Featured Image */}
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm text-slate-800 dark:text-slate-200">Featured Image</span>
              <Camera className="w-5 h-5 text-slate-500" aria-hidden="true" />
            </div>
            <button 
              className="w-full aspect-[2/1] rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]"
              aria-label="Upload Cover Image"
            >
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Upload Cover</span>
              <span className="text-[10px] mt-1">Recommended: 1200x630px</span>
            </button>
          </div>

          {/* Status */}
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm text-slate-800 dark:text-slate-200">Status</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#ffe088] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#735c00]"></span>
                <span className="text-[10px] font-bold text-[#735c00] uppercase tracking-wider">Draft</span>
              </div>
            </div>
            <select 
              className="w-full bg-transparent border-b border-slate-300 dark:border-slate-700 pb-2 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#002869] dark:focus:border-blue-400 cursor-pointer"
              aria-label="Article Category"
            >
              <option>Politics</option>
              <option>Economy</option>
              <option>Culture</option>
              <option>Sports</option>
            </select>
          </div>

          {/* Tags */}
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-5">
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 block mb-3">Tags</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300">#DeltaPride</span>
              <span className="px-3 py-1.5 bg-slate-200 dark:bg-slate-800 rounded-full text-xs text-slate-700 dark:text-slate-300">#Editorial</span>
              <button className="px-3 py-1.5 border border-[#002869]/30 dark:border-blue-400/30 rounded-full text-xs text-[#002869] dark:text-blue-400 font-medium flex items-center gap-1 hover:bg-[#002869]/5 dark:hover:bg-blue-400/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]">
                <Plus className="w-3 h-3" aria-hidden="true" /> Tag
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to top */}
      <div className="fixed bottom-24 right-6 z-50">
        <button 
          className="w-12 h-12 bg-[#002869] hover:bg-[#001947] transition-colors text-white rounded-xl shadow-lg flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#002869]"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* CMS Bottom Nav */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pb-safe pt-2 flex justify-around items-center h-20">
        <button className="flex flex-col items-center text-[#002869] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-6 py-1.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869]">
          <PenSquare className="w-5 h-5" aria-hidden="true" />
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold uppercase tracking-wider mt-1">Write</span>
        </button>
        <button className="flex flex-col items-center text-slate-400 hover:text-[#002869] dark:hover:text-blue-400 transition-colors px-4 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-xl">
          <FileText className="w-5 h-5" aria-hidden="true" />
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold uppercase tracking-wider mt-1">Drafts</span>
        </button>
        <button className="flex flex-col items-center text-slate-400 hover:text-[#002869] dark:hover:text-blue-400 transition-colors px-4 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-xl">
          <Archive className="w-5 h-5" aria-hidden="true" />
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold uppercase tracking-wider mt-1">Archive</span>
        </button>
        <button className="flex flex-col items-center text-slate-400 hover:text-[#002869] dark:hover:text-blue-400 transition-colors px-4 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002869] rounded-xl">
          <Settings className="w-5 h-5" aria-hidden="true" />
          <span className="font-[family-name:var(--font-work-sans)] text-[10px] font-bold uppercase tracking-wider mt-1">Settings</span>
        </button>
      </nav>
    </div>
  );
}
