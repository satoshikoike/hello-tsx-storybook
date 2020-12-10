import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

// type Action = {
//   type: 'INCREMENT' | 'DECREMENT';
//   payload: number;
// };

// interface CounterProps {
//   counter: number;
//   increment: () => Action;
//   decrement: () => Action;
// }

const selector = (state: { counter: number }) => state.counter;

export const Counter: React.FC = () => {
  const counter = useSelector(selector);
  const dispatch = useDispatch();

  return (
    <div>
      {counter}
      <Button
        type="primary"
        onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
      >
        +
      </Button>
      <Button
        type="primary"
        onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}
      >
        -
      </Button>
    </div>
  );
};

// const mapStateToProps = (state: { counter: number }) => {
//   return {
//     counter: state.counter,
//   };
// };

// const increment = (): Action => ({
//   type: 'INCREMENT',
//   payload: 1,
// });

// const decrement = (): Action => ({
//   type: 'DECREMENT',
//   payload: 1,
// });

// const mapDispatchToProps = { increment, decrement };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
