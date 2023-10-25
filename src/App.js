import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Details from './components/Details';


function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/:media_type/:id' element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
