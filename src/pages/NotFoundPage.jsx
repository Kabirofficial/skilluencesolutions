import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[85svh] w-full bg-sp-white text-sp-ink flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Micro-Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-btn bg-sp-offWhite border border-sp-lightGray text-[11px] font-mono uppercase tracking-widest text-sp-charcoal">
          <Compass className="w-3.5 h-3.5 text-sp-ink" />
          <span>ROUTING EXCEPTION / 404</span>
        </div>

        {/* Oversized 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <div className="font-mono text-7xl sm:text-8xl md:text-9xl font-black text-sp-ink tracking-tighter leading-none">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-sp-ink tracking-tight uppercase">
            Looks like this path went somewhere else.
          </h1>

          <p className="text-sm sm:text-base text-sp-midGray max-w-md mx-auto leading-relaxed font-normal">
            The page you're looking for doesn't exist or may have moved. Return to the main advisory narrative or review our services.
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-sp-ink hover:bg-sp-charcoal text-sp-white font-bold text-xs tracking-wide transition-all shadow-sm active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back Home</span>
          </Link>

          <Link
            to="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-sp-offWhite hover:bg-sp-lightGray/70 border border-sp-lightGray text-sp-ink font-semibold text-xs tracking-wide transition-all active:scale-[0.98]"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
