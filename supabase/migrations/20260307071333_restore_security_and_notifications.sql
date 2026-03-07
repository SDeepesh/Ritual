-- 1. Re-enable RLS securely
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- 2. Clean up any stale policies first
DROP POLICY IF EXISTS "Public can submit enquiries" ON enquiries;
DROP POLICY IF EXISTS "Admins can manage enquiries" ON enquiries;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON enquiries;
DROP POLICY IF EXISTS "Enable all access for authenticated users" ON enquiries;

-- 3. Create the production-ready policies
-- Allow the general public (anon) to only INSERT new leads
CREATE POLICY "Production: Public Insert"
ON public.enquiries
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow admins (authenticated) to DO EVERYTHING
CREATE POLICY "Production: Admin All Access"
ON public.enquiries
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- 4. Enable and Configure Notifications (Trigger)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create/Replace the trigger function
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

-- Re-attach the trigger
DROP TRIGGER IF EXISTS on_enquiry_insert_trigger ON enquiries;
CREATE TRIGGER on_enquiry_insert_trigger
AFTER INSERT ON enquiries
FOR EACH ROW
EXECUTE FUNCTION notify_ritual_triggered();
