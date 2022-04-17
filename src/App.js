
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Works from './components/Works/Works';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/services' element={<Works></Works>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
