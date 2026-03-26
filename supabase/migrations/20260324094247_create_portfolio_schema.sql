/*
  # Create Portfolio Database Schema

  1. New Tables
    - `projects` - Store portfolio projects with details
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `description` (text) - Project description
      - `technologies` (text array) - Tech stack used
      - `image_url` (text) - Project image URL
      - `github_link` (text) - GitHub repository link
      - `live_link` (text) - Live project URL
      - `created_at` (timestamp)

    - `contact_messages` - Store contact form submissions
      - `id` (uuid, primary key)
      - `name` (text) - Visitor name
      - `email` (text) - Visitor email
      - `message` (text) - Message content
      - `created_at` (timestamp)

    - `portfolio_info` - Store portfolio owner information
      - `id` (uuid, primary key)
      - `owner_name` (text) - Portfolio owner name
      - `email` (text) - Contact email
      - `phone` (text) - Phone number
      - `bio` (text) - Professional bio
      - `github_url` (text) - GitHub profile
      - `linkedin_url` (text) - LinkedIn profile
      - `twitter_url` (text) - Twitter profile
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to projects
    - Add policies for public submissions to contact messages
    - Restrict portfolio info to authenticated users only
*/

-- CREATE TABLE IF NOT EXISTS projects (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   title text NOT NULL,
--   description text NOT NULL,
--   technologies text[] NOT NULL,
--   image_url text,
--   github_link text,
--   live_link text,
--   created_at timestamptz DEFAULT now()
-- );

-- CREATE TABLE IF NOT EXISTS contact_messages (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   name text NOT NULL,
--   email text NOT NULL,
--   message text NOT NULL,
--   created_at timestamptz DEFAULT now()
-- );

-- CREATE TABLE IF NOT EXISTS portfolio_info (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   owner_name text NOT NULL,
--   email text NOT NULL,
--   phone text,
--   bio text,
--   github_url text,
--   linkedin_url text,
--   twitter_url text,
--   updated_at timestamptz DEFAULT now()
-- );

-- ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE portfolio_info ENABLE ROW LEVEL SECURITY;

-- CREATE POLICY "Anyone can view projects"
--   ON projects FOR SELECT
--   USING (true);

-- CREATE POLICY "Anyone can submit contact messages"
--   ON contact_messages FOR INSERT
--   WITH CHECK (true);

-- CREATE POLICY "Public can read portfolio info"
--   ON portfolio_info FOR SELECT
--   USING (true);

-- INSERT INTO portfolio_info (owner_name, email, phone, bio)
-- VALUES (
--   'Alok Kumar Gupta',
--   'aalokgupta4545@gmail.com',
--   '',
--   'Full Stack Developer specializing in MERN stack with strong expertise in Data Structures and Algorithms. Passionate about building scalable web applications and solving complex problems using Java.'
-- );

-- INSERT INTO projects (title, description, technologies, github_link, live_link) VALUES
-- (
--   'E-commerce Platform',
--   'Full-stack e-commerce application with product management, shopping cart, and secure checkout process.',
--   ARRAY['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
--   'https://github.com',
--   'https://example.com'
-- ),
-- (
--   'Task Management App',
--   'Collaborative task management tool with real-time updates and user authentication.',
--   ARRAY['React', 'Firebase', 'Tailwind CSS', 'JavaScript'],
--   'https://github.com',
--   'https://example.com'
-- ),
-- (
--   'Weather Dashboard',
--   'Real-time weather application with location search and forecast using external APIs.',
--   ARRAY['React', 'Node.js', 'OpenWeather API', 'Bootstrap'],
--   'https://github.com',
--   'https://example.com'
-- ),
-- (
--   'Social Media Feed',
--   'Social platform with user profiles, posts, likes, and comments with real-time notifications.',
--   ARRAY['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
--   'https://github.com',
--   'https://example.com'
-- );
