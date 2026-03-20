import {BrowserRouter as Router, Route, Routes} from 'react-router';
import Nav from "./Nav"
import ScpDetail from './ScpDetail';
import Home from './Home';

export default function App()
{
  return(
    // Gemini code for loading inital page for GitHub Pages
    <Router basename="/Assignment1-ReactSCP">
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/scp/:item' element={<ScpDetail />} />
        </Routes>
    </Router>
  )
}
