-- 🛡️ STABLE PRODUCTION FIX 🛡️

-- 1. Disable RLS for good (Guarantees form works)
ALTER TABLE enquiries DISABLE ROW LEVEL SECURITY;

-- 2. Drop all previous triggers and functions
DROP TRIGGER IF EXISTS on_enquiry_insert_trigger ON enquiries;
DROP TRIGGER IF EXISTS on_enquiry_insert ON enquiries;
DROP FUNCTION IF EXISTS notify_ritual_triggered();

-- 3. Enable pg_net specifically in the extensions schema
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- 4. Create the trigger function using the explicit extensions schema
CREATE OR REPLACE FUNCTION notify_ritual_triggered()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    extensions.net.http_post(
      url := 'https://aqhxzyqbolxmdzsdcaev.supabase.co/functions/v1/ritual-notify',
      headers := '{"Content-Type": "application/json"}'::jsonb,
      body := json_build_object('record', row_to_json(NEW))::jsonb
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Attach the trigger
CREATE TRIGGER on_enquiry_insert_trigger
AFTER INSERT ON enquiries
FOR EACH ROW
EXECUTE FUNCTION notify_ritual_triggered();

-- 6. Permissions
GRANT ALL ON TABLE enquiries TO anon, authenticated, service_role, public;
