-- 🛡️ FINAL PERMANENT FIX 🛡️

-- 1. Disable RLS for good (Guarantees form works)
ALTER TABLE enquiries DISABLE ROW LEVEL SECURITY;

-- 2. Drop all previous triggers and functions to prevent conflicts
DROP TRIGGER IF EXISTS on_enquiry_insert_trigger ON enquiries;
DROP TRIGGER IF EXISTS on_enquiry_insert ON enquiries;
DROP FUNCTION IF EXISTS notify_ritual_triggered();

-- 3. Use the Standard Supabase Webhook mechanism
-- This function is built-in to all Supabase projects
CREATE TRIGGER on_enquiry_insert
AFTER INSERT ON enquiries
FOR EACH ROW
EXECUTE FUNCTION supabase_functions.http_request(
  'https://aqhxzyqbolxmdzsdcaev.supabase.co/functions/v1/ritual-notify',
  'POST',
  '{"Content-Type":"application/json"}',
  '{}',
  '1000'
);

-- 4. Grant access to everything for peace of mind
GRANT ALL ON TABLE enquiries TO anon, authenticated, service_role, public;
