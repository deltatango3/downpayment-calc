import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import Result from '../Result/Result';
import Form from '../Form/Form';

const styles = {
  container: {
    width: '95%',
    margin: '2rem auto'
  }
};

const Calculator = props => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={props.classes.container}
      spacing={24}
    >
      <Grid item>
        <Typography
          variant="h4"
          align="center"
          style={{ maxWidth: '600px', fontWeight: '600' }}
        >
          Find out the downpayment for your dream home
        </Typography>
      </Grid>
      <Form
        price={props.price}
        onPriceChange={props.onPriceChange}
        onSubmit={props.onSubmit}
      />
      {/* <Result
        downpayment={props.downpayment}
        checkAnotherPrice={props.checkAnotherPrice}
      /> */}
    </Grid>
  );
};

export default withStyles(styles)(Calculator);
