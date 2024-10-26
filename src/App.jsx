// StyleComponent.js (App component)
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Header from './components/Header';
import ToDoList from './pages/ToDoList';
import ChoixMultiple from './pages/ChoixMultiple';

const App = () => {

  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/deploy-test/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/choixmultiple" element={<ChoixMultiple />} />
      </Routes>
    </Router>
  );
};

export default App;
