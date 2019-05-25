import React, { Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';

const Form = props => {
  const disabledSubmit = props.price <= 0;
  return (
    <Fragment>
      <TextField
        label="Cost Of Home"
        onChange={props.onPriceChange}
        value={props.price}
      />
      <Button
        variant="contained"
        onClick={props.onSubmit}
        disabled={disabledSubmit}
      >
        Submit
      </Button>
    </Fragment>
  );
};

export default Form;
