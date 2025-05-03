'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -10, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

const transition = {
    duration: 0.8,
    delay: 0,
    ease: [0, 0.71, 0.2, 1.01],
}

export default function Transition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={transition}
      className='h-full w-full'
    >
      {children}
    </motion.main>
  );
}