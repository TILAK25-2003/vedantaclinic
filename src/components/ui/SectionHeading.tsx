import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className, light = false }) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn("text-3xl md:text-4xl font-bold mb-4", light ? "text-white" : "text-dental-900")}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center"
        >
          <div className={cn("h-1 w-20 rounded-full mb-4", light ? "bg-white/50" : "bg-dental-700")} />
        </motion.div>
      )}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn("max-w-2xl mx-auto", light ? "text-gray-200" : "text-gray-600")}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
