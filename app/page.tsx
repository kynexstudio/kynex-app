'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1C] text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#00E5FF]" />
          <span className="text-2xl font-semibold tracking-[-1px]">Kynex</span>
        </div>
        <ConnectButton />
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[64px] md:text-[76px] font-semibold tracking-[-3px] leading-none mb-6">
            Clarity.<br />Control.<br />Crafted.
          </h1>
          
          <p className="max-w-lg mx-auto text-xl text-gray-400 mb-10">
            A premium Web3 experience built with intention.<br />
            Secure by design. Quiet by nature.
          </p>

          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </motion.div>
      </section>

      {/* Refined Two-Column Layout */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          
          <div>
            <div className="text-[#00E5FF] text-sm tracking-[3px] mb-2">SECURITY</div>
            <h3 className="text-4xl font-semibold tracking-tight mb-4 leading-tight">
              Every action is clear before you take it.
            </h3>
            <p className="text-gray-400 text-lg">
              We simulate your transactions and show you exactly what’s happening. 
              No hidden risks. No surprises.
            </p>
          </div>

          <div>
            <div className="text-[#00E5FF] text-sm tracking-[3px] mb-2">EXPERIENCE</div>
            <h3 className="text-4xl font-semibold tracking-tight mb-4 leading-tight">
              Built to feel calm, not chaotic.
            </h3>
            <p className="text-gray-400 text-lg">
              Most platforms overwhelm you. Kynex is designed to feel intentional, 
              quiet, and premium.
            </p>
          </div>

          <div>
            <div className="text-[#00E5FF] text-sm tracking-[3px] mb-2">FUTURE</div>
            <h3 className="text-4xl font-semibold tracking-tight mb-4 leading-tight">
              Start early. Get rewarded later.
            </h3>
            <p className="text-gray-400 text-lg">
              Earn points now. Be rewarded when our token launches. 
              Position yourself from the beginning.
            </p>
          </div>

          <div>
            <div className="text-[#00E5FF] text-sm tracking-[3px] mb-2">DIFFERENCE</div>
            <h3 className="text-4xl font-semibold tracking-tight mb-4 leading-tight">
              Not just another interface.
            </h3>
            <p className="text-gray-400 text-lg">
              We combine strong security, thoughtful design, and real utility 
              in one calm, high-quality experience.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
