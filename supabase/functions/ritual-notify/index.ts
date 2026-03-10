import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

/**
 * Supabase Edge Function: ritual-notify
 * Triggers on new 'enquiries' entries and sends an email via EmailJS or Resend.
 * For this implementation, we use a simple POST request to a notification service.
 */

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const payload = await req.json()
    const { record } = payload
    console.log('Received record:', record)

    // Detect if this is a Ritual Signup (which doesn't have a 'type' column)
    // or a standard Enquiry.
    const isSignup = !record.type && record.address;
    const type = record.type || (isSignup ? '🌿 Ritual Signup' : 'New Web Inquiry');

    // Format the email content
    const emailHtml = `
      <h1>${type}</h1>
      <p><strong>Name:</strong> ${record.name || 'N/A'}</p>
      <p><strong>Email:</strong> ${record.email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${record.phone || record.phone_number || 'N/A'}</p>
      ${record.pincode ? `<p><strong>Pincode:</strong> ${record.pincode}</p>` : ''}
      ${record.address ? `<p><strong>Address:</strong> ${record.address}</p>` : ''}
      <p><strong>Plan:</strong> ${record.plan_days ? record.plan_days + ' Days' : 'N/A'}</p>
      ${record.amount ? `<p><strong>Amount:</strong> ₹${record.amount}</p>` : ''}
      ${record.dietary_preference ? `<p><strong>Dietary Pref:</strong> ${record.dietary_preference}</p>` : ''}
      ${record.goals ? `<p><strong>Goals:</strong> ${record.goals}</p>` : ''}
      <p><strong>Message/Notes:</strong> ${record.message || 'No message provided'}</p>
      <hr />
      <p><small>Sent from your Ritual Supabase Backend</small></p>
    `

    // Option A: Using Resend (Recommended for Supabase)
    if (RESEND_API_KEY) {
      console.log('Using Resend with API Key...');
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Ritual Admin <onboarding@resend.dev>',
          to: ['deepeshsrs@gmail.com'],
          subject: `${type}: ${record.name || 'User'}`,
          html: emailHtml,
        }),
      })
      
      const resData = await res.json()
      console.log('Resend Response Status:', res.status);
      console.log('Resend Response Data:', resData);
      
      return new Response(JSON.stringify(resData), { 
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    console.warn('RESEND_API_KEY is not configured in Supabase secrets.');
    return new Response(JSON.stringify({ error: "No email service configured" }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
})
