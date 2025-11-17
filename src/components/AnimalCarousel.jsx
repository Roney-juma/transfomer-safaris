import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const AnimalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Animal images data - using high-quality placeholder images
  const animalImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&h=600&fit=crop&crop=center',
      title: 'Majestic Lion',
      description: 'The king of the jungle in his natural habitat'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop&crop=center',
      title: 'African Elephant',
      description: 'Gentle giants roaming the savanna'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&h=600&fit=crop&crop=center',
      title: 'Graceful Cheetah',
      description: 'The fastest land animal in action'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop&crop=center',
      title: 'African Giraffe',
      description: 'Towering beauties of the African plains'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop&crop=center',
      title: 'Rhinoceros',
      description: 'Powerful and endangered giants'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&crop=center',
      title: 'African Leopard',
      description: 'Elusive spotted hunters of the night'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % animalImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, animalImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % animalImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + animalImages.length) % animalImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-safari-cream to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-safari-navy mb-4">
            Wildlife Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the magnificent wildlife you'll encounter on your safari adventure
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Main Image Display */}
            <div className="relative h-96 lg:h-[500px]">
              {animalImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Image Info Overlay */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{image.title}</h3>
                    <p className="text-lg opacity-90">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-play toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
            >
              <Play className={`w-5 h-5 ${isAutoPlaying ? 'opacity-100' : 'opacity-50'}`} />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {animalImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToSlide(index)}
                className={`w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentSlide 
                    ? 'ring-4 ring-safari-orange scale-110' 
                    : 'opacity-60 hover:opacity-80'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {animalImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-safari-orange scale-125' 
                    : 'bg-gray-300 hover:bg-safari-orange/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see these magnificent creatures in person?
          </p>
          <button className="bg-safari-orange text-white px-8 py-3 rounded-full hover:bg-safari-yellow transition-colors font-medium">
            Book Your Safari Adventure
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimalCarousel;