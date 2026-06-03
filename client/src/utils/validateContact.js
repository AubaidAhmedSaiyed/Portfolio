const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContactForm = ({ name, email, message }) => {
  const errors = {};

  if (!name?.trim()) errors.name = 'Name is required';
  else if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!email?.trim()) errors.email = 'Email is required';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'Enter a valid email address';

  if (!message?.trim()) errors.message = 'Message is required';
  else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters';

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
