import {useState} from 'react';
import Ball from '../../components/Ball/Ball';

const Lottery = () => {
  const [numberBall, setNumberBall] = useState([5, 11, 16, 23, 32]);

  const createNewNumber = () => {
    const newNumber: number[] = [];
    while (newNumber.length < 5) {
      const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
      if(!newNumber.includes(randomNumber)) {
        newNumber.push(randomNumber);
      }
    }
    newNumber.sort((a, b) => a - b);
    setNumberBall(newNumber);
  };

  return (
    <div className='text-center'>
      <h4 className='mb-4'>Lottery</h4>
      <button className="btn btn-success d-block mx-auto mb-4" onClick={createNewNumber}>New numbers</button>
      {numberBall.map((num, index) => (
        <Ball key={index} number={num} />
      ))}
    </div>
  );
};

export default Lottery;