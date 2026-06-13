import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, MessageCircle, X } from 'lucide-react';

// Replace this with your actual institution's WhatsApp number (include country code, omit '+' or spaces)
const WHATSAPP_NUMBER = "919876543210"; 

const supportOptions = [
  {
    id: 'admission',
    title: 'Admissions Query',
    subtitle: 'Ask about eligibility & fees',
    message: 'Hi! I would like to know more about the admission process, eligibility, and fee structure.',
  },
  {
    id: 'programs',
    title: 'Program Details',
    subtitle: 'Get course information',
    message: 'Hi! Can you share more details about the programs and courses you offer?',
  },
  {
    id: 'placements',
    title: 'Placements',
    subtitle: 'Career and recruiter info',
    message: 'Hi! I have a question regarding placements and career support.',
  },
  {
    id: 'general',
    title: 'General Support',
    subtitle: 'Any other questions',
    message: 'Hi! I need some general assistance.',
  },
];

// Authentic WhatsApp SVG Icon
const WhatsAppIcon = ({ size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the menu if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleStartChat = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    // FIX: Anchored to bottom-left instead of bottom-right
    <div 
      ref={menuRef}
      style={{ 
        position: 'fixed', 
        bottom: '2rem', 
        left: '1.5rem', 
        zIndex: 50, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'flex-start', 
        gap: '1rem' 
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ 
              width: 'calc(100vw - 3rem)', 
              maxWidth: '320px', 
              backgroundColor: '#fff', 
              borderRadius: '1rem', 
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* WhatsApp Header */}
            <header 
              style={{ 
                backgroundColor: '#25D366', 
                color: '#fff', 
                padding: '1.25rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <WhatsAppIcon size={28} />
                <div>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#fff' }}>Start a Chat</h3>
                  <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.9 }}>Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', padding: 0, display: 'flex' }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </header>

            {/* Menu Options Body */}
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#666', fontWeight: 500 }}>
                How can we help you today?
              </p>
              
              {supportOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleStartChat(option.message)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.875rem',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #eee',
                    borderRadius: '0.75rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = '#25D366'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = '#eee'}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <strong style={{ fontSize: '0.9rem', color: '#333' }}>{option.title}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#777' }}>{option.subtitle}</span>
                  </div>
                  <ChevronRight size={18} color="#aaa" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          backgroundColor: '#25D366', 
          color: '#fff',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          cursor: 'pointer', 
          border: 'none',
          boxShadow: '0 6px 16px rgba(37, 211, 102, 0.4)'
        }}
        aria-label="Open WhatsApp support"
      >
        {isOpen ? <X size={28} /> : <WhatsAppIcon size={32} />}
      </motion.button>
    </div>
  );
}