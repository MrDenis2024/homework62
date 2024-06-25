import {Link, Outlet} from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='mt-5'>
      <h4 className='text-center'>Портфолио</h4>
      <div className='d-flex justify-content-around align-items-center my-5'>
        <Link to='game' className='btn btn-danger'>Game</Link>
        <Link to='user-management' className='btn btn-warning'>User management</Link>
        <Link to='lottery' className='btn btn-info'>Lottery</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Portfolio;