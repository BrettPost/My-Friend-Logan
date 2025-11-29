import { useState } from 'react'

const Projects = () => {
  // Sample projects - replace with actual data
  const [projects] = useState([
    {
      id: 1,
      title: 'Research Project Alpha',
      description: 'A groundbreaking research project that explores innovative solutions in the field of computational science.',
      technologies: ['React', 'Python', 'Machine Learning'],
      status: 'Completed',
      year: '2024',
      link: '#',
    },
    {
      id: 2,
      title: 'Data Analysis Platform',
      description: 'An advanced platform for analyzing complex datasets with real-time visualization and insights.',
      technologies: ['JavaScript', 'D3.js', 'Node.js'],
      status: 'In Progress',
      year: '2024',
      link: '#',
    },
    {
      id: 3,
      title: 'Academic Publication System',
      description: 'A comprehensive system for managing academic publications and research papers.',
      technologies: ['Vue.js', 'MongoDB', 'Express'],
      status: 'Completed',
      year: '2023',
      link: '#',
    },
    {
      id: 4,
      title: 'Machine Learning Framework',
      description: 'A custom framework for building and deploying machine learning models efficiently.',
      technologies: ['Python', 'TensorFlow', 'Docker'],
      status: 'Completed',
      year: '2023',
      link: '#',
    },
    {
      id: 5,
      title: 'Collaborative Research Tool',
      description: 'A tool that facilitates collaboration among researchers across different institutions.',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      status: 'In Progress',
      year: '2024',
      link: '#',
    },
    {
      id: 6,
      title: 'Data Visualization Suite',
      description: 'An interactive suite for creating beautiful and informative data visualizations.',
      technologies: ['TypeScript', 'D3.js', 'WebGL'],
      status: 'Completed',
      year: '2022',
      link: '#',
    },
  ])

  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status.toLowerCase() === filter.toLowerCase())

  return (
    <div className="lg:ml-64 min-h-screen bg-gradient-to-br from-saints-bg via-saints-black to-saints-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-saints-gold mb-4 text-shadow">Projects</h1>
          <div className="h-1 w-32 bg-gradient-to-r from-saints-gold to-transparent rounded-full mb-6" />
          <p className="text-xl text-gray-400 max-w-3xl">
            A collection of my research projects, applications, and contributions to the academic and tech communities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 animate-slide-up">
          {['all', 'completed', 'in progress'].map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`
                px-6 py-2 rounded-lg font-medium transition-all duration-300
                capitalize
                ${filter === filterOption
                  ? 'bg-saints-gold text-saints-black shadow-lg shadow-saints-gold/50'
                  : 'glass-effect text-gray-300 hover:text-saints-gold hover:border-saints-gold/50'
                }
                border border-saints-gold/10
              `}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-effect rounded-xl p-6 border border-saints-gold/10 hover:border-saints-gold/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-saints-gold/20 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`
                  px-3 py-1 rounded-full text-xs font-semibold
                  ${project.status === 'Completed'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-saints-gold/20 text-saints-gold border border-saints-gold/30'
                  }
                `}>
                  {project.status}
                </span>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-saints-gold mb-3 group-hover:text-saints-gold-light transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs bg-saints-gold/10 text-saints-gold border border-saints-gold/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-saints-gold hover:text-saints-gold-light font-medium transition-colors group-hover:gap-3 duration-300"
              >
                View Project
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-2xl text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

