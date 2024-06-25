import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className='card mb-3'>
      <div className='card-body text-start'>
        <p className='card-text mb-0'>Name: {user.name}</p>
        <p className='card-text mb-0'>Email: {user.email}</p>
        <p className='card-text mb-0'>Activity: {user.active ? <span>Active</span> : <span>Not active</span>}</p>
        <p className='card-text mb-0'>Role: {user.role}</p>
      </div>
    </div>
  );
};

export default UserItem;