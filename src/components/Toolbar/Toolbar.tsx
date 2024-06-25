import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid container">
        <NavLink to='/' className='navbar-brand'>My profile</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className='nav-link'>About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/achievements' className='nav-link'>Achievements</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/portfolio' className='nav-link'>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contacts' className='nav-link'>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;