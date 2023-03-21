import React from 'react'
import CompoE from './CompoE';
import { users } from "./HookUseContext";

const CompoD = () => {
  return (
    <div>CompoD 
        <users.Consumer>
            {(n) => {
                return <h2>{n}</h2>
            }}
        </users.Consumer>
        <CompoE />
    </div>
  );
};

export default CompoD;