import React, { Fragment } from 'react';
import { Typography, Grow, Zoom } from '@material-ui/core';
import Btn from '../Button/Button';

const Result = props => {
  return (
    <Fragment>
      <Typography>{props.downpayment}</Typography>
      <Zoom in>
        <Btn
          variant="contained"
          text="Recheck"
          onClick={props.checkAnotherPrice}
        />
      </Zoom>
    </Fragment>
  );
};

export default Result;
