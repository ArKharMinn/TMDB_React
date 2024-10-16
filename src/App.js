import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import FileNotFound from './components/FileNotFound';
import Detail from './components/Detail';

function App() {

  return (
    <div className="">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<FileNotFound />}></Route>
        <Route path='movie/detail/:id' element={ <Detail/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
