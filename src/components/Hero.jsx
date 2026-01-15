import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import lionLogo from '../images/liontrack logo.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-safari-cream to-safari-yellow min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-safari-orange rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-safari-teal rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-safari-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-safari-navy leading-tight">
                Discover the
                <span className="text-safari-orange block">Wild Beauty</span>
                of Africa
              </h1>
              <p className="text-xl text-gray-700 mt-6 leading-relaxed">
                Embark on extraordinary safari adventures with LionTrack Safaris. 
                Experience authentic African wildlife, breathtaking landscapes, and 
                unforgettable moments that will transform your perspective on nature.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="bg-safari-orange rounded-full p-2">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-safari-navy">4.9/5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-safari-teal rounded-full p-2">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-safari-navy">500+</div>
                  <div className="text-sm text-gray-600">Happy Guests</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-safari-yellow rounded-full p-2">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-safari-navy">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-safari-orange text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-medium flex items-center justify-center space-x-2 group">
                <span>Explore Our Safaris</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-safari-navy text-safari-navy px-8 py-4 rounded-full hover:bg-safari-navy hover:text-white transition-all font-medium">
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right content - Hero Image with Logo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-safari-orange to-safari-teal rounded-3xl p-8 text-center text-white min-h-[500px] flex items-center justify-center relative overflow-hidden">
              {/* Logo watermark */}
              <div className="absolute top-8 right-8 w-16 h-16 opacity-20">
                <img 
                  src={lionLogo} 
                  alt="LionTrack Safaris" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Safari silhouettes */}
              <div className="absolute inset-0 flex items-end justify-center pb-16">
                <div className="flex space-x-4 opacity-30">
                  <div className="w-16 h-20 bg-black rounded-t-full"></div>
                  <div className="w-12 h-16 bg-black rounded-t-full"></div>
                  <div className="w-8 h-12 bg-black rounded-t-full"></div>
                </div>
              </div>
              
              {/* Sun */}
              <div className="absolute top-12 right-12 w-20 h-20 bg-safari-yellow rounded-full opacity-80"></div>
              
              {/* Acacia tree silhouette */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-32 h-40 bg-black opacity-40" style={{
                  clipPath: 'polygon(45% 100%, 55% 100%, 60% 80%, 70% 60%, 80% 40%, 70% 30%, 60% 25%, 50% 20%, 40% 25%, 30% 30%, 20% 40%, 30% 60%, 40% 80%)'
                }}></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Experience Authentic Safari</h3>
                <p className="opacity-90">Professional guides • Luxury accommodations • Unforgettable memories</p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-safari-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🦁</span>
                </div>
                <div>
                  <div className="font-bold text-safari-navy">Big 5 Safari</div>
                  <div className="text-sm text-gray-600">Lion, Leopard, Elephant, Buffalo, Rhino</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🌅</span>
                </div>
                <div>
                  <div className="font-bold text-safari-navy">Sunrise Game Drive</div>
                  <div className="text-sm text-gray-600">Best wildlife viewing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;