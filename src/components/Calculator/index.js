import React, { useState } from 'react';
import Calculator from './Calculator';

const FIRST_TIER_MAX_PRICE = 500000;
const SECOND_TIER_MAX_PRICE = 999999;
const FIRST_TIER_PERCENTAGE = 0.05;
const SECOND_TIER_PERCENTAGE = 0.1;
const THIRD_TIER_PERCENTAGE = 0.2;
const maxFirstTierPayment = FIRST_TIER_MAX_PRICE * FIRST_TIER_PERCENTAGE;

const CalculatorContainer = () => {
  const [price, setPrice] = useState();
  const [downpayment, setDownpayment] = useState(0);
  const [showResult, toggleShowResult] = useState(false);

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
    setDownpayment(downpayment);
    toggleShowResult(true);
  };

  const checkAnotherPrice = () => {
    toggleShowResult(false);
  };

  return (
    <Calculator
      onSubmit={onSubmit}
      price={price}
      onPriceChange={onPriceChange}
      downpayment={downpayment}
      showResult={showResult}
      checkAnotherPrice={checkAnotherPrice}
    />
  );
};

export default CalculatorContainer;
