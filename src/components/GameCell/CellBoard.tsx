import React, {CSSProperties} from 'react';
import Cell from './Cell';
import {CharacterItems} from '../../types';

interface Props {
  items: CharacterItems[];
  changeCell: (id: string) => void;
}

const CellBoard: React.FC<Props> = ({items, changeCell}) => {
  const styleBoard: CSSProperties = {display: 'flex', flexWrap: 'wrap', width: '190px', border: '1px solid #000', padding: '10px', justifyContent: 'space-around', margin: '0 auto'};

  return (
    <div style={styleBoard}>
      {items.map((item: CharacterItems) => {
        return (
          <Cell key={item.id} onClick={() => changeCell(item.id)} onRing={item.hasItem} onChange={item.clicked}/>
        );
      })}
    </div>
  );
};

export default CellBoard;