import { useState } from 'react'

const Navigation = ({ activePage, setActivePage }) => {
  const [isHovered, setIsHovered] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'projects', label: 'Projects', icon: '💼' },
    { id: 'resume', label: 'Resume', icon: '📄' },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-saints-black border border-saints-gold/20 rounded-lg text-saints-gold hover:bg-saints-card transition-colors"
      >
        <span className="text-2xl">{isMobileMenuOpen ? '✕' : '☰'}</span>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className={`
        w-64 bg-saints-black border-r border-saints-gold/20 h-screen fixed left-0 top-0 z-50 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
      {/* Logo/Header Section */}
      <div className="p-6 border-b border-saints-gold/20">
        <h1 className="text-2xl font-bold text-saints-gold mb-1">Dr. Chexmix</h1>
        <p className="text-sm text-gray-400">Personal Portfolio</p>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActivePage(item.id)
              setIsMobileMenuOpen(false)
            }}
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
            className={`
              w-full text-left px-4 py-3 rounded-lg transition-all duration-300
              flex items-center gap-3 group relative overflow-hidden
              ${activePage === item.id
                ? 'bg-saints-gold text-saints-black font-semibold shadow-lg shadow-saints-gold/50'
                : 'text-gray-300 hover:text-saints-gold hover:bg-saints-card'
              }
            `}
          >
            {/* Animated background effect */}
            <span className={`
              absolute inset-0 bg-gradient-to-r from-saints-gold/20 to-transparent
              transform translate-x-[-100%] transition-transform duration-500
              ${isHovered === item.id && activePage !== item.id ? 'translate-x-0' : ''}
            `} />
            
            <span className="text-xl relative z-10">{item.icon}</span>
            <span className="relative z-10">{item.label}</span>
            
            {/* Active indicator */}
            {activePage === item.id && (
              <span className="absolute right-4 w-2 h-2 bg-saints-black rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-saints-gold/20">
        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Dr. Chexmix
        </p>
      </div>
      </nav>
    </>
  )
}

export default Navigation

