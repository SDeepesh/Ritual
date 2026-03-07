-- 1. Reset everything for the enquiries table
ALTER TABLE enquiries DISABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can submit enquiries" ON enquiries;
DROP POLICY IF EXISTS "Admins can manage enquiries" ON enquiries;
DROP POLICY IF EXISTS "Allow anon inserts" ON enquiries;
DROP POLICY IF EXISTS "Allow admin select" ON enquiries;
DROP POLICY IF EXISTS "Allow authenticated admins" ON enquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON enquiries;

-- 2. Re-enable RLS
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- 3. Grant explicit permissions to all relevant roles
GRANT ALL ON TABLE enquiries TO anon;
GRANT ALL ON TABLE enquiries TO authenticated;
GRANT ALL ON TABLE enquiries TO service_role;

-- 4. Create the most permissive INSERT policy possible for public submissions
-- We use TO anon specifically because that is the role used by the client's anon key
CREATE POLICY "Enable insert for anonymous users" 
ON public.enquiries 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 5. Create an all-access policy for authenticated users (Admins)
CREATE POLICY "Enable all access for authenticated users" 
ON public.enquiries 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 6. Ensure service_role can always bypass RLS (usually true by default)
ALTER TABLE enquiries FORCE ROW LEVEL SECURITY;
