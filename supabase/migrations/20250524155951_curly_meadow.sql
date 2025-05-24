/*
  # Contact Form Submissions Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text)
      - `ip_address` (text)

  2. Security
    - Enable RLS on contact_submissions table
    - Add policy for anonymous submissions
    - Add policy for developer access
*/

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'spam')),
  ip_address text
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can create contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Developers can read all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND profiles.role = 'developer'
  ));