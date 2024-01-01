
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {

  return (<Router>
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
  
    </Router>
  )
}
export default App