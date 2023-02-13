import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Listing from './components/Listing'
import data from './data/etsy.json'
function App() {

  const items = data;
  console.log(items[0]);
  return (
    <Listing items={items} />
  )
}

export default App
