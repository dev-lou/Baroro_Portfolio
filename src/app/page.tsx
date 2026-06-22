import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";
import { WelcomeModal } from "@/components/WelcomeModal";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative"
    >
      <WelcomeModal />
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -z-10 hidden dark:block" />

      <div className="space-y-16">
        <Header />
        <hr className="border-border" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-16">
            <About />
            <hr className="border-border" />
            <TechStack />
            <hr className="border-border" />
            <Projects />
            <hr className="border-border" />
            <Certifications />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-16 sticky top-12 h-fit">
            {/* Access Card Mock */}
            <div className="relative perspective-[1500px] w-full max-w-[420px] mx-auto xl:mx-0 group/card-wrapper">
              {/* Invisible Hover Zones for 3D Tilt */}
              <div className="absolute inset-y-0 left-0 w-1/2 z-50 peer/left" />
              <div className="absolute inset-y-0 right-0 w-1/2 z-50 peer/right" />
              
              <div className="bg-gradient-to-br from-[#1a1a1c] via-[#111111] to-[#000000] border border-white/10 rounded-xl p-6 text-white aspect-[1.6/1] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden transition-transform duration-500 ease-out peer-hover/left:[transform:rotateY(-8deg)_rotateX(2deg)_scale(1.02)] peer-hover/right:[transform:rotateY(8deg)_rotateX(2deg)_scale(1.02)] group-hover/card-wrapper:shadow-blue-500/20 group-hover/card-wrapper:-translate-y-1">
                {/* Subtle Grid Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                
                {/* Dynamic Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine z-20 pointer-events-none group-hover/card-wrapper:animate-shine" />
                
                {/* Subtle Glow behind logo */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 blur-[50px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start w-full">
                  <div>
                    <img src="/syntaxure-logo.png" alt="Syntaxure Labs Logo" className="h-8 w-auto object-contain drop-shadow-lg mb-2" />
                    <p className="text-[0.55rem] text-gray-400 tracking-[0.2em] uppercase font-medium">Syntaxure Labs</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded px-2 py-1 backdrop-blur-sm">
                    <p className="text-[0.5rem] text-blue-400 tracking-widest uppercase">Executive</p>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-end w-full mt-auto">
                  <div className="text-left">
                    <p className="text-[0.55rem] text-blue-400 mb-1 tracking-widest font-mono uppercase">CTO & Co-Founder</p>
                    <p className="font-bold tracking-[0.15em] text-lg text-white uppercase">Lou Vincent</p>
                  </div>
                  <div className="bg-white p-1 rounded shadow-xl">
                    <img src="/QR.png" alt="QR Code" className="w-12 h-12 rounded-sm object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Mock */}
            <div className="relative overflow-hidden bg-[#152e72] border border-[#23459c] rounded-2xl p-5 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-500 cursor-pointer group">
              {/* Subtle Grid Texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
              
              {/* Branded Wave Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none -z-10" />
              <div className="absolute -left-12 -bottom-12 w-44 h-44 rounded-full border border-white/5 pointer-events-none" />
              
              {/* Yellow Left Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f3a41c]" />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  {/* Kwadra TBI Logo */}
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-0.5 shadow-md shrink-0 overflow-hidden">
                    <img src="/kwadra-logo.jpg" alt="Kwadra TBI Logo" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-wider text-white">KWADRA TBI</h4>
                    <p className="text-[10px] text-yellow-400 font-semibold tracking-widest uppercase mt-0.5">
                      Incubatee • Cohort 5
                    </p>
                  </div>
                </div>
                
                <span className="text-[10px] bg-white/10 text-white font-medium px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm uppercase tracking-wider">
                  Active
                </span>
              </div>
            </div>

            <Experience />
          </div>
        </div>

        <hr className="border-border" />
        <SocialLinks />
        <Footer />
      </div>
    </motion.main>
  );
}
