import Link from "next/link";

interface CategoryFilterProps {
    categories: { id: string; name: string; slug: string }[];
    activeCategory: string | null;
}

export default function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap gap-3 py-4 mb-8">
            <Link
                href="/"
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === null
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                    }`}
            >
                All Posts
            </Link>

            {categories.map((cat) => (
                <Link
                    key={cat.id}
                    href={`/?category=${cat.slug}`}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.slug
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white"
                        }`}
                >
                    {cat.name}
                </Link>
            ))}
        </div>
    );
}
