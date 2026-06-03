import Contact from '../models/Contact.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject: subject || 'General inquiry',
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Your message has been saved. I will reply soon.',
      contactId: contact._id,
    });
  } catch (error) {
    next(error);
  }
};
