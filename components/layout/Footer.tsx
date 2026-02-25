import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-900/50 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{"</>"}</span>
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">DevLog</span>
                    </Link>

                    <div className="flex items-center gap-8 text-sm text-slate-400">
                        <Link href="#" className="hover:text-white transition-colors">About</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">RSS</Link>
                    </div>

                    <div className="flex items-center gap-4 text-slate-400">
                        <a href="#" className="hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm text-slate-500">
                    <p>© 2024 DevLog Platform. Open source content.</p>
                </div>
            </div>
        </footer>
    );
}
