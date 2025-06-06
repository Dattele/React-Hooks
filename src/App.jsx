import React, { useState } from 'react';
import HookData from './data/HookData';
import Slide from './components/Slide';

import './App.css'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(1);
  
  return (
    <Slide hook={HookData[activeIndex]} />
  );
}
