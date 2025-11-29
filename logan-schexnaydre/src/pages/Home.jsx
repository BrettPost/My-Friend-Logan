import { useState, useEffect } from 'react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: '🐙', url: '#', color: 'hover:text-gray-300' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:text-blue-300' },
    { name: 'Email', icon: '✉️', url: '#', color: 'hover:text-saints-gold' },
  ]

  return (
    <div className="lg:ml-64 min-h-screen bg-gradient-to-br from-saints-bg via-saints-black to-saints-bg">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className={`
          flex flex-col md:flex-row items-center gap-12 mb-16
          transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          {/* Profile Picture */}
          <div className="relative group">
            <div className="absolute inset-0 bg-saints-gold rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-saints-gold shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-saints-gold/20 to-saints-gold/5 flex items-center justify-center text-6xl">
                👨‍🔬
              </div>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-saints-gold text-shadow">
                Dr. Chexmix
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-saints-gold to-transparent rounded-full" />
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Scholar • Researcher • Innovator
              </p>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Welcome to my personal portfolio. I'm passionate about pushing the boundaries of knowledge
              and creating impactful projects that make a difference. Explore my work, achievements, and
              discover what drives my research and innovation.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`
                    px-6 py-3 rounded-lg glass-effect
                    flex items-center gap-2
                    transition-all duration-300 transform
                    hover:scale-110 hover:shadow-lg hover:shadow-saints-gold/20
                    ${link.color}
                    animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats/Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { title: 'Projects', value: '10+', icon: '🚀' },
            { title: 'Publications', value: '5+', icon: '📚' },
            { title: 'Years Experience', value: '5+', icon: '⭐' },
          ].map((stat, index) => (
            <div
              key={stat.title}
              className="glass-effect rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:border-saints-gold/50 border border-saints-gold/10 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-3xl font-bold text-saints-gold">{stat.value}</span>
              </div>
              <h3 className="text-gray-400 font-medium">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Featured Quote or Mission Statement */}
        <div className="mt-16 glass-effect rounded-2xl p-8 border border-saints-gold/20">
          <blockquote className="text-2xl md:text-3xl font-light text-center text-gray-300 italic">
            "Innovation distinguishes between a leader and a follower."
          </blockquote>
          <p className="text-center text-saints-gold mt-4 font-medium">— Steve Jobs</p>
        </div>
      </div>
    </div>
  )
}

export default Home

