import React, { memo } from 'react'
import { Button } from 'reactstrap'

const ButtonS = ({children, onClick}) => {
  return (
    <Button onClick={onClick} color="primary">{children}</Button>
  );
};

export default memo(ButtonS);