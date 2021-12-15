import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';
import Layout from './pages/Layout';
import RequireAuth from './components/RequiredAuth';

function App() {
  return (
<Routes>
  <Route element={<Layout/>}>
    {/* public routes go here  */}
    <Route path='/' element={<Home/>}/>
    <Route path='/public' element={<Public/>}/>
    <Route element={<RequireAuth/>}>
      {/* protected routes go here */}
    <Route path='/protected' element={<Protected/>}/>
    </Route>
  </Route>
</Routes>
  );
}

export default App;
