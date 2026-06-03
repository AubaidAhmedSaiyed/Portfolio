import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import useContactForm from '../hooks/useContactForm';
import { siteMeta } from '../data/siteData';
import { validateContactForm } from '../utils/validateContact';
import SpotlightCard from '../components/SpotlightCard';
import SectionDivider from '../components/SectionDivider';
import { fadeUpView } from '../animations/variants';

const socialLinks = [
  { label: 'GitHub', href: siteMeta.github },
  { label: 'LinkedIn', href: siteMeta.linkedin },
  { label: 'Twitter', href: siteMeta.twitter },
];

const Contact = () => {
  const { status, submit } = useContactForm();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    setForm((value) => ({ ...value, [field]: event.target.value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { valid, errors: validationErrors } = validateContactForm(form);
    if (!valid) {
      setErrors(validationErrors);
      toast.error('Please fix the highlighted fields.');
      return;
    }
    try {
      await submit(form);
      toast.success('Message sent. I will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section id="contact" className="section-panel">
      <SectionDivider />
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
        <motion.div {...fadeUpView}>
          <p className="section-heading">Contact</p>
          <h2 className="section-title">Say hello.</h2>
          <p className="prose-muted mt-4 max-w-md text-[15px] leading-snug">
            Open to internships, collaborations, and technical conversations.
          </p>
          <p className="mt-6 text-sm text-zinc-500">Email</p>
          <a
            href={`mailto:${siteMeta.email}`}
            className="link-underline text-sm text-zinc-200 hover:text-white"
          >
            {siteMeta.email}
          </a>
          <div className="mt-5 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-sm text-zinc-400 hover:text-brand-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUpView} transition={{ ...fadeUpView.transition, delay: 0.06 }}>
          <SpotlightCard className="rounded-xl border border-white/[0.07] bg-matte-elevated p-5 md:p-6">
            <form onSubmit={handleSubmit} noValidate className="grid gap-3">
              {[
                { id: 'name', label: 'Name', type: 'text', required: true },
                { id: 'email', label: 'Email', type: 'email', required: true },
                { id: 'subject', label: 'Subject', type: 'text', required: false },
              ].map((field) => (
                <label key={field.id} className="block space-y-1 text-xs text-zinc-500">
                  <span>{field.label}</span>
                  <input
                    type={field.type}
                    required={field.required}
                    value={form[field.id]}
                    onChange={handleChange(field.id)}
                    className={`input-field ${errors[field.id] ? 'input-error' : ''}`}
                  />
                  {errors[field.id] ? (
                    <span className="text-[11px] text-red-400">{errors[field.id]}</span>
                  ) : null}
                </label>
              ))}
              <label className="block space-y-1 text-xs text-zinc-500">
                <span>Message</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange('message')}
                  className={`input-field resize-y ${errors.message ? 'input-error' : ''}`}
                />
                {errors.message ? (
                  <span className="text-[11px] text-red-400">{errors.message}</span>
                ) : null}
              </label>
              <button type="submit" disabled={status.loading} className="btn-primary mt-1 w-fit">
                {status.loading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
