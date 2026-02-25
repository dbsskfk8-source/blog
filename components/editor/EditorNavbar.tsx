"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface EditorNavbarProps {
    onPublish: () => void;
    isPublishing: boolean;
}

export default function EditorNavbar({ onPublish, isPublishing }: EditorNavbarProps) {
    return (
        <nav className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 h-16">
            <div className="flex justify-between items-center h-full px-6 max-w-[1400px] mx-auto">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                            <span className="text-white font-bold text-lg">{"</>"}</span>
                        </div>
                        <span className="text-white font-bold tracking-tight text-lg">DevBlog</span>
                    </Link>
                    <span className="text-slate-600 font-light text-lg">/</span>
                    <span className="text-slate-400 font-medium text-sm tracking-wide">Editor</span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-2 text-slate-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-medium">Saved</span>
                    </div>

                    <div className="flex items-center gap-3 border-l border-slate-800 pl-6">
                        <button
                            className="text-slate-300 bg-slate-800/50 hover:bg-slate-700 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-transparent hover:border-slate-600"
                            disabled={isPublishing}
                        >
                            Save Draft
                        </button>
                        <button
                            onClick={onPublish}
                            disabled={isPublishing}
                            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                        >
                            {isPublishing ? "Publishing..." : "Publish"}
                        </button>
                    </div>

                    {/* User Avatar Placeholder */}
                    <div className="w-9 h-9 rounded-full bg-orange-300 ml-2 hidden md:block" />
                </div>
            </div>
        </nav>
    );
}
