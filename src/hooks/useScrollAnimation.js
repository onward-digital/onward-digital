import { useRef } from 'react';
import { useInView } from 'framer-motion';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px', ...options });
  return { ref, isInView };
}
