import { useState } from 'react'

const Resume = () => {
  const [isViewingPDF, setIsViewingPDF] = useState(false)

  // Sample resume data - replace with actual data
  const resumeData = {
    personalInfo: {
      name: 'Dr. Chexmix',
      title: 'Research Scholar & Innovator',
      email: 'dr.chexmix@example.com',
      phone: '+1 (555) 123-4567',
      location: 'New Orleans, LA',
    },
    education: [
      {
        degree: 'Ph.D. in Computational Sciences',
        institution: 'University Name',
        year: '2020',
        details: 'Thesis: Advanced Computational Methods in Data Analysis',
      },
      {
        degree: 'M.S. in Computer Science',
        institution: 'University Name',
        year: '2016',
        details: 'Specialization: Machine Learning and AI',
      },
      {
        degree: 'B.S. in Mathematics',
        institution: 'University Name',
        year: '2014',
        details: 'Summa Cum Laude',
      },
    ],
    experience: [
      {
        title: 'Senior Research Scientist',
        company: 'Research Institute',
        period: '2021 - Present',
        description: 'Leading innovative research projects in computational sciences and data analysis.',
        achievements: [
          'Published 5+ peer-reviewed papers',
          'Secured $500K+ in research funding',
          'Mentored 10+ graduate students',
        ],
      },
      {
        title: 'Research Associate',
        company: 'Academic Institution',
        period: '2018 - 2021',
        description: 'Conducted research and developed novel algorithms for data processing.',
        achievements: [
          'Developed 3 major research frameworks',
          'Collaborated with international research teams',
        ],
      },
    ],
    skills: {
      technical: ['Python', 'JavaScript', 'React', 'Machine Learning', 'Data Analysis', 'TensorFlow', 'SQL', 'Docker'],
      research: ['Statistical Analysis', 'Experimental Design', 'Peer Review', 'Grant Writing', 'Academic Writing'],
      soft: ['Leadership', 'Collaboration', 'Problem Solving', 'Communication', 'Mentoring'],
    },
    publications: [
      {
        title: 'Advanced Machine Learning Techniques in Data Science',
        journal: 'Journal of Computational Sciences',
        year: '2024',
        authors: 'Chexmix, D. et al.',
      },
      {
        title: 'Novel Approaches to Big Data Analysis',
        journal: 'Data Science Review',
        year: '2023',
        authors: 'Chexmix, D. et al.',
      },
    ],
  }

  return (
    <div className="lg:ml-64 min-h-screen bg-gradient-to-br from-saints-bg via-saints-black to-saints-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold text-saints-gold mb-4 text-shadow">Resume / CV</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-saints-gold to-transparent rounded-full" />
            </div>
            <button
              onClick={() => setIsViewingPDF(!isViewingPDF)}
              className="px-6 py-3 rounded-lg bg-saints-gold text-saints-black font-semibold hover:bg-saints-gold-light transition-all duration-300 transform hover:scale-105 shadow-lg shadow-saints-gold/50"
            >
              {isViewingPDF ? 'View Text Version' : 'View PDF Version'}
            </button>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl">
            Download or view my complete curriculum vitae and professional background.
          </p>
        </div>

        {isViewingPDF ? (
          /* PDF Viewer Placeholder */
          <div className="glass-effect rounded-xl p-12 border border-saints-gold/20 animate-fade-in min-h-[800px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-saints-gold">PDF Resume</h3>
              <p className="text-gray-400 mb-6">Upload your PDF resume here or link to it</p>
              <button className="px-6 py-3 rounded-lg bg-saints-gold text-saints-black font-semibold hover:bg-saints-gold-light transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        ) : (
          /* Text Resume */
          <div className="space-y-8 animate-fade-in">
            {/* Personal Information */}
            <div className="glass-effect rounded-xl p-8 border border-saints-gold/20">
              <h2 className="text-3xl font-bold text-saints-gold mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 mb-1">Name</p>
                  <p className="text-xl text-white">{resumeData.personalInfo.name}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Title</p>
                  <p className="text-xl text-white">{resumeData.personalInfo.title}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <p className="text-white">{resumeData.personalInfo.email}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Phone</p>
                  <p className="text-white">{resumeData.personalInfo.phone}</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p className="text-white">{resumeData.personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="glass-effect rounded-xl p-8 border border-saints-gold/20">
              <h2 className="text-3xl font-bold text-saints-gold mb-6">Education</h2>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-saints-gold pl-6 animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <span className="text-saints-gold font-medium">{edu.year}</span>
                    </div>
                    <p className="text-saints-gold mb-1">{edu.institution}</p>
                    <p className="text-gray-400">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="glass-effect rounded-xl p-8 border border-saints-gold/20">
              <h2 className="text-3xl font-bold text-saints-gold mb-6">Professional Experience</h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-saints-gold">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="glass-effect rounded-xl p-8 border border-saints-gold/20">
              <h2 className="text-3xl font-bold text-saints-gold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technical</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.technical.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md text-sm bg-saints-gold/10 text-saints-gold border border-saints-gold/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Research</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.research.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md text-sm bg-saints-gold/10 text-saints-gold border border-saints-gold/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.soft.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md text-sm bg-saints-gold/10 text-saints-gold border border-saints-gold/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Publications */}
            <div className="glass-effect rounded-xl p-8 border border-saints-gold/20">
              <h2 className="text-3xl font-bold text-saints-gold mb-6">Publications</h2>
              <div className="space-y-4">
                {resumeData.publications.map((pub, index) => (
                  <div key={index} className="border-l-4 border-saints-gold/50 pl-6 animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                    <h3 className="text-lg font-semibold text-white mb-1">{pub.title}</h3>
                    <p className="text-saints-gold mb-1">{pub.journal}</p>
                    <p className="text-gray-400 text-sm">{pub.authors} • {pub.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center pt-8">
              <button className="px-8 py-4 rounded-lg bg-saints-gold text-saints-black font-bold text-lg hover:bg-saints-gold-light transition-all duration-300 transform hover:scale-105 shadow-lg shadow-saints-gold/50">
                Download Full Resume (PDF)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Resume

