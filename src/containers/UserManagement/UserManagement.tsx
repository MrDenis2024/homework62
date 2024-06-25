import {useState} from 'react';
import {User} from '../../types';
import UserForm from '../../components/UserForm/UserForm';
import Users from '../../components/Users/Users';

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <div>
      <h4 className='text-center mb-3'>User management</h4>
      <div className='row mt-2 justify-content-around'>
        <div className='col-3'>
          <UserForm onSubmit={addUser}/>
        </div>
        <div className='col-3'>
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;