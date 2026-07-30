import emailjs from '@emailjs/browser';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

/**
 * Contact Service Layer Abstraction using EmailJS
 * Sends contact inquiries directly via EmailJS browser API.
 */
export async function sendContactMessage(payload: ContactPayload): Promise<ContactResponse> {
  // Client-side validation fallback
  if (!payload.name.trim() || !payload.email.trim() || !payload.message.trim()) {
    throw new Error('Please fill in all required fields.');
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ln4j30u';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_v0fsnlm';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
    throw new Error('EmailJS service configuration is missing. Please verify VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment setup.');
  }

  const templateParams = {
    from_name: payload.name,
    name: payload.name,
    from_email: payload.email,
    email: payload.email,
    reply_to: payload.email,
    subject: payload.subject || 'Portfolio Contact Inquiry',
    message: payload.message,
  };

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    if (result.status === 200) {
      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      };
    } else {
      throw new Error(`Failed to send message (Status ${result.status}).`);
    }
  } catch (error: any) {
    const errorMessage = error?.text || error?.message || 'Failed to send email message. Please try again later.';
    throw new Error(errorMessage);
  }
}
