'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      {/* Logo with glow pulse */}
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: '72px',
          height: '72px',
          background: 'linear-gradient(135deg, #22d3ee, #818cf8)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '2rem',
          color: '#0a0a0b',
          marginBottom: '2rem',
        }}
      >
        <motion.span
          animate={{
            textShadow: [
              '0 0 0px rgba(34,211,238,0)',
              '0 0 30px rgba(34,211,238,0.8)',
              '0 0 0px rgba(34,211,238,0)',
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          O
        </motion.span>
      </motion.div>

      {/* Progress bar */}
      <div
        style={{
          width: '200px',
          height: '2px',
          background: 'rgba(255,255,255,0.08)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
          style={{ height: '100%', background: '#22d3ee', borderRadius: '1px' }}
        />
      </div>
    </motion.div>
  );
}
