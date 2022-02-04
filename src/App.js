import { Route, Routes } from 'react-router';
import './App.css';
import CartItem from './components/CartItem';
import Emploeeys from './components/Emploeeys';
import MainMenu from './components/MainMenu';
import Departments from './pages/Departments';
import Employees from './pages/Employees';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu/>}>
          <Route index element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/employees/:emplId" element={<Emploeeys />} />
          <Route path="/departments/:itemId" element={<CartItem />} />
        </Route>
      </Routes>
              



    </div>
  );
}

export default App;
