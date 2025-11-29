import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Navigation from './components/Navigation'

function App() {
  const [activePage, setActivePage] = useState('home')

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />
      case 'projects':
        return <Projects />
      case 'resume':
        return <Resume />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 overflow-y-auto lg:ml-0">
        <div className="min-h-screen">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}

export default App
