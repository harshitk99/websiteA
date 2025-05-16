"use client"
import { Ripple } from "@/components/magicui/ripple";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, Shield, Users } from "lucide-react";

const SignInPage = () => {
  const router = useRouter();
  function handleSignup() {
    router.push('/signup')
  }
  return (
    <div className="min-h-screen w-full bg-[#000000] relative overflow-hidden">
      {/* Hero Section */}
      <div className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-[1] bg-[#000000]">
          <Ripple 
            color="white"
            mainCircleSize={400}
            mainCircleOpacity={0.2}
            numCircles={8}
            className="w-full h-full z-[9]"
          />
        </div>
        <div className="relative z-[2] flex flex-col items-center justify-center text-center px-4">
          <AuroraText className="text-8xl font-bold text-white z-[10] mb-6">WEBSITE A</AuroraText>
          <h2 className="text-xl text-gray-300 max-w-2xl mb-8">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua&quot;
          </h2>
          <div className="flex gap-4">
            <ShimmerButton onClick={handleSignup} className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ShimmerButton>
            <button className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 px-4 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <Sparkles className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovative Features</h3>
              <p className="text-gray-400">Experience cutting-edge technology designed to enhance your workflow and productivity.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <Shield className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Platform</h3>
              <p className="text-gray-400">Your data is protected with enterprise-grade security measures and encryption.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
              <p className="text-gray-400">Join a thriving community of users and get support whenever you need it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-white/10 bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Website A. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;

