import { BrowserRouter, Route } from 'react-router-dom';
import { Routes} from 'react-router';
import Home from './pages/Home/Home';

import './app.scss';
import Add from './pages/Add';
import Edit from './pages/Edit';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/edit/:code" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
