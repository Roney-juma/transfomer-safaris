import React from 'react';

const Logo = ({ className = "w-12 h-12", showText = true }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo Image */}
      <div className={`${className} relative`}>
        <img 
          src="/logo.jpg" 
          alt="Transformer Safaris Logo" 
          className="w-full h-full object-contain rounded-full shadow-lg"
        />
      </div>
      
      {showText && (
        <div>
          <h1 className="text-2xl font-bold text-safari-navy">Transformer Safaris</h1>
          <p className="text-sm text-gray-600">Authenticity • Adventure • Excellence</p>
        </div>
      )}
    </div>
  );
};

export default Logo;