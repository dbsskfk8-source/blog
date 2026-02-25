-- Insert categories
WITH new_categories AS (
  INSERT INTO public.categories (name, slug)
  VALUES
    ('React', 'react'),
    ('Backend', 'backend'),
    ('CSS', 'css'),
    ('Systems', 'systems'),
    ('DevOps', 'devops'),
    ('UX', 'ux'),
    ('System Design', 'system-design'),
    ('Career', 'career')
  RETURNING id, slug
)
-- Insert posts using the returned category IDs
INSERT INTO public.posts (title, excerpt, content, slug, cover_image, category_id, author_name, author_avatar, read_time, created_at)
VALUES
  (
    'Understanding React Server Components',
    'Learn how RSCs change the way we build React apps by moving logic to the server and...',
    'Full content goes here...',
    'understanding-react-server-components',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop', -- Placeholder for React image
    (SELECT id FROM new_categories WHERE slug = 'react'),
    'Sarah Jenkins',
    '#8B5CF6', -- Storing color hex instead of image URL since avatars are colors in design
    5,
    '2024-03-15T10:00:00Z'
  ),
  (
    'Optimizing Database Queries in Go',
    'Techniques for writing efficient SQL queries and managing connection pools in high-...',
    'Full content goes here...',
    'optimizing-database-queries-in-go',
    'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop', -- Placeholder for Code
    (SELECT id FROM new_categories WHERE slug = 'backend'),
    'Alex Chen',
    '#10B981', -- Storing color hex for frontend avatar
    8,
    '2024-03-12T10:00:00Z'
  ),
  (
    'CSS Grid Layout: A Comprehensive Guide',
    'Mastering the two-dimensional layout system to create complex, responsive web designs...',
    'Full content goes here...',
    'css-grid-layout-comprehensive-guide',
    'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=600&auto=format&fit=crop', -- Placeholder for Desk
    (SELECT id FROM new_categories WHERE slug = 'css'),
    'Maria Garcia',
    '#F43F5E', -- Storing color hex
    12,
    '2024-03-10T10:00:00Z'
  ),
  (
    'Rust vs C++: System Programming',
    'A deep dive into memory safety, ownership models, and performance characteristics of...',
    'Full content goes here...',
    'rust-vs-cpp-system-programming',
    'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=600&auto=format&fit=crop', -- Placeholder for binary/laptop code
    (SELECT id FROM new_categories WHERE slug = 'systems'),
    'David Kim',
    '#F97316', -- Storing color hex
    15,
    '2024-03-08T10:00:00Z'
  ),
  (
    'Deploying Microservices with Kubernetes',
    'Best practices for container orchestration, service discovery, and scaling microservices i...',
    'Full content goes here...',
    'deploying-microservices-with-kubernetes',
    'https://images.unsplash.com/photo-1618401471353-b98a5387136f?q=80&w=600&auto=format&fit=crop', -- Placeholder for tech network
    (SELECT id FROM new_categories WHERE slug = 'devops'),
    'James Wilson',
    '#3B82F6', -- Storing color hex
    10,
    '2024-03-05T10:00:00Z'
  ),
  (
    'Accessibility First Design Patterns',
    'Building inclusive web experiences for everyone by incorporating accessibility into...',
    'Full content goes here...',
    'accessibility-first-design-patterns',
    'https://images.unsplash.com/photo-1506452504824-3f1fb817293b?q=80&w=600&auto=format&fit=crop', -- Placeholder for UX chair/plant
    (SELECT id FROM new_categories WHERE slug = 'ux'),
    'Elena Rodriguez',
    '#8B5CF6', -- Storing color hex
    6,
    '2024-03-01T10:00:00Z'
  );
