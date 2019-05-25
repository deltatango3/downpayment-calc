import React, { useState } from 'react';
import Form from './Form';

const FIRST_TIER_MAX_PRICE = 500000;
const SECOND_TIER_MAX_PRICE = 999999;
const FIRST_TIER_PERCENTAGE = 0.05;
const SECOND_TIER_PERCENTAGE = 0.1;
const THIRD_TIER_PERCENTAGE = 0.2;
const maxFirstTierPayment = FIRST_TIER_MAX_PRICE * FIRST_TIER_PERCENTAGE;

const FormContainer = props => {
  const [price, setPrice] = useState(0);

  const onPriceChange = event => {
    setPrice(event.target.value);
  };

  const getDownpayment = () => {
    if (price > SECOND_TIER_MAX_PRICE) {
      const downpayment = price * THIRD_TIER_PERCENTAGE;
      return downpayment;
    }
    if (price > FIRST_TIER_MAX_PRICE) {
      const remainingPrice = price - FIRST_TIER_MAX_PRICE;
      const remainingPayment = remainingPrice * SECOND_TIER_PERCENTAGE;
      const downpayment = maxFirstTierPayment + remainingPayment;
      return downpayment;
    }
    return price * FIRST_TIER_PERCENTAGE;
  };

  const onSubmit = () => {
    const downpayment = getDownpayment();
    props.setDownpayment(downpayment);
  };

  return (
    <Form price={price} onPriceChange={onPriceChange} onSubmit={onSubmit} />
  );
};

export default FormContainer;
