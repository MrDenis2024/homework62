import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';
import Achievements from './containers/Achievements/Achievements';

const App = () => {

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <div className='container flex-grow-1'>
        <Routes>
          <Route path='/' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='*' element={<h1>not found</h1>} />
        </Routes>
      </div>
      <footer className='bg-success'>
        <div className='container text-center'>
          <p className='my-4 text-light'>Made by Denis Khrunev student Attractor school 2024</p>
        </div>
      </footer>
    </>
  );
};

export default App;
