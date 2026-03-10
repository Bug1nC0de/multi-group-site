import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const LuxCard = ({ children, index = 0, className = "", to, ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    style: {
      rotateX,
      rotateY,
      transformStyle: "preserve-3d",
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true },
    className: `lux-card ${className}`,
    ...props
  };

  const content = (
    <div 
      style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
      className="h-full w-full"
    >
      {children}
    </div>
  );

  if (to) {
    return (
      <MotionLink to={to} {...sharedProps}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.div {...sharedProps}>
      {content}
    </motion.div>
  );
};

export default LuxCard;
