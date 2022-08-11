import { useState, useEffect } from 'react'
import Item from './Item'
import './bootstrap.css'
import './App.css'
import { db } from "./firebase.js";
import {
  collection,
  onSnapshot
} from "firebase/firestore";

function App() {
  const [items, setItems] = useState([
    {
       AQI: 'Loading...',
       CO: 'Loading...',
       Humd: 'Loading...',
       NO2: 'Loading...',
       O3: 'Loading...',
       Pm10: 'Loading...',
       Pm25: 'Loading...',
       SO2: 'Loading...',
       Temp: 'Loading...',
       id: 'Loading...'
    }
  ])

  const ItemsCollectionRef = collection(db, "stations")

  useEffect(
    () => onSnapshot(ItemsCollectionRef, (snapshot) => {
        setItems(snapshot.docs.map(doc => ({ 
            ...doc.data(),
             id: doc.id 
          })))
      })
    , []);
    
  return (
    <div className="App d-flex flex-column align-items-center">
      <header className="App-header" onClick={
          (e) => {
            e.preventDefault()
            alert("This is a personal website of M.T")
          }
        }>
          Quan trắc chất lượng không khí
      </header>
      <div className="d-flex justify-content-around w-100 flex-wrap">
        {
          items.map((item, index) => (
            <Item key={index} index={index} {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default App
