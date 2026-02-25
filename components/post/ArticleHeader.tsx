interface ArticleHeaderProps {
    post: {
        title: string;
        excerpt: string;
        read_time: number;
        created_at: string;
        author_name: string;
        author_avatar: string;
        categories: {
            name: string;
        };
    };
}

export default function ArticleHeader({ post }: ArticleHeaderProps) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).format(new Date(post.created_at));

    return (
        <header className="mb-10">
            <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20 uppercase tracking-wide">
                    {post.categories?.name || "Uncategorized"}
                </span>
                <span className="text-slate-400 text-sm font-medium">·</span>
                <span className="text-slate-400 text-sm font-medium">{post.read_time} min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight tracking-tight">
                {post.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8">
                {post.excerpt}
            </p>

            <div className="flex items-center gap-4 py-6 border-t border-slate-800/60">
                <div
                    className="w-12 h-12 rounded-full border border-white/10 shadow-inner"
                    style={{ backgroundColor: post.author_avatar || "#3B82F6" }}
                />
                <div className="flex flex-col">
                    <span className="text-slate-200 font-bold text-base">{post.author_name}</span>
                    <span className="text-slate-500 text-sm">Senior Frontend Engineer</span>
                </div>
                <div className="ml-auto text-sm text-slate-500 font-medium">
                    {formattedDate}
                </div>
            </div>
        </header>
    );
}
