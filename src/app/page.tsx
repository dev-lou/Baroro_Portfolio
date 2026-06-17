import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 relative animate-slide-up">
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
            <div className="group bg-[#1a1a1a] dark:bg-[#111] border border-[#333] rounded-2xl p-6 text-white h-[400px] flex flex-col justify-between shadow-xl relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer hover:[transform:perspective(1000px)_rotateY(10deg)_scale(1.02)]">
              {/* Subtle Grid Texture */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
              
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-4">
                  <img src="/syntaxure-logo.png" alt="Syntaxure Labs Logo" className="h-10 w-auto object-contain" />
                </div>
                <h3 className="text-xl font-bold tracking-wider">SYNTAXURE LABS</h3>
                <p className="text-xs text-gray-400 mt-1">EXECUTIVE ACCESS CARD</p>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-400 mb-1">CTO & CO-FOUNDER</p>
                  <p className="font-bold tracking-widest">LOU VINCENT</p>
                </div>
                <div className="w-16 h-16 bg-white/10 rounded" />
              </div>
            </div>

            {/* Banner Mock */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl px-6 py-4 text-white shadow-sm ring-1 ring-blue-400/30 flex items-center justify-center">
               <span className="text-sm font-semibold tracking-widest uppercase">
                 Kwadra TBI Incubatee • Cohort 5
               </span>
            </div>

            <Experience />
          </div>
        </div>

        <hr className="border-border" />
        <SocialLinks />
        <Footer />
      </div>
    </main>
  );
}
