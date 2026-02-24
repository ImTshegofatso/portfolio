import { useState } from 'react';
import { useForm } from '@formspree/react';

const contactInfo = [
  { 
    icon: 'ri-mail-line', 
    title: 'Email', 
    value: 'TR.Nkosi@outlook.com',
    gradient: 'from-cyan-400 to-blue-600',
    glow: 'shadow-cyan-500/50'
  },
  { 
    icon: 'ri-map-pin-line', 
    title: 'Location', 
    value: 'Johannesburg, South Africa',
    gradient: 'from-purple-400 to-pink-600',
    glow: 'shadow-purple-500/50'
  },
  { 
    icon: 'ri-time-line', 
    title: 'Response', 
    value: '< 24 Hours',
    gradient: 'from-emerald-400 to-teal-600',
    glow: 'shadow-emerald-500/50'
  },
];

export function Contact() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-2xl relative z-10 text-center">
          <div className="p-12 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.5)]">
              <i className="ri-check-line text-white text-4xl"></i>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
            <p className="text-gray-300 mb-8">Thanks for reaching out. I'll get back to you at TR.Nkosi@outlook.com within 24 hours.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to build something extraordinary? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info - Futuristic Cards */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative p-1 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className="relative flex items-center gap-6 p-6 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10">
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className={`relative w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center shadow-lg ${item.glow} group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${item.icon} text-white text-2xl`}></i>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-1 font-medium">{item.title}</h4>
                      <p className="text-white text-lg font-semibold tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {item.value}
                      </p>
                    </div>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-arrow-right-line text-gray-400 text-xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                <span className="text-gray-300 text-sm uppercase tracking-wider">Available for work</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently accepting new projects and collaborations. Let's discuss how we can bring your vision to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
            
            <div className="relative space-y-6 p-8 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-gray-500 text-xs uppercase tracking-widest">New Message</span>
              </div>

              {/* Name Field */}
              <div className="relative group">
                <label htmlFor="name" className="block text-cyan-400 text-xs uppercase tracking-[0.2em] mb-2 font-medium">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label htmlFor="email" className="block text-purple-400 text-xs uppercase tracking-[0.2em] mb-2 font-medium">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-purple-400 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <label htmlFor="message" className="block text-emerald-400 text-xs uppercase tracking-[0.2em] mb-2 font-medium">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-emerald-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>

              {state.errors && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full mt-8 relative group overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[1px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="relative bg-black/80 rounded-lg p-4 transition-all duration-300 group-hover:bg-transparent">
                  <span className="relative flex items-center justify-center gap-3 text-white font-medium tracking-wider uppercase text-sm">
                    {state.submitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin"></i>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="ri-send-plane-fill group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                      </>
                    )}
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
