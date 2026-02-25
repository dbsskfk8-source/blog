import Link from "next/link";
import { Search } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function Navbar() {
    const supabase = await createClient();
    const { data: { session } } = await supabase.auth.getSession();
    const user = session?.user ?? null;

    return (
        <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{"</>"}</span>
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">DevLog</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            <Link href="#" className="text-slate-300 hover:text-white transition-colors">Articles</Link>
                            <Link href="#" className="text-slate-300 hover:text-white transition-colors">Tutorials</Link>
                            <Link href="#" className="text-slate-300 hover:text-white transition-colors">Snippets</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search posts..."
                                className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 w-64 transition-all"
                            />
                        </div>

                        {user ? (
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/write"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                                >
                                    Write Post
                                </Link>
                                <form action={async () => {
                                    "use server";
                                    const supabase = await createClient();
                                    await supabase.auth.signOut();
                                    revalidatePath("/", "layout");
                                    redirect("/");
                                }}>
                                    <button
                                        type="submit"
                                        className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                                    >
                                        Log Out
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                                >
                                    Log In
                                </Link>
                                <Link
                                    href="/login?mode=signup"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
