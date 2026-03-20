import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [token, setToken] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!token) {
      alert("Please complete the captcha verification.");
      return;
    }

    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    // Replace this with your actual Web3Forms Access Key
    formData.append("access_key", "3daf161e-e2fc-404c-8a06-ad3d242442ef");
    // Append the Turnstile token
    formData.append("cf-turnstile-response", token);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Form submission error:", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Touch</span>
          </h2>
          <div className="w-20 h-1 mt-4 bg-gradient-to-r from-neon-blue to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,243,255,0.05)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>

            {/* Cloudflare Turnstile Captcha */}
            <div className="flex justify-center py-2">
              <Turnstile
                // This is a dummy testing key provided by Cloudflare that always passes.
                // Replace it with your actual Cloudflare Turnstile Site Key for production.
                siteKey="0x4AAAAAACtxVqJtqhbfZYZE"
                onSuccess={(token) => setToken(token)}
                onError={() => setToken('')}
                onExpire={() => setToken('')}
                options={{ theme: 'dark' }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || !token}
              className="w-full group relative flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-black bg-neon-blue rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {status === 'idle' && (
                <>
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </>
              )}
              {status === 'submitting' && (
                <span className="relative z-10 animate-pulse">Sending...</span>
              )}
              {status === 'success' && (
                <>
                  <span className="relative z-10">Message Sent!</span>
                  <CheckCircle className="w-4 h-4 relative z-10 text-green-800" />
                </>
              )}
              {status === 'error' && (
                <>
                  <span className="relative z-10">Failed to Send</span>
                  <AlertCircle className="w-4 h-4 relative z-10 text-red-800" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
