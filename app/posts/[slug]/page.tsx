import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import FloatingActionBar from "@/components/post/FloatingActionBar";
import ArticleHeader from "@/components/post/ArticleHeader";
import ArticleContent from "@/components/post/ArticleContent";
import AuthorCard from "@/components/post/AuthorCard";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function PostDetail(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const slug = params?.slug as string;

    const supabase = await createClient();

    const { data: post, error } = await supabase
        .from("posts")
        .select(`
                  *,
                  categories (
                    name,
                    slug
                  )
                `)
        .eq("slug", slug)
        .single();

    if (error || !post) {
        return notFound();
    }

    const categoryData = Array.isArray(post.categories) ? post.categories[0] : post.categories;

    return (
        <div className="min-h-screen bg-slate-900 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                        <ChevronLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 relative">
                    <div className="w-16 shrink-0 hidden lg:block">
                        <FloatingActionBar />
                    </div>

                    <main className="flex-1 max-w-3xl">
                        <ArticleHeader post={{ ...post, categories: categoryData }} />
                        <ArticleContent post={post} />
                        <AuthorCard
                            author_name={post.author_name}
                            author_avatar={post.author_avatar}
                        />

                        <section className="mt-16 pt-8 border-t border-slate-800">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-bold text-white">Comments (3)</h3>
                                <span className="text-sm font-medium text-slate-400">Sort by: Top</span>
                            </div>
                            <textarea
                                className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl p-4 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[120px] resize-y mb-4"
                                placeholder="Add to the discussion..."
                            ></textarea>
                            <div className="flex justify-end">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm">
                                    Post Comment
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
