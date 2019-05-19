import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

const Form = props => {
  const disabledSubmit = props.price <= 0;

  return (
    <Grid
      item
      container
      direction="column"
      spacing={16}
      style={{ maxWidth: '500px' }}
    >
      <Grid item>
        <TextField
          onChange={props.onPriceChange}
          value={props.price}
          variant="outlined"
          placeholder="Price of home"
          fullWidth
          inputProps={{ style: { textAlign: 'center', fontSize: '1.5rem' } }}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={props.onSubmit}
          disabled={disabledSubmit}
          fullWidth
          size="large"
        >
          Calculate
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
