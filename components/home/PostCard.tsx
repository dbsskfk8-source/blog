import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface PostCardProps {
    post: {
        id: string;
        title: string;
        excerpt: string;
        slug: string;
        cover_image: string;
        author_name: string;
        author_avatar: string; // Used as background color hex in our data
        read_time: number;
        created_at: string;
        categories: {
            name: string;
        };
    };
}

export default function PostCard({ post }: PostCardProps) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(new Date(post.created_at));

    return (
        <div className="group relative flex flex-col bg-slate-800/20 border border-slate-800 rounded-xl overflow-hidden hover:bg-slate-800/40 transition-all hover:border-slate-700">
            <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                {post.cover_image && (
                    <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                )}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded shadow-sm">
                        {post.categories?.name || "Uncategorized"}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formattedDate}</span>
                    </div>
                    <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.read_time} min read</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
                    <Link href={`/posts/${post.slug}`}>
                        <span className="absolute inset-0 z-10" />
                        {post.title}
                    </Link>
                </h3>

                <p className="text-slate-400 text-sm line-clamp-2 mb-6 leading-relaxed flex-grow">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-800">
                    <div className="flex items-center gap-3 relative z-20">
                        <div
                            className="w-8 h-8 rounded-full shadow-inner border border-white/10"
                            style={{ backgroundColor: post.author_avatar || "#3B82F6" }}
                        />
                        <span className="text-sm font-medium text-slate-300">
                            {post.author_name}
                        </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors group-hover:translate-x-1 duration-300" />
                </div>
            </div>
        </div>
    );
}
