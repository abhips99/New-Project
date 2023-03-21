import React, { memo } from 'react'

const Count = ({children}) => {
  return (
    <h4>
        {children}
    </h4>
  );
};

export default memo(Count);