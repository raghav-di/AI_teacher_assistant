import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './pages/home/home.jsx'
import About from './pages/about/about'
import Camps from './pages/camps/camps'
import Photos from './pages/photos/photos'
import GAL from '././components/gallery/gallary.jsx'


function App() {
  return ( 
    <div id="App">
 
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/camps' element={<Camps/>}/>
          <Route path='/photos' element={<Photos/>}/>
          <Route path='/gal' element={<GAL/>}/>
        </Routes>

    </div>
  );
}

export default App;
