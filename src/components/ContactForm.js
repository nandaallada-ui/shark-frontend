import { useState } from 'react';
import { toast } from 'react-hot-toast';
import './ContactForm.css';

const endpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

function ContactForm() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!endpoint) {
      const error = 'Contact delivery is not configured yet.';
      setStatus(error);
      toast.error(error);
      return;
    }

    setSending(true);
    setStatus('Sending your message…');
    const toastId = toast.loading('Sending your message…');
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`);
      }

      form.reset();
      setStatus('Thank you! Your message was sent.');
      toast.success('Your message was sent.', { id: toastId });
    } catch (error) {
      setStatus('Your message could not be sent. Please try again later.');
      toast.error('Your message could not be sent.', { id: toastId });
      console.error('Contact form submission failed:', error);
    } finally {
      setSending(false);
    }
  }

  return (
    <form id="contactform" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required minLength="2" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        minLength="10"
      />

      <button className="arrow" type="submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send'}
      </button>
      <p className="form-result" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

export default ContactForm;
