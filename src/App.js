import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Layout />}>

      </Route>

    </Routes>
      
    </>
  );
}

export default App;
