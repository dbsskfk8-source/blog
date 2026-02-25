interface AuthorCardProps {
    author_name: string;
    author_avatar: string;
}

export default function AuthorCard({ author_name, author_avatar }: AuthorCardProps) {
    return (
        <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 lg:p-8 mt-12 mb-16 shadow-lg flex flex-col md:flex-row gap-6 md:items-start">
            <div
                className="w-16 h-16 min-w-[4rem] rounded-full border-2 border-slate-600 shadow-inner"
                style={{ backgroundColor: author_avatar || "#3B82F6" }}
            />

            <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                            Written by {author_name}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium mt-1">
                            Software Engineer & Tech Enthusiast
                        </p>
                    </div>

                    <button className="px-5 py-2 bg-transparent hover:bg-slate-800 border border-slate-600 text-slate-200 text-sm font-semibold rounded-lg transition-colors">
                        Follow
                    </button>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    Building scalable frontend applications and writing about it. Passionate about React, TypeScript, and clean code architecture.
                </p>

                <div className="flex items-center gap-4 text-sm font-medium">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}
