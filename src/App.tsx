// App.tsx
import React from 'react'
import CV from './components/example/CV';
import Main from './components/example/main';
import Projects from './components/example/projects';
const App: React.FC = () => {
  return (
    <div>
      <Main />
      <Projects />
      <CV />
    </div>
  )
}

export default App