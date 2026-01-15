import React from 'react';
import { Shield, Heart, Users, Award, Leaf, Camera } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Experiences",
      description: "We provide genuine, immersive safari experiences that connect you with Africa's true spirit."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First", 
      description: "Your safety is our priority. We maintain the highest safety standards in all our operations."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Conservation Focus",
      description: "We're committed to wildlife conservation and sustainable tourism practices."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Guides",
      description: "Our experienced local guides share deep knowledge of wildlife, culture, and conservation."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Happy Travelers" },
    { number: "50+", label: "Wildlife Species Spotted" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="py-20 bg-safari-cream">
      <div className="container mx-auto px-4">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-safari-navy mb-6">
              About LionTrack Safaris
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded with a passion for showcasing Africa's incredible wildlife and landscapes, 
              LionTrack Safaris has been creating unforgettable safari experiences for over 15 years. 
              We believe that every safari should be transformative – changing how you see the world 
              and your place within it.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our team of experienced local guides, conservationists, and hospitality professionals 
              work together to ensure that every moment of your safari exceeds expectations while 
              contributing to wildlife conservation and local communities.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-safari-navy mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide authentic, sustainable safari experiences that inspire conservation 
                awareness while supporting local communities and preserving Africa's natural heritage 
                for future generations.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] shadow-2xl">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop&crop=center')"
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-safari-teal/80 to-safari-orange/80"></div>
              
              {/* Background elements */}
              <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white border-opacity-30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 border-2 border-white border-opacity-30 rounded-full"></div>
              
              <div className="relative z-10 text-center p-8 h-full flex flex-col justify-center text-white">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-4">Transforming Lives Through Travel</h3>
                <p className="text-lg opacity-90 mb-6">
                  Every safari with us is more than a journey – it's a transformation that 
                  creates lasting memories and deep connections with nature.
                </p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4" />
                    <span>Photography Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Small Groups</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Leaf className="w-4 h-4" />
                    <span>Eco-Friendly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-safari-navy text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-safari-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-safari-navy mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-safari-navy text-center mb-12">Our Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-safari-orange mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-safari-navy mb-6">Meet Our Expert Team</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our passionate team of local guides, conservationists, and safari experts are dedicated 
            to providing you with the most authentic and memorable African safari experience.
          </p>
          <button className="bg-safari-navy text-white px-8 py-3 rounded-full hover:bg-safari-teal transition-colors font-medium">
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;