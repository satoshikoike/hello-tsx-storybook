import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

type Action = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
};

interface CounterProps {
  counter: number;
  increment: () => Action;
  decrement: () => Action;
}

const Counter: React.FC<CounterProps> = ({ counter, increment, decrement }) => (
  <div>
    {counter}
    <Button type="primary" onClick={increment}>
      +
    </Button>
    <Button type="primary" onClick={decrement}>
      -
    </Button>
  </div>
);

const mapStateToProps = (state: { counter: number }) => {
  return {
    counter: state.counter,
  };
};

const increment = (): Action => ({
  type: 'INCREMENT',
  payload: 1,
});

const decrement = (): Action => ({
  type: 'DECREMENT',
  payload: 1,
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
