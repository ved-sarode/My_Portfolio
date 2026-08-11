import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-background/90 backdrop-blur-md border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <p className="font-body text-on-surface-variant mb-4 md:mb-0 flex items-center gap-1 font-semibold">
          Made with <span className="text-error mx-1">❤️</span> by Vedant
        </p>
        
        <div className="flex gap-6 items-center">
          <a 
            className="bg-background shadow-neo-raised text-primary font-semibold px-6 py-2 rounded-full hover:text-tertiary active:shadow-neo-pressed transition-all duration-300 flex items-center gap-2" 
            href="mailto:vedantsarode15@gmail.com"
          >
            Say Hi
          </a>
        </div>
      </div>
    </footer>
  );
}
