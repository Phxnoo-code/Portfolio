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
 * Contact Service Layer Abstraction
 * Decouples form UI logic from specific email delivery providers (EmailJS, Resend, API Endpoints).
 */
export async function sendContactMessage(payload: ContactPayload): Promise<ContactResponse> {
  // Client-side validation fallback
  if (!payload.name.trim() || !payload.email.trim() || !payload.message.trim()) {
    throw new Error('Please fill in all required fields.');
  }

  // Simulate network request latency (replace with fetch / emailjs in future)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Placeholder for EmailJS / Resend / Custom API integration:
  // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) });

  return {
    success: true,
    message: 'Thank you! Your message has been sent successfully.',
  };
}
