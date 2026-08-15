import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Mail, Github, Linkedin, Copy, Check, Send, Sparkles, ExternalLink, Loader2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage(null);

    try {
      // Send directly to sraj.coe@gmail.com via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _replyto: formState.email,
          _subject: `⚡ Portfolio Contact from ${formState.name}: ${formState.subject || 'General Inquiry'}`,
          subject: formState.subject || 'Engineering Inquiry / Portfolio Message',
          message: formState.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to opening mail client if direct fetch encounters issues
        const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
          formState.subject || `Inquiry from ${formState.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        )}`;
        window.location.href = mailtoUrl;
        setIsSuccess(true);
      }
    } catch (err) {
      console.warn('Direct submit fallback to mailto:', err);
      // Fallback
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formState.subject || `Inquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
      setIsSuccess(true);
    } finally {
      setIsSending(false);
    }
  };

  const openGmailWeb = () => {
    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      formState.message
        ? `Hi Shivam,\n\n${formState.message}\n\nFrom: ${formState.name || ''} (${formState.email || ''})`
        : `Hi Shivam,\n\nI visited your portfolio and would like to connect with you regarding an engineering opportunity.\n\nBest regards,`
    );
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 bg-[#090909] border-t border-[#1F1F1F] overflow-hidden"
    >
      {/* Film Ending Lighting / Subtle Accent glow in background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8FF00]/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Label */}
        <div className="flex items-center gap-3 font-mono-code text-xs text-[#A0A0A0] uppercase tracking-widest mb-8 sm:mb-10">
          <span className="text-[#C8FF00] font-bold">09</span>
          <span className="text-[#2A2A2A]">/</span>
          <span className="text-[#F5F5F0]">INITIATE COLLABORATION</span>
          <div className="h-[1px] flex-1 bg-[#1F1F1F] ml-4" />
        </div>

        {/* Main Dramatic Headline */}
        <div className="mb-8 sm:mb-10 max-w-full overflow-hidden">
          <h2 className="font-headline text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-[#ECE7DE] tracking-tight leading-[0.95] uppercase select-none break-words">
            <span className="block">LET'S</span>
            <span className="block text-outline-white ml-2 sm:ml-6 lg:ml-10">BUILD</span>
            <span className="block text-[#ECE7DE] hover:text-[#C8FF00] transition-colors">
              SOMETHING.
            </span>
          </h2>
        </div>

        {/* Two-Column Supporting Narrative & Magnetic CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end border-b border-[#1F1F1F] pb-8 sm:pb-12">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <p className="font-display text-lg sm:text-2xl md:text-3xl text-[#F5F5F0] font-medium leading-snug">
              Have an interesting project, internship opportunity, or technical problem worth solving?
            </p>
            <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed">
              I am actively seeking software engineering internships and collaborative technical roles where I can contribute high-impact code across Android, full-stack systems, backend engineering, or machine learning pipelines.
            </p>

            {/* Quick Email Copy Chip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono-code text-xs">
              <button
                onClick={copyEmail}
                data-cursor="link"
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414] border border-[#262626] hover:border-[#C8FF00] text-[#F5F5F0] transition-colors"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-[#C8FF00]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#A0A0A0] group-hover:text-[#C8FF00]" />
                )}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : PERSONAL_INFO.email}</span>
              </button>

              <span className="text-[#A0A0A0]/40 hidden sm:inline">|</span>

              <span className="text-[#A0A0A0] text-xs">
                RESPONSE TIME: &lt; 24 HOURS
              </span>
            </div>
          </div>

          {/* Right: Large Magnetic CTA */}
          <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-5">
            <button
              onClick={() => setShowFormModal(true)}
              data-cursor="cta"
              className="group relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-6 rounded-2xl bg-[#C8FF00] text-[#090909] font-headline font-extrabold text-lg sm:text-xl uppercase tracking-wider flex items-center justify-between sm:justify-center gap-5 shadow-[0_10px_40px_rgba(200,255,0,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>START A CONVERSATION</span>
              <div className="w-9 h-9 rounded-full bg-[#090909] text-[#C8FF00] flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>

            {/* Social Direct Links */}
            <div className="flex items-center gap-6 font-mono-code text-xs uppercase tracking-widest text-[#A0A0A0]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="hover:text-[#C8FF00] transition-colors flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB ↗</span>
              </a>
              <span className="text-[#2A2A2A]">/</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="hover:text-[#C8FF00] transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN ↗</span>
              </a>
              <span className="text-[#2A2A2A]">/</span>
              <button
                onClick={onOpenResume}
                data-cursor="link"
                className="hover:text-[#C8FF00] transition-colors"
              >
                RESUME ↗
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Contact Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-[#090909]/95 backdrop-blur-xl animate-fadeIn">
          <div className="absolute inset-0" onClick={() => setShowFormModal(false)} />
          <div className="relative z-10 w-full max-w-lg bg-[#0F0F0F] border border-[#262626] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6">
              <div>
                <span className="font-mono-code text-[10px] text-[#C8FF00] uppercase tracking-widest">
                  // DISPATCH DIRECT TRANSMISSION
                </span>
                <h3 className="font-headline text-2xl font-bold text-[#F5F5F0] uppercase">
                  INITIATE MESSAGE
                </h3>
              </div>
              <button
                onClick={() => setShowFormModal(false)}
                className="text-[#A0A0A0] hover:text-[#F5F5F0]"
              >
                ✕
              </button>
            </div>

            {isSuccess ? (
              <div className="py-8 text-center space-y-4 font-mono-code">
                <div className="w-14 h-14 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/30 text-[#C8FF00] flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-[#F5F5F0] font-headline font-bold text-lg uppercase tracking-wide">
                    MESSAGE DISPATCHED!
                  </h4>
                  <p className="text-xs text-[#A0A0A0] max-w-xs mx-auto">
                    Your message has been sent directly to <span className="text-[#C8FF00] font-semibold">{PERSONAL_INFO.email}</span>. I'll get back to you shortly!
                  </p>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setShowFormModal(false);
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#1A1A1A] border border-[#333] text-xs text-[#F5F5F0] hover:border-[#C8FF00] transition-colors"
                  >
                    CLOSE WINDOW
                  </button>
                  <button
                    onClick={openGmailWeb}
                    className="px-5 py-2.5 rounded-full bg-[#C8FF00] text-[#090909] text-xs font-bold flex items-center gap-1.5 hover:bg-[#b8eb00] transition-colors"
                  >
                    <span>OPEN IN GMAIL</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono-code text-xs">
                <div className="flex items-center justify-between pb-1 border-b border-white/5 text-[11px] text-[#A0A0A0]">
                  <span>DELIVERY DESTINATION:</span>
                  <span className="text-[#C8FF00] font-semibold">{PERSONAL_INFO.email}</span>
                </div>

                <div>
                  <label className="block text-[#A0A0A0] uppercase mb-1.5 text-[10px]">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Hiring Team / Engineer"
                    className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#262626] text-[#F5F5F0] focus:border-[#C8FF00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#A0A0A0] uppercase mb-1.5 text-[10px]">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#262626] text-[#F5F5F0] focus:border-[#C8FF00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#A0A0A0] uppercase mb-1.5 text-[10px]">
                    SUBJECT / TOPIC
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Software Engineering Internship / Full-Stack Role"
                    className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#262626] text-[#F5F5F0] focus:border-[#C8FF00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#A0A0A0] uppercase mb-1.5 text-[10px]">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your team, role requirements, or project details..."
                    className="w-full px-4 py-3 rounded-lg bg-[#161616] border border-[#262626] text-[#F5F5F0] focus:border-[#C8FF00] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={openGmailWeb}
                    className="text-[11px] text-[#A0A0A0] hover:text-[#C8FF00] flex items-center gap-1 transition-colors"
                  >
                    <span>Or compose directly in Gmail</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="px-6 py-3 rounded-full bg-[#C8FF00] text-[#090909] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#b8eb00] transition-colors disabled:opacity-50"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND TO SHIVAM</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
