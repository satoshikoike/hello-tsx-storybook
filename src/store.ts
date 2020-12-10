import { createStore } from 'redux';
import { reducer } from './pages/Counter/reducer';
// type RootState = {
//   counter: number;
// };

export const store = createStore(reducer);
