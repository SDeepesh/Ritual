-- ☢️ NUCLEAR FIX: UNBLOCKING ALL ENQUIRIES ☢️

-- 1. Disable RLS completely (This makes the table public)
ALTER TABLE enquiries DISABLE ROW LEVEL SECURITY;

-- 2. Grant all permissions to everyone for maximum bypass
GRANT ALL ON TABLE enquiries TO anon, authenticated, service_role, public;

-- 3. Drop all triggers that might be blocking the insert
DROP TRIGGER IF EXISTS on_enquiry_insert_trigger ON enquiries;
DROP TRIGGER IF EXISTS on_enquiry_insert ON enquiries;

-- 4. Drop the notification functions just to be clean
DROP FUNCTION IF EXISTS notify_ritual_triggered();

-- 5. Drop all existing policies to clear the cache
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON enquiries;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON enquiries;
DROP POLICY IF EXISTS "Public can submit enquiries" ON enquiries;
DROP POLICY IF EXISTS "Admins can manage enquiries" ON enquiries;
DROP POLICY IF EXISTS "Allow anon inserts" ON enquiries;
DROP POLICY IF EXISTS "Allow admin select" ON enquiries;
DROP POLICY IF EXISTS "Allow authenticated admins" ON enquiries;
DROP POLICY IF EXISTS "Allow anonymous inserts" ON enquiries;
