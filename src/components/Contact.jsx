import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      try {
        // Send email via FormSubmit API
        await fetch("https://formsubmit.co/ajax/jrsaturno66@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                _subject: `New Portfolio Contact from ${formData.name}`
            })
        });

        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error("Email sending failed, falling back to mailto:", error);
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:jrsaturno66@gmail.com?subject=${subject}&body=${body}`;
      }
    }
  };

  return (
    <section id="contact" className="w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-20 md:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-[2px] mb-3">LET'S CONNECT</h2>
        <p className="gradient-text font-semibold text-lg lg:text-xl">Have an idea? Let's build it together.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 -left-[20%] w-[40%] h-[50%] bg-accent-primary rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 -right-[10%] w-[30%] h-[40%] bg-accent-secondary rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

        {/* Contact Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-6 w-full relative z-10">
          <div className="glass-card p-8 rounded-2xl glass-strong flex items-start gap-6 group hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-accentPrimary shadow-lg group-hover:bg-accent-gradient group-hover:btn-adaptive-text transition-all duration-300 shrink-0">
              <FaEnvelope size={24} />
            </div>
            <div>
              <p className="text-sm text-textSecondary font-semibold uppercase tracking-[1px] mb-1">Chat to us</p>
              <p className="text-lg font-bold text-textPrimary mb-2">Our friendly team is here to help.</p>
              <a href="jrsaturno66@gmail.com" className="text-accentPrimary font-medium hover:underline hover:text-accentSecondary transition-colors">
                jrsaturno66@gmail.com
              </a>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl glass-strong flex items-start gap-6 group hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-accentPrimary shadow-lg group-hover:bg-accent-gradient group-hover:btn-adaptive-text transition-all duration-300 shrink-0">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <p className="text-sm text-textSecondary font-semibold uppercase tracking-[1px] mb-1">Visit us</p>
              <p className="text-lg font-bold text-textPrimary mb-2">Come say hello at our office HQ.</p>
              <p className="text-accentPrimary font-medium">Muñoz, Nueva Ecija, Philippines</p>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl glass-strong flex items-start gap-6 group hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-accentPrimary shadow-lg group-hover:bg-accent-gradient group-hover:btn-adaptive-text transition-all duration-300 shrink-0">
              <FaPhoneAlt size={24} />
            </div>
            <div>
              <p className="text-sm text-textSecondary font-semibold uppercase tracking-[1px] mb-1">Call us</p>
              <p className="text-lg font-bold text-textPrimary mb-2">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+639610308393" className="text-accentPrimary font-medium hover:underline hover:text-accentSecondary transition-colors">
                +63 961 030 8393
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 w-full relative z-10">
          <div className="glass-strong p-8 sm:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-glassBorderHover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent-gradient rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                  <FaPaperPlane size={36} className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)] ml-2" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-textPrimary">Message Set for Takeoff!</h3>
                <p className="text-lg text-textSecondary max-w-md mx-auto leading-relaxed">
                  Your message has been sent successfully! We look forward to reading your message and will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wide text-textSecondary pl-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jay-ar S. De Guzman"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-glassBg border border-glassBorder rounded-xl px-5 py-4 text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all duration-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold tracking-wide text-textSecondary pl-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jay-ar.deguzman@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-glassBg border border-glassBorder rounded-xl px-5 py-4 text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-wide text-textSecondary pl-1">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project or idea..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-glassBg border border-glassBorder rounded-xl px-5 py-4 text-textPrimary placeholder:text-textSecondary/50 focus:outline-none focus:border-accentPrimary focus:ring-1 focus:ring-accentPrimary transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="group relative w-full overflow-hidden rounded-xl p-[1px] mt-2">
                  <span className="absolute inset-0 bg-accent-gradient rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <div className="relative glass-strong px-8 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group-hover:bg-transparent">
                    <span className="text-lg font-bold text-textPrimary group-hover:btn-adaptive-text group-hover:scale-105 transition-transform duration-300">Send Message</span>
                    <FaPaperPlane className="text-accentPrimary group-hover:btn-adaptive-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
