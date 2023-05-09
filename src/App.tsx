import React, {useState} from 'react';

// Classes
import Field from './Field';

// Components
import FieldTile from './components/fieldTile/FieldTile';
import FieldKey from './components/fieldKey/FieldKey';
import MessageConsole from './components/messageConsole/MessageConsole';

// Styling
import './App.css';

const field = new Field(); 

function App() {

  const [messages, setMessages] = useState(['Welcome to the game']);

  return (
    <div className="App">
      <div className="field">
        {field.tiles.map(fieldRow => {
          return (<div className="field__row">
            {fieldRow.map(tile => {
              return <FieldTile tile={tile} setMessages={setMessages} messages={messages}/> 
            })}
          </div>)
        })}
      </div>
      <div>
        <FieldKey />
        <MessageConsole messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
