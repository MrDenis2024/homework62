import React from 'react';
import {CharacterItems} from '../../types';

interface Props {
  items: CharacterItems[];
}

const Counter: React.FC<Props> = ({items}) => {
  let counter = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].clicked) {
      counter++;
    }
  }
  return (
    <p className='mt-3'>
      Колличество попыток {counter}
    </p>
  );
};

export default Counter;