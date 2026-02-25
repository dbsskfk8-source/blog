"use client";

import { ThumbsUp, MessageSquare, Bookmark, Share2 } from "lucide-react";

export default function FloatingActionBar() {
    return (
        <div className="hidden lg:flex flex-col items-center gap-6 sticky top-32">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-800 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">1.2K</span>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-800 transition-colors relative">
                    <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-xs text-slate-500 font-medium group-hover:text-slate-300 transition-colors">48</span>
            </div>

            <div className="w-10 border-t border-slate-700/50 my-2"></div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-transparent hover:border-slate-700 bg-transparent flex items-center justify-center text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-800/50 transition-colors">
                    <Bookmark className="w-5 h-5" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-transparent hover:border-slate-700 bg-transparent flex items-center justify-center text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-800/50 transition-colors">
                    <Share2 className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
