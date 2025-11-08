import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Linkedin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-viridian-600 via-viridian-700 to-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl text-white/90">
            Ready to transform your tech teams? Let's start the conversation
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">Let's Connect</h2>
              <p className="text-base md:text-lg text-neutral-600 mb-12 max-w-xl">
                Whether you're looking to build your tech team or advance your career in technology, 
                we're here to help. Reach out through any of these channels.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-brand-purple/10 rounded-lg">
                    <Mail className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600">enquiries@codeverse.co.uk</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-brand-teal/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                    <p className="text-neutral-600">
                      London Head Office<br />
                      Aldgate Tower,<br />
                      2 Leman St,<br />
                      London,<br />
                      E1 8FA,<br />
                      UK
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-3">Connect With Us</h3>
                  <a 
                    href="https://www.linkedin.com/school/codeuntappedpartners/about/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Follow us on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                    placeholder="+44"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-neutral-900 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    name="interest"
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="htd">Hire-Train-Deploy</option>
                    <option value="techshift">TechShift Programme</option>
                    <option value="delivery">Outcome-Based Delivery</option>
                    <option value="experienced">Experienced Hire</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple resize-none transition-all"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-semibold">Your inquiry has been submitted!</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-viridian-600 to-teal-600 px-8 py-5 text-black text-lg font-bold shadow-xl hover:shadow-2xl hover:from-viridian-700 hover:to-teal-700 transition-all duration-300"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;