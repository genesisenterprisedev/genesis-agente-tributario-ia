-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Add index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow authenticated users to insert contacts
CREATE POLICY IF NOT EXISTS "Allow authenticated users to insert contacts"
ON contacts FOR INSERT
TO authenticated
WITH CHECK (true);

-- Policy: Allow authenticated users to view all contacts
CREATE POLICY IF NOT EXISTS "Allow authenticated users to view contacts"
ON contacts FOR SELECT
TO authenticated
USING (true);
