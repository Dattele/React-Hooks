import React from 'react';
import HookCard from './HookCard';

import './Hooks.css';

const Hooks = ({ hookData, onClick }) => {
  return (
    <div className='Hook-Container'>
      {hookData.map((hook, i) => (
        <HookCard key={i} hook={hook} onClick={() => onClick(hook)} />
      ))}
    </div>
  );
};

export default Hooks;
