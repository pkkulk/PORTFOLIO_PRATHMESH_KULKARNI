import { useState } from 'react'
import { Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
function App() {

return(<>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/project' element={<Project/>} />
  <Route path='/experience' element={<Experience/>} />
  <Route path='/contact' element={<Contact/>} />
</Routes>
 </>
);
 
}

export default App
