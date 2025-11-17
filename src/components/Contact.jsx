import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-safari-navy text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Safari Adventure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience the magic of Africa? Get in touch with our safari experts 
            to plan your perfect adventure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-safari-orange rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-gray-300">+254 722 713 514</div>
                  <div className="text-gray-300">+254 710 248 170
                    
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-safari-teal rounded-full p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-gray-300">info@transformersafaris.com</div>
                  <div className="text-gray-300">bookings@transformersafaris.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-safari-yellow rounded-full p-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <div className="text-gray-300">Nairobi, Kenya</div>
                  <div className="text-gray-300">Safari Center, Westlands</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-safari-orange rounded-full p-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Office Hours</div>
                  <div className="text-gray-300">Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div className="text-gray-300">Sat - Sun: 9:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Our Adventures</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-safari-orange hover:bg-safari-yellow transition-colors rounded-full p-3">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="bg-safari-orange hover:bg-safari-yellow transition-colors rounded-full p-3">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="bg-safari-orange hover:bg-safari-yellow transition-colors rounded-full p-3">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-safari-navy mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Safari Interest</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent">
                  <option>Select a safari package</option>
                  <option>Maasai Mara Classic Safari</option>
                  <option>Amboseli Elephant Safari</option>
                  <option>Serengeti Migration Safari</option>
                  <option>Ngorongoro Crater Safari</option>
                  <option>Custom Safari Experience</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-orange focus:border-transparent"
                  placeholder="Tell us about your dream safari experience..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-safari-orange text-white py-3 rounded-lg hover:bg-safari-yellow transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center bg-safari-orange bg-opacity-10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">24/7 Emergency Support</h3>
          <p className="text-gray-300 mb-4">
            During your safari, our emergency support team is available around the clock.
          </p>
          <div className="text-xl font-bold text-safari-yellow">
            Emergency Hotline: +254 700 SAFARI (724274)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;