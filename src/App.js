
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Works from './components/Works/Works';
import Login from './components/loginOrSignup/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/services' element={<Works></Works>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}> </Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
