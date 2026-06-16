import clsx from 'clsx';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Reveal({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up',
  duration = 800,
  scale = false
}) {
  const [ref, isVisible] = useScrollReveal();

  const getInitialTransform = () => {
    if (scale) return 'scale(0.95)';
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(-40px)';
      case 'right': return 'translateX(40px)';
      default: return 'none';
    }
  };

  return (
    <div
      ref={ref}
      className={clsx('will-change-transform', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0) scale(1)' : getInitialTransform(),
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}