import React,{useContext} from 'react'
import CompoD from './CompoD';
import { users } from './HookUseContext';

const CompoC = () => {
    const name = useContext(users);
  return (
    <div>CompoC 
        <h2>My Name is {name}</h2>
        <CompoD />
    </div>
  );
};

export default CompoC;