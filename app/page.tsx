import Hero from "@/components/home/Hero";
import CategoryFilter from "@/components/home/CategoryFilter";
import PostCard from "@/components/home/PostCard";
import Pagination from "@/components/home/Pagination";
import { createClient } from "@/utils/supabase/server";

export default async function Home(props: { searchParams?: Promise<{ category?: string; page?: string }> }) {
  const searchParams = await props.searchParams;
  const activeCategory = searchParams?.category || null;
  const currentPage = Number(searchParams?.page) || 1;
  const POSTS_PER_PAGE = 6;

  const supabase = await createClient();

  // Fetch categories
  const { data: categories } = await supabase.from("categories").select("*").order("name");

  // Fetch posts
  let query = supabase
    .from("posts")
    .select(`
      *,
      categories!inner (
        name,
        slug
      )
    `, { count: "exact" });

  if (activeCategory) {
    query = query.eq("categories.slug", activeCategory);
  }

  const from = (currentPage - 1) * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE - 1;

  const { data: posts, count, error } = await query
    .order("created_at", { ascending: false })
    .range(from, to);

  const safePosts = posts || [];
  const safeCategories = categories || [];
  const totalPages = count !== null ? Math.ceil(count / POSTS_PER_PAGE) : 1;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <CategoryFilter
        categories={safeCategories}
        activeCategory={activeCategory}
      />

      <div className="min-h-[500px]">
        {safePosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safePosts.map((post: any) => (
              <PostCard key={post.id} post={{
                ...post,
                // Reshape categories mapping since !inner returns an array or object depending on structure
                categories: Array.isArray(post.categories) ? post.categories[0] : post.categories
              }} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64 text-slate-400">
            No posts found for this category.
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        activeCategory={activeCategory}
      />
    </div>
  );
}
