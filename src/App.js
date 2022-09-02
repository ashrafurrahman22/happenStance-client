
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  return (
    <div className='lg:px-14 px-8'>
        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>

    </div>
  );
}

export default App;
