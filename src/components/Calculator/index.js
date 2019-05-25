import React, { Fragment, useState } from 'react';
import FormContainer from '../Form';
import ResultContainer from '../Result';

const CalculatorContainer = () => {
  const [downpayment, setDownpayment] = useState(0);

  return (
    <Fragment>
      <FormContainer setDownpayment={setDownpayment} />
      <ResultContainer downpayment={downpayment} />
    </Fragment>
  );
};

export default CalculatorContainer;
