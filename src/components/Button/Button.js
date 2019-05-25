import React from 'react';
import { Button } from '@material-ui/core';

const Btn = props => {
  return (
    <Button
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </Button>
  );
};

export default Btn;
