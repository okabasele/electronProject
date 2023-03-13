import logo from './logo.svg';
import './App.css';

import MainLayout from './components/layouts/MainLayout.js';
import Home from './pages/Home';

function App() {
  return (
   <MainLayout>
    <Home/>
   </MainLayout>
  );
}

export default App;
