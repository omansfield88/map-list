import React, { useState } from 'react';
import '../App.css';

const SetStateHook = () => {

  const [hookText, setHookText] = useState('Original text');

  const originalNames = {
    firstNames : [
      'Oliver',
      'Stef',
      'Kendal',
      'Quinlan',
      'jt'
    ]
  }
  const [listNames, setListNames] = useState(originalNames);


  const mapNames = () => {
    return (
      listNames.firstNames.map((firstName, i) =>
        <li>{firstName}</li>
      )
    )
  }


  const changeHookText = () => {
    setHookText('new text');
    setListNames({
      firstNames: [
        'JT',
        'Orme',
        'Lizzy',
        'Joe'
      ]
    })
  }

  return (
    <div>
      <button onClick={changeHookText}>{hookText}</button>
      <ul>{mapNames()}</ul>
    </div>
  )
}

export default SetStateHook;
