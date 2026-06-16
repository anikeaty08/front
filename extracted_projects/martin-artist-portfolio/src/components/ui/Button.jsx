import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const Button = ({ children, to, onClick, className, variant = 'primary', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center text-[10px] font-semibold tracking-widest uppercase py-4 px-10 transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-[#12c2e9] text-white hover:bg-[#00a8c6] shadow-[0_4px_14px_0_rgba(18,194,233,0.39)] hover:shadow-[0_6px_20px_rgba(18,194,233,0.23)] hover:-translate-y-0.5",
    outline: "border border-white/30 text-white hover:bg-white hover:text-[#e0281c]",
    dark: "bg-[#0a0404] text-white hover:bg-[#1a0505] border border-white/10"
  };

  const classes = clsx(baseClasses, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;