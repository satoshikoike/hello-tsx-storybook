type Action = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
};

const initialState = {
  counter: 0,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return {
        counter: state.counter + action.payload,
      };
    }
    case 'DECREMENT': {
      return {
        counter: state.counter - action.payload,
      };
    }
    default:
      return state;
  }
};
