// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/example/clickCount';
import GooseGif from './components/example/gooseGif';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
      <ClickCount />
      <GooseGif />
    </div>
  )
}

export default App