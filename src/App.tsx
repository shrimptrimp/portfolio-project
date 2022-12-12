// App.tsx
import React from 'react'
import CV from './components/example/CV';
import Main from './components/example/main';

const App: React.FC = () => {
  return (
    <div>
      <Main />
      <CV />
    </div>
  )
}

export default App