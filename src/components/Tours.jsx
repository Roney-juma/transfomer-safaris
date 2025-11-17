import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: "Maasai Mara Classic Safari",
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "From $1,200",
      image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=300&fit=crop&crop=center",
      highlights: ["Big Five Game Viewing", "Maasai Cultural Experience", "Great Migration (Seasonal)", "Luxury Safari Lodge"],
      description: "Experience the world-famous Maasai Mara National Reserve with expert guides and luxury accommodations."
    },
    {
      id: 2,
      title: "Amboseli Elephant Safari",
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 People",
      rating: 4.8,
      price: "From $1,500",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&crop=center",
      highlights: ["Mount Kilimanjaro Views", "Large Elephant Herds", "Observation Hill", "Swamp Wildlife"],
      description: "Witness magnificent elephants against the backdrop of Mount Kilimanjaro in Amboseli National Park."
    },
    {
      id: 3,
      title: "Serengeti Migration Safari",
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 People",
      rating: 5.0,
      price: "From $2,800",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&h=300&fit=crop&crop=center",
      highlights: ["Great Migration", "Endless Plains", "Luxury Tented Camp", "Professional Photography Guide"],
      description: "Follow the Great Migration in the iconic Serengeti, one of nature's most spectacular events."
    },
    {
      id: 4,
      title: "Ngorongoro Crater Safari",
      duration: "2 Days / 1 Night",
      groupSize: "2-6 People",
      rating: 4.9,
      price: "From $900",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop&crop=center",
      highlights: ["Crater Floor Game Drive", "Rhino Spotting", "Flamingo Lakes", "Crater Rim Lodge"],
      description: "Explore the world's largest intact volcanic caldera, home to an incredible concentration of wildlife."
    }
  ];

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-safari-navy mb-6">
            Our Safari Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated safari experiences, each designed to showcase 
            the unique beauty and wildlife of East Africa's most spectacular destinations.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              {/* Image section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white text-safari-navy px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{tour.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-safari-orange text-white px-4 py-2 rounded-full font-bold">
                  {tour.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-safari-navy mb-3">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>

                {/* Tour details */}
                <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-safari-orange" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-safari-orange" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-safari-navy mb-2">Tour Highlights:</h4>
                  <ul className="space-y-1">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-safari-orange rounded-full"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-safari-navy">{tour.price}</div>
                    <div className="text-sm text-gray-600">per person</div>
                  </div>
                  <button className="bg-safari-orange text-white px-6 py-3 rounded-full hover:bg-safari-yellow transition-colors font-medium flex items-center space-x-2 group-hover:scale-105 transition-transform">
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't find the perfect safari? Let us create a custom experience just for you.</p>
          <button className="border-2 border-safari-navy text-safari-navy px-8 py-3 rounded-full hover:bg-safari-navy hover:text-white transition-all font-medium">
            Plan Custom Safari
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tours;