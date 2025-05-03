import { motion, AnimatePresence, Variants } from 'framer-motion';

const transition = { type: 'spring', stiffness: 300, damping: 30 };

interface AnimatedItemProps {
  children: React.ReactNode;
  delay?: number;
}

// 공통 애니메이션 설정
const variants: Variants = {
  hidden: { opacity: 0, y: -20 },
  enter:  { opacity: 1, y: 0   },
  exit:   { opacity: 0, y: -20 },
};

// 재사용 가능한 애니메이트 컴포넌트
export function AnimatedItem({ children, delay = 0 }: AnimatedItemProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ ...transition, delay }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
