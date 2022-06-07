import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllPosts } from './components/AllPosts';
import { Structure } from './components/Structure';
import { Loggin } from './components/Loggin';
import { ReadPost } from './components/readPost';
import { ChangePost } from './components/changePost';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Structure/>}>
        <Route index element={<Loggin/>}/>
        <Route path='/AllPosts' element={<AllPosts/>}/>
        <Route path='/AllPosts/:id' element={<ReadPost/>}/>
        <Route path='/AllPosts/changePost/:id' element={<ChangePost/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
