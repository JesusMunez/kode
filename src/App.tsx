import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <MainPage/> }/>
        <Route path='/profile/:id' element={ <ProfilePage/> }/>
      </Routes>
    </div>
  );
}

export default App;
