// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import Main from './components/example/main';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <Main />
    </div>
  )
}

export default App