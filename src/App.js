import React, {useState, useEffect} from 'react'
import './App.css';
import { Form, Infor } from './component'
import { v4 as uuidv4 } from 'uuid';

// const information = [
//   {
//       name: 'khanh',
//       email: 'khanh@gmail.com'
//   },
//   {
//       name: 'hung',
//       email: 'hung@gmail.com'
//   }
// ]

function App() {

  const KEY_LOCALSTORAGE = "infor";

  const [listInfor, setListinfor] = useState([]);

  const snhanInfor = (infor) => {
    const newList = [...listInfor, {...infor, id: uuidv4()}];
    setListinfor(newList);
    console.log(newList);
  }

  const deleteItem = (id) => {
    const newList = listInfor.filter((item) => {
      return item.id !== id;
    })
    setListinfor(newList);
  }

  useEffect(() => {
    setListinfor(JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)));
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(listInfor));
  }, [listInfor])

  return (
    <div className="App">
      <Form giveInfor={snhanInfor}/>
      <Infor information={listInfor} deleteItem = {deleteItem} />
    </div>
  );
}

export default App;
