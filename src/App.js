import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import Home from './components/pages/home';
import AddTask from './components/pages/addTask';
import Navigation from './components/nav/nav';


function App() {
  return (
    <div className="app-container">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
