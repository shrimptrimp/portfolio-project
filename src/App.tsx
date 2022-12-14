// App.tsx
import React from 'react'
import Main from './components/example/main';
import Projects from './components/example/projects';
const App: React.FC = () => {
  return (
    <div>
      <Main />
      <Projects />
    </div>
  )
}

export default App