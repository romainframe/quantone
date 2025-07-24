import Link from 'next/link';
import '../styles/globals.css';

export default function NotFound() {
  // For the global not-found page, we'll default to English
  // The localized version in app/[locale]/not-found.tsx will handle translations
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="antialiased text-black bg-[#ef4444] font-mono">
        <div className="bg-[#ef4444] min-h-screen flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            {/* Giant 404 */}
            <div className="mb-8">
              <h1 className="text-[200px] md:text-[300px] font-black text-white leading-none uppercase transform -skew-y-3">
                404
              </h1>
            </div>
            
            {/* Lost in the rhythm */}
            <h2 className="text-5xl md:text-6xl font-black text-[#fbbf24] mb-8 uppercase transform skew-x-2">
              LOST IN THE RHYTHM?
            </h2>
            
            {/* Description */}
            <p className="text-2xl md:text-3xl text-white font-black uppercase leading-tight mb-16 max-w-4xl mx-auto">
              THE PAGE YOU&apos;RE LOOKING FOR HAS ESCAPED INTO ANOTHER DIMENSION OF MUSICAL MATHEMATICS
            </p>
            
            {/* Visual element */}
            <div className="flex justify-center mb-16 space-x-4">
              <div className="text-8xl animate-bounce" style={{ animationDelay: '0ms' }}>🎵</div>
              <div className="text-8xl animate-bounce" style={{ animationDelay: '100ms' }}>📐</div>
              <div className="text-8xl animate-bounce" style={{ animationDelay: '200ms' }}>∞</div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/en">
                <button className="px-12 py-6 bg-[#22c55e] text-black text-xl font-black uppercase border-8 border-black hover:bg-[#16a34a] transition-all transform hover:scale-105 hover:-rotate-2">
                  RETURN HOME
                </button>
              </Link>
              <Link href="/en/rhythms">
                <button className="px-12 py-6 bg-[#fbbf24] text-black text-xl font-black uppercase border-8 border-black hover:bg-[#f59e0b] transition-all transform hover:scale-105 hover:rotate-2">
                  EXPLORE RHYTHMS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 