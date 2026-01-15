import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-safari-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">LT</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">LionTrack Safaris</h3>
                <p className="text-sm text-gray-400">Authenticity • Adventure • Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience the magic of Africa with our expertly guided safari adventures. 
              We're committed to providing authentic, sustainable tourism experiences that 
              benefit local communities and wildlife conservation.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-safari-orange hover:bg-safari-yellow transition-colors rounded-full p-2">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-safari-orange hover:bg-safari-yellow transition-colors rounded-full p-2">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-safari-orange hover:bg-safari-yellow transition-colors rounded-full p-2">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-safari-orange transition-colors">Home</a></li>
              <li><a href="#tours" className="text-gray-400 hover:text-safari-orange transition-colors">Safari Tours</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-safari-orange transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-safari-orange transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-safari-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-safari-orange transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-safari-orange transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-safari-orange mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Our Office</div>
                  <div className="text-gray-400">Nairobi, Kenya<br />Safari Center, Westlands</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-safari-orange" />
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-gray-400">+254 710 248 170</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-safari-orange" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-400">info@liontracksafaris.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safari Packages Quick Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-xl font-bold mb-6 text-center">Popular Safari Packages</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="#" className="bg-gray-800 hover:bg-safari-orange transition-colors p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🦁</div>
              <div className="font-medium">Maasai Mara Classic</div>
              <div className="text-sm text-gray-400">3 Days / 2 Nights</div>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-safari-orange transition-colors p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🐘</div>
              <div className="font-medium">Amboseli Elephant</div>
              <div className="text-sm text-gray-400">4 Days / 3 Nights</div>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-safari-orange transition-colors p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🦓</div>
              <div className="font-medium">Serengeti Migration</div>
              <div className="text-sm text-gray-400">5 Days / 4 Nights</div>
            </a>
            <a href="#" className="bg-gray-800 hover:bg-safari-orange transition-colors p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🦏</div>
              <div className="font-medium">Ngorongoro Crater</div>
              <div className="text-sm text-gray-400">2 Days / 1 Night</div>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 LionTrack Safaris. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-safari-orange transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-safari-orange transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-safari-orange transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Awards and Certifications */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-safari-orange">🏆</span>
              <span>TripAdvisor Certificate of Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-safari-orange">🌿</span>
              <span>Sustainable Tourism Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-safari-orange">⭐</span>
              <span>4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;