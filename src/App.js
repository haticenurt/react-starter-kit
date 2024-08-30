
import { createElement, useState } from 'react';
import './tailwind.css'
import Button from './components/Buttons';
import Tab from './components/Tab';

const searchFunction=()=>{
  alert('hello');
}

function App() {
  const todos=['todo1','todo2','todo3']

const [activeTab,setActiveTab]=useState(1)

  // const h1= createElement('h1',null,'tanriverdi.com')
  // const ul= createElement('ul',null,todos.map(todo=> createElement('li',null,todo)))
  // return createElement('main',{
  //   className: 'test',
  //   id: 'main',
  // },h1,ul)
  return (
  <>
  <div style={{padding: 20}}>
    <button onClick={()=>setActiveTab(2)}>
      Aktif tabı değiştir
    </button>
      <Tab activeTab={1}>
        <Tab.Panel title="Profil">1. tab</Tab.Panel>
        <Tab.Panel title="Hakkinda">2. tab</Tab.Panel>
        <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>

      </Tab>
      
  </div>
    <div style={{padding:20}}>
    <Button>Buton Ornegi</Button>
    <Button variant="danger">Buton Ornegi</Button>
    <Button variant="warning">Buton Ornegi</Button>


    </div>
    <h1 tabIndex="3" style={{color:'red', backgroundColor:'yellow'}}>tanriverdi.com </h1>
    <label htmlFor='search' tabIndex="2">Arama</label>
    <input type='text' id="search" tabIndex="1"/>
    <ul>
      {todos.map((todo,index)=>(
        <li key={index}>
          {todo}

        </li>
      ))}
    </ul>
    </>
  );
}

export default App;
