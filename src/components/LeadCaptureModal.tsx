import { motion, AnimatePresence } from 'motion/react';
import { X, Building2, User, Phone, Mail, FileText, Send } from 'lucide-react';
import { useState } from 'react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose, onSuccess }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Lead captured:', formData);
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brown-900/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-md bg-cream shadow-2xl border border-brown-900/10"
          >
            <div className="bg-brown-900 p-8 text-cream text-center relative">
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-cream/10 text-cream/70 hover:text-cream"
              >
                <X size={16} />
              </button>
              <FileText size={32} className="mx-auto mb-4 text-brown-300" strokeWidth={1} />
              <h3 className="text-2xl font-serif font-light tracking-tight">
                Download Resume
              </h3>
              <p className="mt-2 text-cream/70 text-sm font-serif">
                Please provide your details to unlock the resume download.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brown-600 flex items-center gap-2">
                  <User size={12} /> Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-cream-light border-b border-brown-900/20 px-0 py-2 focus:border-brown-600 focus:outline-none transition-colors font-serif text-lg placeholder:text-brown-900/30"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brown-600 flex items-center gap-2">
                    <Building2 size={12} /> Company Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Tech Corp"
                    className="w-full bg-cream-light border-b border-brown-900/20 px-0 py-2 focus:border-brown-600 focus:outline-none transition-colors font-serif text-lg placeholder:text-brown-900/30"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brown-600 flex items-center gap-2">
                    <Phone size={12} /> Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-cream-light border-b border-brown-900/20 px-0 py-2 focus:border-brown-600 focus:outline-none transition-colors font-serif text-lg placeholder:text-brown-900/30"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brown-600 flex items-center gap-2">
                  <Mail size={12} /> Work Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-cream-light border-b border-brown-900/20 px-0 py-2 focus:border-brown-600 focus:outline-none transition-colors font-serif text-lg placeholder:text-brown-900/30"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-brown-600 flex items-center gap-2">
                  What are you looking for?
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="I'm interested in discussing a project/role..."
                  className="w-full bg-cream-light border-b border-brown-900/20 px-0 py-2 focus:border-brown-600 focus:outline-none transition-colors font-serif text-lg placeholder:text-brown-900/30 resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full flex items-center justify-center gap-3 rounded-full bg-brown-900 px-6 py-4 text-xs font-semibold tracking-widest uppercase text-cream transition-all hover:bg-brown-800 disabled:opacity-50 mt-8"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="h-4 w-4 border border-cream/30 border-t-cream rounded-full"
                  />
                ) : (
                  <>
                    <Send size={14} />
                    Unlock Resume
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
