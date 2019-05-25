import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CalculatorContainer from '../Calculator';

const styles = {
  mainWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  }
};

const App = () => {
  return (
    <div style={styles.mainWrapper}>
      <CssBaseline />
      <CalculatorContainer />
    </div>
  );
};

export default App;
