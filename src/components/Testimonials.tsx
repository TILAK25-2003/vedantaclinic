import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

const reviews = [
  {
    name: "Rahul Verma",
    rating: 5,
    text: "Dr. Chaudhary is excellent! I had a root canal treatment done here and it was completely painless. The clinic is very clean and hygienic. Highly recommended for anyone in Raipur.",
    date: "2 months ago"
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best dental clinic in town. I went for teeth whitening and the results are amazing. Dr. B. Chaudhary explains everything very patiently. Very satisfied with the service.",
    date: "1 month ago"
  },
  {
    name: "Amit Patel",
    rating: 5,
    text: "Very professional and experienced doctor. My mother got her dentures from here and she is very happy. The staff is also very polite. Thank you Vedanta Dental Care!",
    date: "3 weeks ago"
  },
  {
    name: "Sneha Gupta",
    rating: 5,
    text: "I was very scared of dentists but Dr. Chaudhary made me feel very comfortable. Had a wisdom tooth extraction and didn't feel a thing. Great experience!",
    date: "4 months ago"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-20 bg-dental-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-dental-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dental-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Patient Stories" 
          subtitle="What our patients say about their experience with us."
          light
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
            <Quote className="absolute top-8 left-8 text-dental-500/30 w-16 h-16 rotate-180" />
            
            <div className="h-[280px] md:h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-200 italic mb-6 leading-relaxed">
                    "{reviews[currentIndex].text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-xl text-white">{reviews[currentIndex].name}</h4>
                    <span className="text-sm text-gray-400">{reviews[currentIndex].date}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevReview}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2 items-center">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-dental-500' : 'w-2 bg-white/30'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextReview}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://share.google/Yze2ITOIYuxK6kF0F" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-dental-200 hover:text-white transition-colors text-sm font-medium"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4" />
              Read all reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
