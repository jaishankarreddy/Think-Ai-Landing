import Image from "next/image"
import { Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="Abstract colorful swirl" fill priority className="object-cover" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="w-full px-6 py-6 md:px-12">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-medium tracking-wider text-rose-400">TIFISI</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white hover:text-white/80 transition">
                Dashboard
              </a>
              <a href="#" className="text-white hover:text-white/80 transition">
                Feed
              </a>
              <a href="#" className="text-white hover:text-white/80 transition">
                Chat
              </a>
              <a href="#" className="text-white hover:text-white/80 transition">
                Profile
              </a>
              <Button className="bg-rose-500/80 hover:bg-rose-500 text-white rounded-full px-4 flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded-full border border-white/60">
                  <span className="sr-only">Globe</span>
                </span>
                Explore Demo
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center px-6 md:px-12 py-12">
          <div className="max-w-md bg-black/40 backdrop-blur-md rounded-3xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Speak your mind. Feel your voice.</h1>
            <p className="text-lg text-white/80 mb-8">
              Your thoughts, reimagined with emotion-aware AI. Type, talk, or think it, our AI helps you express it
              better.
            </p>
            <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white rounded-full px-6 py-6 h-auto flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Mic className="h-5 w-5" />
              </div>
              <span className="text-lg">Start with a Feeling</span>
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
