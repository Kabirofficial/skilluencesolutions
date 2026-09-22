import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[85svh] w-full bg-[#FAF7F2] text-[#1F2421] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Micro-Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E8E2D8] bg-[#FBF9F5] text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#142F23]">
          <Compass className="w-3.5 h-3.5 text-[#C36B4E]" />
          <span>Routing Exception / 404</span>
        </div>

        {/* Oversized 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <div className="font-serif italic text-8xl sm:text-9xl md:text-[130px] font-light text-[#142F23] tracking-tight leading-none">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#142F23] tracking-tight">
            This path navigated elsewhere.
          </h1>

          <p className="text-sm sm:text-base text-[#556059] max-w-md mx-auto leading-relaxed font-light">
            The page you are looking for does not exist or may have been relocated. Return to the main advisory ledger or review our service modules.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C36B4E] hover:bg-[#A8553B] text-white font-medium text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-[#FAF7F2] border border-[#E8E2D8] text-[#142F23] font-medium text-xs font-sans uppercase tracking-wider transition-colors"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
