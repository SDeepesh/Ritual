-- 1. Enable pg_net extension
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 2. Create the notification function
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
$$ LANGUAGE plpgsql;

-- 3. Create the trigger
DROP TRIGGER IF EXISTS on_enquiry_insert_trigger ON enquiries;
CREATE TRIGGER on_enquiry_insert_trigger
AFTER INSERT ON enquiries
FOR EACH ROW
EXECUTE FUNCTION notify_ritual_triggered();
