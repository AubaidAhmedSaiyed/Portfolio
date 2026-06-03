const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  if (!name?.trim()) errors.push('Name is required');
  else if (name.trim().length < 2) errors.push('Name must be at least 2 characters');

  if (!email?.trim()) errors.push('Email is required');
  else if (!EMAIL_RE.test(email.trim())) errors.push('A valid email address is required');

  if (!message?.trim()) errors.push('Message is required');
  else if (message.trim().length < 10) errors.push('Message must be at least 10 characters');

  if (errors.length) {
    res.status(400);
    return next(new Error(errors.join('. ')));
  }

  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim();
  if (req.body.subject) req.body.subject = req.body.subject.trim();

  return next();
};
