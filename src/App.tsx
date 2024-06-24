import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './containers/AboutUs/AboutUs';

const App = () => {

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <div className='container'>
        <Routes>
          <Route path='/' element={<AboutUs />} />
          <Route path='*' element={<h1>not found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
