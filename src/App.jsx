import {BrowserRouter as Router, Route, Routes} from 'react-router';
import Nav from "./Nav"
import ScpDetail from './ScpDetail';
import Home from './Home';

export default function App()
{
  return(
    <Router>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/scp/:item' element={<ScpDetail />} />
        </Routes>
    </Router>
  )
}
