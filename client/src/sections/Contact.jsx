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
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="layout-wide max-w-2xl">
        <div className="grid gap-10">
          <motion.div {...fadeUpView}>
            <p className="section-heading">Contact</p>
            <h2 className="section-title">Say hello.</h2>
              <p className="text-zinc-600 mt-4 text-[15px] leading-relaxed">
              Open to internships, collaborations, and technical conversations. Use the form below to share your idea, request, or project opportunity.
            </p>
          </motion.div>

          <motion.div {...fadeUpView} transition={{ ...fadeUpView.transition, delay: 0.06 }}>
            <SpotlightCard className="rounded-2xl border border-brand/15 bg-matte-elevated p-6 shadow-sm">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted">Let’s connect</p>
                  <p className="text-[15px] leading-relaxed text-zinc-600">
                    Prefer to send a direct email or explore my work? I’m available for new projects, collaboration, and technical discussions.
                  </p>
                  <div className="rounded-2xl border border-brand/10 bg-matte-card p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Email</p>
                    <a href={`mailto:${siteMeta.email}`} className="link-underline text-sm font-bold text-brand-light">
                      {siteMeta.email}
                    </a>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline text-sm font-semibold text-zinc-600 hover:text-brand-light"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="grid gap-3">
                  {[
                    { id: 'name', label: 'Name', type: 'text', required: true },
                    { id: 'email', label: 'Email', type: 'email', required: true },
                    { id: 'subject', label: 'Subject', type: 'text', required: false },
                  ].map((field) => (
                    <label key={field.id} className="block space-y-1 text-xs font-semibold uppercase tracking-wider text-brand">
                      <span>{field.label}</span>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.id]}
                        onChange={handleChange(field.id)}
                        className={`input-field ${errors[field.id] ? 'input-error' : ''}`}
                      />
                      {errors[field.id] ? (
                        <span className="text-[11px] font-normal text-red-500 normal-case tracking-normal">{errors[field.id]}</span>
                      ) : null}
                    </label>
                  ))}
                  <label className="block space-y-1 text-xs font-semibold uppercase tracking-wider text-brand">
                    <span>Message</span>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange('message')}
                      className={`input-field resize-y ${errors.message ? 'input-error' : ''}`}
                    />
                    {errors.message ? (
                      <span className="text-[11px] font-normal text-red-500 normal-case tracking-normal">{errors.message}</span>
                    ) : null}
                  </label>
                  <button type="submit" disabled={status.loading} className="btn-primary mt-1 w-fit uppercase tracking-wider font-bold text-xs py-2.5 px-6">
                    {status.loading ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
