import React, {useState, useEffect} from 'react'
import './App.css';
import { Form, Infor, Header, Child, User} from './component'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

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

  const handleItem = (id, action) => {
    if (action === 1) {
      <Link to="/register" />
    }
    else {
      const newList = listInfor.filter((item) => {
        return item.id !== id;
      })
      setListinfor(newList);
    }
  }

  useEffect(() => {
    setListinfor(JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE)));
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(listInfor));
  }, [listInfor])

  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="contact" element={<Infor information={listInfor} handleItem={handleItem} />} />
            <Route path="form" element={<Form giveInfor={snhanInfor} />} />
            <Route path = ":contactId" element = { <User />} />
          </Route>
        </Routes>
      </Router>
      
      {/* <Form giveInfor={snhanInfor} />
      <Infor information={listInfor} handleItem={handleItem} /> */}
    </div>
  );
}

export default App;
