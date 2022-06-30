import React, { useState, useMemo, useCallback } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  },[]);
  const changeSortHandler =() => {
    
    setListTitle((prev)=>{
      if(prev === 'Decending Order'){
        return 'Ascending Order'
      }else if(prev === 'Ascending Order'){
        return 'Decending Order'
      }
    return "Decending Order"});
  };
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeSortHandler}>{listTitle === 'Decending Order'?'Change To Ascending Order':'Change To Decending Order'}</Button>
    </div>
  );
}

export default App;