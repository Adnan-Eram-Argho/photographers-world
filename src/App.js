
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Works from './components/Works/Works';
import Login from './components/loginOrSignup/SignUp/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut';
import SignIn from './components/loginOrSignup/SignIn/SignIn';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/services' element={<Works></Works>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}> </Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
