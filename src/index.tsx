import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Index: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='example' element={<SomeExampleComponent />} />
          <Route path='/first' element={<MyFirstComponent />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
