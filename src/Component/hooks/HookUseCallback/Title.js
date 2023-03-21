import React, { memo } from 'react'

const Title = ({children}) => {
  return (
    <h2>
        {children}
    </h2>
  );
};

export default memo(Title);