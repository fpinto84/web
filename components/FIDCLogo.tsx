import React from 'react';

interface FIDCLogoProps {
  className?: string;
}

const FIDCLogo: React.FC<FIDCLogoProps> = ({ className = '' }) => (
    <div className={`text-2xl md:text-3xl font-black tracking-widest holographic-text transition-all duration-300 ${className}`}>
      FIDC
    </div>
);

export default FIDCLogo;
