import emailjs from '@emailjs/browser';

/**
 * Service to handle email notifications via EmailJS.
 * Documentation: https://www.emailjs.com/docs/
 */

// These would ideally be in .env files
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID'; 
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

export const emailService = {
  /**
   * Sends a notification email to deepeshsrs@gmail.com
   * @param {Object} data - The enquiry data to send
   */
  sendEnquiryNotification: async (data) => {
    // If keys are not set, just log and return (prevents errors during setup)
    if (SERVICE_ID === 'YOUR_EMAILJS_SERVICE_ID') {
      console.warn('EmailJS: Service not configured. Set your keys in services/emailService.js');
      return;
    }

    try {
      const templateParams = {
        to_email: 'deepeshsrs@gmail.com',
        from_name: data.name || 'Ritual Guest',
        type: data.type || 'General Enquiry',
        message: data.message || 'No message provided',
        email: data.email || 'N/A',
        phone: data.phoneNumber || 'N/A',
        plan: data.planDays ? `${data.planDays} Days` : 'N/A',
        timestamp: new Date(data.timestamp).toLocaleString(),
        details: JSON.stringify(data, null, 2)
      };

      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS Success:', response.status, response.text);
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  }
};
