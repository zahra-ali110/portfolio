import Link from "next/link";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0A10]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          {/* Name */}
          <Link
            href="/"
            className="text-white font-semibold text-lg tracking-tight hover:text-orange-400 transition-colors"
          >
            Zahra
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              <li className="m-0 p-0">
                <Link
                  href="#home"
                  className="text-white hover:text-orange-400 transition-colors text-base font-normal"
                >
                  Home
                </Link>
              </li>
              <li className="m-0 p-0">
                <Link
                  href="#about"
                  className="text-white hover:text-orange-400 transition-colors text-base font-normal"
                >
                  About
                </Link>
              </li>
              <li className="m-0 p-0">
                <Link
                  href="#lab"
                  className="text-white hover:text-orange-400 transition-colors text-base font-normal"
                >
                  Projects
                </Link>
              </li>
              <li className="m-0 p-0">
                <Link
                  href="#contact"
                  className="text-white hover:text-orange-400 transition-colors text-base font-normal"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <a
              href="/cv/zahraCV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-orange-400/25 bg-orange-500/10 px-4 py-2 text-sm text-orange-200 hover:bg-orange-500/15 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Mobile: only CV button */}
          <div className="md:hidden">
            <a
              href="/cv/zahraCV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-orange-400/25 bg-orange-500/10 px-3 py-2 text-sm text-orange-200 hover:bg-orange-500/15 transition-colors"
            >
              CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}