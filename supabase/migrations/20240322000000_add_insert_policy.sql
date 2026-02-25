-- Add INSERT policy for authenticated users on posts table
CREATE POLICY "Authenticated users can insert posts"
ON public.posts
FOR INSERT TO authenticated
WITH CHECK (
  auth.role() = 'authenticated'
);
