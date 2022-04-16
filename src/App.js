
import './App.css';
import Fade from 'react-reveal/Fade';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
