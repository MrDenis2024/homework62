import React, {useState} from 'react';
import {User, UserMutation} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [userMutation, setUserMutation] = useState<UserMutation>({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserMutation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const changeActivity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMutation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...userMutation,
    });

    setUserMutation({
      name: '',
      email: '',
      active: false,
      role: '',
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className='form-group mb-2'>
        <label htmlFor='name'>Name</label>
        <input type="text" name='name' id='name' className='form-control' required onChange={changeUser} value={userMutation.name}/>
      </div>
      <div className='form-group mb-2'>
        <label htmlFor='email'>Email</label>
        <input type="email" name='email' id='email' className='form-control' required onChange={changeUser} value={userMutation.email}/>
      </div>
      <div className='form-group d-flex justify-content-between mb-3'>
        <label htmlFor='active'>User active</label>
        <input type="checkbox" name='active' id='active' className='ms-3' onChange={changeActivity} checked={userMutation.active} />
      </div>
      <div className='form-group d-flex justify-content-between mb-4' >
        <label htmlFor='role'>User role</label>
        <select name="role" id="role" required onChange={changeUser} value={userMutation.role}>
          <option value="">Select role</option>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary mt-2'>Add user</button>
    </form>
  );
};

export default UserForm;