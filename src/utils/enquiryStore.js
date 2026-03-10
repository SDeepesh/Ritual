import { supabase } from './supabaseClient';
import { emailService } from '../services/emailService';

/**
 * Enhanced storage utility to manage enquiries with Supabase.
 */

export const enquiryStore = {
  // Get all enquiries (Real-time from Supabase)
  getAll: async () => {
    try {
      const { data, error } = await supabase
        .from('enquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Supabase fetch error:', error);
      // Fallback to local storage if supabase is not yet configured
      const localData = localStorage.getItem('ritual_enquiries');
      return localData ? JSON.parse(localData) : [];
    }
  },

  // Save a new enquiry to Supabase
  save: async (enquiry) => {
    const newEnquiry = {
      ...enquiry,
      status: 'new', // 'new', 'responded', 'archived'
      created_at: new Date().toISOString()
    };

    try {
      // 1. Map frontend fields to database columns (camelCase -> snake_case)
      // Handle different field naming conventions across forms:
      //   - PlanCalculator sends: { name, phoneNumber, planDays, amount }
      //   - Contact sends: { name, phone, email, message }
      //   - Corporate sends: { companyName, contactName, phone, email, teamSize, message }
      //   - DeliveryArea/Footer sends: { email }

      // Build a comprehensive name field for Corporate inquiries
      let displayName = enquiry.name || null;
      if (enquiry.companyName) {
        displayName = `${enquiry.companyName}${enquiry.contactName ? ' — ' + enquiry.contactName : ''}`;
      }

      // Build a comprehensive message field — append extra details if present
      let fullMessage = enquiry.message || null;
      if (enquiry.teamSize) {
        const teamInfo = `[Team Size: ${enquiry.teamSize}]`;
        fullMessage = fullMessage ? `${teamInfo}\n${fullMessage}` : teamInfo;
      }

      const dbEntry = {
        type: enquiry.type,
        name: displayName,
        email: enquiry.email || null,
        phone_number: enquiry.phoneNumber || enquiry.phone || null,
        message: fullMessage,
        plan_days: enquiry.planDays || null,
        amount: enquiry.amount || null,
        status: 'new'
      };

      // 2. Try to save to Supabase
      const { data, error } = await supabase
        .from('enquiries')
        .insert([dbEntry])
        .select();

      if (error) {
        console.error('Supabase Insert Error Details:', error);
        throw error;
      }

      return data[0];
    } catch (error) {
      console.warn('Supabase save error (falling back to local):', error);
      
      // Fallback: Save to LocalStorage if Supabase fails (e.g. no connection or keys)
      const localEnquiries = JSON.parse(localStorage.getItem('ritual_enquiries') || '[]');
      const localEnquiry = { ...newEnquiry, id: Date.now() };
      localEnquiries.unshift(localEnquiry);
      localStorage.setItem('ritual_enquiries', JSON.stringify(localEnquiries));

      // Still try to send email
      emailService.sendEnquiryNotification(localEnquiry).catch(err => {
        console.error('Failed to trigger email notification:', err);
      });

      return localEnquiry;
    }
  },

  // Update enquiry status in Supabase
  updateStatus: async (id, status) => {
    try {
      const { error } = await supabase
        .from('enquiries')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Supabase update error:', error);
      // Local fallback
      const localEnquiries = JSON.parse(localStorage.getItem('ritual_enquiries') || '[]');
      const updated = localEnquiries.map(e => e.id === id ? { ...e, status } : e);
      localStorage.setItem('ritual_enquiries', JSON.stringify(updated));
    }
  },

  // Delete an enquiry from Supabase
  delete: async (id) => {
    try {
      const { error } = await supabase
        .from('enquiries')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Supabase delete error:', error);
      // Local fallback
      const localEnquiries = JSON.parse(localStorage.getItem('ritual_enquiries') || '[]');
      const filtered = localEnquiries.filter(e => e.id !== id);
      localStorage.setItem('ritual_enquiries', JSON.stringify(filtered));
    }
  },

  // ─── Ritual Signups (ritual_signups table) ───────────────────────────────

  // Save a new ritual signup to the dedicated ritual_signups table
  saveRitualSignup: async (data) => {
    const dbEntry = {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      pincode: data.pincode || null,
      address: data.address || null,
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      plan_days: data.planDays || null,
      amount: data.amount || null,
      dietary_preference: data.dietaryPreference || null,
      goals: data.goals || null,
      message: data.message || null,
      status: 'new'
    };

    try {
      const { data: result, error } = await supabase
        .from('ritual_signups')
        .insert([dbEntry])
        .select();

      if (error) throw error;

      return result[0];
    } catch (error) {
      console.error('Supabase ritual_signups insert error:', error);
      // Fallback to localStorage
      const local = JSON.parse(localStorage.getItem('ritual_signups') || '[]');
      const localEntry = { ...dbEntry, id: Date.now(), created_at: new Date().toISOString() };
      local.unshift(localEntry);
      localStorage.setItem('ritual_signups', JSON.stringify(local));

      // Trigger Admin Email Notification (even on fallback) via Frontend service as a last resort
      const emailPayload = {
        ...dbEntry,
        type: '🌿 New Ritual Signup (Fallback)',
        timestamp: new Date().toISOString()
      };
      emailService.sendEnquiryNotification(emailPayload).catch(err => {
        console.error('Failed to trigger fallback email notification:', err);
      });

      return localEntry;
    }
  },

  // Get all ritual signups
  getAllRitualSignups: async () => {
    try {
      const { data, error } = await supabase
        .from('ritual_signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Supabase ritual_signups fetch error:', error);
      const localData = localStorage.getItem('ritual_signups');
      return localData ? JSON.parse(localData) : [];
    }
  },

  // Update ritual signup status
  updateRitualSignupStatus: async (id, status) => {
    try {
      const { error } = await supabase
        .from('ritual_signups')
        .update({ status })
        .eq('id', id);
      if (error) throw error;
    } catch (error) {
      console.error('Supabase ritual_signup status update error:', error);
    }
  },

  // Delete a ritual signup
  deleteRitualSignup: async (id) => {
    try {
      const { error } = await supabase
        .from('ritual_signups')
        .delete()
        .eq('id', id);
      if (error) throw error;
    } catch (error) {
      console.error('Supabase ritual_signup delete error:', error);
    }
  }
};
