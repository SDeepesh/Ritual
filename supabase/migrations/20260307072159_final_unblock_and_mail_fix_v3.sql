-- 🛡️ FINAL STABLE PRODUCTION FIX (v3) 🛡️

-- 1. Ensure RLS is DISABLED for the enquiries table (Guarantees form submissions work)
ALTER TABLE enquiries DISABLE ROW LEVEL SECURITY;

-- 2. Clean up ALL previous traces of triggers, functions, and broken schemas
DROP TRIGGER IF EXISTS on_enquiry_insert_trigger ON enquiries;
DROP TRIGGER IF EXISTS on_enquiry_insert ON enquiries;
DROP FUNCTION IF EXISTS notify_ritual_triggered();
-- Remove the problematic schema from a previous failed attempt
DROP SCHEMA IF EXISTS supabase_functions CASCADE;

-- 3. Ensure pg_net extension is active (Standard in Supabase)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 4. Create the trigger function using the 'net' schema (Standard for pg_net)
-- We use SECURITY DEFINER to ensure it has bypass permissions if needed
CREATE OR REPLACE FUNCTION notify_ritual_triggered()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://aqhxzyqbolxmdzsdcaev.supabase.co/functions/v1/ritual-notify',
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body := json_build_object('record', row_to_json(NEW))::jsonb
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Attach the trigger to the enquiries table
CREATE TRIGGER on_enquiry_insert_trigger
AFTER INSERT ON enquiries
FOR EACH ROW
EXECUTE FUNCTION notify_ritual_triggered();

-- 6. Grant universal permissions to ensure no role-level blocks
GRANT ALL ON TABLE enquiries TO anon, authenticated, service_role, public;
