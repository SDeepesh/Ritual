-- 1. Ensure RLS is active
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- 2. Grant basic table permissions to Supabase roles
GRANT ALL ON TABLE enquiries TO anon, authenticated, service_role;

-- 3. Drop all potentially conflicting policies
DROP POLICY IF EXISTS "Allow anon inserts" ON enquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON enquiries;
DROP POLICY IF EXISTS "Allow public inserts" ON enquiries;
DROP POLICY IF EXISTS "Allow admin select" ON enquiries;
DROP POLICY IF EXISTS "Allow authenticated admins" ON enquiries;

-- 4. Create explicit, clean policies
-- Allow ANYONE (including public/anon) to insert leads
CREATE POLICY "Public can submit enquiries" 
ON enquiries FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow AUTHENTICATED users (you) to view/manage everything
CREATE POLICY "Admins can manage enquiries" 
ON enquiries FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);
