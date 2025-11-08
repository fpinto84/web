import React from 'react';

interface DanceStyleIconProps {
  iconId: string;
}

const DanceStyleIcon: React.FC<DanceStyleIconProps> = ({ iconId }) => {
  const renderIcon = () => {
    switch (iconId) {
      case 'salsa':
        return (
          <div className="relative w-32 h-32 animate-salsa-spin group-hover:[animation-duration:4s]">
            <div className="absolute w-20 h-32 border-2 border-primary-accent rounded-full top-0 left-1/2 -translate-x-1/2 opacity-80 transform-gpu" style={{ transform: 'rotate(30deg)' }}></div>
            <div className="absolute w-20 h-32 border-2 border-neutral rounded-full top-0 left-1/2 -translate-x-1/2 opacity-60 transform-gpu" style={{ transform: 'rotate(-30deg)' }}></div>
          </div>
        );
      case 'bachata':
        return (
          <div className="relative w-24 h-32 animate-bachata-wave group-hover:[animation-duration:2.5s]">
            <div className="absolute w-12 h-full bg-gradient-to-b from-primary-accent to-transparent rounded-full top-0 left-4 opacity-90 transform-gpu" style={{ animation: 'bachata-wave 5s ease-in-out infinite reverse' }}></div>
            <div className="absolute w-12 h-full bg-gradient-to-b from-neutral/80 to-transparent rounded-full top-0 right-4 opacity-90 transform-gpu"></div>
          </div>
        );
      case 'contemporary':
        return (
          <div className="relative w-40 h-20 animate-contemporary-flow group-hover:[animation-duration:6s]">
            <div className="w-full h-full border-b-4 border-primary-accent rounded-[100%] opacity-80 transform-gpu"></div>
          </div>
        );
      case 'hiphop':
        return (
            <div className="relative w-24 h-24 animate-hiphop-bounce group-hover:[animation-duration:0.8s]">
                <div className="absolute w-full h-full bg-primary-accent rounded-lg transform-gpu -rotate-12"></div>
                <div className="absolute w-full h-full border-2 border-neutral rounded-lg transform-gpu rotate-6"></div>
            </div>
        );
      case 'afrohouse':
        return (
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-2 border-primary-accent rounded-full animate-afro-pulse group-hover:[animation-duration:1s]"></div>
            <div className="absolute inset-3 border-2 border-neutral rounded-full animate-afro-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        );
      case 'flamenco':
        return (
            <div className="relative w-32 h-16 animate-flamenco-fan group-hover:[animation-duration:2.5s] origin-bottom-left">
                <div className="absolute w-full h-32 bg-gradient-to-r from-primary-dark via-primary-accent to-primary-dark rounded-tr-full origin-bottom-left" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
            </div>
        );
      default:
        return null;
    }
  };

  return <div className="absolute transition-opacity duration-500 opacity-30 group-hover:opacity-100">{renderIcon()}</div>;
};

export default DanceStyleIcon;
