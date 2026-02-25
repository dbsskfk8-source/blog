-- Create categories table
CREATE TABLE public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create posts table
CREATE TABLE public.posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    cover_image TEXT,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    author_name TEXT NOT NULL,
    author_avatar TEXT,
    read_time INTEGER NOT NULL DEFAULT 5, -- in minutes
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Create Policies
-- Allow public read access to categories
CREATE POLICY "Categories are viewable by everyone." 
ON public.categories FOR SELECT 
USING (true);

-- Allow public read access to posts
CREATE POLICY "Posts are viewable by everyone." 
ON public.posts FOR SELECT 
USING (true);
