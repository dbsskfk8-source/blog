import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    activeCategory: string | null;
}

export default function Pagination({ currentPage, totalPages, activeCategory }: PaginationProps) {
    if (totalPages <= 1) return null;

    // Generate page numbers, simplifying for standard design
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (currentPage >= totalPages - 3) {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    const createHref = (page: number) => {
        if (activeCategory) {
            return `/?category=${activeCategory}&page=${page}`;
        }
        return `/?page=${page}`;
    };

    return (
        <div className="flex items-center justify-center gap-1.5 py-12">
            {currentPage > 1 ? (
                <Link
                    href={createHref(currentPage - 1)}
                    className="p-2 min-w-[40px] h-[40px] flex items-center justify-center rounded border border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Link>
            ) : (
                <div className="p-2 min-w-[40px] h-[40px] flex items-center justify-center rounded border border-slate-800 bg-slate-900/50 text-slate-400 opacity-50 cursor-not-allowed">
                    <ChevronLeft className="w-5 h-5" />
                </div>
            )}

            {getPageNumbers().map((page, index) => {
                if (page === '...') {
                    return (
                        <div key={index} className="min-w-[40px] h-[40px] px-3 flex items-center justify-center rounded text-sm font-medium text-slate-500 cursor-default">
                            ...
                        </div>
                    );
                }
                const pageNum = page as number;
                return (
                    <Link
                        key={index}
                        href={createHref(pageNum)}
                        className={`min-w-[40px] h-[40px] px-3 flex items-center justify-center rounded text-sm font-medium transition-colors ${pageNum === currentPage
                            ? "bg-blue-600 border border-blue-500 text-white"
                            : "border border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`}
                    >
                        {pageNum}
                    </Link>
                );
            })}

            {currentPage < totalPages ? (
                <Link
                    href={createHref(currentPage + 1)}
                    className="p-2 min-w-[40px] h-[40px] flex items-center justify-center rounded border border-slate-800 bg-slate-900/50 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </Link>
            ) : (
                <div className="p-2 min-w-[40px] h-[40px] flex items-center justify-center rounded border border-slate-800 bg-slate-900/50 text-slate-400 opacity-50 cursor-not-allowed">
                    <ChevronRight className="w-5 h-5" />
                </div>
            )}
        </div>
    );
}
