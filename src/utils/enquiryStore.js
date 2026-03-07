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
      const dbEntry = {
        type: enquiry.type,
        name: enquiry.name || null,
        email: enquiry.email || null,
        phone_number: enquiry.phoneNumber || null,
        message: enquiry.message || null,
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
  }
};
