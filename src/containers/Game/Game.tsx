import {CharacterItems} from '../../types';
import {useState} from 'react';
import Counter from '../../components/GameCounter/Counter';
import CellBoard from '../../components/GameCell/CellBoard';
import ResetGame from '../../components/ResetGame/ResetGame';

const Game = () => {
  const createItems = () => {
    const itemsArray: CharacterItems[] = [];
    for(let i = 0; i < 36; i++) {
      itemsArray.push({hasItem: false, clicked: false, id: Math.random().toString()});
    }
    const randomIndex = Math.floor(Math.random() * 36);
    itemsArray[randomIndex].hasItem = true;
    return itemsArray;
  };

  const [items, setItems] = useState(createItems());

  const changeCell = (id: string) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if(item.id === id) {
          return {...item, clicked: true};
        }

        return item;
      });
    });
  };

  const resetGame = () => {
    setItems(createItems());
  };

  return (
    <div className='text-center'>
      <h4>Game</h4>
      <CellBoard changeCell={changeCell} items={items} />
      <Counter items={items} />
      <ResetGame  onClick={resetGame}/>
    </div>
  );
};

export default Game;